export default {
  state:{
    User:{},
    KindList:[],
    TipList:[],
    TipState:false
  },
  mutations:{
    EnterTip(state){
      state.TipState = true;
    },
    ReturnTip(state){
      state.TipState = false;
      window.history.go(0);
    }
  }
}
