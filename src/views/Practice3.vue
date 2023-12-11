<script>
    export default{
        data(){
            return{
                a:"猜一個數字",
                b:1,
                c:100,
                d:0,
                e:Math.ceil(Math.random()*100)
            }
        },
        methods:{
            guess(){
                console.log(this.e);
                this.min();
                this.max();
                if(this.d == this.e){
                    alert("答對了!!")                }
            },
            min(){
                if(this.d<this.e && this.d>this.b){
                    this.b = this.d;
                    return;
                }
            },
            max(){
                if(this.d>this.e && this.d<this.c){
                    this.c = this.d;
                    return;
                }
            }
        }
    }
</script>
    
<template>
    <div class="bg">
        <div class="content">
            <p class="title">{{ a }}</p>
            <p class="scope">{{ b }} - {{ c }}</p>
            <input type="number" v-model.lazy = "d">
            <button type="button" v-on:click = guess() >回 答</button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .bg{
        background-color: gray;
        width: 100vw;
        height: 100vh;
        padding-top:100px ;
        .content{
            width: 400px;
            height: 500px;
            background-color: #fff;
            border-radius: 10px;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }
    }
</style>