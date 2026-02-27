interface DropCapProps {
  children: React.ReactNode;
  className?: string;
}

export default function DropCap({ children, className = "" }: DropCapProps) {
  return (
    <p className={`drop-cap font-body text-lg leading-[1.8] text-ink ${className}`}>
      {children}
    </p>
  );
}
