goog.provide('todo.core');
todo.core.dev_setup = (function todo$core$dev_setup(){
if(todo.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
todo.core.mount_root = (function todo$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.views.main_panel], null),root_el);
});
todo.core.init = (function todo$core$init(){
todo.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo.events","initialize-db","todo.events/initialize-db",990338399)], null));

todo.core.dev_setup();

return todo.core.mount_root();
});

//# sourceMappingURL=todo.core.js.map
