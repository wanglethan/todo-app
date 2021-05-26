goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35555,p__35556){
var map__35559 = p__35555;
var map__35559__$1 = cljs.core.__destructure_map(map__35559);
var svc = map__35559__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35559__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35559__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35559__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35561 = p__35556;
var map__35561__$1 = cljs.core.__destructure_map(map__35561);
var msg = map__35561__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35561__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35561__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35561__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35561__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35592,p__35593){
var map__35596 = p__35592;
var map__35596__$1 = cljs.core.__destructure_map(map__35596);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35601 = p__35593;
var map__35601__$1 = cljs.core.__destructure_map(map__35601);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35601__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35622,p__35623){
var map__35626 = p__35622;
var map__35626__$1 = cljs.core.__destructure_map(map__35626);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35626__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35626__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35627 = p__35623;
var map__35627__$1 = cljs.core.__destructure_map(map__35627);
var msg = map__35627__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35627__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35646,tid){
var map__35648 = p__35646;
var map__35648__$1 = cljs.core.__destructure_map(map__35648);
var svc = map__35648__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35648__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35679 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35680 = null;
var count__35681 = (0);
var i__35682 = (0);
while(true){
if((i__35682 < count__35681)){
var vec__35698 = chunk__35680.cljs$core$IIndexed$_nth$arity$2(null,i__35682);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35698,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35698,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35740 = seq__35679;
var G__35741 = chunk__35680;
var G__35742 = count__35681;
var G__35743 = (i__35682 + (1));
seq__35679 = G__35740;
chunk__35680 = G__35741;
count__35681 = G__35742;
i__35682 = G__35743;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35679);
if(temp__5735__auto__){
var seq__35679__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35679__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__35679__$1);
var G__35745 = cljs.core.chunk_rest(seq__35679__$1);
var G__35746 = c__4591__auto__;
var G__35747 = cljs.core.count(c__4591__auto__);
var G__35748 = (0);
seq__35679 = G__35745;
chunk__35680 = G__35746;
count__35681 = G__35747;
i__35682 = G__35748;
continue;
} else {
var vec__35705 = cljs.core.first(seq__35679__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35705,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35705,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35749 = cljs.core.next(seq__35679__$1);
var G__35750 = null;
var G__35751 = (0);
var G__35752 = (0);
seq__35679 = G__35749;
chunk__35680 = G__35750;
count__35681 = G__35751;
i__35682 = G__35752;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35664_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35664_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35665_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35665_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35666_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35666_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35667_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35667_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35715){
var map__35716 = p__35715;
var map__35716__$1 = cljs.core.__destructure_map(map__35716);
var svc = map__35716__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35716__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35716__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
