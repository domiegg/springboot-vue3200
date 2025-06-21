import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import caomei from '@/views/modules/caomei/list'
    import caomeiCollection from '@/views/modules/caomeiCollection/list'
    import caomeiCommentback from '@/views/modules/caomeiCommentback/list'
    import caomeiOrder from '@/views/modules/caomeiOrder/list'
    import cart from '@/views/modules/cart/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import shidujiankong from '@/views/modules/shidujiankong/list'
    import wendujiankong from '@/views/modules/wendujiankong/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yujing from '@/views/modules/yujing/list'
    import zhongzhijihua from '@/views/modules/zhongzhijihua/list'
    import config from '@/views/modules/config/list'
    import dictionaryCaomei from '@/views/modules/dictionaryCaomei/list'
    import dictionaryCaomeiCollection from '@/views/modules/dictionaryCaomeiCollection/list'
    import dictionaryCaomeiOrder from '@/views/modules/dictionaryCaomeiOrder/list'
    import dictionaryCaomeiOrderPayment from '@/views/modules/dictionaryCaomeiOrderPayment/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryShidujiankong from '@/views/modules/dictionaryShidujiankong/list'
    import dictionaryWendujiankong from '@/views/modules/dictionaryWendujiankong/list'
    import dictionaryYujing from '@/views/modules/dictionaryYujing/list'
    import dictionaryZhongzhijihua from '@/views/modules/dictionaryZhongzhijihua/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryCaomei',
        name: '草莓类型',
        component: dictionaryCaomei
    }
    ,{
        path: '/dictionaryCaomeiCollection',
        name: '收藏表类型',
        component: dictionaryCaomeiCollection
    }
    ,{
        path: '/dictionaryCaomeiOrder',
        name: '订单类型',
        component: dictionaryCaomeiOrder
    }
    ,{
        path: '/dictionaryCaomeiOrderPayment',
        name: '订单支付类型',
        component: dictionaryCaomeiOrderPayment
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionaryJinyong',
        name: '账户状态',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShidujiankong',
        name: '湿度监控类型',
        component: dictionaryShidujiankong
    }
    ,{
        path: '/dictionaryWendujiankong',
        name: '温度监控类型',
        component: dictionaryWendujiankong
    }
    ,{
        path: '/dictionaryYujing',
        name: '预警类型',
        component: dictionaryYujing
    }
    ,{
        path: '/dictionaryZhongzhijihua',
        name: '种植计划类型',
        component: dictionaryZhongzhijihua
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/caomei',
        name: '草莓',
        component: caomei
      }
    ,{
        path: '/caomeiCollection',
        name: '草莓收藏',
        component: caomeiCollection
      }
    ,{
        path: '/caomeiCommentback',
        name: '草莓评价',
        component: caomeiCommentback
      }
    ,{
        path: '/caomeiOrder',
        name: '草莓订单',
        component: caomeiOrder
      }
    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/shidujiankong',
        name: '湿度监控',
        component: shidujiankong
      }
    ,{
        path: '/wendujiankong',
        name: '温度监控',
        component: wendujiankong
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yujing',
        name: '病虫害预警',
        component: yujing
      }
    ,{
        path: '/zhongzhijihua',
        name: '种植计划',
        component: zhongzhijihua
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
