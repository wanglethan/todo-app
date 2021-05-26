goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38034){
var map__38035 = p__38034;
var map__38035__$1 = cljs.core.__destructure_map(map__38035);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4160__auto__ = child_of;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38038_38067 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38039_38068 = null;
var count__38040_38069 = (0);
var i__38041_38070 = (0);
while(true){
if((i__38041_38070 < count__38040_38069)){
var vec__38053_38071 = chunk__38039_38068.cljs$core$IIndexed$_nth$arity$2(null,i__38041_38070);
var k_38072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38053_38071,(0),null);
var cb_38073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38053_38071,(1),null);
try{var G__38057_38074 = cljs.core.deref(re_frame.trace.traces);
(cb_38073.cljs$core$IFn$_invoke$arity$1 ? cb_38073.cljs$core$IFn$_invoke$arity$1(G__38057_38074) : cb_38073.call(null,G__38057_38074));
}catch (e38056){var e_38075 = e38056;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38072,"while storing",cljs.core.deref(re_frame.trace.traces),e_38075], 0));
}

var G__38076 = seq__38038_38067;
var G__38077 = chunk__38039_38068;
var G__38078 = count__38040_38069;
var G__38079 = (i__38041_38070 + (1));
seq__38038_38067 = G__38076;
chunk__38039_38068 = G__38077;
count__38040_38069 = G__38078;
i__38041_38070 = G__38079;
continue;
} else {
var temp__5735__auto___38080 = cljs.core.seq(seq__38038_38067);
if(temp__5735__auto___38080){
var seq__38038_38081__$1 = temp__5735__auto___38080;
if(cljs.core.chunked_seq_QMARK_(seq__38038_38081__$1)){
var c__4591__auto___38082 = cljs.core.chunk_first(seq__38038_38081__$1);
var G__38083 = cljs.core.chunk_rest(seq__38038_38081__$1);
var G__38084 = c__4591__auto___38082;
var G__38085 = cljs.core.count(c__4591__auto___38082);
var G__38086 = (0);
seq__38038_38067 = G__38083;
chunk__38039_38068 = G__38084;
count__38040_38069 = G__38085;
i__38041_38070 = G__38086;
continue;
} else {
var vec__38058_38087 = cljs.core.first(seq__38038_38081__$1);
var k_38088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38058_38087,(0),null);
var cb_38089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38058_38087,(1),null);
try{var G__38062_38090 = cljs.core.deref(re_frame.trace.traces);
(cb_38089.cljs$core$IFn$_invoke$arity$1 ? cb_38089.cljs$core$IFn$_invoke$arity$1(G__38062_38090) : cb_38089.call(null,G__38062_38090));
}catch (e38061){var e_38091 = e38061;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38088,"while storing",cljs.core.deref(re_frame.trace.traces),e_38091], 0));
}

var G__38092 = cljs.core.next(seq__38038_38081__$1);
var G__38093 = null;
var G__38094 = (0);
var G__38095 = (0);
seq__38038_38067 = G__38092;
chunk__38039_38068 = G__38093;
count__38040_38069 = G__38094;
i__38041_38070 = G__38095;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
