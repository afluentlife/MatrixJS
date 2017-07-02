// Compiled by ClojureScript 1.9.36 {}
goog.provide('loginclj.core');
goog.require('cljs.core');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('tiltontec.qxia.types');
goog.require('tiltontec.qxia.base');
goog.require('tiltontec.qxia.core');
goog.require('tiltontec.qxia.macros');

loginclj.core.loginclj = (function loginclj$core$loginclj(this$,shower){
return tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","Mobile","tiltontec.qxia.types/Mobile",-143490810),new cljs.core.Keyword(null,"qx-me","qx-me",-388627059),this$,new cljs.core.Keyword(null,"pager","pager",1850229940),(new qx.ui.mobile.page.Manager(false)),new cljs.core.Keyword(null,"shower","shower",-1731894586),shower,new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"make-login","make-login",2012461006,null)),cljs.core.list(new cljs.core.Symbol(null,"make-overview","make-overview",-827027252,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_15454 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto__ = loginclj.core.make_login.call(null);
return cljs.core._conj.call(null,(function (){var x__7044__auto____$1 = loginclj.core.make_overview.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$1);
})(),x__7044__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_15454;
}})));
});
goog.exportSymbol('loginclj.core.loginclj', loginclj.core.loginclj);
loginclj.core.f_val = (function loginclj$core$f_val(what,slot,where){
var it = tiltontec.model.core.fget.call(null,what,where);
if(cljs.core.truth_(it)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("cannot find "),cljs.core.str(what),cljs.core.str(" starting "),cljs.core.str(where),cljs.core.str("in search of "),cljs.core.str(slot)].join('')),cljs.core.str("\n"),cljs.core.str("it")].join('')));
}

