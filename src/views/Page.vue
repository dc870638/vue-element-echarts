<!--  -->
<template>
  <div>
      <div v-for='(item,index) in totalPage' :key="index">
          {{ item }}
      </div>
      <button @click='addPage'>上一页</button>
      <button @click="reducePage">下一页</button>
  </div>
</template>
<script>
export default {
  name: 'page',
  components: {
    
  },
  data() {
    return {
      items:[
          '数据1',
          '数据2',
          '数据3',
          '数据4',
          '数据5',
          '数据6',
          '数据7',
          '数据8',
          '数据9'
      ],
      //每页的数据条数
      pageSize:2,
      //共几页
      pageNum:'',
      //后端的数据（这里使用items展示）
      data:[],
      //当前页面
      currentPage:0,
      //当前显示的数据
      dataShow:'',
      //所有的页面数据
      totalPage:[]
    }
  },
  created() {
      this.pageNum = Math.ceil(this.items.length/this.pageSize)
    //   console.log(this.pageNum)
    for(let i=0;i<this.pageNum;i++){
        this.totalPage[i] = this.items.slice(this.pageSize*i,this.pageSize*(i+1))
        
        // console.log(i)
    }
    this.dataShow = this.totalPage[currentPage]
  },
  methods: {
    addPage(){
        // console.log('+')
        this.currentPage++
    },
    reducePage(){
        // console.log('-')
        this.currentPage--
    }
    
  },
  computed: {
    
  },
  watch: {
    
  }
}
</script>
<style scoped>
  
</style>