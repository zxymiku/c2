import{b as W,W as j,Q as u,at as N,cR as x,ca as h,av as R,bO as q,bP as z,aP as M,b2 as T,_ as V,ax as B,b3 as S,n as P,o as E,d as $,h as A,Y as D,a6 as H}from"./index.444cf32e.js";import{O as U}from"./icon.d8c390a8.js";import{A as Q,V as Y}from"./video_box.49496d12.js";import{H as G,a as J,A as K,b as X}from"./hls.3583ee17.js";import"./index.b98c9c68.js";import"./index.127c0307.js";import"./index.7c95842d.js";import"./Layout.26451b52.js";import"./index.0822ac57.js";import"./FolderTree.3bff6822.js";const Z=H("<span></span>"),ct=()=>{var v,_,k;const{replace:L,pathname:m}=W(),{proxyLink:c}=j();let p=u.objs.filter(e=>e.type===U.VIDEO);p.length===0&&(p=[u.obj]);let l,o={id:m(),container:"#video-player",title:u.obj.name,volume:.5,autoplay:N("video_autoplay"),autoSize:!1,autoMini:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],settings:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,r){const s=new G;s.loadSource(r),s.attachMedia(e),e.src||(e.src=r)}},lang:["en","zh-cn","zh-tw"].includes(x().toLowerCase())?x().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const f=u.related.filter(e=>{for(const r of[".srt",".ass",".vtt"])if(e.name.endsWith(r))return!0;return!1}),y=u.related.find(e=>{for(const r of[".xml"])if(e.name.endsWith(r))return!0;return!1});if(f.length!=0){let a=function(t){switch(e?"ass":"webvtt"){case"ass":l.subtitle.show=!1,l.emit("artplayer-plugin-ass:visible",t);break;case"webvtt":default:l.subtitle.show=t,l.emit("artplayer-plugin-ass:visible",!1);break}},e=!1;const r=f[0];h(r.name).toLowerCase()==="ass"?(e=!0,(v=o.plugins)==null||v.push(J({subUrl:c(r,!0)}))):o.subtitle={url:c(r,!0),type:h(r.name)};const s=[{id:"setting_subtitle_display",html:"Display",tooltip:"Show",switch:!0,onSwitch:function(t){var n;t.tooltip=t.switch?"Hide":"Show",a(!t.switch);const i=(n=o.settings)==null?void 0:n.find(d=>d.id==="setting_subtitle");return i&&(i.tooltip=t.tooltip),!t.switch}}];f.forEach((t,i)=>{s.push({default:i===0,html:(()=>{const n=Z.cloneNode(!0);return n.style.setProperty("display","inline-block"),n.style.setProperty("max-width","15em"),n.style.setProperty("text-overflow","ellipsis"),n.style.setProperty("overflow","hidden"),R(n,()=>t.name),q(()=>z(n,"title",t.name)),n})(),name:t.name,url:c(t,!0)})}),(_=o.settings)==null||_.push({id:"setting_subtitle",html:"Subtitle",tooltip:"Show",icon:K({size:24}),selector:s,onSelect:function(t){var n,d;h(t.name).toLowerCase()==="ass"?(e=!0,this.emit("artplayer-plugin-ass:switch",t.url),a(!0)):(e=!1,this.subtitle.switch(t.url,{name:t.name}),this.once("subtitleLoad",a.bind(this,!0)));const i=s.find(O=>O.id==="setting_subtitle_display");return i&&!i.switch&&((d=(n=i.$html)==null?void 0:n.click)==null||d.call(n)),i==null?void 0:i.tooltip}})}y&&((k=o.plugins)==null||k.push(X({danmuku:c(y,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})));const[tt,b]=M(()=>T.post("/fs/other",{path:m(),password:V(),method:"video_preview"}));B(async()=>{const e=await b();S(e,r=>{const s=r.video_preview_play_info.live_transcoding_task_list.filter(a=>a.url);if(s.length===0){P.error("No transcoding video found");return}o.url=s[s.length-1].url,o.quality=s.map((a,t)=>({html:a.template_id,url:a.url,default:t===s.length-1})),l=new Q(o),l.on("video:ended",()=>{if(!C())return;const a=p.findIndex(t=>t.name===u.obj.name);a<p.length-1&&L(p[a+1].name)}),w=window.setInterval(F,1e3*60*14)})});let w,g;async function F(){const e=await b();S(e,async r=>{const s=r.video_preview_play_info.live_transcoding_task_list.filter(t=>t.url);if(s.length===0){P.error("No transcoding video found");return}const a=s.map((t,i)=>({html:t.template_id,url:t.url,default:i===s.length-1}));o.quality=a,l.quality=a,g=l.currentTime,await l.switchUrl(a[a.length-1].url),setTimeout(()=>{l.seek=g},1e3)})}E(()=>{l==null||l.destroy(),window.clearInterval(w)});const[C,I]=$();return A(Y,{onAutoNextChange:I,get children(){return A(D,{w:"$full",h:"60vh",id:"video-player"})}})};export{ct as default};