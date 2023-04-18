(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9477],{94184:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&e.push(a)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)r.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(t=(function(){return o}).apply(n,[]))&&(e.exports=t)}()},59477:function(e,n,t){"use strict";t.d(n,{N:function(){return eY}});var r=t(27857),o=t(67294),i=t(85893),a=t(73935),s=t(94184);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}var l=function(e){return!!e&&"o"===e[0]},f=a.unstable_batchedUpdates||function(e){return e()},d=function(e,n,t){return void 0===t&&(t=1e-4),Math.abs(e-n)<t},m=function(e,n){return!0===e||!!(e&&e[n])},h=function(e,n){return"function"==typeof e?e(n):e},p="_szhsinMenu",v=function(e,n){return n&&Object.keys(n).forEach(function(t){var r=e[t],o=n[t];"function"==typeof o&&r?e[t]=function(){o.apply(void 0,arguments),r.apply(void 0,arguments)}:e[t]=o}),e},b=function(e){if("string"!=typeof e)return{top:0,right:0,bottom:0,left:0};var n=e.trim().split(/\s+/,4).map(parseFloat),t=isNaN(n[0])?0:n[0],r=isNaN(n[1])?t:n[1];return{top:t,right:r,bottom:isNaN(n[2])?t:n[2],left:isNaN(n[3])?r:n[3]}},g=function(e){for(;e;){if(!(e=e.parentNode)||e===document.body)return;var n=getComputedStyle(e),t=n.overflow,r=n.overflowX,o=n.overflowY;if(/auto|scroll|overlay|hidden/.test(t+o+r))return e}};function x(e,n){return{"aria-disabled":e||void 0,tabIndex:n?0:-1}}function w(e,n){for(var t=0;t<e.length;t++)if(e[t]===n)return t;return -1}var y=function(e){var n=e.block,t=e.element,r=e.modifiers,i=e.className;return(0,o.useMemo)(function(){var e=t?n+"__"+t:n,o=e;r&&Object.keys(r).forEach(function(n){var t=r[n];t&&(o+=" "+e+"--"+(!0===t?n:n+"-"+t))});var a="function"==typeof i?i(r):i;return"string"==typeof a&&(a=a.trim())&&(o+=" "+a),o},[n,t,r,i])},R="szh-menu",j="item",C=(0,o.createContext)(),E=(0,o.createContext)({}),N=(0,o.createContext)({}),k=(0,o.createContext)({}),S=(0,o.createContext)({}),O=(0,o.createContext)({}),T=(0,o.createContext)({}),M=Object.freeze({ENTER:"Enter",ESC:"Escape",SPACE:" ",HOME:"Home",END:"End",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",DOWN:"ArrowDown"}),P=Object.freeze({RESET:0,SET:1,UNSET:2,INCREASE:3,DECREASE:4,FIRST:5,LAST:6,SET_INDEX:7}),L=Object.freeze({CLICK:"click",CANCEL:"cancel",BLUR:"blur",SCROLL:"scroll"}),B=Object.freeze({FIRST:"first",LAST:"last"}),D=Object.freeze({entering:"opening",entered:"open",exiting:"closing",exited:"closed"}),I=function(e){var n=e.className,t=e.containerRef,r=e.containerProps,a=e.children,s=e.isOpen,u=e.skipOpen,l=e.theming,f=e.transition,d=e.onClose,p=m(f,"item");return(0,i.jsx)("div",c({},v({onKeyDown:function(e){var n=e.key;n===M.ESC&&h(d,{key:n,reason:L.CANCEL})},onBlur:function(e){s&&!e.currentTarget.contains(e.relatedTarget||document.activeElement)&&(h(d,{reason:L.BLUR}),u&&(u.current=!0,setTimeout(function(){return u.current=!1},300)))}},r),{className:y({block:"szh-menu-container",modifiers:(0,o.useMemo)(function(){return{theme:l,itemTransition:p}},[l,p]),className:n}),style:c({position:"absolute"},null==r?void 0:r.style),ref:t,children:a}))},A=function(e,n){var t=(0,o.useState)(),r=t[0],i=t[1],a=(0,o.useRef)({items:[],hoverIndex:-1,sorted:!1}).current,s=(0,o.useCallback)(function(e,t){var r=a.items;if(e){if(t)r.push(e);else{var o=r.indexOf(e);o>-1&&(r.splice(o,1),e.contains(document.activeElement)&&(n.current.focus(),i()))}}else a.items=[];a.hoverIndex=-1,a.sorted=!1},[a,n]);return{hoverItem:r,dispatch:(0,o.useCallback)(function(n,t,r){var o=a.items,s=a.hoverIndex,c=function(){if(!a.sorted){var n=e.current.querySelectorAll(".szh-menu__item");o.sort(function(e,t){return w(n,e)-w(n,t)}),a.sorted=!0}},u=-1,l=void 0;switch(n){case P.RESET:break;case P.SET:l=t;break;case P.UNSET:l=function(e){return e===t?void 0:e};break;case P.FIRST:c(),l=o[u=0];break;case P.LAST:c(),u=o.length-1,l=o[u];break;case P.SET_INDEX:c(),l=o[u=r];break;case P.INCREASE:c(),(u=s)<0&&(u=o.indexOf(t)),++u>=o.length&&(u=0),l=o[u];break;case P.DECREASE:c(),(u=s)<0&&(u=o.indexOf(t)),--u<0&&(u=o.length-1),l=o[u]}l||(u=-1),i(l),a.hoverIndex=u},[e,a]),updateItems:s}},F=function(e,n,t,r){var o=n.current.getBoundingClientRect(),i=e.current.getBoundingClientRect(),a=t===window?{left:0,top:0,right:document.documentElement.clientWidth,bottom:window.innerHeight}:t.getBoundingClientRect(),s=b(r),c=function(e){return e+i.left-a.left-s.left},u=function(e){return e+i.left+o.width-a.right+s.right},l=function(e){return e+i.top-a.top-s.top},f=function(e){return e+i.top+o.height-a.bottom+s.bottom};return{menuRect:o,containerRect:i,getLeftOverflow:c,getRightOverflow:u,getTopOverflow:l,getBottomOverflow:f,confineHorizontally:function(e){var n=c(e);if(n<0)e-=n;else{var t=u(e);t>0&&(e-=t,(n=c(e))<0&&(e-=n))}return e},confineVertically:function(e){var n=l(e);if(n<0)e-=n;else{var t=f(e);t>0&&(e-=t,(n=l(e))<0&&(e-=n))}return e}}},H=function(e){var n=e.arrowRef,t=e.menuY,r=e.anchorRect,o=e.containerRect,i=e.menuRect,a=r.top-o.top-t+r.height/2,s=1.25*n.current.offsetHeight;return Math.min(a=Math.max(s,a),i.height-s)},z=function(e){var n,t,r,o=e.anchorRect,i=e.containerRect,a=e.menuRect,s=e.placeLeftorRightY,c=e.placeLeftX,u=e.placeRightX,l=e.getLeftOverflow,f=e.getRightOverflow,d=e.confineHorizontally,m=e.confineVertically,h=e.arrowRef,p=e.arrow,v=e.direction,b=e.position,g=v,x=s;return"initial"!==b&&(x=m(x),"anchor"===b&&(x=Math.max(x=Math.min(x,o.bottom-i.top),o.top-i.top-a.height))),"left"===g?(n=c,"initial"!==b&&(t=l(n))<0&&((r=f(u))<=0||-t>r)&&(n=u,g="right")):(n=u,"initial"!==b&&(r=f(n))>0&&((t=l(c))>=0||-t<r)&&(n=c,g="left")),"auto"===b&&(n=d(n)),{arrowY:p?H({menuY:x,arrowRef:h,anchorRect:o,containerRect:i,menuRect:a}):void 0,x:n,y:x,computedDirection:g}},Y=function(e){var n=e.arrowRef,t=e.menuX,r=e.anchorRect,o=e.containerRect,i=e.menuRect,a=r.left-o.left-t+r.width/2,s=1.25*n.current.offsetWidth;return Math.min(a=Math.max(s,a),i.width-s)},X=function(e){var n,t,r,o=e.anchorRect,i=e.containerRect,a=e.menuRect,s=e.placeToporBottomX,c=e.placeTopY,u=e.placeBottomY,l=e.getTopOverflow,f=e.getBottomOverflow,d=e.confineHorizontally,m=e.confineVertically,h=e.arrowRef,p=e.arrow,v=e.direction,b=e.position,g="top"===v?"top":"bottom",x=s;return"initial"!==b&&(x=d(x),"anchor"===b&&(x=Math.max(x=Math.min(x,o.right-i.left),o.left-i.left-a.width))),"top"===g?(n=c,"initial"!==b&&(t=l(n))<0&&((r=f(u))<=0||-t>r)&&(n=u,g="bottom")):(n=u,"initial"!==b&&(r=f(n))>0&&((t=l(c))>=0||-t<r)&&(n=c,g="top")),"auto"===b&&(n=m(n)),{arrowX:p?Y({menuX:x,arrowRef:h,anchorRect:o,containerRect:i,menuRect:a}):void 0,x:x,y:n,computedDirection:g}},_=function(e){var n,t,r=e.arrow,o=e.align,i=e.direction,a=e.offsetX,s=e.offsetY,u=e.position,l=e.anchorRect,f=e.arrowRef,d=e.positionHelpers,m=d.menuRect,h=d.containerRect,p=a,v=s;r&&("left"===i||"right"===i?p+=f.current.offsetWidth:v+=f.current.offsetHeight);var b=l.left-h.left-m.width-p,g=l.right-h.left+p,x=l.top-h.top-m.height-v,w=l.bottom-h.top+v;"end"===o?(n=l.right-h.left-m.width,t=l.bottom-h.top-m.height):"center"===o?(n=l.left-h.left-(m.width-l.width)/2,t=l.top-h.top-(m.height-l.height)/2):(n=l.left-h.left,t=l.top-h.top),n+=p;var y=c({},d,{anchorRect:l,placeLeftX:b,placeRightX:g,placeLeftorRightY:t+=v,placeTopY:x,placeBottomY:w,placeToporBottomX:n,arrowRef:f,arrow:r,direction:i,position:u});switch(i){case"left":case"right":return z(y);default:return X(y)}},U="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?o.useLayoutEffect:o.useEffect;function K(e,n){"function"==typeof e?e(n):e.current=n}var W=function(e,n){return(0,o.useMemo)(function(){return e?n?function(t){K(e,t),K(n,t)}:e:n},[e,n])},$=["ariaLabel","menuClassName","menuStyle","arrowClassName","arrowStyle","anchorPoint","anchorRef","containerRef","containerProps","externalRef","parentScrollingRef","arrow","align","direction","position","overflow","setDownOverflow","repositionFlag","captureFocus","state","endTransition","isDisabled","menuItemFocus","offsetX","offsetY","children","onClose"],G=function(e){var n,t,r=e.ariaLabel,s=e.menuClassName,p=e.menuStyle,b=e.arrowClassName,w=e.arrowStyle,j=e.anchorPoint,k=e.anchorRef,S=e.containerRef,T=e.containerProps,D=e.externalRef,H=e.parentScrollingRef,z=e.arrow,Y=e.align,X=void 0===Y?"start":Y,K=e.direction,G=void 0===K?"bottom":K,V=e.position,q=void 0===V?"auto":V,Z=e.overflow,J=void 0===Z?"visible":Z,Q=e.setDownOverflow,ee=e.repositionFlag,en=e.captureFocus,et=void 0===en||en,er=e.state,eo=e.endTransition,ei=e.isDisabled,ea=e.menuItemFocus,es=e.offsetX,ec=void 0===es?0:es,eu=e.offsetY,el=void 0===eu?0:eu,ef=e.children,ed=e.onClose,em=u(e,$),eh=(0,o.useState)({x:0,y:0}),ep=eh[0],ev=eh[1],eb=(0,o.useState)({}),eg=eb[0],ex=eb[1],ew=(0,o.useState)(),ey=ew[0],eR=ew[1],ej=(0,o.useState)(G),eC=ej[0],eE=ej[1],eN=(0,o.useState)(0),ek=eN[0],eS=eN[1],eO=(0,o.useReducer)(function(e){return e+1},1),eT=eO[0],eM=eO[1],eP=(0,o.useContext)(O),eL=eP.transition,eB=eP.boundingBoxRef,eD=eP.boundingBoxPadding,eI=eP.rootMenuRef,eA=eP.rootAnchorRef,eF=eP.scrollNodesRef,eH=eP.reposition,ez=eP.viewScroll,eY=(0,o.useContext)(N).reposSubmenu||ee,eX=(0,o.useRef)(null),e_=(0,o.useRef)(),eU=(0,o.useRef)(),eK=(0,o.useRef)(!1),eW=(0,o.useRef)({width:0,height:0}),e$=(0,o.useRef)(function(){}),eG=A(eX,e_),eV=eG.hoverItem,eq=eG.dispatch,eZ=eG.updateItems,eJ=l(er),eQ=m(eL,"open"),e0=m(eL,"close"),e1=eF.current,e2=(0,o.useCallback)(function(e){var n=k?null==(f=k.current)?void 0:f.getBoundingClientRect():j?{left:j.x,right:j.x,top:j.y,bottom:j.y,width:0,height:0}:null;if(n){e1.menu||(e1.menu=(eB?eB.current:g(eI.current))||window);var t=F(S,eX,e1.menu,eD),r=_({arrow:z,align:X,direction:G,offsetX:ec,offsetY:el,position:q,anchorRect:n,arrowRef:eU,positionHelpers:t}),o=r.arrowX,i=r.arrowY,a=r.x,s=r.y,c=r.computedDirection,u=t.menuRect,l=u.height;if(!e&&"visible"!==J){var f,m,h,p=t.getTopOverflow,v=t.getBottomOverflow,b=eW.current.height,x=v(s);if(x>0||d(x,0)&&d(l,b))m=l-x,h=x;else{var w=p(s);(w<0||d(w,0)&&d(l,b))&&(m=l+w,h=0-w,m>=0&&(s-=w))}m>=0?(l=m,eR({height:m,overflowAmt:h})):eR()}z&&ex({x:o,y:i}),ev({x:a,y:s}),eE(c),eW.current={width:u.width,height:l}}},[z,X,eD,G,ec,el,q,J,j,k,S,eB,eI,e1]);U(function(){eJ&&(e2(),eK.current&&eM()),eK.current=eJ,e$.current=e2},[eJ,e2,eY]),U(function(){ey&&!Q&&(eX.current.scrollTop=0)},[ey,Q]),U(function(){return eZ},[eZ]),(0,o.useEffect)(function(){var e=e1.menu;if(eJ&&e){if(e=e.addEventListener?e:window,!e1.anchors){e1.anchors=[];for(var n=g(eA&&eA.current);n&&n!==e;)e1.anchors.push(n),n=g(n)}var t=ez;if(e1.anchors.length&&"initial"===t&&(t="auto"),"initial"!==t){var r=function(){"auto"===t?f(function(){return e2(!0)}):h(ed,{reason:L.SCROLL})},o=e1.anchors.concat("initial"!==ez?e:[]);return o.forEach(function(e){return e.addEventListener("scroll",r)}),function(){return o.forEach(function(e){return e.removeEventListener("scroll",r)})}}}},[eA,e1,eJ,ed,ez,e2]);var e4=!!ey&&ey.overflowAmt>0;(0,o.useEffect)(function(){if(!e4&&eJ&&H){var e=function(){return f(e2)},n=H.current;return n.addEventListener("scroll",e),function(){return n.removeEventListener("scroll",e)}}},[eJ,e4,H,e2]),(0,o.useEffect)(function(){if("function"==typeof ResizeObserver&&"initial"!==eH){var e=new ResizeObserver(function(e){var n,t,r=e[0],o=r.borderBoxSize,i=r.target;if(o){var s=o[0]||o,c=s.inlineSize,u=s.blockSize;n=c,t=u}else{var l=i.getBoundingClientRect();n=l.width,t=l.height}0!==n&&0!==t&&(d(n,eW.current.width,1)&&d(t,eW.current.height,1)||(0,a.flushSync)(function(){e$.current(),eM()}))}),n=eX.current;return e.observe(n,{box:"border-box"}),function(){return e.unobserve(n)}}},[eH]),(0,o.useEffect)(function(){if(!eJ){eq(P.RESET),e0||eR();return}var e=ea||{},n=e.position,t=e.alwaysUpdate,r=function(){n===B.FIRST?eq(P.FIRST):n===B.LAST?eq(P.LAST):n>=-1&&eq(P.SET_INDEX,void 0,n)};if(t)r();else if(et){var o=setTimeout(function(){eX.current.contains(document.activeElement)||(e_.current.focus(),r())},eQ?170:100);return function(){return clearTimeout(o)}}},[eJ,eQ,e0,et,ea,eq]);var e9=ek>0,e3=(0,o.useMemo)(function(){return{isParentOpen:eJ,isSubmenuOpen:e9,setOpenSubmenuCount:eS,dispatch:eq,updateItems:eZ}},[eJ,e9,eq,eZ]);ey&&(Q?t=ey.overflowAmt:n=ey.height);var e5=(0,o.useMemo)(function(){return{reposSubmenu:eT,overflow:J,overflowAmt:t,parentMenuRef:eX,parentDir:eC}},[eT,J,t,eC]),e7=n>=0?{maxHeight:n,overflow:J}:void 0,e8=(0,o.useMemo)(function(){return{state:er,dir:eC}},[er,eC]),e6=y({block:R,element:"arrow",modifiers:(0,o.useMemo)(function(){return{dir:eC}},[eC]),className:b}),ne=(0,i.jsxs)("ul",c({role:"menu","aria-label":r},v({onKeyDown:function(e){switch(e.key){case M.HOME:eq(P.FIRST);break;case M.END:eq(P.LAST);break;case M.UP:eq(P.DECREASE,eV);break;case M.DOWN:eq(P.INCREASE,eV);break;case M.SPACE:e.target&&-1!==e.target.className.indexOf(R)&&e.preventDefault();return;default:return}e.preventDefault(),e.stopPropagation()},onAnimationEnd:function(){"closing"===er&&eR(),h(eo)}},em),x(ei),{ref:W(D,eX),className:y({block:R,modifiers:e8,className:s}),style:c({},p,e7,{margin:0,display:"closed"===er?"none":void 0,position:"absolute",left:ep.x,top:ep.y}),children:[(0,i.jsx)("div",{ref:e_,tabIndex:-1,style:{position:"absolute",left:0,top:0}}),z&&(0,i.jsx)("div",{className:e6,style:c({},w,{position:"absolute",left:eg.x,top:eg.y}),ref:eU}),(0,i.jsx)(N.Provider,{value:e5,children:(0,i.jsx)(E.Provider,{value:e3,children:(0,i.jsx)(C.Provider,{value:eV,children:ef})})})]}));return T?(0,i.jsx)(I,c({},T,{isOpen:eJ,children:ne})):ne},V=function(e,n){var t=(0,o.memo)(n),r=(0,o.forwardRef)(function(e,n){var r=(0,o.useRef)(null);return(0,i.jsx)(t,c({},e,{itemRef:r,externalRef:n,isHovering:(0,o.useContext)(C)===r.current}))});return r.displayName="WithHovering("+e+")",r},q=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],Z=function(e){return e?6:5},J=function(e,n,t,r,o){clearTimeout(r.current),n(e),t.current=e,o&&o({state:q[e]})},Q=function(e){var n,t,r=void 0===e?{}:e,i=r.enter,a=void 0===i||i,s=r.exit,c=void 0===s||s,u=r.preEnter,l=r.preExit,f=r.timeout,d=r.initialEntered,m=r.mountOnEnter,h=r.unmountOnExit,p=r.onChange,v=(0,o.useState)(d?2:Z(m)),b=v[0],g=v[1],x=(0,o.useRef)(b),w=(0,o.useRef)();"object"==typeof f?(n=f.enter,t=f.exit):n=t=f;var y=(0,o.useCallback)(function(){var e;switch(x.current){case 1:case 0:e=2;break;case 4:case 3:e=Z(h)}void 0!==e&&J(e,g,x,w,p)},[p,h]),R=(0,o.useCallback)(function(e){var r=function e(r){switch(J(r,g,x,w,p),r){case 1:n>=0&&(w.current=setTimeout(y,n));break;case 4:t>=0&&(w.current=setTimeout(y,t));break;case 0:case 3:w.current=setTimeout(function(){return e(r+1)},0)}},o=x.current<=2;"boolean"!=typeof e&&(e=!o),e?o||r(a?u?0:1:2):o&&r(c?l?3:4:Z(h))},[y,p,a,c,u,l,n,t,h]);return(0,o.useEffect)(function(){return function(){return clearTimeout(w.current)}},[]),[q[b],R,y]},ee=function(e){var n=void 0===e?{}:e,t=n.initialOpen,r=n.initialMounted,o=n.unmountOnClose,i=n.transition,a=n.transitionTimeout,s=Q({initialEntered:t,mountOnEnter:!r,unmountOnExit:o,timeout:void 0===a?500:a,enter:m(i,"open"),exit:m(i,"close")}),c=s[0],u=s[1],l=s[2];return[{state:D[c],endTransition:l},u]},en=function(e){var n=ee(e),t=n[0],r=n[1],i=(0,o.useState)(),a=i[0],s=i[1];return[c({menuItemFocus:a},t),r,function(e,n){s({position:e,alwaysUpdate:n}),r(!0)}]},et=function(e,n,t){U(function(){if(!e){var r=n.current;return t(r,!0),function(){t(r)}}},[e,n,t])},er=function(e,n){var t=(0,o.useRef)(n);(0,o.useEffect)(function(){t.current!==n&&h(e,{open:n}),t.current=n},[e,n])},eo=["aria-label","className","disabled","direction","label","openTrigger","onMenuChange","isHovering","instanceRef","itemRef","captureFocus","repositionFlag","itemProps"],ei=["ref","className"],ea=V("SubMenu",function(e){var n,t,r=e["aria-label"],s=e.className,d=e.disabled,m=e.direction,p=e.label,b=e.openTrigger,g=e.onMenuChange,w=e.isHovering,C=e.instanceRef,k=e.itemRef,S=e.itemProps,L=void 0===S?{}:S,D=u(e,eo),I=(0,o.useContext)(O),A=I.rootMenuRef,F=(0,o.useContext)(T),H=F.submenuOpenDelay,z=F.submenuCloseDelay,Y=(0,o.useContext)(N),X=Y.parentMenuRef,_=Y.parentDir,U=Y.overflow,K=(0,o.useContext)(E),$=K.isParentOpen,V=K.isSubmenuOpen,q=K.setOpenSubmenuCount,Z=K.dispatch,J=K.updateItems,Q="visible"!==U,ee=en(I),ea=ee[0],es=ee[1],ec=ee[2],eu=ea.state,el=!!d,ef=l(eu),ed=(0,o.useRef)(null),em=(0,o.useRef)(0),eh=function(){em.current&&(clearTimeout(em.current),em.current=0)},ep=function(){eh(),ev(),el||ec.apply(void 0,arguments)},ev=function(){return!w&&!el&&Z(P.SET,k.current)},eb=function(e){ev(),b||(em.current=setTimeout(function(){return f(ep)},Math.max(e,0)))};et(el,k,J),er(g,ef),(0,o.useEffect)(function(){return function(){return clearTimeout(em.current)}},[]),(0,o.useEffect)(function(){w&&$?k.current.focus():es(!1)},[w,$,es,k]),(0,o.useEffect)(function(){q(function(e){return ef?e+1:Math.max(e-1,0)})},[q,ef]),(0,o.useImperativeHandle)(C,function(){return{openMenu:function(){$&&ep.apply(void 0,arguments)},closeMenu:function(){ef&&(k.current.focus(),es(!1))}}});var eg=(0,o.useMemo)(function(){return{open:ef,hover:w,disabled:el,submenu:!0}},[ef,w,el]),ex=L.ref,ew=L.className,ey=v({onPointerMove:function(){em.current||ef||el||(V?em.current=setTimeout(function(){return eb(H-z)},z):eb(H))},onPointerLeave:function(){eh(),ef||Z(P.UNSET,k.current)},onKeyDown:function(e){if(w)switch(e.key){case M.ENTER:case M.SPACE:case M.RIGHT:"none"!==b&&ep(B.FIRST)}},onClick:function(){return"none"!==b&&ep()}},u(L,ei));return(0,i.jsxs)("li",{className:y({block:R,element:"submenu",className:s}),style:{position:"relative"},role:"presentation",ref:ed,onKeyDown:function(e){var n=!1;switch(e.key){case M.LEFT:ef&&(k.current.focus(),es(!1),n=!0);break;case M.RIGHT:ef||(n=!0)}n&&(e.preventDefault(),e.stopPropagation())},children:[(0,i.jsx)("div",c({role:"menuitem","aria-haspopup":!0,"aria-expanded":ef},x(el,w),ey,{ref:W(ex,k),className:y({block:R,element:j,modifiers:eg,className:ew}),children:(0,o.useMemo)(function(){return h(p,eg)},[p,eg])})),eu&&(n=(0,i.jsx)(G,c({},D,ea,{ariaLabel:r||("string"==typeof p?p:"Submenu"),anchorRef:k,containerRef:Q?A:ed,direction:m||("right"===_||"left"===_?_:"right"),parentScrollingRef:Q&&X,isDisabled:el})),t=A.current,Q&&t?(0,a.createPortal)(n,t):n)]})}),es=function(e,n,t,r){var i=(0,o.useContext)(T).submenuCloseDelay,a=(0,o.useContext)(E),s=a.isParentOpen,c=a.isSubmenuOpen,u=a.dispatch,l=a.updateItems,f=(0,o.useRef)(0),d=function(){t||r||u(P.SET,e.current)},m=function(){r||u(P.UNSET,e.current)};return et(r,e,l),(0,o.useEffect)(function(){return function(){return clearTimeout(f.current)}},[]),(0,o.useEffect)(function(){t&&s&&n.current&&n.current.focus()},[n,t,s]),{setHover:d,onBlur:function(e){t&&!e.currentTarget.contains(e.relatedTarget)&&m()},onPointerMove:function(){c?f.current||(f.current=setTimeout(function(){f.current=0,d()},i)):d()},onPointerLeave:function(e,n){f.current&&(clearTimeout(f.current),f.current=0),n||m()}}},ec=["className","value","href","type","checked","disabled","children","onClick","isHovering","itemRef","externalRef"],eu=["setHover"],el=V("MenuItem",function(e){var n=e.className,t=e.value,r=e.href,a=e.type,s=e.checked,l=e.disabled,f=e.children,d=e.onClick,m=e.isHovering,p=e.itemRef,b=e.externalRef,g=u(e,ec),w=!!l,C=es(p,p,m,w),E=C.setHover,N=u(C,eu),O=(0,o.useContext)(k),T=(0,o.useContext)(S),P="radio"===a,L="checkbox"===a,B=!!r&&!w&&!P&&!L,D=P?T.value===t:!!L&&!!s,I=function(e){if(w){e.stopPropagation(),e.preventDefault();return}var n={value:t,syntheticEvent:e};void 0!==e.key&&(n.key=e.key),L&&(n.checked=!D),P&&(n.name=T.name),h(d,n),P&&h(T.onRadioChange,n),O.handleClick(n,L||P)},A=(0,o.useMemo)(function(){return{type:a,disabled:w,hover:m,checked:D,anchor:B}},[a,w,m,D,B]),F=v(c({},N,{onPointerDown:E,onKeyDown:function(e){if(m)switch(e.key){case M.ENTER:case M.SPACE:B?p.current.click():I(e)}},onClick:I}),g),H=c({role:P?"menuitemradio":L?"menuitemcheckbox":"menuitem","aria-checked":P||L?D:void 0},x(w,m),F,{ref:W(b,p),className:y({block:R,element:j,modifiers:A,className:n}),children:(0,o.useMemo)(function(){return h(f,A)},[f,A])});return B?(0,i.jsx)("li",{role:"presentation",children:(0,i.jsx)("a",c({href:r},H))}):(0,i.jsx)("li",c({},H))}),ef=["aria-label","className","containerProps","initialMounted","unmountOnClose","transition","transitionTimeout","boundingBoxRef","boundingBoxPadding","reposition","submenuOpenDelay","submenuCloseDelay","skipOpen","viewScroll","portal","theming","onItemClick"],ed=(0,o.forwardRef)(function(e,n){var t=e["aria-label"],r=e.className,s=e.containerProps,l=e.initialMounted,f=e.unmountOnClose,d=e.transition,m=e.transitionTimeout,p=e.boundingBoxRef,v=e.boundingBoxPadding,b=e.reposition,g=void 0===b?"auto":b,x=e.submenuOpenDelay,w=void 0===x?300:x,y=e.submenuCloseDelay,R=void 0===y?150:y,j=e.skipOpen,C=e.viewScroll,E=void 0===C?"initial":C,N=e.portal,S=e.theming,P=e.onItemClick,B=u(e,ef),D=(0,o.useRef)(null),I=(0,o.useRef)({}),A=B.anchorRef,F=B.state,H=B.onClose,z=(0,o.useMemo)(function(){return{initialMounted:l,unmountOnClose:f,transition:d,transitionTimeout:m,boundingBoxRef:p,boundingBoxPadding:v,rootMenuRef:D,rootAnchorRef:A,scrollNodesRef:I,reposition:g,viewScroll:E}},[l,f,d,m,A,p,v,g,E]),Y=(0,o.useMemo)(function(){return{submenuOpenDelay:w,submenuCloseDelay:R}},[w,R]),X=(0,o.useMemo)(function(){return{handleClick:function(e,n){e.stopPropagation||h(P,e);var t=e.keepOpen;void 0===t&&(t=n&&e.key===M.SPACE),t||h(H,{value:e.value,key:e.key,reason:L.CLICK})},handleClose:function(e){h(H,{key:e,reason:L.CLICK})}}},[P,H]);if(!F)return null;var _=(0,i.jsx)(O.Provider,{value:z,children:(0,i.jsx)(T.Provider,{value:Y,children:(0,i.jsx)(k.Provider,{value:X,children:(0,i.jsx)(G,c({},B,{ariaLabel:t||"Menu",externalRef:n,containerRef:D,containerProps:{className:r,containerRef:D,containerProps:s,skipOpen:j,theming:S,transition:d,onClose:H}}))})})});return!0===N&&"undefined"!=typeof document?(0,a.createPortal)(_,document.body):N?N.target?(0,a.createPortal)(_,N.target):N.stablePosition?null:_:_}),em=["aria-label","captureFocus","initialOpen","menuButton","instanceRef","onMenuChange"],eh=(0,o.forwardRef)(function(e,n){var t=e["aria-label"],r=e.menuButton,a=e.instanceRef,s=e.onMenuChange,f=u(e,em),d=en(f),m=d[0],b=d[1],g=d[2],x=l(m.state),w=(0,o.useRef)(!1),y=(0,o.useRef)(null),R=(0,o.useCallback)(function(e){b(!1),e.key&&y.current.focus()},[b]),j=h(r,{open:x});if(!j||!j.type)throw Error("Menu requires a menuButton prop.");var C=c({ref:W(j.ref,y)},v({onClick:function(e){w.current||g(0===e.detail?B.FIRST:void 0)},onKeyDown:function(e){switch(e.key){case M.UP:g(B.LAST);break;case M.DOWN:g(B.FIRST);break;default:return}e.preventDefault()}},j.props));"MenuButton"===j.type[p]&&(C.isOpen=x);var E=(0,o.cloneElement)(j,C);return er(s,x),(0,o.useImperativeHandle)(a,function(){return{openMenu:g,closeMenu:function(){return b(!1)}}}),(0,i.jsxs)(o.Fragment,{children:[E,(0,i.jsx)(ed,c({},f,m,{"aria-label":t||("string"==typeof j.props.children?j.props.children:"Menu"),anchorRef:y,ref:n,onClose:R,skipOpen:w}))]})}),ep=["className","isOpen","disabled","children"],ev=Object.defineProperty((0,o.forwardRef)(function(e,n){var t=e.className,r=e.isOpen,a=e.disabled,s=e.children,l=u(e,ep),f=(0,o.useMemo)(function(){return{open:r}},[r]);return(0,i.jsx)("button",c({"aria-haspopup":!0,"aria-expanded":r,"aria-disabled":a||void 0,type:"button",disabled:a},l,{ref:n,className:y({block:"szh-menu-button",modifiers:f,className:t}),children:s}))}),p,{value:"MenuButton"}),eb=t(68003),eg=Object.defineProperty,ex=Object.defineProperties,ew=Object.getOwnPropertyDescriptors,ey=Object.getOwnPropertySymbols,eR=Object.prototype.hasOwnProperty,ej=Object.prototype.propertyIsEnumerable,eC=(e,n,t)=>n in e?eg(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,eE=(e,n)=>{for(var t in n||={})eR.call(n,t)&&eC(e,t,n[t]);if(ey)for(var t of ey(n))ej.call(n,t)&&eC(e,t,n[t]);return e},eN=(e,n)=>ex(e,ew(n)),ek=({headings:e})=>(0,i.jsx)("nav",{className:"toc",children:(0,i.jsx)("ul",{children:e.map((e,n)=>(0,i.jsx)("li",{className:`level-${e.level}`,children:(0,i.jsx)("a",{href:`#${e.anchor}`,children:e.label})},n))})}),eS=(e,n)=>{let[t,r]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let o;return e&&!t?r(!0):!e&&t&&(o=setTimeout(()=>r(!1),n)),()=>{clearTimeout(o)}},[n,e,t]),t},eO=({isOpen:e,children:n,onClose:t,position:r="left",removeWhenClosed:c=!0})=>{let u=(0,o.useRef)(),l=(0,o.useRef)(),f=eS(e,300);return((0,o.useEffect)(()=>{l.current=document.getElementById("drawer-root")||function(){let e=document.createElement("div");return e.setAttribute("id","drawer-root"),e}(),u.current=document.querySelector("body"),u.current.appendChild(l.current);let e=l.current,n=u.current;return()=>{e.remove(),n.style.overflow=""}},[]),(0,o.useEffect)(()=>{u.current&&(e?u.current.style.overflow="hidden":u.current.style.overflow="")},[e]),(0,o.useEffect)(()=>{let n=e=>{"Escape"===e.key&&t()};return e&&window.addEventListener("keyup",n),()=>{window.removeEventListener("keyup",n)}},[e,t]),f||!c||e)?(0,a.createPortal)((0,i.jsxs)("div",{"aria-hidden":e?"false":"true",className:s("drawer-container",{open:e,in:f}),children:[(0,i.jsx)("div",{className:s("drawer",r),role:"dialog",children:n}),(0,i.jsx)("div",{className:"backdrop",onClick:t})]}),l.current):null},eT=(e,n,t=0)=>{let[r,i]=(0,o.useState)(!0),a=e=>()=>{if(n.current){let r=n.current.getBoundingClientRect();r.width>=e.width+t&&r.right<=window.innerWidth?i(!0):i(!1)}};return(0,o.useLayoutEffect)(()=>{if(e.current){let n=e.current.getBoundingClientRect(),t=a(n);return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}}},[e]),r},eM=({label:e,icon:n})=>(0,i.jsxs)(o.Fragment,{children:[n&&(0,i.jsx)("div",{className:"icon",children:n}),(0,i.jsx)("div",{className:"label",children:e})]}),eP=({label:e,links:n,icon:t})=>(0,i.jsx)(ea,{label:(0,i.jsx)(eM,{label:e,icon:t}),children:n.map((e,n)=>(0,i.jsx)(eB,eE({},e),n))}),eL=({label:e,icon:n,href:t})=>(0,i.jsx)(el,{href:t,children:(0,i.jsx)(eM,{label:e,icon:n})}),eB=e=>"links"in e?(0,i.jsx)(eP,eE({},e)):(0,i.jsx)(eL,eE({},e)),eD=({label:e,href:n,icon:t})=>{let o=(0,r.nB)();return(0,i.jsx)(o,{className:"szh-menu-link",href:n,children:(0,i.jsx)(eM,{label:e,icon:t})})},eI=({links:e})=>{let n=(0,o.useRef)(null),t=(0,o.useRef)(null),r=eT(n,t);return(0,i.jsx)("div",{className:"custom-links",ref:t,children:r?(0,i.jsx)("div",{className:"container",ref:n,children:null==e?void 0:e.map((e,n)=>{var t;return"links"in e?(0,i.jsx)(eh,{menuButton:(0,i.jsx)(ev,{children:(0,i.jsx)(eM,eE({},e))}),transition:!0,children:null==(t=e.links)?void 0:t.map((e,n)=>(0,o.createElement)(eB,eN(eE({},e),{key:n})))},n):(0,i.jsx)(eD,eE({},e),n)})}):(0,i.jsx)(eh,{menuButton:(0,i.jsx)(ev,{className:"icon",children:(0,i.jsx)("svg",{focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"MoreVertIcon",children:(0,i.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})})}),transition:!0,children:null==e?void 0:e.map((e,n)=>(0,o.createElement)(eB,eN(eE({},e),{key:n})))})})},eA=({name:e,href:n,current:t})=>{let o=(0,r.nB)();return(0,i.jsx)("li",{children:(0,i.jsx)(o,{className:(null==t?void 0:t.href)===n?"page active":"page",href:n,children:e})})},eF=({isEmpty:e,virtual:n,name:t,href:o,pages:a,sections:s,expanded:c,current:u})=>{let l=(0,r.nB)(),f=!1;(null==u?void 0:u.href)&&o&&(f=u.href.startsWith(o));let{getCollapseProps:d,getToggleProps:m,isExpanded:h}=(0,eb.Z)({defaultExpanded:f||c});return(0,i.jsxs)("div",{className:n?"virtual-section":"section",children:[!n&&(e?(0,i.jsxs)("div",eN(eE({className:["name","empty",(null==u?void 0:u.href)===o?"active":""].join(" ")},m()),{children:[(0,i.jsx)("span",{className:"label",children:t}),(0,i.jsx)("button",{className:"toggle","aria-label":h?"Close":"Open",children:h?"➖":"➕"})]})):(0,i.jsxs)("div",{className:["name",(null==u?void 0:u.href)===o?"active":""].join(" "),children:[(0,i.jsx)(l,{href:o,className:"label",children:t}),(0,i.jsx)("button",eN(eE({className:"toggle"},m()),{"aria-label":h?"Close":"Open",children:h?"➖":"➕"}))]})),(0,i.jsxs)("div",eN(eE({className:"links"},n?[]:d()),{children:[a.length>0&&(0,i.jsx)("ul",{className:"pages",children:a.filter(e=>!e.hide).map(e=>(0,i.jsx)(eA,eN(eE({},e),{current:u}),e.href))}),s.filter(e=>!e.hide).map(e=>(0,i.jsx)(eF,eN(eE({},e),{current:u}),e.href))]}))]})},eH=({pages:e,sections:n,current:t})=>(0,i.jsxs)("nav",{children:[(0,i.jsx)("ul",{children:e.filter(e=>!e.hide).map(e=>(0,i.jsx)(eA,eN(eE({},e),{current:t}),e.href))}),n.filter(e=>!e.hide).map(e=>(0,i.jsx)(eF,eN(eE({},e),{current:t}),e.href))]}),ez=e=>{let n=(0,r.nB)(),t=null,o=null;switch(e.toLowerCase()){case"cc0":t="https://creativecommons.org/publicdomain/zero/1.0/",o="CC0";break;case"cc-by":t="https://creativecommons.org/licenses/by/4.0",o="CC BY";break;case"cc-by-sa":t="https://creativecommons.org/licenses/by-sa/4.0",o="CC BY-SA";break;case"cc-by-nd":t="https://creativecommons.org/licenses/by-nd/4.0",o="CC BY-ND";break;case"cc-by-nc":t="https://creativecommons.org/licenses/by-nc/4.0",o="CC BY-NC";break;case"cc-by-nc-sa":t="https://creativecommons.org/licenses/by-nc-sa/4.0",o="CC BY-NC-SA";break;case"cc-by-nc-nd":t="https://creativecommons.org/licenses/by-nc-nd/4.0",o="CC BY-NC-ND"}return t?(0,i.jsxs)(n,{href:t,rel:"license",children:["Licensed under ",o]}):e},eY=({toc:e,navigation:n,children:t})=>{var a;let s=(0,r.nB)(),c=(0,r.Kf)(),u=(0,r.ZR)(),l=null==n?void 0:n.current,f=(0,r.RI)(),[d,m]=(0,o.useState)(!1),[h,p]=(0,o.useState)(!1);return(0,o.useLayoutEffect)(()=>{let e=()=>{let e=document.documentElement;e.style.setProperty("--app-height",`${window.innerHeight}px`)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,i.jsxs)(o.Fragment,{children:[l&&(0,i.jsxs)(c,{children:[(0,i.jsx)("title",{children:`${l.name} - ${u.name}`}),(0,i.jsx)("meta",{property:"og:title",content:`${l.name} - ${u.name}`},"title"),u.description&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"description",content:u.description}),(0,i.jsx)("meta",{name:"og:description",content:u.description})]}),l.description&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"description",content:l.description}),(0,i.jsx)("meta",{name:"og:description",content:l.description})]}),l.keywords&&(0,i.jsx)("meta",{name:"keywords",content:l.keywords.join(",")})]}),(0,i.jsxs)("div",{className:"main-grid",children:[(0,i.jsxs)("header",{className:(null==(a=null==u?void 0:u.colors)?void 0:a.inverted)?"inverted":void 0,children:[(0,i.jsxs)("div",{className:"mobile-nav",children:[(0,i.jsxs)("button",{"aria-label":"Nav Toggle",className:d?"toggle change":"toggle",onClick:()=>m(!d),children:[(0,i.jsx)("div",{className:"bar1"}),(0,i.jsx)("div",{className:"bar2"}),(0,i.jsx)("div",{className:"bar3"})]}),(0,i.jsx)(eO,{isOpen:d,onClose:()=>m(!1),position:"left",children:(0,i.jsxs)("div",{id:"mobile-sidebar",children:[n&&(0,i.jsx)(eH,eE({},n)),(0,i.jsxs)("a",{className:"author",href:"https://hyperbook.openpatch.org",children:["Powered by ",(0,i.jsx)("b",{children:"Hyperbook"})]})]})})]}),(0,i.jsxs)(s,{className:"branding",href:"/",children:[u.logo&&(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)("img",{alt:"Logo",src:f(u.logo,"public")})}),(0,i.jsx)("div",{className:"name",children:u.name})]}),u.links&&(0,i.jsx)(eI,{links:u.links})]}),(0,i.jsxs)("div",{className:"sidebar",children:[n&&(0,i.jsx)(eH,eE({},n)),(0,i.jsxs)("a",{className:"author",href:"https://hyperbook.openpatch.org",children:["Powered by ",(0,i.jsx)("b",{children:"Hyperbook"})]})]}),e&&(0,i.jsxs)(o.Fragment,{children:[(0,i.jsxs)("button",{className:h?"toc-toggle open":"toc-toggle",onClick:()=>p(!h),title:"Table of Contents",children:[(0,i.jsx)("div",{className:"bar1"}),(0,i.jsx)("div",{className:"bar2"}),(0,i.jsx)("div",{className:"bar3"}),(0,i.jsx)("div",{className:"bar4"})]}),(0,i.jsx)(eO,{isOpen:h,onClose:()=>p(!1),position:"right",children:(0,i.jsx)("div",{id:"toc-sidebar",children:(0,i.jsx)(ek,eE({},e))})})]}),(0,i.jsxs)("main",{children:[t,(0,i.jsxs)("div",{className:"meta",children:[(null==l?void 0:l.repo)&&(0,i.jsx)("a",{className:"edit-github",href:l.repo,children:"object"==typeof u.repo&&u.repo.label?u.repo.label:"✎ GitHub"}),u.vercel&&(0,i.jsx)("a",{className:"vercel",href:"https://vercel.com/?utm_source=openpatch&utm_campaign=oss",children:(0,i.jsx)("img",{src:"https://www.openpatch.org/static/powered-by-vercel-black.svg",width:212,height:44})}),(0,i.jsxs)("span",{className:"copyright",children:[u.license?ez(u.license):`\xa9 Copyright ${new Date().getFullYear()}`,u.author&&(0,i.jsxs)(i.Fragment,{children:[" by ",(0,i.jsx)("a",{href:u.author.url,children:u.author.name})]}),"."]})]})]})]})]})}}}]);