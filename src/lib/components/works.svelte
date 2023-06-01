<script lang="ts">
  import { projects } from '$lib/data';
</script>

<section class="px-6 xl:px-none mx-9 mt-20 md:mt-25 max-w-6xl mx-auto scroll-m-navbar">
  <p class="section-subheader">My works</p>
  <p class="section-header my-2.5">Projects.</p>
  <p class="section-description mt-2 max-w-4xl">
    Following projects showcases my skills and experience through real-world examples of my work.
    Each project is briefly described with links to code repositories and live demos in it. It
    reflects my ability to solve complex problems, work with different technologies, and manage
    projects effectively.
  </p>
  <div class="w-full mt-12 flex flex-wrap justify-center xl:(grid grid-cols-3) gap-10">
    {#each projects as project}
      <div class="basis-[25rem] bg-secondary-600 rounded-xl p-5 shadow-primary-card">
        <div class="bg-blue-900 h-55 w-full rounded-xl" />
        <h2
          class="font-bold my-3 text-[1.1rem] sm:text-[1.2rem] md-text-[1.4rem] lg:text-[1.6rem] xl:text-[1.4rem] text-gray-100"
        >
          {project.name}
        </h2>
        <p class="text-gray-100 text-sm tracking-wider">
          {project.description}
        </p>
        <div class="mt-3 flex flex-wrap gap-2">
          {#each project.tags as tag}
            <p class="text-sm bg-clip-text text-transparent {tag.className}">
              #{tag.name}
            </p>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
