<template lang="pug">
  form.form-horizontal(@submit="submitForm")
    .form-group
      .col-3
        label.form-label Title
      .col-9
        input.form-input(type="text" v-model="title" placeholder="Введите заголовок заметки")
    .form-group
      .col-3
        label.form-label Body
      .col-9
        textarea.form-input(v-model="body" rows="8" placeholder="Введите текст заметки")
    .form-group
      .col-3
      .col-9
        button.btn.btn-primary(type="submit") Создать
</template>

<script>
export default {
  name: 'create-note',
  data () {
    return {
      'title': '',
      'body': ''
    }
  },
  methods: {
    submitForm (event) {
      this.createNote() // запрос на создание заметки

      this.title = '' // следом очищаем поля для следующей
      this.body = ''

      event.preventDefault() // нужно для того, чтобы страница НЕ перезагружалась после нажатия на сабмит
    },
    createNote () {
      // вызываем действие CreateNote из хранилища, которое отправит запрос на создание новой заметки к API
      this.$store.dispatch('createNote', { title: this.title, body: this.body })
    }
  }
}
</script>
