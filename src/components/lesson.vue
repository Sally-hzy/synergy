<template>
<div class="lesson">
      <a v-for="lesson in lessons">
        <div class="grid-content">
          <img v-bind:src="lesson.img">
        </div>
        <div class="lessoncontent">
          <h3>{{lesson.title}}</h3>
          <div class="lessoninfo">
            <span class="lessoninfospan">{{lesson.type}}</span>
            <span class="lessoninfospan">{{lesson.level}}</span>
            <span class="lessoninfospan">
        <i class="el-icon-news"></i>
        {{lesson.usernum}}
      </span>
            <span class="starbox">
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
      </span>
            <div class="lessonprice">￥{{lesson.price}}</div>
          </div>
        </div>
      </a>
</div>
</template>

<script>
    export default {
      name: "lesson",
      data() {
        return{
          lessons:[
            { img:'../static/image/Python.jpg',
              title:'全网最热Python3入门+进阶 更快上手实际开发',
              type:'实战',
              level:'初级',
              price:'336',
              usernum:'880'
            },{img:'../static/image/Python.jpg',
              title:'全网最热Python3入门+进阶 更快上手实际开发',
              type:'实战',
              level:'初级',
              price:'336',
              usernum:'880'
            },{img:'../static/image/Python.jpg',
              title:'全网最热Python3入门+进阶 更快上手实际开发',
              type:'实战',
              level:'初级',
              price:'336',
              usernum:'880'
            },{img:'../static/image/Python.jpg',
              title:'全网最热Python3入门+进阶 更快上手实际开发',
              type:'实战',
              level:'初级',
              price:'336',
              usernum:'880'
            },{img:'../static/image/Python.jpg',
              title:'全网最热Python3入门+进阶 更快上手实际开发',
              type:'实战',
              level:'初级',
              price:'336',
              usernum:'880'
            },{img:'../static/image/Python.jpg',
              title:'全网最热Python3入门+进阶 更快上手实际开发',
              type:'实战',
              level:'初级',
              price:'336',
              usernum:'880'
            }
          ]
      }
      }
    }
</script>

<style scoped>
  img{
    width:100%;
    height:100%;
    border-radius: 8px;
    cursor: pointer;
  }
  .grid-content {
    border-radius: 8px;
  }
  .lessoncontent{
    padding:5% 4%;
  }
  .lesson{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .lessoninfo{
    font-size: 0.75rem;
    color: #93999F;
    line-height: 24px;
    margin-top: 8px;
    font-weight: 400;
    text-align: left;
  }
  .lessoninfospan{
    margin-right: 3%;
  }
  .starbox{
    color: #f90;
    font-size: 0.75rem;
  }
  a{
    width:18%;
  }
  h3{
    margin: 0;
    font-size: 1rem;
    color: #07111B;
    line-height: 24px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    max-height: 46px;
    transition: all .3s;
    font-weight: 400;
    text-align: justify;
    cursor: pointer;
  }
  h3:hover{
    color: #F01414;
  }
</style>
