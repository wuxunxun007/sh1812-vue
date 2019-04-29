import api from '@/api'
export default {
  state: {
    bannerlist: [1, 2, 3, 4],
    prolist: []
  },
  getters: {
  },
  actions: {
    getbannerlist (context) {
      api.getData('/banner')
        .then(data => {
          console.log(data)
          context.commit('changebannerlist', data)
        })
    },
    getprolist (context) {
      api.getData('/douban')
        .then(data => {
          console.log(data)
          context.commit('changeprolist', data)
        })
    }
  },
  mutations: {
    changebannerlist (state, data) {
      state.bannerlist = data
    },
    changeprolist (state, data) {
      state.prolist = data
    }
  }
}
