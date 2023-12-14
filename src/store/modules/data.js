
import axios from 'axios'


export const state = {
  events: [],
}
export const actions = {
  async get_events ({ commit }) {
    try {
      const { data } = await axios.get(`api/`)
      commit('SET_EVENTS', data)
    } catch (e) {
      console.log(e)
    }
  },
  async create_event ({ commit }) {
    try {
      const { data } = await axios.post(`/api/`, {

        name: 'test',
        color: 'red'
      })
    } catch (e) {
      console.log(e)
    }
  },
  async delete ({ commit }, id) {
    try {
      const { data } = await axios.delete(`/api/${id}`)
    } catch (e) {
      console.log(e)
    }
  },

  async edit ({ commit }, id) {
    try {
      const { data } = await axios.put(`/api/${id}`, {
        email: 'editat'
      })
    } catch (e) {
      console.log(e)
    }
  },

 }
export const mutations = {
  SET_EVENTS (state, data) {
    state.events = data
    console.log(state.events)
  }

}
