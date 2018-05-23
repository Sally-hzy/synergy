export default {
  state:{
    EditState: true,
    KindList:[
      {
        title:'Java'
      },
      {
        title:'c/cpp/c#'
      },{
        title:'html/css/js'
      },{
        title:'mysql'
      },{
        title:'abac'
      },{
        title:'r'
      },{
        title:'e'
      },{
        title:'Java1'
      },{
        title:'Java2'
      },{
        title:'Java3'
      },{
        title:'Java4'
      },{
        title:'Java5'
      },{
        title:'Java6'
      }
    ],
    BlogList:[
      {
        title:'博客一说着不为人知的事情',
        kind:'java',
        author:'huzong',
        content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
        '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
      },{
        title:'博客2说着不为人知的事情',
        kind:'java',
        author:'huzong',
        content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
        '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
      },{
        title:'博客3说着不为人知的事情',
        kind:'java',
        author:'huzong',
        content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
        '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
      },{
        title:'博客4说着不为人知的事情',
        kind:'java',
        author:'huzong',
        content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
        '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
      },{
        title:'博客4说着不为人知的事情',
        kind:'java',
        author:'huzong',
        content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
        '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
      },{
        title:'博客4说着不为人知的事情',
        kind:'java',
        author:'huzong',
        content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
        '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
      },{
        title:'博客4说着不为人知的事情',
        kind:'java',
        author:'huzong',
        content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
        '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
      },{
        title:'博客4说着不为人知的事情',
        kind:'java',
        author:'huzong',
        content:'本章将讲解 Bootstrap 徽章（Badges）。徽章与标签相似，主要的区别在于徽章的边角更加圆滑' +
        '徽章（Badges）主要用于突出显示新的或未读的项。如需使用徽章，只需要把 badge添加到链接、Bootstrap 导航等这些元素上即可。'
      }
    ],
    User:{
      name:'huzong',
      img:'chou',
      description:'这家伙很懒，什么也没留下...',
      age:'21',
    }

  },
  mutations:{
    EnterEdit(state){
      state.EditState = false;
    },
    ReturnEdit(state){
      state.EditState = true;
      window.history.go(0);
    }
  }
}
