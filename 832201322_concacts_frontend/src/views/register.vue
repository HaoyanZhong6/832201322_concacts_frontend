<template>
  <div>
    <img class="bg" src="@/assets/img/bg.jpg">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-form">
      <h1 class="h1">备忘录网站注册</h1>
                              <el-form-item v-if="tableName=='users'" label="用户名" prop="yonghuyonghuming">
        <el-input v-model="ruleForm.username" placeholder="联系人名"></el-input>
      </el-form-item>
                        <el-form-item v-if="tableName=='users'" label="密码" prop="yonghumima">
        <el-input v-model="ruleForm.password" placeholder="密码"></el-input>
      </el-form-item>
                        <el-form-item v-if="tableName=='users'" label="姓名" prop="yonghuxingming">
        <el-input v-model="ruleForm.name" placeholder="姓名"></el-input>
      </el-form-item>
<!--                                                            <el-form-item v-if="tableName=='users'" label="手机" prop="yonghushouji">-->
<!--        <el-input v-model="ruleForm.shouji" placeholder="手机"></el-input>-->
<!--      </el-form-item>-->
                        <el-form-item v-if="tableName=='users'" label="地址" prop="yonghudizhi">
        <el-input v-model="ruleForm.address" placeholder="地址"></el-input>
      </el-form-item>
                                                                                                                  <el-button @click="login()" class="btn-login" type="primary">注册</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
              },
      tableName:"",
      rules: {}
    };
  },
  mounted(){
    let table = this.$storage.get("loginTable");
    this.tableName = table;
  },
  methods: {
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 注册
    login() {
                              if((!this.ruleForm.username) && `users` == this.tableName){
        this.$message.error(`联系人名不能为空`);
        return
      }
                                                            if((!this.ruleForm.password) && `users` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
                                                            if((!this.ruleForm.name) && `users` == this.tableName){
        this.$message.error(`姓名不能为空`);
        return
      }
                                                                                                                                                                              if(`users` == this.tableName && this.ruleForm.shouji&&(!this.$validate.isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入电话格式`);
        return
      }
                                                                                                                                                                                    this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `${this.tableName}/register`,
            method: "post",
            data:this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$router.replace({ path: "/login" });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
