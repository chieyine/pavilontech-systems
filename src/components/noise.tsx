export function Noise() {
  const data =
    "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27220%27%20height%3D%27220%27%3E%3Cfilter%20id%3D%27n%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%27.9%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27220%27%20height%3D%27220%27%20filter%3D%27url(%2523n)%27%20opacity%3D%27.55%27%2F%3E%3C%2Fsvg%3E";
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] [mix-blend-mode:overlay]"
      style={{ backgroundImage: `url("${data}")` }}
    />
  );
}

