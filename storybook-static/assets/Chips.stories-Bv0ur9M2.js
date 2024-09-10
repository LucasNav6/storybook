import{R as l}from"./index-BBkUAzwr.js";import{C as E}from"./CloseSmall-C_9n5bZc.js";const F="_interactive_layer_1w0ui_7",L="_filled_bad_minor_1w0ui_19",T="_filled_good_minor_1w0ui_34",q="_filled_beware_minor_1w0ui_49",N="_filled_bad_1w0ui_19",A="_filled_good_1w0ui_34",P="_filled_beware_1w0ui_49",$="_outline_bad_1w0ui_109",x="_outline_good_1w0ui_125",D="_outline_beware_1w0ui_141",R="_filled_primary_minor_1w0ui_157",k="_filled_secondary_minor_1w0ui_171",B="_filled_accent_minor_1w0ui_185",I="_filled_primary_1w0ui_157",J="_filled_secondary_1w0ui_171",V="_filled_accent_1w0ui_185",X="_outline_primary_1w0ui_244",j="_outline_secondary_1w0ui_259",G="_outline_accent_1w0ui_274",H="_outline_standard_1w0ui_289",K="_main_container_1w0ui_304",M="_small_1w0ui_316",Q="_large_1w0ui_319",U="_state_layer_1w0ui_334",W="_icon_1w0ui_351",Y="_close_button_1w0ui_360",Z="_filled_disabled_1w0ui_373",ee="_outline_disabled_1w0ui_389",e={interactive_layer:F,filled_bad_minor:L,filled_good_minor:T,filled_beware_minor:q,filled_bad:N,filled_good:A,filled_beware:P,outline_bad:$,outline_good:x,outline_beware:D,filled_primary_minor:R,filled_secondary_minor:k,filled_accent_minor:B,filled_primary:I,filled_secondary:J,filled_accent:V,outline_primary:X,outline_secondary:j,outline_accent:G,outline_standard:H,main_container:K,small:M,large:Q,state_layer:U,icon:W,close_button:Y,filled_disabled:Z,outline_disabled:ee},v=({label:C,icon:r,onClose:S,type:t,color:h,size:z="small",isDisabled:O})=>l.createElement("div",{className:e.interactive_layer},l.createElement("div",{className:`${e.main_container} ${e[z]} ${e[t+"_"+h]} ${O?e[t+"_disabled"]:""} `},l.createElement("div",{className:e.state_layer},r&&l.createElement("span",{className:e.icon},r),C,l.createElement("button",{onClick:S,className:e.close_button},l.createElement(E,null)))));v.__docgenInfo={description:"",methods:[],displayName:"Chips",props:{label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"JSX.Element"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'outline' | 'filled'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:`"primary" | "secondary" | "accent" | "primary_minor" | "secondary_minor" | "accent_minor"
| "bad" | "good" | "beware" | "bad_minor" | "good_minor" | "beware_minor"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"primary_minor"'},{name:"literal",value:'"secondary_minor"'},{name:"literal",value:'"accent_minor"'},{name:"literal",value:'"bad"'},{name:"literal",value:'"good"'},{name:"literal",value:'"beware"'},{name:"literal",value:'"bad_minor"'},{name:"literal",value:'"good_minor"'},{name:"literal",value:'"beware_minor"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:"'small'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:""}}};const oe={title:"Beta/Chips",component:v,argTypes:{type:{control:"select",options:["outline","filled"]},color:{control:"select",options:["primary","secondary","accent","primary_minor","secondary_minor","accent_minor","bad","good","beware","bad_minor","good_minor","beware_minor"]},size:{control:"select",options:["small","large"]},isDisabled:{control:"boolean"},onClose:{action:"closed"}}},a={args:{label:"Primary Filled Small",type:"filled",color:"primary",size:"small",onClose:()=>console.log("Chip closed!")}},o={args:{label:"Primary Outline Small",type:"outline",color:"primary",size:"small",onClose:()=>console.log("Chip closed!")}},n={args:{label:"Accent Filled Large",type:"filled",color:"accent",size:"large",onClose:()=>console.log("Chip closed!")}},i={args:{label:"Accent Outline Large",type:"outline",color:"accent",size:"large",onClose:()=>console.log("Chip closed!")}};var s,_,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Primary Filled Small',
    type: 'filled',
    color: 'primary',
    size: 'small',
    onClose: () => console.log('Chip closed!')
  }
}`,...(c=(_=a.parameters)==null?void 0:_.docs)==null?void 0:c.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Primary Outline Small',
    type: 'outline',
    color: 'primary',
    size: 'small',
    onClose: () => console.log('Chip closed!')
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,y,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Accent Filled Large',
    type: 'filled',
    color: 'accent',
    size: 'large',
    onClose: () => console.log('Chip closed!')
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,b,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Accent Outline Large',
    type: 'outline',
    color: 'accent',
    size: 'large',
    onClose: () => console.log('Chip closed!')
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const ne=["FilledSmall","OutlineSmall","FilledLarge","OutlineLarge"];export{n as FilledLarge,a as FilledSmall,i as OutlineLarge,o as OutlineSmall,ne as __namedExportsOrder,oe as default};
