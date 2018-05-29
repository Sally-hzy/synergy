export default {
  state:{
    EditState: true,
    User:{},
    KindList:[],
    BlogList:[],
    BlogRecommend:[],
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
      axios.get(url,{

        }
      ).then(function (response) {
          //console.log(response);
      }).catch(function (error) {
          //console.log(error);
      });
    },
    ReturnBlog(state){
      state.BlogState = false;
    }
  }
}
