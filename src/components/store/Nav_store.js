export default {
  state:{
    Message:"您好游客请登录",
    LandingState:false,
    landingstate:localStorage.landingstate,
    message:localStorage.message,
    Admin:{
      username:'',
      password:''
    }
  },
  mutations: {
    Login(state) {
      state.LandingState = true;
      localStorage.landingstate = true;
      localStorage.message = state.Message;
    },
    LoginOut(state) {
      state.LandingState = false;
      state.Message = "您好游客请登录";
      localStorage.landingstate = false;
      localStorage.message = "您好游客请登录";
    }
  }
}
