<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">区域一</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">区域二</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">区域三</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">区域四</div>
      </el-col>
    </el-row>

    <ul>
      <li>姓名 -- 年龄 -- 邮箱</li>
      <li v-for="(item,index) in items">{{ item.name }} -- {{item.age}} -- {{item.mail}}  <button @click="remove(index)">点击删除</button></li> 
    </ul>
    <input type="text"/> <input type="number" name="" id=""> <input type="email" name="" id="">
       

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
    return{
      items:[
        {name:'zhangsan',age:11,mail:'123@123.com'},
        {name:'lisi',age:12,mail:'456@123.com'},
        {name:'wangwu',age:13,mail:'789@123.com'},
      ]
    }
  },
  methods: {
    remove(index){
      console.log('click')
      this.items.splice(index,1)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
