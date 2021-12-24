import Vuex from 'vuex';
import { axios } from './plugins/axios'

import actions from './store/actions'
import mutations from './store/mutations'
import getters from './store/getters'
import state from "./store/state";

const axiosPlugin = store => {
   store.$axios = axios
}

export default new Vuex.Store({
	state,
    mutations,
    getters,
    actions,
    plugins: [axiosPlugin]
})