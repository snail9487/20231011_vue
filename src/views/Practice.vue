<script>
    export default{
        data(){
            return{
                arr1:[0,1,2],
            }
        }
    }
</script>

<template>
    <div class="first"></div>
    <div class="second">
        <div class="block" v-for="i in arr1"></div>
    </div>
    <div class="third">
        <div class="left"></div>
        <div class="right">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque culpa necessitatibus praesentium odit hic ad.</p>
        </div>
    </div>
    <div class="fourth"></div>
</template>

<style lang="scss" scoped>
    $mianColor :#6fcabe;
    .first{
        width: 100vw;
        height: 15vh;
        background-color: $mianColor;
    }
    .second{
        width: 100vw;
        height: 25vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .block{
            width: 30%;
            height: 80%;
            background-color: $mianColor;
        }
    }
    .third{
        width: 100vw;
        height: 30vh;
        display: flex;
        .left{
            width: 50%;
            height: inherit;
            background-color: $mianColor;
        }
        .right{
            width: 50%;
            height: inherit;
            h1{
                margin: 10% 0 0 10%;
            }
            p{
                margin: 0 0 0 10%;
            }
        }
    }
    .fourth{
        width: 100vw;
        height: 10vh;
        background-color: $mianColor;
        margin: 5% 0 0 0;
    }

</style>


<!-- 在VUE.js中安裝Bootstrap
1.在終端機輸入npm install bootstrap @popperjs/core
            npm install scss
2.在assets資料夾建立stylesheet資料夾，並從node_modules/bootstrap/scss中找到_variables.scss，複製到assets/stylesheet
3.assets檔案中的main.css改成main.scss
4.main.scss與之前一樣匯入function、_variables、bootstrap
5.main.js中import'./assets/main.css'改成import'./assets/main.scss'
6.main.js中添加import'bootstrap' -->