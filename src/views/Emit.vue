<script>
    import child2 from "../components/child2.vue";
    export default{
        data(){
            return{
                childText:"",
            }
        },
        components:{
            child2
        },
        methods:{
            emitObj(params){
                console.log(params)
                this.childText = params
            }
        }
    }
</script>

<template>
    <h1>Emit</h1>
    {{ this.childText }}
    <div class="show">
        <child2 @apple="emitObj"/>
        <!-- 監聽apple事件 -->
        <!-- "v-on: == @" -->
    </div>

</template>

<style lang="scss" scoped>
</style>