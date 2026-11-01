import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// shadcn's class helper, which the Watermelon blocks expect
export const cn = (...inputs) => twMerge(clsx(inputs));
