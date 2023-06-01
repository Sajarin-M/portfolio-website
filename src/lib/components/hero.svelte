<script lang="ts">
  import { goto } from '$app/navigation';
  import data from '$lib/assets/lottie/web-developement.json';
  import { remToPx, responsive, screen } from '$lib/utils/screen';
  import LottiePlayer from './lottie-player.svelte';

  $: playerSize = responsive(
    {
      default: $screen.size > 0 ? $screen.size - remToPx(4.2) : 300,
      xs: 350,
      sm: 400,
      md: 450,
      lg: 500,
      xl: 550,
    },
    $screen.breakpoint,
  );
</script>

<section
  class="relative w-full max-w-6xl mx-auto grid gap-4 items-center xl:(gap-10 grid-cols-[1fr_auto] grid-rows-[auto_auto] min-h-[calc(100vh-5.8rem)])"
>
  <div>
    <div class="flex gap-5 px-6 xl:px-none">
      <div class="flex flex-col justify-center items-center mt-4">
        <div class="w-4 h-4 rounded-full bg-primary-600" />
        <div class="w-1 grow line-gradient" />
      </div>
      <div class="mt-3 md:mt-5">
        <h1 class="section-header mt-2">
          Hi,I'm <span class="text-primary">Sajarin M 👋</span>
        </h1>
        <p
          class="text-gray-200 font-medium text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.8rem] leading-[1.5rem] md:leading-9 mt-3"
        >
          I Create attractive and user-friendly websites with interactive features.
        </p>
      </div>
    </div>
  </div>

  <div class="row-span-2 mx-auto">
    <LottiePlayer
      src={data}
      loop={true}
      autoplay={true}
      width={playerSize}
      height={playerSize}
      background="transparent"
    />
  </div>
  <div class="mx-auto xl:mx-none self-start">
    <button
      on:click={() => goto('#about')}
      class="btn text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] xl:ml-10"
    >
      Know More
    </button>
  </div>
</section>

<style lang="postcss">
  .line-gradient {
    background: theme('colors.primary.600');
    background: linear-gradient(-110deg, theme('colors.primary.600') 0%, transparent 95%);
  }
</style>
