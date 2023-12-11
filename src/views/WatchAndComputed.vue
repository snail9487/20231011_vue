<script>
    export default{
        data(){
            return{
                point:0,
                ntd:0
            }
        },
        methods:{
            addPoint(){
                this.point++;
            },
            write(){
                localStorage.setItem("score",JSON.stringify(this.point))
            },
            read(){
                if(localStorage.getItem("score") == null){
                    localStorage.setItem("score", JSON.stringify(this.point));
                    return;
                }
                this.point = JSON.parse(localStorage.getItem("score"));
            }
        },
        watch:{
            point(){
                this.ntd = this.point * 10;
                this.write();
            }
        },
        mounted(){
            this.read();
        },  
        computed: {
            jyp(){
                return this.ntd * 4.63;
            }
        }
    }
</script>

<template>
    <p>Point : {{ this.point }}</p>
    <p>ntd : {{ this.ntd }}</p>
    <p>jyp : {{ this.jyp }}</p>
    <div class="circle" @click="addPoint()"> </div>
</template>

<style lang="scss" scoped>
    .circle{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: pink;
        
        &:hover{
            scale: 1.05;
            transition: 0.3s;
        }
        
        &:active{
            scale: 0.95;
            transition: 0.3s;
        }
    }
</style>