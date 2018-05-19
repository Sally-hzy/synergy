export default {
  state:{
    Admin: '请登陆...',
    LandingState:false,
    User:[
      {
        name: 'huzong',
        password: '123456'
      },
      {
        name: 'Gb',
        password: '12345'
      }
    ]
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
