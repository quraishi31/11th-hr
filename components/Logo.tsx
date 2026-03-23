import { useId } from 'react'

export function Logo({ className = 'h-14 w-auto' }: { className?: string }) {
  const gradientId = useId()

  return (
    <svg
      viewBox="0 0 420 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="11th Hour"
      role="img"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00c2a5', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00e0c0', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <rect x="18" y="22" rx="18" ry="18" width="76" height="76" fill={`url(#${gradientId})`} />
      <rect x="40" y="38" width="7" height="43" fill="white" />
      <rect x="58" y="38" width="7" height="43" fill="white" />
      <path
        d="M34 68 A28 28 0 0 1 78 68"
        stroke="white"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />

      <text
        x="122"
        y="64"
        fontFamily="Sora, Arial, sans-serif"
        fontSize="38"
        fontWeight="700"
        letterSpacing="6"
        fill="white"
      >
        11TH HOUR
      </text>
    </svg>
  )
}
