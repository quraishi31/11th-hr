

export function Logo({ className = "h-14 w-auto" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 420 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#00c2a5', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#00e0c0', stopOpacity: 1 }} />
                </linearGradient>
            </defs>

            {/* Icon background */}
            <rect x="20" y="25" rx="14" ry="14" width="70" height="70" fill="url(#logo-grad)" />

            {/* Stylized 11 */}
            <rect x="40" y="40" width="6" height="40" fill="white" />
            <rect x="55" y="40" width="6" height="40" fill="white" />

            {/* Subtle clock arc */}
            <path
                d="M35 65 A25 25 0 0 1 75 65"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
            />

            {/* Brand text - changed fill to white for the dark nav */}
            {/* <text
                x="110"
                y="75"
                fontFamily="Poppins, Arial, sans-serif"
                fontSize="44"
                fontWeight="600"
                fill="white"
            >
                11th Hour
            </text> */}
        </svg>
    )
}