let Users = require('../components/users.vue');
let Foo = require('../components/foo.vue');
let Bar = require('../components/bar.vue');

//路由器需要一个根组件。
let Menu = Vue.extend({})
// 创建一个路由器实例
let router = new VueRouter()
// 定义路由规则
router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    },
    '/users': {
        component: Users
    }
});

// 现在我们可以启动应用了！
router.start(Menu, 'body')

