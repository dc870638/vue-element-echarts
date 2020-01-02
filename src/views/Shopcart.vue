<template>
  <div>
    <h1>购物车</h1>
    <hr />
    <div>
      <div>
        <h2>添加课程</h2>
        <label for>课程名称: </label>
        <input type="text" v-model='courseInfo.name'/>
      </div>
      <div>
        <label for>课程价格: </label>
        <input type="text" v-model='courseInfo.price'/>
      </div>
      <div><button @click='addCourseToList'>添加课程到购物车</button></div>
      <div>
        <h2>课程列表</h2>
        <table>
          <tr>
            <th>课程名称</th>
            <th>课程价格</th>
          </tr>
          <tr v-for="(item, index) in courseList" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </table>
      </div>
      <div>
        <my-cart></my-cart>
      </div>
    </div>
  </div>
</template>

<script>
import MyCart from '../components/MyCart'
export default {
  name: "shopcart",
  components:{
    MyCart
  },
  data() {
    return {
      courseInfo:{
        name:'',
        price:''
      },
      courseList: [
        {
          name: "Python",
          price: 100
        },
        {
          name: "PHP",
          price: 200
        },
        {
          name: "Java",
          price: 300
        }
      ]
    };
  },
  methods: {
    addCourseToList(){
      this.courseList.push(this.courseInfo)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>