<template>
    <div class="wrap">
        <div class="plan-item-title">
          <label class="title">{{plan.title}}</label>
        </div>
        <div class="plan-item-content">
          <div class="plan-item-banner" :style="{background:'url('+ plan.img +')'}">
            <div class="video">
              <p>导学视频</p>
            </div>
          </div>
          <div class="plan-item-box">
            <dl class="plan-step">
              <dd v-for="(n,index) in plan.tit" class="plan-stpe-box">
                <a class="plan-step-item" >
                  <span class="icon-order">{{index+1}}</span>
                  <p class="plan-step-tit">{{n}}</p>
                  <ul class="plan-step-course">
                    <li v-for="p in plan.content[index]">·{{p}}</li>
                  </ul>
                  <div class="etc">···</div>
                </a>
              </dd>
            </dl>
            <div class="info">
              <span class="num">
               <span>￥{{ plan.price }}</span>
              <span>{{ plan.usernum }}</span>
              </span>
              <a class="more">详情</a>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "learningpath",
        props:{
          plan:Object
        }
    }
</script>

<style scoped>
.wrap{
  padding-left: 3%;
  padding-bottom: 2%;
  border-left: 2px dashed #D9DDE1;
  text-align: justify;
}
.plan-item-title{
font-size: 1rem;
}
.title{
  color: red;
  font-weight: bold;
}
.plan-item-content{
  display: flex;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.06);
  border-radius: 12px;
  margin-top: 1.8%;
  width: 100%;
}
.plan-item-banner{
  background-size: cover;
  background-position: center;
  flex: 1;
}
.video{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.plan-item-box{
  padding: 1.5% 1.5% 0.5% 3.25%;
  flex: 9;
  height: auto;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
}
.plan-step{
    display: flex;
    margin-top: 2%;
    height: 12rem;
    width: 100%;
  }
  .plan-stpe-box{
    height: 90%;
    margin-right: 2%;
    font-size: 14px;
    flex: 1;
    position: relative;
  }
  .plan-step-item{
    position: relative;
    padding: 10% 12% 10% 10%;
    height: 100%;
    display: block;
    box-sizing: border-box;
    background: #F8FAFC;
    border: 1px solid #F3F5F7;
    border-radius: 8px;
    transition: all 0.5s;
    z-index: 3;
  }
  .plan-step-item:hover{
    height: auto;
    min-height: 100%;
    max-height: 200%;
    z-index: 5;
    background: #FFFFFF;
    box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.2);
  }
  .icon-order{
    font-family: 'DINCond-M';
    position: absolute;
    top: 5%;
    right: 3%;
    font-size: 36px;
    color: rgba(7, 17, 27, 0.08);
    line-height: 40px;
  }
  .plan-step-tit{
    color: #07111B;
  }
  .plan-step-course{
    max-height:50%;
    overflow: hidden;
    margin-top: 15%;
    transition: all 0.5s;
  }
  .plan-step-course li{
    font-size: 12px;
    max-height: 33%;
    color: #4D555D;
    margin-bottom: 5%;
    line-height: 131%;
    white-space: nowrap;
  }
  .info{
    font-size: 12px;
    color: #93999F;
    line-height: 24px;
    margin-top: 0.5%;
    margin-right: 3%;
    display: flex;
    justify-content: space-between;
  }
  .num{
    display: flex;
    justify-content: space-between;
    width: 12%;
  }
  .more{
    transition: all .3s;
  }
</style>
