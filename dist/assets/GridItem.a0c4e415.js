import{ct as g,h as t,a9 as m,ap as b,d,r as f,aH as j,V as x,y as w,aG as $,aJ as k,cK as o,al as v,ak as C,S as l,bV as y,ai as I,a_ as M}from"./index.444cf32e.js";import{b as S}from"./Folder.6d3d03cd.js";import{u as O}from"./index.0822ac57.js";import{u as P}from"./index.7c95842d.js";import{I as z}from"./ImageWithError.a65ab1f7.js";import{g as A,O as E}from"./icon.d8c390a8.js";import{M as G}from"./Layout.26451b52.js";const B=e=>{const{isHide:s}=g();if(s(e.obj))return null;const{setPathAs:i}=O(),r=t(b,{get color(){return m()},boxSize:"$12",get as(){return A(e.obj)}}),[c,n]=d(!1),u=f(()=>j()&&(c()||e.obj.selected)),{show:h}=S({id:1});return t(G.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(x,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:w()}},as:P,get href(){return e.obj.name},onMouseEnter:()=>{n(!0),i(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{n(!1)},onContextMenu:a=>{$(()=>{k(!1),o(e.index,!0,!0)}),h(a,{props:e.obj})},get children(){return[t(v,{class:"item-thumbnail",h:"70px",w:"$full","on:click":a=>{e.obj.type===E.IMAGE&&(a.stopPropagation(),a.preventDefault(),C.emit("gallery",e.obj.name))},pos:"relative",get children(){return[t(l,{get when(){return u()},get children(){return t(y,{pos:"absolute",left:"$1",top:"$1","on:click":a=>{a.stopPropagation()},get checked(){return e.obj.selected},onChange:a=>{o(e.index,a.target.checked)}})}}),t(l,{get when(){return e.obj.thumb},fallback:r,get children(){return t(z,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return t(I,{size:"lg"})},fallbackErr:r,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),t(M,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})};export{B as G};