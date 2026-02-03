'use client';

import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  id?: string;
}

export default function GlitchText({
  text,
  className,
  as: Component = 'span',
  id,
}: GlitchTextProps) {
  return (
    <Component
      id={id}
      className={cn('glitch', className)}
      data-text={text}
    >
      {text}
    </Component>
  );
}
