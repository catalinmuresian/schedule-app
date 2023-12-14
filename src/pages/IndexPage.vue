<template>
  <q-page class="flex flex-center">
    <q-btn @click="addEvent()">add event</q-btn>
    <ul>
      <li v-for="{id, name, email} in events">
        <span>{{ id }}</span>
        <span>{{ name }}</span>
        <span style="color: red">{{ email }}</span>
        <q-btn @click="deleteEvent(id)">delete</q-btn>
        <q-btn @click="editEvent(id)">edit</q-btn>
      </li>
    </ul>
  </q-page>
</template>

<script setup>

import {useStore} from "vuex";
import {computed, ref} from "vue";

const { dispatch, state } = useStore()

dispatch('get_events')

const events = computed(() => {
  return state.data.events
})

const id = ref(1)

function addEvent() {
  dispatch('create_event')
}

function deleteEvent (id) {
  dispatch('delete', id)
}

function editEvent (id) {
  dispatch('edit', id)
}


// const events = computed(() => {
//   return store.state.events
// })

</script>
