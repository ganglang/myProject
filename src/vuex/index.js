// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import Vuex from 'vuex'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initData: []
  },
  mutations: {
    setInitData: function (state, data) {
      state.initData = data.data.rows
    },
    priceChange: function (state, {id, price}) {
      state.initData.forEach((item) => {
        // eslint-disable-next-line eqeqeq
        if (item.id == id) {
          item.price = price
          item.money = item.price * item.num
        }
      })
    },
    numberChange: function (state, {id, number}) {
      state.initData.forEach((item) => {
        // eslint-disable-next-line eqeqeq
        if (item.id == id) {
          item.num = number
          item.money = item.price * item.num
        }
      })
    },
    itemDelete: function (state, {id}) {
      state.initData.forEach((item, index) => {
        // eslint-disable-next-line eqeqeq
        // eslint-disable-next-line eqeqeq
        if (item.id == id) {
          state.initData.splice(index, 1)
        }
      })
    },
    itemAdd: function (state, object) {
      state.initData.push(object)
    }
  },
  getters: {},
  actions: {
    getInitData: function (context) {
      return new Promise(resolve => {
        axios.get('http://localhost:8080/api/json').then((response) => {
          console.log('请求成功')
          context.commit('setInitData', response)
          resolve()
        })
      })
    }
  }
})
