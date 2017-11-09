window.onload=function(){
  var curIndex=0;

    function next(){

      if(curIndex==6)
        return;
      ++curIndex;
      var curPage1=document.getElementById("page"+curIndex);
      curPage1.style.transform="rotateY(-360deg)";
      
      var nextPage=document.getElementById("page"+curIndex);
      nextPage.style.transform="rotateY(0deg)";

    }

    function prev(){

      if(curIndex==1)
      return;

      var curPage2=document.getElementById("page"+curIndex);
      curPage2.style.transform="rotateY(270deg)";
      curIndex--;
      var prevPage=document.getElementById("page"+curIndex);
      prevPage.style.transform="rotateY(0deg)";
    }

  };
    