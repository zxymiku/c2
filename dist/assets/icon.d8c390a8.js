import{q as e,r as t,s as d,t as n,v as i,w as p,x as m,y as F,z as c,A as E,C as B,D as u,E as f}from"./index.b98c9c68.js";import{a as x,b as A,c as S,d as I,e as k,f as D,g,h,i as w,j as y}from"./index.127c0307.js";import{g as M,h as v,j as N,k as z,l as G,m as L,n as P,o as U,p as b}from"./index.7c95842d.js";import{ca as C,cb as O}from"./index.444cf32e.js";import{I as R}from"./Layout.26451b52.js";var a=(s=>(s[s.UNKNOWN=0]="UNKNOWN",s[s.FOLDER=1]="FOLDER",s[s.VIDEO=2]="VIDEO",s[s.AUDIO=3]="AUDIO",s[s.TEXT=4]="TEXT",s[s.IMAGE=5]="IMAGE",s))(a||{});const W={"dmg,ipa,plist,tipa":e,"exe,msi":t,"zip,gz,rar,7z,tar,jar,xz":d,apk:R,"db,db-shm,db-wal,sql":M,md:n,epub:v,iso:N,m3u8:i,"doc,docx":p,"xls,xlsx,csv":m,"ppt,pptx":F,pdf:c,"psd,pdd":x,prproj:A,"ai,ait,eps,epsf,ps":S,aep:I,sesx:k,indd:D,go:z,java:G,pnp:g,"py,pyc,pyo,pyi,pyw,pyd,pyx":L,"ts,tsx":h,"yaml,yml,toml":BsFiletypeYml,xml:BsFiletypeXml,sh:w,json:P,"js,mjs,cjs":y,css:U,html:b},X=(s,r)=>{if(s!==a.FOLDER){for(const[l,o]of Object.entries(W))if(l.split(",").includes(r.toLowerCase()))return o}switch(s){case a.FOLDER:return O;case a.VIDEO:return i;case a.AUDIO:return f;case a.TEXT:return u;case a.IMAGE:return B;default:return E}},Y=s=>X(s.type,C(s.name));export{a as O,Y as g};