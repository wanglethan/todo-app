goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34733){
var map__34736 = p__34733;
var map__34736__$1 = cljs.core.__destructure_map(map__34736);
var m = map__34736__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34736__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34736__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34746_35024 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34747_35025 = null;
var count__34748_35026 = (0);
var i__34749_35027 = (0);
while(true){
if((i__34749_35027 < count__34748_35026)){
var f_35028 = chunk__34747_35025.cljs$core$IIndexed$_nth$arity$2(null,i__34749_35027);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35028], 0));


var G__35029 = seq__34746_35024;
var G__35030 = chunk__34747_35025;
var G__35031 = count__34748_35026;
var G__35032 = (i__34749_35027 + (1));
seq__34746_35024 = G__35029;
chunk__34747_35025 = G__35030;
count__34748_35026 = G__35031;
i__34749_35027 = G__35032;
continue;
} else {
var temp__5735__auto___35034 = cljs.core.seq(seq__34746_35024);
if(temp__5735__auto___35034){
var seq__34746_35035__$1 = temp__5735__auto___35034;
if(cljs.core.chunked_seq_QMARK_(seq__34746_35035__$1)){
var c__4591__auto___35036 = cljs.core.chunk_first(seq__34746_35035__$1);
var G__35037 = cljs.core.chunk_rest(seq__34746_35035__$1);
var G__35038 = c__4591__auto___35036;
var G__35039 = cljs.core.count(c__4591__auto___35036);
var G__35040 = (0);
seq__34746_35024 = G__35037;
chunk__34747_35025 = G__35038;
count__34748_35026 = G__35039;
i__34749_35027 = G__35040;
continue;
} else {
var f_35041 = cljs.core.first(seq__34746_35035__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35041], 0));


var G__35043 = cljs.core.next(seq__34746_35035__$1);
var G__35044 = null;
var G__35045 = (0);
var G__35046 = (0);
seq__34746_35024 = G__35043;
chunk__34747_35025 = G__35044;
count__34748_35026 = G__35045;
i__34749_35027 = G__35046;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35047 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35047], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35047)))?cljs.core.second(arglists_35047):arglists_35047)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34763_35052 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34764_35053 = null;
var count__34765_35054 = (0);
var i__34766_35055 = (0);
while(true){
if((i__34766_35055 < count__34765_35054)){
var vec__34794_35056 = chunk__34764_35053.cljs$core$IIndexed$_nth$arity$2(null,i__34766_35055);
var name_35057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794_35056,(0),null);
var map__34797_35058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794_35056,(1),null);
var map__34797_35059__$1 = cljs.core.__destructure_map(map__34797_35058);
var doc_35060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34797_35059__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34797_35059__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35057], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35061], 0));

if(cljs.core.truth_(doc_35060)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35060], 0));
} else {
}


var G__35064 = seq__34763_35052;
var G__35065 = chunk__34764_35053;
var G__35066 = count__34765_35054;
var G__35067 = (i__34766_35055 + (1));
seq__34763_35052 = G__35064;
chunk__34764_35053 = G__35065;
count__34765_35054 = G__35066;
i__34766_35055 = G__35067;
continue;
} else {
var temp__5735__auto___35068 = cljs.core.seq(seq__34763_35052);
if(temp__5735__auto___35068){
var seq__34763_35069__$1 = temp__5735__auto___35068;
if(cljs.core.chunked_seq_QMARK_(seq__34763_35069__$1)){
var c__4591__auto___35070 = cljs.core.chunk_first(seq__34763_35069__$1);
var G__35071 = cljs.core.chunk_rest(seq__34763_35069__$1);
var G__35072 = c__4591__auto___35070;
var G__35073 = cljs.core.count(c__4591__auto___35070);
var G__35074 = (0);
seq__34763_35052 = G__35071;
chunk__34764_35053 = G__35072;
count__34765_35054 = G__35073;
i__34766_35055 = G__35074;
continue;
} else {
var vec__34802_35075 = cljs.core.first(seq__34763_35069__$1);
var name_35076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34802_35075,(0),null);
var map__34805_35077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34802_35075,(1),null);
var map__34805_35078__$1 = cljs.core.__destructure_map(map__34805_35077);
var doc_35079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34805_35078__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34805_35078__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35076], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35080], 0));

if(cljs.core.truth_(doc_35079)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35079], 0));
} else {
}


var G__35082 = cljs.core.next(seq__34763_35069__$1);
var G__35083 = null;
var G__35084 = (0);
var G__35085 = (0);
seq__34763_35052 = G__35082;
chunk__34764_35053 = G__35083;
count__34765_35054 = G__35084;
i__34766_35055 = G__35085;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34815 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34816 = null;
var count__34817 = (0);
var i__34818 = (0);
while(true){
if((i__34818 < count__34817)){
var role = chunk__34816.cljs$core$IIndexed$_nth$arity$2(null,i__34818);
var temp__5735__auto___35088__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35088__$1)){
var spec_35089 = temp__5735__auto___35088__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35089)], 0));
} else {
}


var G__35091 = seq__34815;
var G__35092 = chunk__34816;
var G__35093 = count__34817;
var G__35094 = (i__34818 + (1));
seq__34815 = G__35091;
chunk__34816 = G__35092;
count__34817 = G__35093;
i__34818 = G__35094;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34815);
if(temp__5735__auto____$1){
var seq__34815__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34815__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__34815__$1);
var G__35096 = cljs.core.chunk_rest(seq__34815__$1);
var G__35097 = c__4591__auto__;
var G__35098 = cljs.core.count(c__4591__auto__);
var G__35099 = (0);
seq__34815 = G__35096;
chunk__34816 = G__35097;
count__34817 = G__35098;
i__34818 = G__35099;
continue;
} else {
var role = cljs.core.first(seq__34815__$1);
var temp__5735__auto___35101__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35101__$2)){
var spec_35102 = temp__5735__auto___35101__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35102)], 0));
} else {
}


