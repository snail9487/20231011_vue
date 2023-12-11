<script>
    import child from "@/components/child.vue";
    export default{
        data(){
            return{
                propsObj:{
                    name:"mary",
                    age:58,
                    email:"xxxx@ggggmail.com.tw"
                }
            }
        },
        components:{
            child
        }
    }
</script>

<template>
    <div class="show">
        <child
        :person="propsObj"/>
    </div>
</template>