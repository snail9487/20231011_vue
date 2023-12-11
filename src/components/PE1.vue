<script>
    export default{
        data(){
            return{
                user:{
                    name:"",
                    phone:"",
                    email:"",
                    address:"",
                    school:"",
                    sex:"",
                    hobby:"",
                },
            }
        },
        methods:{
            emitSign(){
                this.$emit("sign", this.user)
            }

        }
    }
</script>

<template>
    <div class="inputArea">
        <h1>EMIT PAGE</h1>
        <label for="">姓名</label>
        <input type="text" v-model="user.name">
        <label for="">電話</label>
        <input type="number" v-model="user.phone">
        <label for="">email</label>
        <input type="email" v-model="user.email">
        <label for="">地址</label>
        <input type="text" v-model="user.address">
        <label for="">畢業學校</label>
        <input type="text" v-model="user.school">
        <label for="">性別</label>
        <div class="radioGP" >
            <label for="">Boy</label>
            <input type="radio" name="sex" value="Boy" v-model="user.sex">
            <label for="">Girl</label>
            <input type="radio" name="sex" value="Girl" v-model="user.sex">
        </div>
        <label for="">興趣</label>
        <input type="text" v-model="user.hobby">
        <button type="button" @click="emitSign()">btn</button>
    </div>
</template>

<style lang="scss" scoped>
    .inputArea{
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        button{
            margin: auto;
        }
    }
</style>