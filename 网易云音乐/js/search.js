$(function (){
	var search = $('#searchlogo');
	search.on('focus',function (){
		search.val('');
		search.css('color','#000');
	})
	search.on('keyup',function (ev){
		if(ev.which == '13'){
			var str = 'http://music.163.com/#/search/m/?s='+search.val()+'&type=1002';
			window.open(str);
		}
	})


})