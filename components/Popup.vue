<template>
  <v-dialog
    class="dialog"
    v-model="dialog"
    width="500"
  >
    <div
      class="btn-dialog white--text"
      color="info"
      slot="activator"
    >
      Créer tâche
    </div>
    <v-card>
      <v-card-title>
        Créer
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="title"
            label="title"
            :rules="titleRules"
            required
          ></v-text-field>
          <v-select
            v-model="taskReceiver"
            label="Atribué à:"
            :items="TASKERS"
            :rules="taskersRules"
            required
          ></v-select>
          <v-btn
          :disabled="!valid"
            color="success"
            @click="validate"
          >
          Valider
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

import {mapGetters} from 'vuex'
export default {


  data () {
    return {
      dialog: false,
      valid: true,
      CardTitle: '',
      title: '',
      completed: false,
      taskReceiver: '',
      titleRules: [
        v => !!v || 'ce champs doit être remplis'
      ],
      taskersRules: [
        v => !!v || 'Une personne doit être selectionnée'
      ]

    }
  },

  computed: {
    ...mapGetters(['TASKERS'])
  },

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        let data = {
          title: this.title,
          taskReceiver : this.taskReceiver,
          completed: this.completed,
          date: new Date()
        }
        this.dialog = false
        this.title = ''
        this.taskReceiver = ''
        this.$store.dispatch('SAVE_TODO', data)
      }
    }
  }
}
</script>

<style>
.dialog {
  position: relative;
}

.btn-dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  vertical-align: center;
  width: 180px;

}
</style>
