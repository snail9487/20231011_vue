<script>
    export default{
        data(){
            return{
                imgArr1: 
                    ["../../public/新增資料夾/lamy1.jpg",
                    "../../public/新增資料夾/lamy2.jpg",
                    "../../public/新增資料夾/lamy3.jpg",
                    "../../public/新增資料夾/lamy4.jpg",
                    "../../public/新增資料夾/lamy5.jpg",
                    "../../public/新增資料夾/lamy6.jpg",
                    "../../public/新增資料夾/lamy7.jpg",
                    "../../public/新增資料夾/lamy8.jpg",
                    "../../public/新增資料夾/lamy9.jpg",
                    "../../public/新增資料夾/lamy10.jpg",
                    ]
            }
        }
    }
</script>

<template>
    <div class="page">
        <div class="header"></div>
        <div class="picFalls" >
            <img :src="item" v-for="item in imgArr1" alt="" class="pic">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .header{
        min-width: 1000px;
        width: 100%;
        height: 100px;
        background-color: #8eeaff;
    }
    .picFalls{
        width: 90%;
        margin: auto;
        column-count: 3;
        // column-gap: 0px;

        img{
            width: 100%;
            display: block;
            margin-bottom: 5px;
        }
    }

</style>

<!-- https://tzutzu.coderbridge.io/2021/05/13/image/ -->