import{R as e}from"./index-BBkUAzwr.js";import{B as M}from"./Badge-CeRD1IxB.js";const F="_interactive_layer_1emi7_8",H="_locked_1emi7_21",O="_state_unLocked_1emi7_25",V="_state_layer_extra_small_1emi7_35",G="_state_layer_small_1emi7_40",J="_state_layer_medium_1emi7_45",Q="_state_layer_larg_1emi7_50",U="_state_layer_extra_large_1emi7_55",X="_avatar_1emi7_60",Y="_extra_small_1emi7_74",ee="_small_1emi7_78",ae="_medium_1emi7_82",te="_large_1emi7_86",se="_extra_large_1emi7_90",re="_img_1emi7_94",le="_initials_xs_1emi7_100",me="_initials_small_1emi7_110",ie="_initials_medium_1emi7_119",oe="_initials_large_1emi7_128",ne="_initials_extra_large_1emi7_137",_e="_svg_extra_small_1emi7_146",ce="_svg_small_1emi7_150",ge="_svg_medium_1emi7_154",de="_svg_large_1emi7_158",pe="_svg_extra_large_1emi7_162",ue="_badge_1emi7_167",a={interactive_layer:F,locked:H,state_unLocked:O,state_layer_extra_small:V,state_layer_small:G,state_layer_medium:J,state_layer_larg:Q,state_layer_extra_large:U,avatar:X,extra_small:Y,small:ee,medium:ae,large:te,extra_large:se,img:re,initials_xs:le,initials_small:me,initials_medium:ie,initials_large:oe,initials_extra_large:ne,svg_extra_small:_e,svg_small:ce,svg_medium:ge,svg_large:de,svg_extra_large:pe,badge:ue},d=({src:t,alt:C,size:s,text:u,badge:v,locked:w=!1,onClick:p})=>{let r;if(t)r=e.createElement("img",{className:a.img,src:t,alt:C});else if(u){const l=u.split(" ").map(j=>j[0]).join("").slice(0,2);r=e.createElement("div",{className:a["initials_"+s]},l)}else r=e.createElement("div",null,e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:a["svg_"+s],viewBox:"0 -960 960 960",width:"24"},e.createElement("path",{fill:"#5F5E61",d:"M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"})));const K=` ${a.avatar} ${a[s]}`,P=l=>{p&&l.key==="Enter"&&(l.preventDefault(),p())};return e.createElement("div",{className:`${a.interactive_layer} ${a.locked}`,onClick:p,tabIndex:w?-1:0,onKeyDown:P},e.createElement("div",{className:` ${w?null:a.state_unLocked} ${a["state_layer_"+s]} `},e.createElement("div",{className:K},r,v&&e.createElement("div",{className:a.badge}," ",v," "))))};d.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},size:{required:!0,tsType:{name:"union",raw:"'extra_small' | 'small' | 'medium' | 'large' | 'extra_large'",elements:[{name:"literal",value:"'extra_small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'extra_large'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badge:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const xe={title:"Beta/Avatar",component:d,argTypes:{size:{control:"select",options:["extra_small","small","medium","large","extra_large"]},src:{control:"text"},alt:{control:"text"},text:{control:"text"},locked:{control:"boolean"},children:{control:"none"},onClick:{action:"clicked"}}},m={args:{size:"extra_small",src:"https://www.w3schools.com/howto/img_avatar.png",alt:"Avatar Image"}},i={args:{size:"small",src:"https://www.w3schools.com/howto/img_avatar.png",alt:"Avatar Image"}},o={args:{size:"medium",src:"https://www.w3schools.com/howto/img_avatar.png",alt:"Avatar Image"}},n={args:{size:"large",src:"https://www.w3schools.com/howto/img_avatar.png",alt:"Avatar Image"}},_={args:{size:"extra_large",src:"https://www.w3schools.com/howto/img_avatar.png",alt:"Avatar Image"}},c={args:{size:"medium",text:"CP"},render:t=>e.createElement(d,{...t},e.createElement(M,{size:"medium",text:"+999",type:"label",color:"good"}))},g={args:{size:"medium"},render:t=>e.createElement(d,{...t},e.createElement(M,{size:"medium",type:"point",color:"bad"}))};var x,h,y;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'extra_small',
    src: 'https://www.w3schools.com/howto/img_avatar.png',
    alt: 'Avatar Image'
  }
}`,...(y=(h=m.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var I,q,f;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'small',
    src: 'https://www.w3schools.com/howto/img_avatar.png',
    alt: 'Avatar Image'
  }
}`,...(f=(q=i.parameters)==null?void 0:q.docs)==null?void 0:f.source}}};var E,T,z;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    src: 'https://www.w3schools.com/howto/img_avatar.png',
    alt: 'Avatar Image'
  }
}`,...(z=(T=o.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var A,W,b;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'large',
    src: 'https://www.w3schools.com/howto/img_avatar.png',
    alt: 'Avatar Image'
  }
}`,...(b=(W=n.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var k,N,S;_.parameters={..._.parameters,docs:{...(k=_.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'extra_large',
    src: 'https://www.w3schools.com/howto/img_avatar.png',
    alt: 'Avatar Image'
  }
}`,...(S=(N=_.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var L,B,D;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    text: 'CP'
  },
  render: args => <Avatar {...args}>
      <Badge size="medium" text="+999" type="label" color="good" />
    </Avatar>
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var R,Z,$;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  },
  render: args => <Avatar {...args}>
      <Badge size="medium" type="point" color="bad" />
    </Avatar>
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const he=["ExtraSmallWithImage","SmallWithImage","MediumWithImage","LargeWithImage","ExtraLargeWithImage","WithInitials","Default"];export{g as Default,_ as ExtraLargeWithImage,m as ExtraSmallWithImage,n as LargeWithImage,o as MediumWithImage,i as SmallWithImage,c as WithInitials,he as __namedExportsOrder,xe as default};
