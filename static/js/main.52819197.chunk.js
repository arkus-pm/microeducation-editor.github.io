(this["webpackJsonpjsonforms-react-seed"]=this["webpackJsonpjsonforms-react-seed"]||[]).push([[0],{607:function(e){e.exports=JSON.parse('{"type":"object","properties":{"version":{"type":"number","minimum":0,"default":1},"contentURL":{"type":"string"},"courses":{"type":"array","items":{"type":"object","properties":{"flowTopic":{"type":"string","default":"newTopic"},"version":{"type":"number","default":1,"minimum":0},"id":{"type":"string","default":"$uuid"},"card":{"type":"object","properties":{"title":{"type":"string","default":"New card title"},"imageURL":{"type":"string","default":"https://i.onthe.io/ttmdhw747dgvun60p.f9d74fae.jpeg"},"description":{"type":"string","default":"New card description"},"header":{"type":"string","default":"Microlearning"}},"default":{"title":"New card title","imageURL":"https://i.onthe.io/ttmdhw747dgvun60p.f9d74fae.jpeg","overview":"New card overview","header":"Microlearning"},"required":["title","imageURL","description"]},"preview":{"type":"object","properties":{"title":{"type":"string"},"imageURL":{"type":"string"},"overview":{"type":"string"}},"default":{"title":"New preview title","imageURL":"https://i.onthe.io/ttmdhw747dgvun60p.f9d74fae.jpeg","overview":"New preview overview"},"required":["title","imageURL","overview"]},"episodes":{"type":"array","items":{"type":"object","properties":{"title":{"type":"string","default":"New episode title"},"description":{"type":"string","default":"New episode description"},"position":{"type":"integer","minimum":0,"default":1},"id":{"type":"string","default":"$uuid"},"stories":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","default":"$uuid"},"version":{"type":"number","minimum":0,"default":1},"position":{"type":"integer","minimum":0,"default":1},"content":{"type":"object","properties":{"type":{"type":"string","enum":["textIllustration","question","quote"]},"illustrationURL":{"type":"string"},"question":{"type":"string"},"questionFooter":{"type":"string"},"header":{"type":"string"},"text":{"type":"string"},"title":{"type":"string"},"quote":{"type":"string"},"answerOptions":{"type":"array","items":{"type":"object","properties":{"text":{"type":"string","default":""},"isCorrect":{"type":"boolean","default":false},"explanation":{"type":"object","properties":{"header":{"type":"string","default":""},"text":{"type":"string","default":""}},"default":{"header":"","text":""}}}}},"continueButtonTitle":{"type":"string"}},"default":{"type":"textIllustration","illustrationURL":"https://i.onthe.io/ttmdhw747dgvun60p.f9d74fae.jpeg","header":"New story header","text":"New story text"},"required":["type"]}},"required":["id","version","position","content"],"default":{"id":"60e5daf0-ac93-4550-b443-aaf7158cf356","version":1,"position":1}}}},"required":["id","position","title","description","stories"]}}},"required":["version","id","flowTopic","card","preview","episodes"]}}},"required":["version","courses"]}')},608:function(e){e.exports=JSON.parse('{"type":"VerticalLayout","elements":[{"type":"Control","scope":"#/properties/version"},{"type":"Control","scope":"#/properties/contentURL"},{"type":"ListWithDetail","scope":"#/properties/courses","options":{"detail":{"type":"Categorization","elements":[{"type":"Category","label":"Data","elements":[{"type":"Control","scope":"#/properties/flowTopic"},{"type":"Control","scope":"#/properties/version"},{"type":"Control","scope":"#/properties/id","options":{"readonly":true}}]},{"type":"Category","label":"Card","elements":[{"type":"Control","scope":"#/properties/card","options":{"detail":{"type":"VerticalLayout","elements":[{"type":"Control","scope":"#/properties/header"},{"type":"Control","scope":"#/properties/title"},{"type":"Control","scope":"#/properties/imageURL"},{"type":"Control","scope":"#/properties/description"}]}}}]},{"type":"Category","label":"Preview","elements":[{"type":"Control","scope":"#/properties/preview","options":{"detail":{"type":"VerticalLayout","elements":[{"type":"Control","scope":"#/properties/title"},{"type":"Control","scope":"#/properties/imageURL"},{"type":"Control","scope":"#/properties/overview"}]}}}]},{"type":"Category","label":"Episodes","elements":[{"type":"Control","scope":"#/properties/episodes","options":{"showSortButtons":true,"detail":{"type":"Categorization","elements":[{"type":"Category","label":"Data","elements":[{"type":"Control","scope":"#/properties/id","options":{"readonly":true}},{"type":"Control","scope":"#/properties/title"},{"type":"Control","scope":"#/properties/description"}]},{"type":"Category","label":"Stories","elements":[{"type":"Control","scope":"#/properties/stories","options":{"detail":{"type":"VerticalLayout","elements":[{"type":"Control","scope":"#/properties/id","options":{"readonly":true}},{"type":"Control","scope":"#/properties/version"},{"type":"Control","scope":"#/properties/content","options":{"detail":{"type":"VerticalLayout","elements":[{"type":"Control","scope":"#/properties/type"},{"type":"Control","scope":"#/properties/illustrationURL","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"textIllustration"},{"const":"question"}]}}}},{"type":"Control","scope":"#/properties/header","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"textIllustration"}]}}}},{"type":"Control","scope":"#/properties/text","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"textIllustration"},{"const":"quote"}]}}}},{"type":"Control","scope":"#/properties/question","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"question"}]}}}},{"type":"Control","scope":"#/properties/questionFooter","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"question"}]}}}},{"type":"Control","scope":"#/properties/answerOptions","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"question"}]}}}},{"type":"Control","scope":"#/properties/title","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"quote"}]}}}},{"type":"Control","scope":"#/properties/continueButtonTitle","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"quote"}]}}}}]}}}]},"showSortButtons":true}}]}]}}}]}]}}}]}')},920:function(e,t,o){},976:function(e,t,o){"use strict";o.r(t);var i,r=o(1),n=o(161),s=o(1023),c=o(420),a=o(137),p=o.n(a),l=o(339),d=o(10),u=o(19),j=o(0),m=o(22),y=o(604),f=o(558),b=o(334),h=o(574),O=(o(920),o(607)),x=o(608),g=o(418),v=o(409),w=function(e){var t=e.id,o=e.value,i=e.updateValue,n=Object(j.useState)(null),s=Object(d.a)(n,2),c=s[0],a=s[1];return Object(r.jsxs)("div",{id:"#/properties/rating",className:"rating",children:[Object(r.jsx)(v.a,{shrink:!0,style:{marginTop:"0.8em"},children:"Rating"}),Object(r.jsx)("div",{style:{cursor:"pointer",fontSize:"18px"},children:[0,1,2,3,4].map((function(e){var n=null!==c&&void 0!==c?c:o;return Object(r.jsx)("span",{onMouseOver:function(){return a(e+1)},onMouseOut:function(){return a(null)},onClick:function(){return i(e+1)},children:e<n?"\u2605":"\u2606"},"".concat(t,"_").concat(e))}))})]})},C=Object(m.withJsonFormsControlProps)((function(e){var t=e.data,o=e.handleChange,i=e.path;return Object(r.jsx)(w,{value:t,updateValue:function(e){return o(i,e)}})})),N=o(20),S=Object(N.rankWith)(3,Object(N.scopeEndsWith)("rating")),q=o(1021),L=o(1022),k=o(559),R=o(560),J=o(561),U=Object(N.createAjv)({useDefaults:!0}),B=Object(q.a)({episodeDescription:{textAlign:"left",overflowY:"auto",textOverflow:"ellipsis",display:"-webkit-box","-webkit-line-clamp":5,"line-clamp":5,"-webkit-box-orient":"vertical"},storyDescription:{textAlign:"left",overflowY:"auto",textOverflow:"ellipsis",display:"-webkit-box","-webkit-line-clamp":15,"line-clamp":15,"-webkit-box-orient":"vertical"},fauxButton:{textTransform:(i="none","".concat(i," !important"))},container:{padding:"1em",width:"100%",height:"auto"},title:{textAlign:"left"},dataContent:{overflow:"auto",display:"flex",justifyContent:"left",borderRadius:"0.25em",backgroundColor:"#fefefe",marginBottom:"1rem",maxHeight:"300px",width:"100%"},resetButton:{margin:"auto !important",display:"block !important"},demoform:{margin:"auto",padding:"1rem"}}),W={},H=[].concat(Object(u.a)(g.materialRenderers),[{tester:S,renderer:C}]),D=function(){var e=B(),t=Object(j.useState)(W),o=Object(d.a)(t,2),i=o[0],n=o[1],s=Object(j.useMemo)((function(){return JSON.stringify(i,null,2)}),[i]),c=Object(j.useState)({preview:!1}),a=Object(d.a)(c,2),p=a[0],u=a[1];console.log(JSON.stringify(p));var v=Object(j.useState)(!0),w=Object(d.a)(v,2),C=w[0],N=w[1];function S(t){if(t)return t.map((function(t,o){var i,n=p;return Object(r.jsx)(y.a,{item:!0,children:Object(r.jsx)(f.a,{className:e.fauxButton,onClick:function(){n.course=""+o,n.episode=null,u(Object(l.a)({},n)),console.log(n)},children:Object(r.jsxs)(k.a,{sx:{maxWidth:345},raised:o==p.course,children:[Object(r.jsx)(J.a,{component:"img",height:"140",image:t.card.imageURL,alt:"green iguana"}),Object(r.jsxs)(R.a,{children:[Object(r.jsx)(b.a,{gutterBottom:!0,variant:"h6",className:e.title,component:"div",children:t.card.title}),Object(r.jsx)(b.a,{variant:"body1",className:e.title,color:"text.secondary",children:t.card.description}),Object(r.jsxs)(b.a,{variant:"body2",className:e.title,color:"text.secondary",children:["Episodes: ",(null===(i=t.episodes)||void 0===i?void 0:i.length)||0]})]})]})})})}))}function q(t,o){var i=p;if(t)return t.map((function(t,o){var n;return Object(r.jsx)(y.a,{item:!0,children:Object(r.jsx)(f.a,{className:e.fauxButton,onClick:function(){i.episode=""+o,u(Object(l.a)({},i)),console.log(i)},children:Object(r.jsx)(k.a,{sx:{maxWidth:345},raised:o==p.episode,children:Object(r.jsxs)(R.a,{children:[Object(r.jsx)(b.a,{gutterBottom:!0,variant:"h6",className:e.title,component:"div",children:t.title}),Object(r.jsx)(b.a,{variant:"caption",className:e.episodeDescription,color:"text.secondary",children:t.description}),Object(r.jsxs)(b.a,{variant:"caption",className:e.title,color:"text.secondary",children:["Stories: ",(null===(n=t.stories)||void 0===n?void 0:n.length)||0]})]})})})})}))}function D(t,o){if(t)return t.map((function(t,o){return Object(r.jsx)(y.a,{item:!0,children:Object(r.jsx)(f.a,{className:e.fauxButton,children:Object(r.jsxs)(k.a,{sx:{maxWidth:250},children:[Object(r.jsx)(J.a,{component:"img",height:"200",image:t.content.illustrationURL,alt:"green iguana"}),Object(r.jsxs)(R.a,{children:[Object(r.jsx)(b.a,{gutterBottom:!0,variant:"h6",className:e.title,component:"div",children:t.content.header}),Object(r.jsx)(b.a,{variant:"caption",className:e.storyDescription,color:"text.secondary",children:t.content.text})]})]})})})}))}function T(){var e=i.courses;return console.log(e),Object(r.jsxs)(y.a,{container:!0,direction:"row",xs:12,children:[Object(r.jsx)(y.a,{container:!0,children:Object(r.jsxs)("a",{children:[" ",JSON.stringify(p)," "]})}),Object(r.jsx)(y.a,{item:!0,direction:"column",xs:2,children:S(e)}),Object(r.jsx)(y.a,{item:!0,direction:"column",xs:2,children:Object(r.jsx)(F,{})}),Object(r.jsx)(y.a,{item:!0,direction:"column",xs:8,children:Object(r.jsx)(M,{})})]})}function F(){var e=p;if(console.log("cp:"+JSON.stringify(e)),e.course){var t=i.courses[e.course||0].episodes;if(console.log(t),e.course)return Object(r.jsx)(y.a,{children:Object(r.jsx)(y.a,{container:!0,direction:"column",children:p.course?q(t,e.course):null})})}return null}function M(){if(console.log(p),p.episode&&p.course){var e=i.courses[p.course||0].episodes[p.episode||0].stories;return console.log(e),Object(r.jsx)(y.a,{children:Object(r.jsx)(y.a,{item:!0,direction:"row",container:!0,children:D(e,p.episode)})})}return null}return Object(r.jsx)(j.Fragment,{children:Object(r.jsxs)(y.a,{container:!0,direction:"row",children:[Object(r.jsxs)(y.a,{item:!0,direction:"column",justifyContent:"center",spacing:2,className:e.container,xs:p.preview?4:12,children:[Object(r.jsxs)(y.a,{item:!0,sm:6,children:[C&&Object(r.jsx)(b.a,{variant:"h4",className:e.title,children:"JSON"}),C&&Object(r.jsx)(h.a,{className:e.dataContent,id:"boundData",multiline:!0,variant:"outlined",value:s,onChange:function(e){n(JSON.parse(e.target.value))}}),Object(r.jsxs)(y.a,{container:!0,justifyContent:"center",direction:"row",spacing:2,children:[Object(r.jsx)(y.a,{item:!0,children:Object(r.jsx)(f.a,{onClick:function(){n({})},color:"primary",variant:"contained",children:"Clear data"})}),Object(r.jsx)(y.a,{item:!0,children:Object(r.jsxs)(f.a,{onClick:function(){N(!C)},color:"secondary",variant:"contained",children:[C?"Hide":"Show"," JSON"]})}),Object(r.jsx)(y.a,{item:!0,children:Object(r.jsx)(f.a,{color:"success",variant:"contained",onClick:function(){p.preview=!p.preview,u(Object(l.a)({},p))},children:"Preview"})})]})]}),Object(r.jsxs)(y.a,{item:!0,xs:!0,children:[Object(r.jsx)(b.a,{variant:"h4",className:e.title,children:"MicroEd Form"}),!p.preview&&Object(r.jsx)("div",{className:e.demoform,children:Object(r.jsx)(m.JsonForms,{schema:O,uischema:x,data:i,renderers:H,cells:g.materialCells,onChange:function(e){e.errors;!function(e){var t=e;t.courses&&(t.courses=t.courses.map((function(e){return e.episodes&&e.episodes.map((function(e,t){return e.position=t,e.stories&&(e.stories=e.stories.map((function(e,t){return e.position=t,e}))),e})),e})));var o=JSON.stringify(t).replaceAll(/\$uuid/g,Object(L.a)()),i=JSON.parse(o),r=JSON.stringify(e);n(r!=o?i:e)}(e.data)},ajv:U})})]})]}),Object(r.jsx)(y.a,{item:!0,direction:"row",xs:8,children:p.preview&&Object(r.jsx)(T,{})})]})})},T=Object(n.b)({components:{MuiFormControl:{styleOverrides:{root:{margin:"0.8em 0"}}}}});p.a.render(Object(r.jsxs)(s.a,{theme:T,children:[Object(r.jsx)(c.b,{}),Object(r.jsx)(D,{})]}),document.getElementById("root"))}},[[976,1,2]]]);
//# sourceMappingURL=main.52819197.chunk.js.map