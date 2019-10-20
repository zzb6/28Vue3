<template>
    <div class="introduce">
        <p>问卷调查表填写</p>

        <h3>3.请介绍一下你自己：</h3>
        <div>
            <textarea rows="3" cols="20" v-model="introduce">

            </textarea>
        </div>

        <div>
        <button @click="prep()">上一步</button>
        <button @click="finish()">提交</button>
        <button @click="reset()">重置</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Introduce",
        data(){
            return{
                introduce:'',
            }
        },
        methods:{
            prep(){
                this.$router.push('/hobby');
            },
            finish(){

                this.$store.commit("user",{introduce:this.introduce});
                this.$router.push('/finish');

                // this.$router.push({name:'finish',params:{gender:this.gender,hobby:this.hobby,introduce:this.introduce}});

            },
            reset(){
                this.introduce='';
            }
        }
    }
</script>

<style scoped>
    .introduce p{ display:flex; align-items:center; justify-content:center;font-size:31px;}
    .introduce  h3{display:flex; align-items:center; justify-content:center;margin-top: 50px;}
    .introduce  div {display:flex; align-items:center; justify-content:center;margin-top: 20px;}
</style>