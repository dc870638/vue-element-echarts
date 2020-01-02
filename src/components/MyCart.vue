<template>
    <div>
        <table>
            <tr>
                <th>课程名称</th>
                <th>课程单价</th>
                <th>数量</th>
                <th>单项总价</th>
                <th>总价</th>
            </tr>
            <tr v-for='(item, index) in courseList'>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td><button @click='reduceNum(item,index)'>-</button>{{ item.num }}<button @click='addNum(item)'>+</button></td>
                <td>{{ item.price*item.num }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props:['courseList'],
        methods: {
            reduceNum(item,index){
                console.log(item.num)
                if(item.num >= 1){
                    item.num -= 1
                }else {
                    alert('已经到0啦，需要删除吗？')
                }
            },
            addNum(item,index){
                item.num += 1
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>