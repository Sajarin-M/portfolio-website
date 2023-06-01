<script lang="ts">
  import { page } from '$app/stores';
  import { remToPx } from '$lib/utils/screen';
  import wheel from '$lib/utils/wheel';
  import { fade } from 'svelte/transition';
  import Burger from './burger.svelte';

  const navLinks = [
    {
      href: '#about',
      title: 'About',
    },
    {
      href: '#works',
      title: 'Works',
    },
    {
      href: '#contact',
      title: 'Contact',
    },
  ];

  let hamburgerOpen = false;
  let scrollY = 0;
</script>

<div class="h-[0.5rem] md:[0.6rem] xl:h-[0.8rem]" />
<nav class="navbar" class:scrolled={scrollY >= remToPx(0.9)}>
  <div class="w-full flex justify-between items-center max-w-[82rem] mx-auto">
    <a href="/" class="flex items-center gap-3 decoration-none">
      <div class="rounded-full text-gray-100 bg-primary-600 p-2 font-bold">SM</div>
      <p class="text-gray-100 font-bold cursor-pointer hidden sm:block text-[1.1rem]">
        Sajarin M | Web Developer
      </p>
      <p class="text-gray-100 font-bold cursor-pointer block sm:hidden text-[1.1rem]">Sajarin M</p>
    </a>
    <ul class="hidden sm:flex list-none gap-10">
      {#each navLinks as navLink}
        <li>
          <a
            href={navLink.href}
            class="{$page.url.hash === navLink.href
              ? 'text-gray-100'
              : 'text-primary-400'} hover-text-gray-100 decoration-none font-medium cursor-pointer"
          >
            {navLink.title}
          </a>
        </li>
      {/each}
    </ul>
    <Burger bind:open={hamburgerOpen} class="sm:hidden z-31" />
    {#if hamburgerOpen}
      <ul
        transition:fade={{ duration: 100 }}
        class="z-30 flex flex-col sm:hidden fixed top-0 left-0 bottom-0 right-0 pt-20 gap-8 items-center list-none m-0 px-0 backdrop-blur-xl bg-secondary-700/70"
      >
        {#each navLinks as navLink}
          <li>
            <a
              href={navLink.href}
              on:click={() => {
                hamburgerOpen = false;
              }}
              class="{$page.url.hash === navLink.href
                ? 'text-white'
                : 'text-secondary'}} hover-text-white decoration-none font-medium cursor-pointer"
            >
              {navLink.title}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</nav>

<svelte:window use:wheel={{ scrollable: !hamburgerOpen }} bind:scrollY />

<style lang="postcss">
  .navbar {
    @apply px-5 xl:px-7 w-full flex items-center sticky top-0 z-20 transition-all bg-transparent h-navbar;

    &.scrolled {
      @apply bg-secondary-700/95 backdrop-blur-sm shadow-sm shadow-secondary-600/50 backdrop-saturate-100;
    }
  }
</style>
