// Lightweight quiz state shared across pages via localStorage.
// No backend required — the funnel is purely client-side.

export type QuizAnswers = {
  name?: string;
  weightToLose?: string;
  goal?: string;
  currentBody?: string;
  desiredBody?: string;
  bodyParts?: string[];
  unhappyDuration?: string;
  fastingKnowledge?: string;
  breakfastTime?: string;
  lunchTime?: string;
  dinnerTime?: string;
  diet?: string;
  cookOrEatOut?: string;
  weekendFasting?: string;
  exerciseFrequency?: string;
  canClimbStairs?: string;
  walkingFrequency?: string;
  workDay?: string;
  workActivity?: string;
};

const KEY = "vitameno_quiz";

export function loadQuiz(): QuizAnswers {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function saveQuiz(patch: Partial<QuizAnswers>) {
  if (typeof window === "undefined") return;
  const current = loadQuiz();
  localStorage.setItem(KEY, JSON.stringify({ ...current, ...patch }));
}

export function clearQuiz() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