var G__35103 = cljs.core.next(seq__34815__$1);
var G__35104 = null;
var G__35105 = (0);
var G__35106 = (0);
seq__34815 = G__35103;
chunk__34816 = G__35104;
count__34817 = G__35105;
i__34818 = G__35106;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35110 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35111 = cljs.core.ex_cause(t);
via = G__35110;
t = G__35111;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34897 = datafied_throwable;
var map__34897__$1 = cljs.core.__destructure_map(map__34897);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34897__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34897__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34897__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34898 = cljs.core.last(via);
var map__34898__$1 = cljs.core.__destructure_map(map__34898);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34898__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34898__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34898__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34899 = data;
var map__34899__$1 = cljs.core.__destructure_map(map__34899);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34899__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34899__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34899__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34900 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34900__$1 = cljs.core.__destructure_map(map__34900);
var top_data = map__34900__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34900__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34906 = phase;
var G__34906__$1 = (((G__34906 instanceof cljs.core.Keyword))?G__34906.fqn:null);
switch (G__34906__$1) {
case "read-source":
var map__34907 = data;
var map__34907__$1 = cljs.core.__destructure_map(map__34907);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34907__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34907__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34908 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34908__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34908,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34908);
var G__34908__$2 = (cljs.core.truth_((function (){var fexpr__34910 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34910.cljs$core$IFn$_invoke$arity$1 ? fexpr__34910.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34910.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34908__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34908__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34908__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34908__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34911 = top_data;
var G__34911__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34911,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34911);
var G__34911__$2 = (cljs.core.truth_((function (){var fexpr__34912 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34912.cljs$core$IFn$_invoke$arity$1 ? fexpr__34912.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34912.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34911__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34911__$1);
var G__34911__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34911__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34911__$2);
var G__34911__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34911__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34911__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34911__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34911__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34914 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34914,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34914,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34914,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34914,(3),null);
var G__34918 = top_data;
var G__34918__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34918,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34918);
var G__34918__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34918__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34918__$1);
var G__34918__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34918__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34918__$2);
var G__34918__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34918__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34918__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34918__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34918__$4;
}

break;
case "execution":
var vec__34919 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34919,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34919,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34919,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34919,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34888_SHARP_){
var or__4160__auto__ = (p1__34888_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
var fexpr__34928 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34928.cljs$core$IFn$_invoke$arity$1 ? fexpr__34928.cljs$core$IFn$_invoke$arity$1(p1__34888_SHARP_) : fexpr__34928.call(null,p1__34888_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__34931 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34931__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34931,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34931);
var G__34931__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34931__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34931__$1);
var G__34931__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34931__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34931__$2);
var G__34931__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34931__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34931__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34931__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34931__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34906__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34951){
var map__34956 = p__34951;
var map__34956__$1 = cljs.core.__destructure_map(map__34956);
var triage_data = map__34956__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34956__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34956__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34956__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34956__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34956__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34956__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34956__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34956__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = source;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4160__auto__ = class$;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34963 = phase;
var G__34963__$1 = (((G__34963 instanceof cljs.core.Keyword))?G__34963.fqn:null);
switch (G__34963__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34964 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34965 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34966 = loc;
var G__34967 = (cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34970_35232 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34971_35233 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34973_35234 = true;
var _STAR_print_fn_STAR__temp_val__34974_35235 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34973_35234);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34974_35235);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34946_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34946_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34971_35233);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34970_35232);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34964,G__34965,G__34966,G__34967) : format.call(null,G__34964,G__34965,G__34966,G__34967));

break;
case "macroexpansion":
var G__34979 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34980 = cause_type;
var G__34981 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34982 = loc;
var G__34983 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34979,G__34980,G__34981,G__34982,G__34983) : format.call(null,G__34979,G__34980,G__34981,G__34982,G__34983));

break;
case "compile-syntax-check":
var G__34985 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34986 = cause_type;
var G__34987 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34988 = loc;
var G__34989 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34985,G__34986,G__34987,G__34988,G__34989) : format.call(null,G__34985,G__34986,G__34987,G__34988,G__34989));

break;
case "compilation":
var G__34990 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34991 = cause_type;
var G__34992 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34993 = loc;
var G__34994 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34990,G__34991,G__34992,G__34993,G__34994) : format.call(null,G__34990,G__34991,G__34992,G__34993,G__34994));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34996 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34999 = symbol;
var G__35000 = loc;
var G__35001 = (function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35004_35256 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35005_35257 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35006_35258 = true;
var _STAR_print_fn_STAR__temp_val__35007_35259 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35006_35258);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35007_35259);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34949_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34949_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35005_35257);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35004_35256);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34996,G__34999,G__35000,G__35001) : format.call(null,G__34996,G__34999,G__35000,G__35001));
} else {
var G__35011 = "Execution error%s at %s(%s).\n%s\n";
var G__35012 = cause_type;
var G__35013 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35014 = loc;
var G__35015 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35011,G__35012,G__35013,G__35014,G__35015) : format.call(null,G__35011,G__35012,G__35013,G__35014,G__35015));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34963__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
