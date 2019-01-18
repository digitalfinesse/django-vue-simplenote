<template lang="pug">
  #app
    .card(v-for="note in notes")
      .card-header
        button.btn.btn-clear.float-right(@click="deleteNote(note)")
        .card-title {{ note.title }}
        .card-subtitle {{ note.body }}
      .card-body
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'list-notes',
  computed: mapGetters(['notes']),
  methods: {
    deleteNote (note) {
      // вызываем deleteNote из хранилища, которое удаляет заметку из БД по запросу к API
      this.$store.dispatch('deleteNote', note)
    }
  },
  beforeMount () {
    // перед загрузкой страницы получаем список всех имеющихся заметок - вызываем getNotes из хранилища
    this.$store.dispatch('getNotes')
  }
}
</script>

<style>
  header {
    margin-top: 50px;
  }
</style>
