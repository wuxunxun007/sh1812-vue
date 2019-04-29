export default {
  state: {
    bannerlist: [1, 2, 3, 4],
    prolist: []
  },
  getters: {
  },
  actions: {
    getbannerlist (context) {
    },
    getprolist (context) {
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
