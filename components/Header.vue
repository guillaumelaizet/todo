<template>
  <v-toolbar color="info">
      <v-toolbar-title class="white--text">Todos List</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <Popup/>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>

import Popup from '~/components/Popup.vue'

export default {


  components: {
    Popup
  },


  data () {
    return {
    }
  }

}
</script>

<style>
</style>
