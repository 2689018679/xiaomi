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
    let electricalTop2=document.getElementsByClassName("electrical_top")[3];
    let electrical_bottom2=document.getElementsByClassName("electrical_bottom")[3];
    xxkbox(electricalTop2,electrical_bottom2);
    let electricalTop3=document.getElementsByClassName("electrical_top")[4];
    let electrical_bottom3=document.getElementsByClassName("electrical_bottom")[4];
    xxkbox(electricalTop3,electrical_bottom3);
    let electricalTop4=document.getElementsByClassName("electrical_top")[5];
    let electrical_bottom4=document.getElementsByClassName("electrical_bottom")[5];
    xxkbox(electricalTop4,electrical_bottom4);

    ////////////////////////轮播图 //////////////////////////////
    let banner=document.getElementsByClassName("banner")[0];
    let whole=banner.getElementsByClassName("whole")[0];
    let lis1=whole.getElementsByTagName("li");

    let spot=banner.getElementsByClassName("spot")[0];
    let lis2=spot.getElementsByTagName("li");

    let btn_left=banner.getElementsByClassName("btn1")[0];
    let btn_right=banner.getElementsByClassName("btn2")[0];

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

    function lbt(banner,lis1,spots,btn,btnr,width){
        let next=0;
        let now=0;
        let flag=true;
        let t=setInterval(move,1000);
        function move() {
            next++;
            if(next==lis1.length){
                next=0;
            }
            lis1[next].style.left=width+"px";
            animate (lis1[now],{left:-width});
            animate (lis1[next],{left:0},function () {
                flag=true;
            });
            for(let i=0;i<spots.length;i++){
                spots[i].className="";
            }
            spots[next].className="hot";
            now=next;
        }
        function move1() {
            next--;
            if(next<0){
                next=lis1.length-1;
            }
            lis1[next].style.left=-width+"px";
            animate (lis1[now],{left:width});
            animate (lis1[next],{left:0},function () {
                flag=true;
            });
            for(let i=0;i<spots.length;i++){
                spots[i].className="";
            }
            spots[next].className="hot";
            now=next;
        }
        banner.onmouseenter=function () {
            clearInterval(t);
        }
        banner.onmouseleave=function () {
            t=setInterval(move,1000);
        }
        btn.onclick=function () {
            if(flag==false){
                return;
            }
            move1();
            flag=false;
        }
        btnr.onclick=function () {
            if(flag==false){
                return;
            }
            flag=false;
            move();
        }
        /////////////小点点击///////////////
        for(let i=0;i<spots.length;i++){
            spots[i].onclick=function () {
                if (now == i) {
                    return;
                } else if (now < i) {
                    lis1[next].style.left = width+"px";
                    animate(lis1[now], {left: -width});
                    animate(lis1[i], {left: 0});
                    for(let i=0;i<spots.length;i++){
                        spots[i].className="";
                    }
                    spots[i].className = "hot";
                } else {
                    lis1[next].style.left = -width+"px";
                    animate(lis1[now], {left: width});
                    animate(lis1[i], {left: 0});
                    for(let i=0;i<spots.length;i++){
                        spots[i].className="";
                    }
                    spots[i].className = "hot";
                }
                now = next = i;
            }
        }
    }



    function lbt1(banner,lis1,spots,btn,btnr,width){
        let next=0;
        let now=0;
        let flag=true;
        function move() {
            next++;
            if(next==lis1.length){
                next=0;
            }
            lis1[next].style.left=width+"px";
            animate (lis1[now],{left:-width});
            animate (lis1[next],{left:0},function () {
                flag=true;
            });
            for(let i=0;i<spots.length;i++){
                spots[i].className="";
            }
            spots[next].className="hot";
            now=next;
        }
        function move1() {
            next--;
            if(next<0){
                next=lis1.length-1;
            }
            lis1[next].style.left=-width+"px";
            animate (lis1[now],{left:width});
            animate (lis1[next],{left:0},function () {
                flag=true;
            });
            for(let i=0;i<spots.length;i++){
                spots[i].className="";
            }
            spots[next].className="hot";
            now=next;
        }
        btn.onclick=function () {
            if(flag==false){
                return;
            }
            if(next==0){
                return;
            }
            move1();
            flag=false;
        }
        btnr.onclick=function () {
            if(flag==false){
                return;
            }
            if(next==lis1.length-1){
                return;
            }
            flag=false;
            move();
        }
        /////////////小点点击///////////////
        for(let i=0;i<spots.length;i++){
            spots[i].onclick=function () {
                if (now == i) {
                    return;
                } else if (now < i) {

                    lis1[next].style.left = width+"px";
                    animate(lis1[now], {left: -width});
                    animate(lis1[i], {left: 0});
                    spots[now].className="";
                    spots[i].className = "hot";
                } else {
                    lis1[next].style.left = -width+"px";
                    animate(lis1[now], {left: width});
                    animate(lis1[i], {left: 0});
                    spots[now].className="";
                    spots[i].className = "hot";
                }
                now = next = i;
            }
        }
    }


    //
    // let banner=document.querySelector(".banner");
    // let lis1=document.querySelectorAll(".banner .whole li");
    // let spots=document.querySelectorAll(".spot li");
    //
    // let btn=document.querySelector(".btn1");
    // let btnr=document.querySelector(".btn2");
    // let width=parseInt(getComputedStyle(banner,null).width);
    // console.log(width);
    // lbt(banner,lis1,spots,btn,btnr,width);


    let content=document.querySelector(".content");
    let content_bottom=document.querySelectorAll(".content .content_bottom li");

    let contentBox=content_bottom[0].querySelectorAll(".content_bottom li .contentBox");
    let spots1=content_bottom[0].querySelectorAll(".spot span");
    let btnl1=content_bottom[0].querySelector(".paging1");
    let btnr1=content_bottom[0].querySelector(".paging2");
    console.log(btnl1,btnr1);
    let width1=parseInt(getComputedStyle(content,null).width);
    lbt1(content,contentBox,spots1,btnl1,btnr1,width1);

    let contentBox2=content_bottom[1].querySelectorAll(".content_bottom li .contentBox");
    let spots2=content_bottom[1].querySelectorAll(".spot span");
    // console.log(content2);
    let btnl2=content_bottom[1].querySelector(".paging1");
    let btnr2=content_bottom[1].querySelector(".paging2");
    lbt1(content,contentBox2,spots2,btnl2,btnr2,width1);
    //
    let contentBox3=content_bottom[2].querySelectorAll(".content_bottom li .contentBox");
    let spots3=content_bottom[2].querySelectorAll(".spot span");
    // console.log(content2);
    let btnl3=content_bottom[2].querySelector(".paging1");
    let btnr3=content_bottom[2].querySelector(".paging2");
    lbt1(content,contentBox3,spots3,btnl3,btnr3,width1);

    let contentBox4=content_bottom[3].querySelectorAll(".content_bottom li .contentBox");
    let spots4=content_bottom[3].querySelectorAll(".spot span");
    // console.log(content2);
    let btnl4=content_bottom[3].querySelector(".paging1");
    let btnr4=content_bottom[3].querySelector(".paging2");
    lbt1(content,contentBox4,spots4,btnl4,btnr4,width1);



}