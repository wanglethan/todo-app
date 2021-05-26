goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32234,res){
var map__32235 = p__32234;
var map__32235__$1 = cljs.core.__destructure_map(map__32235);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32235__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32235__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32237 = res;
var G__32237__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32237,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32237);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32237__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32237__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32240 = arguments.length;
switch (G__32240) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32242,msg,handlers,timeout_after_ms){
var map__32244 = p__32242;
var map__32244__$1 = cljs.core.__destructure_map(map__32244);
var runtime = map__32244__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32244__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___32371 = arguments.length;
var i__4772__auto___32373 = (0);
while(true){
if((i__4772__auto___32373 < len__4771__auto___32371)){
args__4777__auto__.push((arguments[i__4772__auto___32373]));

var G__32374 = (i__4772__auto___32373 + (1));
i__4772__auto___32373 = G__32374;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((2) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4778__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32250,ev,args){
var map__32251 = p__32250;
var map__32251__$1 = cljs.core.__destructure_map(map__32251);
var runtime = map__32251__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32251__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32252 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32255 = null;
var count__32256 = (0);
var i__32257 = (0);
while(true){
if((i__32257 < count__32256)){
var ext = chunk__32255.cljs$core$IIndexed$_nth$arity$2(null,i__32257);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32381 = seq__32252;
var G__32382 = chunk__32255;
var G__32383 = count__32256;
var G__32384 = (i__32257 + (1));
seq__32252 = G__32381;
chunk__32255 = G__32382;
count__32256 = G__32383;
i__32257 = G__32384;
continue;
} else {
var G__32385 = seq__32252;
var G__32386 = chunk__32255;
var G__32387 = count__32256;
var G__32388 = (i__32257 + (1));
seq__32252 = G__32385;
chunk__32255 = G__32386;
count__32256 = G__32387;
i__32257 = G__32388;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32252);
if(temp__5735__auto__){
var seq__32252__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32252__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32252__$1);
var G__32390 = cljs.core.chunk_rest(seq__32252__$1);
var G__32391 = c__4591__auto__;
var G__32392 = cljs.core.count(c__4591__auto__);
var G__32393 = (0);
seq__32252 = G__32390;
chunk__32255 = G__32391;
count__32256 = G__32392;
i__32257 = G__32393;
continue;
} else {
var ext = cljs.core.first(seq__32252__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32395 = cljs.core.next(seq__32252__$1);
var G__32396 = null;
var G__32397 = (0);
var G__32398 = (0);
seq__32252 = G__32395;
chunk__32255 = G__32396;
count__32256 = G__32397;
i__32257 = G__32398;
continue;
} else {
var G__32399 = cljs.core.next(seq__32252__$1);
var G__32400 = null;
var G__32401 = (0);
var G__32402 = (0);
seq__32252 = G__32399;
chunk__32255 = G__32400;
count__32256 = G__32401;
i__32257 = G__32402;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32246){
var G__32247 = cljs.core.first(seq32246);
var seq32246__$1 = cljs.core.next(seq32246);
var G__32248 = cljs.core.first(seq32246__$1);
var seq32246__$2 = cljs.core.next(seq32246__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32247,G__32248,seq32246__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32264,p__32265){
var map__32266 = p__32264;
var map__32266__$1 = cljs.core.__destructure_map(map__32266);
var runtime = map__32266__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32266__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32267 = p__32265;
var map__32267__$1 = cljs.core.__destructure_map(map__32267);
var msg = map__32267__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32267__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32268 = cljs.core.deref(state_ref);
var map__32268__$1 = cljs.core.__destructure_map(map__32268);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32268__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32268__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32271){
var map__32273 = p__32271;
var map__32273__$1 = cljs.core.__destructure_map(map__32273);
var runtime = map__32273__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32273__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4160__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32275,msg){
var map__32276 = p__32275;
var map__32276__$1 = cljs.core.__destructure_map(map__32276);
var runtime = map__32276__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32276__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32279,key,p__32280){
var map__32281 = p__32279;
var map__32281__$1 = cljs.core.__destructure_map(map__32281);
var state = map__32281__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32281__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32282 = p__32280;
var map__32282__$1 = cljs.core.__destructure_map(map__32282);
var spec = map__32282__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32282__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32291,key,spec){
var map__32295 = p__32291;
var map__32295__$1 = cljs.core.__destructure_map(map__32295);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32295__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32298_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32298_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32299_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32299_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32300_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32300_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32302_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32302_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32303_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32303_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32324,key){
var map__32327 = p__32324;
var map__32327__$1 = cljs.core.__destructure_map(map__32327);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32327__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32333,msg){
var map__32334 = p__32333;
var map__32334__$1 = cljs.core.__destructure_map(map__32334);
var runtime = map__32334__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32334__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32335,p__32336){
var map__32337 = p__32335;
var map__32337__$1 = cljs.core.__destructure_map(map__32337);
var runtime = map__32337__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32337__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32338 = p__32336;
var map__32338__$1 = cljs.core.__destructure_map(map__32338);
var msg = map__32338__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32338__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32338__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__32340 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32342 = null;
var count__32343 = (0);
var i__32344 = (0);
while(true){
if((i__32344 < count__32343)){
var map__32351 = chunk__32342.cljs$core$IIndexed$_nth$arity$2(null,i__32344);
var map__32351__$1 = cljs.core.__destructure_map(map__32351);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32351__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32445 = seq__32340;
var G__32446 = chunk__32342;
var G__32447 = count__32343;
var G__32448 = (i__32344 + (1));
seq__32340 = G__32445;
chunk__32342 = G__32446;
count__32343 = G__32447;
i__32344 = G__32448;
continue;
} else {
var G__32449 = seq__32340;
var G__32450 = chunk__32342;
var G__32451 = count__32343;
var G__32452 = (i__32344 + (1));
seq__32340 = G__32449;
chunk__32342 = G__32450;
count__32343 = G__32451;
i__32344 = G__32452;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32340);
if(temp__5735__auto__){
var seq__32340__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32340__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__32340__$1);
var G__32455 = cljs.core.chunk_rest(seq__32340__$1);
var G__32456 = c__4591__auto__;
var G__32457 = cljs.core.count(c__4591__auto__);
var G__32458 = (0);
seq__32340 = G__32455;
chunk__32342 = G__32456;
count__32343 = G__32457;
i__32344 = G__32458;
continue;
} else {
var map__32352 = cljs.core.first(seq__32340__$1);
var map__32352__$1 = cljs.core.__destructure_map(map__32352);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32352__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32459 = cljs.core.next(seq__32340__$1);
var G__32460 = null;
var G__32461 = (0);
var G__32462 = (0);
seq__32340 = G__32459;
chunk__32342 = G__32460;
count__32343 = G__32461;
i__32344 = G__32462;
continue;
} else {
var G__32463 = cljs.core.next(seq__32340__$1);
var G__32464 = null;
var G__32465 = (0);
var G__32466 = (0);
seq__32340 = G__32463;
chunk__32342 = G__32464;
count__32343 = G__32465;
i__32344 = G__32466;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
