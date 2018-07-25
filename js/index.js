/*
* @Author: dapang
* @Date:   2018-07-20 13:39:42
* @Last Modified by:   zhangbufeng
* @Last Modified time: 2018-07-25 08:40:20
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
    //banner部分
    let bigBox2=document.getElementsByClassName("bigBox")[0];
    let banner2=bigBox2.getElementsByClassName("banner")[0];
    let imgBox=banner2.getElementsByClassName("imgBox")[0];
    let next=document.getElementsByClassName("next")[0];
    let prev=document.getElementsByClassName("prev")[0];
    let lis1=imgBox.getElementsByTagName("li");
    let btns=document.getElementsByClassName("btns")[0];
    let sons=btns.getElementsByClassName("son");
    console.log(sons);
    /*let num=0;
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
    	}
    	lis1[num].style.zIndex=10;
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
    }*/
    let now=0;
    let next1=0;
    let flag=true;
    let width=parseInt(getComputedStyle(banner2,null).width);
    let t1=setInterval(move2,2000); 
    function move2(){
    	next1++;
        if(next1>lis1.length-1){
            next1=0;
        }
        lis1[next1].style.left=width+"px";
        animate(lis1[now],{left:-width});
        animate(lis1[next1],{left:0},function(){
            flag=true;
        });
        now=next1;
        for(let i=0;i<sons.length;i++){
            sons[i].style.background="#92897c";
            if(next1==i){
                sons[i].style.background="#fff";
            }
            if(next1<i){
                sons[next1].style.background="#fff";
            }
        }
    }
    function move3(){
        next1--;
        if(next1<0){
            next1=lis1.length-1;
        }
        lis1[next1].style.left=-width+"px";
        animate(lis1[now],{left:width});
        animate(lis1[next1],{left:0},function(){
            flag=true;
        });
        now=next1;
    }
    for(let i=0;i<sons.length;i++){
        sons[i].onclick=function(){
            if(i==now){
                return;
            }
            if(i>now){
                animate(lis1[now],{left:-width});
                animate(lis1[i],{left:0},function(){
                    flag=true;
                });
            }
            if(i<now){
                animate(lis1[now],{left:width});
                animate(lis1[i],{left:0},function(){
                    flag=true;
                });
            }
            for(let j=0;j<sons.length;j++){
                sons[j].style.background="#92897c";
            }
            sons[i].style.background="#fff";
        }
        now=next1=i;
    }
    next.onclick=function(){
        if(flag==false){
            return;
        }
        flag=false;
        move2();
    }
    prev.onclick=function(){
        if(flag==false){
            return;
        }
        flag=false;
        move3();
    }
    banner2.onmouseenter=function(){
        clearInterval(t1);
    }
    banner2.onmouseleave=function(){
        t=setInterval(move2,2000);
    }

}