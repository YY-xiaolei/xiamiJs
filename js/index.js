/*
* @Author: dapang
* @Date:   2018-07-20 13:39:42
* @Last Modified by:   dapang
* @Last Modified time: 2018-07-22 23:49:12
*/
window.onload=function(){
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
	let aside=document.getElementsByClassName("aside")[0];
	let lis=aside.getElementsByTagName("li");
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
    let bigBox=document.getElementsByClassName("bigBox")[0];
    let con=bigBox.getElementsByClassName("con")[0];
    let nav1=con.getElementsByClassName("nav")[0];
    let xia=nav1.getElementsByClassName("xia");
    let logoCon=document.getElementsByClassName("logoCon");
    console.log(xia,logoCon);
    for(let i=0;i<xia.length-2;i++){
    	xia[i].onmouseenter=function () {
			for(let j=0;j<xia.length-2;j++){
                logoCon[j].style.display="none";
			}
            logoCon[i].style.display="block";
            logoCon[i].style.height="230px";
            logoCon[i].style.background="#fff";
            logoCon[i].style.borderTop="1px solid #E0E0E0";
            logoCon[i].style.boxShadow="0 7px 6px rgba(0,0,0,0.2)";
        }
        xia[i].onmouseleave=function () {
            logoCon[i].style.display="none";
            logoCon[i].style.height=0;
            logoCon[i].style.background="none";
            logoCon[i].style.boxShadow="none";
            logoCon[i].style.borderTop="none";
        }
	}

}