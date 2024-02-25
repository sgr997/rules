//#!name = 京东比价
//#!desc = 在京东应用内嵌入比价信息，点击商品标题即可查看。仅支持京东的标准模式。
//#!openUrl = 
//#!author = zwf234
//!homepage = https://gitlab.com/lodepuly/vpn_tool/-/tree/master/Tool/Loon/Plugin
//!icon = https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/JD.png
//!date = 2023-09-08 12:40:46

[rewrite_local]
^https?://api\.m\.jd\.com/(client\.action|api)\?functionId=(wareBusiness|serverConfig|basicConfig|lite_wareBusiness|pingou_item) url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/jd_price.js

[Script]
http-response ^https?://api\.m\.jd\.com/(client\.action|api)\?functionId=(wareBusiness|serverConfig|basicConfig|lite_wareBusiness|pingou_item) script-path = https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Resource/Script/JD/JD_Price.js, requires-body = true, tag = 京东比价
  
[Mitm]
hostname = api.m.jd.com