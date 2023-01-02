export type ChartFilter = Partial<{
  sex: "male" | "female" | null;
  element: 'earth' | 'fire' | 'air' | 'water' | null;
  quality: 'fixed' | 'mutable' | 'cardinal' | null;
  specialization: string | null;
}>
