goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4777__auto__ = [];
var len__4771__auto___36921 = arguments.length;
var i__4772__auto___36922 = (0);
while(true){
if((i__4772__auto___36922 < len__4771__auto___36921)){
args__4777__auto__.push((arguments[i__4772__auto___36922]));

var G__36923 = (i__4772__auto___36922 + (1));
i__4772__auto___36922 = G__36923;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36735){
var G__36736 = cljs.core.first(seq36735);
var seq36735__$1 = cljs.core.next(seq36735);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36736,seq36735__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36740 = cljs.core.seq(sources);
var chunk__36741 = null;
var count__36742 = (0);
var i__36743 = (0);
while(true){
if((i__36743 < count__36742)){
var map__36750 = chunk__36741.cljs$core$IIndexed$_nth$arity$2(null,i__36743);
var map__36750__$1 = cljs.core.__destructure_map(map__36750);
var src = map__36750__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36750__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36751){var e_36930 = e36751;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36930);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36930.message)].join('')));
}

var G__36931 = seq__36740;
var G__36932 = chunk__36741;
var G__36933 = count__36742;
var G__36934 = (i__36743 + (1));
seq__36740 = G__36931;
chunk__36741 = G__36932;
count__36742 = G__36933;
i__36743 = G__36934;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36740);
if(temp__5735__auto__){
var seq__36740__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36740__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__36740__$1);
var G__36937 = cljs.core.chunk_rest(seq__36740__$1);
var G__36938 = c__4591__auto__;
var G__36939 = cljs.core.count(c__4591__auto__);
var G__36940 = (0);
seq__36740 = G__36937;
chunk__36741 = G__36938;
count__36742 = G__36939;
i__36743 = G__36940;
continue;
} else {
var map__36752 = cljs.core.first(seq__36740__$1);
var map__36752__$1 = cljs.core.__destructure_map(map__36752);
var src = map__36752__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36752__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36752__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36752__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36752__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36753){var e_36947 = e36753;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36947);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36947.message)].join('')));
}

var G__36948 = cljs.core.next(seq__36740__$1);
var G__36949 = null;
var G__36950 = (0);
var G__36951 = (0);
seq__36740 = G__36948;
chunk__36741 = G__36949;
count__36742 = G__36950;
i__36743 = G__36951;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36755 = cljs.core.seq(js_requires);
var chunk__36756 = null;
var count__36757 = (0);
var i__36758 = (0);
while(true){
if((i__36758 < count__36757)){
var js_ns = chunk__36756.cljs$core$IIndexed$_nth$arity$2(null,i__36758);
var require_str_36958 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36958);


var G__36959 = seq__36755;
var G__36960 = chunk__36756;
var G__36961 = count__36757;
var G__36962 = (i__36758 + (1));
seq__36755 = G__36959;
chunk__36756 = G__36960;
count__36757 = G__36961;
i__36758 = G__36962;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36755);
if(temp__5735__auto__){
var seq__36755__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36755__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__36755__$1);
var G__36964 = cljs.core.chunk_rest(seq__36755__$1);
var G__36965 = c__4591__auto__;
var G__36966 = cljs.core.count(c__4591__auto__);
var G__36967 = (0);
seq__36755 = G__36964;
chunk__36756 = G__36965;
count__36757 = G__36966;
i__36758 = G__36967;
continue;
} else {
var js_ns = cljs.core.first(seq__36755__$1);
var require_str_36968 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36968);


