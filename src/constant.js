export const COLORS = ['red', 'pink', 'purple', 'indigo', 'cyan', 'blue', 
                        'teal', 'green', 'lime', 'yellow', 'amber', 'orange', 
                        'brown', 'gray', 'bluegray', 'black', 'white'];

export const NS = 'dot';

export const MOBILE_VIEW = '<768px';
export const TABLET_VIEW = '769px ~ 991px';
export const SMALL_VIEW = '992px ~ 1200px';
export const LARGE_VIEW = '>1201px';

export const SHAPE_SIZE = ['tiny', 'small', '', 'large', 'huge'];

export const BLOG_URL = 'http://braavos.me';

export const PROVINCES = [
    { id: "110000", name: "北京"},
    { id: "120000", name: "天津"},
    { id: "130000", name: "河北"},
    { id: "140000", name: "山西"},
    { id: "150000", name: "内蒙古"},
    { id: "210000", name: "辽宁"},
    { id: "220000", name: "吉林"},
    { id: "230000", name: "黑龙江"},
    { id: "310000", name: "上海"},
    { id: "320000", name: "江苏"},
    { id: "330000", name: "浙江"},
    { id: "340000", name: "安徽"},
    { id: "350000", name: "福建"},
    { id: "360000", name: "江西"},
    { id: "370000", name: "山东"},
    { id: "410000", name: "河南"},
    { id: "420000", name: "湖北"},
    { id: "430000", name: "湖南"},
    { id: "440000", name: "广东"},
    { id: "450000", name: "广西"},
    { id: "460000", name: "海南"},
    { id: "500000", name: "重庆"},
    { id: "510000", name: "四川"},
    { id: "520000", name: "贵州"},
    { id: "530000", name: "云南"},
    { id: "540000", name: "西藏"},
    { id: "610000", name: "陕西"},
    { id: "620000", name: "甘肃"},
    { id: "630000", name: "青海"},
    { id: "640000", name: "宁夏"},
    { id: "650000", name: "新疆"},
    { id: "710000", name: "台湾"},
    { id: "810000", name: "香港"},
];


export const NAV_MAP = {
    'Usage': [
        {route: '/start', name: '快速上手'},
        {route: '/install', name: '安装'},
    ],
    'Component': [
        {route: '/component', name: 'Basic 基本'}, 
        {route: '/component/button', name: 'Button 按钮'}, 
        {route: '/component/calendar', name: 'Calendar 日历'}, 
        {route: '/component/label', name: 'Label 标签'},
        {route: '/component/icon', name: 'Icon 图标'},
        {route: '/component/text', name: 'Text 文字'},
    ],
    Form: [
        {route: "/component/checkbox", name: "CheckBox 复选框"},
        {route: "/component/checkboxgroup", name: "CheckBoxGroup 复选框组"},
        {route: "/component/dropdown", name: "DropDown 下拉框"},
        {route: '/component/datepicker', name: 'DatePicker 日期选择'},
        {route: '/component/datetimepicker', name: 'DateTimePicker 日期时间选择'},
        {route: "/component/input", name: "Input 输入框"},
        {route: "/component/radio", name: "Radio 单选框"},
        {route: "/component/radiogroup", name: "RadioGroup 单选框组"},
        {route: "/component/timeinput", name: "TimeInput 时间输入"},
        {route: "/component/timepicker", name: "TimePicker 时间选择"},
        {route: "/component/form", name: "Form 表单"},
    ],
    Navigation: [
        {route: "/component/crumb", name: "Crumb 面包屑"},
        {route: "/component/menu", name: "Menu 菜单"},
        {route: "/component/pagination", name: "Pagination 分页"},
        {route: "/component/slidemenu", name: "SlideMenu 切换菜单"},
        {route: "/component/tab", name: "Tab 选项卡"},
    ],
    Layout: [
        {route: "/component/card", name: "Card 卡片"},
        {route: "/component/grid", name: "Grid 栅格"},
        {route: "/component/list", name: "List 列表"},
        {route: "/component/panel", name: "Panel 面板"},
        {route: "/component/item", name: "Item 条目"},
        {route: "/component/pin", name: "Pin 大头针"},
        {route: "/component/table", name: "Table 表格"},
    ],
    Message: [
        {route: "/component/confirmbox", name: "ConfirmBox 确认框"},
        {route: "/component/toast", name: "Toast 消息"},
        {route: "/component/notice", name: "Notice 通知"},
        {route: "/component/tooltip", name: "Tooltip 提示框"},
    ],
    Other: [
        {route: "/component/carousel", name: "Carousel 跑马灯"},
        {route: "/component/comment", name: "Comment 评论"},
        {route: "/component/image", name: "Image 图片"},
        {route: "/component/loader", name: "Loader 加载器"},
        {route: "/component/modal", name: "Modal 弹出层"},
        {route: "/component/other", name: "Other 其他"},
        {route: "/component/progress", name: "Progress 进度条"},
    ],
}