return tiltontec.model.core.md_get.call(null,it,slot);
});
loginclj.core.make_login = (function loginclj$core$make_login(){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/",new cljs.core.Keyword(null,"title","title",636505583),"Login",new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"form","form",16469056,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519)], null),cljs.core.list(new cljs.core.Symbol(null,"text-field","text-field",-699013324,null),"Username",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Just type something",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Please share your user name"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.PasswordField","tiltontec.qxia.types/m.PasswordField",-1705460348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"c-in","c-in",517820292,null),null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Just type something",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Password is required",new cljs.core.Keyword(null,"liveUpdate","liveUpdate",930526966),true,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["changeValue",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new","new",-444906321,null),cljs.core.list(new cljs.core.Symbol(null,".getData",".getData",661342228,null),new cljs.core.Symbol(null,"evt","evt",388964660,null))], null),cljs.core.list(new cljs.core.Symbol(null,"md-reset!","md-reset!",1664918226,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"new","new",-444906321,null))))], null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),"Login",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login-button","login-button",-1266071822),new cljs.core.Keyword(null,"enabled","enabled",1195909756),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"value","value",305978217))))),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"login","login",1695749046,null),cljs.core.list(new cljs.core.Symbol(null,"qxme","qxme",352016329,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Symbol(null,"me","me",1501524834,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,".validate",".validate",1492446340,null),new cljs.core.Symbol(null,"login","login",1695749046,null)),cljs.core.list(new cljs.core.Symbol(null,"routing-get","routing-get",877560304,null),"/overview"))))], null)),cljs.core.list(new cljs.core.Symbol(null,"group","group",-2071839637,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),cljs.core.list(new cljs.core.Symbol(null,"f-val","f-val",-1006288719,null),new cljs.core.Keyword(null,"login-button","login-button",-1266071822),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"We will enable the login button once you start the password")),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"I am thinking of a number: ",cljs.core.list(new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),(1000)))))),cljs.core.list(new cljs.core.Symbol(null,"group","group",-2071839637,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"f-val","f-val",-1006288719,null),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"me","me",1501524834,null)))),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"We will enable the login button once you start the password")),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"I am thinking of a number: ",cljs.core.list(new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),(1000)))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_15466 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto__ = tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.Single","tiltontec.qxia.types/m.Single",-602074724),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol("tiltontec.qxia.core","qx-make","tiltontec.qxia.core/qx-make",1185324900,null),new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"kids","kids",1156670771),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","c?kids","tiltontec.model.core/c?kids",-799249638,null),cljs.core.list(new cljs.core.Symbol(null,"text-field","text-field",-699013324,null),"Username",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Just type something",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Please share your user name"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.PasswordField","tiltontec.qxia.types/m.PasswordField",-1705460348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"c-in","c-in",517820292,null),null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Just type something",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Password is required",new cljs.core.Keyword(null,"liveUpdate","liveUpdate",930526966),true,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["changeValue",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new","new",-444906321,null),cljs.core.list(new cljs.core.Symbol(null,".getData",".getData",661342228,null),new cljs.core.Symbol(null,"evt","evt",388964660,null))], null),cljs.core.list(new cljs.core.Symbol(null,"md-reset!","md-reset!",1664918226,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"new","new",-444906321,null))))], null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_15466,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_15470 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto__ = tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.Form","tiltontec.qxia.types/m.Form",-409217225),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"text-field","text-field",-699013324,null),"Username",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Just type something",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Please share your user name"),cljs.core.list(new cljs.core.Symbol(null,"qx-make","qx-make",1776576370,null),new cljs.core.Keyword("tiltontec.qxia.types","m.PasswordField","tiltontec.qxia.types/m.PasswordField",-1705460348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"c-in","c-in",517820292,null),null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Just type something",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Password is required",new cljs.core.Keyword(null,"liveUpdate","liveUpdate",930526966),true,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["changeValue",cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new","new",-444906321,null),cljs.core.list(new cljs.core.Symbol(null,".getData",".getData",661342228,null),new cljs.core.Symbol(null,"evt","evt",388964660,null))], null),cljs.core.list(new cljs.core.Symbol(null,"md-reset!","md-reset!",1664918226,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"new","new",-444906321,null))))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_15470,me__$1,cache__$1,_STAR_par_STAR_15466,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var _STAR_par_STAR_15472 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto__ = tiltontec.qxia.core.text_field.call(null,"Username",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Just type something",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Please share your user name");
return cljs.core._conj.call(null,(function (){var x__7044__auto____$1 = tiltontec.qxia.core.qx_make.call(null,new cljs.core.Keyword("tiltontec.qxia.types","m.PasswordField","tiltontec.qxia.types/m.PasswordField",-1705460348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.core.c_in.call(null,null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Just type something",new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"requiredInvalidMessage","requiredInvalidMessage",893496025),"Password is required",new cljs.core.Keyword(null,"liveUpdate","liveUpdate",930526966),true,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["changeValue",((function (x__7044__auto__,_STAR_par_STAR_15472,me__$2,cache__$2,_STAR_par_STAR_15470,me__$1,cache__$1,_STAR_par_STAR_15466,me,cache){
return (function (evt,me__$3){
var new$ = evt.getData();
return tiltontec.model.core.md_reset_BANG_.call(null,me__$3,new cljs.core.Keyword(null,"value","value",305978217),new$);
});})(x__7044__auto__,_STAR_par_STAR_15472,me__$2,cache__$2,_STAR_par_STAR_15470,me__$1,cache__$1,_STAR_par_STAR_15466,me,cache))
], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$1);
})(),x__7044__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_15472;
}});})(_STAR_par_STAR_15470,me__$1,cache__$1,_STAR_par_STAR_15466,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_15470;
}});})(_STAR_par_STAR_15466,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7044__auto____$1 = tiltontec.qxia.core.button.call(null,"Login",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login-button","login-button",-1266071822),new cljs.core.Keyword(null,"enabled","enabled",1195909756),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"value","value",305978217))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7044__auto__,_STAR_par_STAR_15466,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return (cljs.core.count.call(null,tiltontec.model.core.md_get.call(null,tiltontec.model.core.fget.call(null,new cljs.core.Keyword(null,"p-word","p-word",1531766703),me__$1),new cljs.core.Keyword(null,"value","value",305978217))) > (0));
});})(x__7044__auto__,_STAR_par_STAR_15466,me,cache))
),new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentArrayMap(null, 1, ["tap",((function (x__7044__auto__,_STAR_par_STAR_15466,me,cache){
return (function (evt,me__$1){
var login = tiltontec.qxia.base.qxme.call(null,tiltontec.model.core.fget.call(null,new cljs.core.Keyword(null,"login","login",55217519),me__$1));
if(cljs.core.truth_(login.validate())){
return tiltontec.qxia.core.routing_get.call(null,"/overview");
} else {
return null;
}
});})(x__7044__auto__,_STAR_par_STAR_15466,me,cache))
], null));
return cljs.core._conj.call(null,(function (){var x__7044__auto____$2 = tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Group","tiltontec.qxia.types/m.Group",1395438636),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),cljs.core.list(new cljs.core.Symbol(null,"f-val","f-val",-1006288719,null),new cljs.core.Keyword(null,"login-button","login-button",-1266071822),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"We will enable the login button once you start the password")),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"I am thinking of a number: ",cljs.core.list(new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),(1000))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_15466,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_15474 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto____$2 = (cljs.core.truth_(loginclj.core.f_val.call(null,new cljs.core.Keyword(null,"login-button","login-button",-1266071822),new cljs.core.Keyword(null,"enabled","enabled",1195909756),me__$1))?null:tiltontec.qxia.core.label.call(null,"We will enable the login button once you start the password"));
return cljs.core._conj.call(null,(function (){var x__7044__auto____$3 = tiltontec.qxia.core.label.call(null,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"I am thinking of a number: ",cljs.core.list(new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),(1000)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7044__auto____$2,_STAR_par_STAR_15474,me__$1,cache__$1,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_15466,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return [cljs.core.str("I am thinking of a number: "),cljs.core.str(cljs.core.rand_int.call(null,(1000)))].join('');
});})(x__7044__auto____$2,_STAR_par_STAR_15474,me__$1,cache__$1,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_15466,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$3);
})(),x__7044__auto____$2);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_15474;
}});})(x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_15466,me,cache))
));
return cljs.core._conj.call(null,(function (){var x__7044__auto____$3 = tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.Group","tiltontec.qxia.types/m.Group",1395438636),new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"f-val","f-val",-1006288719,null),new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"me","me",1501524834,null)))),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"We will enable the login button once you start the password")),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"c?","c?",2035112633,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"I am thinking of a number: ",cljs.core.list(new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),(1000))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_15466,me,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_par_STAR_15476 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto____$3 = (((cljs.core.count.call(null,loginclj.core.f_val.call(null,new cljs.core.Keyword(null,"p-word","p-word",1531766703),new cljs.core.Keyword(null,"value","value",305978217),me__$1)) > (0)))?null:tiltontec.qxia.core.label.call(null,"We will enable the login button once you start the password"));
return cljs.core._conj.call(null,(function (){var x__7044__auto____$4 = tiltontec.qxia.core.label.call(null,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"I am thinking of a number: ",cljs.core.list(new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),(1000)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7044__auto____$3,_STAR_par_STAR_15476,me__$1,cache__$1,x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_15466,me,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return [cljs.core.str("I am thinking of a number: "),cljs.core.str(cljs.core.rand_int.call(null,(1000)))].join('');
});})(x__7044__auto____$3,_STAR_par_STAR_15476,me__$1,cache__$1,x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_15466,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$4);
})(),x__7044__auto____$3);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_15476;
}});})(x__7044__auto____$2,x__7044__auto____$1,x__7044__auto__,_STAR_par_STAR_15466,me,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto____$3);
})(),x__7044__auto____$2);
})(),x__7044__auto____$1);
})(),x__7044__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_15466;
}})));
});
loginclj.core.make_overview = (function loginclj$core$make_overview(){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.qxia.types","m.NavigationPage","tiltontec.qxia.types/m.NavigationPage",-2091669995),new cljs.core.Keyword(null,"end-point","end-point",-1147460885),"/overview",new cljs.core.Keyword(null,"title","title",636505583),"Overview",new cljs.core.Keyword(null,"showBackButton","showBackButton",632746224),true,new cljs.core.Keyword(null,"backButtonText","backButtonText",2126160537),"Back",new cljs.core.Keyword(null,"qx-class","qx-class",701821141),qxlogin.NaviBack,new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),"<h1>Our first app!</h>"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_15478 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7044__auto__ = tiltontec.qxia.core.label.call(null,"<h1>Our first app!</h>");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7044__auto__);
})()));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_15478;
}})));
});