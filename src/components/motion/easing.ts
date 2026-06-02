// Structural easing curves — heavy, precise, no bounce.
// Use these across all motion to keep the brand language consistent.

export const EASE_STRUCT = [0.16, 1, 0.3, 1] as const;        // power-out, settles with weight
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;     // crisp resolve
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;      // alias
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;       // mechanical bidirectional
