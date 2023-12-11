<script>
    export default{
        data(){
            return{
                t:"t",
                arr:[0,1,2,3,4,5,6,7,8],
                // 如何快速宣告長array?
            }
        },
        // methods:{
        //     arr9(){
        //         this.arr.length = 9;
        //     }
        // }
    }
</script>

<template>
    <div class="first"></div>
    <div class="second"></div>
    <div class="third">
        <div class="left"></div>
        <div class="right">
            <div class="text">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, dolor!</p>
            </div>
            <div class="block9">
                <div class="blockWithText" v-for="i in arr">
                    <div class="block"></div>
                    <p class="t">product name</p>
                </div>
            </div>
        </div>
    </div>
    <div class="fourth"></div>
</template>

<style lang="scss" scoped>
    $color1 :#fb8585;
    $color2 :#ff9595;
    .first{
        width: 100vw;
        height: 10vh;
        background-color: $color1;
    }
    .second{
        width: 100vw;
        height: 25vh;
        background-color: $color2;
    }
    .third{
        width: 100vw;
        height: 60vh;
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        .left{
            width: 20%;
            height: 100%;
            background-color: $color2;
        }
        .right{
            width: 75%;
            height: 100%;
            .text{
                display: flex;
                align-items: center;
                h1{
                    margin-right: 10px;
                }
            }
            .block9{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                .blockWithText{
                    width: 30%;
                    .block{
                        width: 90%;
                        height: 100px;
                        background-color: $color1;
                    }
                }
            }
        }
    }
    .fourth{
        width: 100vw;
        height: 10vh;
        background-color: $color1;
    }



</style>