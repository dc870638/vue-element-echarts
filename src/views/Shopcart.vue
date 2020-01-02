<template>
  <div>
    <h1>购物车</h1>
    <hr>
    <div>
      <div>
        <h2>添加课程</h2>
        <label for>课程名称:</label>
        <input type="text" v-model="courseInfo.name">
      </div>
      <div>
        <label for>课程价格:</label>
        <input type="text" v-model="courseInfo.price">
      </div>
      <div>
        <button @click="addCourseToList">添加到课程列表</button>
      </div>
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
        <my-cart :courseList='courseList'></my-cart>
      </div>
    </div>
  </div>
</template>

<script>
import MyCart from "../components/MyCart";
export default {
  name: "shopcart",
  components: {
    MyCart
  },
  data() {
    return {
      courseInfo: {
        name: "",
        price: "",
        num:0
      },
      courseList: [
        {
          name: "Python",
          price: 100,
        num:0

        },
        {
          name: "PHP",
          price: 200,
        num:0

        },
        {
          name: "Java",
          price: 300,
        num:0

        }
      ]
    };
  },
  methods: {
    addCourseToList() {
      if (this.courseInfo.name !== "" && this.courseInfo.price !== "") {
        this.courseList.push(this.courseInfo);
        // this.courseInfo.name=''
        // this.courseInfo.price=''
      }else {
        alert('添加课程不能为空！')
      }
    }
  }
};
</script>

<style lang="scss" scoped>


</style>