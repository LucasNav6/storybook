import{r as o,R as n}from"./index-BBkUAzwr.js";import{A as W}from"./ArrowDropDown-Lzn461cu.js";const B="_interactive_layer_xtf17_7",z="_content_xtf17_23",F="_container_xtf17_27",G="_primary_xtf17_81",H="_secondary_xtf17_85",J="_accent_xtf17_89",M="_text_container_xtf17_100",Q="_dropdown_options_xtf17_106",U="_dropdown_option_xtf17_106",X="_selected_xtf17_145",Y="_option_disabled_xtf17_148",Z="_img_xtf17_166",a={interactive_layer:B,content:z,container:F,"material-symbols-outlined":"_material-symbols-outlined_xtf17_47",primary:G,secondary:H,accent:J,text_container:M,dropdown_options:Q,dropdown_option:U,selected:X,option_disabled:Y,img:Z},T=({options:d,onClick:A,color:R="primary",isDisabled:j=!1,text:g})=>{const[_,m]=o.useState(!1),[t,K]=o.useState({label:g,value:"-1"}),p=o.useRef(null),L=()=>{m(!_)},y=e=>{A(e),K(e),m(!1)},V=(e,u)=>{e.key==="Enter"&&(e.preventDefault(),y(u))},b=e=>{p.current&&!p.current.contains(e.target)&&m(!1)};return o.useEffect(()=>(document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}),[]),n.createElement("div",{className:`${a.interactive_layer}`,onClick:L,ref:p},n.createElement("div",{className:a.content},n.createElement("button",{className:`${a.container} ${a[R]}`,disabled:j},n.createElement("p",{className:a.text_container},t.value!=="-1"?t.src?n.createElement("img",{className:a.img,alt:t.label,src:t.src}):t.label:g),n.createElement(W,null)),_&&n.createElement("div",{className:a.dropdown_options},d.map(e=>n.createElement("div",{key:e.value,className:`${a.dropdown_option} ${e.isDisabled?a.option_disabled:""} ${t.value===e.value?a.selected:""}`,onClick:()=>y(e),tabIndex:e.isDisabled?-1:0,onKeyDown:e.isDisabled?void 0:u=>V(u,e)},e.src?n.createElement("img",{className:a.img,src:e.src,alt:e.label}):e.label)))))};T.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string | number;
  isDisabled?: boolean;
  src?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"src",value:{name:"string",required:!1}}]}}],raw:"OptionItem[]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedOption: OptionItem) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  label: string;
  value: string | number;
  isDisabled?: boolean;
  src?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"isDisabled",value:{name:"boolean",required:!1}},{key:"src",value:{name:"string",required:!1}}]}},name:"selectedOption"}],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'accent'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!0,tsType:{name:"string"},description:""}}};const $=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2",isDisabled:!0},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"},{label:"Option 6",value:"6"},{label:"Option 7",value:"7"},{label:"Option 8",value:"8"}],ne={title:"Beta/Dropdown",component:T,argTypes:{color:{control:"select",options:["primary","secondary","accent"]},isDisabled:{control:"boolean"},text:{control:"text"}}},r={args:{options:$,onClick:d=>console.log(d),color:"primary",text:"Choose an option"}},s={args:{...r.args,color:"secondary"}},l={args:{...r.args,color:"accent"}},i={args:{...r.args,options:[...$,{label:"Option with Image",value:"15",src:"https://www.w3schools.com/howto/img_avatar.png"}]}},c={args:{...r.args,isDisabled:!0}};var w,v,f;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    options,
    onClick: (option: any) => console.log(option),
    color: 'primary',
    text: 'Choose an option'
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var D,x,O;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...PrimaryDropdown.args,
    color: 'secondary'
  }
}`,...(O=(x=s.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var k,h,E;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...PrimaryDropdown.args,
    color: 'accent'
  }
}`,...(E=(h=l.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var q,I,S;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...PrimaryDropdown.args,
    options: [...options, {
      label: 'Option with Image',
      value: '15',
      src: 'https://www.w3schools.com/howto/img_avatar.png'
    }]
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var N,C,P;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...PrimaryDropdown.args,
    isDisabled: true
  }
}`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const re=["PrimaryDropdown","SecondaryDropdown","AccentDropdown","WithImageInOption","DisabledDropdown"];export{l as AccentDropdown,c as DisabledDropdown,r as PrimaryDropdown,s as SecondaryDropdown,i as WithImageInOption,re as __namedExportsOrder,ne as default};
