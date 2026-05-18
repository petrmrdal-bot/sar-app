import * as React from 'react';

import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------
 * Input
 * Form text field with accessible labels, states, and consistent
 * sizing. Always pair with a <label> or aria-label in production.
 * ------------------------------------------------------------------ */

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Base layout
          'flex w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900',
          'shadow-sm transition-colors duration-150',
          // Placeholder
          'placeholder:text-neutral-400',
          // Focus
          'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20',
          // Disabled
          'disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400',
          // Invalid / error state (use aria-invalid or data attribute)
          'aria-[invalid=true]:border-error-500 aria-[invalid=true]:focus:border-error-500 aria-[invalid=true]:focus:ring-error-500/20',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
