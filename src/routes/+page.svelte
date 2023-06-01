<script>
  import About from '../lib/components/about.svelte';
  import Hero from '$lib/components/hero.svelte';
  import Navbar from '$lib/components/navbar.svelte';
  import Experience from '$lib/components/experience.svelte';
  import Tech from '$lib/components/tech.svelte';
  import backgroundImage from '$lib/assets/background.png';
  import Works from '$lib/components/works.svelte';
  import Contact from '$lib/components/contact.svelte';
</script>

<div class="relative bg-center" style="background-image: url({backgroundImage});">
  <Navbar />
  <Hero />
  <About />
  <Experience />
  <Tech />
  <Works />
  <Contact />
</div>
