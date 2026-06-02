const SolutionsMask = ({ maskBg, scale, opacity }) => {
  return (
    <div
      className="absolute inset-0 z-10 flex items-center justify-center"
      style={{
        opacity,
        transform: `scale(${scale})`,
        transformOrigin: "center",
      }}
    >
      <svg
        viewBox="0 0 1440 900"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id="textMask">
            <rect width="1440" height="900" fill="white" />

            {["OUR", "INTERIOR", "SOLUTIONS"].map((text, i) => (
              <text
                key={i}
                x="50%"
                y={35 + i * 17 + "%"}
                fill="black"
                textAnchor="middle"
                fontSize="160"
                fontWeight="700"
              >
                {text}
              </text>
            ))}
          </mask>
        </defs>

        <image
          href={maskBg}
          width="1440"
          height="900"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#textMask)"
        />

        {["OUR", "INTERIOR", "SOLUTIONS"].map((text, i) => (
          <text
            key={i}
            x="50%"
            y={35 + i * 17 + "%"}
            fill="transparent"
            stroke="white"
            strokeWidth="2"
            textAnchor="middle"
            fontSize="160"
            fontWeight="700"
          >
            {text}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default SolutionsMask;