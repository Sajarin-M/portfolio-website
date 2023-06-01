<script>
  import HexagonBall from './hexagon-ball.svelte';
  import css from '$lib/assets/tech/css.svg';
  import html from '$lib/assets/tech/html.svg';
  import react from '$lib/assets/tech/react.svg';
  import git from '$lib/assets/tech/git.svg';
  import typescript from '$lib/assets/tech/typescript.svg';
  import mongodb from '$lib/assets/tech/mongodb.svg';
  import tailwindcss from '$lib/assets/tech/tailwindcss.svg';
  import svelte from '$lib/assets/tech/svelte.svg';
  import nodejs from '$lib/assets/tech/nodejs.svg';
  import docker from '$lib/assets/tech/docker.svg';
  import redux from '$lib/assets/tech/redux.svg';
</script>

<section
  class="px-6 xl:px-none mx-9 mt-20 md:mt-25 max-w-5xl mx-auto scroll-m-navbar flex items-center justify-center gap-10 flex-wrap"
>
  <HexagonBall src={html} />
  <HexagonBall src={css} />
  <HexagonBall src={react} />
  <HexagonBall src={svelte} />
  <HexagonBall src={typescript} />
  <HexagonBall src={tailwindcss} />
  <HexagonBall src={docker} />
  <HexagonBall src={nodejs} />
  <HexagonBall src={mongodb} />
  <HexagonBall src={git} />
  <HexagonBall src={redux} />
</section>
