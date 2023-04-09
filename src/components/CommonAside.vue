<template>
    <div class="sidebar">
        <el-menu default-active="1" class="sidebar-el-menu" :collapse="sidebar.collapse"
            background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff"
            router>
            <!--遍历菜单-->
            <template v-for="item in items">
                <!--一级菜单-->
                <!--如果有子菜单-->
                <template v-if="item.subs">
                    <el-sub-menu :index="item.path" :key="item.path">
                        <!--菜单标题-->
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <!--子菜单-->
                        <template v-for="subItem in item.subs">
                            <!--二级菜单-->
                            <!--如果子菜单还有子菜单-->
                            <el-sub-menu v-if="subItem.subs" :index="subItem.path" :key="subItem.path">
                                <!--三级菜单-->
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" @click="clickMenu(threeItem)" :key="i" :index="threeItem.path">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item @click="clickMenu(subItem)" v-else :index="subItem.path">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <!--如果没有子菜单-->
                <template v-else>
                    <el-menu-item @click="clickMenu(item)" :index="item.path" :key="item.path">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>
                            {{ item.title }}
                        </template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>
<script setup lang="ts">
import { useSidebarStore } from '../store/sidebar';
import { useRoute } from 'vue-router';
// export default {
//     data() {
//         return {
            //菜单展开与收缩
            // isCollapse: false,
            const items = [
                {
                    icon: 'Odometer',
                    path: '/home',
                    title: '系统首页',
                    permiss: '1',
                },
                {
                    icon: 'Odometer',
                    path: '/user',
                    title: '用户管理',
                    permiss: '1',
                },
                {
                    icon: 'Odometer',
                    path: '/pageone',
                    title: '页面一',
                    permiss: '1',
                },
                {
                    icon: 'Odometer',
                    path: '/pagetwo',
                    title: '页面二',
                    permiss: '1',
                },
                {
                    icon: 'Calendar',
                    path: '1',
                    title: '表格相关',
                    permiss: '2',
                    subs: [
                        {
                            path: '/table',
                            title: '常用表格',
                            permiss: '2',
                        },
                        {
                            path: '/import',
                            title: '导入Excel',
                            permiss: '2',
                        },
                        {
                            path: '/export',
                            title: '导出Excel',
                            permiss: '2',
                        },
                    ],
                },
                {
                    icon: 'DocumentCopy',
                    path: '/tabs',
                    title: 'tab选项卡',
                    permiss: '3',
                },
                {
                    icon: 'Edit',
                    path: '3',
                    title: '表单相关',
                    permiss: '4',
                    subs: [
                        {
                            path: '/form',
                            title: '基本表单',
                            permiss: '5',
                        },
                        {
                            path: '/upload',
                            title: '文件上传',
                            permiss: '6',
                        },
                        {
                            path: '4',
                            title: '三级菜单',
                            permiss: '7',
                            subs: [
                                {
                                    path: '/editor',
                                    title: '富文本编辑器',
                                    permiss: '8',

                                },
                                {
                                    path: '/markdown',
                                    title: 'markdown编辑器',
                                    permiss: '9',
                                },
                            ],
                        },
                    ],
                },
                {
                    icon: 'Setting',
                    path: '/icon',
                    title: '自定义图标',
                    permiss: '10',
                },
                {
                    icon: 'PieChart',
                    path: '/charts',
                    title: 'schart图表',
                    permiss: '11',
                },
                {
                    icon: 'Warning',
                    path: '/permission',
                    title: '权限管理',
                    permiss: '13',
                },
                {
                    icon: 'CoffeeCup',
                    path: '/donate',
                    title: '支持作者',
                    permiss: '14',
                },];
    //     }

    // },
    // methods: {
        const handlerOpen = (key: string, keyPath: string) => {
            console.log(key, keyPath)
        };
        const handlerClose = ((key: string, keyPath:string) => {
            console.log(key, keyPath)
        });
        const sidebar = useSidebarStore();
        const route = useRoute();
        const onRoutes = () => {
            console.log("ddd")
        return route.path;
            };
        //点击菜单
        const clickMenu = ((item: object) => {
            // 路由跳转
            // 当当前页面的路由与要跳转的路由不一致时，才进行跳转
            // if(route.path !== item.path){
            //     route.push(item.path)
            // }
            
        });
    // },
    // computed: {
        // isCollapse() {
        //     return this.$store.state.sidebar.isCollapse
        // }
    // }

// }
</script>
<style>
/* 左侧菜单垂直占满 */
.sidebar > ul {
    height: 100%;
}
/* 解决左侧菜单栏垂直占满后溢出问题 */
.sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.el-menu {
    border: 0
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 200px;
}
</style>