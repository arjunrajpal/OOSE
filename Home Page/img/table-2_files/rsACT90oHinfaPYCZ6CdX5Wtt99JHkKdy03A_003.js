try{
var s_9P=function(a){this.ma=s_W(a,"0078sLar460");this.$=!1};s_f(s_9P,s_h);s_9P.prototype.open=function(){this.$||this.ma.then(function(a){a.open();this.$=!0},null,this)};s_9P.prototype.close=function(){this.$&&this.ma.then(function(a){a.close();this.$=!1},null,this)};s_9P.prototype.p0=function(){this.$=!1};s_D("idg");
var s_TSb=function(a){s_U.call(this,a)};s_f(s_TSb,s_U);s_T(function(a){s_R(a,"t-5jam7fqtl8Q",s_9P,null,s_TSb,function(a,c,d){s_9P.call(a,d)});s_S(a,"KD98O1aDZeE",function(a,c){a.p0(c)})});
s_C("idg");s_E();
}catch(e){_DumpException(e)}
try{
s_D("sy41");var s_8ia;s_rb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
var s_Li=function(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")},s_Mi=function(a){return a.getAttribute("role")||null},s_Ni=function(a,b,c){s_ha(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(s_8ia||(s_8ia={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=s_8ia,b in c?a.setAttribute(d,c[b]):
a.removeAttribute(d)):a.setAttribute(d,c)},s_Oi=function(a,b){a.removeAttribute("aria-"+b)},s_Pi=function(a,b){var c=a.getAttribute("aria-"+b);return null==c||void 0==c?"":String(c)},s_9ia=function(a,b){var c="";b&&(c=b.id);s_Ni(a,"activedescendant",c)};

