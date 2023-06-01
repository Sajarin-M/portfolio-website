<script lang="ts">
  export let src: string;
</script>

<div class="hexagon-wrapper flex w-22 h-22 cursor-pointer shadow-card">
  <div
    class="hexagon relative w-[46%] h-[80%] m-auto flex items-center justify-center transition-all duration-300 text-white"
  >
    <img {src} alt="react" class="h-13 w-13 z-1 m-auto" />
  </div>
</div>

<style lang="postcss">
  .hexagon {
    --start: theme('colors.primary.200');
    --end: theme('colors.gray.100');

    @apply rounded-[1px];
    background: linear-gradient(-180deg, var(--start), var(--end));

    &:before,
    &:after {
      content: '';
      background: inherit;
      @apply absolute h-full w-full rounded-0 transition-all duration-300 origin-center rounded-[1px];
    }

    &:before {
      transform: rotateZ(60deg);
    }
    &:after {
      transform: rotateZ(-60deg);
    }

    &:hover {
      &,
      &:before,
      &:after {
        @apply rounded-5 duration-300;
      }
    }
  }
</style>
