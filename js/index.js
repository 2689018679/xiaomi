window.onload=function (){
	let cart1=document.getElementsByClassName("cart1");
    let cart=document.getElementsByClassName("cart");

    cart[0].onmouseenter=function () {
		cart1[0].style.height="97px";
		cart1[0].style.boxShadow="0 15px 30px rgba(0, 0, 0, .1)";
        cart[0].style.background="#fff";
    }
    cart[0].onmouseleave=function () {
        cart1[0].style.height="0";
        cart1[0].style.boxShadow="none";
        cart[0].style.background="#424242";
    }

    let banner_left=document.getElementsByClassName("banner_left")[0];
    let lis=banner_left.getElementsByTagName("li");
    let banner_box=document.getElementsByClassName("banner_box");
    for(let i=0;i<lis.length;i++){
    	lis[i].onmouseenter=function () {
			banner_box[i].style.display="block";
        }
        lis[i].onmouseleave=function () {
            banner_box[i].style.display="none";
        }
	}

    ////////////////选项卡///////////////////////
    
    function xxkbox(electricalTop,electrical_bottom){
        let right=electricalTop.getElementsByClassName("right")[0];
        let a=right.getElementsByTagName("a");
        let xxkbox=electrical_bottom.getElementsByClassName("xxkbox");

        for(let i=0;i<a.length;i++){
            a[i].onmouseenter=function(){
                for(let j=0;j<xxkbox.length;j++){
                    xxkbox[j].style.zIndex="5";
                }
                xxkbox[i].style.zIndex="10";
            }
        }
    }
    let electricalTop=document.getElementsByClassName("electrical_top")[1];
    let electrical_bottom=document.getElementsByClassName("electrical_bottom")[1];
    xxkbox(electricalTop,electrical_bottom);
    let electricalTop1=document.getElementsByClassName("electrical_top")[2];
    let electrical_bottom1=document.getElementsByClassName("electrical_bottom")[2];
    xxkbox(electricalTop1,electrical_bottom1);

    ////////////////////////轮播图 //////////////////////////////
    let banner=document.getElementsByClassName("banner")[0];
    let whole=banner.getElementsByClassName("whole")[0];
    let lis1=whole.getElementsByTagName("li");

    let spot=banner.getElementsByClassName("spot")[0];
    let lis2=spot.getElementsByTagName("li");

    let btn_left=banner.getElementsByClassName("btn1")[0];
    let btn_right=banner.getElementsByClassName("btn2")[0];

    console.log(lis2);

    let num=0;
    let t=setInterval(move,1000);

    banner.onmouseenter=function(){
        clearInterval(t);
    }
    banner.onmouseleave=function(){
        t=setInterval(move,1000);
    }

    btn_left.onclick=function(){
        move1();
    }
    btn_right.onclick=function(){
        move();
    }

    function move(){
        num++;
        if(num==lis1.length){
            num=0;
        }
        for(let j=0;j<lis1.length;j++){
            lis1[j].style.zIndex="5";
            lis2[j].className="";
        }
        lis1[num].style.zIndex="10";
        lis2[num].className="hot";
    }
    function move1(){
        num--;
        if(num<0){
            num=lis1.length-1;
        }
        for(let j=0;j<lis1.length;j++){
            lis1[j].style.zIndex="5";
            lis2[j].className="";
        }
        lis1[num].style.zIndex="10";
        lis2[num].className="hot";
    }
    for(let i=0;i<lis2.length;i++){
        lis2[i].onclick=function(){
            for(let j=0;j<lis1.length;j++){
                lis1[j].style.zIndex="5";
                lis2[j].className="";
            }
            lis1[i].style.zIndex="10";
            lis2[i].className="hot";
            num=i;
        }
    }

    ////////////////////////双下标轮播图/////////////////////////////
}