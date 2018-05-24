export default {
  state:{
    ResouerceState:true,
    ResourceList:[],
    LabelList:[],
    DownloadList:[],
    Resource:{}
  },
  mutations:{
    EnterResource(state,id){
      state.ResouerceState = false;
      state.Resource = id
    },
    ReturnResource(state){
      state.ResouerceStatee = true;
      window.history.go(0);
    }
  }
}
