<template>
  <el-breadcrumb class="breadcrumbs" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <!-- <el-breadcrumb-item>联系人管理</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/userList' }">联系人列表</el-breadcrumb-item> -->
  </el-breadcrumb>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.breadcrumbs {
  padding: 20px;
  background: #ffffff;
}
</style>
