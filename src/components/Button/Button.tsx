import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'secondary-dark';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  'secondary-dark': styles.secondaryDark,
};

export function Button({ variant = 'primary', icon, children, className, ...props }: ButtonProps) {
  return (
    <button
      className={[styles.button, variantStyles[variant], className].filter(Boolean).join(' ')}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
    </button>
  );
}
