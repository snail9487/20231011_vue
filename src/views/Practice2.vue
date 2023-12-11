<script>
export default {
    data() {
        return {
            imgArr1: ["../../public/甜點圖片/2.png",
                "../../public/甜點圖片/3.png",
                "../../public/甜點圖片/4.png"],
            imgArr2: ["../../public/甜點圖片/5.png",
                "../../public/甜點圖片/6.png",
                "../../public/甜點圖片/7.png"],

        }
    }
}
</script>

<template>
    <div class="bg">
        <div class="header">
            <div class="block"></div>
            <div class="pic"></div>
        </div>
        <div class="first">
            <div class="firstLeft">
                <h1>Title</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus deserunt numquam quia, possimus nemo amet porro dolor sequi, libero suscipit quod doloremque asperiores necessitatibus dicta quo corporis nesciunt laudantium sint!</p>
            </div>
            <div class="firstRight">
                <div class="firstPic"></div>
            </div>
        </div>
        <div class="second">
            <div class="secondTop">
                <h1>On Sale</h1>
            </div>
            <div class="secondBot">
                <div class="secItem" v-for="item in imgArr1">
                    <img :src="item"  alt="" >
                    <button class="secBtn">item</button>
                </div>
            </div>
        </div>
        <hr style="width: 80%; margin: auto;" >
        <div class="third">
            <div class="card" style="width: 18rem;" v-for="item in imgArr2">
                <img :src="item" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                        content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="fourth"></div>
        <div class="footer"></div>
    </div>
</template>

<style lang="scss" scoped>
.bg{
    background-color: #ffefd3;
    padding: 1% 0;
}
.header {
    width: 85%;
    height: 15vh;
    margin: 1% auto;
    display: flex;
    justify-content: space-between;

    .block {
        width: 100px;
        height: 100px;
        background-color: pink;
    }

    .pic {
        width: 41px;
        height: 40px;
        background-image: url("../../public/甜點圖片/Group\ 10.png");
    }
}

.first {
    width: 85%;
    height: 45vh;
    display: flex;
    margin: auto;
    .firstLeft{
        width: 35%;
        h1{
            padding-left: 10%;
        }
    }
    .firstRight{
        width: 65%;
        .firstPic{
            width: 100%;
            height: 100%;
            background-size: 100%;
            background-position: top center;
            background-repeat: no-repeat;
            background-image: url("../../public/甜點圖片/1.png");
        }
    }

}
.second{
    width: 85%;
    height: 45vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    .secondTop{
        height: 15%;
        text-align: center;
    }
    .secondBot{
        height: 85%;
        display: flex;
        justify-content: space-between;
        .secItem{
            position: relative;
            img{
                width: 95%;
                margin: 0 2.5%;
            }
            .secBtn{
                position: absolute;
                top:50%;
                left:50%;
            }
        }
    }
}
</style>