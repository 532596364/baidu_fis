$(function () {
	//信息框的data-id
	var nid;
    //皮肤栏导航的id
    var img_id=1000;
    //读取localstorage
    if (localStorage.src) {
         $(".s-skin-container").css("background-image","url("+localStorage.src+")");
    }


	// input聚焦和失去焦点的效果
    var setStyle = function (id) {
        $("#"+id).css('border','1px solid #4791FF');
    }
    var delStyle = function (id) {
        $("#"+id).css('border-color','#b8b8b8 transparent #ccc #b8b8b8');
    }
    //登入遮罩
    $("#u1 .lb").click(function () {
    	$('#TANGRAM__PSP_3__').show();

    })
    //设置的hover
    $("#s_usersetting_top").hover(function(){
    	$("#set").slideDown(500);
    },function () {
    	$("#set").slideUp(500);
    })
    $("#bri").hover(function(){
    	$("#more").show();
    	$("#more").hover(function () {
    		$(this).show();
    	},function (argument) {
    		$(this).hide();
    	})
    },function () {
    	$("#more").hide();
    })
    //获取nid
    $("#s_ctner_menus span").each(function () {
    	if ($(this).hasClass("current")) {
    		nid = $(this).attr("data-id");
    	}
    });
    //导航切换
    $("#s_ctner_menus span").click(function () {
    	if ($(this).attr("data-id")==99) {
    		if($(".sui-dialog-cardsetting").css('display') == "none") {
    			$(".sui-dialog-cardsetting").show();
    		}else{
    			$(".sui-dialog-cardsetting").hide();
    		}
    	}else if(!$(this).hasClass("current")){
            $("#s_ctner_menus span").removeClass("current");
            $(this).addClass("current");
            $("#s_ctner_contents .s-content").hide();
            nid = $(this).attr("data-id");
            switch(nid) {
                case "1": $("#s_content_1").show(); break;
                case "2": $("#s_content_2").show(); break;
                case "5": $("#s_content_5").show(); break;
                case "15": $("#s_content_15").show(); break;
                case "100": $("#s_content_100").show(); break;
                default : break;
            }
        }
    })

    //滚动条
    $(".s-more-bar").click(function () {
    	footer();
    	more(nid);
        $(this).hide();
    });
    var top = Math.floor($(window).height()/3);
    $(document).scroll( function(){
    	if ($(this).scrollTop()==0) {
    		footer();
    		more(nid);
    		moreInfo();
    	}else if ($(this).scrollTop() != 0 ){
    		//显示置顶按钮
    		$("#s_top_feed .to-top").css("visibility","visible");
    		if ($(this).scrollTop() > top) {
    			more(nid);
    			moreInfo();
    			top = $(this).scrollTop()+Math.floor($(window).height()/2);
    		}
    	}
    	if($(this).scrollTop() > 225) {
    		$("#head_wrapper").addClass("s-down");
    		$("#result_logo").show();
    		$("#s_top_wrap").show();
    		$("#lg").hide();

    	}else{
    		$("#head_wrapper").removeClass("s-down");
    		$("#result_logo").hide();
    		$("#s_top_wrap").hide();
    		$("#lg").show();
    	}
    });
    //置顶之后隐藏按钮
    $("#s_top_feed").click(function () {
    	$(document).scrollTop(0);
    	$("#s_top_feed .to-top").css("visibility","hidden");
    })
    // jquery 兼容的滚轮事件
	$(document).on("mousewheel DOMMouseScroll", function (e) {
	    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
	                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
	    if (delta > 0) {
	        // 向上滚
	        
	    } else if (delta < 0) {
	        // 向下滚
            $(".s-more-bar").hide();
	        if ($(this).scrollTop()==0) {
	    		footer();
	    		more(nid);
	    		moreInfo();
	    	}else if ($(this).scrollTop() != 0 ){
	    		//显示置顶按钮
    			$("#s_top_feed .to-top").css("visibility","visible");
	    		if ($(this).scrollTop() > top) {
	    			more(nid);
	    			moreInfo();		
	    			top = $(this).scrollTop()+Math.floor($(window).height()/2);
	    		}
    		}
		}
	});
   
    $("#s_ctner_contents ")
    //页脚改变位置
    function footer() {
    	$("#footer").hide();
		$("#footer1").show();
    }
    //增加信息区域的高度
    function more(n) {
    	switch(n) {
                case "1": $("#s_xmancard_nav").height(1355);break;
                case "2": $(".s-xmancard-news").height(function (n,c) {
								return c+Math.floor($(window).height()/2);
							}); break;
                case "5": $("#s_xmancard_shopping").height(function (n,c) {
								return c+Math.floor($(window).height()/2);
							});$(".tab-content").show(); break;
                case "15":$("#s_xmancard_video").height(function (n,c) {
								return c+Math.floor($(window).height()/2);
							}); break;
                case "100":  break;
                default : break;
            }
    }
    function moreInfo() {
    	commond();
    	nav();
    	mv();
    	shop();
    }
    //推荐
    function commond() {
    	var he = Math.floor($(window).height()/2);
    	var n = Math.ceil(he / 160);
    	for (var i = 0; i < n; i++) {
    		var div1 = $("<div>").attr("class","s-news-special s-news-item s-news-special-item-tpl-2 s-opacity-blank8").appendTo($(".s-news-list-wrapper"));
    		// var div2 = $("<div>").attr("class","s-pic-content").appendTo(div1);
    		// var div2_1 = $("<div>").attr("class","s-pic-content-own").appendTo(div2);
    		// var ul = $("<ul>").attr("class","s-news-content-imgs clearfix").appendTo(div2_1);
    		// var li = $("<li>").attr("class","item-img-wrap").appendTo(ul);
    		// var a1 = $("<a>").attr("href","http://3c.ycwb.com/2016-10/22/content_23311221.htm").appendTo(li);
    		// var img = $("<img>").attr({class:"s-news-img",src:"imgs/001c25ddb51a1974092b63.jpg"}).appendTo(a1);
    		// var div3 = $("<div>").attr("class","s-block-container").appendTo(div1);
    		// var div3_1 = $("<div>").attr("class","s-block-container-own").appendTo(div3);
    		// var div3_1_1 = $("<div>").attr("class","s-text-content").appendTo(div3_1);
    		// var h2 = $("<h2>").appendTo(div3_1_1);
    		// var a2 = $("<a>").attr({href:"http://3c.ycwb.com/2016-10/22/content_23311221.htm",class:"s-title-yahei"}).html("美大学研发3D打印“指纹手套”测试指纹防伪").appendTo(h2);
    		// var a3 = $("<a>").attr({href:"javascript:;",class:"del"}).appendTo(h2);
    		// var div3_1_2 = $("<div>").attr("class","from").appendTo(div3_1);
    		// var span1 = $("<span>").attr("class","src-net").appendTo(div3_1_2);
    		// var a4 = $("<a>").attr("href","http://3c.ycwb.com").html("金羊科技").appendTo(span1);
    		// var span2 = $("<span>").attr("class","src-time").html("10-22 08:30").appendTo(div3_1_2);
    		// var div4 = $("<div>").attr("class","dustbin").appendTo(div3_1_2);
            div1.html('<div class="s-news-special s-news-item s-news-special-item-tpl-2 s-opacity-blank8" data-rid="61" data-relatewords="1" data-log="stype:0;picNum:1;"><div class="s-pic-content"><div class="s-pic-content-own"> <ul class="s-news-content-imgs clearfix"><li class="item-img-wrap"><a href="http://3c.ycwb.com/2016-10/22/content_23311221.htm" target="_blank" data-click="LOG_LINK" title="美大学研发3D打印“指纹手套”测试指纹防伪" data-title="美大学研发3D打印“指纹手套”测试指纹防伪"> <img class="s-news-img" src="imgs/001c25ddb51a1974092b63.jpg" height="119" width="179"> </a></li></ul></div></div><div class="s-block-container"><div class="s-block-container-own"><div class="s-text-content"><h2><a href="http://3c.ycwb.com/2016-10/22/content_23311221.htm" title="美大学研发3D打印“指纹手套”测试指纹防伪" target="_blank" data-title="美大学研发3D打印“指纹手套”测试指纹防伪" data-link="http://3c.ycwb.com/2016-10/22/content_23311221.htm" data-click="LOG_LINK" class="s-title-yahei">美大学研发3D打印“指纹手套”测试指纹防伪</a><a href="javascript:;" class="del"></a></h2> </div><div class="from"> <span class="src-net"> <a href="http://3c.ycwb.com" target="_blank" data-src="1" data-click="LOG_LINK"> 金羊科技 </a> </span> <span class="src-time">10-22 08:30</span><div class="dustbin" data-click="LOG_BTN_DUSTBIN"></div></div></div></div></div>');
    	}
    }
    //导航
    function nav() {
    	$(".water-container .s-nav-wrapper").show();
    }
    // 视频
    function mv() {
    	var he = Math.floor($(window).height()/2);
    	var n = Math.ceil(he / 370);
    	var date1 = '<div data-rid="13785388184235670366" class="item-wrapper" data-subscribe="0" data-log="stype:0;videotype:long;"><div class="video-item video-item-1"><div class="v-pic v-pic-1 pic-hover"><div class="nointerest buzz"></div><div class="dustbin" data-click="LOG_BTN_DUSTBIN"></div><a class="pic" href="http://www.iqiyi.com/v_19rrluo3zo.html?vfm=2008_aldbd" hidefocus="" target="_blank" title="功夫熊猫3" data-click="LOG_LINK"><img class="img" width="195px" height="267px" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4049593282,1055960534&amp;fm=58"><div class="img-layer-ie" title="功夫熊猫3"></div></a><div class="black"></div><a class="bg img-click" href="http://www.iqiyi.com/v_19rrluo3zo.html?vfm=2008_aldbd" target="_blank" data-id="13785388184235670366" data-stype="0" title="功夫熊猫3"></a><a class="img-click" href="http://www.iqiyi.com/v_19rrluo3zo.html?vfm=2008_aldbd" target="_blank" data-id="13785388184235670366" data-stype="0" title="功夫熊猫3"><span class="v-tag">95:19</span></a><a href="http://www.iqiyi.com/v_19rrluo3zo.html?vfm=2008_aldbd" target="_blank" class="img-click tag-sort tag-sort4"></a></div><div class="v-txt s-opacity-background1 s-opacity-blank3"><div class="text"><a class="s-opacity-blank3" href="http://www.iqiyi.com/v_19rrluo3zo.html?vfm=2008_aldbd" hidefocus="" target="_blank" title="功夫熊猫3" data-click="LOG_LINK">功夫熊猫3</a></div><div class="score"><span class="score-star"><span class="star-active" style="width:46.15px"></span></span>7.1</div></div></div></div>';
    	var date2 = '<div data-rid="13078325017476184846" class="item-wrapper" data-subscribe="0" data-log="stype:0;videotype:long;"><div class="video-item video-item-1"><div class="v-pic v-pic-1 pic-hover"><div class="nointerest buzz"></div><div class="dustbin" data-click="LOG_BTN_DUSTBIN"></div><a class="pic" href="http://v.pptv.com/show_page/1f340f8d51.html?rcc_id=baiduchuisou" hidefocus="" target="_blank" title="长征" data-click="LOG_LINK"><img class="img" width="195px" height="267px" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3758113127,1543710663&amp;fm=58"><div class="img-layer-ie" title="长征"></div></a><div class="black"></div><a class="bg img-click" href="http://v.pptv.com/show_page/1f340f8d51.html?rcc_id=baiduchuisou" target="_blank" data-id="13078325017476184846" data-stype="0" title="长征"></a><a class="img-click" href="http://v.pptv.com/show_page/1f340f8d51.html?rcc_id=baiduchuisou" target="_blank" data-id="13078325017476184846" data-stype="0" title="长征"><span class="v-tag">24集全</span></a><a href="http://v.pptv.com/show_page/1f340f8d51.html?rcc_id=baiduchuisou" target="_blank" class="img-click tag-sort tag-sort3"></a></div><div class="v-txt s-opacity-background1 s-opacity-blank3"><div class="text"><a class="s-opacity-blank3" href="http://v.pptv.com/show_page/1f340f8d51.html?rcc_id=baiduchuisou" hidefocus="" target="_blank" title="长征" data-click="LOG_LINK">长征</a></div><div class="score"><span class="score-star"><span class="star-active" style="width:49.4px"></span></span>7.6</div></div></div></div>';
    	var date3 = '<div data-rid="2805460276443116439" class="item-wrapper" data-subscribe="0" data-log="stype:4;videotype:short;"><div class="video-item video-item-2"><div class="v-pic v-pic-2 pic-hover"><div class="nointerest buzz"></div><div class="dustbin" data-click="LOG_BTN_DUSTBIN"></div><a class="pic" href="http://www.iqiyi.com/v_19rr99sad0.html?vfm=f_109_bdxs" hidefocus="" target="_blank" title="胆大！监拍四川一老汉碰瓷警车" data-click="LOG_LINK"><img class="img" width="195px" height="101px" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3901630248,1582139040&amp;fm=58"><div class="img-layer-ie" title="胆大！监拍四川一老汉碰瓷警车"></div></a><div class="black"></div><a class="bg img-click" href="http://www.iqiyi.com/v_19rr99sad0.html?vfm=f_109_bdxs" target="_blank" data-id="2805460276443116439" data-stype="4" title="胆大！监拍四川一老汉碰瓷警车"></a><a class="img-click" href="http://www.iqiyi.com/v_19rr99sad0.html?vfm=f_109_bdxs" target="_blank" data-id="2805460276443116439" data-stype="4" title="胆大！监拍四川一老汉碰瓷警车"><span class="v-tag">00:28</span></a></div><div class="v-txt s-opacity-background1 s-opacity-blank3"><div class="text"><a class="s-opacity-blank3" href="http://www.iqiyi.com/v_19rr99sad0.html?vfm=f_109_bdxs" hidefocus="" target="_blank" title="胆大！监拍四川一老汉碰瓷警车" data-click="LOG_LINK">胆大！监拍四川一老汉碰瓷警车</a></div></div></div></div><div data-rid="4486083243770124363" class="item-wrapper" data-subscribe="0" data-log="stype:4;videotype:short;"><div class="video-item video-item-2"><div class="v-pic v-pic-2 pic-hover"><div class="nointerest buzz"></div><div class="dustbin" data-click="LOG_BTN_DUSTBIN"></div><a class="pic" href="http://www.iqiyi.com/v_19rr99njzs.html?vfm=f_109_bdxs" hidefocus="" target="_blank" title="飞船组合体调整姿态转正飞 神舟在前天宫在后" data-click="LOG_LINK"><img class="img" width="195px" height="101px" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4189382365,2267761940&amp;fm=58"><div class="img-layer-ie" title="飞船组合体调整姿态转正飞 神舟在前天宫在后"></div></a><div class="black"></div><a class="bg img-click" href="http://www.iqiyi.com/v_19rr99njzs.html?vfm=f_109_bdxs" target="_blank" data-id="4486083243770124363" data-stype="4" title="飞船组合体调整姿态转正飞 神舟在前天宫在后"></a><a class="img-click" href="http://www.iqiyi.com/v_19rr99njzs.html?vfm=f_109_bdxs" target="_blank" data-id="4486083243770124363" data-stype="4" title="飞船组合体调整姿态转正飞 神舟在前天宫在后"><span class="v-tag">01:56</span></a></div><div class="v-txt s-opacity-background1 s-opacity-blank3"><div class="text"><a class="s-opacity-blank3" href="http://www.iqiyi.com/v_19rr99njzs.html?vfm=f_109_bdxs" hidefocus="" target="_blank" title="飞船组合体调整姿态转正飞 神舟在前天宫在后" data-click="LOG_LINK">飞船组合体调整姿态转正飞 神舟在前天宫在后</a></div></div></div></div>';
    	var date4 = '<div data-rid="3176496858052531256" class="item-wrapper" data-subscribe="0" data-log="stype:4;videotype:short;"><div class="video-item video-item-2"><div class="v-pic v-pic-2 pic-hover"><div class="nointerest buzz"></div><div class="dustbin" data-click="LOG_BTN_DUSTBIN"></div><a class="pic" href="http://www.iqiyi.com/v_19rr99afds.html?vfm=f_109_bdxs" hidefocus="" target="_blank" title="近距实拍爆炸腾起黑烟" data-click="LOG_LINK"><img class="img" width="195px" height="101px" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3797476352,1936668874&amp;fm=58"><div class="img-layer-ie" title="近距实拍爆炸腾起黑烟"></div></a><div class="black"></div><a class="bg img-click" href="http://www.iqiyi.com/v_19rr99afds.html?vfm=f_109_bdxs" target="_blank" data-id="3176496858052531256" data-stype="4" title="近距实拍爆炸腾起黑烟"></a><a class="img-click" href="http://www.iqiyi.com/v_19rr99afds.html?vfm=f_109_bdxs" target="_blank" data-id="3176496858052531256" data-stype="4" title="近距实拍爆炸腾起黑烟"><span class="v-tag">01:50</span></a></div><div class="v-txt s-opacity-background1 s-opacity-blank3"><div class="text"><a class="s-opacity-blank3" href="http://www.iqiyi.com/v_19rr99afds.html?vfm=f_109_bdxs" hidefocus="" target="_blank" title="近距实拍爆炸腾起黑烟" data-click="LOG_LINK">近距实拍爆炸腾起黑烟</a></div></div></div></div><div data-rid="3604539865483234411" class="item-wrapper" data-subscribe="0" data-log="stype:4;videotype:short;"><div class="video-item video-item-2"><div class="v-pic v-pic-2 pic-hover"><div class="nointerest buzz"></div><div class="dustbin" data-click="LOG_BTN_DUSTBIN"></div><a class="pic" href="http://www.iqiyi.com/v_19rr99bfn4.html?vfm=f_109_bdxs" hidefocus="" target="_blank" title="屌丝逆袭吃蟹：三道蟹料理" data-click="LOG_LINK"><img class="img" width="195px" height="101px" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1166108479,3026926958&amp;fm=58"><div class="img-layer-ie" title="屌丝逆袭吃蟹：三道蟹料理"></div></a><div class="black"></div><a class="bg img-click" href="http://www.iqiyi.com/v_19rr99bfn4.html?vfm=f_109_bdxs" target="_blank" data-id="3604539865483234411" data-stype="4" title="屌丝逆袭吃蟹：三道蟹料理"></a><a class="img-click" href="http://www.iqiyi.com/v_19rr99bfn4.html?vfm=f_109_bdxs" target="_blank" data-id="3604539865483234411" data-stype="4" title="屌丝逆袭吃蟹：三道蟹料理"><span class="v-tag">02:20</span></a></div><div class="v-txt s-opacity-background1 s-opacity-blank3"><div class="text"><a class="s-opacity-blank3" href="http://www.iqiyi.com/v_19rr99bfn4.html?vfm=f_109_bdxs" hidefocus="" target="_blank" title="屌丝逆袭吃蟹：三道蟹料理" data-click="LOG_LINK">屌丝逆袭吃蟹：三道蟹料理</a></div></div></div></div>';
    	for (var i = 0; i < n; i++) {
    		$("<div>").attr("class","video-col clearfix").html(date1).appendTo($(".s-video-wrapper"));
    		$("<div>").attr("class","video-col clearfix").html(date2).appendTo($(".s-video-wrapper"));
    		$("<div>").attr("class","video-col clearfix").html(date3).appendTo($(".s-video-wrapper"));
    		$("<div>").attr("class","video-col clearfix").html(date4).appendTo($(".s-video-wrapper"));
    		$("<div>").attr("class","video-col-line s-opacity-border4-top").appendTo($(".s-video-wrapper"));
    	}
    	
    }
    // 购物
    function shop() {
    	var he = Math.floor($(window).height()/2);
    	var n = Math.ceil(he / 370)*4;
    	var date1 = '<div class="shopping-bstab-item" data-rid="48410" recinfo="{&quot;style&quot;:&quot;1&quot;,&quot;product-type&quot;:&quot;super&quot;,&quot;source&quot;:&quot;editor&quot;,&quot;vip-sid&quot;:&quot;vs_pc_002&quot; }"><div class="shopping-card-imgwrapper"><a class="img" href="http://vip.baidu.com/cps/show/goto?mallid=101&amp;product_id=48410&amp;disable_goto_flag=0&amp;url=7e9cW83l1opBqZti6BgOqJFiNCsW6iLwnP9Efbh8sFk5b8L%252FPkYmJaev0b%252FzQzxuVeKXjBj1gg4bZOIgb%252BaDpA&amp;sharekey=&amp;statkey=zw_pcgouwu_p_48410&amp;vip_frm=mhd_gouwu&amp;statext[sid]=vs_pc_002&amp;statext[style]=1&amp;statext[product_type]=super" title="莱芙棉 秋冬季保暖加厚底包跟棉拖鞋男女室内居家情侣款" target="_blank" data-click="LOG_LINK"><img src="https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/super/scrop%3D273%3Bq%3D100/sign=70231068c1ea15ce45b0a756c63d08c4/d000baa1cd11728b3408f2cfc0fcc3cec3fd2c31.jpg"></a></div><div class="shopping-card-text clearfix"><a href="http://vip.baidu.com/cps/show/goto?mallid=101&amp;product_id=48410&amp;disable_goto_flag=0&amp;url=7e9cW83l1opBqZti6BgOqJFiNCsW6iLwnP9Efbh8sFk5b8L%252FPkYmJaev0b%252FzQzxuVeKXjBj1gg4bZOIgb%252BaDpA&amp;sharekey=&amp;statkey=zw_pcgouwu_p_48410&amp;vip_frm=mhd_gouwu&amp;statext[sid]=vs_pc_002&amp;statext[style]=1&amp;statext[product_type]=super" target="_blank" title="莱芙棉 秋冬季保暖加厚底包跟棉拖鞋男女室内居家情侣款" data-click="LOG_LINK" class="a-title"><div class="title"><p>莱芙棉 秋冬季保暖加厚底包跟棉拖鞋男女室内居家情侣款</p></div></a><div class="price-area clearfix" data-url="http://vip.baidu.com/cps/show/goto?mallid=101&amp;product_id=48410&amp;disable_goto_flag=0&amp;url=7e9cW83l1opBqZti6BgOqJFiNCsW6iLwnP9Efbh8sFk5b8L%252FPkYmJaev0b%252FzQzxuVeKXjBj1gg4bZOIgb%252BaDpA&amp;sharekey=&amp;statkey=zw_pcgouwu_p_48410&amp;vip_frm=mhd_gouwu&amp;statext[sid]=vs_pc_002&amp;statext[style]=1&amp;statext[product_type]=super"> <span class="price">   <span class="price-sign">¥</span>16.9</span> <span class="or-price">   <span class="or-price-text">29</span> </span></div> <span class="fan-area clearfix" data-url="http://vip.baidu.com/cps/show/goto?mallid=101&amp;product_id=48410&amp;disable_goto_flag=0&amp;url=7e9cW83l1opBqZti6BgOqJFiNCsW6iLwnP9Efbh8sFk5b8L%252FPkYmJaev0b%252FzQzxuVeKXjBj1gg4bZOIgb%252BaDpA&amp;sharekey=&amp;statkey=zw_pcgouwu_p_48410&amp;vip_frm=mhd_gouwu&amp;statext[sid]=vs_pc_002&amp;statext[style]=1&amp;statext[product_type]=super"  <span class="fan-text">   <span class="sign">-</span> <span>3.54</span> </span> <span class="point">返现21%</span> <span class="mall">京东</span> </span></div></div>';
    	for (var i = 0; i < n; i++) {
    		$("<div>").attr("class","s-index-col").html(date1).appendTo($(".tab-content"));
    	}
    }


    //导航栏左侧的一些弹窗
    $(".s-msg").click(function () {
    	$("#s_mod_msg").toggle();
    })
    
    //点击其他地方隐藏弹窗
    // $("*").click(function (event) {
    //         if ((!$(this).hasClass("s-mod-msg")) && (!$(this).hasClass("s-msg")){
    //             $("#s_mod_msg").hide();
    //         }
    //     event.stopPropagation(); //阻止事件冒泡    
    // });


    /*************换肤********************/
    //悬停预览效果
    $(".skin-img-item").hover(function () {
       var src = $(this).children("img").attr("src");
       $(".preview-view-container").children("img").attr("src",src);
    })
    //点击换肤
    $(".skin-img-item").click(function (){
       var src = $(this).children("img").attr("src");
       src = src.replace(/skin_plus/g,'skin');
       $(".s-skin-container").css("background-image","url("+src+")");
       //保存记录
       localStorage.setItem("src",src);
    })
    // 打开皮肤框
    $(".s-skin").click(function () {
         $("#s_skin_layer").slideDown(100);
    })
    // 收起皮肤框
    $(".s-skin-up").click(function () {
        $("#s_skin_layer").slideUp(100);
    })
    //不使用皮肤
    $(".s-skin-set").click(function () {
        $(".s-skin-container").css("background-image","url()");
       //保存记录
       localStorage.setItem("src",null);
    });
    $(".s-skin-nav").children("li").click(function () {
       if (!$(this).hasClass("choose-nav")) {
            $(".s-skin-nav").children("li").removeClass("choose-nav");
            $(this).addClass("choose-nav");
            img_id = $(this).attr("navtype");
            alert(img_id);
       }
    })
})
