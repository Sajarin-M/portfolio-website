<script lang="ts">
  export let open: boolean;
  let className: string | undefined = undefined;
  export { className as class };
</script>

<div class="burger {className}" class:open on:click={() => (open = !open)}>
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
</div>

<style lang="postcss">
  .burger {
    --burger-line-size: 2.5px;
    --burger-line-height: 3.5px;
    --burger-line-radius: 10px;
    --left-factor: 2.2px;
    --top-factor: 3.3px;

    & {
      @apply w-[24px] h-[calc(5*var(--burger-line-height))] relative rotate-0 transition-all duration-500 ease-in-out cursor-pointer m-0;
    }

    & span {
      @apply block absolute h-[var(--burger-line-size)] w-1/2 bg-white opacity-100 rotate-0 transition-all duration-250 ease-in-out;

      &:nth-child(even) {
        @apply left-1/2 rounded-[0_var(--burger-line-radius)_var(--burger-line-radius)_0];
      }

      &:nth-child(odd) {
        @apply left-0 rounded-[var(--burger-line-radius)_0_0_var(--burger-line-radius)];
      }

      &:nth-child(1),
      &:nth-child(2) {
        @apply top-0;
      }

      &:nth-child(3),
      &:nth-child(4) {
        @apply top-[calc(2*var(--burger-line-height))];
      }

      &:nth-child(5),
      &:nth-child(6) {
        @apply top-[calc(4*var(--burger-line-height))];
      }
    }

    &.open span {
      &:nth-child(1),
      &:nth-child(6) {
        @apply rotate-45;
      }

      &:nth-child(2),
      &:nth-child(5) {
        @apply -rotate-45;
      }

      &:nth-child(1) {
        @apply left-[var(--left-factor)] top-[var(--top-factor)];
      }

      &:nth-child(2) {
        @apply left-[calc(50%-var(--left-factor))] top-[var(--top-factor)];
      }

      &:nth-child(3) {
        left: -50%;
        opacity: 0;
      }

      &:nth-child(4) {
        left: 100%;
        opacity: 0;
      }

      &:nth-child(5) {
        @apply left-[var(--left-factor)] top-[calc(4*var(--burger-line-height)-var(--top-factor))];
      }

      &:nth-child(6) {
        @apply left-[calc(50%-var(--left-factor))] top-[calc(4*var(--burger-line-height)-var(--top-factor))];
      }
    }
  }
</style>
