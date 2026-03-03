export default function Icon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="pavilontech-grad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4E5CF6" />
          <stop offset="100%" stopColor="#36C98C" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="9"
        fill="url(#pavilontech-grad)"
      />
      <path
        d="M11 21.5V10.5h3.4c1.9 0 3.1 1.1 3.1 2.7 0 1.3-.8 2.1-1.7 2.4 1.1.3 1.9 1.2 1.9 2.6 0 1.7-1.2 3.3-3.6 3.3H11Zm2.1-7.2h1.1c.9 0 1.4-.5 1.4-1.3 0-.8-.5-1.2-1.4-1.2h-1.1v2.5Zm0 5.6h1.4c1.1 0 1.7-.6 1.7-1.6 0-1-.7-1.6-1.8-1.6h-1.3v3.2Z"
        fill="#0B0B11"
      />
    </svg>
  );
}

