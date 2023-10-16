<template>
    <!--头部-->
    <common-header />
    <!--左侧-->
    <common-aside />
    <!--主页-->
    <div class="content-box" :class="{ 'main-collapse': sidebar.collapse }">
        <!--页签-->
        <tags />
        <!--内容-->>
		<div class="content">
            <!--路由页面-->
			<router-view></router-view>
		</div>
	</div>
</template>
<script setup lang="ts">
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';
import Tags from '../components/Tags.vue';
import { useSidebarStore } from '../store/sidebar';

const sidebar = useSidebarStore()
</script>
<style>
.content-box {
    position: absolute;
    left: 200px;
    right: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
    transition: left .3s ease-in-out;
}
.main-collapse {
    left: 65px;
}
</style>