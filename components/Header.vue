<template>
  <v-toolbar color="info">
      <v-toolbar-title class="white--text">Todos List</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>


export default {


  components: {
  },

  props: ['isToDoList'],

  data () {
    return {
      onToDoListPage: this.isToDoList
    }
  },

  created() {
    console.log('Header component Created')
  }

}
</script>

<style>
</style>
