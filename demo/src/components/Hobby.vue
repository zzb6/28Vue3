<template>
    <div class="hobby">
        <p>问卷调查表填写</p>

        <h3>2.请选择您的兴趣爱好：</h3>
        <div>
            <input type="checkbox" name="check1" value="跑步" v-model="hobby">跑步
            <input type="checkbox" name="check2" value="音乐" v-model="hobby">音乐
            <input type="checkbox" name="check3" value="电影" v-model="hobby">电影
        </div>
         <div>
        <button @click="prep()">上一步</button>
        <button @click="next()">下一步</button>
        <button @click="reset()">重置</button>
         </div>
    </div>
</template>

<script>
    export default {
        name: "Hobby",
        data(){
            return{
                hobby:[]
            }
        },
        methods:{
            prep(){
                this.$router.push('/');
            },
            next(){

                console.log(this.hobby)

                this.$store.commit("user",{hobby:this.hobby});
                this.$router.push('/introduce');

                // this.$router.push({name:'introduce',params:{gender:this.gender,hobby:this.hobby}});


            },
            reset(){
                this.hobby=[];
            }
        }
    }
</script>

<style scoped>
    .hobby p{ display:flex; align-items:center; justify-content:center;font-size:31px;}
    .hobby  h3{display:flex; align-items:center; justify-content:center;margin-top: 50px;}
    .hobby  div {display:flex; align-items:center; justify-content:center;margin-top: 20px;}
</style>