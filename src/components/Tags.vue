<template>
	<div class="tags" v-if="tags.show">
		<!--标签-->
		<ul>
			<li
				class="tags-li"
				v-for="(item, index) in tags.list"
				:class="{active : isActive(item.path)}"
				:key="index"
			>
				<router-link :to="item.path" class="tags-li-title">{{ item.title }}</router-link>
				<el-icon @click=""><Close /></el-icon>
			</li>
		</ul>
		<!--右侧下拉-->
		<div class="tags-close-box">
			<el-dropdown @command="">
				<el-button size="small" type="primary">
					标签选项
					<el-icon class="el-icon--right">
						<arrow-down />
					</el-icon>
				</el-button>
				<template #dropdown>
					<el-dropdown-menu size="small">
						<el-dropdown-item command="other">关闭其他</el-dropdown-item>
						<el-dropdown-item command="all">关闭所有</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const tags = {
			show : true,
			list : [
				{path:'/home',title:'首页'},
				{path:'/user',title:'用户管理'},
				{path:'/pageOne',title:'页面一'},
				{path:'/pageTwo',title:'页面二'}
			]
		}
const route = useRoute()
	const isActive  = (path:string) => {
		return path === route.path
	}

</script>

<style>
.tags {
	position: relative;
	height: 30px;
	overflow: hidden;
	background: #fff;
	padding-right: 120px;
	box-shadow: 0 5px 10px #ddd;
}

.tags ul {
	box-sizing: border-box;
	margin:0;
	width: 100%;
	height: 100%;
}

.tags-li {
	display: flex;
	align-items: center;
	float: left;
	margin: 3px 5px 2px 3px;
	border-radius: 3px;
	font-size: 12px;
	overflow: hidden;
	cursor: pointer;
	height: 23px;
	border: 1px solid #e9eaec;
	background: #fff;
	padding: 0 5px 0 12px;
	color: #666;
	-webkit-transition: all 0.3s ease-in;
	-moz-transition: all 0.3s ease-in;
	transition: all 0.3s ease-in;
}
/* 鼠标靠近 */
.tags-li:not(.active):hover {
	background: #f8f8f8;
}
/* 标签选中样式 */
.tags-li.active {
	color: #fff;
	background-color: #409EFF;
}
/* 标签字体 */
.tags-li-title {
	float: left;
	max-width: 80px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-right: 5px;
	color: #666;
}
/* 选中标签字体 */
.tags-li.active .tags-li-title {
	color: #fff;
}
/* 右侧菜单 */
.tags-close-box {
	position: absolute;
	right: 0;
	top: 0;
	box-sizing: border-box;
	padding-top: 1px;
	text-align: center;
	width: 110px;
	height: 30px;
	background: #fff;
	box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
	z-index: 10;
}
a {
	text-decoration: none;
}
</style>