s_C("sy41");s_E();
}catch(e){_DumpException(e)}
try{
s_D("sy43");var s_Ui=function(a,b,c,d,e){this.ma=!!b;this.node=null;this.zB=0;this.Ma=!1;this.Ia=!c;a&&s_Ti(this,a,d);this.qa=void 0!=e?e:this.zB||0;this.ma&&(this.qa*=-1)};s_f(s_Ui,s_fe);var s_Ti=function(a,b,c,d){if(a.node=b)a.zB=s_ka(c)?c:1!=a.node.nodeType?0:a.ma?-1:1;s_ka(d)&&(a.qa=d)};s_=s_Ui.prototype;s_.QF=function(a){this.node=a.node;this.zB=a.zB;this.qa=a.qa;this.ma=a.ma;this.Ia=a.Ia};s_.clone=function(){return new s_Ui(this.node,this.ma,!this.Ia,this.zB,this.qa)};
s_.next=function(){var a;if(this.Ma){if(!this.node||this.Ia&&0==this.qa)throw s_ee;a=this.node;var b=this.ma?-1:1;if(this.zB==b){var c=this.ma?a.lastChild:a.firstChild;c?s_Ti(this,c):s_Ti(this,a,-1*b)}else(c=this.ma?a.previousSibling:a.nextSibling)?s_Ti(this,c):s_Ti(this,a.parentNode,-1*b);this.qa+=this.zB*(this.ma?-1:1)}else this.Ma=!0;a=this.node;if(!this.node)throw s_ee;return a};s_.equals=function(a){return a.node==this.node&&(!this.node||a.zB==this.zB)};
s_.splice=function(a){var b=this.node,c=this.ma?1:-1;this.zB==c&&(this.zB=-1*c,this.qa+=this.zB*(this.ma?-1:1));this.ma=!this.ma;s_Ui.prototype.next.call(this);this.ma=!this.ma;for(var c=s_ia(arguments[0])?arguments[0]:arguments,d=c.length-1;0<=d;d--)s_yc(c[d],b);s_n(b)};

s_C("sy43");s_E();
}catch(e){_DumpException(e)}
try{
s_D("sy40");var s_vi=s_b,s_Lia=function(){return{$J:0,oBa:0}};
s_C("sy40");s_E();
}catch(e){_DumpException(e)}
try{
s_D("sy42");var s_Qi=function(a){this.ka=a;this.$=[]},s_Ri=function(a){for(var b=a.ka;b&&b!=document.body;){var c=s_Gc(b);if(c){var d=s_Bc(c);s_g(d,function(a){a==b||s_Pi(a,"hidden")||(s_Ni(a,"hidden",!0),this.$.push(a))},a)}b=c}},s_Si=function(a){s_g(a.$,function(a){s_Oi(a,"hidden")});a.$=[]};

s_C("sy42");s_E();
}catch(e){_DumpException(e)}
try{
s_D("sy44");var s_Vi=function(a,b,c,d){s_Ui.call(this,a,b,c,null,d)};s_f(s_Vi,s_Ui);s_Vi.prototype.next=function(){do s_Vi.Ba.next.call(this);while(-1==this.zB);return this.node};
s_C("sy44");s_E();
}catch(e){_DumpException(e)}
try{
s_D("sy145");var s_aua=[1,2],s_Yn=function(){this.$={};this.ka=0;this.Ea=null;this.ma=this.qa=0};s_Yn.prototype.Ca=function(a){return!!this.$[s_na(a)]};
s_Yn.prototype.listen=function(a,b,c,d,e){c=c||s_aua;var f=s_na(a);if(e)this.unlisten(a);else if(this.$[f])throw Error("xd");this.$[f]={element:a,p0:b,eventTypes:c,context:d};s_Ta(c,1)&&(0==this.ka&&(d&&s_la(d.I9a)&&d.xja?this.Ea=s_p(window,"mousedown",this.Wa,!0,this):s_p(window,"click",this.Wa,!0,this)),this.ka++);s_Ta(c,2)&&(0==this.qa&&s_p(window,"keydown",this.Ga,!0,this),this.qa++);s_Ta(c,3)&&(0==this.ma&&s_p(window,"focus",this.Da,!0,this),this.ma++)};
s_Yn.prototype.unlisten=function(a){(a=this.$[s_na(a)])&&s_bua(this,a)};var s_bua=function(a,b){s_Ta(b.eventTypes,1)&&(a.ka--,0==a.ka&&a.Ea&&(a.Ea=null));s_Ta(b.eventTypes,2)&&a.qa--;s_Ta(b.eventTypes,3)&&a.ma--;delete a.$[s_na(b.element)]};s_Yn.prototype.yd=function(a){(a=this.$[s_na(a)])&&s_cua(this,a,0)};var s_cua=function(a,b,c,d){try{var e=b.p0.call(b.context,c,d)}catch(f){s_de(f)}!1!==e&&s_bua(a,b)};
s_Yn.prototype.Wa=function(a){if("attention-ping"!=a.target.id)for(var b in this.$){var c=this.$[b];s_Ta(c.eventTypes,1)&&!s_Hc(c.element,a.target)&&s_cua(this,c,1,a.target)}};s_Yn.prototype.Ga=function(a){if(27==a.keyCode){for(var b in this.$){var c=this.$[b];s_Ta(c.eventTypes,2)&&s_cua(this,c,2)}a.stopPropagation();a.preventDefault()}};s_Yn.prototype.Da=function(a){for(var b in this.$){var c=this.$[b];!s_Ta(c.eventTypes,3)||s_yba(a.target)&&s_Hc(c.element,a.target)||s_cua(this,c,3,a.target)}}; var s_Zn=new s_Yn,s__n=s_c(s_Zn.listen,s_Zn),s_0n=s_c(s_Zn.unlisten,s_Zn),s_dua=s_c(s_Zn.yd,s_Zn),s_eua=s_c(s_Zn.Ca,s_Zn);

s_C("sy145");s_E();
}catch(e){_DumpException(e)}
try{
s_D("em7");
s_C("em7");s_E();
}catch(e){_DumpException(e)}
try{
s_D("em8");
s_C("em8");s_E();
}catch(e){_DumpException(e)}
try{
s_D("sy38");var s_Ki=function(a){s_J(this,a,0,-1,null,null)};s_f(s_Ki,s_I);
s_C("sy38");s_E();
}catch(e){_DumpException(e)}
try{
s_D("sy148");
s_C("sy148");s_E();
}catch(e){_DumpException(e)}
try{
s_D("sy378");var s_HD=function(a){s_J(this,a,0,-1,null,null)};s_f(s_HD,s_I);
s_C("sy378");s_E();
}catch(e){_DumpException(e)}
try{
var s_j3=function(a,b){this.xja=!!s_L(a.$.$(s_Ki,"ux"),220802553);this.Lb=!(!a.$.$(s_HD,"gsa")||!s_L(a.$.$(s_HD,"gsa"),244399487));var c=s_V(b,"oPwtUFSp9U8")||s_j(s_t(b.hb(),"id")||"");this.qa=c;this.Ca=b.hb();c.__owner=this.Ca;this.ph=s_l("fAwjXaCTMo5__overlay",c);this.Nb=s_l("fAwjXaCTMo5__container",c);this.ma=s_l("fAwjXaCTMo5__content",c);this.$=null;this.Ea=[];this.Ia={};this.nb=a.$.get("enable_close_for_background")||!1;this.Ga=this.xja?document.documentElement:document.body;this.Ja=null;this.Db=
new s_Qi(this.ma);this.Ka=!1;this.Da=null;this.Xa=!1;this.Wa=null;this.Za=a.$.get("initial_open");c=!s_v(this.qa,"dgd");1==this.Za&&c||2==this.Za?this.open():1!=this.Za||c||(this.aza(0),s_x(this.qa,"dgd"));this.xc=!!a.$.get("remain_in_lightbox_container")};s_f(s_j3,s_h);s_j3.prototype.I9a=function(){return this.xja};
s_j3.prototype.open=function(){var a=s_Jb&&!s_Tb("10"),b=s_i("lb");!b||a||s_Hc(b,this.qa)||b.appendChild(this.qa);s_v(this.ph,"fAwjXaCTMo5__visible")||s_w(this.ph,"fAwjXaCTMo5__visible");s_v(this.ma,"fAwjXaCTMo5__visible")||s_w(this.ma,"fAwjXaCTMo5__visible");s_v(this.Nb,"fAwjXaCTMo5__visible")||s_w(this.Nb,"fAwjXaCTMo5__visible");this.Ja=document.activeElement;this.ma.focus();s_Ri(this.Db);s_Me(94,this.rb);this.Ka=s_pi();this.Xa=s_qi();s_vi(3,3);this.Lb||(this.Wa&&s_3c(this.Wa),this.Wa=s_p(window,
"scroll",s_c(this.nKa,this),!0),this.Ma=window.pageYOffset,this.Ga.style.top="-"+this.Ma+"px",s_w(this.Ga,"nsc"));this.Da=null;s__n(this.ma,this.aza,void 0,this);0<this.Ea.length&&(this.$=this.Ea[0],this.Ea=[]);null!=this.$&&s_Mid(this.$,0!=this.Ea.length,null)};s_j3.prototype.stopPropagation=function(a){a&&s_4e(a.event())};var s_Nid=function(a,b){var c=s_ie(new s_Vi(a.ma,!b));return s_Sa(c,function(a){return s_Fc(a)&&s_Kc(a)})||a.ma};s_=s_j3.prototype;s_.close=function(a){this.Da=a||null;s_dua(this.ma)};
s_.aza=function(a){var b={};b.dgdt=a;var c=void 0;this.Da&&(c=this.Da,c=c.event()&&c.event().detail&&c.event().detail.W2||void 0,this.Da=null);null!=this.$&&s_Oid(this.$,null);if(this.nb||0==a)return s_x(this.ph,"fAwjXaCTMo5__visible"),s_x(this.ma,"fAwjXaCTMo5__visible"),s_x(this.Nb,"fAwjXaCTMo5__visible"),this.xc||s_Gc(this.qa)==this.Ca||this.Ca.appendChild(this.qa),s_Pid(this),s_Si(this.Db),this.Ja&&this.Ja.focus(),s_vi(this.Ka?3:1,this.Xa?3:0),s_Ne(94,this.rb),s_8i(this,"dg_dismissed",b,c),s_6c(this.qa,
"dg_dismissed",b),!0;s_8i(this,"dg_not_dismissed",b,c);return!1};s_.iPa=function(a){s_p(this.qa,"dg_dismissed",a)};s_.Ha=function(){s_eua(this.ma)&&s_dua(this.ma);s_0n(this.ma);this.Wa&&(s_3c(this.Wa),this.Wa=null);this.qa.__owner=null;s_Gc(this.qa)!=this.Ca&&this.Ca.appendChild(this.qa)};s_.nKa=function(a){var b=a.target;b&&!s_Hc(this.Nb,b)&&s_Hh(a)};var s_Pid=function(a){s_x(a.Ga,"nsc");a.Ga.style.top="";a.Ma&&window.scrollTo(0,a.Ma);var b=a.Wa;b&&s_6e(function(){s_3c(b)},a);a.Wa=null};
s_j3.prototype.rb=function(){return!1};s_j3.prototype.Pu=function(a){null==this.$&&a.vW()?(this.$=a,a.show(!1)):a.hide();var b=a.getId();null!=b&&""!=b&&(this.Ia[b]=a);a.$=this.Ca};s_j3.prototype.Qaa=function(a){if(0<this.Ea.length){s_Oid(this.$,a);var b=this.Ea.pop(),c=0<this.Ea.length;this.$=b;s_Mid(b,c,a)}};var s_k3=function(a,b){this.Fa=b;this.ma=b.hb();this.jd=a.$.get("content_id");this.qa=!!a.$.get("default_content");this.$=null;s_8i(this,"dg_reg_content")};s_f(s_k3,s_h);s_k3.prototype.Ha=function(){};
s_k3.prototype.getId=function(){return this.jd};s_k3.prototype.vW=function(){return this.qa};s_k3.prototype.hide=function(){s_Qd(this.ma,"display","none")};var s_Oid=function(a,b){a.hide();var c=s_V(a.Fa,"oQZWC8tnd88");s_Ge(c)&&s_z(b,[c],[!1])};s_k3.prototype.show=function(a){s_Qd(this.ma,"display","block");var b=s_V(this.Fa,"H3o3fybh_k4"),c=s_V(this.Fa,"qh2PmyvLYlg");b&&c&&(a?(s_Qd(b,"display","inline-block"),s_Qd(c,"width","220px")):(s_Qd(b,"display","none"),s_Qd(c,"width","248px")))}; var s_Mid=function(a,b,c){a.show(b);a=s_V(a.Fa,"oQZWC8tnd88");s_Ge(a)&&s_z(c,[a],[!0])};s_k3.prototype.Qaa=function(a){a=a.node();s_9i(this.$).Qaa(a)};s_D("dgm");
var s_Qid=function(a){this.$=a},s_Rid=function(a){s_U.call(this,a)};s_f(s_Rid,s_U);var s_Sid=function(a){this.$=a},s_Tid=function(a){s_U.call(this,a)};s_f(s_Tid,s_U);
s_T(function(a){s_R(a,"t-cuCqGEujB5w",s_j3,s_Qid,s_Rid,function(a,c,d){s_j3.call(a,c,d)});s_S(a,"J_j78ao4uyM",function(a,c){var b=s_9i(c.event().target);a.Pu(b)});s_S(a,"99yxp2ZuQP0",function(a,c){a.close(c)});s_S(a,"nUlQmbHCUts",function(a,c){a.stopPropagation(c)});s_S(a,"EvZFsYUH-g8",function(a){s_Nid(a,!1).focus()});s_S(a,"15lBFDEFpZ8",function(a){s_Nid(a,!0).focus()})});
s_T(function(a){s_R(a,"t-pmqcKq8OE5A",s_k3,s_Sid,s_Tid,function(a,c,d){s_k3.call(a,c,d)});s_S(a,"t8rWx2y0mME",function(a,c){var b=c.event().target,e=c.node(),f=b.getAttribute("data-id"),b=s_9i(a.$);b.Ia[f]&&(null!=b.$&&(b.Ea.push(b.$),b.$.hide()),f=b.Ia[f],b.$=f,s_Mid(f,!0,e))});s_S(a,"_-RKKJBt8RE",function(a,c){a.Qaa(c)})});

s_C("dgm");s_E();
}catch(e){_DumpException(e)}
try{
s_D("sy194");var s_Kr=function(a,b){b||(b={});var c=window,d;d=a instanceof s__b?a:s_1b("undefined"!=typeof a.href?a.href:String(a));var e=b.target||a.target,f=[],g;for(g in b)switch(g){case "width":case "height":case "top":case "left":f.push(g+"="+b[g]);break;case "target":case "noreferrer":break;default:f.push(g+"="+(b[g]?1:0))}f=f.join(",");s_Eb()&&c.navigator&&c.navigator.standalone&&e&&"_self"!=e?(f=c.document.createElement("A"),s_qba(f,d),f.setAttribute("target",e),b.noreferrer&&f.setAttribute("rel","noreferrer"),
d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,c,1),f.dispatchEvent(d),c={}):b.noreferrer?(c=c.open("",e,f),d=s_0b(d),c&&(s_Paa&&s_ya(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),c.opener=null,s_Xb("b/12014412, meta tag with sanitized URL"),d='<META HTTP-EQUIV="refresh" content="0; url='+s_xa(d)+'">',d=s_5b(d,null),c.document.write(s_4b(d)),c.document.close())):c=c.open(s_0b(d),e,f);return c};

