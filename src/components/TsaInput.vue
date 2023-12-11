<script>
    export default{
        data(){
            return{
                tsinput:{
                    text:"",
                    cost:0,
                }
            }
        },
        methods:{
            emitInput(){
                this.$emit("add",this.tsinput)
            },
            close(){
                this.$emit("close",)
            }
        },
        components:{

        }
        
    }
</script>

<template>
    <div class="inputCon">
        <div class="block">
            <div style="width: 100%; position: relative;">
                <i @click="close" class="fa-solid fa-xmark" style="position: absolute; right: 30px; font-size: 16pt;"></i>
            </div>
            <div class="input1 ipt">
                <label for="">Text</label>
                <input type="text" v-model="tsinput.text">
            </div>
            <div class="input2 ipt">
                <label for="">Cost</label>
                <input type="number" v-model="tsinput.cost">
            </div>
            <button type="button" @click="emitInput() ">Add transaction</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .inputCon{
        // min-width: 600px;
        width: 100%;
        // min-height: 300px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba($color: #6790a9, $alpha: 0.5);
        position: fixed;
        top: 0; 
        
        .block{
            width: 600px;
            height: 300px;
            background-color: white;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            // position: static ;
            .ipt{
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>