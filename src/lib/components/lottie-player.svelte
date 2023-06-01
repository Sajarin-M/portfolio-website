<script context="module" lang="ts">
  let PreviousPlayer: any;
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  let LottiePlayer: any;

  if (PreviousPlayer) LottiePlayer = PreviousPlayer;

  export let src: string | object;
  export let loop: boolean;
  export let width: number | undefined;
  export let height: number | undefined;
  export let autoplay: boolean;
  export let background: string;

  if (!PreviousPlayer) {
    onMount(async () => {
      // @ts-ignore
      LottiePlayer = (await import('@lottiefiles/svelte-lottie-player')).LottiePlayer;
    });
  }
</script>

{#if LottiePlayer}
  <svelte:component
    this={LottiePlayer}
    {src}
    {loop}
    {width}
    {height}
    {autoplay}
    {background}
    renderer="svg"
    controls={false}
    controlsLayout={[]}
  />
{:else}
  <div style="height: {height}px; width: {width}px;">&nbsp;</div>
{/if}
