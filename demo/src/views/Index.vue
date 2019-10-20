<template>
    <div class="index">
        <p>问卷调查表填写</p>

            <h3>1.请问你的性别是：</h3>
            <div>
            <input type="radio"name="sex" value="男" v-model="gender">男
            <input type="radio"name="sex" value="女" v-model="gender">女
            <input type="radio"name="sex" value="保密" v-model="gender">保密
            </div>

              <div>
             <button @click="next()">下一步</button>
             <button @click="reset()">重置</button>
              </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return{
                gender:'男',
            }
        },
        methods:{
            next(){
                console.log(this.gender);

                this.$store.commit("user",{gender:this.gender});
                this.$router.push('/hobby')

                // this.$router.push({name:'hobby',params:{gender:this.gender}});

            },
            reset(){
                this.gender='男';
            }
        }
    }
</script>

<style scoped>
    .index p{ display:flex; align-items:center; justify-content:center;font-size:31px;}
    .index  h3{display:flex; align-items:center; justify-content:center;margin-top: 50px;}
    .index  div {display:flex; align-items:center; justify-content:center;margin-top: 20px;}

</style>