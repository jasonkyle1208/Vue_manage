import Cookies from "js-cookie"
export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 面包屑数据处理
        seleteMenu(state, val){
            if(val.name !== 'home'){
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if(result === -1){
                    state.tabsList.push(val)
                }
            }else{
                state.currentMenu = null
            }
        },
        closeTag(state, val){
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result,1)
        },
        setMenu(state, val){
            state.menu = val
            Cookies.set('menu',JSON.stringify(val))
        },
        clearMenu(state) {
            state.menu = []
            Cookies.remove('menu')
        },
        addMenu(state, router){
            if (!Cookies.get('menu')){
                return 
            }
            const menu = JSON.parse(Cookies.get('menu'))
            state.menu = menu
            const menuArray = []
            menu.forEach(item =>{
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else{
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            //路由的动态参加
            menuArray.forEach(item =>{
                router.addRoute('Main',item)
            })
        }
    }   
}