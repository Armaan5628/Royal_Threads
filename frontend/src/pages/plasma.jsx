import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Geometry } from "ogl";
import "./Plasma.css";

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertex = `#version 300 es
precision highp float;
in vec2 position;
out vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform float iTime;
uniform vec2 iResolution;
uniform vec3 uColor;
out vec4 fragColor;
void main() {
  vec2 uv = gl_FragCoord.xy / iResolution;
  vec2 center = vec2(0.5);
  float dist = distance(uv, center);
  float glow = 0.3 + 0.7*sin(iTime*2.0 + dist*10.0);
  fragColor = vec4(uColor * glow, 1.0 - dist*0.5);
}
`;

export const Plasma = ({ color = "#ff6b35", speed = 1 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const rgb = hexToRgb(color);
    const renderer = new Renderer({ dpr: 2, alpha: true });
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    const geometry = new Geometry(gl, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([gl.canvas.width, gl.canvas.height]) },
        uColor: { value: new Float32Array(rgb) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const { width, height } = containerRef.current.getBoundingClientRect();
      renderer.setSize(width, height);
      program.uniforms.iResolution.value[0] = width;
      program.uniforms.iResolution.value[1] = height;
    };
    resize();
    window.addEventListener("resize", resize);

    let start = performance.now();
    const loop = (t) => {
      program.uniforms.iTime.value = (t - start) * 0.001 * speed;
      renderer.render({ scene: mesh });
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      containerRef.current.removeChild(gl.canvas);
    };
  }, [color, speed]);

  return <div ref={containerRef} className="plasma-container" />;
};

export default Plasma;
