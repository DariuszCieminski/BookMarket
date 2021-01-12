function hideContextMenu(t){for(var e=document.querySelectorAll(".contextmenu-container"),n=document.querySelectorAll(".contextmenu-active"),i=0;i<n.length;i++)n[i].classList.remove("contextmenu-active");for(i=0;i<e.length;i++)e[i].remove()}function addEvents(t,e,n){e=e.split(" ");for(var i=0;i<e.length;i++)document.addEventListener?t.addEventListener(e[i],function(t){n(t)},!1):t.attachEvent("on"+e[i],function(t){n(t)})}function removeEvents(t,e,n){e=e.split(" ");for(var i=0;i<e.length;i++)document.addEventListener?t.removeEventListener(e[i],n,!1):t.detachEvent("on"+e[i],n)}function hideContextMenuChild(t){for(var e=document.querySelectorAll(".contextmenu-container"),n=0;n<e.length;n++)e[n].dataset.childlevel>t&&e[n].remove()}var contextMenuImgUp=new Image;contextMenuImgUp.src="../img/arrow-contextmenu-up.png";var contextMenuImgDown=new Image;function showContextMenu(t,e,n){currentContainer=document.querySelectorAll(".contextmenu-container");var i=n&&n.element&&n.element.classList.contains("contextmenu-active"),o=n&&n.toggleClass&&n.toggleClass.classList.contains("contextmenu-active");if(!((i||o)&&0<currentContainer.length)){var r=0;n&&n.isSub?r=n.isSub:hideContextMenu(),t.stopPropagation();var l=document.createElement("div");l.className="contextmenu-container",l.dataset.childlevel=r;var d,a,h=document.createElement("div");if(h.className="box",l.appendChild(h),document.body.appendChild(l),n?(el=n.element?n.element:void 0,withArrow=!!n.arrow&&n.arrow,n.toggleClass&&n.toggleClass.classList.add("contextmenu-active")):el=withArrow=void 0,el){el.classList.add("contextmenu-active");var c=el.getBoundingClientRect();n&&n.width&&("100%"==n.width?h.style.width=c.width+"px":n.width.match(/%$/)?h.style.width=Math.round(c.width/100*parseInt(n.width))+"px":n.width.match(/px$/)&&(h.style.width=n.width))}for(var m=0,w=0;w<e.length;w++){var s=!!e[w].sub;if(!e[w].hide){var u="lvl"+r+"n"+m++;if((d=document.createElement("li")).id=u,"html"!=e[w].type&&"HTML"!=e[w].type)if(a=document.createElement("span"),"infos"==e[w].type?a.className="infos":(a.className="contextmenu-btn",e[w].onclick&&(d.onclick=e[w].onclick)),d.appendChild(a),a.innerHTML=(s?'<div class="contextmenu-arrow-sub"></div>':"")+e[w].text,s){a.classList.add("context-menu-sub");var g=e[w].sub;a.onmouseenter=function(t){hideContextMenuChild(r),showContextMenu(t,g,{isSub:r+1,idParent:this.parentNode.id})}}else a.onmouseenter=function(){hideContextMenuChild(r)};else d.innerHTML=e[w].text;h.appendChild(d)}}if(r){if(n&&n.idParent){var p=14,f=document.getElementById(n.idParent);if(f){var v=f.getBoundingClientRect(),x=h.getBoundingClientRect();(b={}).height=x.height,b.width=x.width,b.left=v.left+v.width+1,b.top=+v.top,b.right=window.innerWidth-(b.left+b.width),b.bottom=window.innerHeight-(b.top+b.height),b.right<p&&(b.left=v.left-1-b.width),l.style.left=b.left+"px",b.bottom<p&&(b.top=window.innerHeight-p-b.height),l.style.top=b.top+"px"}}}else{p=14;var M=withArrow?10:0,C=withArrow?18:0,y=C?Math.round(C/3):0,A={left:0,right:0,top:0,bottom:0};n&&n.margin&&(A={left:n.margin.left?n.margin.left:0,right:n.margin.right?n.margin.right:0,top:n.margin.top?n.margin.top:0,bottom:n.margin.bottom?n.margin.bottom:0});var b;x=h.getBoundingClientRect();if(withArrow){var L=document.createElement("img");L.className="contextmenu-arrow",l.appendChild(L)}(b={}).height=x.height,b.width=x.width;var E=t.clientX;if(n&&n.align&&("center"==n.align?E=c.left+Math.round(c.width/2)-(withArrow?0:Math.round(b.width/2)):"left"==n.align?E=c.left+(withArrow?Math.round(b.width/2):0):"right"==n.align&&(E=c.left+c.width-b.width+(withArrow?Math.round(b.width/2):0))),b.midWidth=Math.round(b.width/2),b.left=E-(withArrow?b.midWidth:0),b.top=(el?c.top+c.height:t.clientY)+M+A.bottom,b.right=window.innerWidth-(b.left+b.width),b.bottom=window.innerHeight-(b.top+b.height),b.right<p){var W=(withArrow?window.innerWidth-p:E)-b.width;(I=b.left-W-Math.round(C/2))+C+y>b.midWidth&&(I=b.midWidth-C-y),withArrow&&(L.style.marginLeft=I+"px"),b.left=W}else if(b.left<p){var I;(I=-(p-b.left+Math.round(C/2)))<-b.midWidth+y&&(I=-b.midWidth+y),withArrow&&(L.style.marginLeft=I+"px"),b.left=p}else withArrow&&(L.style.marginLeft=-Math.round(C/2)+"px");l.style.left=b.left+"px",b.bottom<p?(withArrow&&(L.src="../img/arrow-contextmenu-down.png"),b.top=(withArrow?(el?c.top:t.clientY)-M:el?c.top:t.clientY)-b.height-A.top):withArrow&&(L.src="../img/arrow-contextmenu-up.png",L.style.top=-M+"px"),l.style.top=b.top+"px"}}}contextMenuImgDown.src="../img/arrow-contextmenu-down.png",addEvents(window,"keydown resize dragover click contextmenu DOMMouseScroll wheel mousewheel touch",hideContextMenu);