var G__36971 = cljs.core.next(seq__36755__$1);
var G__36972 = null;
var G__36973 = (0);
var G__36974 = (0);
seq__36755 = G__36971;
chunk__36756 = G__36972;
count__36757 = G__36973;
i__36758 = G__36974;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36764){
var map__36767 = p__36764;
var map__36767__$1 = cljs.core.__destructure_map(map__36767);
var msg = map__36767__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36767__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36767__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4564__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36768(s__36769){
return (new cljs.core.LazySeq(null,(function (){
var s__36769__$1 = s__36769;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36769__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36774 = cljs.core.first(xs__6292__auto__);
var map__36774__$1 = cljs.core.__destructure_map(map__36774);
var src = map__36774__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36774__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36774__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4560__auto__ = ((function (s__36769__$1,map__36774,map__36774__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36767,map__36767__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36768_$_iter__36770(s__36771){
return (new cljs.core.LazySeq(null,((function (s__36769__$1,map__36774,map__36774__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36767,map__36767__$1,msg,info,reload_info){
return (function (){
var s__36771__$1 = s__36771;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36771__$1);
if(temp__5735__auto____$1){
var s__36771__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36771__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__36771__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__36773 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__36772 = (0);
while(true){
if((i__36772 < size__4563__auto__)){
var warning = cljs.core._nth(c__4562__auto__,i__36772);
cljs.core.chunk_append(b__36773,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36985 = (i__36772 + (1));
i__36772 = G__36985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36773),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36768_$_iter__36770(cljs.core.chunk_rest(s__36771__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36773),null);
}
} else {
var warning = cljs.core.first(s__36771__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36768_$_iter__36770(cljs.core.rest(s__36771__$2)));
}
} else {
return null;
}
break;
}
});})(s__36769__$1,map__36774,map__36774__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36767,map__36767__$1,msg,info,reload_info))
,null,null));
});})(s__36769__$1,map__36774,map__36774__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36767,map__36767__$1,msg,info,reload_info))
;
var fs__4561__auto__ = cljs.core.seq(iterys__4560__auto__(warnings));
if(fs__4561__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4561__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36768(cljs.core.rest(s__36769__$1)));
} else {
var G__36988 = cljs.core.rest(s__36769__$1);
s__36769__$1 = G__36988;
continue;
}
} else {
var G__36989 = cljs.core.rest(s__36769__$1);
s__36769__$1 = G__36989;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36775_36990 = cljs.core.seq(warnings);
var chunk__36776_36991 = null;
var count__36777_36992 = (0);
var i__36778_36993 = (0);
while(true){
if((i__36778_36993 < count__36777_36992)){
var map__36781_36994 = chunk__36776_36991.cljs$core$IIndexed$_nth$arity$2(null,i__36778_36993);
var map__36781_36995__$1 = cljs.core.__destructure_map(map__36781_36994);
var w_36996 = map__36781_36995__$1;
var msg_36997__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36781_36995__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36781_36995__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36781_36995__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36781_36995__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37000)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36998),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36999),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36997__$1)].join(''));


var G__37001 = seq__36775_36990;
var G__37002 = chunk__36776_36991;
var G__37003 = count__36777_36992;
var G__37004 = (i__36778_36993 + (1));
seq__36775_36990 = G__37001;
chunk__36776_36991 = G__37002;
count__36777_36992 = G__37003;
i__36778_36993 = G__37004;
continue;
} else {
var temp__5735__auto___37005 = cljs.core.seq(seq__36775_36990);
if(temp__5735__auto___37005){
var seq__36775_37007__$1 = temp__5735__auto___37005;
if(cljs.core.chunked_seq_QMARK_(seq__36775_37007__$1)){
var c__4591__auto___37009 = cljs.core.chunk_first(seq__36775_37007__$1);
var G__37010 = cljs.core.chunk_rest(seq__36775_37007__$1);
var G__37011 = c__4591__auto___37009;
var G__37012 = cljs.core.count(c__4591__auto___37009);
var G__37013 = (0);
seq__36775_36990 = G__37010;
chunk__36776_36991 = G__37011;
count__36777_36992 = G__37012;
i__36778_36993 = G__37013;
continue;
} else {
var map__36786_37016 = cljs.core.first(seq__36775_37007__$1);
var map__36786_37017__$1 = cljs.core.__destructure_map(map__36786_37016);
var w_37018 = map__36786_37017__$1;
var msg_37019__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36786_37017__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36786_37017__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36786_37017__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36786_37017__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37022)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37020),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37021),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37019__$1)].join(''));


