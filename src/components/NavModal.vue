<template>
  <div>
    <!--模态框可以复写吗???-->
    <!--login-->
    <div class="modal fade" id="Login" tabindex="-1" role="dialog" aria-labelledby="Logint" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="Logint">您好游客，请登录！</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="inputUser" class="col-sm-2 control-label">用户名：</label>
                <div class="col-sm-10">
                  <input type="User" class="form-control" id="inputUser" placeholder="请输入用户名" v-model="$store.state.Nav.Message">
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword" class="col-sm-2 control-label">密码：</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword" placeholder="请输入密码">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">滑动验证：</label>
                <div class="col-sm-10">
                  <div class="drag">
                    <div class="drag_bg"></div>
                    <div class="drag_text">{{confirmWords}}</div>
                    <div @mousedown="mousedownFn($event)" class="handler handler_bg"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="$store.commit('Login')" data-dismiss="modal">登陆</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <!--register-->
    <div class="modal fade" id="Register" tabindex="-1" role="dialog" aria-labelledby="Registert" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="Registert">您好游客，请注册！</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="RegisterUser" class="col-sm-2 control-label">用户名：</label>
                <div class="col-sm-10">
                  <input type="User" class="form-control" id="RegisterUser" placeholder="请输入用户名" v-model="$store.state.Nav.Admin">
                </div>
              </div>
              <div class="form-group">
                <label for="RegisterPassword" class="col-sm-2 control-label">密码：</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="RegisterPassword" placeholder="请输入密码">
                </div>
              </div>
              <div class="form-group">
                <label for="ReRegisterPassword" class="col-sm-2 control-label">再次输入密码：</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="ReRegisterPassword" placeholder="请输入密码">
                </div>
              </div>
              <div class="form-group">
                <label for="ReRegisterDesc" class="col-sm-2 control-label">个人描述：</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="ReRegisterDesc" placeholder="请输入描述">
                </div>
              </div>
              <div class="form-group">
                <label for="ReRegisterImg" class="col-sm-2 control-label">上传图片：</label>
                <div class="col-sm-10">
                  <input type="file" class="btn btn-default" onchange="loadFile(this.files[0])" id="ReRegisterImg"  >
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">已有账号，取消</button>
            <button type="button" class="btn btn-primary" @click="$store.commit('Register')" data-dismiss="modal">注册</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="Settings" tabindex="-1" role="dialog" aria-labelledby="Settingst" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="Settingst">设置界面</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="RegisterUser" class="col-sm-2 control-label">更换主题</label>
                <div class="col-sm-10">
                  <div class="btn-group">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" >
                      选择主题
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                      <li>
                        <a @click="Change(2)">清爽蓝</a>
                      </li>
                      <li>
                        <a @click="Change(1)">优雅黑</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">退出设置</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="UserCenter" tabindex="-1" role="dialog" aria-labelledby="UserCentert" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="UserCentert">个人中心</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal" role="form">
              更改个人资料
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="$store.commit('Login')" data-dismiss="modal">登陆</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="Messages" tabindex="-1" role="dialog" aria-labelledby="Messagest" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="Messagest">您好游客，请登录！</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal" role="form">

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="$store.commit('Login')" data-dismiss="modal">登陆</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
  </div>
</template>

<script>
    export default {
      name: "NavModal",
      components: {},
      props: {},
      data () {
        return {
          message:123,
          Admin:{
            username:'',
            password:''
          },
          beginClientX:0,      /*距离屏幕左端距离*/
          mouseMoveStata:false,    /*触发拖动状态  判断*/
          maxwidth:258,       /*拖动最大宽度，依据滑块宽度算出来的*/
          confirmWords:'拖动滑块验证',      /*滑块文字*/
          confirmSuccess:false              /*验证成功判断*/
        }
      },
      created(){
        //验证登陆状态
      },
      methods: {
        mousedownFn:function (e) {
          this.mouseMoveStata = true;
          this.beginClientX = e.clientX;
        },       //按下滑块函数
        successFunction(){
          $(".handler").removeClass('handler_bg').addClass('handler_ok_bg');
          this.confirmWords = '验证通过'
          $(".drag").css({'color': '#fff'});
          $(".handler").css({'left':this.maxwidth});
          $(".drag_bg").css({'width': this.maxwidth});
          $('body').unbind('mousemove');
          $('body').unbind('mouseup');
          this.confirmSuccess = true
        },                //验证成功函数
        Change(val){
          if(val == 1){
            $("#style").attr("href","../static/css/theme1.css");
            localStorage.setItem("sky","../static/css/theme1.css");
          }else if(val == 2){
            $("#style").attr("href","../static/css/theme.css");
            localStorage.setItem("sky","../static/css/theme.css");
          }
        }
      },
      mounted(){
        $('body').on('mousemove',(e) => {   //拖动，这里需要用箭头函数，不然this的指向不会是vue对象
          if(this.mouseMoveStata){
            var width = e.clientX - this.beginClientX;
            if(width>0 && width<=this.maxwidth){
              $(".handler").css({'left':width});
              $(".drag_bg").css({'width': width});
            }else if(width>this.maxwidth){
              this.successFunction();
            }
          }
        });
        $('body').on('mouseup',(e) => {     //鼠标放开
          this.mouseMoveStata = false;
          var width = e.clientX - this.beginClientX;
          if(width<this.maxwidth){
            $(".handler").css({'left':0});
            $(".drag_bg").css({'width': 0});
          }
        });
      }
    }
</script>

<style scoped>
  .drag{
    border-radius:3px;
    position: relative;
    background-color: #e8e8e8;
    width: 300px;
    height: 34px;
    margin-left: 30px;
    margin-top: 15px;
    line-height: 34px;
    text-align: center;
  }
  .handler{
    border-radius:3px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 40px;
    height: 32px;
    border: 1px solid #ccc;
    cursor: move;
    margin-top: 1px;
  }
  .handler_bg{
    background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==") no-repeat center;
  }
  .handler_ok_bg{
    background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==") no-repeat center;
  }
  .drag_bg{
    background-color: #7ac23c;
    height: 34px;
    width: 0px;
  }
  .drag_text{
    position: absolute;
    top: 0px;
    width: 300px;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    -o-user-select:none;
    -ms-user-select:none;
  }

</style>