export const CITIES = {
    "110000": [
        {
            "name": "市区",
            "province": "北京",
            "id": "110100"
        },
        {
            "name": "县",
            "province": "北京",
            "id": "110200"
        }
    ],
    "120000": [
        {
            "name": "市区",
            "province": "天津",
            "id": "120100"
        },
        {
            "name": "县",
            "province": "天津",
            "id": "120200"
        }
    ],
    "130000": [
        {
            "name": "石家庄",
            "province": "河北",
            "id": "130100"
        },
        {
            "name": "唐山",
            "province": "河北",
            "id": "130200"
        },
        {
            "name": "秦皇岛",
            "province": "河北",
            "id": "130300"
        },
        {
            "name": "邯郸",
            "province": "河北",
            "id": "130400"
        },
        {
            "name": "邢台",
            "province": "河北",
            "id": "130500"
        },
        {
            "name": "保定",
            "province": "河北",
            "id": "130600"
        },
        {
            "name": "张家口",
            "province": "河北",
            "id": "130700"
        },
        {
            "name": "承德",
            "province": "河北",
            "id": "130800"
        },
        {
            "name": "沧州",
            "province": "河北",
            "id": "130900"
        },
        {
            "name": "廊坊",
            "province": "河北",
            "id": "131000"
        },
        {
            "name": "衡水",
            "province": "河北",
            "id": "131100"
        }
    ],
    "140000": [
        {
            "name": "太原",
            "province": "山西",
            "id": "140100"
        },
        {
            "name": "大同",
            "province": "山西",
            "id": "140200"
        },
        {
            "name": "阳泉",
            "province": "山西",
            "id": "140300"
        },
        {
            "name": "长治",
            "province": "山西",
            "id": "140400"
        },
        {
            "name": "晋城",
            "province": "山西",
            "id": "140500"
        },
        {
            "name": "朔州",
            "province": "山西",
            "id": "140600"
        },
        {
            "name": "晋中",
            "province": "山西",
            "id": "140700"
        },
        {
            "name": "运城",
            "province": "山西",
            "id": "140800"
        },
        {
            "name": "忻州",
            "province": "山西",
            "id": "140900"
        },
        {
            "name": "临汾",
            "province": "山西",
            "id": "141000"
        },
        {
            "name": "吕梁",
            "province": "山西",
            "id": "141100"
        }
    ],
    "150000": [
        {
            "name": "呼和浩特",
            "province": "内蒙古",
            "id": "150100"
        },
        {
            "name": "包头",
            "province": "内蒙古",
            "id": "150200"
        },
        {
            "name": "乌海",
            "province": "内蒙古",
            "id": "150300"
        },
        {
            "name": "赤峰",
            "province": "内蒙古",
            "id": "150400"
        },
        {
            "name": "通辽",
            "province": "内蒙古",
            "id": "150500"
        },
        {
            "name": "鄂尔多斯",
            "province": "内蒙古",
            "id": "150600"
        },
        {
            "name": "呼伦贝尔",
            "province": "内蒙古",
            "id": "150700"
        },
        {
            "name": "巴彦淖尔",
            "province": "内蒙古",
            "id": "150800"
        },
        {
            "name": "乌兰察布",
            "province": "内蒙古",
            "id": "150900"
        },
        {
            "name": "兴安",
            "province": "内蒙古",
            "id": "152200"
        },
        {
            "name": "锡林郭勒",
            "province": "内蒙古",
            "id": "152500"
        },
        {
            "name": "阿拉善",
            "province": "内蒙古",
            "id": "152900"
        }
    ],
    "210000": [
        {
            "name": "沈阳",
            "province": "辽宁",
            "id": "210100"
        },
        {
            "name": "大连",
            "province": "辽宁",
            "id": "210200"
        },
        {
            "name": "鞍山",
            "province": "辽宁",
            "id": "210300"
        },
        {
            "name": "抚顺",
            "province": "辽宁",
            "id": "210400"
        },
        {
            "name": "本溪",
            "province": "辽宁",
            "id": "210500"
        },
        {
            "name": "丹东",
            "province": "辽宁",
            "id": "210600"
        },
        {
            "name": "锦州",
            "province": "辽宁",
            "id": "210700"
        },
        {
            "name": "营口",
            "province": "辽宁",
            "id": "210800"
        },
        {
            "name": "阜新",
            "province": "辽宁",
            "id": "210900"
        },
        {
            "name": "辽阳",
            "province": "辽宁",
            "id": "211000"
        },
        {
            "name": "盘锦",
            "province": "辽宁",
            "id": "211100"
        },
        {
            "name": "铁岭",
            "province": "辽宁",
            "id": "211200"
        },
        {
            "name": "朝阳",
            "province": "辽宁",
            "id": "211300"
        },
        {
            "name": "葫芦岛",
            "province": "辽宁",
            "id": "211400"
        }
    ],
    "220000": [
        {
            "name": "长春",
            "province": "吉林",
            "id": "220100"
        },
        {
            "name": "吉林",
            "province": "吉林",
            "id": "220200"
        },
        {
            "name": "四平",
            "province": "吉林",
            "id": "220300"
        },
        {
            "name": "辽源",
            "province": "吉林",
            "id": "220400"
        },
        {
            "name": "通化",
            "province": "吉林",
            "id": "220500"
        },
        {
            "name": "白山",
            "province": "吉林",
            "id": "220600"
        },
        {
            "name": "松原",
            "province": "吉林",
            "id": "220700"
        },
        {
            "name": "白城",
            "province": "吉林",
            "id": "220800"
        },
        {
            "name": "延边",
            "province": "吉林",
            "id": "222400"
        }
    ],
    "230000": [
        {
            "name": "哈尔滨",
            "province": "黑龙江",
            "id": "230100"
        },
        {
            "name": "齐齐哈尔",
            "province": "黑龙江",
            "id": "230200"
        },
        {
            "name": "鸡西",
            "province": "黑龙江",
            "id": "230300"
        },
        {
            "name": "鹤岗",
            "province": "黑龙江",
            "id": "230400"
        },
        {
            "name": "双鸭山",
            "province": "黑龙江",
            "id": "230500"
        },
        {
            "name": "大庆",
            "province": "黑龙江",
            "id": "230600"
        },
        {
            "name": "伊春",
            "province": "黑龙江",
            "id": "230700"
        },
        {
            "name": "佳木斯",
            "province": "黑龙江",
            "id": "230800"
        },
        {
            "name": "七台河",
            "province": "黑龙江",
            "id": "230900"
        },
        {
            "name": "牡丹江",
            "province": "黑龙江",
            "id": "231000"
        },
        {
            "name": "黑河",
            "province": "黑龙江",
            "id": "231100"
        },
        {
            "name": "绥化",
            "province": "黑龙江",
            "id": "231200"
        },
        {
            "name": "大兴安岭",
            "province": "黑龙江",
            "id": "232700"
        }
    ],
    "310000": [
        {
            "name": "市区",
            "province": "上海",
            "id": "310100"
        },
        {
            "name": "县",
            "province": "上海",
            "id": "310200"
        }
    ],
    "320000": [
        {
            "name": "南京",
            "province": "江苏",
            "id": "320100"
        },
        {
            "name": "无锡",
            "province": "江苏",
            "id": "320200"
        },
        {
            "name": "徐州",
            "province": "江苏",
            "id": "320300"
        },
        {
            "name": "常州",
            "province": "江苏",
            "id": "320400"
        },
        {
            "name": "苏州",
            "province": "江苏",
            "id": "320500"
        },
        {
            "name": "南通",
            "province": "江苏",
            "id": "320600"
        },
        {
            "name": "连云港",
            "province": "江苏",
            "id": "320700"
        },
        {
            "name": "淮安",
            "province": "江苏",
            "id": "320800"
        },
        {
            "name": "盐城",
            "province": "江苏",
            "id": "320900"
        },
        {
            "name": "扬州",
            "province": "江苏",
            "id": "321000"
        },
        {
            "name": "镇江",
            "province": "江苏",
            "id": "321100"
        },
        {
            "name": "泰州",
            "province": "江苏",
            "id": "321200"
        },
        {
            "name": "宿迁",
            "province": "江苏",
            "id": "321300"
        }
    ],
    "330000": [
        {
            "name": "杭州",
            "province": "浙江",
            "id": "330100"
        },
        {
            "name": "宁波",
            "province": "浙江",
            "id": "330200"
        },
        {
            "name": "温州",
            "province": "浙江",
            "id": "330300"
        },
        {
            "name": "嘉兴",
            "province": "浙江",
            "id": "330400"
        },
        {
            "name": "湖州",
            "province": "浙江",
            "id": "330500"
        },
        {
            "name": "绍兴",
            "province": "浙江",
            "id": "330600"
        },
        {
            "name": "金华",
            "province": "浙江",
            "id": "330700"
        },
        {
            "name": "衢州",
            "province": "浙江",
            "id": "330800"
        },
        {
            "name": "舟山",
            "province": "浙江",
            "id": "330900"
        },
        {
            "name": "台州",
            "province": "浙江",
            "id": "331000"
        },
        {
            "name": "丽水",
            "province": "浙江",
            "id": "331100"
        }
    ],
    "340000": [
        {
            "name": "合肥",
            "province": "安徽",
            "id": "340100"
        },
        {
            "name": "芜湖",
            "province": "安徽",
            "id": "340200"
        },
        {
            "name": "蚌埠",
            "province": "安徽",
            "id": "340300"
        },
        {
            "name": "淮南",
            "province": "安徽",
            "id": "340400"
        },
        {
            "name": "马鞍山",
            "province": "安徽",
            "id": "340500"
        },
        {
            "name": "淮北",
            "province": "安徽",
            "id": "340600"
        },
        {
            "name": "铜陵",
            "province": "安徽",
            "id": "340700"
        },
        {
            "name": "安庆",
            "province": "安徽",
            "id": "340800"
        },
        {
            "name": "黄山",
            "province": "安徽",
            "id": "341000"
        },
        {
            "name": "滁州",
            "province": "安徽",
            "id": "341100"
        },
        {
            "name": "阜阳",
            "province": "安徽",
            "id": "341200"
        },
        {
            "name": "宿州",
            "province": "安徽",
            "id": "341300"
        },
        {
            "name": "巢湖",
            "province": "安徽",
            "id": "341400"
        },
        {
            "name": "六安",
            "province": "安徽",
            "id": "341500"
        },
        {
            "name": "亳州",
            "province": "安徽",
            "id": "341600"
        },
        {
            "name": "池州",
            "province": "安徽",
            "id": "341700"
        },
        {
            "name": "宣城",
            "province": "安徽",
            "id": "341800"
        }
    ],
    "350000": [
        {
            "name": "福州",
            "province": "福建",
            "id": "350100"
        },
        {
            "name": "厦门",
            "province": "福建",
            "id": "350200"
        },
        {
            "name": "莆田",
            "province": "福建",
            "id": "350300"
        },
        {
            "name": "三明",
            "province": "福建",
            "id": "350400"
        },
        {
            "name": "泉州",
            "province": "福建",
            "id": "350500"
        },
        {
            "name": "漳州",
            "province": "福建",
            "id": "350600"
        },
        {
            "name": "南平",
            "province": "福建",
            "id": "350700"
        },
        {
            "name": "龙岩",
            "province": "福建",
            "id": "350800"
        },
        {
            "name": "宁德",
            "province": "福建",
            "id": "350900"
        }
    ],
    "360000": [
        {
            "name": "南昌",
            "province": "江西",
            "id": "360100"
        },
        {
            "name": "景德镇",
            "province": "江西",
            "id": "360200"
        },
        {
            "name": "萍乡",
            "province": "江西",
            "id": "360300"
        },
        {
            "name": "九江",
            "province": "江西",
            "id": "360400"
        },
        {
            "name": "新余",
            "province": "江西",
            "id": "360500"
        },
        {
            "name": "鹰潭",
            "province": "江西",
            "id": "360600"
        },
        {
            "name": "赣州",
            "province": "江西",
            "id": "360700"
        },
        {
            "name": "吉安",
            "province": "江西",
            "id": "360800"
        },
        {
            "name": "宜春",
            "province": "江西",
            "id": "360900"
        },
        {
            "name": "抚州",
            "province": "江西",
            "id": "361000"
        },
        {
            "name": "上饶",
            "province": "江西",
            "id": "361100"
        }
    ],
    "370000": [
        {
            "name": "济南",
            "province": "山东",
            "id": "370100"
        },
        {
            "name": "青岛",
            "province": "山东",
            "id": "370200"
        },
        {
            "name": "淄博",
            "province": "山东",
            "id": "370300"
        },
        {
            "name": "枣庄",
            "province": "山东",
            "id": "370400"
        },
        {
            "name": "东营",
            "province": "山东",
            "id": "370500"
        },
        {
            "name": "烟台",
            "province": "山东",
            "id": "370600"
        },
        {
            "name": "潍坊",
            "province": "山东",
            "id": "370700"
        },
        {
            "name": "济宁",
            "province": "山东",
            "id": "370800"
        },
        {
            "name": "泰安",
            "province": "山东",
            "id": "370900"
        },
        {
            "name": "威海",
            "province": "山东",
            "id": "371000"
        },
        {
            "name": "日照",
            "province": "山东",
            "id": "371100"
        },
        {
            "name": "莱芜",
            "province": "山东",
            "id": "371200"
        },
        {
            "name": "临沂",
            "province": "山东",
            "id": "371300"
        },
        {
            "name": "德州",
            "province": "山东",
            "id": "371400"
        },
        {
            "name": "聊城",
            "province": "山东",
            "id": "371500"
        },
        {
            "name": "滨州",
            "province": "山东",
            "id": "371600"
        },
        {
            "name": "荷泽",
            "province": "山东",
            "id": "371700"
        }
    ],
    "410000": [
        {
            "name": "郑州",
            "province": "河南",
            "id": "410100"
        },
        {
            "name": "开封",
            "province": "河南",
            "id": "410200"
        },
        {
            "name": "洛阳",
            "province": "河南",
            "id": "410300"
        },
        {
            "name": "平顶山",
            "province": "河南",
            "id": "410400"
        },
        {
            "name": "安阳",
            "province": "河南",
            "id": "410500"
        },
        {
            "name": "鹤壁",
            "province": "河南",
            "id": "410600"
        },
        {
            "name": "新乡",
            "province": "河南",
            "id": "410700"
        },
        {
            "name": "焦作",
            "province": "河南",
            "id": "410800"
        },
        {
            "name": "濮阳",
            "province": "河南",
            "id": "410900"
        },
        {
            "name": "许昌",
            "province": "河南",
            "id": "411000"
        },
        {
            "name": "漯河",
            "province": "河南",
            "id": "411100"
        },
        {
            "name": "三门峡",
            "province": "河南",
            "id": "411200"
        },
        {
            "name": "南阳",
            "province": "河南",
            "id": "411300"
        },
        {
            "name": "商丘",
            "province": "河南",
            "id": "411400"
        },
        {
            "name": "信阳",
            "province": "河南",
            "id": "411500"
        },
        {
            "name": "周口",
            "province": "河南",
            "id": "411600"
        },
        {
            "name": "驻马店",
            "province": "河南",
            "id": "411700"
        }
    ],
    "420000": [
        {
            "name": "武汉",
            "province": "湖北",
            "id": "420100"
        },
        {
            "name": "黄石",
            "province": "湖北",
            "id": "420200"
        },
        {
            "name": "十堰",
            "province": "湖北",
            "id": "420300"
        },
        {
            "name": "宜昌",
            "province": "湖北",
            "id": "420500"
        },
        {
            "name": "襄樊",
            "province": "湖北",
            "id": "420600"
        },
        {
            "name": "鄂州",
            "province": "湖北",
            "id": "420700"
        },
        {
            "name": "荆门",
            "province": "湖北",
            "id": "420800"
        },
        {
            "name": "孝感",
            "province": "湖北",
            "id": "420900"
        },
        {
            "name": "荆州",
            "province": "湖北",
            "id": "421000"
        },
        {
            "name": "黄冈",
            "province": "湖北",
            "id": "421100"
        },
        {
            "name": "咸宁",
            "province": "湖北",
            "id": "421200"
        },
        {
            "name": "随州",
            "province": "湖北",
            "id": "421300"
        },
        {
            "name": "恩施",
            "province": "湖北",
            "id": "422800"
        }
    ],
    "430000": [
        {
            "name": "长沙",
            "province": "湖南",
            "id": "430100"
        },
        {
            "name": "株洲",
            "province": "湖南",
            "id": "430200"
        },
        {
            "name": "湘潭",
            "province": "湖南",
            "id": "430300"
        },
        {
            "name": "衡阳",
            "province": "湖南",
            "id": "430400"
        },
        {
            "name": "邵阳",
            "province": "湖南",
            "id": "430500"
        },
        {
            "name": "岳阳",
            "province": "湖南",
            "id": "430600"
        },
        {
            "name": "常德",
            "province": "湖南",
            "id": "430700"
        },
        {
            "name": "张家界",
            "province": "湖南",
            "id": "430800"
        },
        {
            "name": "益阳",
            "province": "湖南",
            "id": "430900"
        },
        {
            "name": "郴州",
            "province": "湖南",
            "id": "431000"
        },
        {
            "name": "永州",
            "province": "湖南",
            "id": "431100"
        },
        {
            "name": "怀化",
            "province": "湖南",
            "id": "431200"
        },
        {
            "name": "娄底",
            "province": "湖南",
            "id": "431300"
        },
        {
            "name": "湘西",
            "province": "湖南",
            "id": "433100"
        }
    ],
    "440000": [
        {
            "name": "广州",
            "province": "广东",
            "id": "440100"
        },
        {
            "name": "韶关",
            "province": "广东",
            "id": "440200"
        },
        {
            "name": "深圳",
            "province": "广东",
            "id": "440300"
        },
        {
            "name": "珠海",
            "province": "广东",
            "id": "440400"
        },
        {
            "name": "汕头",
            "province": "广东",
            "id": "440500"
        },
        {
            "name": "佛山",
            "province": "广东",
            "id": "440600"
        },
        {
            "name": "江门",
            "province": "广东",
            "id": "440700"
        },
        {
            "name": "湛江",
            "province": "广东",
            "id": "440800"
        },
        {
            "name": "茂名",
            "province": "广东",
            "id": "440900"
        },
        {
            "name": "肇庆",
            "province": "广东",
            "id": "441200"
        },
        {
            "name": "惠州",
            "province": "广东",
            "id": "441300"
        },
        {
            "name": "梅州",
            "province": "广东",
            "id": "441400"
        },
        {
            "name": "汕尾",
            "province": "广东",
            "id": "441500"
        },
        {
            "name": "河源",
            "province": "广东",
            "id": "441600"
        },
        {
            "name": "阳江",
            "province": "广东",
            "id": "441700"
        },
        {
            "name": "清远",
            "province": "广东",
            "id": "441800"
        },
        {
            "name": "东莞",
            "province": "广东",
            "id": "441900"
        },
        {
            "name": "中山",
            "province": "广东",
            "id": "442000"
        },
        {
            "name": "潮州",
            "province": "广东",
            "id": "445100"
        },
        {
            "name": "揭阳",
            "province": "广东",
            "id": "445200"
        },
        {
            "name": "云浮",
            "province": "广东",
            "id": "445300"
        }
    ],
    "450000": [
        {
            "name": "南宁",
            "province": "广西",
            "id": "450100"
        },
        {
            "name": "柳州",
            "province": "广西",
            "id": "450200"
        },
        {
            "name": "桂林",
            "province": "广西",
            "id": "450300"
        },
        {
            "name": "梧州",
            "province": "广西",
            "id": "450400"
        },
        {
            "name": "北海",
            "province": "广西",
            "id": "450500"
        },
        {
            "name": "防城港",
            "province": "广西",
            "id": "450600"
        },
        {
            "name": "钦州",
            "province": "广西",
            "id": "450700"
        },
        {
            "name": "贵港",
            "province": "广西",
            "id": "450800"
        },
        {
            "name": "玉林",
            "province": "广西",
            "id": "450900"
        },
        {
            "name": "百色",
            "province": "广西",
            "id": "451000"
        },
        {
            "name": "贺州",
            "province": "广西",
            "id": "451100"
        },
        {
            "name": "河池",
            "province": "广西",
            "id": "451200"
        },
        {
            "name": "来宾",
            "province": "广西",
            "id": "451300"
        },
        {
            "name": "崇左",
            "province": "广西",
            "id": "451400"
        }
    ],
    "460000": [
        {
            "name": "海口",
            "province": "海南",
            "id": "460100"
        },
        {
            "name": "三亚",
            "province": "海南",
            "id": "460200"
        }
    ],
    "500000": [
        {
            "name": "市区",
            "province": "重庆",
            "id": "500100"
        },
        {
            "name": "县",
            "province": "重庆",
            "id": "500200"
        },
        {
            "name": "",
            "province": "重庆",
            "id": "500300"
        }
    ],
    "510000": [
        {
            "name": "成都",
            "province": "四川",
            "id": "510100"
        },
        {
            "name": "自贡",
            "province": "四川",
            "id": "510300"
        },
        {
            "name": "攀枝花",
            "province": "四川",
            "id": "510400"
        },
        {
            "name": "泸州",
            "province": "四川",
            "id": "510500"
        },
        {
            "name": "德阳",
            "province": "四川",
            "id": "510600"
        },
        {
            "name": "绵阳",
            "province": "四川",
            "id": "510700"
        },
        {
            "name": "广元",
            "province": "四川",
            "id": "510800"
        },
        {
            "name": "遂宁",
            "province": "四川",
            "id": "510900"
        },
        {
            "name": "内江",
            "province": "四川",
            "id": "511000"
        },
        {
            "name": "乐山",
            "province": "四川",
            "id": "511100"
        },
        {
            "name": "南充",
            "province": "四川",
            "id": "511300"
        },
        {
            "name": "眉山",
            "province": "四川",
            "id": "511400"
        },
        {
            "name": "宜宾",
            "province": "四川",
            "id": "511500"
        },
        {
            "name": "广安",
            "province": "四川",
            "id": "511600"
        },
        {
            "name": "达州",
            "province": "四川",
            "id": "511700"
        },
        {
            "name": "雅安",
            "province": "四川",
            "id": "511800"
        },
        {
            "name": "巴中",
            "province": "四川",
            "id": "511900"
        },
        {
            "name": "资阳",
            "province": "四川",
            "id": "512000"
        },
        {
            "name": "阿坝",
            "province": "四川",
            "id": "513200"
        },
        {
            "name": "甘孜",
            "province": "四川",
            "id": "513300"
        },
        {
            "name": "凉山",
            "province": "四川",
            "id": "513400"
        }
    ],
    "520000": [
        {
            "name": "贵阳",
            "province": "贵州",
            "id": "520100"
        },
        {
            "name": "六盘水",
            "province": "贵州",
            "id": "520200"
        },
        {
            "name": "遵义",
            "province": "贵州",
            "id": "520300"
        },
        {
            "name": "安顺",
            "province": "贵州",
            "id": "520400"
        },
        {
            "name": "铜仁",
            "province": "贵州",
            "id": "522200"
        },
        {
            "name": "黔西南",
            "province": "贵州",
            "id": "522300"
        },
        {
            "name": "毕节",
            "province": "贵州",
            "id": "522400"
        },
        {
            "name": "黔东南",
            "province": "贵州",
            "id": "522600"
        },
        {
            "name": "黔南",
            "province": "贵州",
            "id": "522700"
        }
    ],
    "530000": [
        {
            "name": "昆明",
            "province": "云南",
            "id": "530100"
        },
        {
            "name": "曲靖",
            "province": "云南",
            "id": "530300"
        },
        {
            "name": "玉溪",
            "province": "云南",
            "id": "530400"
        },
        {
            "name": "保山",
            "province": "云南",
            "id": "530500"
        },
        {
            "name": "昭通",
            "province": "云南",
            "id": "530600"
        },
        {
            "name": "丽江",
            "province": "云南",
            "id": "530700"
        },
        {
            "name": "思茅",
            "province": "云南",
            "id": "530800"
        },
        {
            "name": "临沧",
            "province": "云南",
            "id": "530900"
        },
        {
            "name": "楚雄",
            "province": "云南",
            "id": "532300"
        },
        {
            "name": "红河",
            "province": "云南",
            "id": "532500"
        },
        {
            "name": "文山",
            "province": "云南",
            "id": "532600"
        },
        {
            "name": "西双版纳",
            "province": "云南",
            "id": "532800"
        },
        {
            "name": "大理",
            "province": "云南",
            "id": "532900"
        },
        {
            "name": "德宏",
            "province": "云南",
            "id": "533100"
        },
        {
            "name": "怒江",
            "province": "云南",
            "id": "533300"
        },
        {
            "name": "迪庆",
            "province": "云南",
            "id": "533400"
        }
    ],
    "540000": [
        {
            "name": "拉萨",
            "province": "西藏",
            "id": "540100"
        },
        {
            "name": "昌都",
            "province": "西藏",
            "id": "542100"
        },
        {
            "name": "山南",
            "province": "西藏",
            "id": "542200"
        },
        {
            "name": "日喀则",
            "province": "西藏",
            "id": "542300"
        },
        {
            "name": "那曲",
            "province": "西藏",
            "id": "542400"
        },
        {
            "name": "阿里",
            "province": "西藏",
            "id": "542500"
        },
        {
            "name": "林芝",
            "province": "西藏",
            "id": "542600"
        }
    ],
    "610000": [
        {
            "name": "西安",
            "province": "陕西",
            "id": "610100"
        },
        {
            "name": "铜川",
            "province": "陕西",
            "id": "610200"
        },
        {
            "name": "宝鸡",
            "province": "陕西",
            "id": "610300"
        },
        {
            "name": "咸阳",
            "province": "陕西",
            "id": "610400"
        },
        {
            "name": "渭南",
            "province": "陕西",
            "id": "610500"
        },
        {
            "name": "延安",
            "province": "陕西",
            "id": "610600"
        },
        {
            "name": "汉中",
            "province": "陕西",
            "id": "610700"
        },
        {
            "name": "榆林",
            "province": "陕西",
            "id": "610800"
        },
        {
            "name": "安康",
            "province": "陕西",
            "id": "610900"
        },
        {
            "name": "商洛",
            "province": "陕西",
            "id": "611000"
        }
    ],
    "620000": [
        {
            "name": "兰州",
            "province": "甘肃",
            "id": "620100"
        },
        {
            "name": "嘉峪关",
            "province": "甘肃",
            "id": "620200"
        },
        {
            "name": "金昌",
            "province": "甘肃",
            "id": "620300"
        },
        {
            "name": "白银",
            "province": "甘肃",
            "id": "620400"
        },
        {
            "name": "天水",
            "province": "甘肃",
            "id": "620500"
        },
        {
            "name": "武威",
            "province": "甘肃",
            "id": "620600"
        },
        {
            "name": "张掖",
            "province": "甘肃",
            "id": "620700"
        },
        {
            "name": "平凉",
            "province": "甘肃",
            "id": "620800"
        },
        {
            "name": "酒泉",
            "province": "甘肃",
            "id": "620900"
        },
        {
            "name": "庆阳",
            "province": "甘肃",
            "id": "621000"
        },
        {
            "name": "定西",
            "province": "甘肃",
            "id": "621100"
        },
        {
            "name": "陇南",
            "province": "甘肃",
            "id": "621200"
        },
        {
            "name": "临夏",
            "province": "甘肃",
            "id": "622900"
        },
        {
            "name": "甘南",
            "province": "甘肃",
            "id": "623000"
        }
    ],
    "630000": [
        {
            "name": "西宁",
            "province": "青海",
            "id": "630100"
        },
        {
            "name": "海东",
            "province": "青海",
            "id": "632100"
        },
        {
            "name": "海北",
            "province": "青海",
            "id": "632200"
        },
        {
            "name": "黄南",
            "province": "青海",
            "id": "632300"
        },
        {
            "name": "海南",
            "province": "青海",
            "id": "632500"
        },
        {
            "name": "果洛",
            "province": "青海",
            "id": "632600"
        },
        {
            "name": "玉树",
            "province": "青海",
            "id": "632700"
        },
        {
            "name": "海西",
            "province": "青海",
            "id": "632800"
        }
    ],
    "640000": [
        {
            "name": "银川",
            "province": "宁夏",
            "id": "640100"
        },
        {
            "name": "石嘴山",
            "province": "宁夏",
            "id": "640200"
        },
        {
            "name": "吴忠",
            "province": "宁夏",
            "id": "640300"
        },
        {
            "name": "固原",
            "province": "宁夏",
            "id": "640400"
        },
        {
            "name": "中卫",
            "province": "宁夏",
            "id": "640500"
        }
    ],
    "650000": [
        {
            "name": "乌鲁木齐",
            "province": "新疆",
            "id": "650100"
        },
        {
            "name": "克拉玛依",
            "province": "新疆",
            "id": "650200"
        },
        {
            "name": "吐鲁番",
            "province": "新疆",
            "id": "652100"
        },
        {
            "name": "哈密",
            "province": "新疆",
            "id": "652200"
        },
        {
            "name": "昌吉",
            "province": "新疆",
            "id": "652300"
        },
        {
            "name": "博尔塔拉",
            "province": "新疆",
            "id": "652700"
        },
        {
            "name": "巴音郭楞",
            "province": "新疆",
            "id": "652800"
        },
        {
            "name": "阿克苏",
            "province": "新疆",
            "id": "652900"
        },
        {
            "name": "克孜勒苏柯尔克孜",
            "province": "新疆",
            "id": "653000"
        },
        {
            "name": "喀什",
            "province": "新疆",
            "id": "653100"
        },
        {
            "name": "和田",
            "province": "新疆",
            "id": "653200"
        },
        {
            "name": "伊犁哈萨克",
            "province": "新疆",
            "id": "654000"
        },
        {
            "name": "塔城",
            "province": "新疆",
            "id": "654200"
        },
        {
            "name": "阿勒泰",
            "province": "新疆",
            "id": "654300"
        }
    ]
}

