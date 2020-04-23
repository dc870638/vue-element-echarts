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

    <table>
      <thead>
        <td>姓名</td>
        <td>年龄</td>
        <td>邮箱</td>
      </thead>
      <tr v-for='(item,index) in items'>
        <td >{{ item.name }}</td>
        <td >{{ item.age }}</td>
        <td >{{ item.mail }}</td>
      </tr>
    </table>
      
    </table>
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
        {name:'zhangsan',age:11,mail:'123#123.com'},
        {name:'lisi',age:12,mail:'456@123.com'},
        {name:'wangwu',age:13,mail:'789@123.com'},
      ]
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
