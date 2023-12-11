<script>
// import { RouterLink} from 'vue-router';
  import { mapState, mapActions } from 'pinia';
  import indexState from '../stores/pppp';

  export default{
    data() {
      return{
        num: 1,
      }
    },

    computed:{
      ...mapState(indexState, ["location", "locationInfo"])
    },
    methods: {
      ...mapActions(indexState, ["getLocation", "setLocation"])
    },
    mounted(){
      this.getLocation();
      this.setLocation(this.num);
    }
  }
</script>

<template>
    <nav class="nav">
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/VtextAndVModel">V-text & V-Model</RouterLink>
        <RouterLink to="/Vfor">V-for</RouterLink>
        <RouterLink to="/Von">Von</RouterLink>
        <RouterLink to="/Vbind">Vbind</RouterLink>
        <RouterLink to="/VifAndVshow">VifAndVshow</RouterLink>
        <RouterLink to="/Props">Props</RouterLink>
        <RouterLink to="/Emit">Emit</RouterLink>
        <RouterLink to="/PropsAndEmit">PropsAndEmit</RouterLink>
        <RouterLink to="/ProvideAndInject">ProvideAndInject</RouterLink>
        <RouterLink to="/WatchAndComputed">WatchAndComputed</RouterLink>
        <RouterLink to="/Practice">pr0</RouterLink>
        <RouterLink to="/Practice1">pr1</RouterLink>
        <RouterLink to="/Practice2">pr2</RouterLink>
        <RouterLink to="/Practice3">pr3</RouterLink>
        <RouterLink to="/Practice4">pr4</RouterLink>
        <RouterLink to="/Practice5">pr5</RouterLink>
        <RouterLink to="/Practice6">pr6</RouterLink>
        <RouterLink to="/ExpenseTracker">ExpenseTracker</RouterLink>
    </nav>
    <p>{{ locationInfo }}</p>
</template>

<style>
    .nav{
      background-color: #ff9595;
      display: flex;
      justify-content: space-around;
      min-width: 1200px;
      width: 100%;
}
</style>
