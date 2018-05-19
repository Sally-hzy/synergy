export default {
  state:{
    Admin: '请登陆...',
    LandingState:false,
  },
  mutations:{
    Login(state){
      state.LandingState = true;
    },
    LoginOut(state){
      state.Admin = '请登陆...';
      state.LandingState = false;
    }
  }
}
