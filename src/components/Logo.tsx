export default function Logo({ size = "lg" }: { size?: "lg" | "sm" }) {
  const isLarge = size === "lg";

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isLarge ? "w-20 h-20 md:w-24 md:h-24" : "w-10 h-10"}
    >
      {/* Outer glow */}
      <circle cx="40" cy="40" r="38" fill="#FFF7ED" />

      {/* Sun rays */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <line
          key={angle}
          x1="40"
          y1="40"
          x2={40 + 36 * Math.cos((angle * Math.PI) / 180)}
          y2={40 + 36 * Math.sin((angle * Math.PI) / 180)}
          stroke="#FB923C"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      ))}

      {/* Main sun circle */}
      <circle cx="40" cy="40" r="26" fill="url(#sunGradient)" />

      {/* Inner highlight */}
      <circle cx="36" cy="34" r="18" fill="url(#sunHighlight)" opacity="0.4" />

      {/* Window pane cross */}
      <rect x="28" y="28" width="24" height="24" rx="3" fill="none" stroke="white" strokeWidth="2.5" opacity="0.9" />
      <line x1="40" y1="28" x2="40" y2="52" stroke="white" strokeWidth="2" opacity="0.9" />
      <line x1="28" y1="40" x2="52" y2="40" stroke="white" strokeWidth="2" opacity="0.9" />

      {/* Tint on bottom-right pane */}
      <rect x="41" y="41" width="10" height="10" rx="1" fill="white" opacity="0.25" />

      {/* Subtle text arc - JS */}
      <text
        x="40"
        y="43"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontWeight="800"
        fontSize="14"
        fontFamily="system-ui, sans-serif"
        opacity="0"
      >
        JS
      </text>

      <defs>
        <radialGradient id="sunGradient" cx="0.4" cy="0.35" r="0.65">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="50%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#EA580C" />
        </radialGradient>
        <radialGradient id="sunHighlight" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
