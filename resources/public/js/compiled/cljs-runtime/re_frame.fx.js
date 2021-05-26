goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38340 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38341 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38341);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___38422 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___38422)){
var new_db_38424 = temp__5735__auto___38422;
var fexpr__38345_38425 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38345_38425.cljs$core$IFn$_invoke$arity$1 ? fexpr__38345_38425.cljs$core$IFn$_invoke$arity$1(new_db_38424) : fexpr__38345_38425.call(null,new_db_38424));
} else {
}

var seq__38346 = cljs.core.seq(effects_without_db);
var chunk__38347 = null;
var count__38348 = (0);
var i__38349 = (0);
while(true){
if((i__38349 < count__38348)){
var vec__38357 = chunk__38347.cljs$core$IIndexed$_nth$arity$2(null,i__38349);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38357,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38357,(1),null);
var temp__5733__auto___38430 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38430)){
var effect_fn_38431 = temp__5733__auto___38430;
(effect_fn_38431.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38431.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38431.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38432 = seq__38346;
var G__38433 = chunk__38347;
var G__38434 = count__38348;
var G__38435 = (i__38349 + (1));
seq__38346 = G__38432;
chunk__38347 = G__38433;
count__38348 = G__38434;
i__38349 = G__38435;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38346);
if(temp__5735__auto__){
var seq__38346__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38346__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__38346__$1);
var G__38439 = cljs.core.chunk_rest(seq__38346__$1);
var G__38440 = c__4591__auto__;
var G__38441 = cljs.core.count(c__4591__auto__);
var G__38442 = (0);
seq__38346 = G__38439;
chunk__38347 = G__38440;
count__38348 = G__38441;
i__38349 = G__38442;
continue;
} else {
var vec__38360 = cljs.core.first(seq__38346__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38360,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38360,(1),null);
var temp__5733__auto___38443 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38443)){
var effect_fn_38444 = temp__5733__auto___38443;
(effect_fn_38444.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38444.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38444.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38449 = cljs.core.next(seq__38346__$1);
var G__38450 = null;
var G__38451 = (0);
var G__38452 = (0);
seq__38346 = G__38449;
chunk__38347 = G__38450;
count__38348 = G__38451;
i__38349 = G__38452;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38012__auto___38457 = re_frame.interop.now();
var duration__38013__auto___38458 = (end__38012__auto___38457 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38013__auto___38458,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38012__auto___38457);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38340);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___38463 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___38463)){
var new_db_38464 = temp__5735__auto___38463;
var fexpr__38363_38465 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38363_38465.cljs$core$IFn$_invoke$arity$1 ? fexpr__38363_38465.cljs$core$IFn$_invoke$arity$1(new_db_38464) : fexpr__38363_38465.call(null,new_db_38464));
} else {
}

