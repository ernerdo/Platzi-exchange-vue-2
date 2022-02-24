<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-red-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-8">
          <px-icon class="mr-2" />
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >Ernerdo Exchange</router-link
          >
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-lg lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
              >{{ l.title }}</router-link
            >
          </div>
          <!-- <div class="text-lg hover:text-white mr-4">
            <router-link 
            :to="{name: 'about'}"
            >{{ $t('About') }}</router-link>
          </div> -->

          <div class="locale-changer text-lg mr-4">
              <select v-model="$i18n.locale" >
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
              </select>
          </div>

        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon";

export default {
  name: "Pxheader",
  components: { PxIcon },
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return { langs: ['en', 'es'] }
  },
};
</script>

<i18n>
{
  "es": {
    "About": "Acerca de"
  }
}
</i18n>

