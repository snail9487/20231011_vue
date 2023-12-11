<script>
    export default{
        props: [
            "user",
            "test"
        ]
    }
</script>

<template>
    <div class="bg">
        <h1>PROPS PAGE</h1>
        <div class="showArea">
            <p>test: {{ test }}</p>
            <p>姓名: {{ user.name }}</p>
            <p>電話: {{ user.phone }}</p>
            <p>email: {{ user.email }}</p>
            <p>地址: {{ user.address }}</p>
            <p>畢業學校: {{ user.school }}</p>
            <p>性別: {{ user.sex }}</p>
            <p>興趣: {{ user.hobby }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg{
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>