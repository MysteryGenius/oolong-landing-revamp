<template>
  <article class="mt-20 min-h-screen">
    <h2 class="text-6xl font-bold tracking-widest text-center">
      Our Programmes
    </h2>
    <hr class="mt-4" />

    <search-box v-model="(form.search as string)" class="mt-4" @reset="reset" />

    <section
      v-for="programme in filteredProgrammes"
      :key="programme.id"
      class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      <img
        class="order-1 mt-4 md:mt-0 rounded-xl"
        :src="programme.image"
        :alt="programme.imageAlt"
      />
      <div class="md:order-1 order-2">
        <h3 class="text-2xl font-bold">{{ programme.title }}</h3>
        <p class="mt-4">{{ programme.description }}</p>
      </div>
    </section>
  </article>
</template>

<script lang="ts" setup>
interface Programme {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const form = reactive({
  search: "",
});

const reset = () => {
  form.search = "";
};

const programmes: Programme[] = [
  {
    id: "hippotherapy",
    title: "Hippotherapy with children in need",
    description:
      "Join our warm community for a day of mindfulness, self awareness and fun with one of humans' oldest companions: horses",
    image: "/images/programmes/hippotherapy.jpg",
    imageAlt: "Staring intensely into the mirror",
  },
  {
    id: "art-therapy-cats",
    title: "Art Therapy with Cats",
    description:
      "Embark on a creative journey of healing and expression through art, accompanied by our feline friends. Discover the therapeutic power of creativity and the calming presence of cats.",
    image: "/images/programmes/art-therapy-cats.jpg",
    imageAlt: "Person engaged in art therapy with cats",
  },
  {
    id: "cycling",
    title: "Ride the Afternoon Away",
    description:
      "Join the Oolong Community while appreciating the wonders of the edge of our island nation. Bask in the golden rays as you get to picnic with our specially curated menu that rejuvenates the soul.",
    image: "/images/programmes/cycling.jpg",
    imageAlt: "Cycling and somatic therapy",
  },
];

const filteredProgrammes = computed(() => {
  const search = form.search.toLowerCase();
  return programmes.filter((programme) => {
    return (
      programme.title.toLowerCase().includes(search) ||
      programme.description.toLowerCase().includes(search)
    );
  });
});
</script>
