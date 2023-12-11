<script>
    import provideChild2 from '../components/ProvideChild2.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            provideChild2
        }
    }
</script>

<template>
    <div class="warp">
    <h1>父</h1>
    <provideChild2/>
    </div>
</template>

<style lang="scss" scoped>
    .warp{
        width: 400px;
        height: 400px;
        border: 1px solid black;
    }
</style>