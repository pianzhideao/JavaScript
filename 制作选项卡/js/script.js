window.onload=function (){
	var a=document.getElementById("list");
	var b=a.getElementsByTagName("li");
	var c=document.getElementById("gedan");
	var d=c.getElementsByTagName("div");
	for(var i=0;i<b.length;i++){
		b[i].index=i;
		b[i].onmouseover=function(){
			for(var i=0;i<b.length;i++){
				b[i].className="";
			}
			this.className="active";
			for(var j=0;j<d.length;j++){
				d[j].className="geci";
			}
			d[this.index].className="show";
		}
	}
};