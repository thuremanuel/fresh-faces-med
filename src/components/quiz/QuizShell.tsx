import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  progress: number; // 0..1
  backTo?: string;
  children: ReactNode;
};

export function QuizShell({ progress, backTo, children }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur px-4 pt-4 pb-3">
        <div className="max-w-xl mx-auto flex items-center gap-3">
          {backTo ? (
            <Link to={backTo} className="text-primary -ml-1 p-1">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          ) : (
            <span className="w-7" />
          )}
          <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${Math.max(4, progress * 100)}%` }}
            />
          </div>
        </div>
      </header>
      <main className="max-w-xl mx-auto px-5 pt-10 pb-12">{children}</main>
    </div>
  );
}
