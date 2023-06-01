import type { Action } from 'svelte/action';

const wheel: Action<HTMLElement, { scrollable: boolean }> = (node, options) => {
  let scrollable = options?.scrollable ?? true;

  const handler = (e: WheelEvent) => {
    if (!scrollable) e.preventDefault();
  };

  node.addEventListener('wheel', handler, { passive: false });

  return {
    update(options) {
      scrollable = options.scrollable;
    },
    destroy() {
      node.removeEventListener('wheel', handler);
    },
  };
};

export default wheel;
