/*
 * @Description: 
 * @Version: 2.0
 */
module.exports = {
    title:'Hello World',
    description: 'Just playing around',
    base:'/studyspace/',//设置为github仓库地址，用来部署到github pages
    themeConfig:{
        sidebar:[
            {
                title:'plugins',
                collapsable:false,
                children:[
                    {
                        title:'去掉全部console测试',
                        path:'/guide/1.md',
                    }
                ]
            },
            {
                title:'loaders',
                collapsable:false,//是否展开
                children:[
                    {
                        title:'生成打包信息',
                        path:'/guide/2.md',
                    }
                ]
            }
        ]
    }
}