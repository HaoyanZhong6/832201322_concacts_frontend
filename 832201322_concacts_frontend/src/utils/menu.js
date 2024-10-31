const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "联系人列表",
                    "menuJump": "列表",
                    "tableName": "yonghu"
                }], "menu": "联系人管理"
            }],
            "frontMenu": [{
                "child": [{
                    "buttons": ["查看", "加入购物车"],
                    "menu": "库存列表",
                    "menuJump": "列表",
                    "tableName": "shuji"
                }], "menu": "库存模块"
            }],
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [{
                "child": [{
                    "buttons": ["查看", "修改", "删除", "支付"],
                    "menu": "库存盘点列表",
                    "menuJump": "列表",
                    "tableName": "dingdanxinxi"
                }], "menu": "库存盘点管理"
            }, {
                "child": [{"buttons": ["查看"], "menu": "出入调库列表", "menuJump": "列表", "tableName": "fahuoxinxi"}],
                "menu": "出入调库管理"
            }, {
                "child": [{"buttons": ["查看", "删除"], "menu": "收藏列表", "tableName": "storeup"}],
                "menu": "我的收藏管理"
            }], "roleName": "联系人", "tableName": "yonghu"
        }]
    }
}
export default menu;
