1. Vux allows us to create centralized data store
 which can be accessed by all components in the app

2. This is store also known as a "single source of truth"


a. /// SETTING UP A STORE //

  3. To use store first we should install vuex:
    npm install vuex

  4. after installing it make store folder and store.js in it

  5. Then make store.js

  6. Then import store.js in main.js and use it in root component


b. /// USING STORE IN COMPONETNS  ////

  7. Then we can use it in any component by
      this.$store.state.<propertyname>

  8. Then we can use computed to show them on the page


c. /// USING GETTERS for MODIFYING STATES ///

  9. Using getters in store.js to avoid duplication 
      getters are the modified version of states in store


d. /// USING MUTATION TO CHANGE STATES WITH TRACKING ///
    10. using mutation to change the date in store,
      actually we can change the data in store normally but
      changes can not be tracked but by using mutations:
        this.$store.commit('mutationName', payload);


e. /// USING ACTIONS BETWEEN MUTATIONS AND COMPONETNST 
    /// TO PERFORM ASYNC TASK ///
      
      11. it is the good practice to use actions for
        using every mutations:
          this.$store.dispatch('actionName', payload);


f. /// MAPPING ACTIONS AND GETTERS TO COMPONETNS ///

    12. Using mapActions and mapGetters from vuex
      to map arbitrary getters and actions in computed and methods
      of a component 
