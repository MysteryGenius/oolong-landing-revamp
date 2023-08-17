<template>
  <div class="bg-gray-900 text-gray-100">
    <Title>Oolong</Title>
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Oolong</span>
            <img class="h-10 w-auto" src="/logo.png" alt="Oolong Logo" />
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-sm font-semibold leading-6 text-gray-100"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Oolong</span>
              <img class="h-10 w-auto" src="/logo.png" alt="Oolong Logo" />
            </NuxtLink>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                  >{{ item.name }}
                </NuxtLink>
              </div>
              <div class="py-6"></div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <!-- only show on landing -->
    <section v-if="isLanding">
      <div
        class="h-screen w-screen relative overflow-hidden hidden md:block z-40"
      >
        <!-- <img
          ref="eyes"
          src="/images/eyes.gif"
          alt="Eyes"
          class="absolute w-screen inset-0"
        /> -->
        <video ref="eyes" autoplay loop muted playsinline>
          <source src="/videos/eyes.webm" type="video/webm" />
          <source src="/videos/eyes.mp4" type="video/mp4" />
        </video>
        <img
          ref="charge"
          src="/images/charge.gif"
          alt="Charges out from Hero"
          class="absolute inset-0"
        />
        <img
          ref="hero"
          src="/images/hero.png"
          alt="Hero facing her demons"
          class="absolute inset-0"
        />
      </div>

      <div
        class="h-screen w-screen relative overflow-hidden block md:hidden z-40"
      >
        <!-- <img
          src="/images/hero-mobile.gif"
          alt="Hero facing her demons"
          class="absolute inset-0"
        /> -->
        <video autoplay loop muted playsinline>
          <source src="/videos/hero-mobile.webm" type="video/webm" />
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>
      </div>
    </section>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-4xl py-0 sm:py-16 lg:py-56">
        <slot />
      </div>
    </div>

    <footer class="text-center text-white py-6">
      <p>Made with ❤️ by &copy;Oolong 2023</p>
      <p>
        Art by
        <a
          href="https://www.instagram.com/andy.colours/"
          class="underline"
          target="_blank"
        >
          @andy.colors
        </a>
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { Dialog, DialogPanel } from "@headlessui/vue";

const navigation = [
  { name: "Our Why", href: "/why" },
  { name: "Features", href: "#features" },
  { name: "Join our Beta", href: "#" },
];

const mobileMenuOpen = ref(false);

let eyes = ref(null);
let charge = ref(null);
let hero = ref(null);

// close nav menu when route changes
const route = useRoute();

const isLanding = computed(() => route.path === "/");

watch(
  route,
  () => {
    mobileMenuOpen.value = false;
  },
  { deep: true, immediate: true }
);

let listener = () => {
  let scrollY = window.scrollY;
  eyes.value.style.transform = `translateY(${scrollY * -0.25}px)`;
  charge.value.style.transform = `translateY(${scrollY * -0.5}px) scale(${
    1 + scrollY / 2000
  })`;
  hero.value.style.transform = `translateY(${scrollY * -1}px) scale(${
    1 + scrollY / 2000
  })`;

  // turn to eyes invisible as we scroll down
  charge.value.style.opacity = `${1 - scrollY / 400}`;
  eyes.value.style.opacity = `${1 - scrollY / 600}`;
  hero.value.style.opacity = `${1 - scrollY / 800}`;
};

onMounted(() => {
  window.addEventListener("scroll", listener);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", listener);
});
</script>
<style scoped></style>
