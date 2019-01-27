<template>
  <section class="">
    <v-app>
      <Header/>
      <div class="no-task">
        <p>Il n'y a pas encore de tâche(s) définie(s)</p>
      </div>
      <Footer/>
    </v-app>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.no-task {
  margin: auto;
  color: grey;
  font-size: 2em;
}
</style>