var G__37023 = cljs.core.next(seq__36775_37007__$1);
var G__37024 = null;
var G__37025 = (0);
var G__37026 = (0);
seq__36775_36990 = G__37023;
chunk__36776_36991 = G__37024;
count__36777_36992 = G__37025;
i__36778_36993 = G__37026;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36759_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36759_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36798){
var map__36799 = p__36798;
var map__36799__$1 = cljs.core.__destructure_map(map__36799);
var msg = map__36799__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36799__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36800 = cljs.core.seq(updates);
var chunk__36802 = null;
var count__36803 = (0);
var i__36804 = (0);
while(true){
if((i__36804 < count__36803)){
var path = chunk__36802.cljs$core$IIndexed$_nth$arity$2(null,i__36804);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36836_37027 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36840_37028 = null;
var count__36841_37029 = (0);
var i__36842_37030 = (0);
while(true){
if((i__36842_37030 < count__36841_37029)){
var node_37031 = chunk__36840_37028.cljs$core$IIndexed$_nth$arity$2(null,i__36842_37030);
if(cljs.core.not(node_37031.shadow$old)){
var path_match_37032 = shadow.cljs.devtools.client.browser.match_paths(node_37031.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37032)){
var new_link_37033 = (function (){var G__36848 = node_37031.cloneNode(true);
G__36848.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37032),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36848;
})();
(node_37031.shadow$old = true);

(new_link_37033.onload = ((function (seq__36836_37027,chunk__36840_37028,count__36841_37029,i__36842_37030,seq__36800,chunk__36802,count__36803,i__36804,new_link_37033,path_match_37032,node_37031,path,map__36799,map__36799__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37031);
});})(seq__36836_37027,chunk__36840_37028,count__36841_37029,i__36842_37030,seq__36800,chunk__36802,count__36803,i__36804,new_link_37033,path_match_37032,node_37031,path,map__36799,map__36799__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37032], 0));

goog.dom.insertSiblingAfter(new_link_37033,node_37031);


var G__37034 = seq__36836_37027;
var G__37035 = chunk__36840_37028;
var G__37036 = count__36841_37029;
var G__37037 = (i__36842_37030 + (1));
seq__36836_37027 = G__37034;
chunk__36840_37028 = G__37035;
count__36841_37029 = G__37036;
i__36842_37030 = G__37037;
continue;
} else {
var G__37038 = seq__36836_37027;
var G__37039 = chunk__36840_37028;
var G__37040 = count__36841_37029;
var G__37041 = (i__36842_37030 + (1));
seq__36836_37027 = G__37038;
chunk__36840_37028 = G__37039;
count__36841_37029 = G__37040;
i__36842_37030 = G__37041;
continue;
}
} else {
var G__37042 = seq__36836_37027;
var G__37043 = chunk__36840_37028;
var G__37044 = count__36841_37029;
var G__37045 = (i__36842_37030 + (1));
seq__36836_37027 = G__37042;
chunk__36840_37028 = G__37043;
count__36841_37029 = G__37044;
i__36842_37030 = G__37045;
continue;
}
} else {
var temp__5735__auto___37046 = cljs.core.seq(seq__36836_37027);
if(temp__5735__auto___37046){
var seq__36836_37047__$1 = temp__5735__auto___37046;
if(cljs.core.chunked_seq_QMARK_(seq__36836_37047__$1)){
var c__4591__auto___37048 = cljs.core.chunk_first(seq__36836_37047__$1);
var G__37049 = cljs.core.chunk_rest(seq__36836_37047__$1);
var G__37050 = c__4591__auto___37048;
var G__37051 = cljs.core.count(c__4591__auto___37048);
var G__37052 = (0);
seq__36836_37027 = G__37049;
chunk__36840_37028 = G__37050;
count__36841_37029 = G__37051;
i__36842_37030 = G__37052;
continue;
} else {
var node_37055 = cljs.core.first(seq__36836_37047__$1);
if(cljs.core.not(node_37055.shadow$old)){
var path_match_37056 = shadow.cljs.devtools.client.browser.match_paths(node_37055.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37056)){
var new_link_37057 = (function (){var G__36849 = node_37055.cloneNode(true);
G__36849.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37056),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36849;
})();
(node_37055.shadow$old = true);

(new_link_37057.onload = ((function (seq__36836_37027,chunk__36840_37028,count__36841_37029,i__36842_37030,seq__36800,chunk__36802,count__36803,i__36804,new_link_37057,path_match_37056,node_37055,seq__36836_37047__$1,temp__5735__auto___37046,path,map__36799,map__36799__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37055);
});})(seq__36836_37027,chunk__36840_37028,count__36841_37029,i__36842_37030,seq__36800,chunk__36802,count__36803,i__36804,new_link_37057,path_match_37056,node_37055,seq__36836_37047__$1,temp__5735__auto___37046,path,map__36799,map__36799__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37056], 0));

goog.dom.insertSiblingAfter(new_link_37057,node_37055);


var G__37058 = cljs.core.next(seq__36836_37047__$1);
var G__37059 = null;
var G__37060 = (0);
var G__37061 = (0);
seq__36836_37027 = G__37058;
chunk__36840_37028 = G__37059;
count__36841_37029 = G__37060;
i__36842_37030 = G__37061;
continue;
} else {
var G__37062 = cljs.core.next(seq__36836_37047__$1);
var G__37063 = null;
var G__37064 = (0);
var G__37065 = (0);
seq__36836_37027 = G__37062;
chunk__36840_37028 = G__37063;
count__36841_37029 = G__37064;
i__36842_37030 = G__37065;
continue;
}
} else {
var G__37066 = cljs.core.next(seq__36836_37047__$1);
var G__37067 = null;
var G__37068 = (0);
var G__37069 = (0);
seq__36836_37027 = G__37066;
chunk__36840_37028 = G__37067;
count__36841_37029 = G__37068;
i__36842_37030 = G__37069;
continue;
}
}
} else {
}
}
break;
}


