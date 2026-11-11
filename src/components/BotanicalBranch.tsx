import React from 'react';

interface BotanicalBranchProps {
  className?: string;
  width?: number;
  height?: number;
  flip?: boolean;
}

export const BotanicalBranch: React.FC<BotanicalBranchProps> = ({
  className = '',
  width = 60,
  height = 36,
  flip = false
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        transform: flip ? 'scaleX(-1)' : 'none',
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0
      }}
      aria-hidden="true"
    >
      {/* Curved Stem */}
      <path
        d="M6 38 C25 35 48 24 74 8"
        stroke="#425838"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Leaf 1 (Top) */}
      <path
        d="M26 32 C26 20 38 15 46 16 C46 26 36 32 26 32 Z"
        fill="#537248"
        stroke="#3F5836"
        strokeWidth="1.2"
      />
      {/* Leaf 2 (Bottom) */}
      <path
        d="M40 28 C45 38 56 42 64 38 C62 30 52 26 40 28 Z"
        fill="#628356"
        stroke="#48633F"
        strokeWidth="1.2"
      />
      {/* Leaf 3 (Tip) */}
      <path
        d="M58 17 C62 8 72 6 78 8 C77 17 68 20 58 17 Z"
        fill="#537248"
        stroke="#3F5836"
        strokeWidth="1.2"
      />
      {/* Small side leaf */}
      <path
        d="M14 36 C13 28 20 25 24 26 C23 32 18 36 14 36 Z"
        fill="#628356"
        stroke="#48633F"
        strokeWidth="1"
      />
      {/* Coffee Cherries / Berries */}
      <circle cx="28" cy="33" r="3" fill="#2E1D15" />
      <circle cx="43" cy="27" r="3.2" fill="#8C3A2B" />
      <circle cx="58" cy="18" r="3" fill="#2E1D15" />
    </svg>
  );
};
