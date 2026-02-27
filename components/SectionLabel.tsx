interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-red">
      {children}
    </span>
  );
}
