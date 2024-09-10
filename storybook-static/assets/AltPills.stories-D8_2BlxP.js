import{R as a}from"./index-BBkUAzwr.js";const O="_pill_container_ssdpd_7",U="_interactive_layer_ssdpd_19",j="_disabled_ssdpd_33",z="_selected_main_container_ssdpd_37",F="_primary_ssdpd_53",G="_secondary_ssdpd_59",J="_accent_ssdpd_65",L="_primary_minor_ssdpd_71",Q="_secondary_minor_ssdpd_77",V="_accent_minor_ssdpd_83",W="_main_container_ssdpd_89",X="_text_container_ssdpd_132",Y="_selected_text_container_ssdpd_142",s={pill_container:O,interactive_layer:U,disabled:j,selected_main_container:z,primary:F,secondary:G,accent:J,primary_minor:L,secondary_minor:Q,accent_minor:V,main_container:W,text_container:X,selected_text_container:Y},Z=({label:n,onClick:e,value:c,setIdSelected:t,isDisabled:i})=>{const o=()=>{i||(e==null||e(c),t==null||t(c))},u=g=>{g.key==="Enter"&&(g.preventDefault(),o())};return a.createElement("div",{className:s.interactive_layer,onKeyDown:u,onClick:o,tabIndex:i?-1:0},a.createElement("button",{disabled:i,"aria-label":"Cerrar",className:s.main_container,tabIndex:-1},a.createElement("p",{className:s.text_container},n)))},ee=({label:n,color:e})=>{const c=`${s.selected_main_container} ${s[e||"primary"]}`;return a.createElement("div",{className:s.interactive_layer},a.createElement("button",{className:c,tabIndex:-1},a.createElement("p",{className:s.selected_text_container},n)))},C=({options:n,color:e,selected:c})=>{const[t,i]=a.useState(c||n[0].value);return a.createElement("div",{className:s.pill_container},n.map(o=>{const u=o.value!==t?Z:ee;return a.createElement(u,{key:o.value,...o,color:o.color||e,setIdSelected:i})}))};C.__docgenInfo={description:"",methods:[],displayName:"AltPills",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"PillProps"}],raw:"PillProps[]"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'accent' | 'primary_minor' | 'secondary_minor' | 'accent_minor'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'primary_minor'"},{name:"literal",value:"'secondary_minor'"},{name:"literal",value:"'accent_minor'"}]},description:""},selected:{required:!1,tsType:{name:"string"},description:""}}};const ae={title:"Beta/AltPills",component:C,argTypes:{color:{control:"select",options:["primary","secondary","accent","primary_minor","secondary_minor","accent_minor"]},selected:{control:"text"},options:{argTypes:{label:{control:"text"},value:{control:"text"},onClick:{action:"clicked"}}}}},I=[{label:"Pill 1",value:"pill1"},{label:"Pill 2",value:"pill2",isDisabled:!1},{label:"Pill 3",value:"pill3"}],r={args:{options:I,color:"primary",selected:"pill1"}},l={args:{...r.args,color:"secondary"}},m={args:{...r.args,color:"accent"}},d={args:{...r.args,color:"primary_minor"}},p={args:{...r.args,color:"secondary_minor"}},_={args:{...r.args,color:"accent_minor"}},y={args:{options:I.map((n,e)=>({...n,isDisabled:e===1})),color:"primary",selected:"pill1"}};var P,v,x;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    options,
    color: 'primary',
    selected: 'pill1'
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,E,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var f,A,D;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    color: 'accent'
  }
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var N,M,T;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    color: 'primary_minor'
  }
}`,...(T=(M=d.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var q,w,h;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    color: 'secondary_minor'
  }
}`,...(h=(w=p.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var k,H,K;_.parameters={..._.parameters,docs:{...(k=_.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    color: 'accent_minor'
  }
}`,...(K=(H=_.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var R,$,B;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    options: options.map((option, index) => ({
      ...option,
      isDisabled: index === 1
    })),
    // Hace que la segunda píldora esté deshabilitada
    color: 'primary',
    selected: 'pill1'
  }
}`,...(B=($=y.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const ne=["Primary","Secondary","Accent","PrimaryMinor","SecondaryMinor","AccentMinor","DisabledPill"];export{m as Accent,_ as AccentMinor,y as DisabledPill,r as Primary,d as PrimaryMinor,l as Secondary,p as SecondaryMinor,ne as __namedExportsOrder,ae as default};
