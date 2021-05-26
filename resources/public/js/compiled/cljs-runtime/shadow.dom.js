goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35273 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35273(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35281 = (function (this$){
var x__4463__auto__ = (((this$ == null))?null:this$);
var m__4464__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4464__auto__.call(null,this$));
} else {
var m__4461__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4461__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35281(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34274 = coll;
var G__34275 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34274,G__34275) : shadow.dom.lazy_native_coll_seq.call(null,G__34274,G__34275));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4160__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34285 = arguments.length;
switch (G__34285) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34291 = arguments.length;
switch (G__34291) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34301 = arguments.length;
switch (G__34301) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34312 = arguments.length;
switch (G__34312) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34326 = arguments.length;
switch (G__34326) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34336 = arguments.length;
switch (G__34336) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34353){if((e34353 instanceof Object)){
var e = e34353;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34353;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4160__auto__ = (!((typeof document !== 'undefined')));
if(or__4160__auto__){
return or__4160__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34360 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34361 = null;
var count__34362 = (0);
var i__34363 = (0);
while(true){
if((i__34363 < count__34362)){
var el = chunk__34361.cljs$core$IIndexed$_nth$arity$2(null,i__34363);
var handler_35373__$1 = ((function (seq__34360,chunk__34361,count__34362,i__34363,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34360,chunk__34361,count__34362,i__34363,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35373__$1);


var G__35375 = seq__34360;
var G__35376 = chunk__34361;
var G__35377 = count__34362;
var G__35378 = (i__34363 + (1));
seq__34360 = G__35375;
chunk__34361 = G__35376;
count__34362 = G__35377;
i__34363 = G__35378;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34360);
if(temp__5735__auto__){
var seq__34360__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34360__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34360__$1);
var G__35380 = cljs.core.chunk_rest(seq__34360__$1);
var G__35381 = c__4591__auto__;
var G__35382 = cljs.core.count(c__4591__auto__);
var G__35383 = (0);
seq__34360 = G__35380;
chunk__34361 = G__35381;
count__34362 = G__35382;
i__34363 = G__35383;
continue;
} else {
var el = cljs.core.first(seq__34360__$1);
var handler_35385__$1 = ((function (seq__34360,chunk__34361,count__34362,i__34363,el,seq__34360__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34360,chunk__34361,count__34362,i__34363,el,seq__34360__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35385__$1);


var G__35387 = cljs.core.next(seq__34360__$1);
var G__35388 = null;
var G__35389 = (0);
var G__35390 = (0);
seq__34360 = G__35387;
chunk__34361 = G__35388;
count__34362 = G__35389;
i__34363 = G__35390;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34384 = arguments.length;
switch (G__34384) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34401 = cljs.core.seq(events);
var chunk__34402 = null;
var count__34403 = (0);
var i__34404 = (0);
while(true){
if((i__34404 < count__34403)){
var vec__34413 = chunk__34402.cljs$core$IIndexed$_nth$arity$2(null,i__34404);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34413,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34413,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35402 = seq__34401;
var G__35403 = chunk__34402;
var G__35404 = count__34403;
var G__35405 = (i__34404 + (1));
seq__34401 = G__35402;
chunk__34402 = G__35403;
count__34403 = G__35404;
i__34404 = G__35405;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34401);
if(temp__5735__auto__){
var seq__34401__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34401__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34401__$1);
var G__35407 = cljs.core.chunk_rest(seq__34401__$1);
var G__35408 = c__4591__auto__;
var G__35409 = cljs.core.count(c__4591__auto__);
var G__35410 = (0);
seq__34401 = G__35407;
chunk__34402 = G__35408;
count__34403 = G__35409;
i__34404 = G__35410;
continue;
} else {
var vec__34419 = cljs.core.first(seq__34401__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34419,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35411 = cljs.core.next(seq__34401__$1);
var G__35412 = null;
var G__35413 = (0);
var G__35414 = (0);
seq__34401 = G__35411;
chunk__34402 = G__35412;
count__34403 = G__35413;
i__34404 = G__35414;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34425 = cljs.core.seq(styles);
var chunk__34426 = null;
var count__34427 = (0);
var i__34428 = (0);
while(true){
if((i__34428 < count__34427)){
var vec__34439 = chunk__34426.cljs$core$IIndexed$_nth$arity$2(null,i__34428);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34439,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35416 = seq__34425;
var G__35417 = chunk__34426;
var G__35418 = count__34427;
var G__35419 = (i__34428 + (1));
seq__34425 = G__35416;
chunk__34426 = G__35417;
count__34427 = G__35418;
i__34428 = G__35419;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34425);
if(temp__5735__auto__){
var seq__34425__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34425__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34425__$1);
var G__35422 = cljs.core.chunk_rest(seq__34425__$1);
var G__35423 = c__4591__auto__;
var G__35424 = cljs.core.count(c__4591__auto__);
var G__35425 = (0);
seq__34425 = G__35422;
chunk__34426 = G__35423;
count__34427 = G__35424;
i__34428 = G__35425;
continue;
} else {
var vec__34444 = cljs.core.first(seq__34425__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34444,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34444,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35430 = cljs.core.next(seq__34425__$1);
var G__35431 = null;
var G__35432 = (0);
var G__35433 = (0);
seq__34425 = G__35430;
chunk__34426 = G__35431;
count__34427 = G__35432;
i__34428 = G__35433;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34450_35435 = key;
var G__34450_35436__$1 = (((G__34450_35435 instanceof cljs.core.Keyword))?G__34450_35435.fqn:null);
switch (G__34450_35436__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35444 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4160__auto__ = goog.string.startsWith(ks_35444,"data-");
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return goog.string.startsWith(ks_35444,"aria-");
}
})())){
el.setAttribute(ks_35444,value);
} else {
(el[ks_35444] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34474){
var map__34475 = p__34474;
var map__34475__$1 = cljs.core.__destructure_map(map__34475);
var props = map__34475__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34475__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34476 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34476,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34476,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34476,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34479 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34479,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34479;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34482 = arguments.length;
switch (G__34482) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34490){
var vec__34491 = p__34490;
var seq__34492 = cljs.core.seq(vec__34491);
var first__34493 = cljs.core.first(seq__34492);
var seq__34492__$1 = cljs.core.next(seq__34492);
var nn = first__34493;
var first__34493__$1 = cljs.core.first(seq__34492__$1);
var seq__34492__$2 = cljs.core.next(seq__34492__$1);
var np = first__34493__$1;
var nc = seq__34492__$2;
var node = vec__34491;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34501 = nn;
var G__34502 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34501,G__34502) : create_fn.call(null,G__34501,G__34502));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34503 = nn;
var G__34504 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34503,G__34504) : create_fn.call(null,G__34503,G__34504));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34510 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34510,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34510,(1),null);
var seq__34514_35533 = cljs.core.seq(node_children);
var chunk__34515_35535 = null;
var count__34516_35536 = (0);
var i__34517_35537 = (0);
while(true){
if((i__34517_35537 < count__34516_35536)){
var child_struct_35545 = chunk__34515_35535.cljs$core$IIndexed$_nth$arity$2(null,i__34517_35537);
var children_35546 = shadow.dom.dom_node(child_struct_35545);
if(cljs.core.seq_QMARK_(children_35546)){
var seq__34546_35551 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35546));
var chunk__34548_35552 = null;
var count__34549_35553 = (0);
var i__34550_35554 = (0);
while(true){
if((i__34550_35554 < count__34549_35553)){
var child_35564 = chunk__34548_35552.cljs$core$IIndexed$_nth$arity$2(null,i__34550_35554);
if(cljs.core.truth_(child_35564)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35564);


var G__35567 = seq__34546_35551;
var G__35568 = chunk__34548_35552;
var G__35569 = count__34549_35553;
var G__35570 = (i__34550_35554 + (1));
seq__34546_35551 = G__35567;
chunk__34548_35552 = G__35568;
count__34549_35553 = G__35569;
i__34550_35554 = G__35570;
continue;
} else {
var G__35574 = seq__34546_35551;
var G__35575 = chunk__34548_35552;
var G__35576 = count__34549_35553;
var G__35577 = (i__34550_35554 + (1));
seq__34546_35551 = G__35574;
chunk__34548_35552 = G__35575;
count__34549_35553 = G__35576;
i__34550_35554 = G__35577;
continue;
}
} else {
var temp__5735__auto___35580 = cljs.core.seq(seq__34546_35551);
if(temp__5735__auto___35580){
var seq__34546_35581__$1 = temp__5735__auto___35580;
if(cljs.core.chunked_seq_QMARK_(seq__34546_35581__$1)){
var c__4591__auto___35584 = cljs.core.chunk_first(seq__34546_35581__$1);
var G__35585 = cljs.core.chunk_rest(seq__34546_35581__$1);
var G__35586 = c__4591__auto___35584;
var G__35587 = cljs.core.count(c__4591__auto___35584);
var G__35588 = (0);
seq__34546_35551 = G__35585;
chunk__34548_35552 = G__35586;
count__34549_35553 = G__35587;
i__34550_35554 = G__35588;
continue;
} else {
var child_35590 = cljs.core.first(seq__34546_35581__$1);
if(cljs.core.truth_(child_35590)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35590);


var G__35597 = cljs.core.next(seq__34546_35581__$1);
var G__35598 = null;
var G__35599 = (0);
var G__35600 = (0);
seq__34546_35551 = G__35597;
chunk__34548_35552 = G__35598;
count__34549_35553 = G__35599;
i__34550_35554 = G__35600;
continue;
} else {
var G__35606 = cljs.core.next(seq__34546_35581__$1);
var G__35607 = null;
var G__35608 = (0);
var G__35609 = (0);
seq__34546_35551 = G__35606;
chunk__34548_35552 = G__35607;
count__34549_35553 = G__35608;
i__34550_35554 = G__35609;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35546);
}


var G__35612 = seq__34514_35533;
var G__35613 = chunk__34515_35535;
var G__35614 = count__34516_35536;
var G__35615 = (i__34517_35537 + (1));
seq__34514_35533 = G__35612;
chunk__34515_35535 = G__35613;
count__34516_35536 = G__35614;
i__34517_35537 = G__35615;
continue;
} else {
var temp__5735__auto___35624 = cljs.core.seq(seq__34514_35533);
if(temp__5735__auto___35624){
var seq__34514_35628__$1 = temp__5735__auto___35624;
if(cljs.core.chunked_seq_QMARK_(seq__34514_35628__$1)){
var c__4591__auto___35629 = cljs.core.chunk_first(seq__34514_35628__$1);
var G__35632 = cljs.core.chunk_rest(seq__34514_35628__$1);
var G__35633 = c__4591__auto___35629;
var G__35634 = cljs.core.count(c__4591__auto___35629);
var G__35635 = (0);
seq__34514_35533 = G__35632;
chunk__34515_35535 = G__35633;
count__34516_35536 = G__35634;
i__34517_35537 = G__35635;
continue;
} else {
var child_struct_35637 = cljs.core.first(seq__34514_35628__$1);
var children_35640 = shadow.dom.dom_node(child_struct_35637);
if(cljs.core.seq_QMARK_(children_35640)){
var seq__34558_35641 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35640));
var chunk__34560_35642 = null;
var count__34561_35643 = (0);
var i__34562_35644 = (0);
while(true){
if((i__34562_35644 < count__34561_35643)){
var child_35654 = chunk__34560_35642.cljs$core$IIndexed$_nth$arity$2(null,i__34562_35644);
if(cljs.core.truth_(child_35654)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35654);


var G__35659 = seq__34558_35641;
var G__35660 = chunk__34560_35642;
var G__35661 = count__34561_35643;
var G__35662 = (i__34562_35644 + (1));
seq__34558_35641 = G__35659;
chunk__34560_35642 = G__35660;
count__34561_35643 = G__35661;
i__34562_35644 = G__35662;
continue;
} else {
var G__35668 = seq__34558_35641;
var G__35669 = chunk__34560_35642;
var G__35670 = count__34561_35643;
var G__35671 = (i__34562_35644 + (1));
seq__34558_35641 = G__35668;
chunk__34560_35642 = G__35669;
count__34561_35643 = G__35670;
i__34562_35644 = G__35671;
continue;
}
} else {
var temp__5735__auto___35673__$1 = cljs.core.seq(seq__34558_35641);
if(temp__5735__auto___35673__$1){
var seq__34558_35677__$1 = temp__5735__auto___35673__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34558_35677__$1)){
var c__4591__auto___35678 = cljs.core.chunk_first(seq__34558_35677__$1);
var G__35683 = cljs.core.chunk_rest(seq__34558_35677__$1);
var G__35684 = c__4591__auto___35678;
var G__35685 = cljs.core.count(c__4591__auto___35678);
var G__35686 = (0);
seq__34558_35641 = G__35683;
chunk__34560_35642 = G__35684;
count__34561_35643 = G__35685;
i__34562_35644 = G__35686;
continue;
} else {
var child_35690 = cljs.core.first(seq__34558_35677__$1);
if(cljs.core.truth_(child_35690)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35690);


var G__35694 = cljs.core.next(seq__34558_35677__$1);
var G__35695 = null;
var G__35696 = (0);
var G__35697 = (0);
seq__34558_35641 = G__35694;
chunk__34560_35642 = G__35695;
count__34561_35643 = G__35696;
i__34562_35644 = G__35697;
continue;
} else {
var G__35701 = cljs.core.next(seq__34558_35677__$1);
var G__35702 = null;
var G__35703 = (0);
var G__35704 = (0);
seq__34558_35641 = G__35701;
chunk__34560_35642 = G__35702;
count__34561_35643 = G__35703;
i__34562_35644 = G__35704;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35640);
}


var G__35711 = cljs.core.next(seq__34514_35628__$1);
var G__35712 = null;
var G__35713 = (0);
var G__35714 = (0);
seq__34514_35533 = G__35711;
chunk__34515_35535 = G__35712;
count__34516_35536 = G__35713;
i__34517_35537 = G__35714;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34581 = cljs.core.seq(node);
var chunk__34582 = null;
var count__34583 = (0);
var i__34584 = (0);
while(true){
if((i__34584 < count__34583)){
var n = chunk__34582.cljs$core$IIndexed$_nth$arity$2(null,i__34584);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35723 = seq__34581;
var G__35724 = chunk__34582;
var G__35725 = count__34583;
var G__35726 = (i__34584 + (1));
seq__34581 = G__35723;
chunk__34582 = G__35724;
count__34583 = G__35725;
i__34584 = G__35726;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34581);
if(temp__5735__auto__){
var seq__34581__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34581__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34581__$1);
var G__35727 = cljs.core.chunk_rest(seq__34581__$1);
var G__35728 = c__4591__auto__;
var G__35729 = cljs.core.count(c__4591__auto__);
var G__35730 = (0);
seq__34581 = G__35727;
chunk__34582 = G__35728;
count__34583 = G__35729;
i__34584 = G__35730;
continue;
} else {
var n = cljs.core.first(seq__34581__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35731 = cljs.core.next(seq__34581__$1);
var G__35732 = null;
var G__35733 = (0);
var G__35734 = (0);
seq__34581 = G__35731;
chunk__34582 = G__35732;
count__34583 = G__35733;
i__34584 = G__35734;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34597 = arguments.length;
switch (G__34597) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34601 = arguments.length;
switch (G__34601) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34606 = arguments.length;
switch (G__34606) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4160__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4777__auto__ = [];
var len__4771__auto___35753 = arguments.length;
var i__4772__auto___35754 = (0);
while(true){
if((i__4772__auto___35754 < len__4771__auto___35753)){
args__4777__auto__.push((arguments[i__4772__auto___35754]));

var G__35755 = (i__4772__auto___35754 + (1));
i__4772__auto___35754 = G__35755;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34642_35756 = cljs.core.seq(nodes);
var chunk__34643_35757 = null;
var count__34644_35758 = (0);
var i__34645_35759 = (0);
while(true){
if((i__34645_35759 < count__34644_35758)){
var node_35763 = chunk__34643_35757.cljs$core$IIndexed$_nth$arity$2(null,i__34645_35759);
fragment.appendChild(shadow.dom._to_dom(node_35763));


var G__35764 = seq__34642_35756;
var G__35765 = chunk__34643_35757;
var G__35766 = count__34644_35758;
var G__35767 = (i__34645_35759 + (1));
seq__34642_35756 = G__35764;
chunk__34643_35757 = G__35765;
count__34644_35758 = G__35766;
i__34645_35759 = G__35767;
continue;
} else {
var temp__5735__auto___35768 = cljs.core.seq(seq__34642_35756);
if(temp__5735__auto___35768){
var seq__34642_35769__$1 = temp__5735__auto___35768;
if(cljs.core.chunked_seq_QMARK_(seq__34642_35769__$1)){
var c__4591__auto___35770 = cljs.core.chunk_first(seq__34642_35769__$1);
var G__35771 = cljs.core.chunk_rest(seq__34642_35769__$1);
var G__35772 = c__4591__auto___35770;
var G__35773 = cljs.core.count(c__4591__auto___35770);
var G__35774 = (0);
seq__34642_35756 = G__35771;
chunk__34643_35757 = G__35772;
count__34644_35758 = G__35773;
i__34645_35759 = G__35774;
continue;
} else {
var node_35775 = cljs.core.first(seq__34642_35769__$1);
fragment.appendChild(shadow.dom._to_dom(node_35775));


var G__35776 = cljs.core.next(seq__34642_35769__$1);
var G__35777 = null;
var G__35778 = (0);
var G__35779 = (0);
seq__34642_35756 = G__35776;
chunk__34643_35757 = G__35777;
count__34644_35758 = G__35778;
i__34645_35759 = G__35779;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34635){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34635));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34675_35780 = cljs.core.seq(scripts);
var chunk__34676_35781 = null;
var count__34677_35782 = (0);
var i__34678_35783 = (0);
while(true){
if((i__34678_35783 < count__34677_35782)){
var vec__34689_35784 = chunk__34676_35781.cljs$core$IIndexed$_nth$arity$2(null,i__34678_35783);
var script_tag_35785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34689_35784,(0),null);
var script_body_35786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34689_35784,(1),null);
eval(script_body_35786);


var G__35791 = seq__34675_35780;
var G__35792 = chunk__34676_35781;
var G__35793 = count__34677_35782;
var G__35794 = (i__34678_35783 + (1));
seq__34675_35780 = G__35791;
chunk__34676_35781 = G__35792;
count__34677_35782 = G__35793;
i__34678_35783 = G__35794;
continue;
} else {
var temp__5735__auto___35795 = cljs.core.seq(seq__34675_35780);
if(temp__5735__auto___35795){
var seq__34675_35796__$1 = temp__5735__auto___35795;
if(cljs.core.chunked_seq_QMARK_(seq__34675_35796__$1)){
var c__4591__auto___35797 = cljs.core.chunk_first(seq__34675_35796__$1);
var G__35798 = cljs.core.chunk_rest(seq__34675_35796__$1);
var G__35799 = c__4591__auto___35797;
var G__35800 = cljs.core.count(c__4591__auto___35797);
var G__35801 = (0);
seq__34675_35780 = G__35798;
chunk__34676_35781 = G__35799;
count__34677_35782 = G__35800;
i__34678_35783 = G__35801;
continue;
} else {
var vec__34693_35802 = cljs.core.first(seq__34675_35796__$1);
var script_tag_35803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34693_35802,(0),null);
var script_body_35804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34693_35802,(1),null);
eval(script_body_35804);


var G__35805 = cljs.core.next(seq__34675_35796__$1);
var G__35806 = null;
var G__35807 = (0);
var G__35808 = (0);
seq__34675_35780 = G__35805;
chunk__34676_35781 = G__35806;
count__34677_35782 = G__35807;
i__34678_35783 = G__35808;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34697){
var vec__34699 = p__34697;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34699,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34699,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34711 = arguments.length;
switch (G__34711) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34719 = cljs.core.seq(style_keys);
var chunk__34720 = null;
var count__34721 = (0);
var i__34722 = (0);
while(true){
if((i__34722 < count__34721)){
var it = chunk__34720.cljs$core$IIndexed$_nth$arity$2(null,i__34722);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35812 = seq__34719;
var G__35813 = chunk__34720;
var G__35814 = count__34721;
var G__35815 = (i__34722 + (1));
seq__34719 = G__35812;
chunk__34720 = G__35813;
count__34721 = G__35814;
i__34722 = G__35815;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34719);
if(temp__5735__auto__){
var seq__34719__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34719__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34719__$1);
var G__35817 = cljs.core.chunk_rest(seq__34719__$1);
var G__35818 = c__4591__auto__;
var G__35819 = cljs.core.count(c__4591__auto__);
var G__35820 = (0);
seq__34719 = G__35817;
chunk__34720 = G__35818;
count__34721 = G__35819;
i__34722 = G__35820;
continue;
} else {
var it = cljs.core.first(seq__34719__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35821 = cljs.core.next(seq__34719__$1);
var G__35822 = null;
var G__35823 = (0);
var G__35824 = (0);
seq__34719 = G__35821;
chunk__34720 = G__35822;
count__34721 = G__35823;
i__34722 = G__35824;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k34726,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__34738 = k34726;
var G__34738__$1 = (((G__34738 instanceof cljs.core.Keyword))?G__34738.fqn:null);
switch (G__34738__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34726,else__4418__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__34739){
var vec__34740 = p__34739;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34740,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34740,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34725){
var self__ = this;
var G__34725__$1 = this;
return (new cljs.core.RecordIter((0),G__34725__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34727,other34728){
var self__ = this;
var this34727__$1 = this;
return (((!((other34728 == null)))) && ((this34727__$1.constructor === other34728.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34727__$1.x,other34728.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34727__$1.y,other34728.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34727__$1.__extmap,other34728.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__34725){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__34751 = cljs.core.keyword_identical_QMARK_;
var expr__34752 = k__4423__auto__;
if(cljs.core.truth_((pred__34751.cljs$core$IFn$_invoke$arity$2 ? pred__34751.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34752) : pred__34751.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34752)))){
return (new shadow.dom.Coordinate(G__34725,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34751.cljs$core$IFn$_invoke$arity$2 ? pred__34751.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34752) : pred__34751.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34752)))){
return (new shadow.dom.Coordinate(self__.x,G__34725,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__34725),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__34725){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34725,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34732){
var extmap__4454__auto__ = (function (){var G__34759 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34732,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34732)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34759);
} else {
return G__34759;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34732),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34732),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4415__auto__,k__4416__auto__){
var self__ = this;
var this__4415__auto____$1 = this;
return this__4415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4416__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4417__auto__,k34810,else__4418__auto__){
var self__ = this;
var this__4417__auto____$1 = this;
var G__34860 = k34810;
var G__34860__$1 = (((G__34860 instanceof cljs.core.Keyword))?G__34860.fqn:null);
switch (G__34860__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34810,else__4418__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4434__auto__,f__4435__auto__,init__4436__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4437__auto__,p__34883){
var vec__34884 = p__34883;
var k__4438__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34884,(0),null);
var v__4439__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34884,(1),null);
return (f__4435__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4435__auto__.cljs$core$IFn$_invoke$arity$3(ret__4437__auto__,k__4438__auto__,v__4439__auto__) : f__4435__auto__.call(null,ret__4437__auto__,k__4438__auto__,v__4439__auto__));
}),init__4436__auto__,this__4434__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4429__auto__,writer__4430__auto__,opts__4431__auto__){
var self__ = this;
var this__4429__auto____$1 = this;
var pr_pair__4432__auto__ = (function (keyval__4433__auto__){
return cljs.core.pr_sequential_writer(writer__4430__auto__,cljs.core.pr_writer,""," ","",opts__4431__auto__,keyval__4433__auto__);
});
return cljs.core.pr_sequential_writer(writer__4430__auto__,pr_pair__4432__auto__,"#shadow.dom.Size{",", ","}",opts__4431__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34809){
var self__ = this;
var G__34809__$1 = this;
return (new cljs.core.RecordIter((0),G__34809__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4410__auto__){
var self__ = this;
var this__4410__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4419__auto__){
var self__ = this;
var this__4419__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4411__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var h__4273__auto__ = self__.__hash;
if((!((h__4273__auto__ == null)))){
return h__4273__auto__;
} else {
var h__4273__auto____$1 = (function (coll__4412__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4412__auto__));
})(this__4411__auto____$1);
(self__.__hash = h__4273__auto____$1);

return h__4273__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34811,other34812){
var self__ = this;
var this34811__$1 = this;
return (((!((other34812 == null)))) && ((this34811__$1.constructor === other34812.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34811__$1.w,other34812.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34811__$1.h,other34812.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34811__$1.__extmap,other34812.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4424__auto__,k__4425__auto__){
var self__ = this;
var this__4424__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4425__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4424__auto____$1),self__.__meta),k__4425__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4425__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4422__auto__,k__4423__auto__,G__34809){
var self__ = this;
var this__4422__auto____$1 = this;
var pred__34932 = cljs.core.keyword_identical_QMARK_;
var expr__34933 = k__4423__auto__;
if(cljs.core.truth_((pred__34932.cljs$core$IFn$_invoke$arity$2 ? pred__34932.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34933) : pred__34932.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34933)))){
return (new shadow.dom.Size(G__34809,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34932.cljs$core$IFn$_invoke$arity$2 ? pred__34932.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34933) : pred__34932.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34933)))){
return (new shadow.dom.Size(self__.w,G__34809,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4423__auto__,G__34809),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4427__auto__){
var self__ = this;
var this__4427__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4414__auto__,G__34809){
var self__ = this;
var this__4414__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34809,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4420__auto__,entry__4421__auto__){
var self__ = this;
var this__4420__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4421__auto__)){
return this__4420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4421__auto__,(0)),cljs.core._nth(entry__4421__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4420__auto____$1,entry__4421__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4458__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4458__auto__,writer__4459__auto__){
return cljs.core._write(writer__4459__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34823){
var extmap__4454__auto__ = (function (){var G__34941 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34823,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34823)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34941);
} else {
return G__34941;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34823),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34823),null,cljs.core.not_empty(extmap__4454__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4645__auto__ = opts;
var l__4646__auto__ = a__4645__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4646__auto__)){
var G__35904 = (i + (1));
var G__35905 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35904;
ret = G__35905;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34957){
var vec__34958 = p__34957;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34962 = arguments.length;
switch (G__34962) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35912 = ps;
var G__35913 = (i + (1));
el__$1 = G__35912;
i = G__35913;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35124 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35129_35918 = cljs.core.seq(props);
var chunk__35131_35919 = null;
var count__35132_35920 = (0);
var i__35133_35921 = (0);
while(true){
if((i__35133_35921 < count__35132_35920)){
var vec__35144_35922 = chunk__35131_35919.cljs$core$IIndexed$_nth$arity$2(null,i__35133_35921);
var k_35923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35144_35922,(0),null);
var v_35924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35144_35922,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35923);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35923),v_35924);


var G__35929 = seq__35129_35918;
var G__35930 = chunk__35131_35919;
var G__35931 = count__35132_35920;
var G__35932 = (i__35133_35921 + (1));
seq__35129_35918 = G__35929;
chunk__35131_35919 = G__35930;
count__35132_35920 = G__35931;
i__35133_35921 = G__35932;
continue;
} else {
var temp__5735__auto___35933 = cljs.core.seq(seq__35129_35918);
if(temp__5735__auto___35933){
var seq__35129_35934__$1 = temp__5735__auto___35933;
if(cljs.core.chunked_seq_QMARK_(seq__35129_35934__$1)){
var c__4591__auto___35935 = cljs.core.chunk_first(seq__35129_35934__$1);
var G__35936 = cljs.core.chunk_rest(seq__35129_35934__$1);
var G__35937 = c__4591__auto___35935;
var G__35938 = cljs.core.count(c__4591__auto___35935);
var G__35939 = (0);
seq__35129_35918 = G__35936;
chunk__35131_35919 = G__35937;
count__35132_35920 = G__35938;
i__35133_35921 = G__35939;
continue;
} else {
var vec__35150_35942 = cljs.core.first(seq__35129_35934__$1);
var k_35943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35150_35942,(0),null);
var v_35944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35150_35942,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35943);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35943),v_35944);


var G__35945 = cljs.core.next(seq__35129_35934__$1);
var G__35946 = null;
var G__35947 = (0);
var G__35948 = (0);
seq__35129_35918 = G__35945;
chunk__35131_35919 = G__35946;
count__35132_35920 = G__35947;
i__35133_35921 = G__35948;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35157 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35157,(1),null);
var seq__35160_35951 = cljs.core.seq(node_children);
var chunk__35162_35952 = null;
var count__35163_35953 = (0);
var i__35164_35954 = (0);
while(true){
if((i__35164_35954 < count__35163_35953)){
var child_struct_35956 = chunk__35162_35952.cljs$core$IIndexed$_nth$arity$2(null,i__35164_35954);
if((!((child_struct_35956 == null)))){
if(typeof child_struct_35956 === 'string'){
var text_35957 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35957),child_struct_35956].join(''));
} else {
var children_35958 = shadow.dom.svg_node(child_struct_35956);
if(cljs.core.seq_QMARK_(children_35958)){
var seq__35198_35959 = cljs.core.seq(children_35958);
var chunk__35200_35960 = null;
var count__35201_35961 = (0);
var i__35202_35962 = (0);
while(true){
if((i__35202_35962 < count__35201_35961)){
var child_35963 = chunk__35200_35960.cljs$core$IIndexed$_nth$arity$2(null,i__35202_35962);
if(cljs.core.truth_(child_35963)){
node.appendChild(child_35963);


var G__35965 = seq__35198_35959;
var G__35966 = chunk__35200_35960;
var G__35967 = count__35201_35961;
var G__35968 = (i__35202_35962 + (1));
seq__35198_35959 = G__35965;
chunk__35200_35960 = G__35966;
count__35201_35961 = G__35967;
i__35202_35962 = G__35968;
continue;
} else {
var G__35969 = seq__35198_35959;
var G__35970 = chunk__35200_35960;
var G__35971 = count__35201_35961;
var G__35972 = (i__35202_35962 + (1));
seq__35198_35959 = G__35969;
chunk__35200_35960 = G__35970;
count__35201_35961 = G__35971;
i__35202_35962 = G__35972;
continue;
}
} else {
var temp__5735__auto___35977 = cljs.core.seq(seq__35198_35959);
if(temp__5735__auto___35977){
var seq__35198_35978__$1 = temp__5735__auto___35977;
if(cljs.core.chunked_seq_QMARK_(seq__35198_35978__$1)){
var c__4591__auto___35979 = cljs.core.chunk_first(seq__35198_35978__$1);
var G__35981 = cljs.core.chunk_rest(seq__35198_35978__$1);
var G__35982 = c__4591__auto___35979;
var G__35983 = cljs.core.count(c__4591__auto___35979);
var G__35984 = (0);
seq__35198_35959 = G__35981;
chunk__35200_35960 = G__35982;
count__35201_35961 = G__35983;
i__35202_35962 = G__35984;
continue;
} else {
var child_35985 = cljs.core.first(seq__35198_35978__$1);
if(cljs.core.truth_(child_35985)){
node.appendChild(child_35985);


var G__35986 = cljs.core.next(seq__35198_35978__$1);
var G__35987 = null;
var G__35988 = (0);
var G__35989 = (0);
seq__35198_35959 = G__35986;
chunk__35200_35960 = G__35987;
count__35201_35961 = G__35988;
i__35202_35962 = G__35989;
continue;
} else {
var G__35995 = cljs.core.next(seq__35198_35978__$1);
var G__35996 = null;
var G__35997 = (0);
var G__35998 = (0);
seq__35198_35959 = G__35995;
chunk__35200_35960 = G__35996;
count__35201_35961 = G__35997;
i__35202_35962 = G__35998;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35958);
}
}


var G__35999 = seq__35160_35951;
var G__36000 = chunk__35162_35952;
var G__36001 = count__35163_35953;
var G__36002 = (i__35164_35954 + (1));
seq__35160_35951 = G__35999;
chunk__35162_35952 = G__36000;
count__35163_35953 = G__36001;
i__35164_35954 = G__36002;
continue;
} else {
var G__36003 = seq__35160_35951;
var G__36004 = chunk__35162_35952;
var G__36005 = count__35163_35953;
var G__36006 = (i__35164_35954 + (1));
seq__35160_35951 = G__36003;
chunk__35162_35952 = G__36004;
count__35163_35953 = G__36005;
i__35164_35954 = G__36006;
continue;
}
} else {
var temp__5735__auto___36008 = cljs.core.seq(seq__35160_35951);
if(temp__5735__auto___36008){
var seq__35160_36009__$1 = temp__5735__auto___36008;
if(cljs.core.chunked_seq_QMARK_(seq__35160_36009__$1)){
var c__4591__auto___36010 = cljs.core.chunk_first(seq__35160_36009__$1);
var G__36012 = cljs.core.chunk_rest(seq__35160_36009__$1);
var G__36013 = c__4591__auto___36010;
var G__36014 = cljs.core.count(c__4591__auto___36010);
var G__36015 = (0);
seq__35160_35951 = G__36012;
chunk__35162_35952 = G__36013;
count__35163_35953 = G__36014;
i__35164_35954 = G__36015;
continue;
} else {
var child_struct_36016 = cljs.core.first(seq__35160_36009__$1);
if((!((child_struct_36016 == null)))){
if(typeof child_struct_36016 === 'string'){
var text_36017 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36017),child_struct_36016].join(''));
} else {
var children_36019 = shadow.dom.svg_node(child_struct_36016);
if(cljs.core.seq_QMARK_(children_36019)){
var seq__35209_36020 = cljs.core.seq(children_36019);
var chunk__35211_36021 = null;
var count__35212_36022 = (0);
var i__35213_36023 = (0);
while(true){
if((i__35213_36023 < count__35212_36022)){
var child_36024 = chunk__35211_36021.cljs$core$IIndexed$_nth$arity$2(null,i__35213_36023);
if(cljs.core.truth_(child_36024)){
node.appendChild(child_36024);


var G__36025 = seq__35209_36020;
var G__36026 = chunk__35211_36021;
var G__36027 = count__35212_36022;
var G__36028 = (i__35213_36023 + (1));
seq__35209_36020 = G__36025;
chunk__35211_36021 = G__36026;
count__35212_36022 = G__36027;
i__35213_36023 = G__36028;
continue;
} else {
var G__36029 = seq__35209_36020;
var G__36030 = chunk__35211_36021;
var G__36031 = count__35212_36022;
var G__36032 = (i__35213_36023 + (1));
seq__35209_36020 = G__36029;
chunk__35211_36021 = G__36030;
count__35212_36022 = G__36031;
i__35213_36023 = G__36032;
continue;
}
} else {
var temp__5735__auto___36033__$1 = cljs.core.seq(seq__35209_36020);
if(temp__5735__auto___36033__$1){
var seq__35209_36034__$1 = temp__5735__auto___36033__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35209_36034__$1)){
var c__4591__auto___36035 = cljs.core.chunk_first(seq__35209_36034__$1);
var G__36039 = cljs.core.chunk_rest(seq__35209_36034__$1);
var G__36040 = c__4591__auto___36035;
var G__36041 = cljs.core.count(c__4591__auto___36035);
var G__36042 = (0);
seq__35209_36020 = G__36039;
chunk__35211_36021 = G__36040;
count__35212_36022 = G__36041;
i__35213_36023 = G__36042;
continue;
} else {
var child_36043 = cljs.core.first(seq__35209_36034__$1);
if(cljs.core.truth_(child_36043)){
node.appendChild(child_36043);


var G__36044 = cljs.core.next(seq__35209_36034__$1);
var G__36045 = null;
var G__36046 = (0);
var G__36047 = (0);
seq__35209_36020 = G__36044;
chunk__35211_36021 = G__36045;
count__35212_36022 = G__36046;
i__35213_36023 = G__36047;
continue;
} else {
var G__36048 = cljs.core.next(seq__35209_36034__$1);
var G__36049 = null;
var G__36050 = (0);
var G__36051 = (0);
seq__35209_36020 = G__36048;
chunk__35211_36021 = G__36049;
count__35212_36022 = G__36050;
i__35213_36023 = G__36051;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36019);
}
}


var G__36056 = cljs.core.next(seq__35160_36009__$1);
var G__36057 = null;
var G__36058 = (0);
var G__36059 = (0);
seq__35160_35951 = G__36056;
chunk__35162_35952 = G__36057;
count__35163_35953 = G__36058;
i__35164_35954 = G__36059;
continue;
} else {
var G__36060 = cljs.core.next(seq__35160_36009__$1);
var G__36061 = null;
var G__36062 = (0);
var G__36063 = (0);
seq__35160_35951 = G__36060;
chunk__35162_35952 = G__36061;
count__35163_35953 = G__36062;
i__35164_35954 = G__36063;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36091 = arguments.length;
var i__4772__auto___36092 = (0);
while(true){
if((i__4772__auto___36092 < len__4771__auto___36091)){
args__4777__auto__.push((arguments[i__4772__auto___36092]));

var G__36097 = (i__4772__auto___36092 + (1));
i__4772__auto___36092 = G__36097;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35222){
var G__35223 = cljs.core.first(seq35222);
var seq35222__$1 = cljs.core.next(seq35222);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35223,seq35222__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35227 = arguments.length;
switch (G__35227) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4149__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4149__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4149__auto__;
}
})())){
var c__31800__auto___36129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_35243){
var state_val_35244 = (state_35243[(1)]);
if((state_val_35244 === (1))){
var state_35243__$1 = state_35243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35243__$1,(2),once_or_cleanup);
} else {
if((state_val_35244 === (2))){
var inst_35239 = (state_35243[(2)]);
var inst_35240 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35243__$1 = (function (){var statearr_35247 = state_35243;
(statearr_35247[(7)] = inst_35239);

return statearr_35247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35243__$1,inst_35240);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31629__auto__ = null;
var shadow$dom$state_machine__31629__auto____0 = (function (){
var statearr_35249 = [null,null,null,null,null,null,null,null];
(statearr_35249[(0)] = shadow$dom$state_machine__31629__auto__);

(statearr_35249[(1)] = (1));

return statearr_35249;
});
var shadow$dom$state_machine__31629__auto____1 = (function (state_35243){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_35243);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e35252){var ex__31632__auto__ = e35252;
var statearr_35253_36139 = state_35243;
(statearr_35253_36139[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_35243[(4)]))){
var statearr_35254_36141 = state_35243;
(statearr_35254_36141[(1)] = cljs.core.first((state_35243[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36143 = state_35243;
state_35243 = G__36143;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
shadow$dom$state_machine__31629__auto__ = function(state_35243){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31629__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31629__auto____1.call(this,state_35243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31629__auto____0;
shadow$dom$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31629__auto____1;
return shadow$dom$state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_35255 = f__31801__auto__();
(statearr_35255[(6)] = c__31800__auto___36129);

return statearr_35255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
