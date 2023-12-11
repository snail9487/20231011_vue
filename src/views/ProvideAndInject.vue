<script>
    import provideChild1 from '../components/ProvideChild1.vue'
    export default{
        data(){
            return{
                dataMsg:"message",
            }
        },
        components:{
            provideChild1
        },
        provide(){
            return{
                msg:this.dataMsg,
            }
        }
    }
</script>

<template>
    <div class="warp">
        <h1>這是爺爺</h1>
        <p>這是爺爺的變數 dataMsg: {{ dataMsg }}</p>
        <provideChild1/>
    </div>
</template>

<style lang="scss" scoped>
.warp{
    width: 600px;
    height: 600px;
    border: 1px solid black;
}
</style>