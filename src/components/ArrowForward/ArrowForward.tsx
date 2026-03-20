import type { SVGProps } from 'react';

type ArrowForwardProps = SVGProps<SVGSVGElement>;

export function ArrowForward({ style, ...props }: ArrowForwardProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: 'var(--color-text-primary)', ...style }}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M 8.3703 6.18749 L 0 6.18749 L 0 4.81249 L 8.3703 4.81249 L 4.5203 0.962498 L 5.49999 0 L 11 5.49999 L 5.49999 11 L 4.5203 10.0375 L 8.3703 6.18749 Z"
        fill="currentColor"
      />
    </svg>
  );
}
