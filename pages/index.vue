<template>
  <main>
    <BubbleBackground />
    <section class="h-80 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="border border-white py-4 px-6 rounded-xl">
        <h2 class="text-2xl text-center text-white font-bold">
          Ever felt the
          <span
            class="bg-gradient-to-r from-green-200 via-green-300 to-blue-500 text-transparent bg-clip-text"
            >whole world</span
          >
          was <span class="text-red-200">against</span> you?
          <span class="underline">We've been there too.</span>
        </h2>
        <p class="mt-4 text-center max-w-2xl mx-auto text-gray-100">
          <span class="text-gray-100">
            Hey we are building tools to help youths build their support
            network. Build a strong support network, break free from toxic
            friendships. Organize, identify, and nurture healthy relationships.
            Join us for a happier social landscape.
          </span>
        </p>
        <p class="mt-4 text-center max-w-2xl mx-auto text-gray-100">
          We are currently in beta and would love to hear your feedback.
        </p>
      </div>
    </section>

    <!-- Feature Sections -->
    <section id="features" class="text-gray-100">
      <!-- Feature 1 -->
      <div class="mt-40 grid grid-cols-1 md:grid-cols-2 gap-10 align-middle">
        <div class="order-1">
          <img src="/images/feature-1.png" class="bounce" alt="" />
        </div>
        <div class="order-2 flex flex-col justify-center">
          <h4 class="font-bold text-3xl">
            Stay strong through tough times with Oolong's Guided Toolkit.
          </h4>
          <p class="mt-4">
            Friendships can be complicated, and sometimes they come to an end.
            But with Oolong's Guided Toolkit, youth can navigate tricky social
            situations like friendship breakups with confidence. Our
            step-by-step guidance helps them maintain a strong support network
            and stay mentally resilient through tough times.
          </p>
        </div>
      </div>
      <!-- Feature 2 -->
      <div class="mt-40 grid grid-cols-1 md:grid-cols-2 gap-10 align-middle">
        <div class="order-1 md:order-2">
          <img src="/images/feature-1.png" class="bounce-variant" alt="" />
        </div>
        <div class="order-2 md:order-1 flex flex-col justify-center">
          <h4 class="font-bold text-3xl">
            Keep your precious memories organized with ease.
          </h4>
          <p class="mt-4">
            Don't let your shared memories get lost in the chaos. With Oolong,
            organizing and looking back on your special moments has never been
            easier. Get a simple glance of all your shared memories with the
            important people in your life and keep those precious moments close
            to your heart.
          </p>
        </div>
      </div>
      <!-- Feature 3 -->
      <div class="mt-40 grid grid-cols-1 md:grid-cols-2 gap-10 align-middle">
        <div class="order-1">
          <img src="/images/feature-3.png" class="bounce" alt="" />
        </div>
        <div class="order-2 flex flex-col justify-center">
          <h4 class="font-bold text-3xl">
            Strengthen your relationships with thoughtful gifts and meetups.
          </h4>
          <p class="mt-4">
            With Oolong, make every gift and every meetup count. Our tool makes
            it easy to plan and personalize these special moments, strengthening
            your relationships with the people who matter most to you. Show them
            how much you care with Oolong.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.bounce {
  animation: bob 2s infinite ease-in-out;
}

.bounce-variant {
  animation: bob-variant 2s infinite ease-in-out;
}

/* animation bob up and down */
@keyframes bob {
  0% {
    transform: translateY(-0.5rem) rotate(1deg);
  }
  50% {
    transform: translateY(0px) rotate(-1deg);
  }
  100% {
    transform: translateY(-0.5rem) rotate(1deg);
  }
}

@keyframes bob-variant {
  0% {
    transform: translateY(0px) rotate(-1deg);
  }
  50% {
    transform: translateY(-0.5rem) rotate(1deg);
  }
  100% {
    transform: translateY(0px) rotate(-1deg);
  }
}
</style>
