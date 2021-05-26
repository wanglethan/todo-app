goog.provide('todo.events');
todo.events.ls_key = "todo-app";
todo.events.write_to_ls = re_frame.core.after((function (db){
return localStorage.setItem(todo.events.ls_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(db));
}));
todo.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.events.write_to_ls], null);
re_frame.core.reg_cofx(new cljs.core.Keyword(null,"local-store","local-store",1708979092),(function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"local-store","local-store",1708979092),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem(todo.events.ls_key)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("todo.events","initialize-db","todo.events/initialize-db",990338399),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-store","local-store",1708979092))], null),(function (p__28908,_){
var map__28909 = p__28908;
var map__28909__$1 = cljs.core.__destructure_map(map__28909);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28909__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28909__$1,new cljs.core.Keyword(null,"local-store","local-store",1708979092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),local_store], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo.events","navigate","todo.events/navigate",-1201849146),(function (_,p__28910){
var vec__28911 = p__28910;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28911,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28911,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),handler], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("todo.events","set-active-panel","todo.events/set-active-panel",1166237225),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.events.write_to_ls], null),(function (p__28914,p__28915){
var map__28916 = p__28914;
var map__28916__$1 = cljs.core.__destructure_map(map__28916);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28916__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28917 = p__28915;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28917,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28917,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel)], null);
}));
todo.events.__GT_keyword = (function todo$events$__GT_keyword(str){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(str,/ /,"-"));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-active-user","set-active-user",-1137424270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.events.write_to_ls], null),(function (db,p__28920){
var vec__28921 = p__28920;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28921,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28921,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-user","active-user",-625701621),username);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"submit-login","submit-login",1259826940),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.events.write_to_ls], null),(function (db,p__28924){
var vec__28925 = p__28924;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28925,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28925,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28925,(2),null);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(db),todo.events.__GT_keyword(username));
if(cljs.core.truth_(user)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(password,new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(user))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-user","set-active-user",-1137424270),username], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo.events","navigate","todo.events/navigate",-1201849146),new cljs.core.Keyword(null,"home","home",-74557309)], null));

return db;
} else {
alert("Password is incorrect");

return db;
}
} else {
alert("User does not exist.");

return db;
}
}));
todo.events.new_account = (function todo$events$new_account(username,password){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"todo-list","todo-list",653205378),cljs.core.PersistentArrayMap.EMPTY], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"create-account","create-account",-1493050940),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.events.write_to_ls], null),(function (db,p__28928){
var vec__28929 = p__28928;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28929,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28929,(1),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28929,(2),null);
var pass_confirm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28929,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(password,pass_confirm)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(db),todo.events.__GT_keyword(username)))){
alert("Username already exists.");

return db;
} else {
alert("Account sucessfully created!");

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-user","set-active-user",-1137424270),username], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo.events","navigate","todo.events/navigate",-1201849146),new cljs.core.Keyword(null,"home","home",-74557309)], null));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),todo.events.__GT_keyword(username)], null),todo.events.new_account(username,password));
}
} else {
alert("Passwords much match.");

return db;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413),(function (db,_){
alert(["this is the current db: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(db)].join(''));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.events.write_to_ls], null),(function (db,p__28932){
var vec__28933 = p__28932;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933,(1),null);
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28933,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),todo.events.__GT_keyword(user),new cljs.core.Keyword(null,"todo-list","todo-list",653205378),todo.events.__GT_keyword(task)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),task,new cljs.core.Keyword(null,"completed","completed",-486056503),false], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"remove-todo","remove-todo",-1330305330),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.events.write_to_ls], null),(function (db,p__28936){
var vec__28937 = p__28936;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28937,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28937,(1),null);
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28937,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),todo.events.__GT_keyword(user),new cljs.core.Keyword(null,"todo-list","todo-list",653205378)], null),cljs.core.dissoc,todo.events.__GT_keyword(task));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"toggle-complete","toggle-complete",1195057173),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.events.write_to_ls], null),(function (db,p__28940){
var vec__28941 = p__28940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28941,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28941,(1),null);
var task = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28941,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),todo.events.__GT_keyword(user),new cljs.core.Keyword(null,"todo-list","todo-list",653205378),todo.events.__GT_keyword(task),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"remove-all","remove-all",641637880),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.events.write_to_ls], null),(function (db,p__28944){
var vec__28945 = p__28944;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28945,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28945,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),todo.events.__GT_keyword(user),new cljs.core.Keyword(null,"todo-list","todo-list",653205378)], null),cljs.core.PersistentArrayMap.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.events.write_to_ls], null),(function (db,p__28949){
var vec__28950 = p__28949;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28950,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28950,(1),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28950,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),todo.events.__GT_keyword(user),new cljs.core.Keyword(null,"todo-list","todo-list",653205378)], null),(function (p1__28948_SHARP_){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"completed","completed",-486056503),status));
}),cljs.core.PersistentArrayMap.EMPTY,p1__28948_SHARP_);
}));
}));

//# sourceMappingURL=todo.events.js.map
