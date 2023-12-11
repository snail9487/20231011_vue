<script>
    export default{
        data(){
            return{

            }
        },
        inject:[
            "msg",
        ]
    }
</script>

<template>
    <div class="warp">
        <h1>這是孫子</h1>
        <p>{{ msg }}</p>
    </div>
</template>

<style lang="scss" scoped>
    .warp{
        width: 200px;
        height: 200px;
        border: 1px solid black;
    }
</style>