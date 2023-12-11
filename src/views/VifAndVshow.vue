<script>
    export default{
        data(){
            return{
                title: "",
                car:false,
                car2:false,
                house: 0,
                house2: 0,
            }
        }
    }

</script>


<template>
    <h1>Vif And Vshow</h1>
    <!-- v-if -->
    <h3>v-if</h3>
    <label for="">小名有車</label>
    <input type="checkbox" value="true" v-model="car">
    <p v-if="car">確實有車</p>
    
    <br>
    <!-- v-show -->
    <h3>v-show</h3>
    <label for="">小名有車</label>
    <input type="checkbox" value="true" v-model="car2">
    <p v-show="car2">確實有車</p>
    <br>
    

    <!-- v-if & v-else -->
    <h3>v-if & v-else</h3>
    <label for="">小名有房</label>
    <select name="" id="" v-model="house">
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    <p v-if="house == 1">普通的房子</p>
    <p v-if="house == 2">很大的房子</p>
    <p v-else>還好的房子</p>
    <p>------------</p>
    <br>

    <!-- v-if & v-else &v-else -->
    <h3>v-if & v-else-if & v-else</h3>
    <label for="">大名有房</label>
    <select name="" id="" v-model="house2">
        <option value="0"> 0 </option>
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
    </select>
    <p v-if="house2 == 1">普通的房子</p>
    <p v-else-if="house2 == 2">很大的房子</p>
    <p v-else>還好的房子</p>

</template>


<style lang="scss" scoped >
</style>