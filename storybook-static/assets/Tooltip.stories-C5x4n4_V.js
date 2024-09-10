import{r as q,R as i}from"./index-BBkUAzwr.js";import{B as S}from"./Button-yh1k76xc.js";const L="_tooltipContainer_134gc_8",M="_trigger_134gc_13",$="_rich_134gc_18",k="_light_134gc_34",w="_tint_134gc_37",V="_plain_134gc_41",A="_top_134gc_85",I="_bottom_134gc_92",O="_left_134gc_99",j="_right_134gc_106",e={tooltipContainer:L,trigger:M,rich:$,light:k,tint:w,plain:V,top:A,bottom:I,left:O,right:j},y=({content:v,children:b,position:E,type:x,mode:B})=>{const[C,s]=q.useState(!1),N=()=>{s(!0)},R=()=>{s(!1)};return i.createElement("div",{className:`${e.tooltipContainer}`,onMouseEnter:N,onMouseLeave:R},i.createElement("div",{className:e.trigger},b),i.createElement("div",{className:`${e[x]} ${e[B]} ${e[E]}`,style:{display:C?"block":"none"}},v))};y.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!0,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},type:{required:!0,tsType:{name:"union",raw:"'plain' | 'rich'",elements:[{name:"literal",value:"'plain'"},{name:"literal",value:"'rich'"}]},description:""},mode:{required:!0,tsType:{name:"union",raw:"'light' | 'tint'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'tint'"}]},description:""}}};const F={title:"BETA/Tooltip",component:y,argTypes:{position:{control:"radio",options:["top","bottom","left","right"]},type:{control:"radio",options:["plain","rich"]},mode:{control:"radio",options:["light","tint"]},content:{control:"text"}}},t={args:{position:"top",type:"plain",mode:"light",children:i.createElement(S,{color:"accent",type:"outline",text:"hover me",onClick:()=>{}}),content:"Tooltip content"}},o={args:{...t.args,position:"bottom"}},r={args:{...t.args,position:"left"}},n={args:{...t.args,position:"right"}};var a,c,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    position: 'top',
    type: 'plain',
    mode: 'light',
    children: <Button color='accent' type='outline' text='hover me' onClick={() => {}} />,
    content: 'Tooltip content'
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,m,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Top.args,
    position: 'bottom'
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var d,u,_;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Top.args,
    position: 'left'
  }
}`,...(_=(u=r.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var h,T,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Top.args,
    position: 'right'
  }
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const G=["Top","Bottom","Left","Right"];export{o as Bottom,r as Left,n as Right,t as Top,G as __namedExportsOrder,F as default};
