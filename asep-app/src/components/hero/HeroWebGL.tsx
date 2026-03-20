import { useEffect, useRef } from 'react';

const HeroWebGL = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      console.warn('WebGL unavailable');
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const mouse = { x: 0.5, y: 0.5 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
    };
    document.addEventListener('mousemove', handleMouseMove);

    const VS = `
      attribute vec2 a_pos;
      void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
    `;

    const FS = `
      #ifdef GL_ES
      precision highp float;
      #endif

      uniform float u_time;
      uniform vec2  u_resolution;
      uniform vec2  u_mouse;

      mat2 rot(float a) {
        float s = sin(a), c = cos(a);
        return mat2(c, -s, s, c);
      }

      float sdSphere(vec3 p, float r) { return length(p) - r; }
      float sdTorus(vec3 p, vec2 t) {
        vec2 q = vec2(length(p.xz) - t.x, p.y);
        return length(q) - t.y;
      }
      
      float opSmoothUnion(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
        return mix(b, a, h) - k * h * (1.0 - h);
      }

      float opSmoothSub(float a, float b, float k) {
        float h = clamp(0.5 - 0.5 * (b + a) / k, 0.0, 1.0);
        return mix(b, -a, h) + k * h * (1.0 - h);
      }

      float displacement(vec3 p, float t) {
        return sin(4.0 * p.x + t) * sin(4.0 * p.y + t * 0.7) * sin(4.0 * p.z + t * 1.3) * 0.12;
      }

      float scene(vec3 p) {
        float t = u_time * 0.45;

        p.xy *= rot(t * 0.2 + (u_mouse.x - 0.5) * 0.6);
        p.yz *= rot(t * 0.15 + (u_mouse.y - 0.5) * 0.4);

        float core = sdSphere(p, 0.95 + 0.08 * sin(t * 1.2));
        core += displacement(p * 3.0, t);

        float ridges = sdSphere(p + vec3(
          0.3 * sin(t * 0.5 + p.z * 5.0),
          0.3 * cos(t * 0.4 + p.x * 5.0),
          0.0
        ), 0.6);
        core = opSmoothSub(ridges, core, 0.25);

        float inner = sdSphere(p, 0.55 + 0.1 * sin(t * 1.8));

        vec3 r1 = p; r1.xz *= rot(t * 0.6); float ring1 = sdTorus(r1, vec2(1.45, 0.035));
        vec3 r2 = p; r2.xy *= rot(t * 0.4 + 1.57); float ring2 = sdTorus(r2, vec2(1.55, 0.03));
        vec3 r3 = p; r3.yz *= rot(t * 0.5 + 3.14); float ring3 = sdTorus(r3, vec2(1.35, 0.025));

        float nodes = 1e5;
        for (float i = 0.0; i < 8.0; i++) {
          float angle = t * (0.3 + i * 0.1) + i * 0.7854;
          float rad = 1.5 + 0.2 * sin(t * 0.8 + i);
          float yOff = 0.4 * sin(angle * 0.5 + t * 0.3);
          vec3 np = vec3(cos(angle) * rad, yOff, sin(angle) * rad);
          nodes = min(nodes, sdSphere(p - np, 0.05 + 0.015 * sin(t * 2.0 + i)));
        }

        float d = opSmoothUnion(core, inner, 0.35);
        d = opSmoothUnion(d, ring1, 0.08);
        d = opSmoothUnion(d, ring2, 0.08);
        d = opSmoothUnion(d, ring3, 0.08);
        d = opSmoothUnion(d, nodes, 0.15);

        return d;
      }

      vec3 calcNormal(vec3 p) {
        vec2 e = vec2(0.001, 0.0);
        return normalize(vec3(
          scene(p + e.xyy) - scene(p - e.xyy),
          scene(p + e.yxy) - scene(p - e.yxy),
          scene(p + e.yyx) - scene(p - e.yyx)
        ));
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
        float t = u_time;
        vec3 ro = vec3(0.0, 0.0, 4.2);
        vec3 rd = normalize(vec3(uv, -1.7));

        float totalDist = 0.0; float d; vec3 p; bool hit = false;
        for (int i = 0; i < 80; i++) {
          p = ro + rd * totalDist;
          d = scene(p);
          if (d < 0.001) { hit = true; break; }
          if (totalDist > 18.0) break;
          totalDist += d;
        }

        vec3 col = vec3(0.0);
        if (hit) {
          vec3 n = calcNormal(p);
          vec3 l1 = normalize(vec3(1.0, 1.2, 0.8));
          vec3 l2 = normalize(vec3(-1.0, -0.4, 0.6));
          vec3 l3 = normalize(vec3(0.3, 1.0, -1.0));

          float diff1 = max(dot(n, l1), 0.0);
          float diff2 = max(dot(n, l2), 0.0);
          float diff3 = max(dot(n, l3), 0.0);

          float fresnel = pow(1.0 - max(dot(n, -rd), 0.0), 3.0);
          vec3 refl = reflect(rd, n);
          float spec1 = pow(max(dot(refl, l1), 0.0), 40.0);
          float spec2 = pow(max(dot(refl, l2), 0.0), 20.0);

          vec3 c1 = vec3(0.23, 0.51, 0.96);  
          vec3 c2 = vec3(0.02, 0.84, 0.63);  
          vec3 c3 = vec3(0.55, 0.36, 0.96);  

          vec3 matCol = mix(c1, c2, 0.5 + 0.5 * sin(p.y * 3.5 + t * 0.4));
          matCol = mix(matCol, c3, 0.5 + 0.5 * cos(p.x * 2.5 - t * 0.3));

          col = matCol * (diff1 * 0.55 + diff2 * 0.25 + diff3 * 0.2);
          col += spec1 * vec3(1.0) * 0.45;
          col += spec2 * c2 * 0.25;
          col += fresnel * mix(c1, c3, 0.5) * 0.55;

          float ao = 1.0;
          for (int i = 1; i <= 5; i++) {
            float fi = float(i); float expected = fi * 0.05;
            ao -= (expected - scene(p + n * expected)) / pow(2.0, fi);
          }
          col *= max(ao, 0.3);
          col += matCol * 0.06;
        }

        if (!hit) {
          float glow = 0.0;
          for (int i = 0; i < 55; i++) {
            p = ro + rd * (float(i) * 0.13);
            float dd = scene(p);
            glow += 0.012 / (0.4 + dd * dd * 7.0);
          }
          vec3 glowCol = mix(vec3(0.23, 0.51, 0.96), vec3(0.02, 0.84, 0.63), 0.5 + 0.5 * sin(uv.x * 3.5 + t));
          col += glowCol * glow * 0.55;
        }

        col *= 1.0 - 0.35 * length(uv * 0.75);
        col = col / (col + vec3(1.0));
        col = pow(col, vec3(0.4545));
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const createShader = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    };

    const vs = createShader(gl.VERTEX_SHADER, VS);
    const fs = createShader(gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;

    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1,-1, 1,-1, -1,1, -1, 1, 1,-1, 1,1
    ]), gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes  = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let animationFrameId: number;
    const start = performance.now();

    const render = () => {
      const t = (performance.now() - start) / 1000;
      resizeCanvas();

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouse.x, mouse.y);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="hero-3d-canvas"
      ref={canvasRef}
      className="w-full aspect-square max-w-[580px] rounded-[28px]"
    />
  );
};

export default HeroWebGL;
