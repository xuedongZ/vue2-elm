import { cityGuess } from '../service/getData'
import { GET_DATA2 } from './mutation-types.js'

export default {
  getData({ commit, state }) {
    cityGuess().then(res => {
      commit(GET_DATA2, { data: res })
    })
  }
}
