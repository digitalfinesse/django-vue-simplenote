import Vue from 'vue'
import Vuex from 'vuex'
import { Note } from '../api/notes'
import {
  ADD_NOTE,
  REMOVE_NOTE,
  SET_NOTE
} from './mutation-types'

Vue.use(Vuex)

// состояние
const state = {
  notes: [] // список заметок
}

// геттеры
const getters = {
  notes: state => state.notes // получаем список заметок из состояния
}

// мутации
const mutations = {
  // добавить заметку в список
  [ADD_NOTE] (state, note) {
    state.notes = [note, ...state.notes]
  },

  // удалить заметку в список
  [REMOVE_NOTE] (state, { id }) {
    state.notes = state.notes.filter(note => {
      return note.id !== id
    })
  },

  // задать список заметок
  [SET_NOTE] (state, { notes }) {
    state.notes = notes
  }
}

// действия
const actions = {
  createNote ({ commit }, noteData) {
    Note.create(noteData).then(note => {
      commit(ADD_NOTE, note)
    })
  },

  deleteNote ({ commit }, note) {
    Note.delete(note).then(response => {
      commit(REMOVE_NOTE, note)
    })
  },

  getNotes ({ commit }) {
    Note.list().then(notes => {
      commit(SET_NOTE, { notes })
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
