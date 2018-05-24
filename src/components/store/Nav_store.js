export default {
  state:{
    Message:localStorage.user,
    LandingState:localStorage.landing,
    User:{},
  },
  mutations: {
    Login: function (state) {
      /*
      提交请求，下面三行在请求成功里
      axios.get(url, {
         }
      })
      .then(function (response) {
          state.LandingState = "1";//狗比localstorage不能存储boolean值  wtf
          localStorage.setItem('landing', "1");
          localStorage.setItem('user', state.Message);
      })
      .catch(function (error) {
        console.log(error);
      });
       */
      state.LandingState = "1";//狗比localstorage不能存储boolean值  wtf
      localStorage.setItem('landing', "1");
      localStorage.setItem('user', state.Message);
    },
    LoginOut: function (state) {
      state.LandingState ="2";
      state.Message = "游客"
      localStorage.setItem('landing', "2");
      localStorage.setItem('user', "游客");
    },
    up(state){
      state.LandingState = "1";
      state.Message = localStorage.user
    },
    down(state){
      state.LandingState = "2";
      state.Message = "游客"
    }
  }
}