var G__37070 = seq__36800;
var G__37071 = chunk__36802;
var G__37072 = count__36803;
var G__37073 = (i__36804 + (1));
seq__36800 = G__37070;
chunk__36802 = G__37071;
count__36803 = G__37072;
i__36804 = G__37073;
continue;
} else {
var G__37074 = seq__36800;
var G__37075 = chunk__36802;
var G__37076 = count__36803;
var G__37077 = (i__36804 + (1));
seq__36800 = G__37074;
chunk__36802 = G__37075;
count__36803 = G__37076;
i__36804 = G__37077;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36800);
if(temp__5735__auto__){
var seq__36800__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36800__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__36800__$1);
var G__37078 = cljs.core.chunk_rest(seq__36800__$1);
var G__37079 = c__4591__auto__;
var G__37080 = cljs.core.count(c__4591__auto__);
var G__37081 = (0);
seq__36800 = G__37078;
chunk__36802 = G__37079;
count__36803 = G__37080;
i__36804 = G__37081;
continue;
} else {
var path = cljs.core.first(seq__36800__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36851_37082 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36855_37083 = null;
var count__36856_37084 = (0);
var i__36857_37085 = (0);
while(true){
if((i__36857_37085 < count__36856_37084)){
var node_37086 = chunk__36855_37083.cljs$core$IIndexed$_nth$arity$2(null,i__36857_37085);
if(cljs.core.not(node_37086.shadow$old)){
var path_match_37087 = shadow.cljs.devtools.client.browser.match_paths(node_37086.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37087)){
var new_link_37088 = (function (){var G__36863 = node_37086.cloneNode(true);
G__36863.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37087),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36863;
})();
(node_37086.shadow$old = true);

(new_link_37088.onload = ((function (seq__36851_37082,chunk__36855_37083,count__36856_37084,i__36857_37085,seq__36800,chunk__36802,count__36803,i__36804,new_link_37088,path_match_37087,node_37086,path,seq__36800__$1,temp__5735__auto__,map__36799,map__36799__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37086);
});})(seq__36851_37082,chunk__36855_37083,count__36856_37084,i__36857_37085,seq__36800,chunk__36802,count__36803,i__36804,new_link_37088,path_match_37087,node_37086,path,seq__36800__$1,temp__5735__auto__,map__36799,map__36799__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37087], 0));

goog.dom.insertSiblingAfter(new_link_37088,node_37086);


var G__37092 = seq__36851_37082;
var G__37093 = chunk__36855_37083;
var G__37094 = count__36856_37084;
var G__37095 = (i__36857_37085 + (1));
seq__36851_37082 = G__37092;
chunk__36855_37083 = G__37093;
count__36856_37084 = G__37094;
i__36857_37085 = G__37095;
continue;
} else {
var G__37097 = seq__36851_37082;
var G__37098 = chunk__36855_37083;
var G__37099 = count__36856_37084;
var G__37100 = (i__36857_37085 + (1));
seq__36851_37082 = G__37097;
chunk__36855_37083 = G__37098;
count__36856_37084 = G__37099;
i__36857_37085 = G__37100;
continue;
}
} else {
var G__37101 = seq__36851_37082;
var G__37102 = chunk__36855_37083;
var G__37103 = count__36856_37084;
var G__37104 = (i__36857_37085 + (1));
seq__36851_37082 = G__37101;
chunk__36855_37083 = G__37102;
count__36856_37084 = G__37103;
i__36857_37085 = G__37104;
continue;
}
} else {
var temp__5735__auto___37107__$1 = cljs.core.seq(seq__36851_37082);
if(temp__5735__auto___37107__$1){
var seq__36851_37108__$1 = temp__5735__auto___37107__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36851_37108__$1)){
var c__4591__auto___37109 = cljs.core.chunk_first(seq__36851_37108__$1);
var G__37110 = cljs.core.chunk_rest(seq__36851_37108__$1);
var G__37111 = c__4591__auto___37109;
var G__37112 = cljs.core.count(c__4591__auto___37109);
var G__37113 = (0);
seq__36851_37082 = G__37110;
chunk__36855_37083 = G__37111;
count__36856_37084 = G__37112;
i__36857_37085 = G__37113;
continue;
} else {
var node_37114 = cljs.core.first(seq__36851_37108__$1);
if(cljs.core.not(node_37114.shadow$old)){
var path_match_37115 = shadow.cljs.devtools.client.browser.match_paths(node_37114.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37115)){
var new_link_37116 = (function (){var G__36864 = node_37114.cloneNode(true);
G__36864.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37115),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36864;
})();
(node_37114.shadow$old = true);

(new_link_37116.onload = ((function (seq__36851_37082,chunk__36855_37083,count__36856_37084,i__36857_37085,seq__36800,chunk__36802,count__36803,i__36804,new_link_37116,path_match_37115,node_37114,seq__36851_37108__$1,temp__5735__auto___37107__$1,path,seq__36800__$1,temp__5735__auto__,map__36799,map__36799__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37114);
});})(seq__36851_37082,chunk__36855_37083,count__36856_37084,i__36857_37085,seq__36800,chunk__36802,count__36803,i__36804,new_link_37116,path_match_37115,node_37114,seq__36851_37108__$1,temp__5735__auto___37107__$1,path,seq__36800__$1,temp__5735__auto__,map__36799,map__36799__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37115], 0));

