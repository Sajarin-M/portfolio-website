import { browser } from '$app/environment';
import { readable } from 'svelte/store';

export const breakpoints = {
  default: 0,
  xs: 450,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

const keys = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', 'default'] as const;

export type Breakpoint = (typeof keys)[number];
export type ScreenInfo = {
  size: number;
  breakpoint: Breakpoint;
};

const getScreenInfo = () => ({
  breakpoint: keys.find((key) => breakpoints[key] <= window.screen.width) ?? 'default',
  size: window.screen.width,
});

let defaultValue: ScreenInfo = {
  size: 0,
  breakpoint: 'default',
};

if (browser) {
  defaultValue = getScreenInfo();
}

export const screen = readable(defaultValue, (set) => {
  if (browser) {
    const update = () => set(getScreenInfo());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }
});

export function responsive<T>(
  config: Partial<Record<Breakpoint, T>>,
  currentBreakpoint: Breakpoint,
) {
  const availableKeys = Object.keys(config) as Breakpoint[];
  availableKeys.sort((a, b) => keys.indexOf(a) - keys.indexOf(b));
  const suitableBreakpoint = availableKeys.find(
    (key) => breakpoints[key] <= breakpoints[currentBreakpoint],
  );

  if (suitableBreakpoint) {
    return config[suitableBreakpoint];
  }
  return config['default'];
}

export function remToPx(value: number) {
  return value * 16;
}
