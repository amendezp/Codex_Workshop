interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 ${className}`}>
      {children}
    </div>
  );
}
