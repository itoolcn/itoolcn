var DOMUtil = {
	getElementsByClassName:function(className,context,tagName){ //根据class获取节点
        if(typeof context == 'string'){
            tagName = context;
            context = document;
        }else{
            context = context || document;
            tagName = tagName || '*';
        }
        if(context.getElementsByClassName){
            return context.getElementsByClassName(className);
        }
        var nodes = context.getElementsByTagName(tagName);
        var results= [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            var classNames = node.className.split(' ');
            for (var j = 0; j < classNames.length; j++) {
                if (classNames[j] == className) {
                    results.push(node);
                    break;
                }
            }
        }
        return results;
    }
};

(function(){
	// 所有站点配置
	var banner_link = 'https://www.gaopeifu.com';
	var banner_960 = 'gaopeifu-960x90.jpg';
	var banner_480 = 'gaopeifu-480x90.jpg';
	var my_link = 'https://www.zhongjie.com/?ip138';
	var my_160 = 'zhongjie-160x90.gif';
	var my_240 = 'zhongjie-240x90.gif';
	var my_320 = 'zhongjie-320x90.gif';
	// 单站点配置
	var config = {
		'ipchaxun.com':{
			'banner_link':'',
			'banner_960':'',
			'banner_480':''
		},
		'itool.com':{
			'banner_link':'',
			'banner_960':'',
			'banner_480':''
		},
		'dnsdaquan.com':{
			'banner_link':'',
			'banner_960':'',
			'banner_480':''
		},
		'icplishi.com':{
			'banner_link':'',
			'banner_960':'',
			'banner_480':''
		},
		'chapangzhan.com':{
			'banner_link':'',
			'banner_960':'',
			'banner_480':''
		},
		'chaziyu.com':{
			'banner_link':'',
			'banner_960':'',
			'banner_480':''
		},
		'chayoulian.com':{
			'banner_link':'',
			'banner_960':'',
			'banner_480':''
		},
		'chayoulian.com':{
			'banner_link':'',
			'banner_960':'',
			'banner_480':''
		},
		'dingweilishi.com':{
			'banner_link':'',
			'banner_960':'',
			'banner_480':''
		},
		'www.chajiechi.com':{
			'banner_link':'',
			'banner_960':'',
			'banner_480':''
		},
		'www.ipcelou.com':{
			'banner_link':'',
			'banner_960':'',
			'banner_480':''
		}
	};
	
	// 定时任务
	var time = +new Date();
	var limit = +new Date('2022/10/01');
	if(time<limit){
		
	}

	var key = 'MODBanner';
	var contact_link = 'http://wpa.qq.com/msgrd?v=3&uin=3083352837&site=qq&menu=yes';
	var $modules = DOMUtil.getElementsByClassName(key);
	var $script = document.getElementById(key);
	var imageUrl = $script.src.replace(/[^\/]+.js(.+)?/,'')+'image/';
	var u = navigator.userAgent;
	var isMobile = u.indexOf('Mobi') > -1 || u.indexOf('iPh') > -1 || u.indexOf('480') > -1;
	if(!banner_link){
		banner_link = contact_link;
	}
	if(config[location.host]&&config[location.host]['banner_link']){
		banner_link = config[location.host]['banner_link'];
	}
	for(var i=0;i<$modules.length;i++){
		(function($module){
			var parent_width = $module.getAttribute('data-width')||$module.parentNode.offsetWidth;
			if(parent_width){
				$module.style.width = parent_width;
			}
			$module.style.margin = '0 auto';
			$module.style.textAlign = 'center';
			$module.style.fontSize = '0px';
			$module.innerHTML = '';
			var $outer =  document.createElement('div');
			$outer.style.display = 'inline-block';
			$outer.style.width = '100%';
			$module.appendChild($outer);
			var index = Math.floor(parent_width/480);
			var banner_width = index==2?960:480;
			var other_width = parent_width-banner_width;
			var my_width = 160;
			switch(Math.floor(other_width/80)){
				case 4:
					my_width = 320;
					break;
				case 3:
					my_width = 240;
					break;
				case 0:
				case 1:
					my_width = 0;
					break;
				default:
					my_width = 160;
			}
			var my_image = my_width+'.png';
			if(my_width==160&&my_160){
				my_image = my_160;
			}else if(my_width==240&&my_240){
				my_image = my_240;
			}else if(my_width==320&&my_320){
				my_image = my_320;
			}
			var banner_image = banner_width+'.png';
			if(banner_width==960){
				if(banner_960){
					banner_image = banner_960;
				}
				if(config[location.host]&&config[location.host]['banner_960']){
					banner_image = config[location.host]['banner_960'];
				}
			}else if(banner_width==480){
				if(banner_480){
					banner_image = banner_480;
				}
				if(config[location.host]&&config[location.host]['banner_480']){
					banner_image = config[location.host]['banner_480'];
				}
			}
			if(!isMobile){
				$ad = document.createElement('div');
				$ad.style.position = 'relative';
				$ad.style.display = 'inline-block';
				if(my_width){				
					$ad.style.width = banner_width+'px';
				}
				$ad.innerHTML = '<a href="'+banner_link+'" target="_blank" rel="nofollow"><img style="max-width:100%;height:auto;" src="'+imageUrl+banner_image+'"/><img style="position:absolute;right:0;bottom:0;" src="'+imageUrl+'watermark.png"/></a>';
				$outer.appendChild($ad);
				if(my_width){			
					$my = document.createElement('div');
					$my.style.position = 'relative';
					$my.style.display = 'inline-block';
					$my.style.width = my_width+'px';
					$my.innerHTML = '<a href="'+my_link+'" target="_blank" rel="nofollow"><img style="max-width:100%;height:auto;" src="'+imageUrl+my_image+'"/><img style="position:absolute;right:0;bottom:0;" src="'+imageUrl+'watermark.png"/></a>';
					$outer.appendChild($my);
				}
			}else{
				$ad = document.createElement('div');
				$ad.style.position = 'relative';
				$ad.style.display = 'inline-block';
				$ad.innerHTML = '<a href="'+banner_link+'" target="_blank" rel="nofollow"><img style="max-width:100%;height:auto;" src="'+imageUrl+banner_image+'"/><img style="position:absolute;right:0;bottom:0;" src="'+imageUrl+'watermark.png"/></a>';
				$outer.appendChild($ad);
			}
			if(banner_link&&banner_link!=contact_link){
				$p = document.createElement('p');
				$p.style.lineHeight = '36px';
				$p.style.textAlign = 'center';
				$p.style.fontSize = '14px';
				$p.innerHTML = '<a style="color:#fc0000;" href="http://wpa.qq.com/msgrd?v=3&amp;uin=3083352837&amp;site=qq&amp;menu=yes" target="_blank" rel="nofollow">广告QQ：3083352837</a>';
				$module.appendChild($p);
			}
		})($modules[i]);
	}
})();