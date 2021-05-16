import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // userDetails: [],
    users: [],
    loggedInUserDetails: null,
    restaurents: [
      {
        id: 1,
        img: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
        name: 'Deccan Chef',
        rating: '4.5',
        cuisine: 'Hyderabadi, Biryani, Mughlai',
        menuList: [
          {
            itemId: 'item1',
            name: 'Chicken Biryani',
            price: 200,
            quantity: 0,
          },
          {
            itemId: 'item2',
            name: 'Mutton Biryani',
            price: 300,
            quantity: 0,
          },
          {
            itemId: 'item3',
            name: 'Veg Biryani',
            price: 400,
            quantity: 0,
          },
          {
            itemId: 'item4',
            name: 'Mixed Biryani',
            price: 100,
            quantity: 0,
          },
        ],
      },
      {
        id: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6AlsY64CMBtlrPiP137YFtHq-asKTix06Q&usqp=CAU',
        name: 'Grand Hotel',
        rating: '4.8',
        cuisine: 'North Indian, Biryani, Mughlai',
        menuList: [
          {
            itemId: 'item1',
            name: 'Mixed Biryani',
            price: 200,
            quantity: 0,
          },
          {
            itemId: 'item2',
            name: 'Mutton Biryani',
            price: 300,
            quantity: 0,
          },
          {
            itemId: 'item3',
            name: 'Chicken fry piece biryani',
            price: 400,
            quantity: 0,
          },
          {
            itemId: 'item4',
            name: 'Chicken Boneless Biryani',
            price: 100,
            quantity: 0,
          },
        ],
      },
      {
        id: 3,
        img: 'https://myfoodstory.com/wp-content/uploads/2018/09/The-Best-Chicken-Biryani-Recipe-2.jpg',
        name: 'Mehfil Restaurent',
        rating: '4.0',
        cuisine: 'North Indian, Chinese, Mughlai',
        menuList: [
          {
            itemId: 'item1',
            name: 'Chicken Dhum Biryani',
            price: 200,
            quantity: 0,
          },
          {
            itemId: 'item2',
            name: 'Mixed Biryani',
            price: 300,
            quantity: 0,
          },
          {
            itemId: 'item3',
            name: 'Chicken Biryani',
            price: 400,
            quantity: 0,
          },
          {
            itemId: 'item4',
            name: 'Mutton Biryani',
            price: 100,
            quantity: 0,
          },
        ],
      },
      {
        id: 4,
        img: 'https://c.ndtvimg.com/2019-06/s71ihu9_biryani_625x300_05_June_19.jpg',
        name: 'Gismath',
        rating: '4.9',
        cuisine: 'South Indian, Biryani, Mughlai',
        menuList: [
          {
            itemId: 'item1',
            name: 'Veg Biryani',
            price: 200,
            quantity: 0,
          },
          {
            itemId: 'item2',
            name: 'Chicken Biryani',
            price: 300,
            quantity: 0,
          },
          {
            itemId: 'item3',
            name: 'Egg dhum Biryani',
            price: 400,
            quantity: 0,
          },
          {
            itemId: 'item4',
            name: 'Mixed Biryani',
            price: 100,
            quantity: 0,
          },
        ],
      },
      {
        id: 5,
        img: 'https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11-720x720.jpg',
        name: 'Platform65',
        rating: '4.1',
        cuisine: 'South Indian, Biryani, Mughlai',
        menuList: [
          {
            itemId: 'item1',
            name: 'Mutton Biryani',
            price: 200,
            quantity: 0,
          },
          {
            itemId: 'item2',
            name: 'Plain Biryani',
            price: 300,
            quantity: 0,
          },
          {
            itemId: 'item3',
            name: 'Veg Biryani',
            price: 400,
            quantity: 0,
          },
          {
            itemId: 'item4',
            name: 'Deep fry piece Biryani',
            price: 100,
            quantity: 0,
          },
        ],
      },
      {
        id: 6,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6AlsY64CMBtlrPiP137YFtHq-asKTix06Q&usqp=CAU',
        name: 'Krithunga',
        rating: '4.2',
        cuisine: 'South Indian, Chinese, Mughlai',
        menuList: [
          {
            itemId: 'item1',
            name: 'Mutton Biryani',
            price: 200,
            quantity: 0,
          },
          {
            itemId: 'item2',
            name: 'Chicken Biryani',
            price: 300,
            quantity: 0,
          },
          {
            itemId: 'item3',
            name: 'Mixed Biryani',
            price: 400,
            quantity: 0,
          },
          {
            itemId: 'item4',
            name: 'Veg Biryani',
            price: 100,
            quantity: 0,
          },
        ],
      },
      {
        id: 7,
        img: 'https://myfoodstory.com/wp-content/uploads/2018/09/The-Best-Chicken-Biryani-Recipe-2.jpg',
        name: 'Paradize',
        rating: '4.5',
        cuisine: 'Hyderabadi, Biryani, Mughlai',
        menuList: [
          {
            itemId: 'item1',
            name: 'Mattar Panner Biryani',
            price: 200,
            quantity: 0,
          },
          {
            itemId: 'item2',
            name: 'Potato Biryani',
            price: 300,
            quantity: 0,
          },
          {
            itemId: 'item3',
            name: 'Mixed Biryani',
            price: 400,
            quantity: 0,
          },
          {
            itemId: 'item4',
            name: 'Fry piece Biryani',
            price: 100,
            quantity: 0,
          },
        ],
      },
      {
        id: 8,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6AlsY64CMBtlrPiP137YFtHq-asKTix06Q&usqp=CAU',
        name: 'RK Restaurent',
        rating: '3.8',
        cuisine: 'Indian, Biryani, Mughlai',
        menuList: [
          {
            itemId: 'item1',
            name: 'Mattar Panner Biryani',
            price: 200,
            quantity: 0,
          },
          {
            itemId: 'item2',
            name: 'Potato Biryani',
            price: 300,
            quantity: 0,
          },
          {
            itemId: 'item3',
            name: 'Chicken Biryani',
            price: 400,
            quantity: 0,
          },
          {
            itemId: 'item4',
            name: 'Mutton Biryani',
            price: 100,
            quantity: 0,
          },
        ],
      },
      {
        id: 9,
        img: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg',
        name: 'Chaandu Restaurent',
        rating: '4.0',
        cuisine: 'North Indian, Chinese, Mughlai',
        menuList: [
          {
            itemId: 'item1',
            name: 'Mattar Panner',
            price: 200,
            quantity: 0,
          },
          {
            itemId: 'item2',
            name: 'Malai Kulfi',
            price: 300,
            quantity: 0,
          },
          {
            itemId: 'item3',
            name: 'Tandoori Roti',
            price: 400,
            quantity: 0,
          },
          {
            itemId: 'item4',
            name: 'Biryani',
            price: 100,
            quantity: 0,
          },
        ],
      },
    ],
    discount: 0.15,
    gst: 20,
    delivaryCharges: 50,
    finalAmount: 0,
  },
  mutations: {
    addItems(state, payload) {
      console.log(payload);
      console.log(state.restaurents);
      state.restaurents[payload.index].menuList[payload.id].quantity += 1;
    },
    removeItems(state, payload) {
      console.log(payload);
      console.log(state.restaurents);
      if (state.restaurents[payload.index].menuList[payload.id].quantity > 0) {
        state.restaurents[payload.index].menuList[payload.id].quantity -= 1;
      }
    },
    setUserDetails: (state, payload) => {
      state.userDetails = payload;
    },
    addUser (state, payload) {
      state.users.push(payload)
      localStorage.setItem('users', JSON.stringify(state.users))
      alert('Now you can login please!');
      router.push('/')
    },
    saveLoggedInUserDetails (state, payload) {
      state.loggedInUserDetails = payload;
      router.push('/home')
    },
    saveUpdatedUserDetails (state, payload) {
      state.loggedInUserDetails = payload
      let index = state.users.findIndex(item => item.email === payload.email)
      state.users[index] = payload
    },
    logout (state) {
      state.loggedInUserDetails = null;
      // go to login page
      router.push('/')
      // console.log(state.loggedInUserDetails);
    },
    getLocalStoreItems (state) {
      console.log('localStorage.getItem()', localStorage.getItem('users'))
      if (localStorage.getItem('users')) {
        state.users = JSON.parse(localStorage.getItem('users'))
      }
    }
  },
  actions: {
    addItems: (context, payload) => {
      context.commit('addItems', payload);
      console.log('Actions', payload);
    },
    removeItems: (context, payload) => {
      context.commit('removeItems', payload);
    },
    loginUser (context, payload) {
      const user = context.state.users.find(user => {
        return user.email === payload.email
      })
      if (user) {
        if (user.password === payload.password && user.name === payload.name) {
          // go to home page
          context.commit('saveLoggedInUserDetails', user)
        } else {
          alert('password or user name is incorrect')
        }
      } else {
        // go to register page
        alert('User does not exit. Please register first..!')
        router.push('/register')
      }
    },
    createUser (context, payload) {
      const user = context.state.users.find(user => {
        return user.email === payload.email
      })
      if (user) {
        alert('User is already exist')
      } else {
        // we cant update state directly from action
        // use mutations to update state
        context.commit('addUser', payload)
      }
    },
    updateUserDetails (context, payload) {
      context.commit('saveUpdatedUserDetails', payload)
    },
    logoutUser (context) {
      context.commit('logout');
    }
  },
  getters: {
  },
  modules: {
  },
});
