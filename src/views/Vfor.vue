<script>
export default{
    data(){
        return{
            arr:[1,2,3],
            arr0:[],
            arr1:[1,2,3,4,5],
            arr2:[{
                name:"body",
                level:"lv999",
                str:"999"
            },
            {
                name:"cat",
                level:"3",
                str:"3"
            },
            {
                name:"dog",
                level:"4",
                str:"4"
            }]
        }
    },
    methods(){

    }
}

</script>

<template>
    <h1>v-for</h1>
    <p v-for="  in 9">testt</p>
    
    <ul v-for="x in arr2" style="margin: 0;">
        <li>{{ x.name }}</li>
        <li>{{ x.level }}</li>
        <li>{{ x.str }}</li>
    </ul>

    <div v-for="x in arr2">
        <li>{{ x.name }}</li>
        <li>{{ x.level }}</li>
        <li>{{ x.str }}</li>
    </div>


    <ul >
        <li v-for="x in arr2">{{ x.name }}</li>
        <li v-for="x in arr2">{{ x.level }}</li>
        <li v-for="x in arr2">{{ x.str }}</li>
    </ul>


    <ul>
        <li v-for="i in arr1">{{ i }}</li>
    </ul>

    <ul v-for="i in arr1">
        <li>{{ i }}</li>
    </ul>



    <p v-for="x in arr2">{{ x }} </p>
    <p>{{arr2}}</p>
</template>