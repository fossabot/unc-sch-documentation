(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{257:function(t,r,o){var content=o(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("29f9adfb",content,!0,{sourceMap:!1})},275:function(t,r,o){"use strict";o(257)},276:function(t,r,o){var c=o(54)(!1);c.push([t.i,".list-primary{--tw-text-opacity:1;color:rgba(226,79,85,var(--tw-text-opacity))}.dark .list-primary{--tw-text-opacity:1;color:rgba(235,132,136,var(--tw-text-opacity))}.list-info{--tw-text-opacity:1;color:rgba(14,165,233,var(--tw-text-opacity))}.dark .list-info{--tw-text-opacity:1;color:rgba(56,189,248,var(--tw-text-opacity))}.list-success{--tw-text-opacity:1;color:rgba(16,185,129,var(--tw-text-opacity))}.dark .list-success{--tw-text-opacity:1;color:rgba(52,211,153,var(--tw-text-opacity))}.list-warning{--tw-text-opacity:1;color:rgba(245,158,11,var(--tw-text-opacity))}.dark .list-warning{--tw-text-opacity:1;color:rgba(251,191,36,var(--tw-text-opacity))}.list-danger{--tw-text-opacity:1;color:rgba(239,68,68,var(--tw-text-opacity))}.dark .list-danger{--tw-text-opacity:1;color:rgba(248,113,113,var(--tw-text-opacity))}",""]),t.exports=c},296:function(t,r,o){"use strict";o.r(r);o(38),o(49);var c={props:{items:{type:Array,default:function(){return[]}},icon:{type:String,default:null},type:{type:String,default:"primary",validator:function(t){return["primary","info","success","warning","danger"].includes(t)}}},computed:{iconName:function(){return this.icon||{primary:"IconBadgeCheck",info:"IconInformationCircle",success:"IconCheckCircle",warning:"IconExclamationCircle",danger:"IconXCircle"}[this.type]}}},e=(o(275),o(3)),component=Object(e.a)(c,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",t._l(t.items,(function(r,i){return o("div",{key:i,staticClass:"mt-3 flex"},[o("span",{staticClass:"mt-px mr-3 flex-shrink-0",class:"list-"+t.type},[o(t.iconName,{tag:"component",staticClass:"h-6 w-6"})],1),t._v("\n    "+t._s(r)+"\n  ")])})),0)}),[],!1,null,null,null);r.default=component.exports}}]);