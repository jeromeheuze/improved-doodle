<template>
  <LazyHydrate when-visible>

    <main>
      <Header/>
      <div class="wrapper">
        <h1>Coming Soon Page is coming soon<span class="dot">.</span></h1>
        <p>E2 Land is a premium service for Earth2.io - we are building a service for E2 Ecosim land owners to get useful analytics about their properties and get 3D analytics to consult and decide your next steps for your e2 businesses.</p>
        <p>Visit my other websites I make and maintain.</p>
        <div class="icons">
          <a href="https://jeromeheuze.com"><i class="fa fa-link"></i></a>
          <a href="https://e2production.com"><i class="fa fa-link"></i></a>
          <a href="https://heuzeproductions.com"><i class="fa fa-link"></i></a>
        </div>
      </div>
      <Footer/>
    </main>

  </LazyHydrate>
</template>

<script>
import Header from "~/components/header";
import Footer from "~/components/footer";
import LazyHydrate from 'vue-lazy-hydration';
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'v1'
      },
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'E2 Land is a premium service for Earth2.io - we are building a service for E2 Ecosim land owners to get useful analytics about their properties and get 3D analytics to consult and decide your next steps for your e2 businesses.'
        }
      ],
      style: [
      ],
      script: [
      ]
    }
  },
  modules: [],
  components: {LazyHydrate, Footer, Header}
}
</script>