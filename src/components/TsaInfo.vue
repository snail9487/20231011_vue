<script>
    export default{
        data(){
            return{
                
            }
        },
        methods:{
            emitDelete(){
                this.$emit("del",)
            }
        },
        props:[
            "text",
            "cost"
        ]
    }
</script>

<template>
    <div class="infoBlock">
        <span>{{ text }}</span>
        <span>$ {{ cost }}</span>
        <button @click="emitDelete">Delete</button>
    </div>
</template>

<style lang="scss" scoped>
    .infoBlock{
        width: 620px;
        height: 80px;
        border: 2px solid rgb(113, 192, 252);
        border-radius: 10px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>