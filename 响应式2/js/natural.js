window.onload = function (){
	var menuWrap = $("#menuWrap1");
	var menuNav = $('#menuNav1');
	var as = $("a",$("#menuNav1"));
	var square3 = $("#spuare31");
	var square2 = $("#square22");
	var mask = $('#maskbg');
	var bana1 = $('.a1');
	var bana2 = $('.a2');
	var bana3 = $('.a3');
	var bana4 = $('.a4');
	var boxtext = $('.boxtext');
	var boxtext3 = $('.opc')[0];
	var boxtext4 = $('.container5')[0];
	var lis = mask.getElementsByTagName('li');
	var left1 = $('.left6')[0];
	var right1 = $('.right6')[0];
	var left2 = $('.left7')[0];
	var right2 = $('.right7')[0];
	var squarebtnwrap = $('.squarebtnwrap')[0];
	var nmllist = $('.nmllist')[0];
	var zsleft = $('.zsleft')[0];
	var zsright = $('.zsright')[0];
	var list = $('.list');
	var squareaddtext = $('.squareaddtext');
	var textsqmask = $('.textsqmask')[0];
	var peoplebox = $('.peoplebox')[0];
	var squareaddtext2 = $('.squareaddtext2');
	var squareLt = $('.squareLt')[0];
	var squareGt = $('.squareGt')[0];
	var iH = $('.container-fluid')[0];
	var menuL = $('#menuL');
	var onoff = true;
	var flag = true;
	var onoff2 = true;
	var timeryc = 0;
	var num = 0;
	var arr2 = [];
	var transforms = $('.transforms')[0];
	var videoContainer = $('.videoContainer')[0];
	var row0 = $('#row0');
	// var rows = $('.row');

	// alert(window.localStorage)
	// if(window.localStorage){
	// 	num = window.localStorage.getItem('nub');
	// }else {
	// 	document.cookie = num;
	// 	console.log(num)
	// }
	num = window.localStorage.getItem('nub') ;
	(function (){
		num = +num;
		if(flag){
			flag = false;
			autoH();
			settime(scrollH(num-1),scrollH(num));
			tagColor(num);
			movetxt(num);
			setTimeout(function (){
			flag = true;
			}, 2000);
		}else {
			return;
		}
		window.localStorage.setItem('nub',num);
	})();
	
	// console.log(videoContainer)
	window.onresize = window.onscroll =  function (){
		// var iHeight = document.documentElement.clientHeight;
		autoH();
		arr2 = [
			iH.children[0].scrollHeight+iH.children[1].scrollHeight,
			iH.children[2].scrollHeight,
			iH.children[3].scrollHeight,
			iH.children[4].scrollHeight+iH.children[1].scrollHeight,
			iH.children[6].scrollHeight+iH.children[1].scrollHeight,
			iH.children[8].scrollHeight,
			iH.children[9].scrollHeight+iH.children[1].scrollHeight
		];
		// arr2 = [
		// 	iHeight+iH.children[1].scrollHeight,
		// 	iHeight,
		// 	iHeight,
		// 	iHeight+iH.children[1].scrollHeight,
		// 	iHeight+iH.children[1].scrollHeight,
		// 	iHeight,
		// 	iHeight+iH.children[1].scrollHeight
		// ];
		
	};
	/******************js控制高度是全屏高度******************/ 
	function autoH(){
		var iHeight = document.documentElement.clientHeight;
		var iWidth = document.documentElement.offsetWidth;
		var iTop = window.pageYOffset;
		menuWrap.style.top =window.pageYOffset + 'px';
		mask.style.top = window.pageYOffset + 'px';	
		if(peoplebox.style.display == 'block'){
			textsqmask.style.height = iHeight +'px';
			textsqmask.style.top = iTop + 'px';
			peoplebox.style.top = iTop+ 240+'px';
			peoplebox.style.zIndex = 20; 
		}
		// for(var i = 0; i < rows.length; i++){
		// 	if(rows[i].className != 'row row3'){
		// 		rows[i].style.height = iHeight +'px';
		// 	}
			
		// }
	}
	(function (){
		for(var i = 0; i < as.length; i++){
			as[i].innerHTML = tagDate[i];
		}
	})()

	square3.onclick = function (){
		var iHeight = document.documentElement.clientHeight;
		startMove(square2.parentNode,'height',400,iHeight,'linear');
		startMove(square2.parentNode.children[0],'height',200,iHeight,'linear');
	};
	square2.onmouseover = function (){
		square2.children[0].style.transform = "rotate(45deg)";
		square2.children[1].style.transform = "rotate(-90deg)";
	};
	square2.onmouseout = function (){
		square2.children[0].style.transform = "rotate(0deg)";
		square2.children[1].style.transform = "rotate(0deg)";
	};
	square2.onclick = function (){
			startMove(square2.parentNode,'height',400,0,'linear');
	};
	/*************************广告动画1******************************/ 
	function bannerFn(index1,index2,index3,index4){
		index1.style.left = 0 +'px';
		index2.style.top = 40 +'%';
		index3.style.left = 45+'%';
		index4.style.top = 35 +'%';
	}
	/*************************广告动画2******************************/
	function bannerFn2(index1,index2,index3,index4){
		index1.style.left = -50 +'px';
		index2.style.top = 100 +'px';
		index3.style.left = 55+'%';
		index4.style.top = -20 +'px';
	}
	
	/***********************鼠标移入向下图标的效果*****************************/ 
	squarebtnwrap.onmouseover = function (){
		this.style.top = -5 +'px';
		this.style.transition = '.5s';
		this.children[0].children[0].style.backgroundColor = '#fff';
		this.children[1].style.color = '#bfa966';
		this.children[2].style.color = '#bfa966';
		this.children[3].style.borderColor = '#bfa966';
	}
	squarebtnwrap.onmouseout = function (){
		this.style.top = 0;
		this.children[0].children[0].style.backgroundColor = '#bfa966';
		this.children[1].style.color = '#fff';
		this.children[2].style.color = '#fff';
		this.children[3].style.borderColor = '#fff';
	}

	/*无缝轮播+数据延迟加载*/ 
	lunbo1();
	function lunbo1(){
		var now = 0;
		var navas = list[0].children;
		/*********************小点的点击事件*********************************/ 
		for(var i = 0; i < navas.length; i++){
			navas[i].setAttribute('index', i);
			navas[i].onclick = function (){
				if(onoff){
					addclass(this.getAttribute('index'));
					onoff = false;
					if(this.getAttribute('index') > now){
						nmllist.style.top = 0;
						nmllist.children[0].innerHTML = creatFn(now);
						nmllist.children[1].innerHTML = creatFn(this.getAttribute('index'));
						startMove(nmllist,'top',400,-nmllist.parentNode.offsetHeight,'linear');
					}else if(this.getAttribute('index') < now){
						nmllist.style.top = -350+'px';
						nmllist.children[0].innerHTML = creatFn(this.getAttribute('index'));
						nmllist.children[1].innerHTML = creatFn(now);
						startMove(nmllist,'top',400,0,'linear');
					}
				}else {return};
				now = this.getAttribute('index');
				setTimeout(function (){
					onoff = true;
				},500);
			}
		}
		/*********************轮播向下按钮*********************************/ 
		zsright.onmouseover = function (){
			this.children[0].style.transform = 'rotateZ(0deg)';
		}
		zsright.onmouseout = function (){
			this.children[0].style.transform = 'rotateZ(45deg)';
		}
		/*********************轮播向上按钮*********************************/
		zsleft.onmouseover = function (){
			this.children[0].style.transform = 'rotateZ(0deg)';
		}
		zsleft.onmouseout = function (){
			this.children[0].style.transform = 'rotateZ(-45deg)';
		}
		zsright.onclick = nextFn;
		function nextFn(){
			var next = now +1;
			var timer = 0;
			if(onoff){
				onoff = false;
				if(next > Data.length-1){
					next = 0;
				}
				addclass(next);
				nmllist.style.top = 0;
				nmllist.children[0].innerHTML = creatFn(now);
				nmllist.children[1].innerHTML = creatFn(next);
				startMove(nmllist,'top',400,-350,'linear');
				now = next;
			}else {
				return;
			}
			timer = setTimeout(function (){
				onoff = true;
			}, 500);
		}
		zsleft.onclick = function (){
			var pre = now - 1;
			var timer = 0;
			if(onoff){
				onoff = false;
				if(pre < 0){
					pre = Data.length-1;
				}
				addclass(pre);
				nmllist.style.top = -350 +'px';
				nmllist.children[0].innerHTML = creatFn(pre);
				nmllist.children[1].innerHTML = creatFn(now);
				startMove(nmllist,'top',400,0,'linear');
				now = pre;
			}else {
				return;
			}
			timer = setTimeout(function (){
				onoff = true;
			}, 500);
		}
		nmllist.children[0].innerHTML = creatFn(0);
		/****************轮播图的数据渲染*************************/ 
		function creatFn(num){
			var str = '';
			// nmllist.children[0].
			str +='<h3>';
			str += Data[num].h3;
			str +='</h3>';
			str +='<p>';
			str +=Data[num].p1;
			str +='</p>';
			str +='<p>';
			str +=Data[num].p2;
			str +='</p>';
			str +='<div class="textsquare">';
			str +='<span class="textsq"></span>';
			if(num == 0){
				str +='<a href="javascript:;">'+Data[0].box.img+'</a>';
			}else {
				str +='<img src="img/'+Data[num].box.img+'">';
			}
			str +='</div>';
			setTimeout(function (){
				
			}, 1000);
			return str;
		}
	}
	function fontW(index){
		for(var i = 0; i < menuL.children.length; i++){
			menuL.children[i].children[0].style.fontSize = '14px';
		}
		menuL.children[index].children[0].style.fontSize = '18px';
	}
	function addclass(num){
		var navas = list[0].getElementsByTagName('a');
		for(var i = 0; i < navas.length; i++){
			navas[i].className = '';
		}
		navas[num].className = 'navactive';
	}
	for(var i = 0; i < squareaddtext.length; i++){
		squareaddtext[i].index = i;
		squareaddtext[i].onclick = function (){
			var iTop = window.pageYOffset;
			var peoplebox = $('.peoplebox')[0];
			peoplebox.style.display = 'block';
			textsqmask.style.display = 'block';
			peoplebox.style.top = iTop + 240+ 'px';
			textsqmask.style.top = iTop + 'px';
			peoplebox.style.zIndex = 20;
			peoplebox.innerHTML = peoCreat(this.index);
			var squarejiantext = $('.squarejiantext')[0];
			squarejiantext.onclick = function (){
				peoplebox.style.display = 'none';
				textsqmask.style.display = 'none';
			}
		};
	}
	/****************全屏滚动开始*************************/ 
	scrollT();
	function scrollT(){
		var iHeight = document.documentElement.clientHeight;
		arr2 = [
			iH.children[0].scrollHeight+iH.children[1].scrollHeight,
			iH.children[2].scrollHeight,
			iH.children[3].scrollHeight,
			iH.children[4].scrollHeight+iH.children[1].scrollHeight,
			iH.children[6].scrollHeight+iH.children[1].scrollHeight,
			iH.children[8].scrollHeight,
			iH.children[9].scrollHeight+iH.children[1].scrollHeight
		];
		/***************侧边导航点击左边框效果**************/ 
		for(var i = 0 ; i < as.length; i++){
			as[i].index = i;
			as[i].onclick = function (){
				clearA();
				aHover(this.index);
			};
		}
		function aHover(index){
			clearA();
			as[index].style.borderLeftColor = '#fff';
		}
		function clearA(){
			for(var i = 0; i < as.length; i++){
				as[i].style.borderLeftColor = 'transparent';
			}
		}
		var timer = 0;
		/*********************左侧导航每一项的点击事件start**********************************/ 
		for(var i= 0; i < as.length; i++){
			as[i].index = i+1;
			as[i].onclick = function (){
				// alert(flag)
				if(flag){
					flag = false;
					clearInterval(timer);
					autoH();
					if(this.index > num){
						num = this.index
						if(num > arr2.length){
							num = arr2.length;
							return;
							settime(scrollH(num),scrollH(num));
						}else {
							settime(scrollH(num-1),scrollH(num));
						}
					}else if(this.index < num){
						num = this.index
						if(num <= 0){
							num = 0;
							return;
							settime(scrollH(num+1),-40);
						}else {
							settime(scrollH(num+1),scrollH(num));
						}
					}else {
						return;
					}
					movetxt(num);
					tagColor(num);
					fontW(num);
					setTimeout(function (){
						flag = true;
					}, 2000);
				}else {
					return;
				}
				window.localStorage.setItem('nub',num);
			};
		}
		/*********************左侧导航每一项的点击事件 end**********************************/
		squarebtnwrap.onclick = function (){
			if(flag){
				flag = false;
				clearInterval(timer);
				autoH();
				num = 1;
				settime(scrollH(num-1),scrollH(num));
				tagColor(num);
				movetxt(num);
				setTimeout(function (){
					flag = true;
				}, 2000);
			}else {
				return;
			}
			window.localStorage.setItem('nub',num);
		};

		/*********************左侧导航向上按钮**********************************/
		squareLt.onclick = ltFn;
		function ltFn(){
			if(flag){
				flag = false;
				num++;
				clearInterval(timer);
				autoH();
				if(num > arr2.length){
					num = arr2.length;
					settime(scrollH(num),scrollH(num));
				}else {
					settime(scrollH(num-1),scrollH(num));
				}
				tagColor(num);
				// console.log(num)
				movetxt(num);
				setTimeout(function (){
					flag = true;
				}, 1500);

				fontW(num);
			}else {
				return;
			}
			window.localStorage.setItem('nub',num);
		};
		/*********************左侧导航向下按钮**********************************/
		squareGt.onclick = gtFn;
		function gtFn(){
			if(flag){
				flag = false;
				console.log(123)
				num--;
				clearInterval(timer);
				autoH();
				if(num <= 0){
					num = 0;
					settime(scrollH(num+1),-40);
					
				}else {
					settime(scrollH(num+1),scrollH(num));
				}
				tagColor(num);
				movetxt(num);
				setTimeout(function (){
					flag = true;
				}, 1500);
				fontW(num);
			}else {
				return;
			}
			window.localStorage.setItem('nub',num);
		}
		MTouch(".row").swipeDown(function (x,y){
			if(onoff2){
				onoff2 = false;
				gtFn();
				setTimeout(function (){
					onoff2 = true;
				}, 800);
			}else {
				return;
			}
			console.log(x,y)
		})
		MTouch(".row").swipeUp(function (ev){
			if(onoff2){
				onoff2 = false;
				ltFn();
				setTimeout(function (){
					onoff2 = true;
				}, 800);
			}else {
				return;
			}
		})
		addWhell(window,function (down){
			if(down){
				gtFn();
			}else {
				ltFn();
			}
		});
		for(var i = 0; i < menuL.children.length; i++){
			menuL.children[i].index = i;
			menuL.children[i].onclick = function (){
				startMove(square2.parentNode,'height',400,0,'linear');
				startMove(square2.parentNode.children[0],'height',400,0,'linear');
				if(flag){
					flag = false;
					clearInterval(timer);
					autoH();
					num = this.index;
					settime(scrollH(num-1),scrollH(num));
					tagColor(num);
					movetxt(num);
					setTimeout(function (){
						flag = true;
					}, 2000);
				}else {
					return;
				}
				window.localStorage.setItem('nub',num);
		};
	}
	};
	/*********************全屏滚动的动画**********************************/
	function settime(star,end){
			if(star < end){
				timer = setInterval(function (){
					window.scrollTo(0, star);
					star+= 10;
					if(star >= end){
						star = end;
						clearInterval(timer);
					}
				}, 8);  
			}else if(star > end){
				timer = setInterval(function (){
					window.scrollTo(0,star);
					star -= 10;
					if(star <= end){
						star = end;
						clearInterval(timer);
					}
				}, 8);
			}

	}
	/*********************左侧导航控制全屏滚动的距离**********************************/
	function scrollH(num){
		var val = 0;
		for(var i = 0; i< num; i++){
			val += arr2[i];
		}
		val += 10;

		return val;
	}
	/*********************左侧导航每一项添加变色**********************************/
	function tagColor(index){
		index = index-1;
		if(index >= 0){
			for(var i= 0; i < as.length;i++){
				as[i].style.color = '#838383';
			}
			as[index].style.color = '#fff';
		}
	}
	/*********************网页中每一屏的内容动画**********************************/
	function movetxt(now){
			switch(now){
				case 0:
				bannerFn2(bana1[0],bana2[0],bana3[0],bana4[0]);
				textMove2(boxtext[0],-115);
				break;
				case 1 :
				bannerFn(bana1[0],bana2[0],bana3[0],bana4[0]);
				textMove2(boxtext[1],-80);
				setTimeout(function (){
					textMove(boxtext[0],-50);
				}, 700);
				break;
				case 2:
				bannerFn2(bana1[0],bana2[0],bana3[0],bana4[0]);
				textMove2(boxtext[0],-115);
				textMove2(boxtext3,0);
				setTimeout(function (){
					textMove(boxtext[1],0);
				}, 900);
				break;
				case 3:
				textMove2(boxtext[1],-80);
				bannerFn2(bana1[1],bana2[1],bana3[1],bana4[1]);
				textMove(boxtext4,-115);
				setTimeout(function (){
					textMove(boxtext3,0);
				}, 900);
				break;
				case 4:
					textMove2(boxtext3,0);
					widthMove2(right1,left1);
					bannerFn2(bana1[2],bana2[2],bana3[2],bana4[2]);
					bannerFn(bana1[1],bana2[1],bana3[1],bana4[1]);
					setTimeout(function (){
						textMove(boxtext4,0);
					}, 900);
				break;
				case 5:
					bannerFn2(bana1[1],bana2[1],bana3[1],bana4[1]);
					textMove(boxtext4,-115);
					widthMove2(left2,right2);
					bannerFn(bana1[2],bana2[2],bana3[2],bana4[2]);
					setTimeout(function (){
						widthMove(right1,left1);
					}, 900);
				break;
				case 6:
					widthMove2(right1,left1);
					bannerFn2(bana1[2],bana2[2],bana3[2],bana4[2]);
					bannerFn2(bana1[3],bana2[3],bana3[3],bana4[3]);
					setTimeout(function (){
						widthMove(left2,right2);
					}, 700);
				break;
				case 7:
					widthMove2(left2,right2);
					bannerFn(bana1[3],bana2[3],bana3[3],bana4[3]);
				break;
				default:
				break;

			}
	}
	/****************全屏滚动结束*************************/ 
	/****************改变宽度动画1*************************/ 
	function widthMove(left,right){
		left.style.width = 60+'%';
		left.style.transition = 1.2 +'s width, backOut';
		right.style.width = 40+'%';
		right.style.transition = 1.2+'s width, backOut';
	}
	/****************改变宽度动画2*************************/ 
	function widthMove2(left,right){
		left.style.width = 40+'%';
		left.style.transition = 1.2 +'s width, backOut';
		right.style.width = 60+'%';
		right.style.transition = 1.2+'s width, backOut';
	}
	/****************内容块动画1*************************/ 
	function textMove(btm,num){
		btm.style.bottom = num +'px';
		btm.style.opacity = 1;
		btm.style.transition = 1+'s';
	}
	/****************内容块动画2*************************/ 
	function textMove2(btm,num){
		btm.style.bottom = num +'px';
		btm.style.opacity = 0;
		btm.style.transition = 1+'s';
	}





	/*********************点击人后出现的人物介绍的数据渲染**********************************/
	function peoCreat(num){
		var str = '';
		str += '<h3>'+peoData[num].h3+'</h3>';
		str += '<div class="imgwrap2">';
		str += '	<img src="img/'+peoData[num].img+'" alt="">';
		str += '</div>';
		str += '<p class="peopletext">';
		str += peoData[num].p;
		str += '</p>';
		str += '<div class="squarejian"></div>';
		str += '<span class="squarejiantext">'+peoData[num].txt+'</span>';
		return str;
	}
	/*********************鼠标滚动函数**********************************/
	function addWhell(obj,fun){
		var navt = window.navigator.userAgent.toLowerCase().indexOf('firefox');
		// 先判断是不是Firefox浏览器
		if(navt != -1){
			obj.addEventListener('DOMMouseScroll', scrollFn);
		}else {
			obj.addEventListener('mousewheel', scrollFn);
		}
		// 在函数中判断是ev.wheelDelta||ev.detail,然后统一方向down = true(向上)，down = false(向下)
		function scrollFn(ev){
			var down = true;
			if(ev.wheelDelta){
				down = ev.wheelDelta > 0? true: false;
			}else {
				down = ev.detail < 0 ? true: false;
			}
			// 判断是否有函数传入，有就走下面这条，没有就不走；
			typeof(fun) == 'function' && fun(down);
			ev.preventDefault();
		}
	}
	/*********************动画滚动的方式*********************************/ 
	var Tween = {
		linear: function (t, b, c, d){
			return c*t/d + b;
		},
		easeIn: function(t, b, c, d){
			return c*(t/=d)*t + b;
		},
		easeOut: function(t, b, c, d){
			return -c *(t/=d)*(t-2) + b;
		},
		easeBoth: function(t, b, c, d){
			if ((t/=d/2) < 1) {
				return c/2*t*t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		easeInStrong: function(t, b, c, d){
			return c*(t/=d)*t*t*t + b;
		},
		easeOutStrong: function(t, b, c, d){
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeBothStrong: function(t, b, c, d){
			if ((t/=d/2) < 1) {
				return c/2*t*t*t*t + b;
			}
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		},
		elasticIn: function(t, b, c, d, a, p){
			if (t === 0) { 
				return b; 
			}
			if ( (t /= d) == 1 ) {
				return b+c; 
			}
			if (!p) {
				p=d*0.3; 
			}
			if (!a || a < Math.abs(c)) {
				a = c; 
				var s = p/4;
			} else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		elasticOut: function(t, b, c, d, a, p){
			if (t === 0) {
				return b;
			}
			if ( (t /= d) == 1 ) {
				return b+c;
			}
			if (!p) {
				p=d*0.3;
			}
			if (!a || a < Math.abs(c)) {
				a = c;
				var s = p / 4;
			} else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},    
		elasticBoth: function(t, b, c, d, a, p){
			if (t === 0) {
				return b;
			}
			if ( (t /= d/2) == 2 ) {
				return b+c;
			}
			if (!p) {
				p = d*(0.3*1.5);
			}
			if ( !a || a < Math.abs(c) ) {
				a = c; 
				var s = p/4;
			}
			else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			if (t < 1) {
				return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
						Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			}
			return a*Math.pow(2,-10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
		},
		backIn: function(t, b, c, d, s){
			if (typeof s == 'undefined') {
			   s = 1.70158;
			}
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		backOut: function(t, b, c, d, s){
			if (typeof s == 'undefined') {
				// s = 1.70158;  //回缩的距离
				s= .8;
			}
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		}, 
		backBoth: function(t, b, c, d, s){
			if (typeof s == 'undefined') {
				s = 1.70158; 
			}
			if ((t /= d/2 ) < 1) {
				return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			}
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		bounceIn: function(t, b, c, d){
			return c - Tween['bounceOut'](d-t, 0, c, d) + b;
		},       
		bounceOut: function(t, b, c, d){
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
			}
			return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
		},      
		bounceBoth: function(t, b, c, d){
			if (t < d/2) {
				return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
			}
			return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
		}
	};
	//callBack 回调函数，动画结束之后，执行的函数
	/*********************滚动的动画*********************************/ 
	function startMove(obj,attr,time,target,type,callBack,ConBack){
		var t = 0;
		var b =  css(obj,attr);
		var c =  target - b;
		var d = time / 20;
		 clearInterval(obj.timer);
		 obj.timer = setInterval(
		 	function (){
				t++;
				var nub = Tween[type](t,b,c,d);
				if(attr == "opacity"){
					obj.style[attr] = nub/100;
					obj.style.filter ="alpha(opacity="+ nub +")";
				} else {
					obj.style[attr] = nub + "px";
				}
				ConBack&&ConBack();
				if(t >= d){
					clearInterval(obj.timer);
				
					callBack&&callBack();
				}
			},
			20
		 );
	}
	function css(obj,attr){
		var nub = 0;
		if(obj.currentStyle){
			nub = parseFloat(obj.currentStyle[attr]);
		} else { 
			nub = parseFloat(getComputedStyle(obj)[attr]);
		}
		if(attr == "opacity"){
			return Math.round(nub*100);
		}
		return nub;
	}
};