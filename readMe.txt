1. Vux allows us to create centralized data store
 which can be accessed by all components in the app

2. This is store also known as a "single source of truth"


a. /// SETTING UP A STORE //

3. To use store first we should install vuex:
  npm install vuex

4. after installing it make store folder and store.js in it
    
    Vue.use(Vuex);
    export const store = new Vuex.Store({
      state: {
        products: [
          { name: "bananna skin", price: 20 },
          { name: "Shiny star", price: 40 },
          { name: "Green shells", price: 60 },
          { name: "Red shells", price: 80 }
        ],
      },
    });

5. Then setup store.js: import it in main.js and set it in Vue instance:
    
    new Vue({
      store: store,
      render: h => h(App),
    }).$mount('#app')




b. /// USING STORE IN COMPONETNS  ////

7. Then we can use it in any component by
    this.$store.state.<propertyname>

8. Then we can use computed to show them on the page:
    computed: {
      products() {
        return this.$store.state.products;
      },
    }


c. /// USING GETTERS(are functions) for MODIFYING STATES ///

9. Using getters in store.js to avoid duplication 
    getters are the modified version of states in store:
    and then use getters in computed

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


d. /// USING MUTATION(are functions) TO CHANGE STATES WITH TRACKING ///
  
10. using mutation to change the data in store,
  actually we can change the data in store normally but
  changes can not be tracked but by using mutations changes can be tracked:
  check it in Vue dev tool

  mutations: {
    reducePrice(state, payload) {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },

  we can use mutations inside methods:
    this.$store.commit('mutationName', payload);


e. /// USING ACTIONS BETWEEN MUTATIONS AND COMPONETNST 
    /// TO PERFORM ASYNC TASK ///
      
  11. it is the good practice to use actions for
    using every mutations because mutation can not track asynchronous
    tasks:

    actions: {
      // context is somehow like store
      reducePrice(contex, payload) {
        setTimeout(() => {
          // comitting a mutation
          contex.commit('reducePrice', payload);
        }, 2000)
      }
    }
     we can use actions inside methods:
      this.$store.dispatch('actionName', payload);


f. /// MAPPING ACTIONS AND GETTERS TO COMPONETNS ///

    12. Using mapActions and mapGetters from vuex
      to map arbitrary getters and actions in computed and methods
      of a component 
