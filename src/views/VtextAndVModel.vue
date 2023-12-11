<script>
import test from "@/components/test.vue";
export default{
    data(){
        return{
            aaa:"",
            lazytt:"aa",
            numbertt:"aaaaa",
            checkText:[],
            radioText:"",
        }
    },
    components:{
        test
    }
}
</script>

<template>
<h1>VtextAndVModel</h1>
<test/>
<br>
<input type="text" v-model="aaa">
<h1>{{ "a" + aaa }}</h1>
<p>v-model.lazy</p>
<input type="text" v-model.lazy="lazytt">
<p>{{ lazytt }}</p>

<p>v-model.number</p>
<input type="number" v-model.number ="numbertt">
<p>{{ numbertt }}</p>

<p>checkbox</p>
<label for="">breakfast</label>
<input type="checkbox" v-model="checkText" name="meal" value="breakfast" id="breakfast">
<label for="">lunch</label>
<input type="checkbox" v-model="checkText" name="meal" value="lunch" id="breakfast">
<label for="">dinner</label>
<input type="checkbox" v-model="checkText" name="meal" value="dinner" id="breakfast">
<h1>{{ checkText }}</h1>

<p>radio</p>
<label for="">breakfast</label>
<input type="radio" v-model="radioText" name="food" value="pork">
<label for="">lunch</label>
<input type="radio" v-model="radioText" name="food" value="chicken">
<label for="">dinner</label>
<input type="radio" v-model="radioText" name="food" value="fish">
<h1>{{ radioText }}</h1>

</template>


<style>
</style>