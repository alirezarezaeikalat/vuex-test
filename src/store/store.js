import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

  strict: true,

  state: {
    products: [
      { name: "bananna skin", price: 20 },
      { name: "Shiny star", price: 40 },
      { name: "Green shells", price: 60 },
      { name: "Red shells", price: 80 }
    ],
  },
  // We can as many getter as we want
  getters: {

    saleProducts(state) {
      let saleProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        };
      });
      return saleProducts;
    },

  },

  mutations: {

    reducePrice(state, payload) {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }

  },

  actions: {

    // context is somehow like store
    reducePrice(contex, payload) {
      setTimeout(() => {
        // comitting a mutation
        contex.commit('reducePrice', payload);
      }, 2000)
    }
  }
});