/*
* @Author: dapang
* @Date:   2018-07-20 13:39:42
* @Last Modified by:   zhangbufeng
* @Last Modified time: 2018-08-05 16:49:25
*/
window.onload=function(){
	//购物车
	let header=document.getElementsByClassName("header")[0];
	let shop=header.getElementsByClassName("shop")[0];
	let shopCarMenu=shop.getElementsByClassName("shopCarMenu")[0];
	shop.onmouseenter=function(){
		shopCarMenu.style.height="98px";
		shopCarMenu.style.boxShadow=" 0 2px 10px rgba(0,0,0,0.15)";
	}
	shop.onmouseleave=function(){
		shopCarMenu.style.height=0;
		shopCarMenu.style.boxShadow="none";
	}
	let bigBox1=document.getElementsByClassName("bigBox")[0];
	let headerNav=bigBox1.getElementsByClassName("header_nav")[0];
	let nav_list=headerNav.getElementsByClassName("nav_list")[0];
	let lis2=nav_list.querySelectorAll("li");
    let headerNavMenu=document.getElementsByClassName("header_nav_menu");
	for(let i=0;i<lis2.length-2;i++){
		lis2[i].onmouseenter=function(){
            headerNavMenu[i].style.height = "229px";
            headerNavMenu[i].style.borderTop = "1px";
		}
        lis2[i].onmouseleave=function(){
            headerNavMenu[i].onmouseleave = function (){
                headerNavMenu[i].style.height = 0;
                headerNavMenu[i].style.borderTop = 0;
            }
        }
	}
    //search
    let bigBox3=document.getElementsByClassName("bigBox")[0];
    let search=bigBox3.getElementsByClassName("search")[0];
    let input=bigBox3.querySelector("input");
    let span=search.querySelector("span");
    let search_hot_words=search.querySelector(".search_hot_words");
    let bottomBox=search.querySelector(".bottomBox");
    input.onfocus=function (e){
        input.style.borderColor="#ff6700"
        span.style.borderColor="#ff6700"
        search_hot_words.style.display="none"
        bottomBox.style.height="300px"
        bottomBox.style.borderWidth="1px";
    }
    input.onblur=function(){
        input.style.borderColor="#e0e0e0"
        span.style.borderColor="#e0e0e0"
        search_hot_words.style.display="block"
        bottomBox.style.height="0"
        bottomBox.style.borderWidth="0";
    }
	//侧导航
	let bigBox=document.getElementsByClassName("bigBox")[0];
	let banner=bigBox.getElementsByClassName("banner")[0];
	let aside=banner.getElementsByClassName("aside")[0];
	let ul=aside.getElementsByTagName("ul")[0];
	let lis=ul.getElementsByClassName("aside_nav");
	let asideBox=document.getElementsByClassName("asideBox");
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<lis.length;j++){
				asideBox[j].style.display="none";
			}
			asideBox[i].style.display="block";
		}
		lis[i].onmouseleave=function(){
			asideBox[i].style.display="none";
		}
	}
	//块
	function right_nav(fn){
		let top=fn.getElementsByClassName("top")[0];
		let right=top.getElementsByClassName("right")[0];
		let spans=right.getElementsByTagName("span");
		let con=fn.getElementsByClassName("con")[0];
		let right_Box=con.getElementsByClassName("right_Box");
		for(let i=0;i<spans.length;i++){
			spans[i].onmouseenter=function(){
				for(let j=0;j<spans.length;j++){
					right_Box[j].style.display="none";
					spans[j].className=" ";
				}
				right_Box[i].style.display="block";
				spans[i].className="hot";
			}
		}
	}
	let goods=document.getElementsByClassName("goods")[0];
    right_nav(goods);
    let zhineng=document.getElementsByClassName("zhineng")[0];
    right_nav(zhineng);
    let dapei=document.getElementsByClassName("dapei")[0];
    right_nav(dapei);
    let peijian=document.getElementsByClassName("peijian")[0];
    right_nav(peijian);
    let zhoubian=document.getElementsByClassName("zhoubian")[0];
    right_nav(zhoubian);
    //banner部分
    let bigBox2=document.getElementsByClassName("bigBox")[0];
    let banner2=bigBox2.getElementsByClassName("banner")[0];
    let imgBox1=banner2.getElementsByClassName("imgBox")[0];
    let next=document.getElementsByClassName("next")[0];
    let prev=document.getElementsByClassName("prev")[0];
    let lis1=imgBox1.getElementsByTagName("li");
    let btns=document.getElementsByClassName("btns")[0];
    let sons=btns.getElementsByClassName("son");
    let num=0;
    let t=setInterval(move,2000);
    function move(){
    	num++;
    	if(num==5){
    		num=0;
    	}
    	for(let i=0;i<lis1.length;i++){
    		lis1[i].style.zIndex=5;
    		sons[i].style.background="#92897c";
    	}
    	lis1[num].style.zIndex=10;
    	sons[num].style.background="#fff";
        animate(lis1[num],{left:0})
    }
    banner2.onmouseenter=function(){
    	clearInterval(t);
    }
    banner2.onmouseleave=function(){
    	t=setInterval(move,2000);
    }
    next.onclick=function(){
    	move();
    }
    function move1(){
    	num--;
    	if(num<0){
    		num=lis1.length-1;
    	}
    	for(let i=0;i<lis1.length;i++){
    		lis1[i].style.zIndex=5;
            sons[i].style.background="#92897c";
    	}
    	lis1[num].style.zIndex=10;
        sons[num].style.background="#fff";
        animate(lis1[num],{left:0})
    }
    prev.onclick=function(){
    	move1();
    }
    for(let i=0;i<sons.length;i++){
    	sons[i].onclick=function(){
    		for(let j=0; j<sons.length;j++){
    			lis1[j].style.zIndex=5;
    			sons[j].style.background="#92897c";
    		}
    		lis1[num].style.zIndex=10;
    		sons[num].style.background="#fff";
    		num=i;
    	}	
    }
    //闪购
    let shangou=document.getElementsByClassName("shangou")[0];
    let more=document.getElementsByClassName("more")[0];
    let btn1=more.getElementsByTagName("button");
    let conR=document.getElementsByClassName("conR")[0];
    let ul1=conR.getElementsByTagName("ul")[0];
    let conRwidth=parseInt(getComputedStyle(ul1,null).width)/2;
    let btnL=btn1[1],btnR=btn1[0];
    let time=0;
    btnR.onclick=function(){
        time++;
        if(time==2){
            time=1;
        }
        ul1.style.transform=`translateX(${-conRwidth*time}px)`;
    }
    btnL.onclick=function(){
        time--;
        if(time==-1){
            time=0;
        }
        ul1.style.transform=`translateX(${conRwidth*time}px)`;
    }
    //内容页面
    function neirong(xc){
        let neirong=document.getElementsByClassName("neirong")[0];
        let ul3=neirong.getElementsByTagName("ul");
        let wapper=document.querySelectorAll(".wapper");
        let imgBox=xc.querySelector(".imgBox1");
        let next=xc.querySelector(".next");
        let prev=xc.querySelector(".prev");
        let lisW=imgBox.querySelector("li");
        let btns=xc.querySelector(".btns");
        let dots=btns.getElementsByClassName("dot");
        let width=parseInt(getComputedStyle(lisW,null).width);
        let width1=parseInt(getComputedStyle(imgBox,null).width);
        let num=width1/width;
        let time1=0;
        let now=0;
        next.onclick=function(){
            time1++;
            if(time1==num){
                time1=num-1;
            }
            imgBox.style.transform=`translateX(${-width*time1}px)`;
            for(let i=0;i<dots.length;i++){
                dots[i].style.borderColor="#f5f5f5"
                dots[i].style.backgroundColor="#b0b0b0"
            }
            dots[time1].style.borderColor="#ff6700"
            dots[time1].style.backgroundColor="#f5f5f5"
        }
        prev.onclick=function(){
            time1--;
            if(time1==-1){
                time1=0;
            }
            imgBox.style.transform=`translateX(${-width*time1}px)`;
            for(let i=0;i<dots.length;i++){
                dots[i].style.borderColor="#f5f5f5"
                dots[i].style.backgroundColor="#b0b0b0"
            }
            dots[time1].style.borderColor="#ff6700"
            dots[time1].style.backgroundColor="#f5f5f5"
        }
        for(let i=0;i<dots.length;i++){
            if(dots.length=3){
                dots[0].onclick=function(){
                    imgBox.style.left=0;
                    for(let i=0;i<dots.length;i++){
                        dots[i].style.borderColor="#f5f5f5"
                        dots[i].style.backgroundColor="#b0b0b0"
                    }
                    dots[0].style.borderColor="#ff6700"
                    dots[0].style.backgroundColor="#f5f5f5"
                }
                dots[1].onclick=function(){
                    imgBox.style.left="-296px"
                    for(let i=0;i<dots.length;i++){
                        dots[i].style.borderColor="#f5f5f5"
                        dots[i].style.backgroundColor="#b0b0b0"
                    }
                    dots[1].style.borderColor="#ff6700"
                    dots[1].style.backgroundColor="#f5f5f5"
                }
                dots[2].onclick=function(){
                    imgBox.style.left="-592px"
                    for(let i=0;i<dots.length;i++){
                        dots[i].style.borderColor="#f5f5f5"
                        dots[i].style.backgroundColor="#b0b0b0"
                    }
                    dots[2].style.borderColor="#ff6700"
                    dots[2].style.backgroundColor="#f5f5f5"
                }
            }
            else{
                dots[0].onclick=function(){
                    imgBox.style.left=0;
                    for(let i=0;i<dots.length;i++){
                        dots[i].style.borderColor="#f5f5f5"
                        dots[i].style.backgroundColor="#b0b0b0"
                    }
                    dots[0].style.borderColor="#ff6700"
                    dots[0].style.backgroundColor="#f5f5f5"
                }
                dots[1].onclick=function(){
                    imgBox.style.left="-296px"
                    for(let i=0;i<dots.length;i++){
                        dots[i].style.borderColor="#f5f5f5"
                        dots[i].style.backgroundColor="#b0b0b0"
                    }
                    dots[1].style.borderColor="#ff6700"
                    dots[1].style.backgroundColor="#f5f5f5"
                }
                dots[2].onclick=function(){
                    imgBox.style.left="-592px"
                    for(let i=0;i<dots.length;i++){
                        dots[i].style.borderColor="#f5f5f5"
                        dots[i].style.backgroundColor="#b0b0b0"
                    }
                    dots[2].style.borderColor="#ff6700"
                    dots[2].style.backgroundColor="#f5f5f5"
                }
                dots[3].onclick=function(){
                    imgBox.style.left="-888px"
                    for(let i=0;i<dots.length;i++){
                        dots[i].style.borderColor="#f5f5f5"
                        dots[i].style.backgroundColor="#b0b0b0"
                    }
                    dots[3].style.borderColor="#ff6700"
                    dots[3].style.backgroundColor="#f5f5f5"
                }
            }
        }
    }
    let nr_1=document.querySelector(".nr_1");
    neirong(nr_1);
    let nr_2=document.querySelector(".nr_2");
    neirong(nr_2);
    let nr_3=document.querySelector(".nr_3");
    neirong(nr_3);
    let nr_4=document.querySelector(".nr_4");
    neirong(nr_4);
    //倒计时
    fn1();
    setInterval(fn1, 1000);
    function fn1(){            
        let shangou=document.querySelector(".shangou");
        let span=shangou.querySelectorAll("span");
        let arr=times();
        span.forEach(function(e,i){
            e.innerText=arr[i];
        })
        return span;
    }
    function times(){
        let now=new Date();
        let futrue=new Date(2018,7,10,18,00,00);
        let time=Math.floor((futrue.getTime()-now.getTime())/1000);
        let arr=[];
        let hours=Math.floor(time/(60*60));
        time=time%(60*60);
        arr.push(hours);
        let minutes=Math.floor(time/60);
        arr.push(minutes);
        let s=Math.floor(time%60);
        arr.push(s);
        return arr;
    }
}