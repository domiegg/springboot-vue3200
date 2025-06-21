const base = {
    get() {
        return {
            url : "http://localhost:8080/zhihuicaomei/",
            name: "zhihuicaomei",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zhihuicaomei/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智慧草莓基地管理系统"
        } 
    }
}
export default base