export const ICONS = [,"3d_rotation","ac_unit","access_alarm","access_alarms","access_time","accessibility","accessible","account_balance","account_balance_wallet","account_box","account_circle","adb","add","add_a_photo","add_alarm","add_alert","add_box","add_circle","add_circle_outline","add_location","add_shopping_cart","add_to_photos","add_to_queue","adjust","airline_seat_flat","airline_seat_flat_angled","airline_seat_individual_suite","airline_seat_legroom_extra","airline_seat_legroom_normal","airline_seat_legroom_reduced","airline_seat_recline_extra","airline_seat_recline_normal","airplanemode_active","airplanemode_inactive","airplay","airport_shuttle","alarm","alarm_add","alarm_off","alarm_on","album","all_inclusive","all_out","android","announcement","apps","archive","arrow_back","arrow_downward","arrow_drop_down","arrow_drop_down_circle","arrow_drop_up","arrow_forward","arrow_upward","art_track","aspect_ratio","assessment","assignment","assignment_ind","assignment_late","assignment_return","assignment_returned","assignment_turned_in","assistant","assistant_photo","attach_file","attach_money","attachment","audiotrack","autorenew","av_timer","backspace","backup","battery_alert","battery_charging_full","battery_full","battery_std","battery_unknown","beach_access","beenhere","block","bluetooth","bluetooth_audio","bluetooth_connected","bluetooth_disabled","bluetooth_searching","blur_circular","blur_linear","blur_off","blur_on","book","bookmark","bookmark_border","border_all","border_bottom","border_clear","border_color","border_horizontal","border_inner","border_left","border_outer","border_right","border_style","border_top","border_vertical","branding_watermark","brightness_1","brightness_2","brightness_3","brightness_4","brightness_5","brightness_6","brightness_7","brightness_auto","brightness_high","brightness_low","brightness_medium","broken_image","brush","bubble_chart","bug_report","build","burst_mode","business","business_center","cached","cake","call","call_end","call_made","call_merge","call_missed","call_missed_outgoing","call_received","call_split","call_to_action","camera","camera_alt","camera_enhance","camera_front","camera_rear","camera_roll","cancel","card_giftcard","card_membership","card_travel","casino","cast","cast_connected","center_focus_strong","center_focus_weak","change_history","chat","chat_bubble","chat_bubble_outline","check","check_box","check_box_outline_blank","check_circle","chevron_left","chevron_right","child_care","child_friendly","chrome_reader_mode","class","clear","clear_all","close","closed_caption","cloud","cloud_circle","cloud_done","cloud_download","cloud_off","cloud_queue","cloud_upload","code","collections","collections_bookmark","color_lens","colorize","comment","compare","compare_arrows","computer","confirmation_number","contact_mail","contact_phone","contacts","content_copy","content_cut","content_paste","control_point","control_point_duplicate","copyright","create","create_new_folder","credit_card","crop","crop_16_9","crop_3_2","crop_5_4","crop_7_5","crop_din","crop_free","crop_landscape","crop_original","crop_portrait","crop_rotate","crop_square","dashboard","data_usage","date_range","dehaze","delete","delete_forever","delete_sweep","description","desktop_mac","desktop_windows","details","developer_board","developer_mode","device_hub","devices","devices_other","dialer_sip","dialpad","directions","directions_bike","directions_boat","directions_bus","directions_car","directions_railway","directions_run","directions_subway","directions_transit","directions_walk","disc_full","dns","do_not_disturb","do_not_disturb_alt","do_not_disturb_off","do_not_disturb_on","dock","domain","done","done_all","donut_large","donut_small","drafts","drag_handle","drive_eta","dvr","edit","edit_location","eject","email","enhanced_encryption","equalizer","error","error_outline","euro_symbol","ev_station","event","event_available","event_busy","event_note","event_seat","exit_to_app","expand_less","expand_more","explicit","explore","exposure","exposure_neg_1","exposure_neg_2","exposure_plus_1","exposure_plus_2","exposure_zero","extension","face","fast_forward","fast_rewind","favorite","favorite_border","featured_play_list","featured_video","feedback","fiber_dvr","fiber_manual_record","fiber_new","fiber_pin","fiber_smart_record","file_download","file_upload","filter","filter_1","filter_2","filter_3","filter_4","filter_5","filter_6","filter_7","filter_8","filter_9","filter_9_plus","filter_b_and_w","filter_center_focus","filter_drama","filter_frames","filter_hdr","filter_list","filter_none","filter_tilt_shift","filter_vintage","find_in_page","find_replace","fingerprint","first_page","fitness_center","flag","flare","flash_auto","flash_off","flash_on","flight","flight_land","flight_takeoff","flip","flip_to_back","flip_to_front","folder","folder_open","folder_shared","folder_special","font_download","format_align_center","format_align_justify","format_align_left","format_align_right","format_bold","format_clear","format_color_fill","format_color_reset","format_color_text","format_indent_decrease","format_indent_increase","format_italic","format_line_spacing","format_list_bulleted","format_list_numbered","format_paint","format_quote","format_shapes","format_size","format_strikethrough","format_textdirection_l_to_r","format_textdirection_r_to_l","format_underlined","forum","forward","forward_10","forward_30","forward_5","free_breakfast","fullscreen","fullscreen_exit","functions","g_translate","gamepad","games","gavel","gesture","get_app","gif","golf_course","gps_fixed","gps_not_fixed","gps_off","grade","gradient","grain","graphic_eq","grid_off","grid_on","group","group_add","group_work","hd","hdr_off","hdr_on","hdr_strong","hdr_weak","headset","headset_mic","healing","hearing","help","help_outline","high_quality","highlight","highlight_off","history","home","hot_tub","hotel","hourglass_empty","hourglass_full","http","https","image","image_aspect_ratio","import_contacts","import_export","important_devices","inbox","indeterminate_check_box","info","info_outline","input","insert_chart","insert_comment","insert_drive_file","insert_emoticon","insert_invitation","insert_link","insert_photo","invert_colors","invert_colors_off","iso","keyboard","keyboard_arrow_down","keyboard_arrow_left","keyboard_arrow_right","keyboard_arrow_up","keyboard_backspace","keyboard_capslock","keyboard_hide","keyboard_return","keyboard_tab","keyboard_voice","kitchen","label","label_outline","landscape","language","laptop","laptop_chromebook","laptop_mac","laptop_windows","last_page","launch","layers","layers_clear","leak_add","leak_remove","lens","library_add","library_books","library_music","lightbulb_outline","line_style","line_weight","linear_scale","link","linked_camera","list","live_help","live_tv","local_activity","local_airport","local_atm","local_bar","local_cafe","local_car_wash","local_convenience_store","local_dining","local_drink","local_florist","local_gas_station","local_grocery_store","local_hospital","local_hotel","local_laundry_service","local_library","local_mall","local_movies","local_offer","local_parking","local_pharmacy","local_phone","local_pizza","local_play","local_post_office","local_printshop","local_see","local_shipping","local_taxi","location_city","location_disabled","location_off","location_on","location_searching","lock","lock_open","lock_outline","looks","looks_3","looks_4","looks_5","looks_6","looks_one","looks_two","loop","loupe","low_priority","loyalty","mail","mail_outline","map","markunread","markunread_mailbox","memory","menu","merge_type","message","mic","mic_none","mic_off","mms","mode_comment","mode_edit","monetization_on","money_off","monochrome_photos","mood","mood_bad","more","more_horiz","more_vert","motorcycle","mouse","move_to_inbox","movie","movie_creation","movie_filter","multiline_chart","music_note","music_video","my_location","nature","nature_people","navigate_before","navigate_next","navigation","near_me","network_cell","network_check","network_locked","network_wifi","new_releases","next_week","nfc","no_encryption","no_sim","not_interested","note","note_add","notifications","notifications_active","notifications_none","notifications_off","notifications_paused","offline_pin","ondemand_video","opacity","open_in_browser","open_in_new","open_with","pages","pageview","palette","pan_tool","panorama","panorama_fish_eye","panorama_horizontal","panorama_vertical","panorama_wide_angle","party_mode","pause","pause_circle_filled","pause_circle_outline","payment","people","people_outline","perm_camera_mic","perm_contact_calendar","perm_data_setting","perm_device_information","perm_identity","perm_media","perm_phone_msg","perm_scan_wifi","person","person_add","person_outline","person_pin","person_pin_circle","personal_video","pets","phone","phone_android","phone_bluetooth_speaker","phone_forwarded","phone_in_talk","phone_iphone","phone_locked","phone_missed","phone_paused","phonelink","phonelink_erase","phonelink_lock","phonelink_off","phonelink_ring","phonelink_setup","photo","photo_album","photo_camera","photo_filter","photo_library","photo_size_select_actual","photo_size_select_large","photo_size_select_small","picture_as_pdf","picture_in_picture","picture_in_picture_alt","pie_chart","pie_chart_outlined","pin_drop","place","play_arrow","play_circle_filled","play_circle_outline","play_for_work","playlist_add","playlist_add_check","playlist_play","plus_one","poll","polymer","pool","portable_wifi_off","portrait","power","power_input","power_settings_new","pregnant_woman","present_to_all","print","priority_high","public","publish","query_builder","question_answer","queue","queue_music","queue_play_next","radio","radio_button_checked","radio_button_unchecked","rate_review","receipt","recent_actors","record_voice_over","redeem","redo","refresh","remove","remove_circle","remove_circle_outline","remove_from_queue","remove_red_eye","remove_shopping_cart","reorder","repeat","repeat_one","replay","replay_10","replay_30","replay_5","reply","reply_all","report","report_problem","restaurant","restaurant_menu","restore","restore_page","ring_volume","room","room_service","rotate_90_degrees_ccw","rotate_left","rotate_right","rounded_corner","router","rowing","rss_feed","rv_hookup","satellite","save","scanner","schedule","school","screen_lock_landscape","screen_lock_portrait","screen_lock_rotation","screen_rotation","screen_share","sd_card","sd_storage","search","security","select_all","send","sentiment_dissatisfied","sentiment_neutral","sentiment_satisfied","sentiment_very_dissatisfied","sentiment_very_satisfied","settings","settings_applications","settings_backup_restore","settings_bluetooth","settings_brightness","settings_cell","settings_ethernet","settings_input_antenna","settings_input_component","settings_input_composite","settings_input_hdmi","settings_input_svideo","settings_overscan","settings_phone","settings_power","settings_remote","settings_system_daydream","settings_voice","share","shop","shop_two","shopping_basket","shopping_cart","short_text","show_chart","shuffle","signal_cellular_4_bar","signal_cellular_connected_no_internet_4_bar","signal_cellular_no_sim","signal_cellular_null","signal_cellular_off","signal_wifi_4_bar","signal_wifi_4_bar_lock","signal_wifi_off","sim_card","sim_card_alert","skip_next","skip_previous","slideshow","slow_motion_video","smartphone","smoke_free","smoking_rooms","sms","sms_failed","snooze","sort","sort_by_alpha","spa","space_bar","speaker","speaker_group","speaker_notes","speaker_notes_off","speaker_phone","spellcheck","star","star_border","star_half","stars","stay_current_landscape","stay_current_portrait","stay_primary_landscape","stay_primary_portrait","stop","stop_screen_share","storage","store","store_mall_directory","straighten","streetview","strikethrough_s","style","subdirectory_arrow_left","subdirectory_arrow_right","subject","subscriptions","subtitles","subway","supervisor_account","surround_sound","swap_calls","swap_horiz","swap_vert","swap_vertical_circle","switch_camera","switch_video","sync","sync_disabled","sync_problem","system_update","system_update_alt","tab","tab_unselected","tablet","tablet_android","tablet_mac","tag_faces","tap_and_play","terrain","text_fields","text_format","textsms","texture","theaters","thumb_down","thumb_up","thumbs_up_down","time_to_leave","timelapse","timeline","timer","timer_10","timer_3","timer_off","title","toc","today","toll","tonality","touch_app","toys","track_changes","traffic","train","tram","transfer_within_a_station","transform","translate","trending_down","trending_flat","trending_up","tune","turned_in","turned_in_not","tv","unarchive","undo","unfold_less","unfold_more","update","usb","verified_user","vertical_align_bottom","vertical_align_center","vertical_align_top","vibration","video_call","video_label","video_library","videocam","videocam_off","videogame_asset","view_agenda","view_array","view_carousel","view_column","view_comfy","view_compact","view_day","view_headline","view_list","view_module","view_quilt","view_stream","view_week","vignette","visibility","visibility_off","voice_chat","voicemail","volume_down","volume_mute","volume_off","volume_up","vpn_key","vpn_lock","wallpaper","warning","watch","watch_later","wb_auto","wb_cloudy","wb_incandescent","wb_iridescent","wb_sunny","wc","web","web_asset","weekend","whatshot","widgets","wifi","wifi_lock","wifi_tethering","work","wrap_text","youtube_searched_for","zoom_in","zoom_out","zoom_out_map"];