goog.dom.insertSiblingAfter(new_link_37116,node_37114);


var G__37117 = cljs.core.next(seq__36851_37108__$1);
var G__37118 = null;
var G__37119 = (0);
var G__37120 = (0);
seq__36851_37082 = G__37117;
chunk__36855_37083 = G__37118;
count__36856_37084 = G__37119;
i__36857_37085 = G__37120;
continue;
} else {
var G__37121 = cljs.core.next(seq__36851_37108__$1);
var G__37122 = null;
var G__37123 = (0);
var G__37124 = (0);
seq__36851_37082 = G__37121;
chunk__36855_37083 = G__37122;
count__36856_37084 = G__37123;
i__36857_37085 = G__37124;
continue;
}
} else {
var G__37125 = cljs.core.next(seq__36851_37108__$1);
var G__37126 = null;
var G__37127 = (0);
var G__37128 = (0);
seq__36851_37082 = G__37125;
chunk__36855_37083 = G__37126;
count__36856_37084 = G__37127;
i__36857_37085 = G__37128;
continue;
}
}
} else {
}
}
break;
}


var G__37129 = cljs.core.next(seq__36800__$1);
var G__37130 = null;
var G__37131 = (0);
var G__37132 = (0);
seq__36800 = G__37129;
chunk__36802 = G__37130;
count__36803 = G__37131;
i__36804 = G__37132;
continue;
} else {
var G__37133 = cljs.core.next(seq__36800__$1);
var G__37134 = null;
var G__37135 = (0);
var G__37136 = (0);
seq__36800 = G__37133;
chunk__36802 = G__37134;
count__36803 = G__37135;
i__36804 = G__37136;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36865){
var map__36866 = p__36865;
var map__36866__$1 = cljs.core.__destructure_map(map__36866);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36866__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36871){
var map__36872 = p__36871;
var map__36872__$1 = cljs.core.__destructure_map(map__36872);
var _ = map__36872__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36872__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36873,done,error){
var map__36874 = p__36873;
var map__36874__$1 = cljs.core.__destructure_map(map__36874);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36874__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36875,done,error){
var map__36876 = p__36875;
var map__36876__$1 = cljs.core.__destructure_map(map__36876);
var msg = map__36876__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36876__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36876__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36876__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36881){
var map__36882 = p__36881;
var map__36882__$1 = cljs.core.__destructure_map(map__36882);
var src = map__36882__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36882__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4149__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4149__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36883 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36883) : done.call(null,G__36883));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36884){
var map__36885 = p__36884;
var map__36885__$1 = cljs.core.__destructure_map(map__36885);
var msg__$1 = map__36885__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36885__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36887){var ex = e36887;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36891){
var map__36892 = p__36891;
var map__36892__$1 = cljs.core.__destructure_map(map__36892);
var env = map__36892__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36892__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36905){
var map__36906 = p__36905;
var map__36906__$1 = cljs.core.__destructure_map(map__36906);
var msg = map__36906__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36906__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36909){
var map__36910 = p__36909;
var map__36910__$1 = cljs.core.__destructure_map(map__36910);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36910__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36910__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36915){
var map__36916 = p__36915;
var map__36916__$1 = cljs.core.__destructure_map(map__36916);
var svc = map__36916__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36916__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
