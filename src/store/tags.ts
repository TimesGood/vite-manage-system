import { defineStore } from "pinia";

interface ListItem {
    name: string;
    path: string;
    title: string;
}

export const useTagsStore = defineStore('tags',{
    state: () => {
        return {
            list: <ListItem[]>[]
        }
    },
    getters: {
        show: state => {
            return state.list.length > 0;
        },
    },
    actions: {
        //根据索引删除标签
        delTagItem(index: number) {
            this.list.splice(index, 1)
        },
        //添加标签
        addTagItem(data: ListItem){
            this.list.push(data)
        },
        //关闭所有标签
        closeTagAll(){
            this.list = []
        },
        //关闭其他标签
        closeTagsOther(data: ListItem[]) {
			this.list = data;
		},
        //关闭当前标签
        closeCurrentTag(currentTag: ListItem) {
            this.list = this.list.filter(item => {
                return item.path === currentTag.path;
            })
        }
    }

})