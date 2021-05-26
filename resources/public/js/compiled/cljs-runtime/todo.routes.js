goog.provide('todo.routes');
if((typeof todo !== 'undefined') && (typeof todo.routes !== 'undefined') && (typeof todo.routes.panels !== 'undefined')){
} else {
todo.routes.panels = (function (){var method_table__4654__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4655__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4656__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4657__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4658__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28953 = cljs.core.get_global_hierarchy;
return (fexpr__28953.cljs$core$IFn$_invoke$arity$0 ? fexpr__28953.cljs$core$IFn$_invoke$arity$0() : fexpr__28953.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("todo.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4658__auto__,method_table__4654__auto__,prefer_table__4655__auto__,method_cache__4656__auto__,cached_hierarchy__4657__auto__));
})();
}
todo.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No panel found for this route."], null);
}));
todo.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, ["",new cljs.core.Keyword(null,"login","login",55217519),"home",new cljs.core.Keyword(null,"home","home",-74557309),"signup",new cljs.core.Keyword(null,"signup","signup",1961016747)], null)], null));
todo.routes.parse = (function todo$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(todo.routes.routes),url);
});
todo.routes.url_for = (function todo$routes$url_for(var_args){
var args__4777__auto__ = [];
var len__4771__auto___28955 = arguments.length;
var i__4772__auto___28956 = (0);
while(true){
if((i__4772__auto___28956 < len__4771__auto___28955)){
args__4777__auto__.push((arguments[i__4772__auto___28956]));

var G__28957 = (i__4772__auto___28956 + (1));
i__4772__auto___28956 = G__28957;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return todo.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(todo.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(todo.routes.routes)], null),args));
}));

(todo.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(todo.routes.url_for.cljs$lang$applyTo = (function (seq28954){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28954));
}));

todo.routes.dispatch = (function todo$routes$dispatch(route){
var panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)),"-panel"].join(''));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo.events","set-active-panel","todo.events/set-active-panel",1166237225),panel], null));
});
todo.routes.history = pushy.core.pushy(todo.routes.dispatch,todo.routes.parse);
todo.routes.navigate_BANG_ = (function todo$routes$navigate_BANG_(handler){
return todo.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,todo.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler], 0)));
});
todo.routes.start_BANG_ = (function todo$routes$start_BANG_(){
return todo.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (handler){
return todo.routes.navigate_BANG_(handler);
}));

//# sourceMappingURL=todo.routes.js.map
