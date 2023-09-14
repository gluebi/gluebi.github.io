<template>
  <nav
    class="flex space-x-4 mx-2 mt-2"
  >
    <NuxtLink
      to="/"
      class="hover:underline whitespace-nowrap"
      active-class="text-slate-500"
    >
      About me
    </NuxtLink>
    <NuxtLink
      to="/references"
      class="hover:underline whitespace-nowrap"
      active-class="text-slate-500"
    >
      References
    </NuxtLink>
    <NuxtLink
      to="/imprint"
      class="hover:underline whitespace-nowrap"
      active-class="text-slate-500"
    >
      Imprint
    </NuxtLink>
  </nav>
</template>