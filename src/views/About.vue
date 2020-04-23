<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <input type="text" v-model="input_msg">
    <button class="btn1" @click="addNum">
        点击+1
    </button>
    <button class="btn2" @click="decreaseNum">
        点击-1
    </button>
  </div>
</template>

<script>

export default {
  name:'about',
  data(){
    return {
      input_msg:1
    }
  },
  created(){
    this.$axios.get('http://127.0.0.1:3000/users').then((data) => {
      console.log(data)
    })
  },
  methods:{
    addNum(){
      this.input_msg++
    },
    decreaseNum(){
      this.input_msg--
    }
  }
}
</script>

<style scoped>
.btn1{
  /* height:100px; */
  background-image:linear-gradient(to right,orange,yellow,skyblue)
}
.btn2{
  background-image:linear-gradient(to left,rgba(255,0,0,0), rgba(255,0,0,1))
}
</style>

