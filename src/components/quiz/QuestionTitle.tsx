import type { ReactNode } from "react";

export function QuestionTitle({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl sm:text-4xl text-primary leading-tight">
        {children}
      </h1>
      {subtitle && (
        <p className="text-muted-foreground mt-3 text-sm sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
