<template>
  <div>
    <el-form
        class="detail-form-content"
        ref="ruleForm"
        :model="ruleForm"
        label-width="80px"
    >
      <el-row>

        <el-form-item v-if="flag=='users'" label="库房名" prop="name">
          <el-input v-model="ruleForm.name"
                    placeholder="库房名" ></el-input>
        </el-form-item>




        <el-form-item v-if="flag=='users'" label="库房地址" prop="address">
          <el-input v-model="ruleForm.address"
                    placeholder="库房地址"></el-input>
        </el-form-item>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import {isNumber, isIntNumer, isEmail, isMobile, isURL, checkIdCard} from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      yonghuxingbieOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({data}) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.yonghuxingbieOptions = "男,女".split(',')
  },
  methods: {
    yonghutouxiangUploadChange(fileUrls) {
      this.ruleForm.touxiang = fileUrls;
    },
    onUpdateHandler() {
      if ((!this.ruleForm.yonghuming) && 'yonghu' == this.flag) {
        this.$message.error('联系人名不能为空');
        return
      }
      if ((!this.ruleForm.mima) && 'yonghu' == this.flag) {
        this.$message.error('密码不能为空');
        return
      }
      if ((!this.ruleForm.xingming) && 'yonghu' == this.flag) {
        this.$message.error('姓名不能为空');
        return
      }
      if ('yonghu' == this.flag && this.ruleForm.shouji && (!isMobile(this.ruleForm.shouji))) {
        this.$message.error(`手机应输入电话格式`);
        return
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({data}) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
