<template>
  <article class="mt-20">
    <h2 class="text-6xl font-bold tracking-widest text-center">Join us</h2>
    <hr class="mt-4" />
    <!-- Why -->
    <section class="mt-6 grid grid-cols-1">
      <div class="md:order-1 order-2">
        <h3 class="text-2xl font-bold mt-6">
          Unlocking New Avenues of Impact:
        </h3>
        <p class="mt-4">
          Collaborating with Oolong means aligning your organization's values
          with a mission-driven community. Join us to amplify your social
          impact, foster employee engagement, and be a part of a movement that
          empowers individuals and communities.
        </p>
      </div>
      <!--  -->
    </section>

    <!-- Why -->
    <section class="mt-6 grid grid-cols-1">
      <div class="md:order-1 order-2">
        <h3 class="text-2xl font-bold mt-6">Power of Collaborative Action:</h3>
        <ol class="grid grid-cols-3 gap-2 py-4 text-center">
          <li
            class="p-4 rounded-md bg-stone-300 text-stone-900 flex flex-col justify-between"
          >
            <h4 class="font-bold text-xl">Enhanced Social Impact</h4>
            <p>Together, we create lasting change.</p>
          </li>
          <li
            class="p-4 rounded-md bg-stone-300 text-stone-900 flex flex-col justify-between"
          >
            <h4 class="font-bold text-xl">Employee Engagement</h4>
            <p>Engage your workforce in meaningful initiatives.</p>
          </li>
          <li
            class="p-4 rounded-md bg-stone-300 text-stone-900 flex flex-col justify-between"
          >
            <h4 class="font-bold text-xl">Networking Opportunities</h4>
            <p>Connect with like-minded organizations.</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="mt-6 grid grid-cols-1">
      <div class="md:order-1 order-2">
        <h3 class="text-2xl font-bold mt-6">Current Partners</h3>
        <p class="mt-4">
          We are proud to collaborate with organizations that share our vision.
          Together, we are creating a positive ripple effect in the world.
        </p>
        <ol class="grid grid-cols-3 gap-2 py-4 text-center">
          <li v-for="partner in partners" :key="partner.name">
            <NuxtLink :to="partner.link">
              <img :src="partner.logo" :alt="partner.name" />
            </NuxtLink>
          </li>
        </ol>
      </div>
    </section>

    <!-- Volunteering -->
    <!-- <section class="mt-2 grid grid-cols-1">
      <div class="md:order-1 order-2">
        <h3 class="text-2xl font-bold mt-6">Volunteer With Us:</h3>
        <p class="mt-4">
          Harness the power of service to not only make a difference in the
          community but to also find purpose, connection, and self-worth.
        </p>
      </div>
    </section> -->

    <!-- Join as community -->
    <section class="mt-6 grid grid-cols-1">
      <div>
        <h3 class="text-2xl font-bold mt-6">Become a Community Member:</h3>
        <p class="mt-4">
          Engage, share, learn, and grow. Become a valued member of our
          community and be a part of the positive change we envision.
        </p>
      </div>
      <NuxtLink to="https://t.me/+3NWBeOG-BIo2MGE1">
        <button
          type="button"
          class="mt-4 rounded bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Join Our Telegram Community
        </button>
      </NuxtLink>
    </section>

    <!-- Invest in us -->
    <section class="mt-6 grid grid-cols-1">
      <div>
        <h3 class="text-2xl font-bold mt-6">Invest in Our Vision:</h3>
        <p class="mt-4">
          Invest in a community that's reshaping the narrative of healing and
          growth. Your support will drive our initiatives and amplify the impact
          we make together.
        </p>
      </div>
      <NuxtLink to="https://t.me/+3NWBeOG-BIo2MGE1">
        <button
          type="button"
          class="mt-4 rounded bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Email us!
        </button>
      </NuxtLink>
    </section>

    <!-- Join Us Sections -->
    <section class="text-gray-100">
      <div id="mc_embed_shell" class="rounded-xl bg-stone-700 py-2 px-2 mt-6">
        <div id="mc_embed_signup">
          <form
            action="https://gmail.us10.list-manage.com/subscribe/post?u=fed52bd159f3cef7ff5d8a5d8&amp;id=0e59c3fac5&amp;f_id=00823be2f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_self"
          >
            <div id="mc_embed_signup_scroll">
              <h2>Join us for updates!</h2>
              <div class="indicates-required">
                <span class="asterisk">*</span> indicates required
              </div>
              <div class="mc-field-group">
                <label for="mce-EMAIL"
                  >Email Address <span class="asterisk">*</span></label
                ><input
                  type="email"
                  name="EMAIL"
                  class="text-stone-900"
                  placeholder="hello@oolong.app"
                  id="mce-EMAIL"
                />
              </div>
              <div id="mce-responses" class="clear foot">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display: none"
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display: none"
                ></div>
              </div>
              <div style="position: absolute; left: -5000px" aria-hidden="true">
                /* real people should not fill this in and expect good things -
                do not remove this or risk form bot signups */
                <input
                  type="text"
                  name="b_fed52bd159f3cef7ff5d8a5d8_0e59c3fac5"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                    value="Subscribe"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </article>
</template>
<script lang="ts" setup>
interface Partner {
  name: string;
  logo: string;
  link: string;
}

const partners = ref<Partner[]>([
  {
    name: "Creaturae",
    link: "https://creaturae.org/",
    logo: "images/partners/creaturae.png",
  },
]);
</script>
