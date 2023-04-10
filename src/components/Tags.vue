<template>
	<div class="tags" v-if="tags.show">
		<!--标签-->
		<ul>
			<li class="tags-li" v-for="(item, index) in tags.list" :class="{ active: isActive(item.path) }" :key="index">
				<router-link :to="item.path" class="tags-li-title">{{ item.title }}</router-link>
				<el-icon @click="closeTag(index)">
					<Close />
				</el-icon>
			</li>
		</ul>
		<!--右侧下拉-->
		<div class="tags-close-box">
			<el-dropdown @command="handleTags">
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
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import { useTagsStore } from '../store/tags';
const route = useRoute()
const router = useRouter()
const tags = useTagsStore()
const isActive = (path: string) => {
	return path === route.path
}

// 设置标签
const setTags = (route: any) => {
	//查看标签是否已经存在
	const isExist = tags.list.some(item => {
		return item.path === route.fullPath;
	});
	if (!isExist) {
		if (tags.list.length >= 8) tags.delTagItem(0);
		tags.addTagItem({
			name: route.name,
			title: route.meta.title,
			path: route.fullPath
		});
	}
};
setTags(route);
//监听路由变化
onBeforeRouteUpdate(to => {
	setTags(to);
});
const closeTag = (index:number) => {
	tags.delTagItem(index)
}
// 关闭全部标签
const closeAll = () => {
	tags.closeTagAll();
	router.push('/');
};
// 关闭其他标签
const closeOther = () => {
	const curItem = tags.list.filter(item => {
		return item.path === route.fullPath;
	});
	tags.closeTagsOther(curItem);
};
//处理标签
const handleTags = (command: string) => {
	command === 'other' ? closeOther() : closeAll();
};
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
	margin: 0;
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
}</style>