s_C("sy194");s_E();
}catch(e){_DumpException(e)}
try{
s_D("sy457");
s_C("sy457");s_E();
}catch(e){_DumpException(e)}
try{
var s_x9=function(){this.$=this.qa=this.Qf=null};s_f(s_x9,s_h);s_x9.prototype.Ffa=function(a){if(!this.$){var b=s_JOb("imgsh"),c={imgres:s_4o(this.Qf.m6(!0),"source","sh/x/im").getQuery()};this.$&&this.$.cancel();this.$=s_tk(b,c,a).then(s_c(this.Da,this),s_c(this.Ca,this))}s_cf(this.$,s_c(this.sCa,this))};s_x9.prototype.Da=function(a){var b;a&&a[0]&&(b=s_m("DIV"),a[0].Vt().apply(b),this.Gfa(b))};var s_y9=function(a){return a.qa||s_dSd(a)};s_x9.prototype.Ca=s_b;
var s_dSd=function(a){return s_be().replace(/www\.google\./,"images.google.")+s_4o(a.Qf.m6(!0),"source","sh/x/im").toString()};s_=s_x9.prototype;s_.Nia=function(a){this.$&&(this.$.cancel(),this.$=null);this.Qf=a;this.qa=null};s_.sCa=s_b;s_.ZAa=s_b;s_.Gfa=function(a){this.qa=s_l("irc_shu",a).href};s_.Ha=function(){this.$&&this.$.cancel();s_x9.Ba.Ha.call(this)};var s_z9=function(a){s_x9.call(this);this.Fa=a;this.ma=null;this.Wa=[];this.Ea=s_$i(s_j("irc_shc"))};s_f(s_z9,s_x9);
var s_eSd=function(){var a="getSelection"in window&&"queryCommandSupported"in document&&"execCommand"in document&&document.queryCommandSupported("copy");if(a)try{a=document.execCommand("copy",!0,null)}catch(b){a=!1}return a};s_z9.prototype.Ffa=function(a){s_z9.Ba.Ffa.call(this,a);null===this.ma&&(this.ma=s_eSd(),s_s(s_V(this.Fa,"K9A5rUUabyY"),this.ma),s_s(s_V(this.Fa,"NBn6beZVvl0"),!this.ma));this.Ea.then(function(a){a.open()});s_fSd(this,!1)};s_z9.prototype.ZAa=function(){this.Ea.then(function(a){a.close()})};
var s_gSd=function(a,b,c,d,e){c=s__o(new s_Vo(c),s_Cwa(d)).toString();a.Ea.then(function(a){a.close()});a.$.then(s_d(s_A,b.event().target));e?s_Kr(c,{target:"_blank"}):s_We(c)};s_z9.prototype.Gfa=function(a){s_z9.Ba.Gfa.call(this,a);s_hSd(this,a);s_fSd(this,!0)};s_z9.prototype.Ca=function(){s_fSd(this,!0)};
var s_hSd=function(a,b){s_g(a.Wa,function(a){s_De(a,"ved","")});a.Wa=[];b&&s_g(s_Bc(b),function(a){var b=a.id;b&&b.match(/^i[0-9]+$/)&&s_g(s_k(b,this.Fa.hb()),function(b){s_De(b,"ved",s_Ge(a))},this)},a)},s_iSd=function(a,b){if(a.ma){var c=s_V(a.Fa,"JtrpqFxwsX4");s_o(c,s_y9(a));var d=document.createRange();d.selectNodeContents(c);window.getSelection().removeAllRanges();window.getSelection().addRange(d);document.execCommand("copy",!0,null)&&(s_s(s_V(a.Fa,"K9A5rUUabyY"),!1),s_s(s_V(a.Fa,"L5eBHaSmL84"),
!0))}a.$.then(s_d(s_A,b.event().target))};s_z9.prototype.Nia=function(a){s_z9.Ba.Nia.call(this,a);s_hSd(this,null)};var s_fSd=function(a,b){var c=s_y9(a),d=a.qa;!d&&b&&(d=s_dSd(a));var e=s_V(a.Fa,"DCw8YHADtYY");e.href=c;s_o(e,d||"");s_q(s_V(a.Fa,"qhp6y5LgQRg"),"visibility",d?"":"hidden");s_s(s_V(a.Fa,"L5eBHaSmL84"),!1);s_s(s_V(a.Fa,"K9A5rUUabyY"),a.ma);s_s(s_V(a.Fa,"NBn6beZVvl0"),!a.ma)},s_jSd=function(){s_x9.call(this)};s_f(s_jSd,s_x9); s_jSd.prototype.sCa=function(){window.agsa_ext&&window.agsa_ext.share?window.agsa_ext.share(s_y9(this),null):s_de(Error("kg"))};s_D("ish");
var s_kSd=function(a){s_U.call(this,a)};s_f(s_kSd,s_U);s_T(function(a){s_R(a,"t-Dre-NZH2XuA",s_jSd,null,null,function(a){s_jSd.call(a)})});
s_T(function(a){s_R(a,"t-RHI35lUscno",s_z9,null,s_kSd,function(a,c,d){s_z9.call(a,d)});s_S(a,"bgECufFpVcI",function(a,c){s_gSd(a,c,"https://www.facebook.com/sharer/sharer.php",{u:s_y9(a)},!0)});s_S(a,"wTdKeEElHMg",function(a,c){s_gSd(a,c,"whatsapp://send",{text:s_y9(a)},!1)});s_S(a,"C0LRfe2h3SM",function(a,c){s_gSd(a,c,"https://www.twitter.com/share",{url:s_y9(a)},!0)});s_S(a,"nrQXXakJHXk",function(a,c){s_gSd(a,c,"https://plus.google.com/share",{url:s_y9(a),authuser:google.authuser},!0)});s_S(a,"ELvIItyrQI0", function(a,c){s_gSd(a,c,"mailto:",{body:s_y9(a),subject:"Check out this image"},!s_JO)});s_S(a,"PJK1Rwylmls",function(a,c){s_iSd(a,c)});s_S(a,"PJK1Rwylmls",function(a,c){s_iSd(a,c)});s_S(a,"PJK1Rwylmls",function(a,c){s_iSd(a,c)})});

s_C("ish");s_E();
}catch(e){_DumpException(e)}
try{
s_D("ivw");var s_4Ub=function(a){this.Fa=a;this.$=null};s_=s_4Ub.prototype;s_.faa=function(a){this.$=a};s_.nib=function(a){this.$.src=a};s_.kib=function(a){for(var b=0;b<a.length;b++){var c=a[b];"src"!=c.nodeName&&"class"!=c.nodeName&&this.$.setAttribute(c.nodeName,c.nodeValue)}};s_.$ma=function(a){this.$.removeAttribute(a)};s_.mib=function(a){this.$.onload=a};s_.lib=function(a){this.$.onerror=a}; s_.h0a=function(a){this.$&&(this.$.onload=null,this.$.onerror=null,a||(this.$.removeAttribute("src"),this.$.removeAttribute("alt")));this.$=null};
var s_5Ub=function(a){s_U.call(this,a)};s_f(s_5Ub,s_U);s_T(function(a){s_R(a,"t-mqWFpp0vPaI",s_4Ub,null,s_5Ub,function(a,c,d){s_4Ub.call(a,d)})});
s_C("ivw");s_E();
}catch(e){_DumpException(e)}
// Google Inc.
