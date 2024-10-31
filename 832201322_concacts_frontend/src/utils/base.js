const base = {
    get() {
                return {
            url : "http://localhost:8080/springbootUCW7v/",
            name: "springbootUCW7v",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootUCW7v/front/index.html'
        }
            },
    getProjectName(){
        return {
            projectName: "备忘录网站"
        } 
    }
}
export default base