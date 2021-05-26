goog.provide('todo.subs');
todo.subs.__GT_keyword = (function todo$subs$__GT_keyword(str){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(str,/ /,"-"));
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("todo.subs","active-panel","todo.subs/active-panel",-1337762465),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"active-user","active-user",-625701621).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-todos","get-todos",192578608),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.vals(new cljs.core.Keyword(null,"todo-list","todo-list",653205378).cljs$core$IFn$_invoke$arity$1((function (){var G__28893 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(db);
var fexpr__28892 = todo.subs.__GT_keyword(new cljs.core.Keyword(null,"active-user","active-user",-625701621).cljs$core$IFn$_invoke$arity$1(db));
return (fexpr__28892.cljs$core$IFn$_invoke$arity$1 ? fexpr__28892.cljs$core$IFn$_invoke$arity$1(G__28893) : fexpr__28892.call(null,G__28893));
})()));
})], 0));

//# sourceMappingURL=todo.subs.js.map
