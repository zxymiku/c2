import{a as m,d as n,W as p,h as e,a2 as u,B as r,cX as g,cY as d,Q as a,cW as f}from"./index.444cf32e.js";import{F as h}from"./File.bc6d3790.js";import"./icon.d8c390a8.js";import"./index.b98c9c68.js";import"./index.127c0307.js";import"./index.7c95842d.js";import"./Layout.26451b52.js";import"./index.0822ac57.js";import"./FolderTree.3bff6822.js";const B=()=>{const t=m(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:c}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(c(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{B as default};