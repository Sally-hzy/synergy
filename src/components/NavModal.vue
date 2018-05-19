<template>
  <div>
    <!--模态框可以复写吗???-->
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
                  <input type="User" class="form-control" id="inputUser" placeholder="请输入用户名" v-model="$store.state.Nav.Admin">
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword" class="col-sm-2 control-label">密码：</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword" placeholder="请输入密码">
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
                  <button type="text" class="btn btn-default">点击更换夜间模式</button>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
    <div class="modal fade" id="UserCenter" tabindex="-1" role="dialog" aria-labelledby="UserCentert" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="UserCentert">您好游客，请登录！</h4>
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
        name: "NavModal"
    }
</script>

<style scoped>

</style>
