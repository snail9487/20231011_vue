<script>
    export default{
        data(){
            return{
                title:"cool",
                isRed:false,
                isLarge:false,
                arr:[],
                imgt:"https://opgg-static.akamaized.net/meta/images/lol/champion/centered/Sona_46.jpg",

            }
        },
        methods:{

        }
    }
</script>

<template>
    <h1 class="cool">cool1</h1>
    <h2 v-bind:class="title">cool2</h2>

    <p>class {}</p>
    <label for="">isRed</label>
    <input type="checkbox"  v-model="isRed">
    <label for="">isLarge</label>
    <input type="checkbox"  v-model="isLarge">

    <h2 v-bind:class="{
        red:isRed,
        large:isLarge
    }">巴迪大人</h2>

    <p>class []</p>
    <label for="">Red</label>
    <input type="checkbox" value="red" v-model="arr">
    <label for="">Large</label>
    <input type="checkbox" value="large" v-model="arr">
    <label for="">bold</label>
    <input type="checkbox" value="bold" v-model="arr">

    <h2 :class="arr">暗影大人</h2>

    <img :src="imgt" alt="">

</template>

<style lang="scss" scoped>
    .cool{
        color: pink;
    }
    .red{
        color: red;
    }
    .large{
        font-size: 100pt;
    }
    .bold{
        font-weight: bold;
    }
</style>