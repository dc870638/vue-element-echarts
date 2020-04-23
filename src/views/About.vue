<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <input type="text" v-model="input_msg">
    <button @click="addNum">
        点击+1
    </button>
    <button @click="decreaseNum">
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

