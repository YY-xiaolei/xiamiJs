/*
* @Author: dapang
* @Date:   2018-07-20 13:39:42
* @Last Modified by:   dapang
* @Last Modified time: 2018-07-23 23:41:10
*/
window.onload=function(){
	//购物车
	let header=document.getElementsByClassName("header")[0];
	let shop=header.getElementsByClassName("shop")[0];
	let shopCarMenu=shop.getElementsByClassName("shopCarMenu")[0];
	console.log(shop,shopCarMenu);
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
	let lis2=nav_list.getElementsByTagName("li");
	let headerNavMenu=document.getElementsByClassName("header_nav_menu");
	console.log(lis2);
	for(let i=0;i<lis2.length-2;i++){
		lis2[i].onmouseenter=function(){
			headerNavMenu[i].style.display="block";
		}
		lis2[i].onmouseleave=function(){
			headerNavMenu[i].style.display="none";
		}
	}
	//侧导航
	let bigBox=document.getElementsByClassName("bigBox")[0];
	let banner=bigBox.getElementsByClassName("banner")[0];
	let aside=banner.getElementsByClassName("aside")[0];
	let ul=aside.getElementsByTagName("ul")[0];
	let lis=ul.getElementsByClassName("aside_nav");
	let asideBox=document.getElementsByClassName("asideBox");
	console.log(asideBox);
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
		console.log(spans);
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
    
    let bigBox2=document.getElementsByClassName("bigBox")[0];
    let banner2=bigBox2.getElementsByClassName("banner")[0];
    let imgBox=banner2.getElementsByClassName("imgBox")[0];
    let next=document.getElementsByClassName("next")[0];
    let prev=document.getElementsByClassName("prev")[0];
    let lis1=imgBox.getElementsByTagName("li");
    console.log(next);
    let num=0;
    let t=setInterval(move,2000);
    function move(){
    	num++;
    	if(num==5){
    		for(let i=0;i<lis1.length;i++){
    			lis1[i].style.zIndex=5;
    			num=0;
    		}
    	}
    	lis1[num].style.zIndex=10;
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
    let num1=5;
    function move1(){
    	num1--;
    	if(num1<0){
    		num1=lis1.length-1;
    	}
    	for(let i=0;i<lis1.length;i++){
    		lis1[i].style.zIndex=5;
    	}
    	lis1[num1].style.zIndex=10;
    }
    prev.onclick=function(){
    	move1();
    }
}