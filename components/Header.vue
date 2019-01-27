<template>
  <v-toolbar color="info">
      <v-toolbar-title class="white--text">Task Manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <Popup v-show="isToDoList"/>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>

import Popup from '~/components/Popup.vue'

export default {

  props: ['toDoList'],

  components: {
    Popup
  },


  data () {
    return {
      isToDoList: this.toDoList
    }
  }

}
</script>

<style>
</style>
