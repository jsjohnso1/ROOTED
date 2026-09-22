type BookCoverArtProps = {
  className?: string;
};

/**
 * Original geometric line-art rendition of the ROOTED cover concept —
 * a branching root motif in gold linework on a deep slate panel.
 * Swap for the real cover photo (e.g. an <Image> of /book-cover.jpg) once available.
 */
export function BookCoverArt({ className = "" }: BookCoverArtProps) {
  return (
    <svg
      viewBox="0 0 400 600"
      className={className}
      role="img"
      aria-label="ROOTED book cover — geometric root line art on a deep slate background"
    >
      <defs>
        <linearGradient id="cover-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="cover-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2B84B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>

      <rect x="4" y="4" width="392" height="592" rx="18" fill="url(#cover-bg)" />
      <rect
        x="16"
        y="16"
        width="368"
        height="568"
        rx="10"
        fill="none"
        stroke="#D97706"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />

      {/* Root / branch linework, fanning down from the title */}
      <g stroke="url(#cover-gold)" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M200 330 L200 400" />
        <path d="M200 400 L140 460" />
        <path d="M200 400 L260 460" />
        <path d="M140 460 L95 510" />
        <path d="M140 460 L150 525" />
        <path d="M260 460 L305 510" />
        <path d="M260 460 L250 525" />
        <path d="M95 510 L70 550" />
        <path d="M95 510 L110 555" />
        <path d="M305 510 L330 550" />
        <path d="M305 510 L290 555" />
      </g>
      <g fill="#D97706">
        <circle cx="200" cy="400" r="4" />
        <circle cx="140" cy="460" r="3.5" />
        <circle cx="260" cy="460" r="3.5" />
        <circle cx="95" cy="510" r="3" />
        <circle cx="305" cy="510" r="3" />
      </g>

      {/* Title block */}
      <text
        x="200"
        y="240"
        textAnchor="middle"
        fontSize="56"
        fontWeight="700"
        letterSpacing="4"
        fill="#F8FAFC"
        fontFamily="var(--font-display), sans-serif"
      >
        ROOTED
      </text>
      <rect x="150" y="264" width="100" height="3" fill="#D97706" />
      <text
        x="200"
        y="296"
        textAnchor="middle"
        fontSize="14"
        letterSpacing="2"
        fill="#CBD5E1"
        fontFamily="var(--font-sans), sans-serif"
      >
        52-WEEK YOUTH MINISTRY CURRICULUM
      </text>

      <text
        x="200"
        y="560"
        textAnchor="middle"
        fontSize="12"
        fontStyle="italic"
        fill="#94A3B8"
        fontFamily="var(--font-sans), sans-serif"
      >
        &ldquo;Let your roots grow down into Him.&rdquo; — Colossians 2:7
      </text>
    </svg>
  );
}