var seq__38364 = cljs.core.seq(effects_without_db);
var chunk__38365 = null;
var count__38366 = (0);
var i__38367 = (0);
while(true){
if((i__38367 < count__38366)){
var vec__38375 = chunk__38365.cljs$core$IIndexed$_nth$arity$2(null,i__38367);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38375,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38375,(1),null);
var temp__5733__auto___38466 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38466)){
var effect_fn_38467 = temp__5733__auto___38466;
(effect_fn_38467.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38467.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38467.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38468 = seq__38364;
var G__38469 = chunk__38365;
var G__38470 = count__38366;
var G__38471 = (i__38367 + (1));
seq__38364 = G__38468;
chunk__38365 = G__38469;
count__38366 = G__38470;
i__38367 = G__38471;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38364);
if(temp__5735__auto__){
var seq__38364__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38364__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__38364__$1);
var G__38472 = cljs.core.chunk_rest(seq__38364__$1);
var G__38473 = c__4591__auto__;
var G__38474 = cljs.core.count(c__4591__auto__);
var G__38475 = (0);
seq__38364 = G__38472;
chunk__38365 = G__38473;
count__38366 = G__38474;
i__38367 = G__38475;
continue;
} else {
var vec__38378 = cljs.core.first(seq__38364__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38378,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38378,(1),null);
var temp__5733__auto___38476 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38476)){
var effect_fn_38477 = temp__5733__auto___38476;
(effect_fn_38477.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38477.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38477.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38478 = cljs.core.next(seq__38364__$1);
var G__38479 = null;
var G__38480 = (0);
var G__38481 = (0);
seq__38364 = G__38478;
chunk__38365 = G__38479;
count__38366 = G__38480;
i__38367 = G__38481;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__38381){
var map__38383 = p__38381;
var map__38383__$1 = cljs.core.__destructure_map(map__38383);
var effect = map__38383__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38383__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38383__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__38385 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38386 = null;
var count__38387 = (0);
var i__38388 = (0);
while(true){
if((i__38388 < count__38387)){
var effect = chunk__38386.cljs$core$IIndexed$_nth$arity$2(null,i__38388);
re_frame.fx.dispatch_later(effect);


var G__38482 = seq__38385;
var G__38483 = chunk__38386;
var G__38484 = count__38387;
var G__38485 = (i__38388 + (1));
seq__38385 = G__38482;
chunk__38386 = G__38483;
count__38387 = G__38484;
i__38388 = G__38485;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38385);
if(temp__5735__auto__){
var seq__38385__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38385__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__38385__$1);
var G__38486 = cljs.core.chunk_rest(seq__38385__$1);
var G__38487 = c__4591__auto__;
var G__38488 = cljs.core.count(c__4591__auto__);
var G__38489 = (0);
seq__38385 = G__38486;
chunk__38386 = G__38487;
count__38387 = G__38488;
i__38388 = G__38489;
continue;
} else {
var effect = cljs.core.first(seq__38385__$1);
re_frame.fx.dispatch_later(effect);


var G__38490 = cljs.core.next(seq__38385__$1);
var G__38491 = null;
var G__38492 = (0);
var G__38493 = (0);
seq__38385 = G__38490;
chunk__38386 = G__38491;
count__38387 = G__38492;
i__38388 = G__38493;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__38389 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__38390 = null;
var count__38391 = (0);
var i__38392 = (0);
while(true){
if((i__38392 < count__38391)){
var vec__38400 = chunk__38390.cljs$core$IIndexed$_nth$arity$2(null,i__38392);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38400,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38400,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___38494 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38494)){
var effect_fn_38495 = temp__5733__auto___38494;
(effect_fn_38495.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38495.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38495.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38497 = seq__38389;
var G__38498 = chunk__38390;
var G__38499 = count__38391;
var G__38500 = (i__38392 + (1));
seq__38389 = G__38497;
chunk__38390 = G__38498;
count__38391 = G__38499;
i__38392 = G__38500;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38389);
if(temp__5735__auto__){
var seq__38389__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38389__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__38389__$1);
var G__38507 = cljs.core.chunk_rest(seq__38389__$1);
var G__38508 = c__4591__auto__;
var G__38509 = cljs.core.count(c__4591__auto__);
var G__38510 = (0);
seq__38389 = G__38507;
chunk__38390 = G__38508;
count__38391 = G__38509;
i__38392 = G__38510;
continue;
} else {
var vec__38403 = cljs.core.first(seq__38389__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38403,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38403,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___38511 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38511)){
var effect_fn_38512 = temp__5733__auto___38511;
(effect_fn_38512.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38512.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38512.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__38514 = cljs.core.next(seq__38389__$1);
var G__38515 = null;
var G__38516 = (0);
var G__38517 = (0);
seq__38389 = G__38514;
chunk__38390 = G__38515;
count__38391 = G__38516;
i__38392 = G__38517;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__38408 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38409 = null;
var count__38410 = (0);
var i__38411 = (0);
while(true){
if((i__38411 < count__38410)){
var event = chunk__38409.cljs$core$IIndexed$_nth$arity$2(null,i__38411);
re_frame.router.dispatch(event);


var G__38522 = seq__38408;
var G__38523 = chunk__38409;
var G__38524 = count__38410;
var G__38525 = (i__38411 + (1));
seq__38408 = G__38522;
chunk__38409 = G__38523;
count__38410 = G__38524;
i__38411 = G__38525;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38408);
if(temp__5735__auto__){
var seq__38408__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38408__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__38408__$1);
var G__38526 = cljs.core.chunk_rest(seq__38408__$1);
var G__38527 = c__4591__auto__;
var G__38528 = cljs.core.count(c__4591__auto__);
var G__38529 = (0);
seq__38408 = G__38526;
chunk__38409 = G__38527;
count__38410 = G__38528;
i__38411 = G__38529;
continue;
} else {
var event = cljs.core.first(seq__38408__$1);
re_frame.router.dispatch(event);


var G__38531 = cljs.core.next(seq__38408__$1);
var G__38532 = null;
var G__38533 = (0);
var G__38534 = (0);
seq__38408 = G__38531;
chunk__38409 = G__38532;
count__38410 = G__38533;
i__38411 = G__38534;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38414 = cljs.core.seq(value);
var chunk__38415 = null;
var count__38416 = (0);
var i__38417 = (0);
while(true){
if((i__38417 < count__38416)){
var event = chunk__38415.cljs$core$IIndexed$_nth$arity$2(null,i__38417);
clear_event(event);


var G__38537 = seq__38414;
var G__38538 = chunk__38415;
var G__38539 = count__38416;
var G__38540 = (i__38417 + (1));
seq__38414 = G__38537;
chunk__38415 = G__38538;
count__38416 = G__38539;
i__38417 = G__38540;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38414);
if(temp__5735__auto__){
var seq__38414__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38414__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__38414__$1);
var G__38541 = cljs.core.chunk_rest(seq__38414__$1);
var G__38542 = c__4591__auto__;
var G__38543 = cljs.core.count(c__4591__auto__);
var G__38544 = (0);
seq__38414 = G__38541;
chunk__38415 = G__38542;
count__38416 = G__38543;
i__38417 = G__38544;
continue;
} else {
var event = cljs.core.first(seq__38414__$1);
clear_event(event);


var G__38545 = cljs.core.next(seq__38414__$1);
var G__38546 = null;
var G__38547 = (0);
var G__38548 = (0);
seq__38414 = G__38545;
chunk__38415 = G__38546;
count__38416 = G__38547;
i__38417 = G__38548;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
