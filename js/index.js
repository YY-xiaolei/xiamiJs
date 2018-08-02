window.onload=function() {
    let sousuo=document.querySelector(".shousuo");
    let input=sousuo.querySelector("input");
    let fdj=sousuo.querySelector(".fdj");
    input.onclick=function(){
        input.style.borderColor="#ff6700";
        fdj.style.borderColor="#ff6700";
    }
	let piantou=document.getElementsByClassName("piantou")[0];
    let a1=piantou.getElementsByTagName("a");
    let span1=piantou.getElementsByTagName("span");
    let piantouBox=document.getElementsByClassName("piantouBox");
    for (let i=0;i<a1.length-2;i++) {
        a1[i].onmouseenter = function () {
            for (let j=0;j<piantouBox.length;j++){
                piantouBox[j].style.height="0";
                piantouBox[j].style.borderTop="";

            }
            piantouBox[i].style.height="230px";
            piantouBox[i].style.transition="all 0.5s";
            piantouBox[i].style.borderTop="1px solid rgba(0,0,0,0.5)";
            piantouBox[i].style.boxShadow= "0px 2px 10px rgba(0,0,0,0.15)";
        }
        a1[i].onmouseleave=function () {
            piantouBox[i].style.height="0";
            piantouBox[i].style.borderTop="none";
        }
    }
    let shop = document.getElementsByClassName("shop")[0];
    let shopBox = document.getElementsByClassName("shopBox")[0];
    let a = shop.getElementsByTagName("a")[0];
    shop.onmouseenter = function () {
        shopBox.style.display = "block";
        shopBox.style.height = "98px";
        shopBox.style.transition = "all 0.5s";
        shopBox.style.boxShadow = "0px 2px 10px rgba(0,0,0,0.15)";
        shop.style.background = "white"
        a.style.color = "#ff6700";
    }
    shop.onmouseleave = function () {
        shopBox.style.display = "";
        shopBox.style.height = "0px";
        shop.style.background = "";
        a.style.color = "#B0B0B0";
    }

    let Box1 = document.getElementsByClassName("Box1")[0];
    let img = Box1.getElementsByClassName("img")[0];
    let left = img.getElementsByClassName("left")[0];
    let list = left.getElementsByClassName("list");
    let listBox = left.getElementsByClassName("listBox");
    for (let i = 0; i < list.length; i++) {
        list[i].onmouseenter = function () {
            for (let j = 0; j < list.length; j++) {
                listBox[j].style.display = "none";
            }
            listBox[i].style.display = "block";
        }
        list[i].onmouseleave = function () {
            listBox[i].style.display = "";
        }
    }


    function xxf(floor) {
        let neirong = floor.getElementsByClassName("neirong")[0];
        let right = neirong.getElementsByClassName("right");
        let titleRight = floor.getElementsByClassName("right")[0];
        let span = titleRight.getElementsByTagName("span");
        for (let i = 0; i < span.length; i++) {
            span[i].onmouseenter = function () {
                for (let j = 0; j < span.length; j++) {
                    right[j].style.display = "";
                    span[j].style.color = "";
                    span[j].style.borderBottom = "";
                }
                right[i].style.display = "block";
                span[i].style.color = "#ff6700";
                span[i].style.borderBottom = "2px solid #ff6700"
            }
        }
    }

        let jiadian = document.getElementsByClassName("jiadian")[0];
        xxf(jiadian);
        let zhineng = document.getElementsByClassName("zhineng")[0];
        xxf(zhineng);
        let dapei=document.getElementsByClassName("dapei")[0];
        xxf(dapei);
        let peijian=document.getElementsByClassName("peijian")[0];
        xxf(peijian);
        let zhoubian=document.getElementsByClassName("zhoubian")[0];
        xxf(zhoubian);




//小米闪购
        let forwordright=document.querySelector(".forwordright");
        let backleft=document.querySelector(".backleft");
        let bottomright=document.querySelectorAll(".shangou .bottom .rightson")[0];
        let kuan=parseInt(getComputedStyle(bottomright,null).width)/2;
        let times=0;
        forwordright.onclick=function(){
            times++;
            if(times==2){
                times=1;
            }
            bottomright.style.transform='translateX('+'-'+kuan*times+'px)';
            // console.log(bottomright.style.transform='translateX(${-kuan*times}px)');
        }
        backleft.onclick=function(){
            times--;
            if(times<0){
                times=0;
            }
            bottomright.style.transform='translateX('+'-'+kuan*times+'px)';
            // console.log(bottomright.style.transform='translateX('+'-'+kuan*times+'px)');
        }

//内容
        let aL=img.getElementsByTagName("a");
        let back=img.getElementsByClassName("lbox")[0];
        let forword=img.getElementsByClassName("rbox")[0];
        let btns=img.getElementsByClassName("btns")[0];
        let son=btns.getElementsByClassName("son");
        let width=parseInt(getComputedStyle(aL[0],null).width);

        
        let boxs0=document.querySelectorAll("#nr .bottom .box")[0];
        let sxb0=boxs0.getElementsByClassName("sxb");
        let left2=boxs0.querySelectorAll("#nr .bottom .left")[0];
        let right2=boxs0.querySelectorAll("#nr .right")[0];
        let li=boxs0.querySelectorAll("#nr li");
        let width2=parseInt(getComputedStyle(sxb0[0],null).width);
          
       
        let boxs1=document.querySelectorAll("#nr .bottom .box")[1];
        let sxb1=boxs1.getElementsByClassName("sxb");
        let left201=boxs1.querySelectorAll("#nr .bottom .left")[0];
        let right201=boxs1.querySelectorAll("#nr .right")[0];
        let li1=boxs1.querySelectorAll("#nr li");
        let width201=parseInt(getComputedStyle(sxb1[0],null).width);


        let boxs2=document.querySelectorAll("#nr .bottom .box")[2];
        let sxb2=boxs2.getElementsByClassName("sxb");
        let left202=boxs2.querySelectorAll("#nr .bottom .left")[0];
        let right202=boxs2.querySelectorAll("#nr .right")[0];
        let li2=boxs2.querySelectorAll("#nr li");
        let width202=parseInt(getComputedStyle(sxb2[0],null).width);

        let boxs3=document.querySelectorAll("#nr .bottom .box")[3];
        let sxb3=boxs3.getElementsByClassName("sxb");
        let left203=boxs3.querySelectorAll("#nr .bottom .left")[0];
        let right203=boxs3.querySelectorAll("#nr .right")[0];
        let li3=boxs3.querySelectorAll("#nr li");
        let width203=parseInt(getComputedStyle(sxb3[0],null).width);
        let hot=document.querySelector(".hot");

        sxblb(sxb3,li3,left203,right203,width203,boxs3);
        sxblb(sxb2,li2,left202,right202,width202,boxs2);
        sxblb(sxb1,li1,left201,right201,width201,boxs1);
        sxblb(sxb0,li,left2,right2,width2,boxs0);
        // sxblb(aL,son,back,forword,width,Box1);
        function sxblb(sxb,li,left2,right2,width2,boxs){
        let now=0;
        let next=0;
        let flag=true;
        let time=setInterval(move,2000);
        // clearInterval(time);
        for(let j=0;j<li.length;j++){
            li[j].onclick=function(){
             for(let xx=0;xx<li.length;xx++){
            // li[xx].style.background="#8F8D88"; 
            li[xx].style.background="#B0B0B0"; 
            li[xx].style.borderColor="white"
            }
            // li[j].style.background="#F5F4EE"; 
             li[j].style.background="white";
             li[j].style.borderColor="#ff6700"
            if(j>now){
               sxb[j].style.left=width2+"px";
               animate(sxb[now],{left:-width2});
               animate(sxb[j],{left:0}); 

            }
            if(j<now){
                
                sxb[j].style.left=-width2+"px";
                animate(sxb[now],{left:width2});
                animate(sxb[j],{left:0}); 
            }
            if(j==now){
                return;
                  
            }
            next=now=j;   
            }
            
        }
        boxs.onmouseenter=function () {
            clearInterval(time);
        }
        boxs.onmouseleave=function () {
            time=setInterval(move,2000);
            // clearInterval(time);
        }
        right2.onclick=function(){
           if(flag==false){
            return;
           }    
           if (now==sxb.length-1) {
            return;
           }            
            move();  
            flag=false;          
        }
        left2.onclick=function(){
             if(flag==false){
            return;
           }  
           if (now==0) {
            return;
           }       
            move1();  
            flag=false;          
        }
        
        
        function move(){
            next++;
            if(next==sxb.length){
                next=0;
            }
            for(let i=0;i<sxb.length;i++){
                sxb[i].style.left="-width2";
                // li[i].style.background="#8F8D88";
                li[i].style.background="#B0B0B0";
                li[i].style.borderColor="white"
            }
            sxb[next].style.left=-width2+"px";
            animate(sxb[now],{left:width2});
            animate(sxb[next],{left:0},function(){flag=true;});
            // li[next].style.background="#F5F4EE"
            li[next].style.background="white"
            li[next].style.borderColor="#ff6700"
            now=next;

        }
        function move1(){
            next--;
            if(next<0){
                next=sxb.length-1;
            }

            for(let m=0;m<sxb.length;m++){
                sxb[m].style.left="width2";
                // li[m].style.background="#8F8D88";
                li[m].style.background="#B0B0B0";
                li[m].style.borderColor="white"
            }
            sxb[next].style.left=width2+"px";
            animate(sxb[now],{left:-width2});
            animate(sxb[next],{left:0},function(){flag=true;});
            // li[next].style.background="#F5F4EE"
            li[next].style.background="white"
            li[next].style.borderColor="#ff6700"
            now=next;
                  
        }

        }
//倒计时
        let dao=document.querySelectorAll("#daojishi .son");
        daoji();
        setInterval(daoji,1000);
        function daoji(){
            let arr=hdsz();
            dao[0].innerText=arr[0];
            dao[2].innerText=arr[1];
            dao[4].innerText=arr[2];
        }
       /* let nowdate=new Date;
        let future=new Date(2018,6,26,18);
        let time=(future-nowdate)/1000;
        let xtime=0;*/
        // let arr=hdsz();

        function hdsz() {
            let nowdate=new Date;
            let future=new Date(2018,7,2,18);
            let time=(future-nowdate)/1000;
            let xtime=0;
            let arr=[];
            let hour=Math.floor(time/(60*60));
            xtime=time%(60*60);
            if (hour<10){
                arr.push("0"+hour)
            }
            else {
                arr.push(hour);
            }
            let fen=Math.floor(xtime/60);
            if (fen<10){
                arr.push("0"+fen);
            }
            else {
                arr.push(fen);
            }
            let miao=Math.floor(xtime%60);
            if (miao<10){
                arr.push("0"+miao);
            }
            else {
                arr.push(miao);
            }
            return arr;
        }



    /*let time=setInterval(move,2000);
    for(let j=0;j<li.length;j++){
        li[j].onclick=function(){
        for(let i=0;i<son.length;i++){
        li[i].style.background="#8F8D88";

        }
        li[j].style.background="#F5F4EE";
        if(j>now){
           sxb[j].style.left=width2+"px";
           animate(sxb[j],{left:0});
        }
        if(j<now){

            sxb[j].style.left=-width2+"px";
            animate(sxb[now],{left:width2});
            animate(sxb[j],{left:0});
        }
        if(j==now){
            return;

        }
        next=now=j;
        }

    }
    boxs.onmouseenter=function () {
        clearInterval(time);
    }
    boxs.onmouseleave=function () {
        time=setInterval(move,2000);
    }
    right2.onclick=function(){
       if(flag==false){
        return;
       }
        move();
        flag=false;
    }
    left2.onclick=function(){
         if(flag==false){
        return;
       }
        move1();
        flag=false;
    }


    function move(){
        next++;
        if(next==sxb.length){
            next=0;
        }
        for(let i=0;i<sxb.length;i++){
            sxb[i].style.left="-width2";
            li[i].style.background="#8F8D88";
        }
        sxb[next].style.left=-width2+"px";
        animate(sxb[now],{left:width2});
        animate(sxb[next],{left:0},function(){flag=true;});
        li[next].style.background="#F5F4EE"
        now=next;

    }
    function move1(){
        next--;
        if(next<0){
            next=sxb.length-1;
        }

        for(let m=0;m<sxb.length;m++){
            sxb[m].style.left="width2";
            li[m].style.background="#8F8D88";
        }
        sxb[next].style.left=width2+"px";
        animate(sxb[now],{left:-width2});
        animate(sxb[next],{left:0},function(){flag=true;});
        li[next].style.background="#F5F4EE"
        now=next;

    }*/



/*let time=setInterval(move,1000);
        for(let j=0;j<son.length;j++){
            son[j].onclick=function(){
            for(let i=0;i<son.length;i++){
            son[i].style.background="#8F8D88"; 
            
            }
            son[j].style.background="#F5F4EE"; 
            if(j>now){
               aL[j].style.left=width+"px";
               animate(aL[j],{left:0}); 
            }
            if(j<now){
                
                aL[j].style.left=-width+"px";
                animate(aL[now],{left:width});
                animate(aL[j],{left:0}); 
            }
            if(j==now){
                return;
                  
            }
            next=now=j;   
            }
            
        }
        Box1.onmouseenter=function () {
            clearInterval(time);
        }
        Box1.onmouseleave=function () {
            time=setInterval(move,1000);
        }
        forword.onclick=function(){
           if(flag==false){
            return;
           }         
            move();  
            flag=false;          
        }
        back.onclick=function(){
             if(flag==false){
            return;
           }         
            move1();  
            flag=false;          
        }
        
        
        function move(){
            next++;
            if(next==aL.length){
                next=0;
            }
            for(let i=0;i<aL.length;i++){
                aL[i].style.left="-width";
                son[i].style.background="#8F8D88";
            }
            aL[next].style.left=-width+"px";
            animate(aL[now],{left:width});
            animate(aL[next],{left:0},function(){flag=true;});
            son[next].style.background="#F5F4EE"
            now=next;

        }
        function move1(){
            next--;
            if(next<0){
                next=aL.length-1;
            }

            for(let i=0;i<aL.length;i++){
                aL[i].style.left="width";
                son[i].style.background="#8F8D88";
            }
            aL[next].style.left=width+"px";
            animate(aL[now],{left:-width});
            animate(aL[next],{left:0},function(){flag=true;});
            son[next].style.background="#F5F4EE"
            now=next;
                  
        }

*/






//最大轮播图

        let pd=true;
        let num=0;
        let t=setInterval(fn,2000);
        /*let hot=document.querySelector(".hot");
        console.log(hot);*/
        function fn() {
            num++;
            if (num==aL.length){
                num=0;
            }
           for (let c=0;c<aL.length;c++){
               aL[c].style.zIndex=5;
               
                son[c].style.background="#8F8D88";
               
           }
            aL[num].style.zIndex=10;
            son[num].style.background="#F5F4EE";
        }
        function fn1(){
            num--;
            if (num<0){
                num=aL.length-1;
            }
            for (let c=0;c<aL.length;c++){
                aL[c].style.zIndex=5;
               
                 son[c].style.background="#8F8D88";
           }
            
            aL[num].style.zIndex=10;
            son[num].style.background="#F5F4EE";
        }
        Box1.onmouseenter=function () {
            clearInterval(t);
        }
        Box1.onmouseleave=function () {
            t=setInterval(fn,2000);
        }
        forword.onclick=function () {
          
            fn();
            
            
        }
        back.onclick=function () {
           
            fn1();
           
        }
        for (let j=0;j<son.length;j++) {           
            son[j].onclick=function(){
                for(let y=0;y<son.length;y++){
                  son[y].style.background="#8F8D88";
                aL[y].style.zIndex=5;
            }
               son[j].style.background="#F5F4EE";
                aL[j].style.zIndex=10;
                 num=j;
            }

        }

//为您推荐
    let include=document.querySelector(".include") ;
    let tuijianWidth=include.offsetWidth/2;
    let leftFor=document.querySelector(".leftFor");
    let rightBack=document.querySelector('.rightBack')
    let timess=0;
    rightBack.onclick=function(){
        timess++;
        if(timess==2){
            timess=1;
        }
        include.style.transform='translateX('+'-'+tuijianWidth*timess+'px)';
        // console.log(bottomright.style.transform='translateX(${-kuan*times}px)');
    }
    leftFor.onclick=function(){
        timess--;
        if(timess<0){
            timess=0;
        }
        include.style.transform='translateX('+'-'+tuijianWidth*timess+'px)';
        // console.log(bottomright.style.transform='translateX('+'-'+kuan*times+'px)');
    }
        

}