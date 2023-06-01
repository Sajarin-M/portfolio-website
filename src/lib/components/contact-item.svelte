<script lang="ts">
  export let icon: string;
  export let label: string;
  export let href: string;
  export let value: string;
  export let blank = false;
</script>

<div class="flex gap-4 items-center">
  <a {href} target={blank ? '_blank' : '_self'} class="text-gray-100 text-[1.6rem]">
    <div class={icon} />
  </a>
  <div>
    <div class="text-sm text-gray-400">{label}</div>
    <div>{value}</div>
  </div>
</div>
