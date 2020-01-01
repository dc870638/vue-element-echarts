<template>
  <div>
    <h1>购物车</h1>
    <hr />
    <div>
      <div>
        <h2>添加课程</h2>
        <label for>课程名称: </label>
        <input type="text" />
      </div>
      <div>
        <label for>课程价格: </label>
        <input type="text" />
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
    </div>
  </div>
</template>

<script>
export default {
  name: "shopcart",
  data() {
    return {
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
  }
};
</script>

<style lang="scss" scoped>
</style>