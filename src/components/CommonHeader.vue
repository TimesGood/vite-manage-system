<template>
	<div class="header">
		<!-- <div class="content-l">
			<el-button @click="handleMenu">
				<el-icon><Menu /></el-icon>
			</el-button>
			<span class="text">首页</span>
			
		</div> -->
		<!-- 折叠按钮 -->
		<div class="content-l" @click="handleMenu">
			<el-icon v-if="sidebar.collapse"><Expand /></el-icon>
			<el-icon v-else><Fold /></el-icon>
		</div>
		<div class="logo">后台管理系统</div>
		<div class="content-r">
			<div class="content">
				<!-- 消息中心 -->
			<div class="btn-bell" @click="router.push('/tabs')">
					<el-tooltip
						effect="dark"
						:content="1 ? `有1条未读消息` : `消息中心`"
						placement="bottom"
					>
						<el-icon color="#fff"><Bell /></el-icon>
					</el-tooltip>
					<span class="btn-bell-badge" v-if="1"></span>
				</div>
			<!-- 用户头像 -->
			<img class="user-avator" src="../assets/img/img.jpg"/>
			<el-dropdown class="user-name" trigger="click">
				<span class="el-dropdown-link">
						角色
						<el-icon class="el-icon--right">
							<arrow-down />
						</el-icon>
					</span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item>个人中心</el-dropdown-item>
						<el-dropdown-item>退出登陆</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
			</div>
			
		</div>
	</div>
</template>
<script setup lang="ts">
import { useSidebarStore } from '../store/sidebar';
import { useRouter } from 'vue-router';

const sidebar = useSidebarStore()
const router = useRouter()

const handleMenu = () => {
	sidebar.handleCollapse();
}

</script>
<style scoped>
.header {
	background-color: #242f42;
	width: 100%;
	height: 70px;
	position: relative;
	font-size: 22px;
	color: #fff;
}
.content-l {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	float: left;
	padding: 0 21px;
	cursor: pointer;

}
.logo {
	float: left;
	line-height: 70px;
}
.content-r {
	float: right;
	padding-right: 50px;
}
.content {
	display: flex;
	height: 70px;
	align-items: center;
}
.user-avator {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin-left: 20px;
}
.user-name {
	margin-left: 10px;
}
.el-dropdown-link {
	color: #fff;
	cursor: pointer;
	display: flex;
}
.btn-bell {
	position: relative;
	width: 30px;
	height: 30px;
	text-align: center;
	border-radius: 15px;
	cursor: pointer;
	display: flex;
	align-items: center;
}
.btn-bell-badge {
	position: absolute;
	right: 4px;
	top: 0px;
	width: 8px;
	height: 8px;
	border-radius: 4px;
	background: #f56c6c;
	color: #fff;
}
</style>
