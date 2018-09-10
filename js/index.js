$(function () {

    ////////////////////购物车///////////////////////

    $(".cart").mouseenter(function () {
        $(".cart1").css({"height":"97px","boxShadow":"0 15px 30px rgba(0, 0, 0, .1)"});
        $(".cart").css("background","#fff");
    })
    $(".cart1").mouseleave(function () {
        $(".cart1").css({"height":"0","boxShadow":"none"});
        $(".cart").css("background","#424242");
    })

    ////////////////////导航////////////////////////

    $(".nav_top li").hover(function () {
        $(".nav_topBox").eq($(this).index()).css("height","230px")
    },function () {
        $(".nav_topBox").eq($(this).index()).css("height","0")
    })

    ////////////////////侧导航///////////////////////

    $(".banner_left li").hover(function () {
        $(".banner_box").eq($(this).index()).css("display","block")
    },function () {
        $(".banner_box").eq($(this).index()).css("display","none")
    })

    ////////////////选项卡///////////////////////

    $(".electricalTop>.right>a").mouseenter(function () {
        console.log($(this));
        $(".electrical_bottom>.xxkbox").css("z-index","5").eq($(this).index()).css("z-index","10")
    })

    ///////////////轮播图/////////////////////

    let num=0;
    let t=setInterval(move,1000);
    
    $(".banner").hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(move,1000);
    })

    $(".btn1").click(function () {
        move("pro")
    })
    $(".btn2").click(function () {
        move("next")
    })

    function move(type="next"){
        if (type=="next"){
            num++;
            if(num>=$(".banner .whole li").length){
                num=0;
            }
        }else{
            num--
            if(num<0){
                num=$(".banner .whole li").length-1;
            }
        }
        $(".banner .whole li").css("z-index","5").eq(num).css("z-index","10");
        $(".banner .spot li").removeClass("hot").eq(num).addClass("hot");
    }
    $(".banner .spot li").click(function () {
        $(".banner .whole li").css("z-index","5").eq($(this).index()).css("z-index","10");
        $(".banner .spot li").removeClass("hot").eq($(this).index()).addClass("hot");
        num=$(this).index()
    })

    




    // function xxkbox(electricalTop,electrical_bottom){
    //     let a=electricalTop.querySelectorAll(".right a");
    //     let xxkbox=electrical_bottom.querySelector(".xxkbox");
    //     //
    //     for(let i=0;i<a.length;i++){
    //         a[i].onmouseenter=function(){
    //             for(let j=0;j<xxkbox.length;j++){
    //                 xxkbox[j].style.zIndex="5";
    //             }
    //                 xxkbox[i].style.zIndex="10";
    //         }
    //     }
    // }
    //
    //
    // let electricalTop=document.getElementsByClassName("electrical_top")[1];
    // let electrical_bottom=document.getElementsByClassName("electrical_bottom")[1];
    // xxkbox(electricalTop,electrical_bottom);
    // let electricalTop1=document.getElementsByClassName("electrical_top")[2];
    // let electrical_bottom1=document.getElementsByClassName("electrical_bottom")[2];
    // xxkbox(electricalTop1,electrical_bottom1);
    // let electricalTop2=document.getElementsByClassName("electrical_top")[3];
    // let electrical_bottom2=document.getElementsByClassName("electrical_bottom")[3];
    // xxkbox(electricalTop2,electrical_bottom2);
    // let electricalTop3=document.getElementsByClassName("electrical_top")[4];
    // let electrical_bottom3=document.getElementsByClassName("electrical_bottom")[4];
    // xxkbox(electricalTop3,electrical_bottom3);
    // let electricalTop4=document.getElementsByClassName("electrical_top")[5];
    // let electrical_bottom4=document.getElementsByClassName("electrical_bottom")[5];
    // xxkbox(electricalTop4,electrical_bottom4);




    // ////////////////////////轮播图 //////////////////////////////

    // ////////////////////////双下标轮播图/////////////////////////////
    //
    // function lbt(banner,lis1,spots,btn,btnr,width){
    //     let next=0;
    //     let now=0;
    //     let flag=true;
    //     let t=setInterval(move,1000);
    //     function move() {
    //         next++;
    //         if(next==lis1.length){
    //             next=0;
    //         }
    //         lis1[next].style.left=width+"px";
    //         animate (lis1[now],{left:-width});
    //         animate (lis1[next],{left:0},function () {
    //             flag=true;
    //         });
    //         for(let i=0;i<spots.length;i++){
    //             spots[i].className="";
    //         }
    //         spots[next].className="hot";
    //         now=next;
    //     }
    //     function move1() {
    //         next--;
    //         if(next<0){
    //             next=lis1.length-1;
    //         }
    //         lis1[next].style.left=-width+"px";
    //         animate (lis1[now],{left:width});
    //         animate (lis1[next],{left:0},function () {
    //             flag=true;
    //         });
    //         for(let i=0;i<spots.length;i++){
    //             spots[i].className="";
    //         }
    //         spots[next].className="hot";
    //         now=next;
    //     }
    //     banner.onmouseenter=function () {
    //         clearInterval(t);
    //     }
    //     banner.onmouseleave=function () {
    //         t=setInterval(move,1000);
    //     }
    //     btn.onclick=function () {
    //         if(flag==false){
    //             return;
    //         }
    //         move1();
    //         flag=false;
    //     }
    //     btnr.onclick=function () {
    //         if(flag==false){
    //             return;
    //         }
    //         flag=false;
    //         move();
    //     }
    //     /////////////小点点击///////////////
    //     for(let i=0;i<spots.length;i++){
    //         spots[i].onclick=function () {
    //             if (now == i) {
    //                 return;
    //             } else if (now < i) {
    //                 lis1[next].style.left = width+"px";
    //                 animate(lis1[now], {left: -width});
    //                 animate(lis1[i], {left: 0});
    //                 for(let i=0;i<spots.length;i++){
    //                     spots[i].className="";
    //                 }
    //                 spots[i].className = "hot";
    //             } else {
    //                 lis1[next].style.left = -width+"px";
    //                 animate(lis1[now], {left: width});
    //                 animate(lis1[i], {left: 0});
    //                 for(let i=0;i<spots.length;i++){
    //                     spots[i].className="";
    //                 }
    //                 spots[i].className = "hot";
    //             }
    //             now = next = i;
    //         }
    //     }
    // }
    //
    //
    //
    // function lbt1(banner,lis1,spots,btn,btnr,width){
    //     let next=0;
    //     let now=0;
    //     let flag=true;
    //     function move() {
    //         next++;
    //         if(next==lis1.length){
    //             next=0;
    //         }
    //         lis1[next].style.left=width+"px";
    //         animate (lis1[now],{left:-width});
    //         animate (lis1[next],{left:0},function () {
    //             flag=true;
    //         });
    //         for(let i=0;i<spots.length;i++){
    //             spots[i].className="";
    //         }
    //         spots[next].className="hot";
    //         now=next;
    //     }
    //     function move1() {
    //         next--;
    //         if(next<0){
    //             next=lis1.length-1;
    //         }
    //         lis1[next].style.left=-width+"px";
    //         animate (lis1[now],{left:width});
    //         animate (lis1[next],{left:0},function () {
    //             flag=true;
    //         });
    //         for(let i=0;i<spots.length;i++){
    //             spots[i].className="";
    //         }
    //         spots[next].className="hot";
    //         now=next;
    //     }
    //     btn.onclick=function () {
    //         if(flag==false){
    //             return;
    //         }
    //         if(next==0){
    //             return;
    //         }
    //         move1();
    //         flag=false;
    //     }
    //     btnr.onclick=function () {
    //         if(flag==false){
    //             return;
    //         }
    //         if(next==lis1.length-1){
    //             return;
    //         }
    //         flag=false;
    //         move();
    //     }
    //     /////////////小点点击///////////////
    //     for(let i=0;i<spots.length;i++){
    //         spots[i].onclick=function () {
    //             if (now == i) {
    //                 return;
    //             } else if (now < i) {
    //
    //                 lis1[next].style.left = width+"px";
    //                 animate(lis1[now], {left: -width});
    //                 animate(lis1[i], {left: 0});
    //                 spots[now].className="";
    //                 spots[i].className = "hot";
    //             } else {
    //                 lis1[next].style.left = -width+"px";
    //                 animate(lis1[now], {left: width});
    //                 animate(lis1[i], {left: 0});
    //                 spots[now].className="";
    //                 spots[i].className = "hot";
    //             }
    //             now = next = i;
    //         }
    //     }
    // }
    //
    //
    // //
    // // let banner=document.querySelector(".banner");
    // // let lis1=document.querySelectorAll(".banner .whole li");
    // // let spots=document.querySelectorAll(".spot li");
    // //
    // // let btn=document.querySelector(".btn1");
    // // let btnr=document.querySelector(".btn2");
    // // let width=parseInt(getComputedStyle(banner,null).width);
    // // console.log(width);
    // // lbt(banner,lis1,spots,btn,btnr,width);
    //
    //
    // let content=document.querySelector(".content");
    // let content_bottom=document.querySelectorAll(".content .content_bottom li");
    //
    // let contentBox=content_bottom[0].querySelectorAll(".content_bottom li .contentBox");
    // let spots1=content_bottom[0].querySelectorAll(".spot span");
    // let btnl1=content_bottom[0].querySelector(".paging1");
    // let btnr1=content_bottom[0].querySelector(".paging2");
    // console.log(btnl1,btnr1);
    // let width1=parseInt(getComputedStyle(content,null).width);
    // lbt1(content,contentBox,spots1,btnl1,btnr1,width1);
    //
    // let contentBox2=content_bottom[1].querySelectorAll(".content_bottom li .contentBox");
    // let spots2=content_bottom[1].querySelectorAll(".spot span");
    // // console.log(content2);
    // let btnl2=content_bottom[1].querySelector(".paging1");
    // let btnr2=content_bottom[1].querySelector(".paging2");
    // lbt1(content,contentBox2,spots2,btnl2,btnr2,width1);
    // //
    // let contentBox3=content_bottom[2].querySelectorAll(".content_bottom li .contentBox");
    // let spots3=content_bottom[2].querySelectorAll(".spot span");
    // // console.log(content2);
    // let btnl3=content_bottom[2].querySelector(".paging1");
    // let btnr3=content_bottom[2].querySelector(".paging2");
    // lbt1(content,contentBox3,spots3,btnl3,btnr3,width1);
    //
    // let contentBox4=content_bottom[3].querySelectorAll(".content_bottom li .contentBox");
    // let spots4=content_bottom[3].querySelectorAll(".spot span");
    // // console.log(content2);
    // let btnl4=content_bottom[3].querySelector(".paging1");
    // let btnr4=content_bottom[3].querySelector(".paging2");
    // lbt1(content,contentBox4,spots4,btnl4,btnr4,width1);
    //
    // /////////////////////右侧客服////////////////////////////////////
    //
    // let btTop=document.querySelector(".bar a:last-child li");
    // let endd=document.querySelector(".end");
    // window.onscroll=function(){
    //     let gh=document.body.scrollTop||document.documentElement.scrollTop;
    //     if(gh+600>=endd.offsetTop){
    //         btTop.style.display="block";
    //     }else {
    //         btTop.style.display="none";
    //     }
    // }
    //

    //
    //
    // let purchaseBox=document.querySelector(".purchase_right ul");
    // let width2=parseInt(getComputedStyle(purchaseBox,null).width);
    // let purchasebtn=document.querySelectorAll(".purchase .right span");
    // let times=0;
    // purchasebtn[0].onclick=function(){
    //     times--;
    //     if(times==-1){
    //         times=0;
    //     }
    //     purchaseBox.style.transform="translateX("+(-width2*times)+"px)";
    // }
    // purchasebtn[1].onclick=function(){
    //     times++;
    //     if(times==4){
    //         times=3;
    //     }
    //     purchaseBox.style.transform="translateX("+(-width2*times)+"px)";
    // }
})