<ul class="timeline flex flex-col list-none p-0">
  {#each [1, 2] as _, i}
    <li class="h-10 timeline-item">
      <div class="timeline-content" />
      <div class="timeline-seperator flex flex-col items-center">
        <div class="grow w-[var(--timeline-seperator-width)] bg-primary-600/85" />
      </div>
      <div class="timeline-subcontent" />
    </li>
    <li class:timeline-item-opposite={i % 2 == 0} class="timeline-item">
      <div class="timeline-content flex justify-end">
        <div
          class="timeline-card rounded-xl p-5 md:p-6 relative w-full shadow-primary-card border-b-solid border-primary-600/85"
        >
          <h2
            class="font-bold text-[1.1rem] sm:text-[1.2rem] md-text-[1.4rem] lg:text-[1.6rem] xl:text-[1.4rem] text-gray-100"
          >
            Full-Stack Web Developer
          </h2>
          <p class="text-gray-400 mt-1">Telora Automation PVT LTD</p>
          <ul class="mt-5 list-disc pl-6 space-y-2">
            <li class="text-gray-100 text-sm tracking-wider">
              Developing and maintaining web applications using React.js and other related
              technologies.
            </li>
            <li class="text-gray-100 text-sm tracking-wider">
              Developing and maintaining web applications using React.js and other related
              technologies.
            </li>
            <li class="text-gray-100 text-sm tracking-wider">
              Developing and maintaining web applications using React.js and other related
              technologies.
            </li>
            <li class="text-gray-100 text-sm tracking-wider">
              Developing and maintaining web applications using React.js and other related
              technologies.
            </li>
          </ul>
        </div>
      </div>
      <div class="timeline-seperator flex flex-col items-center">
        <div
          class="timeline-icon bg-secondary-600 rounded-full border-solid border-primary-600/85"
        />
        <div class="grow w-[var(--timeline-seperator-width)] bg-primary-600/85" />
      </div>
      <div class="timeline-subcontent grow-1 text-gray-400">March 2020 - April 2021</div>
    </li>
  {/each}
  <li class="h-10 timeline-item">
    <div class="timeline-content" />
    <div class="timeline-seperator flex flex-col items-center">
      <div class="grow w-[var(--timeline-seperator-width)] bg-primary-600/85" />
    </div>
    <div class="timeline-subcontent" />
  </li>
</ul>

<style lang="postcss">
  .timeline {
    --timeline-icon-size: 1.8rem;
    --timeline-seperator-width: 0.2rem;
    --timeline-card-arrow-size: 0.5rem;
    --timeline-card-bg: theme('colors.secondary.600');
    --timeline-gap: 1rem;

    .timeline-content {
      grid-area: content;
    }

    .timeline-subcontent {
      grid-area: subcontent;
    }

    .timeline-seperator {
      grid-area: seperator;
    }

    .timeline-icon {
      height: var(--timeline-icon-size);
      width: var(--timeline-icon-size);
      border-width: var(--timeline-seperator-width);
    }

    .timeline-item {
      gap: var(--timeline-gap);
      display: grid;
      grid-template-areas: 'seperator content';
      grid-template-columns: var(--timeline-icon-size) 1fr;
      .timeline-card {
        background-color: var(--timeline-card-bg);
        border-width: var(--timeline-seperator-width);
        &:after {
          content: '';
          top: calc((var(--timeline-icon-size) / 2) - (var(--timeline-card-arrow-size) / 2));
          border-top: var(--timeline-card-arrow-size) solid transparent;
          border-bottom: var(--timeline-card-arrow-size) solid transparent;
          border-right: var(--timeline-card-arrow-size) solid var(--timeline-card-bg);
          @apply absolute right-full;
        }
      }
      .timeline-subcontent {
        display: none;
        text-align: end;
        line-height: 1rem;
        margin-right: calc(var(--timeline-seperator-width) * -1);
        padding-top: calc((var(--timeline-icon-size) / 2) - 0.5rem);
      }
    }

    @screen sm {
      --timeline-icon-size: 3rem;
      --timeline-seperator-width: 0.22rem;
      --timeline-gap: 1.6rem;
    }

    @screen xl {
      --timeline-icon-size: 3.5rem;
      --timeline-seperator-width: 0.25rem;
      --timeline-gap: 2.25rem;

      .timeline-item {
        grid-template-areas: 'subcontent seperator content';
        grid-template-columns: 1fr var(--timeline-icon-size) 1fr;
        .timeline-subcontent {
          @apply block;
        }
      }

      .timeline-item.timeline-item-opposite {
        grid-template-areas: 'content seperator subcontent';
        .timeline-card {
          &:after {
            border-right: none;
            border-left: var(--timeline-card-arrow-size) solid var(--timeline-card-bg);
            @apply left-full;
          }
        }
        .timeline-subcontent {
          @apply text-start
          margin-left: calc(var(--timeline-seperator-width) * -1);
        }
      }
    }

    @screen xl {
      .item-normal {
        .timeline-card {
          &:after {
            border-left: var(--timeline-card-arrow-size) solid var(--timeline-card-bg);
            @apply left-full;
          }
        }
        .timeline-subcontent {
          margin-left: calc(var(--timeline-seperator-width) * -1);
        }
      }
    }

    @screen xl {
      .item-opposite {
        .timeline-card {
          &:after {
            border-right: var(--timeline-card-arrow-size) solid var(--timeline-card-bg);
            @apply right-full;
          }
        }

        .timeline-subcontent {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
          margin-right: calc(var(--timeline-seperator-width) * -1);
          @apply flex justify-end;
        }

        .timeline-seperator {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
        }

        .timeline-content {
          grid-column: 3 / 4;
          grid-row: 1 / 2;
        }
      }
    }
  }
</style>
