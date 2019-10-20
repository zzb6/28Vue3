<template>

    <div class="finish">
        <p>问卷调查表填写</p>

        <div>

        <h3>您的性别是：{{this.$store.state.user[0].gender}}</h3>
        <h3>您的爱好是：{{this.$store.state.user[1].hobby}}</h3>
        <h3>个人简介：{{this.$store.state.user[2].introduce}}</h3>

            <!--<h3>您的性别是：{{this.$route.params.gender}}</h3>-->
            <!--<h3>您的爱好是：{{this.$route.params.hobby}}</h3>-->
            <!--<h3>个人简介：{{this.$route.params.introduce}}</h3>-->
        </div>

    </div>
</template>

<script>
    export default {
        name: "Finish"
    }
</script>

<style scoped>
    .finish p{ display:flex; align-items:center; justify-content:center;font-size:31px;}
    .finish  div {display:flex; align-items:center; justify-content:center;margin-top: 20px;}
    .finish h3{margin-right: 20px;}
</style>