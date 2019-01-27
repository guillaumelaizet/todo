<template>
  <section class="contains">
    <v-app>
      <Header :toDoList="true"/>
      <div v-if="TODOS.length > 0" class="render">
        <p id="title">Les Tâches</p>
        <p id="total-complete">{{iscompleted}} tâche(s) sur {{TODOS.length}} complétée(s)</p>
        <v-list
          class="list"
        >
          <v-list-tile v-for="(todo, index) in TODOS"
          :key="index" class="list-tile">
            <v-list-tile-content class="list-tile-content">
              <v-list-tile-title>{{todo.title}}
              <span class="completed" v-if="todo.completed">(Tâche complétée)</span>
              <span class="not-completed" v-else>(Tâche non complétée)</span>
            </v-list-tile-title>
              <v-list-tile-sub-title>
              <span>destinée à <strong>{{todo.taskReceiver}}</strong></span>
              -- <small>{{todo.date}}</small>
            </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-btn @click="detailTask(todo.id)" color="warning" >Changer</v-btn>
            <v-btn class="btn-delete" color="error" @click="deleteTask(todo.id)">Supprimer</v-btn>
          </v-list-tile>
        </v-list>
      </div>
      <div v-else class="no-task">
        <p>Il n'y a pas encore de tâche(s) définie(s)</p>
      </div>
      <Footer/>
    </v-app>
  </section>
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

  computed: {
    ...mapGetters(['TODOS']),
    iscompleted () {
      return this.$store.state.todos.filter(todo => todo.completed === true).length
    },

    notCompleted () {
      return this.$store.state.todos.filter(todo => todo.completed === false).length
    }
  },


  methods: {
    detailTask (id) {
      this.$router.push('/task?id=' + id)
    },

    deleteTask (id) {
      console.log(id)
      this.$store.dispatch('DELETE_TASK', id)
    }
  }
}
</script>

<style>

.render {
  margin-top: 10vh;
}

#title{
    margin: 0 auto;
    text-align: center;
    color: grey;
    font-size: 2em;
}

#total-complete {
  color: grey;
  font-size: 1.5em;
  text-align: center;
  margin: 2vh auto;
}

.list {
  width: 70%;
  text-align: center;
  margin: auto;
}

.list-tile {
  padding: 2vh;
  flex-wrap: nowrap;
}

.list-tile:hover {
  background: #e6e6e6;

}

.no-task {
  margin: auto;
  color: grey;
  font-size: 2em;
}

.completed {
  color: #2E7D32;
}

.not-completed {
  color: #ffb300;
}
</style>
