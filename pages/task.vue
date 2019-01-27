<template>
  <div class="">
    <v-app>
      <Header/>
      <v-btn
      class="btn-return"
      color="error"
      @click="goBack"

      >Retour</v-btn>
      <v-card class="card">
        <v-form
        class="form"
        ref="form"
        v-model="validation"
        lazy-validation
        >
        <v-text-field
        v-model="TASK.title"
        label="title"

        ></v-text-field>
        <v-select
          v-model="TASK.taskReceiver"
          label="Atribué à:"
          :items="TASKERS"
          required
        ></v-select>
        <v-checkbox
        v-model="TASK.completed"
        label="completée"
        color="info"
        ></v-checkbox>
        <v-btn
        color="success"
        @click="validate(TASK)"
        >Valider</v-btn>
      </v-form>
    </v-card>
    <Footer/>
    </v-app>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import {mapGetters} from 'vuex'

export default {

  components: {
    Header,
    Footer
  },

  data () {
    return {
      validation: true,
      title: '',
      completed: false
    }
  },

  computed: {
    ...mapGetters(['TASK']),
    ...mapGetters(['TASKERS'])
  },

  mounted() {
    let id = this.$router.currentRoute.query.id
    console.log(id)
    this.$store.dispatch('GET_TASK', id)
  },

  methods: {
    validate (task) {
      task.date = new Date()
      this.$store.dispatch('UPDATE_TASK', task)
      this.$router.go(-1)
    },

    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

.card {
  width: 70%;
  margin: 5vh auto;
}

.form {
  padding: 20px;
}

.btn-return {
  width: 100px;
  margin: 5vh 0 0 5vh;
}
</style>
