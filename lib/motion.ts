import { Easing } from "framer-motion";

/**
 * Shared Framer Motion ease curves typed explicitly as Easing
 * so they don't widen to number[] in object literals.
 */
export const EASE_OUT: Easing = [0.4, 0, 0.2, 1];
export const EASE_IN_OUT: Easing = [0.22, 1, 0.36, 1];
