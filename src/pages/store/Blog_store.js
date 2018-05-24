export default {
  state:{
    EditState: true,
    User:{},
    KindList:[],
    BlogList:[],
    BlogState:false
  },
  mutations:{
    EnterEdit(state){
      state.EditState = false;
    },
    ReturnEdit(state){
      state.EditState = true;
      window.history.go(0);
    },
    EnterBlog(state){
      state.BlogState = true;
    },
    ReturnBlog(state){
      state.BlogState = false;
    }
  }
}
