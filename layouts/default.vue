<template>
  <div
    class="container mx-auto px-10 py-10 max-w-3xl text-slate-900 space-y-10 font-[Avenir,Helvetica,Arial,sans-serif]"
  >
    <div
      class="flex items-start justify-between flex-wrap -mx-2"
    >
      <div>
        <NuxtLink
          class="text-4xl font-bold uppercase text-black whitespace-nowrap block mx-2 mb-2"
          to="/"
        >
          Oliver Pietsch
        </NuxtLink>
      </div>
      <Navigation />
    </div>
    <slot />
  </div>
</template>