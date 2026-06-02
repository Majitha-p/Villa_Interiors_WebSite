import React from 'react'

export const BluePrint = () => {
    return (
        <div>
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06] text-primary"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="site-blueprint-grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                        />
                    </pattern>
                </defs>

                <rect width="800" height="600" fill="url(#site-blueprint-grid)" />

                <rect
                    x="120"
                    y="120"
                    width="240"
                    height="180"
                    stroke="currentColor"
                    strokeWidth="1"
                />

                <rect
                    x="160"
                    y="160"
                    width="80"
                    height="100"
                    stroke="currentColor"
                    strokeWidth="1"
                />

                <rect
                    x="260"
                    y="160"
                    width="60"
                    height="60"
                    stroke="currentColor"
                    strokeWidth="1"
                />

                <circle
                    cx="500"
                    cy="350"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="1"
                />

                <circle
                    cx="500"
                    cy="350"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="1"
                />

                <line
                    x1="420"
                    y1="350"
                    x2="580"
                    y2="350"
                    stroke="currentColor"
                    strokeWidth="1"
                />

                <line
                    x1="500"
                    y1="270"
                    x2="500"
                    y2="430"
                    stroke="currentColor"
                    strokeWidth="1"
                />

                <rect
                    x="600"
                    y="120"
                    width="120"
                    height="200"
                    stroke="currentColor"
                    strokeWidth="1"
                />

                <line
                    x1="600"
                    y1="180"
                    x2="720"
                    y2="180"
                    stroke="currentColor"
                    strokeWidth="1"
                />

                <line
                    x1="600"
                    y1="240"
                    x2="720"
                    y2="240"
                    stroke="currentColor"
                    strokeWidth="1"
                />
            </svg>
        </div>
    )
}
