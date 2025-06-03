import { cn } from '../cn';

export const EyeCatchingButton_v3 = ({ className = '', ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'border-[1px] rounded-lg bg-clip-text text-transparent dark:text-transparent animate-bg-shine bg-[length:250%_100%] shadow font-bold tracking-wide duration-[2200ms]',
        'dark:bg-[linear-gradient(110deg,#D4D4D8,45%,#27272A,55%,#D4D4D8)] dark:border-zinc-800',
        'bg-[linear-gradient(110deg,#09090B,45%,#fff,55%,#09090B)] border-zinc-300',
        className
      )}
    />
  );
};
