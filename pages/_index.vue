<template>
  <main>
    <BubbleBackground />
    <section class="h-80 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="border border-white py-4 px-6 rounded-xl">
        <h3 class="text-2xl font-bold text-center tracking-wider">
          The Versatility of Oolong
        </h3>
        <p class="text-center mt-4">
          One of the few teas that can be savored in diverse moments. The best
          type is crafted with care, focusing on the softest core of the leaves.
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
