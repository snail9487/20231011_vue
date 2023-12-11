<script>
    export default{
        data(){
            return{

            }
        },
    }
</script>

<template>
    <div class="pr6container">
        <div class="header">
            <RouterLink to="/Practice6/Home" class="block"></RouterLink>
            <div class="aText">
                <RouterLink to="/Practice6/Home">会社案内</RouterLink>
                <span> ｜ </span>
                <a href="" class="a2">店舗、アクセス</a>
            </div>
            <div class="right">
                <div class="phone">
                    <i class="fa-solid fa-mobile-screen-button" style="font-size: 16pt;"></i>
                    <span>０１０－１２３４５６７８９</span>
                </div>
                <div class="btn-group">
                    <RouterLink to="/Practice6/Home" class="btn btn-primary">Link</RouterLink>
                    <!-- <a href="#" class="btn btn-primary">Active link</a> -->
                    <span class="btn btn-primary" style="width: 0; margin: 0; padding: 6px 3px 6px 0px;">|</span>
                    <a href="#" class="btn btn-primary">Link</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .pr6container{
        margin: 0;
        padding: 0;
        width: 100%;
        .header{
            min-width: 1200px;
            width: 100%;
            height: 100px;
            background-color: white;
            position: relative;
            display: flex;
            align-items: center;
            .block{
                width: 72px;
                height: 72px;
                background-color: #3a425c;
                position: absolute;
                left: 5%;
            }
            .aText{
                position: absolute;
                left: 20%;
                bottom: 20%;
                a{
                    text-decoration: none;
                }
            }
            .right{
                position: absolute;
                left: 65%;
                bottom: 20%;
                display: flex;
                align-items: end;
            }

        }
    }
</style>