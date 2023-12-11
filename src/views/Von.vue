<script>
export default{
    data(){
        return{
            champion: "anivia",
        }
    },
    methods:{
        attack(){
            if(this.ifCrit()){
                this.crit();
                console.log("a");
            }else{
                console.log(this.champion + " cause " + this.damage() + " points damage");
                console.log("b");
            }
            
        },
        damage(){
            return Math.floor( Math.random() * 10 + 100 );
        },
        crit(){
            console.log( "critical hit !! " + this.champion + " cause " + this.damage() * 1.5 + " points damage");
        },
        ifCrit(){
            if(Math.random() > 0.5)
                return true;
            else 
                return false;
        }
    }
}
</script>

<template>
    <h1>Von</h1>
    <button type="button" v-on:click="attack()">btn</button>
    
</template>

<style lang="scss" scoped>
    
</style>