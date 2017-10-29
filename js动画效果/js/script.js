window.onload=function(){

}

// window.onload=function(){
// 	startMove();
// }
// function startMove(){
// 	setInterval(function(){
// 		var oDiv=document.getElementById('div1');
// 		oDiv.style.width=parseInt(getStyle(oDiv,'border'))-1+'px';
// 	},100)
// }
// function getStyle(obj,attr){
// 	if(obj.currentStyle)
// 	{
// 		return obj.currentStyle[attr];
// 	}
// 	else{
// 		return getComputedStyle(obj,false)[attr];
// 	}
// }


//透明度变化加缓冲
// window.onload=function(){
// 	var aLi=document.getElementsByTagName('li');
// 	for(var i=0;i<aLi.length;i++){
// 		aLi[i].timer=null;
// 		aLi[i].alpha=30;
// 		aLi[i].onmouseover=function(){
// 			startMove(this,400);
// 			startMove2(this,100);
// 		}
// 		aLi[i].onmouseout=function(){
// 			startMove(this,200);
// 			startMove2(this,30);
// 		}
		
// 	}

// 	function startMove(obj,iTarget){
// 		clearInterval(obj.timer);
		
// 		obj.timer=setInterval(function()
// 		{
// 			var a=parseInt(getStyle(obj,'width'));
// 			var speed=(iTarget-a)/8;
			
// 			speed=speed>0?Math.ceil(speed):Math.floor(speed);

// 			if(a==iTarget)
// 			{
// 				clearInterval(obj.timer);
// 			}
// 			else{
// 				obj.style.width=a+speed+'px';
// 			}
// 		},30)
// 	}

// 	function startMove2(obj2,iTarget2){
// 		clearInterval(obj2.timer2);

// 		obj2.timer2=setInterval(function()
// 		{
// 			var speed=0;
// 			if(obj2.alpha>iTarget2)
// 			{
// 				speed=-10;
// 			}
// 			else{
// 				speed=10;
// 			}
// 			if(obj2.alpha==iTarget2)
// 			{
// 				clearInterval(obj2.timer2);

// 			}
// 			else
// 			{
// 				obj2.alpha+=speed;
// 				obj2.style.filter='obj2.alpha(opacity:'+obj2.alpha+')';
// 				obj2.style.opacity=obj2.alpha/100;
// 			}

// 		},100)
// 	}

// 	function getStyle(obj,attr){
// 	if(obj.currentStyle)
// 	{
// 		return obj.currentStyle[attr];
// 	}
// 	else{
// 		return getComputedStyle(obj,false)[attr];
// 	}
// }

// }
// 	