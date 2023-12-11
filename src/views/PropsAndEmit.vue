<script>
    import PE1 from "../components/PE1.vue"
    import PE2 from "../components/PE2.vue"
    export default{
        data(){
            return{
                signInfo:"",
                page:1,
                
            }
        },
        components:{
            PE1,
            PE2,
        },
        methods:{
            Sign(info){
                console.log(info)
                this.signInfo = {...info}
                // this.signInfo = info
            },
            pageChange(){
                if(this.page ==1)
                    this.page++;
                else if(this.page == 2)
                    this.page--;
                console.log(this.page)
            },
            hh(){
                console.log("hh")
            }
        }
    }
</script>

<template>
    {{ hh() }}
    {{ signInfo }}
    <PE1 v-show="page == 1" @sign="Sign"/>
    <PE2 :user="signInfo" :test="signInfo.name" v-show="page == 2" /> 
    <!-- v-show 不支持在 <template> 元素上使用 -->

    <button type="btn" @click="pageChange()">pageChange</button>
</template>

<style lang="scss" scoped></style>