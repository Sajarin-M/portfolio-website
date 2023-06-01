<script lang="ts">
  import backend from '$lib/assets/backend.png';
  import creator from '$lib/assets/creator.png';
  import mobile from '$lib/assets/mobile.png';
  import web from '$lib/assets/web.png';

  const services = [
    {
      title: 'Web Developer',
      icon: web,
    },
    {
      title: 'React Native Developer',
      icon: mobile,
    },
    {
      title: 'Backend Developer',
      icon: backend,
    },
    {
      title: 'Content Creator',
      icon: creator,
    },
  ];
</script>

<section id="about" class="px-6 xl:px-none mx-9 mt-12 max-w-6xl mx-auto scroll-m-navbar">
  <p class="section-subheader">Introduction</p>
  <p class="section-header my-2.5">Overview.</p>
  <p class="section-description max-w-4xl">
    I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in
    frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with
    clients to create efficient, scalable, and user-friendly solutions that solve real-world
    problems. Let's work together to bring your ideas to life!
  </p>
  <div class="mt-12 flex flex-wrap justify-center items-center xl:(justify-start) gap-10">
    {#each services as service}
      <div class="basis-[14rem] card-gradient p-[1px] rounded-xl shadow-primary-card">
        <div
          class="bg-secondary-600 rounded-xl py-4 px-10 min-h-[15rem] md:min-h-[17rem] flex justify-evenly items-center flex-col"
        >
          <img src={service.icon} alt={service.title} class="w-17 h-17 object-contain" />

          <h3 class="text-gray-100 text-[0.95rem] md:text-[1.1rem] font-bold text-center">
            {service.title}
          </h3>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="postcss">
  .card-gradient {
    --start: theme('colors.primary.400');
    --end: theme('colors.primary.800');
    background: var(--start);
    background: linear-gradient(90.13deg, var(--start) 1.9%, var(--end) 97.5%);
  }
</style>
