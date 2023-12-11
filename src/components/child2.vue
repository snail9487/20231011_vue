<script>
    export default{
        data(){
            return {
                text: "orange",
            }
        },
        methods: {
            emitGo() {
            //往父元件傳遞訊息
            //告知父元件執行 apple(,左邊的值)暗號並給予紙條(,右邊的值)
                this.$emit("apple", this.text)
            }
        }
    }
</script>

<template>
    <div class="showArea">
        <h1>Emit child</h1>
        <input type="text" v-model="text">
        <p>text變數:{{this.text}}</p>
        <button type="button" @click="emitGo"> emitGo </button>
    </div>
</template>

<style lang="scss" scoped>
    .showArea{
        height: 600px;
        width: 600px;
    }
</style>