goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31925 = arguments.length;
switch (G__31925) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31932 = (function (f,blockable,meta31933){
this.f = f;
this.blockable = blockable;
this.meta31933 = meta31933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31934,meta31933__$1){
var self__ = this;
var _31934__$1 = this;
return (new cljs.core.async.t_cljs$core$async31932(self__.f,self__.blockable,meta31933__$1));
}));

(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31934){
var self__ = this;
var _31934__$1 = this;
return self__.meta31933;
}));

(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31933","meta31933",-949665991,null)], null);
}));

(cljs.core.async.t_cljs$core$async31932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31932");

(cljs.core.async.t_cljs$core$async31932.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31932.
 */
cljs.core.async.__GT_t_cljs$core$async31932 = (function cljs$core$async$__GT_t_cljs$core$async31932(f__$1,blockable__$1,meta31933){
return (new cljs.core.async.t_cljs$core$async31932(f__$1,blockable__$1,meta31933));
});

}

return (new cljs.core.async.t_cljs$core$async31932(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31937 = arguments.length;
switch (G__31937) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31939 = arguments.length;
switch (G__31939) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31944 = arguments.length;
switch (G__31944) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34147 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34147) : fn1.call(null,val_34147));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34147) : fn1.call(null,val_34147));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31949 = arguments.length;
switch (G__31949) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___34159 = n;
var x_34160 = (0);
while(true){
if((x_34160 < n__4648__auto___34159)){
(a[x_34160] = x_34160);

var G__34161 = (x_34160 + (1));
x_34160 = G__34161;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31992 = (function (flag,meta31993){
this.flag = flag;
this.meta31993 = meta31993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31994,meta31993__$1){
var self__ = this;
var _31994__$1 = this;
return (new cljs.core.async.t_cljs$core$async31992(self__.flag,meta31993__$1));
}));

(cljs.core.async.t_cljs$core$async31992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31994){
var self__ = this;
var _31994__$1 = this;
return self__.meta31993;
}));

(cljs.core.async.t_cljs$core$async31992.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31992.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31993","meta31993",2038726859,null)], null);
}));

(cljs.core.async.t_cljs$core$async31992.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31992");

(cljs.core.async.t_cljs$core$async31992.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async31992");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31992.
 */
cljs.core.async.__GT_t_cljs$core$async31992 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31992(flag__$1,meta31993){
return (new cljs.core.async.t_cljs$core$async31992(flag__$1,meta31993));
});

}

return (new cljs.core.async.t_cljs$core$async31992(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32064 = (function (flag,cb,meta32065){
this.flag = flag;
this.cb = cb;
this.meta32065 = meta32065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32066,meta32065__$1){
var self__ = this;
var _32066__$1 = this;
return (new cljs.core.async.t_cljs$core$async32064(self__.flag,self__.cb,meta32065__$1));
}));

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32066){
var self__ = this;
var _32066__$1 = this;
return self__.meta32065;
}));

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32065","meta32065",-21910967,null)], null);
}));

(cljs.core.async.t_cljs$core$async32064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32064");

(cljs.core.async.t_cljs$core$async32064.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async32064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32064.
 */
cljs.core.async.__GT_t_cljs$core$async32064 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32064(flag__$1,cb__$1,meta32065){
return (new cljs.core.async.t_cljs$core$async32064(flag__$1,cb__$1,meta32065));
});

}

return (new cljs.core.async.t_cljs$core$async32064(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32068_SHARP_){
var G__32070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32068_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32070) : fret.call(null,G__32070));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32069_SHARP_){
var G__32071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32069_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32071) : fret.call(null,G__32071));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34188 = (i + (1));
i = G__34188;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4149__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4149__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___34191 = arguments.length;
var i__4772__auto___34192 = (0);
while(true){
if((i__4772__auto___34192 < len__4771__auto___34191)){
args__4777__auto__.push((arguments[i__4772__auto___34192]));

var G__34194 = (i__4772__auto___34192 + (1));
i__4772__auto___34192 = G__34194;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32087){
var map__32088 = p__32087;
var map__32088__$1 = cljs.core.__destructure_map(map__32088);
var opts = map__32088__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32084){
var G__32085 = cljs.core.first(seq32084);
var seq32084__$1 = cljs.core.next(seq32084);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32085,seq32084__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32090 = arguments.length;
switch (G__32090) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31800__auto___34205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_32117){
var state_val_32118 = (state_32117[(1)]);
if((state_val_32118 === (7))){
var inst_32113 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32119_34206 = state_32117__$1;
(statearr_32119_34206[(2)] = inst_32113);

(statearr_32119_34206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (1))){
var state_32117__$1 = state_32117;
var statearr_32120_34216 = state_32117__$1;
(statearr_32120_34216[(2)] = null);

(statearr_32120_34216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (4))){
var inst_32095 = (state_32117[(7)]);
var inst_32095__$1 = (state_32117[(2)]);
var inst_32096 = (inst_32095__$1 == null);
var state_32117__$1 = (function (){var statearr_32121 = state_32117;
(statearr_32121[(7)] = inst_32095__$1);

return statearr_32121;
})();
if(cljs.core.truth_(inst_32096)){
var statearr_32122_34217 = state_32117__$1;
(statearr_32122_34217[(1)] = (5));

} else {
var statearr_32123_34218 = state_32117__$1;
(statearr_32123_34218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (13))){
var state_32117__$1 = state_32117;
var statearr_32124_34223 = state_32117__$1;
(statearr_32124_34223[(2)] = null);

(statearr_32124_34223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (6))){
var inst_32095 = (state_32117[(7)]);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32117__$1,(11),to,inst_32095);
} else {
if((state_val_32118 === (3))){
var inst_32115 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32117__$1,inst_32115);
} else {
if((state_val_32118 === (12))){
var state_32117__$1 = state_32117;
var statearr_32125_34233 = state_32117__$1;
(statearr_32125_34233[(2)] = null);

(statearr_32125_34233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (2))){
var state_32117__$1 = state_32117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32117__$1,(4),from);
} else {
if((state_val_32118 === (11))){
var inst_32106 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
if(cljs.core.truth_(inst_32106)){
var statearr_32126_34235 = state_32117__$1;
(statearr_32126_34235[(1)] = (12));

} else {
var statearr_32127_34236 = state_32117__$1;
(statearr_32127_34236[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (9))){
var state_32117__$1 = state_32117;
var statearr_32128_34238 = state_32117__$1;
(statearr_32128_34238[(2)] = null);

(statearr_32128_34238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (5))){
var state_32117__$1 = state_32117;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32129_34239 = state_32117__$1;
(statearr_32129_34239[(1)] = (8));

} else {
var statearr_32130_34240 = state_32117__$1;
(statearr_32130_34240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (14))){
var inst_32111 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32131_34243 = state_32117__$1;
(statearr_32131_34243[(2)] = inst_32111);

(statearr_32131_34243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (10))){
var inst_32103 = (state_32117[(2)]);
var state_32117__$1 = state_32117;
var statearr_32132_34246 = state_32117__$1;
(statearr_32132_34246[(2)] = inst_32103);

(statearr_32132_34246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32118 === (8))){
var inst_32100 = cljs.core.async.close_BANG_(to);
var state_32117__$1 = state_32117;
var statearr_32134_34256 = state_32117__$1;
(statearr_32134_34256[(2)] = inst_32100);

(statearr_32134_34256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31629__auto__ = null;
var cljs$core$async$state_machine__31629__auto____0 = (function (){
var statearr_32135 = [null,null,null,null,null,null,null,null];
(statearr_32135[(0)] = cljs$core$async$state_machine__31629__auto__);

(statearr_32135[(1)] = (1));

return statearr_32135;
});
var cljs$core$async$state_machine__31629__auto____1 = (function (state_32117){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_32117);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e32136){var ex__31632__auto__ = e32136;
var statearr_32137_34263 = state_32117;
(statearr_32137_34263[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_32117[(4)]))){
var statearr_32138_34271 = state_32117;
(statearr_32138_34271[(1)] = cljs.core.first((state_32117[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34273 = state_32117;
state_32117 = G__34273;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$state_machine__31629__auto__ = function(state_32117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31629__auto____1.call(this,state_32117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31629__auto____0;
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31629__auto____1;
return cljs$core$async$state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_32139 = f__31801__auto__();
(statearr_32139[(6)] = c__31800__auto___34205);

return statearr_32139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32140){
var vec__32141 = p__32140;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32141,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32141,(1),null);
var job = vec__32141;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31800__auto___34282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_32148){
var state_val_32149 = (state_32148[(1)]);
if((state_val_32149 === (1))){
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32148__$1,(2),res,v);
} else {
if((state_val_32149 === (2))){
var inst_32145 = (state_32148[(2)]);
var inst_32146 = cljs.core.async.close_BANG_(res);
var state_32148__$1 = (function (){var statearr_32150 = state_32148;
(statearr_32150[(7)] = inst_32145);

return statearr_32150;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32148__$1,inst_32146);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0 = (function (){
var statearr_32151 = [null,null,null,null,null,null,null,null];
(statearr_32151[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__);

(statearr_32151[(1)] = (1));

return statearr_32151;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1 = (function (state_32148){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_32148);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e32152){var ex__31632__auto__ = e32152;
var statearr_32153_34300 = state_32148;
(statearr_32153_34300[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_32148[(4)]))){
var statearr_32154_34305 = state_32148;
(statearr_32154_34305[(1)] = cljs.core.first((state_32148[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34310 = state_32148;
state_32148 = G__34310;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__ = function(state_32148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1.call(this,state_32148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_32155 = f__31801__auto__();
(statearr_32155[(6)] = c__31800__auto___34282);

return statearr_32155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32156){
var vec__32157 = p__32156;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32157,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32157,(1),null);
var job = vec__32157;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4648__auto___34329 = n;
var __34330 = (0);
while(true){
if((__34330 < n__4648__auto___34329)){
var G__32160_34331 = type;
var G__32160_34332__$1 = (((G__32160_34331 instanceof cljs.core.Keyword))?G__32160_34331.fqn:null);
switch (G__32160_34332__$1) {
case "compute":
var c__31800__auto___34334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34330,c__31800__auto___34334,G__32160_34331,G__32160_34332__$1,n__4648__auto___34329,jobs,results,process,async){
return (function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = ((function (__34330,c__31800__auto___34334,G__32160_34331,G__32160_34332__$1,n__4648__auto___34329,jobs,results,process,async){
return (function (state_32173){
var state_val_32174 = (state_32173[(1)]);
if((state_val_32174 === (1))){
var state_32173__$1 = state_32173;
var statearr_32175_34337 = state_32173__$1;
(statearr_32175_34337[(2)] = null);

(statearr_32175_34337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (2))){
var state_32173__$1 = state_32173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32173__$1,(4),jobs);
} else {
if((state_val_32174 === (3))){
var inst_32171 = (state_32173[(2)]);
var state_32173__$1 = state_32173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32173__$1,inst_32171);
} else {
if((state_val_32174 === (4))){
var inst_32163 = (state_32173[(2)]);
var inst_32164 = process(inst_32163);
var state_32173__$1 = state_32173;
if(cljs.core.truth_(inst_32164)){
var statearr_32176_34343 = state_32173__$1;
(statearr_32176_34343[(1)] = (5));

} else {
var statearr_32177_34349 = state_32173__$1;
(statearr_32177_34349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (5))){
var state_32173__$1 = state_32173;
var statearr_32178_34350 = state_32173__$1;
(statearr_32178_34350[(2)] = null);

(statearr_32178_34350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (6))){
var state_32173__$1 = state_32173;
var statearr_32179_34351 = state_32173__$1;
(statearr_32179_34351[(2)] = null);

(statearr_32179_34351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (7))){
var inst_32169 = (state_32173[(2)]);
var state_32173__$1 = state_32173;
var statearr_32180_34352 = state_32173__$1;
(statearr_32180_34352[(2)] = inst_32169);

(statearr_32180_34352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34330,c__31800__auto___34334,G__32160_34331,G__32160_34332__$1,n__4648__auto___34329,jobs,results,process,async))
;
return ((function (__34330,switch__31628__auto__,c__31800__auto___34334,G__32160_34331,G__32160_34332__$1,n__4648__auto___34329,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0 = (function (){
var statearr_32181 = [null,null,null,null,null,null,null];
(statearr_32181[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__);

(statearr_32181[(1)] = (1));

return statearr_32181;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1 = (function (state_32173){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_32173);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e32182){var ex__31632__auto__ = e32182;
var statearr_32183_34355 = state_32173;
(statearr_32183_34355[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_32173[(4)]))){
var statearr_32184_34356 = state_32173;
(statearr_32184_34356[(1)] = cljs.core.first((state_32173[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34357 = state_32173;
state_32173 = G__34357;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__ = function(state_32173){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1.call(this,state_32173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__;
})()
;})(__34330,switch__31628__auto__,c__31800__auto___34334,G__32160_34331,G__32160_34332__$1,n__4648__auto___34329,jobs,results,process,async))
})();
var state__31802__auto__ = (function (){var statearr_32185 = f__31801__auto__();
(statearr_32185[(6)] = c__31800__auto___34334);

return statearr_32185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
});})(__34330,c__31800__auto___34334,G__32160_34331,G__32160_34332__$1,n__4648__auto___34329,jobs,results,process,async))
);


break;
case "async":
var c__31800__auto___34359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34330,c__31800__auto___34359,G__32160_34331,G__32160_34332__$1,n__4648__auto___34329,jobs,results,process,async){
return (function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = ((function (__34330,c__31800__auto___34359,G__32160_34331,G__32160_34332__$1,n__4648__auto___34329,jobs,results,process,async){
return (function (state_32198){
var state_val_32199 = (state_32198[(1)]);
if((state_val_32199 === (1))){
var state_32198__$1 = state_32198;
var statearr_32200_34365 = state_32198__$1;
(statearr_32200_34365[(2)] = null);

(statearr_32200_34365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (2))){
var state_32198__$1 = state_32198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32198__$1,(4),jobs);
} else {
if((state_val_32199 === (3))){
var inst_32196 = (state_32198[(2)]);
var state_32198__$1 = state_32198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32198__$1,inst_32196);
} else {
if((state_val_32199 === (4))){
var inst_32188 = (state_32198[(2)]);
var inst_32189 = async(inst_32188);
var state_32198__$1 = state_32198;
if(cljs.core.truth_(inst_32189)){
var statearr_32201_34371 = state_32198__$1;
(statearr_32201_34371[(1)] = (5));

} else {
var statearr_32202_34372 = state_32198__$1;
(statearr_32202_34372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (5))){
var state_32198__$1 = state_32198;
var statearr_32203_34373 = state_32198__$1;
(statearr_32203_34373[(2)] = null);

(statearr_32203_34373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (6))){
var state_32198__$1 = state_32198;
var statearr_32204_34374 = state_32198__$1;
(statearr_32204_34374[(2)] = null);

(statearr_32204_34374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32199 === (7))){
var inst_32194 = (state_32198[(2)]);
var state_32198__$1 = state_32198;
var statearr_32205_34375 = state_32198__$1;
(statearr_32205_34375[(2)] = inst_32194);

(statearr_32205_34375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34330,c__31800__auto___34359,G__32160_34331,G__32160_34332__$1,n__4648__auto___34329,jobs,results,process,async))
;
return ((function (__34330,switch__31628__auto__,c__31800__auto___34359,G__32160_34331,G__32160_34332__$1,n__4648__auto___34329,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0 = (function (){
var statearr_32206 = [null,null,null,null,null,null,null];
(statearr_32206[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__);

(statearr_32206[(1)] = (1));

return statearr_32206;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1 = (function (state_32198){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_32198);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e32207){var ex__31632__auto__ = e32207;
var statearr_32208_34376 = state_32198;
(statearr_32208_34376[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_32198[(4)]))){
var statearr_32209_34377 = state_32198;
(statearr_32209_34377[(1)] = cljs.core.first((state_32198[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34380 = state_32198;
state_32198 = G__34380;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__ = function(state_32198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1.call(this,state_32198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__;
})()
;})(__34330,switch__31628__auto__,c__31800__auto___34359,G__32160_34331,G__32160_34332__$1,n__4648__auto___34329,jobs,results,process,async))
})();
var state__31802__auto__ = (function (){var statearr_32210 = f__31801__auto__();
(statearr_32210[(6)] = c__31800__auto___34359);

return statearr_32210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
});})(__34330,c__31800__auto___34359,G__32160_34331,G__32160_34332__$1,n__4648__auto___34329,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32160_34332__$1)].join('')));

}

var G__34385 = (__34330 + (1));
__34330 = G__34385;
continue;
} else {
}
break;
}

var c__31800__auto___34386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_32232){
var state_val_32233 = (state_32232[(1)]);
if((state_val_32233 === (7))){
var inst_32228 = (state_32232[(2)]);
var state_32232__$1 = state_32232;
var statearr_32236_34387 = state_32232__$1;
(statearr_32236_34387[(2)] = inst_32228);

(statearr_32236_34387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32233 === (1))){
var state_32232__$1 = state_32232;
var statearr_32238_34388 = state_32232__$1;
(statearr_32238_34388[(2)] = null);

(statearr_32238_34388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32233 === (4))){
var inst_32213 = (state_32232[(7)]);
var inst_32213__$1 = (state_32232[(2)]);
var inst_32214 = (inst_32213__$1 == null);
var state_32232__$1 = (function (){var statearr_32241 = state_32232;
(statearr_32241[(7)] = inst_32213__$1);

return statearr_32241;
})();
if(cljs.core.truth_(inst_32214)){
var statearr_32243_34396 = state_32232__$1;
(statearr_32243_34396[(1)] = (5));

} else {
var statearr_32245_34397 = state_32232__$1;
(statearr_32245_34397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32233 === (6))){
var inst_32218 = (state_32232[(8)]);
var inst_32213 = (state_32232[(7)]);
var inst_32218__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32219 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32220 = [inst_32213,inst_32218__$1];
var inst_32221 = (new cljs.core.PersistentVector(null,2,(5),inst_32219,inst_32220,null));
var state_32232__$1 = (function (){var statearr_32249 = state_32232;
(statearr_32249[(8)] = inst_32218__$1);

return statearr_32249;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32232__$1,(8),jobs,inst_32221);
} else {
if((state_val_32233 === (3))){
var inst_32230 = (state_32232[(2)]);
var state_32232__$1 = state_32232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32232__$1,inst_32230);
} else {
if((state_val_32233 === (2))){
var state_32232__$1 = state_32232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32232__$1,(4),from);
} else {
if((state_val_32233 === (9))){
var inst_32225 = (state_32232[(2)]);
var state_32232__$1 = (function (){var statearr_32260 = state_32232;
(statearr_32260[(9)] = inst_32225);

return statearr_32260;
})();
var statearr_32261_34408 = state_32232__$1;
(statearr_32261_34408[(2)] = null);

(statearr_32261_34408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32233 === (5))){
var inst_32216 = cljs.core.async.close_BANG_(jobs);
var state_32232__$1 = state_32232;
var statearr_32262_34412 = state_32232__$1;
(statearr_32262_34412[(2)] = inst_32216);

(statearr_32262_34412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32233 === (8))){
var inst_32218 = (state_32232[(8)]);
var inst_32223 = (state_32232[(2)]);
var state_32232__$1 = (function (){var statearr_32263 = state_32232;
(statearr_32263[(10)] = inst_32223);

return statearr_32263;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32232__$1,(9),results,inst_32218);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0 = (function (){
var statearr_32269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__);

(statearr_32269[(1)] = (1));

return statearr_32269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1 = (function (state_32232){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_32232);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e32270){var ex__31632__auto__ = e32270;
var statearr_32272_34422 = state_32232;
(statearr_32272_34422[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_32232[(4)]))){
var statearr_32274_34423 = state_32232;
(statearr_32274_34423[(1)] = cljs.core.first((state_32232[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34424 = state_32232;
state_32232 = G__34424;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__ = function(state_32232){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1.call(this,state_32232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_32278 = f__31801__auto__();
(statearr_32278[(6)] = c__31800__auto___34386);

return statearr_32278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


var c__31800__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_32330){
var state_val_32331 = (state_32330[(1)]);
if((state_val_32331 === (7))){
var inst_32325 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
var statearr_32353_34432 = state_32330__$1;
(statearr_32353_34432[(2)] = inst_32325);

(statearr_32353_34432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (20))){
var state_32330__$1 = state_32330;
var statearr_32354_34433 = state_32330__$1;
(statearr_32354_34433[(2)] = null);

(statearr_32354_34433[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (1))){
var state_32330__$1 = state_32330;
var statearr_32356_34434 = state_32330__$1;
(statearr_32356_34434[(2)] = null);

(statearr_32356_34434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (4))){
var inst_32285 = (state_32330[(7)]);
var inst_32285__$1 = (state_32330[(2)]);
var inst_32286 = (inst_32285__$1 == null);
var state_32330__$1 = (function (){var statearr_32357 = state_32330;
(statearr_32357[(7)] = inst_32285__$1);

return statearr_32357;
})();
if(cljs.core.truth_(inst_32286)){
var statearr_32358_34438 = state_32330__$1;
(statearr_32358_34438[(1)] = (5));

} else {
var statearr_32359_34442 = state_32330__$1;
(statearr_32359_34442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (15))){
var inst_32305 = (state_32330[(8)]);
var state_32330__$1 = state_32330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32330__$1,(18),to,inst_32305);
} else {
if((state_val_32331 === (21))){
var inst_32319 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
var statearr_32360_34443 = state_32330__$1;
(statearr_32360_34443[(2)] = inst_32319);

(statearr_32360_34443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (13))){
var inst_32321 = (state_32330[(2)]);
var state_32330__$1 = (function (){var statearr_32361 = state_32330;
(statearr_32361[(9)] = inst_32321);

return statearr_32361;
})();
var statearr_32362_34447 = state_32330__$1;
(statearr_32362_34447[(2)] = null);

(statearr_32362_34447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (6))){
var inst_32285 = (state_32330[(7)]);
var state_32330__$1 = state_32330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32330__$1,(11),inst_32285);
} else {
if((state_val_32331 === (17))){
var inst_32314 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
if(cljs.core.truth_(inst_32314)){
var statearr_32364_34448 = state_32330__$1;
(statearr_32364_34448[(1)] = (19));

} else {
var statearr_32365_34449 = state_32330__$1;
(statearr_32365_34449[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (3))){
var inst_32328 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32330__$1,inst_32328);
} else {
if((state_val_32331 === (12))){
var inst_32297 = (state_32330[(10)]);
var state_32330__$1 = state_32330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32330__$1,(14),inst_32297);
} else {
if((state_val_32331 === (2))){
var state_32330__$1 = state_32330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32330__$1,(4),results);
} else {
if((state_val_32331 === (19))){
var state_32330__$1 = state_32330;
var statearr_32366_34451 = state_32330__$1;
(statearr_32366_34451[(2)] = null);

(statearr_32366_34451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (11))){
var inst_32297 = (state_32330[(2)]);
var state_32330__$1 = (function (){var statearr_32367 = state_32330;
(statearr_32367[(10)] = inst_32297);

return statearr_32367;
})();
var statearr_32368_34452 = state_32330__$1;
(statearr_32368_34452[(2)] = null);

(statearr_32368_34452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (9))){
var state_32330__$1 = state_32330;
var statearr_32369_34453 = state_32330__$1;
(statearr_32369_34453[(2)] = null);

(statearr_32369_34453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (5))){
var state_32330__$1 = state_32330;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32370_34454 = state_32330__$1;
(statearr_32370_34454[(1)] = (8));

} else {
var statearr_32372_34455 = state_32330__$1;
(statearr_32372_34455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (14))){
var inst_32305 = (state_32330[(8)]);
var inst_32305__$1 = (state_32330[(2)]);
var inst_32307 = (inst_32305__$1 == null);
var inst_32308 = cljs.core.not(inst_32307);
var state_32330__$1 = (function (){var statearr_32375 = state_32330;
(statearr_32375[(8)] = inst_32305__$1);

return statearr_32375;
})();
if(inst_32308){
var statearr_32376_34456 = state_32330__$1;
(statearr_32376_34456[(1)] = (15));

} else {
var statearr_32377_34457 = state_32330__$1;
(statearr_32377_34457[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (16))){
var state_32330__$1 = state_32330;
var statearr_32378_34458 = state_32330__$1;
(statearr_32378_34458[(2)] = false);

(statearr_32378_34458[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (10))){
var inst_32293 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
var statearr_32379_34459 = state_32330__$1;
(statearr_32379_34459[(2)] = inst_32293);

(statearr_32379_34459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (18))){
var inst_32311 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
var statearr_32380_34460 = state_32330__$1;
(statearr_32380_34460[(2)] = inst_32311);

(statearr_32380_34460[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (8))){
var inst_32289 = cljs.core.async.close_BANG_(to);
var state_32330__$1 = state_32330;
var statearr_32389_34462 = state_32330__$1;
(statearr_32389_34462[(2)] = inst_32289);

(statearr_32389_34462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0 = (function (){
var statearr_32394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__);

(statearr_32394[(1)] = (1));

return statearr_32394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1 = (function (state_32330){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_32330);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e32403){var ex__31632__auto__ = e32403;
var statearr_32404_34463 = state_32330;
(statearr_32404_34463[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_32330[(4)]))){
var statearr_32405_34467 = state_32330;
(statearr_32405_34467[(1)] = cljs.core.first((state_32330[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34468 = state_32330;
state_32330 = G__34468;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__ = function(state_32330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1.call(this,state_32330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_32406 = f__31801__auto__();
(statearr_32406[(6)] = c__31800__auto__);

return statearr_32406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));

return c__31800__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32408 = arguments.length;
switch (G__32408) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32410 = arguments.length;
switch (G__32410) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32412 = arguments.length;
switch (G__32412) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31800__auto___34483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_32439){
var state_val_32440 = (state_32439[(1)]);
if((state_val_32440 === (7))){
var inst_32435 = (state_32439[(2)]);
var state_32439__$1 = state_32439;
var statearr_32442_34484 = state_32439__$1;
(statearr_32442_34484[(2)] = inst_32435);

(statearr_32442_34484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (1))){
var state_32439__$1 = state_32439;
var statearr_32443_34486 = state_32439__$1;
(statearr_32443_34486[(2)] = null);

(statearr_32443_34486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (4))){
var inst_32416 = (state_32439[(7)]);
var inst_32416__$1 = (state_32439[(2)]);
var inst_32417 = (inst_32416__$1 == null);
var state_32439__$1 = (function (){var statearr_32444 = state_32439;
(statearr_32444[(7)] = inst_32416__$1);

return statearr_32444;
})();
if(cljs.core.truth_(inst_32417)){
var statearr_32454_34487 = state_32439__$1;
(statearr_32454_34487[(1)] = (5));

} else {
var statearr_32467_34488 = state_32439__$1;
(statearr_32467_34488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (13))){
var state_32439__$1 = state_32439;
var statearr_32469_34489 = state_32439__$1;
(statearr_32469_34489[(2)] = null);

(statearr_32469_34489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (6))){
var inst_32416 = (state_32439[(7)]);
var inst_32422 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32416) : p.call(null,inst_32416));
var state_32439__$1 = state_32439;
if(cljs.core.truth_(inst_32422)){
var statearr_32470_34494 = state_32439__$1;
(statearr_32470_34494[(1)] = (9));

} else {
var statearr_32471_34495 = state_32439__$1;
(statearr_32471_34495[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (3))){
var inst_32437 = (state_32439[(2)]);
var state_32439__$1 = state_32439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32439__$1,inst_32437);
} else {
if((state_val_32440 === (12))){
var state_32439__$1 = state_32439;
var statearr_32472_34500 = state_32439__$1;
(statearr_32472_34500[(2)] = null);

(statearr_32472_34500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (2))){
var state_32439__$1 = state_32439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32439__$1,(4),ch);
} else {
if((state_val_32440 === (11))){
var inst_32416 = (state_32439[(7)]);
var inst_32426 = (state_32439[(2)]);
var state_32439__$1 = state_32439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32439__$1,(8),inst_32426,inst_32416);
} else {
if((state_val_32440 === (9))){
var state_32439__$1 = state_32439;
var statearr_32473_34509 = state_32439__$1;
(statearr_32473_34509[(2)] = tc);

(statearr_32473_34509[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (5))){
var inst_32419 = cljs.core.async.close_BANG_(tc);
var inst_32420 = cljs.core.async.close_BANG_(fc);
var state_32439__$1 = (function (){var statearr_32475 = state_32439;
(statearr_32475[(8)] = inst_32419);

return statearr_32475;
})();
var statearr_32476_34513 = state_32439__$1;
(statearr_32476_34513[(2)] = inst_32420);

(statearr_32476_34513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (14))){
var inst_32433 = (state_32439[(2)]);
var state_32439__$1 = state_32439;
var statearr_32477_34518 = state_32439__$1;
(statearr_32477_34518[(2)] = inst_32433);

(statearr_32477_34518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (10))){
var state_32439__$1 = state_32439;
var statearr_32478_34525 = state_32439__$1;
(statearr_32478_34525[(2)] = fc);

(statearr_32478_34525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32440 === (8))){
var inst_32428 = (state_32439[(2)]);
var state_32439__$1 = state_32439;
if(cljs.core.truth_(inst_32428)){
var statearr_32479_34526 = state_32439__$1;
(statearr_32479_34526[(1)] = (12));

} else {
var statearr_32480_34527 = state_32439__$1;
(statearr_32480_34527[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31629__auto__ = null;
var cljs$core$async$state_machine__31629__auto____0 = (function (){
var statearr_32481 = [null,null,null,null,null,null,null,null,null];
(statearr_32481[(0)] = cljs$core$async$state_machine__31629__auto__);

(statearr_32481[(1)] = (1));

return statearr_32481;
});
var cljs$core$async$state_machine__31629__auto____1 = (function (state_32439){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_32439);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e32482){var ex__31632__auto__ = e32482;
var statearr_32483_34528 = state_32439;
(statearr_32483_34528[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_32439[(4)]))){
var statearr_32485_34529 = state_32439;
(statearr_32485_34529[(1)] = cljs.core.first((state_32439[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34530 = state_32439;
state_32439 = G__34530;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$state_machine__31629__auto__ = function(state_32439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31629__auto____1.call(this,state_32439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31629__auto____0;
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31629__auto____1;
return cljs$core$async$state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_32486 = f__31801__auto__();
(statearr_32486[(6)] = c__31800__auto___34483);

return statearr_32486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31800__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_32509){
var state_val_32510 = (state_32509[(1)]);
if((state_val_32510 === (7))){
var inst_32505 = (state_32509[(2)]);
var state_32509__$1 = state_32509;
var statearr_32513_34533 = state_32509__$1;
(statearr_32513_34533[(2)] = inst_32505);

(statearr_32513_34533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (1))){
var inst_32487 = init;
var inst_32489 = inst_32487;
var state_32509__$1 = (function (){var statearr_32514 = state_32509;
(statearr_32514[(7)] = inst_32489);

return statearr_32514;
})();
var statearr_32515_34540 = state_32509__$1;
(statearr_32515_34540[(2)] = null);

(statearr_32515_34540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (4))){
var inst_32492 = (state_32509[(8)]);
var inst_32492__$1 = (state_32509[(2)]);
var inst_32493 = (inst_32492__$1 == null);
var state_32509__$1 = (function (){var statearr_32517 = state_32509;
(statearr_32517[(8)] = inst_32492__$1);

return statearr_32517;
})();
if(cljs.core.truth_(inst_32493)){
var statearr_32518_34541 = state_32509__$1;
(statearr_32518_34541[(1)] = (5));

} else {
var statearr_32520_34542 = state_32509__$1;
(statearr_32520_34542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (6))){
var inst_32492 = (state_32509[(8)]);
var inst_32489 = (state_32509[(7)]);
var inst_32496 = (state_32509[(9)]);
var inst_32496__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32489,inst_32492) : f.call(null,inst_32489,inst_32492));
var inst_32497 = cljs.core.reduced_QMARK_(inst_32496__$1);
var state_32509__$1 = (function (){var statearr_32521 = state_32509;
(statearr_32521[(9)] = inst_32496__$1);

return statearr_32521;
})();
if(inst_32497){
var statearr_32522_34543 = state_32509__$1;
(statearr_32522_34543[(1)] = (8));

} else {
var statearr_32523_34544 = state_32509__$1;
(statearr_32523_34544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (3))){
var inst_32507 = (state_32509[(2)]);
var state_32509__$1 = state_32509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32509__$1,inst_32507);
} else {
if((state_val_32510 === (2))){
var state_32509__$1 = state_32509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32509__$1,(4),ch);
} else {
if((state_val_32510 === (9))){
var inst_32496 = (state_32509[(9)]);
var inst_32489 = inst_32496;
var state_32509__$1 = (function (){var statearr_32524 = state_32509;
(statearr_32524[(7)] = inst_32489);

return statearr_32524;
})();
var statearr_32526_34545 = state_32509__$1;
(statearr_32526_34545[(2)] = null);

(statearr_32526_34545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (5))){
var inst_32489 = (state_32509[(7)]);
var state_32509__$1 = state_32509;
var statearr_32527_34552 = state_32509__$1;
(statearr_32527_34552[(2)] = inst_32489);

(statearr_32527_34552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (10))){
var inst_32503 = (state_32509[(2)]);
var state_32509__$1 = state_32509;
var statearr_32528_34553 = state_32509__$1;
(statearr_32528_34553[(2)] = inst_32503);

(statearr_32528_34553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (8))){
var inst_32496 = (state_32509[(9)]);
var inst_32499 = cljs.core.deref(inst_32496);
var state_32509__$1 = state_32509;
var statearr_32529_34554 = state_32509__$1;
(statearr_32529_34554[(2)] = inst_32499);

(statearr_32529_34554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__31629__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31629__auto____0 = (function (){
var statearr_32530 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32530[(0)] = cljs$core$async$reduce_$_state_machine__31629__auto__);

(statearr_32530[(1)] = (1));

return statearr_32530;
});
var cljs$core$async$reduce_$_state_machine__31629__auto____1 = (function (state_32509){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_32509);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e32531){var ex__31632__auto__ = e32531;
var statearr_32532_34555 = state_32509;
(statearr_32532_34555[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_32509[(4)]))){
var statearr_32533_34556 = state_32509;
(statearr_32533_34556[(1)] = cljs.core.first((state_32509[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34557 = state_32509;
state_32509 = G__34557;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31629__auto__ = function(state_32509){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31629__auto____1.call(this,state_32509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31629__auto____0;
cljs$core$async$reduce_$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31629__auto____1;
return cljs$core$async$reduce_$_state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_32535 = f__31801__auto__();
(statearr_32535[(6)] = c__31800__auto__);

return statearr_32535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));

return c__31800__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31800__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_32542){
var state_val_32543 = (state_32542[(1)]);
if((state_val_32543 === (1))){
var inst_32536 = cljs.core.async.reduce(f__$1,init,ch);
var state_32542__$1 = state_32542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32542__$1,(2),inst_32536);
} else {
if((state_val_32543 === (2))){
var inst_32538 = (state_32542[(2)]);
var inst_32539 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32538) : f__$1.call(null,inst_32538));
var state_32542__$1 = state_32542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32542__$1,inst_32539);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31629__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31629__auto____0 = (function (){
var statearr_32544 = [null,null,null,null,null,null,null];
(statearr_32544[(0)] = cljs$core$async$transduce_$_state_machine__31629__auto__);

(statearr_32544[(1)] = (1));

return statearr_32544;
});
var cljs$core$async$transduce_$_state_machine__31629__auto____1 = (function (state_32542){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_32542);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e32545){var ex__31632__auto__ = e32545;
var statearr_32546_34564 = state_32542;
(statearr_32546_34564[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_32542[(4)]))){
var statearr_32547_34565 = state_32542;
(statearr_32547_34565[(1)] = cljs.core.first((state_32542[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34566 = state_32542;
state_32542 = G__34566;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31629__auto__ = function(state_32542){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31629__auto____1.call(this,state_32542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31629__auto____0;
cljs$core$async$transduce_$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31629__auto____1;
return cljs$core$async$transduce_$_state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_32549 = f__31801__auto__();
(statearr_32549[(6)] = c__31800__auto__);

return statearr_32549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));

return c__31800__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32551 = arguments.length;
switch (G__32551) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31800__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_32577){
var state_val_32578 = (state_32577[(1)]);
if((state_val_32578 === (7))){
var inst_32559 = (state_32577[(2)]);
var state_32577__$1 = state_32577;
var statearr_32579_34572 = state_32577__$1;
(statearr_32579_34572[(2)] = inst_32559);

(statearr_32579_34572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (1))){
var inst_32553 = cljs.core.seq(coll);
var inst_32554 = inst_32553;
var state_32577__$1 = (function (){var statearr_32581 = state_32577;
(statearr_32581[(7)] = inst_32554);

return statearr_32581;
})();
var statearr_32582_34573 = state_32577__$1;
(statearr_32582_34573[(2)] = null);

(statearr_32582_34573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (4))){
var inst_32554 = (state_32577[(7)]);
var inst_32557 = cljs.core.first(inst_32554);
var state_32577__$1 = state_32577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32577__$1,(7),ch,inst_32557);
} else {
if((state_val_32578 === (13))){
var inst_32571 = (state_32577[(2)]);
var state_32577__$1 = state_32577;
var statearr_32583_34574 = state_32577__$1;
(statearr_32583_34574[(2)] = inst_32571);

(statearr_32583_34574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (6))){
var inst_32562 = (state_32577[(2)]);
var state_32577__$1 = state_32577;
if(cljs.core.truth_(inst_32562)){
var statearr_32584_34575 = state_32577__$1;
(statearr_32584_34575[(1)] = (8));

} else {
var statearr_32585_34576 = state_32577__$1;
(statearr_32585_34576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (3))){
var inst_32575 = (state_32577[(2)]);
var state_32577__$1 = state_32577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32577__$1,inst_32575);
} else {
if((state_val_32578 === (12))){
var state_32577__$1 = state_32577;
var statearr_32586_34577 = state_32577__$1;
(statearr_32586_34577[(2)] = null);

(statearr_32586_34577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (2))){
var inst_32554 = (state_32577[(7)]);
var state_32577__$1 = state_32577;
if(cljs.core.truth_(inst_32554)){
var statearr_32587_34579 = state_32577__$1;
(statearr_32587_34579[(1)] = (4));

} else {
var statearr_32588_34580 = state_32577__$1;
(statearr_32588_34580[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (11))){
var inst_32568 = cljs.core.async.close_BANG_(ch);
var state_32577__$1 = state_32577;
var statearr_32590_34585 = state_32577__$1;
(statearr_32590_34585[(2)] = inst_32568);

(statearr_32590_34585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (9))){
var state_32577__$1 = state_32577;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32591_34586 = state_32577__$1;
(statearr_32591_34586[(1)] = (11));

} else {
var statearr_32592_34587 = state_32577__$1;
(statearr_32592_34587[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (5))){
var inst_32554 = (state_32577[(7)]);
var state_32577__$1 = state_32577;
var statearr_32593_34591 = state_32577__$1;
(statearr_32593_34591[(2)] = inst_32554);

(statearr_32593_34591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (10))){
var inst_32573 = (state_32577[(2)]);
var state_32577__$1 = state_32577;
var statearr_32594_34592 = state_32577__$1;
(statearr_32594_34592[(2)] = inst_32573);

(statearr_32594_34592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (8))){
var inst_32554 = (state_32577[(7)]);
var inst_32564 = cljs.core.next(inst_32554);
var inst_32554__$1 = inst_32564;
var state_32577__$1 = (function (){var statearr_32595 = state_32577;
(statearr_32595[(7)] = inst_32554__$1);

return statearr_32595;
})();
var statearr_32596_34593 = state_32577__$1;
(statearr_32596_34593[(2)] = null);

(statearr_32596_34593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31629__auto__ = null;
var cljs$core$async$state_machine__31629__auto____0 = (function (){
var statearr_32598 = [null,null,null,null,null,null,null,null];
(statearr_32598[(0)] = cljs$core$async$state_machine__31629__auto__);

(statearr_32598[(1)] = (1));

return statearr_32598;
});
var cljs$core$async$state_machine__31629__auto____1 = (function (state_32577){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_32577);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e32599){var ex__31632__auto__ = e32599;
var statearr_32600_34594 = state_32577;
(statearr_32600_34594[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_32577[(4)]))){
var statearr_32601_34595 = state_32577;
(statearr_32601_34595[(1)] = cljs.core.first((state_32577[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34598 = state_32577;
state_32577 = G__34598;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$state_machine__31629__auto__ = function(state_32577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31629__auto____1.call(this,state_32577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31629__auto____0;
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31629__auto____1;
return cljs$core$async$state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_32602 = f__31801__auto__();
(statearr_32602[(6)] = c__31800__auto__);

return statearr_32602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));

return c__31800__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32604 = arguments.length;
switch (G__32604) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34602 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4464__auto__.call(null,_));
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4461__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34602(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34603 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4464__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4461__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34603(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34604 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34604(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34607 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34607(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32610 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32610 = (function (ch,cs,meta32611){
this.ch = ch;
this.cs = cs;
this.meta32611 = meta32611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32612,meta32611__$1){
var self__ = this;
var _32612__$1 = this;
return (new cljs.core.async.t_cljs$core$async32610(self__.ch,self__.cs,meta32611__$1));
}));

(cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32612){
var self__ = this;
var _32612__$1 = this;
return self__.meta32611;
}));

(cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32610.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32611","meta32611",409941320,null)], null);
}));

(cljs.core.async.t_cljs$core$async32610.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32610");

(cljs.core.async.t_cljs$core$async32610.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async32610");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32610.
 */
cljs.core.async.__GT_t_cljs$core$async32610 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32610(ch__$1,cs__$1,meta32611){
return (new cljs.core.async.t_cljs$core$async32610(ch__$1,cs__$1,meta32611));
});

}

return (new cljs.core.async.t_cljs$core$async32610(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31800__auto___34609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_32750){
var state_val_32751 = (state_32750[(1)]);
if((state_val_32751 === (7))){
var inst_32745 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32752_34610 = state_32750__$1;
(statearr_32752_34610[(2)] = inst_32745);

(statearr_32752_34610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (20))){
var inst_32649 = (state_32750[(7)]);
var inst_32661 = cljs.core.first(inst_32649);
var inst_32662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32661,(0),null);
var inst_32663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32661,(1),null);
var state_32750__$1 = (function (){var statearr_32754 = state_32750;
(statearr_32754[(8)] = inst_32662);

return statearr_32754;
})();
if(cljs.core.truth_(inst_32663)){
var statearr_32755_34614 = state_32750__$1;
(statearr_32755_34614[(1)] = (22));

} else {
var statearr_32756_34615 = state_32750__$1;
(statearr_32756_34615[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (27))){
var inst_32693 = (state_32750[(9)]);
var inst_32691 = (state_32750[(10)]);
var inst_32699 = (state_32750[(11)]);
var inst_32617 = (state_32750[(12)]);
var inst_32699__$1 = cljs.core._nth(inst_32691,inst_32693);
var inst_32700 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32699__$1,inst_32617,done);
var state_32750__$1 = (function (){var statearr_32757 = state_32750;
(statearr_32757[(11)] = inst_32699__$1);

return statearr_32757;
})();
if(cljs.core.truth_(inst_32700)){
var statearr_32758_34616 = state_32750__$1;
(statearr_32758_34616[(1)] = (30));

} else {
var statearr_32759_34617 = state_32750__$1;
(statearr_32759_34617[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (1))){
var state_32750__$1 = state_32750;
var statearr_32760_34618 = state_32750__$1;
(statearr_32760_34618[(2)] = null);

(statearr_32760_34618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (24))){
var inst_32649 = (state_32750[(7)]);
var inst_32668 = (state_32750[(2)]);
var inst_32669 = cljs.core.next(inst_32649);
var inst_32626 = inst_32669;
var inst_32627 = null;
var inst_32628 = (0);
var inst_32629 = (0);
var state_32750__$1 = (function (){var statearr_32761 = state_32750;
(statearr_32761[(13)] = inst_32627);

(statearr_32761[(14)] = inst_32668);

(statearr_32761[(15)] = inst_32626);

(statearr_32761[(16)] = inst_32629);

(statearr_32761[(17)] = inst_32628);

return statearr_32761;
})();
var statearr_32763_34619 = state_32750__$1;
(statearr_32763_34619[(2)] = null);

(statearr_32763_34619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (39))){
var state_32750__$1 = state_32750;
var statearr_32767_34620 = state_32750__$1;
(statearr_32767_34620[(2)] = null);

(statearr_32767_34620[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (4))){
var inst_32617 = (state_32750[(12)]);
var inst_32617__$1 = (state_32750[(2)]);
var inst_32618 = (inst_32617__$1 == null);
var state_32750__$1 = (function (){var statearr_32768 = state_32750;
(statearr_32768[(12)] = inst_32617__$1);

return statearr_32768;
})();
if(cljs.core.truth_(inst_32618)){
var statearr_32769_34621 = state_32750__$1;
(statearr_32769_34621[(1)] = (5));

} else {
var statearr_32770_34622 = state_32750__$1;
(statearr_32770_34622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (15))){
var inst_32627 = (state_32750[(13)]);
var inst_32626 = (state_32750[(15)]);
var inst_32629 = (state_32750[(16)]);
var inst_32628 = (state_32750[(17)]);
var inst_32645 = (state_32750[(2)]);
var inst_32646 = (inst_32629 + (1));
var tmp32764 = inst_32627;
var tmp32765 = inst_32626;
var tmp32766 = inst_32628;
var inst_32626__$1 = tmp32765;
var inst_32627__$1 = tmp32764;
var inst_32628__$1 = tmp32766;
var inst_32629__$1 = inst_32646;
var state_32750__$1 = (function (){var statearr_32772 = state_32750;
(statearr_32772[(13)] = inst_32627__$1);

(statearr_32772[(15)] = inst_32626__$1);

(statearr_32772[(16)] = inst_32629__$1);

(statearr_32772[(18)] = inst_32645);

(statearr_32772[(17)] = inst_32628__$1);

return statearr_32772;
})();
var statearr_32773_34623 = state_32750__$1;
(statearr_32773_34623[(2)] = null);

(statearr_32773_34623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (21))){
var inst_32672 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32777_34624 = state_32750__$1;
(statearr_32777_34624[(2)] = inst_32672);

(statearr_32777_34624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (31))){
var inst_32699 = (state_32750[(11)]);
var inst_32703 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32699);
var state_32750__$1 = state_32750;
var statearr_32778_34625 = state_32750__$1;
(statearr_32778_34625[(2)] = inst_32703);

(statearr_32778_34625[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (32))){
var inst_32693 = (state_32750[(9)]);
var inst_32692 = (state_32750[(19)]);
var inst_32691 = (state_32750[(10)]);
var inst_32690 = (state_32750[(20)]);
var inst_32705 = (state_32750[(2)]);
var inst_32706 = (inst_32693 + (1));
var tmp32774 = inst_32692;
var tmp32775 = inst_32691;
var tmp32776 = inst_32690;
var inst_32690__$1 = tmp32776;
var inst_32691__$1 = tmp32775;
var inst_32692__$1 = tmp32774;
var inst_32693__$1 = inst_32706;
var state_32750__$1 = (function (){var statearr_32779 = state_32750;
(statearr_32779[(21)] = inst_32705);

(statearr_32779[(9)] = inst_32693__$1);

(statearr_32779[(19)] = inst_32692__$1);

(statearr_32779[(10)] = inst_32691__$1);

(statearr_32779[(20)] = inst_32690__$1);

return statearr_32779;
})();
var statearr_32781_34626 = state_32750__$1;
(statearr_32781_34626[(2)] = null);

(statearr_32781_34626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (40))){
var inst_32718 = (state_32750[(22)]);
var inst_32722 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32718);
var state_32750__$1 = state_32750;
var statearr_32782_34628 = state_32750__$1;
(statearr_32782_34628[(2)] = inst_32722);

(statearr_32782_34628[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (33))){
var inst_32709 = (state_32750[(23)]);
var inst_32711 = cljs.core.chunked_seq_QMARK_(inst_32709);
var state_32750__$1 = state_32750;
if(inst_32711){
var statearr_32783_34630 = state_32750__$1;
(statearr_32783_34630[(1)] = (36));

} else {
var statearr_32784_34631 = state_32750__$1;
(statearr_32784_34631[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (13))){
var inst_32638 = (state_32750[(24)]);
var inst_32642 = cljs.core.async.close_BANG_(inst_32638);
var state_32750__$1 = state_32750;
var statearr_32785_34633 = state_32750__$1;
(statearr_32785_34633[(2)] = inst_32642);

(statearr_32785_34633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (22))){
var inst_32662 = (state_32750[(8)]);
var inst_32665 = cljs.core.async.close_BANG_(inst_32662);
var state_32750__$1 = state_32750;
var statearr_32786_34634 = state_32750__$1;
(statearr_32786_34634[(2)] = inst_32665);

(statearr_32786_34634[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (36))){
var inst_32709 = (state_32750[(23)]);
var inst_32713 = cljs.core.chunk_first(inst_32709);
var inst_32714 = cljs.core.chunk_rest(inst_32709);
var inst_32715 = cljs.core.count(inst_32713);
var inst_32690 = inst_32714;
var inst_32691 = inst_32713;
var inst_32692 = inst_32715;
var inst_32693 = (0);
var state_32750__$1 = (function (){var statearr_32788 = state_32750;
(statearr_32788[(9)] = inst_32693);

(statearr_32788[(19)] = inst_32692);

(statearr_32788[(10)] = inst_32691);

(statearr_32788[(20)] = inst_32690);

return statearr_32788;
})();
var statearr_32789_34636 = state_32750__$1;
(statearr_32789_34636[(2)] = null);

(statearr_32789_34636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (41))){
var inst_32709 = (state_32750[(23)]);
var inst_32724 = (state_32750[(2)]);
var inst_32725 = cljs.core.next(inst_32709);
var inst_32690 = inst_32725;
var inst_32691 = null;
var inst_32692 = (0);
var inst_32693 = (0);
var state_32750__$1 = (function (){var statearr_32790 = state_32750;
(statearr_32790[(9)] = inst_32693);

(statearr_32790[(19)] = inst_32692);

(statearr_32790[(10)] = inst_32691);

(statearr_32790[(25)] = inst_32724);

(statearr_32790[(20)] = inst_32690);

return statearr_32790;
})();
var statearr_32791_34637 = state_32750__$1;
(statearr_32791_34637[(2)] = null);

(statearr_32791_34637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (43))){
var state_32750__$1 = state_32750;
var statearr_32792_34638 = state_32750__$1;
(statearr_32792_34638[(2)] = null);

(statearr_32792_34638[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (29))){
var inst_32733 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32793_34639 = state_32750__$1;
(statearr_32793_34639[(2)] = inst_32733);

(statearr_32793_34639[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (44))){
var inst_32742 = (state_32750[(2)]);
var state_32750__$1 = (function (){var statearr_32795 = state_32750;
(statearr_32795[(26)] = inst_32742);

return statearr_32795;
})();
var statearr_32796_34640 = state_32750__$1;
(statearr_32796_34640[(2)] = null);

(statearr_32796_34640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (6))){
var inst_32682 = (state_32750[(27)]);
var inst_32681 = cljs.core.deref(cs);
var inst_32682__$1 = cljs.core.keys(inst_32681);
var inst_32683 = cljs.core.count(inst_32682__$1);
var inst_32684 = cljs.core.reset_BANG_(dctr,inst_32683);
var inst_32689 = cljs.core.seq(inst_32682__$1);
var inst_32690 = inst_32689;
var inst_32691 = null;
var inst_32692 = (0);
var inst_32693 = (0);
var state_32750__$1 = (function (){var statearr_32797 = state_32750;
(statearr_32797[(9)] = inst_32693);

(statearr_32797[(27)] = inst_32682__$1);

(statearr_32797[(19)] = inst_32692);

(statearr_32797[(10)] = inst_32691);

(statearr_32797[(28)] = inst_32684);

(statearr_32797[(20)] = inst_32690);

return statearr_32797;
})();
var statearr_32798_34641 = state_32750__$1;
(statearr_32798_34641[(2)] = null);

(statearr_32798_34641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (28))){
var inst_32709 = (state_32750[(23)]);
var inst_32690 = (state_32750[(20)]);
var inst_32709__$1 = cljs.core.seq(inst_32690);
var state_32750__$1 = (function (){var statearr_32799 = state_32750;
(statearr_32799[(23)] = inst_32709__$1);

return statearr_32799;
})();
if(inst_32709__$1){
var statearr_32800_34646 = state_32750__$1;
(statearr_32800_34646[(1)] = (33));

} else {
var statearr_32801_34647 = state_32750__$1;
(statearr_32801_34647[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (25))){
var inst_32693 = (state_32750[(9)]);
var inst_32692 = (state_32750[(19)]);
var inst_32696 = (inst_32693 < inst_32692);
var inst_32697 = inst_32696;
var state_32750__$1 = state_32750;
if(cljs.core.truth_(inst_32697)){
var statearr_32803_34648 = state_32750__$1;
(statearr_32803_34648[(1)] = (27));

} else {
var statearr_32804_34649 = state_32750__$1;
(statearr_32804_34649[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (34))){
var state_32750__$1 = state_32750;
var statearr_32805_34650 = state_32750__$1;
(statearr_32805_34650[(2)] = null);

(statearr_32805_34650[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (17))){
var state_32750__$1 = state_32750;
var statearr_32806_34651 = state_32750__$1;
(statearr_32806_34651[(2)] = null);

(statearr_32806_34651[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (3))){
var inst_32747 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32750__$1,inst_32747);
} else {
if((state_val_32751 === (12))){
var inst_32677 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32807_34652 = state_32750__$1;
(statearr_32807_34652[(2)] = inst_32677);

(statearr_32807_34652[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (2))){
var state_32750__$1 = state_32750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32750__$1,(4),ch);
} else {
if((state_val_32751 === (23))){
var state_32750__$1 = state_32750;
var statearr_32809_34657 = state_32750__$1;
(statearr_32809_34657[(2)] = null);

(statearr_32809_34657[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (35))){
var inst_32731 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32810_34658 = state_32750__$1;
(statearr_32810_34658[(2)] = inst_32731);

(statearr_32810_34658[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (19))){
var inst_32649 = (state_32750[(7)]);
var inst_32653 = cljs.core.chunk_first(inst_32649);
var inst_32654 = cljs.core.chunk_rest(inst_32649);
var inst_32655 = cljs.core.count(inst_32653);
var inst_32626 = inst_32654;
var inst_32627 = inst_32653;
var inst_32628 = inst_32655;
var inst_32629 = (0);
var state_32750__$1 = (function (){var statearr_32811 = state_32750;
(statearr_32811[(13)] = inst_32627);

(statearr_32811[(15)] = inst_32626);

(statearr_32811[(16)] = inst_32629);

(statearr_32811[(17)] = inst_32628);

return statearr_32811;
})();
var statearr_32812_34663 = state_32750__$1;
(statearr_32812_34663[(2)] = null);

(statearr_32812_34663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (11))){
var inst_32626 = (state_32750[(15)]);
var inst_32649 = (state_32750[(7)]);
var inst_32649__$1 = cljs.core.seq(inst_32626);
var state_32750__$1 = (function (){var statearr_32813 = state_32750;
(statearr_32813[(7)] = inst_32649__$1);

return statearr_32813;
})();
if(inst_32649__$1){
var statearr_32814_34664 = state_32750__$1;
(statearr_32814_34664[(1)] = (16));

} else {
var statearr_32815_34665 = state_32750__$1;
(statearr_32815_34665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (9))){
var inst_32679 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32817_34666 = state_32750__$1;
(statearr_32817_34666[(2)] = inst_32679);

(statearr_32817_34666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (5))){
var inst_32624 = cljs.core.deref(cs);
var inst_32625 = cljs.core.seq(inst_32624);
var inst_32626 = inst_32625;
var inst_32627 = null;
var inst_32628 = (0);
var inst_32629 = (0);
var state_32750__$1 = (function (){var statearr_32818 = state_32750;
(statearr_32818[(13)] = inst_32627);

(statearr_32818[(15)] = inst_32626);

(statearr_32818[(16)] = inst_32629);

(statearr_32818[(17)] = inst_32628);

return statearr_32818;
})();
var statearr_32819_34667 = state_32750__$1;
(statearr_32819_34667[(2)] = null);

(statearr_32819_34667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (14))){
var state_32750__$1 = state_32750;
var statearr_32820_34668 = state_32750__$1;
(statearr_32820_34668[(2)] = null);

(statearr_32820_34668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (45))){
var inst_32739 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32821_34669 = state_32750__$1;
(statearr_32821_34669[(2)] = inst_32739);

(statearr_32821_34669[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (26))){
var inst_32682 = (state_32750[(27)]);
var inst_32735 = (state_32750[(2)]);
var inst_32736 = cljs.core.seq(inst_32682);
var state_32750__$1 = (function (){var statearr_32822 = state_32750;
(statearr_32822[(29)] = inst_32735);

return statearr_32822;
})();
if(inst_32736){
var statearr_32823_34670 = state_32750__$1;
(statearr_32823_34670[(1)] = (42));

} else {
var statearr_32825_34671 = state_32750__$1;
(statearr_32825_34671[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (16))){
var inst_32649 = (state_32750[(7)]);
var inst_32651 = cljs.core.chunked_seq_QMARK_(inst_32649);
var state_32750__$1 = state_32750;
if(inst_32651){
var statearr_32826_34672 = state_32750__$1;
(statearr_32826_34672[(1)] = (19));

} else {
var statearr_32827_34673 = state_32750__$1;
(statearr_32827_34673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (38))){
var inst_32728 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32828_34674 = state_32750__$1;
(statearr_32828_34674[(2)] = inst_32728);

(statearr_32828_34674[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (30))){
var state_32750__$1 = state_32750;
var statearr_32829_34679 = state_32750__$1;
(statearr_32829_34679[(2)] = null);

(statearr_32829_34679[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (10))){
var inst_32627 = (state_32750[(13)]);
var inst_32629 = (state_32750[(16)]);
var inst_32637 = cljs.core._nth(inst_32627,inst_32629);
var inst_32638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32637,(0),null);
var inst_32639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32637,(1),null);
var state_32750__$1 = (function (){var statearr_32830 = state_32750;
(statearr_32830[(24)] = inst_32638);

return statearr_32830;
})();
if(cljs.core.truth_(inst_32639)){
var statearr_32831_34683 = state_32750__$1;
(statearr_32831_34683[(1)] = (13));

} else {
var statearr_32832_34684 = state_32750__$1;
(statearr_32832_34684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (18))){
var inst_32675 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32834_34688 = state_32750__$1;
(statearr_32834_34688[(2)] = inst_32675);

(statearr_32834_34688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (42))){
var state_32750__$1 = state_32750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32750__$1,(45),dchan);
} else {
if((state_val_32751 === (37))){
var inst_32709 = (state_32750[(23)]);
var inst_32718 = (state_32750[(22)]);
var inst_32617 = (state_32750[(12)]);
var inst_32718__$1 = cljs.core.first(inst_32709);
var inst_32719 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32718__$1,inst_32617,done);
var state_32750__$1 = (function (){var statearr_32835 = state_32750;
(statearr_32835[(22)] = inst_32718__$1);

return statearr_32835;
})();
if(cljs.core.truth_(inst_32719)){
var statearr_32836_34692 = state_32750__$1;
(statearr_32836_34692[(1)] = (39));

} else {
var statearr_32837_34696 = state_32750__$1;
(statearr_32837_34696[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (8))){
var inst_32629 = (state_32750[(16)]);
var inst_32628 = (state_32750[(17)]);
var inst_32631 = (inst_32629 < inst_32628);
var inst_32632 = inst_32631;
var state_32750__$1 = state_32750;
if(cljs.core.truth_(inst_32632)){
var statearr_32838_34698 = state_32750__$1;
(statearr_32838_34698[(1)] = (10));

} else {
var statearr_32840_34702 = state_32750__$1;
(statearr_32840_34702[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__31629__auto__ = null;
var cljs$core$async$mult_$_state_machine__31629__auto____0 = (function (){
var statearr_32842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32842[(0)] = cljs$core$async$mult_$_state_machine__31629__auto__);

(statearr_32842[(1)] = (1));

return statearr_32842;
});
var cljs$core$async$mult_$_state_machine__31629__auto____1 = (function (state_32750){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_32750);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e32843){var ex__31632__auto__ = e32843;
var statearr_32844_34704 = state_32750;
(statearr_32844_34704[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_32750[(4)]))){
var statearr_32845_34705 = state_32750;
(statearr_32845_34705[(1)] = cljs.core.first((state_32750[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34707 = state_32750;
state_32750 = G__34707;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31629__auto__ = function(state_32750){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31629__auto____1.call(this,state_32750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31629__auto____0;
cljs$core$async$mult_$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31629__auto____1;
return cljs$core$async$mult_$_state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_32846 = f__31801__auto__();
(statearr_32846[(6)] = c__31800__auto___34609);

return statearr_32846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32848 = arguments.length;
switch (G__32848) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34712 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34712(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34714 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34714(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34716 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34716(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34718 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4464__auto__.call(null,m,state_map));
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4461__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34718(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34724 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4464__auto__.call(null,m,mode));
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4461__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34724(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___34729 = arguments.length;
var i__4772__auto___34730 = (0);
while(true){
if((i__4772__auto___34730 < len__4771__auto___34729)){
args__4777__auto__.push((arguments[i__4772__auto___34730]));

var G__34731 = (i__4772__auto___34730 + (1));
i__4772__auto___34730 = G__34731;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32860){
var map__32861 = p__32860;
var map__32861__$1 = cljs.core.__destructure_map(map__32861);
var opts = map__32861__$1;
var statearr_32862_34734 = state;
(statearr_32862_34734[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32863_34735 = state;
(statearr_32863_34735[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32864_34737 = state;
(statearr_32864_34737[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32853){
var G__32854 = cljs.core.first(seq32853);
var seq32853__$1 = cljs.core.next(seq32853);
var G__32855 = cljs.core.first(seq32853__$1);
var seq32853__$2 = cljs.core.next(seq32853__$1);
var G__32856 = cljs.core.first(seq32853__$2);
var seq32853__$3 = cljs.core.next(seq32853__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32854,G__32855,G__32856,seq32853__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32875 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32876){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32876 = meta32876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32877,meta32876__$1){
var self__ = this;
var _32877__$1 = this;
return (new cljs.core.async.t_cljs$core$async32875(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32876__$1));
}));

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32877){
var self__ = this;
var _32877__$1 = this;
return self__.meta32876;
}));

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32875.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32876","meta32876",-535217984,null)], null);
}));

(cljs.core.async.t_cljs$core$async32875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32875");

(cljs.core.async.t_cljs$core$async32875.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async32875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32875.
 */
cljs.core.async.__GT_t_cljs$core$async32875 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32875(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32876){
return (new cljs.core.async.t_cljs$core$async32875(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32876));
});

}

return (new cljs.core.async.t_cljs$core$async32875(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31800__auto___34755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_32962){
var state_val_32963 = (state_32962[(1)]);
if((state_val_32963 === (7))){
var inst_32956 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32966_34756 = state_32962__$1;
(statearr_32966_34756[(2)] = inst_32956);

(statearr_32966_34756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (20))){
var inst_32950 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32967_34757 = state_32962__$1;
(statearr_32967_34757[(2)] = inst_32950);

(statearr_32967_34757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (1))){
var inst_32897 = calc_state();
var inst_32898 = cljs.core.__destructure_map(inst_32897);
var inst_32899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32898,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32898,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32898,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32902 = inst_32897;
var state_32962__$1 = (function (){var statearr_32971 = state_32962;
(statearr_32971[(7)] = inst_32899);

(statearr_32971[(8)] = inst_32902);

(statearr_32971[(9)] = inst_32901);

(statearr_32971[(10)] = inst_32900);

return statearr_32971;
})();
var statearr_32972_34758 = state_32962__$1;
(statearr_32972_34758[(2)] = null);

(statearr_32972_34758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (4))){
var inst_32915 = (state_32962[(11)]);
var inst_32916 = (state_32962[(12)]);
var inst_32914 = (state_32962[(2)]);
var inst_32915__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32914,(0),null);
var inst_32916__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32914,(1),null);
var inst_32919 = (inst_32915__$1 == null);
var inst_32920 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32916__$1,change);
var inst_32921 = ((inst_32919) || (inst_32920));
var state_32962__$1 = (function (){var statearr_32974 = state_32962;
(statearr_32974[(11)] = inst_32915__$1);

(statearr_32974[(12)] = inst_32916__$1);

return statearr_32974;
})();
if(cljs.core.truth_(inst_32921)){
var statearr_32978_34760 = state_32962__$1;
(statearr_32978_34760[(1)] = (5));

} else {
var statearr_32980_34761 = state_32962__$1;
(statearr_32980_34761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (15))){
var inst_32905 = (state_32962[(13)]);
var inst_32902 = inst_32905;
var state_32962__$1 = (function (){var statearr_32985 = state_32962;
(statearr_32985[(8)] = inst_32902);

return statearr_32985;
})();
var statearr_32986_34762 = state_32962__$1;
(statearr_32986_34762[(2)] = null);

(statearr_32986_34762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (13))){
var inst_32942 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
if(cljs.core.truth_(inst_32942)){
var statearr_32991_34775 = state_32962__$1;
(statearr_32991_34775[(1)] = (14));

} else {
var statearr_32992_34780 = state_32962__$1;
(statearr_32992_34780[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (6))){
var inst_32916 = (state_32962[(12)]);
var inst_32933 = (state_32962[(14)]);
var inst_32907 = (state_32962[(15)]);
var inst_32933__$1 = (inst_32907.cljs$core$IFn$_invoke$arity$1 ? inst_32907.cljs$core$IFn$_invoke$arity$1(inst_32916) : inst_32907.call(null,inst_32916));
var state_32962__$1 = (function (){var statearr_32997 = state_32962;
(statearr_32997[(14)] = inst_32933__$1);

return statearr_32997;
})();
if(cljs.core.truth_(inst_32933__$1)){
var statearr_33001_34813 = state_32962__$1;
(statearr_33001_34813[(1)] = (11));

} else {
var statearr_33002_34814 = state_32962__$1;
(statearr_33002_34814[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (17))){
var inst_32945 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
if(cljs.core.truth_(inst_32945)){
var statearr_33007_34831 = state_32962__$1;
(statearr_33007_34831[(1)] = (18));

} else {
var statearr_33008_34835 = state_32962__$1;
(statearr_33008_34835[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (3))){
var inst_32958 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32962__$1,inst_32958);
} else {
if((state_val_32963 === (12))){
var inst_32908 = (state_32962[(16)]);
var inst_32916 = (state_32962[(12)]);
var inst_32907 = (state_32962[(15)]);
var inst_32936 = cljs.core.empty_QMARK_(inst_32907);
var inst_32938 = (inst_32908.cljs$core$IFn$_invoke$arity$1 ? inst_32908.cljs$core$IFn$_invoke$arity$1(inst_32916) : inst_32908.call(null,inst_32916));
var inst_32939 = cljs.core.not(inst_32938);
var inst_32940 = ((inst_32936) && (inst_32939));
var state_32962__$1 = state_32962;
var statearr_33017_34861 = state_32962__$1;
(statearr_33017_34861[(2)] = inst_32940);

(statearr_33017_34861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (2))){
var inst_32902 = (state_32962[(8)]);
var inst_32905 = (state_32962[(13)]);
var inst_32905__$1 = cljs.core.__destructure_map(inst_32902);
var inst_32907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32905__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32905__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32905__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32962__$1 = (function (){var statearr_33023 = state_32962;
(statearr_33023[(16)] = inst_32908);

(statearr_33023[(13)] = inst_32905__$1);

(statearr_33023[(15)] = inst_32907);

return statearr_33023;
})();
return cljs.core.async.ioc_alts_BANG_(state_32962__$1,(4),inst_32909);
} else {
if((state_val_32963 === (19))){
var state_32962__$1 = state_32962;
var statearr_33028_34901 = state_32962__$1;
(statearr_33028_34901[(2)] = null);

(statearr_33028_34901[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (11))){
var inst_32933 = (state_32962[(14)]);
var state_32962__$1 = state_32962;
var statearr_33029_34909 = state_32962__$1;
(statearr_33029_34909[(2)] = inst_32933);

(statearr_33029_34909[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (9))){
var state_32962__$1 = state_32962;
var statearr_33031_34913 = state_32962__$1;
(statearr_33031_34913[(2)] = null);

(statearr_33031_34913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (5))){
var inst_32915 = (state_32962[(11)]);
var inst_32924 = (inst_32915 == null);
var state_32962__$1 = state_32962;
if(cljs.core.truth_(inst_32924)){
var statearr_33032_34922 = state_32962__$1;
(statearr_33032_34922[(1)] = (8));

} else {
var statearr_33035_34923 = state_32962__$1;
(statearr_33035_34923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (14))){
var inst_32915 = (state_32962[(11)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32962__$1,(17),out,inst_32915);
} else {
if((state_val_32963 === (16))){
var inst_32954 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_33038_34926 = state_32962__$1;
(statearr_33038_34926[(2)] = inst_32954);

(statearr_33038_34926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (10))){
var inst_32929 = (state_32962[(2)]);
var inst_32930 = calc_state();
var inst_32902 = inst_32930;
var state_32962__$1 = (function (){var statearr_33040 = state_32962;
(statearr_33040[(8)] = inst_32902);

(statearr_33040[(17)] = inst_32929);

return statearr_33040;
})();
var statearr_33041_34927 = state_32962__$1;
(statearr_33041_34927[(2)] = null);

(statearr_33041_34927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (18))){
var inst_32905 = (state_32962[(13)]);
var inst_32902 = inst_32905;
var state_32962__$1 = (function (){var statearr_33046 = state_32962;
(statearr_33046[(8)] = inst_32902);

return statearr_33046;
})();
var statearr_33047_34929 = state_32962__$1;
(statearr_33047_34929[(2)] = null);

(statearr_33047_34929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (8))){
var inst_32916 = (state_32962[(12)]);
var inst_32926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32916);
var state_32962__$1 = state_32962;
var statearr_33049_34930 = state_32962__$1;
(statearr_33049_34930[(2)] = inst_32926);

(statearr_33049_34930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__31629__auto__ = null;
var cljs$core$async$mix_$_state_machine__31629__auto____0 = (function (){
var statearr_33057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33057[(0)] = cljs$core$async$mix_$_state_machine__31629__auto__);

(statearr_33057[(1)] = (1));

return statearr_33057;
});
var cljs$core$async$mix_$_state_machine__31629__auto____1 = (function (state_32962){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_32962);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e33062){var ex__31632__auto__ = e33062;
var statearr_33064_34935 = state_32962;
(statearr_33064_34935[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_32962[(4)]))){
var statearr_33066_34937 = state_32962;
(statearr_33066_34937[(1)] = cljs.core.first((state_32962[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34938 = state_32962;
state_32962 = G__34938;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31629__auto__ = function(state_32962){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31629__auto____1.call(this,state_32962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31629__auto____0;
cljs$core$async$mix_$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31629__auto____1;
return cljs$core$async$mix_$_state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_33077 = f__31801__auto__();
(statearr_33077[(6)] = c__31800__auto___34755);

return statearr_33077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34940 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4464__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4461__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34940(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34943 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4464__auto__.call(null,p,v,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4461__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34943(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34944 = (function() {
var G__34945 = null;
var G__34945__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4464__auto__.call(null,p));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4461__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34945__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4464__auto__.call(null,p,v));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4461__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34945 = function(p,v){
switch(arguments.length){
case 1:
return G__34945__1.call(this,p);
case 2:
return G__34945__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34945.cljs$core$IFn$_invoke$arity$1 = G__34945__1;
G__34945.cljs$core$IFn$_invoke$arity$2 = G__34945__2;
return G__34945;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33149 = arguments.length;
switch (G__33149) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34944(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34944(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33171 = arguments.length;
switch (G__33171) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33161_SHARP_){
if(cljs.core.truth_((p1__33161_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33161_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33161_SHARP_.call(null,topic)))){
return p1__33161_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33161_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33180 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33181){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33181 = meta33181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33182,meta33181__$1){
var self__ = this;
var _33182__$1 = this;
return (new cljs.core.async.t_cljs$core$async33180(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33181__$1));
}));

(cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33182){
var self__ = this;
var _33182__$1 = this;
return self__.meta33181;
}));

(cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33181","meta33181",1982322122,null)], null);
}));

(cljs.core.async.t_cljs$core$async33180.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33180");

(cljs.core.async.t_cljs$core$async33180.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async33180");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33180.
 */
cljs.core.async.__GT_t_cljs$core$async33180 = (function cljs$core$async$__GT_t_cljs$core$async33180(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33181){
return (new cljs.core.async.t_cljs$core$async33180(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33181));
});

}

return (new cljs.core.async.t_cljs$core$async33180(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31800__auto___34972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_33302){
var state_val_33303 = (state_33302[(1)]);
if((state_val_33303 === (7))){
var inst_33297 = (state_33302[(2)]);
var state_33302__$1 = state_33302;
var statearr_33320_34977 = state_33302__$1;
(statearr_33320_34977[(2)] = inst_33297);

(statearr_33320_34977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (20))){
var state_33302__$1 = state_33302;
var statearr_33325_34978 = state_33302__$1;
(statearr_33325_34978[(2)] = null);

(statearr_33325_34978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (1))){
var state_33302__$1 = state_33302;
var statearr_33326_34984 = state_33302__$1;
(statearr_33326_34984[(2)] = null);

(statearr_33326_34984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (24))){
var inst_33259 = (state_33302[(7)]);
var inst_33269 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33259);
var state_33302__$1 = state_33302;
var statearr_33327_34995 = state_33302__$1;
(statearr_33327_34995[(2)] = inst_33269);

(statearr_33327_34995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (4))){
var inst_33203 = (state_33302[(8)]);
var inst_33203__$1 = (state_33302[(2)]);
var inst_33204 = (inst_33203__$1 == null);
var state_33302__$1 = (function (){var statearr_33332 = state_33302;
(statearr_33332[(8)] = inst_33203__$1);

return statearr_33332;
})();
if(cljs.core.truth_(inst_33204)){
var statearr_33334_35008 = state_33302__$1;
(statearr_33334_35008[(1)] = (5));

} else {
var statearr_33335_35009 = state_33302__$1;
(statearr_33335_35009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (15))){
var inst_33253 = (state_33302[(2)]);
var state_33302__$1 = state_33302;
var statearr_33336_35010 = state_33302__$1;
(statearr_33336_35010[(2)] = inst_33253);

(statearr_33336_35010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (21))){
var inst_33293 = (state_33302[(2)]);
var state_33302__$1 = (function (){var statearr_33337 = state_33302;
(statearr_33337[(9)] = inst_33293);

return statearr_33337;
})();
var statearr_33338_35016 = state_33302__$1;
(statearr_33338_35016[(2)] = null);

(statearr_33338_35016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (13))){
var inst_33231 = (state_33302[(10)]);
var inst_33233 = cljs.core.chunked_seq_QMARK_(inst_33231);
var state_33302__$1 = state_33302;
if(inst_33233){
var statearr_33341_35017 = state_33302__$1;
(statearr_33341_35017[(1)] = (16));

} else {
var statearr_33342_35018 = state_33302__$1;
(statearr_33342_35018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (22))){
var inst_33266 = (state_33302[(2)]);
var state_33302__$1 = state_33302;
if(cljs.core.truth_(inst_33266)){
var statearr_33343_35019 = state_33302__$1;
(statearr_33343_35019[(1)] = (23));

} else {
var statearr_33344_35020 = state_33302__$1;
(statearr_33344_35020[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (6))){
var inst_33259 = (state_33302[(7)]);
var inst_33203 = (state_33302[(8)]);
var inst_33261 = (state_33302[(11)]);
var inst_33259__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33203) : topic_fn.call(null,inst_33203));
var inst_33260 = cljs.core.deref(mults);
var inst_33261__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33260,inst_33259__$1);
var state_33302__$1 = (function (){var statearr_33345 = state_33302;
(statearr_33345[(7)] = inst_33259__$1);

(statearr_33345[(11)] = inst_33261__$1);

return statearr_33345;
})();
if(cljs.core.truth_(inst_33261__$1)){
var statearr_33346_35021 = state_33302__$1;
(statearr_33346_35021[(1)] = (19));

} else {
var statearr_33347_35022 = state_33302__$1;
(statearr_33347_35022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (25))){
var inst_33271 = (state_33302[(2)]);
var state_33302__$1 = state_33302;
var statearr_33348_35023 = state_33302__$1;
(statearr_33348_35023[(2)] = inst_33271);

(statearr_33348_35023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (17))){
var inst_33231 = (state_33302[(10)]);
var inst_33243 = cljs.core.first(inst_33231);
var inst_33244 = cljs.core.async.muxch_STAR_(inst_33243);
var inst_33245 = cljs.core.async.close_BANG_(inst_33244);
var inst_33246 = cljs.core.next(inst_33231);
var inst_33213 = inst_33246;
var inst_33214 = null;
var inst_33215 = (0);
var inst_33216 = (0);
var state_33302__$1 = (function (){var statearr_33349 = state_33302;
(statearr_33349[(12)] = inst_33215);

(statearr_33349[(13)] = inst_33216);

(statearr_33349[(14)] = inst_33213);

(statearr_33349[(15)] = inst_33214);

(statearr_33349[(16)] = inst_33245);

return statearr_33349;
})();
var statearr_33350_35033 = state_33302__$1;
(statearr_33350_35033[(2)] = null);

(statearr_33350_35033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (3))){
var inst_33299 = (state_33302[(2)]);
var state_33302__$1 = state_33302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33302__$1,inst_33299);
} else {
if((state_val_33303 === (12))){
var inst_33255 = (state_33302[(2)]);
var state_33302__$1 = state_33302;
var statearr_33351_35042 = state_33302__$1;
(statearr_33351_35042[(2)] = inst_33255);

(statearr_33351_35042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (2))){
var state_33302__$1 = state_33302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33302__$1,(4),ch);
} else {
if((state_val_33303 === (23))){
var state_33302__$1 = state_33302;
var statearr_33352_35048 = state_33302__$1;
(statearr_33352_35048[(2)] = null);

(statearr_33352_35048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (19))){
var inst_33203 = (state_33302[(8)]);
var inst_33261 = (state_33302[(11)]);
var inst_33264 = cljs.core.async.muxch_STAR_(inst_33261);
var state_33302__$1 = state_33302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33302__$1,(22),inst_33264,inst_33203);
} else {
if((state_val_33303 === (11))){
var inst_33213 = (state_33302[(14)]);
var inst_33231 = (state_33302[(10)]);
var inst_33231__$1 = cljs.core.seq(inst_33213);
var state_33302__$1 = (function (){var statearr_33353 = state_33302;
(statearr_33353[(10)] = inst_33231__$1);

return statearr_33353;
})();
if(inst_33231__$1){
var statearr_33355_35049 = state_33302__$1;
(statearr_33355_35049[(1)] = (13));

} else {
var statearr_33356_35050 = state_33302__$1;
(statearr_33356_35050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (9))){
var inst_33257 = (state_33302[(2)]);
var state_33302__$1 = state_33302;
var statearr_33358_35051 = state_33302__$1;
(statearr_33358_35051[(2)] = inst_33257);

(statearr_33358_35051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (5))){
var inst_33210 = cljs.core.deref(mults);
var inst_33211 = cljs.core.vals(inst_33210);
var inst_33212 = cljs.core.seq(inst_33211);
var inst_33213 = inst_33212;
var inst_33214 = null;
var inst_33215 = (0);
var inst_33216 = (0);
var state_33302__$1 = (function (){var statearr_33359 = state_33302;
(statearr_33359[(12)] = inst_33215);

(statearr_33359[(13)] = inst_33216);

(statearr_33359[(14)] = inst_33213);

(statearr_33359[(15)] = inst_33214);

return statearr_33359;
})();
var statearr_33360_35062 = state_33302__$1;
(statearr_33360_35062[(2)] = null);

(statearr_33360_35062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (14))){
var state_33302__$1 = state_33302;
var statearr_33364_35063 = state_33302__$1;
(statearr_33364_35063[(2)] = null);

(statearr_33364_35063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (16))){
var inst_33231 = (state_33302[(10)]);
var inst_33235 = cljs.core.chunk_first(inst_33231);
var inst_33236 = cljs.core.chunk_rest(inst_33231);
var inst_33237 = cljs.core.count(inst_33235);
var inst_33213 = inst_33236;
var inst_33214 = inst_33235;
var inst_33215 = inst_33237;
var inst_33216 = (0);
var state_33302__$1 = (function (){var statearr_33365 = state_33302;
(statearr_33365[(12)] = inst_33215);

(statearr_33365[(13)] = inst_33216);

(statearr_33365[(14)] = inst_33213);

(statearr_33365[(15)] = inst_33214);

return statearr_33365;
})();
var statearr_33366_35081 = state_33302__$1;
(statearr_33366_35081[(2)] = null);

(statearr_33366_35081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (10))){
var inst_33215 = (state_33302[(12)]);
var inst_33216 = (state_33302[(13)]);
var inst_33213 = (state_33302[(14)]);
var inst_33214 = (state_33302[(15)]);
var inst_33224 = cljs.core._nth(inst_33214,inst_33216);
var inst_33225 = cljs.core.async.muxch_STAR_(inst_33224);
var inst_33226 = cljs.core.async.close_BANG_(inst_33225);
var inst_33228 = (inst_33216 + (1));
var tmp33361 = inst_33215;
var tmp33362 = inst_33213;
var tmp33363 = inst_33214;
var inst_33213__$1 = tmp33362;
var inst_33214__$1 = tmp33363;
var inst_33215__$1 = tmp33361;
var inst_33216__$1 = inst_33228;
var state_33302__$1 = (function (){var statearr_33368 = state_33302;
(statearr_33368[(12)] = inst_33215__$1);

(statearr_33368[(13)] = inst_33216__$1);

(statearr_33368[(17)] = inst_33226);

(statearr_33368[(14)] = inst_33213__$1);

(statearr_33368[(15)] = inst_33214__$1);

return statearr_33368;
})();
var statearr_33369_35087 = state_33302__$1;
(statearr_33369_35087[(2)] = null);

(statearr_33369_35087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (18))){
var inst_33249 = (state_33302[(2)]);
var state_33302__$1 = state_33302;
var statearr_33370_35090 = state_33302__$1;
(statearr_33370_35090[(2)] = inst_33249);

(statearr_33370_35090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (8))){
var inst_33215 = (state_33302[(12)]);
var inst_33216 = (state_33302[(13)]);
var inst_33218 = (inst_33216 < inst_33215);
var inst_33219 = inst_33218;
var state_33302__$1 = state_33302;
if(cljs.core.truth_(inst_33219)){
var statearr_33372_35095 = state_33302__$1;
(statearr_33372_35095[(1)] = (10));

} else {
var statearr_33373_35100 = state_33302__$1;
(statearr_33373_35100[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31629__auto__ = null;
var cljs$core$async$state_machine__31629__auto____0 = (function (){
var statearr_33374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33374[(0)] = cljs$core$async$state_machine__31629__auto__);

(statearr_33374[(1)] = (1));

return statearr_33374;
});
var cljs$core$async$state_machine__31629__auto____1 = (function (state_33302){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_33302);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e33375){var ex__31632__auto__ = e33375;
var statearr_33376_35107 = state_33302;
(statearr_33376_35107[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_33302[(4)]))){
var statearr_33377_35108 = state_33302;
(statearr_33377_35108[(1)] = cljs.core.first((state_33302[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35109 = state_33302;
state_33302 = G__35109;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$state_machine__31629__auto__ = function(state_33302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31629__auto____1.call(this,state_33302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31629__auto____0;
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31629__auto____1;
return cljs$core$async$state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_33378 = f__31801__auto__();
(statearr_33378[(6)] = c__31800__auto___34972);

return statearr_33378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33382 = arguments.length;
switch (G__33382) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33384 = arguments.length;
switch (G__33384) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33387 = arguments.length;
switch (G__33387) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__31800__auto___35117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_33443){
var state_val_33444 = (state_33443[(1)]);
if((state_val_33444 === (7))){
var state_33443__$1 = state_33443;
var statearr_33445_35118 = state_33443__$1;
(statearr_33445_35118[(2)] = null);

(statearr_33445_35118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (1))){
var state_33443__$1 = state_33443;
var statearr_33446_35123 = state_33443__$1;
(statearr_33446_35123[(2)] = null);

(statearr_33446_35123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (4))){
var inst_33396 = (state_33443[(7)]);
var inst_33395 = (state_33443[(8)]);
var inst_33398 = (inst_33396 < inst_33395);
var state_33443__$1 = state_33443;
if(cljs.core.truth_(inst_33398)){
var statearr_33447_35127 = state_33443__$1;
(statearr_33447_35127[(1)] = (6));

} else {
var statearr_33448_35128 = state_33443__$1;
(statearr_33448_35128[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (15))){
var inst_33426 = (state_33443[(9)]);
var inst_33434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33426);
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33443__$1,(17),out,inst_33434);
} else {
if((state_val_33444 === (13))){
var inst_33426 = (state_33443[(9)]);
var inst_33426__$1 = (state_33443[(2)]);
var inst_33427 = cljs.core.some(cljs.core.nil_QMARK_,inst_33426__$1);
var state_33443__$1 = (function (){var statearr_33462 = state_33443;
(statearr_33462[(9)] = inst_33426__$1);

return statearr_33462;
})();
if(cljs.core.truth_(inst_33427)){
var statearr_33463_35137 = state_33443__$1;
(statearr_33463_35137[(1)] = (14));

} else {
var statearr_33470_35138 = state_33443__$1;
(statearr_33470_35138[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (6))){
var state_33443__$1 = state_33443;
var statearr_33471_35139 = state_33443__$1;
(statearr_33471_35139[(2)] = null);

(statearr_33471_35139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (17))){
var inst_33436 = (state_33443[(2)]);
var state_33443__$1 = (function (){var statearr_33483 = state_33443;
(statearr_33483[(10)] = inst_33436);

return statearr_33483;
})();
var statearr_33484_35143 = state_33443__$1;
(statearr_33484_35143[(2)] = null);

(statearr_33484_35143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (3))){
var inst_33441 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33443__$1,inst_33441);
} else {
if((state_val_33444 === (12))){
var _ = (function (){var statearr_33488 = state_33443;
(statearr_33488[(4)] = cljs.core.rest((state_33443[(4)])));

return statearr_33488;
})();
var state_33443__$1 = state_33443;
var ex33479 = (state_33443__$1[(2)]);
var statearr_33489_35147 = state_33443__$1;
(statearr_33489_35147[(5)] = ex33479);


if((ex33479 instanceof Object)){
var statearr_33490_35148 = state_33443__$1;
(statearr_33490_35148[(1)] = (11));

(statearr_33490_35148[(5)] = null);

} else {
throw ex33479;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (2))){
var inst_33394 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33395 = cnt;
var inst_33396 = (0);
var state_33443__$1 = (function (){var statearr_33491 = state_33443;
(statearr_33491[(7)] = inst_33396);

(statearr_33491[(8)] = inst_33395);

(statearr_33491[(11)] = inst_33394);

return statearr_33491;
})();
var statearr_33492_35149 = state_33443__$1;
(statearr_33492_35149[(2)] = null);

(statearr_33492_35149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (11))){
var inst_33405 = (state_33443[(2)]);
var inst_33406 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33443__$1 = (function (){var statearr_33497 = state_33443;
(statearr_33497[(12)] = inst_33405);

return statearr_33497;
})();
var statearr_33498_35153 = state_33443__$1;
(statearr_33498_35153[(2)] = inst_33406);

(statearr_33498_35153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (9))){
var inst_33396 = (state_33443[(7)]);
var _ = (function (){var statearr_33499 = state_33443;
(statearr_33499[(4)] = cljs.core.cons((12),(state_33443[(4)])));

return statearr_33499;
})();
var inst_33412 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33396) : chs__$1.call(null,inst_33396));
var inst_33413 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33396) : done.call(null,inst_33396));
var inst_33414 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33412,inst_33413);
var ___$1 = (function (){var statearr_33500 = state_33443;
(statearr_33500[(4)] = cljs.core.rest((state_33443[(4)])));

return statearr_33500;
})();
var state_33443__$1 = state_33443;
var statearr_33501_35156 = state_33443__$1;
(statearr_33501_35156[(2)] = inst_33414);

(statearr_33501_35156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (5))){
var inst_33424 = (state_33443[(2)]);
var state_33443__$1 = (function (){var statearr_33502 = state_33443;
(statearr_33502[(13)] = inst_33424);

return statearr_33502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33443__$1,(13),dchan);
} else {
if((state_val_33444 === (14))){
var inst_33432 = cljs.core.async.close_BANG_(out);
var state_33443__$1 = state_33443;
var statearr_33503_35166 = state_33443__$1;
(statearr_33503_35166[(2)] = inst_33432);

(statearr_33503_35166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (16))){
var inst_33439 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33504_35167 = state_33443__$1;
(statearr_33504_35167[(2)] = inst_33439);

(statearr_33504_35167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (10))){
var inst_33396 = (state_33443[(7)]);
var inst_33417 = (state_33443[(2)]);
var inst_33418 = (inst_33396 + (1));
var inst_33396__$1 = inst_33418;
var state_33443__$1 = (function (){var statearr_33505 = state_33443;
(statearr_33505[(7)] = inst_33396__$1);

(statearr_33505[(14)] = inst_33417);

return statearr_33505;
})();
var statearr_33506_35175 = state_33443__$1;
(statearr_33506_35175[(2)] = null);

(statearr_33506_35175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33444 === (8))){
var inst_33422 = (state_33443[(2)]);
var state_33443__$1 = state_33443;
var statearr_33507_35180 = state_33443__$1;
(statearr_33507_35180[(2)] = inst_33422);

(statearr_33507_35180[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31629__auto__ = null;
var cljs$core$async$state_machine__31629__auto____0 = (function (){
var statearr_33512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33512[(0)] = cljs$core$async$state_machine__31629__auto__);

(statearr_33512[(1)] = (1));

return statearr_33512;
});
var cljs$core$async$state_machine__31629__auto____1 = (function (state_33443){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_33443);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e33513){var ex__31632__auto__ = e33513;
var statearr_33514_35181 = state_33443;
(statearr_33514_35181[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_33443[(4)]))){
var statearr_33515_35182 = state_33443;
(statearr_33515_35182[(1)] = cljs.core.first((state_33443[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35183 = state_33443;
state_33443 = G__35183;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$state_machine__31629__auto__ = function(state_33443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31629__auto____1.call(this,state_33443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31629__auto____0;
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31629__auto____1;
return cljs$core$async$state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_33518 = f__31801__auto__();
(statearr_33518[(6)] = c__31800__auto___35117);

return statearr_33518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33523 = arguments.length;
switch (G__33523) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31800__auto___35193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_33555){
var state_val_33556 = (state_33555[(1)]);
if((state_val_33556 === (7))){
var inst_33535 = (state_33555[(7)]);
var inst_33534 = (state_33555[(8)]);
var inst_33534__$1 = (state_33555[(2)]);
var inst_33535__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33534__$1,(0),null);
var inst_33536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33534__$1,(1),null);
var inst_33537 = (inst_33535__$1 == null);
var state_33555__$1 = (function (){var statearr_33559 = state_33555;
(statearr_33559[(7)] = inst_33535__$1);

(statearr_33559[(9)] = inst_33536);

(statearr_33559[(8)] = inst_33534__$1);

return statearr_33559;
})();
if(cljs.core.truth_(inst_33537)){
var statearr_33560_35196 = state_33555__$1;
(statearr_33560_35196[(1)] = (8));

} else {
var statearr_33561_35197 = state_33555__$1;
(statearr_33561_35197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (1))){
var inst_33524 = cljs.core.vec(chs);
var inst_33525 = inst_33524;
var state_33555__$1 = (function (){var statearr_33563 = state_33555;
(statearr_33563[(10)] = inst_33525);

return statearr_33563;
})();
var statearr_33564_35204 = state_33555__$1;
(statearr_33564_35204[(2)] = null);

(statearr_33564_35204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (4))){
var inst_33525 = (state_33555[(10)]);
var state_33555__$1 = state_33555;
return cljs.core.async.ioc_alts_BANG_(state_33555__$1,(7),inst_33525);
} else {
if((state_val_33556 === (6))){
var inst_33551 = (state_33555[(2)]);
var state_33555__$1 = state_33555;
var statearr_33569_35205 = state_33555__$1;
(statearr_33569_35205[(2)] = inst_33551);

(statearr_33569_35205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (3))){
var inst_33553 = (state_33555[(2)]);
var state_33555__$1 = state_33555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33555__$1,inst_33553);
} else {
if((state_val_33556 === (2))){
var inst_33525 = (state_33555[(10)]);
var inst_33527 = cljs.core.count(inst_33525);
var inst_33528 = (inst_33527 > (0));
var state_33555__$1 = state_33555;
if(cljs.core.truth_(inst_33528)){
var statearr_33571_35206 = state_33555__$1;
(statearr_33571_35206[(1)] = (4));

} else {
var statearr_33572_35207 = state_33555__$1;
(statearr_33572_35207[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (11))){
var inst_33525 = (state_33555[(10)]);
var inst_33544 = (state_33555[(2)]);
var tmp33570 = inst_33525;
var inst_33525__$1 = tmp33570;
var state_33555__$1 = (function (){var statearr_33573 = state_33555;
(statearr_33573[(10)] = inst_33525__$1);

(statearr_33573[(11)] = inst_33544);

return statearr_33573;
})();
var statearr_33574_35208 = state_33555__$1;
(statearr_33574_35208[(2)] = null);

(statearr_33574_35208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (9))){
var inst_33535 = (state_33555[(7)]);
var state_33555__$1 = state_33555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33555__$1,(11),out,inst_33535);
} else {
if((state_val_33556 === (5))){
var inst_33549 = cljs.core.async.close_BANG_(out);
var state_33555__$1 = state_33555;
var statearr_33580_35215 = state_33555__$1;
(statearr_33580_35215[(2)] = inst_33549);

(statearr_33580_35215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (10))){
var inst_33547 = (state_33555[(2)]);
var state_33555__$1 = state_33555;
var statearr_33582_35216 = state_33555__$1;
(statearr_33582_35216[(2)] = inst_33547);

(statearr_33582_35216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33556 === (8))){
var inst_33525 = (state_33555[(10)]);
var inst_33535 = (state_33555[(7)]);
var inst_33536 = (state_33555[(9)]);
var inst_33534 = (state_33555[(8)]);
var inst_33539 = (function (){var cs = inst_33525;
var vec__33530 = inst_33534;
var v = inst_33535;
var c = inst_33536;
return (function (p1__33520_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33520_SHARP_);
});
})();
var inst_33540 = cljs.core.filterv(inst_33539,inst_33525);
var inst_33525__$1 = inst_33540;
var state_33555__$1 = (function (){var statearr_33584 = state_33555;
(statearr_33584[(10)] = inst_33525__$1);

return statearr_33584;
})();
var statearr_33585_35220 = state_33555__$1;
(statearr_33585_35220[(2)] = null);

(statearr_33585_35220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31629__auto__ = null;
var cljs$core$async$state_machine__31629__auto____0 = (function (){
var statearr_33586 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33586[(0)] = cljs$core$async$state_machine__31629__auto__);

(statearr_33586[(1)] = (1));

return statearr_33586;
});
var cljs$core$async$state_machine__31629__auto____1 = (function (state_33555){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_33555);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e33587){var ex__31632__auto__ = e33587;
var statearr_33588_35224 = state_33555;
(statearr_33588_35224[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_33555[(4)]))){
var statearr_33590_35225 = state_33555;
(statearr_33590_35225[(1)] = cljs.core.first((state_33555[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35228 = state_33555;
state_33555 = G__35228;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$state_machine__31629__auto__ = function(state_33555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31629__auto____1.call(this,state_33555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31629__auto____0;
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31629__auto____1;
return cljs$core$async$state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_33594 = f__31801__auto__();
(statearr_33594[(6)] = c__31800__auto___35193);

return statearr_33594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33599 = arguments.length;
switch (G__33599) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31800__auto___35261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_33623){
var state_val_33624 = (state_33623[(1)]);
if((state_val_33624 === (7))){
var inst_33605 = (state_33623[(7)]);
var inst_33605__$1 = (state_33623[(2)]);
var inst_33606 = (inst_33605__$1 == null);
var inst_33607 = cljs.core.not(inst_33606);
var state_33623__$1 = (function (){var statearr_33626 = state_33623;
(statearr_33626[(7)] = inst_33605__$1);

return statearr_33626;
})();
if(inst_33607){
var statearr_33630_35269 = state_33623__$1;
(statearr_33630_35269[(1)] = (8));

} else {
var statearr_33631_35270 = state_33623__$1;
(statearr_33631_35270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (1))){
var inst_33600 = (0);
var state_33623__$1 = (function (){var statearr_33632 = state_33623;
(statearr_33632[(8)] = inst_33600);

return statearr_33632;
})();
var statearr_33633_35274 = state_33623__$1;
(statearr_33633_35274[(2)] = null);

(statearr_33633_35274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (4))){
var state_33623__$1 = state_33623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33623__$1,(7),ch);
} else {
if((state_val_33624 === (6))){
var inst_33618 = (state_33623[(2)]);
var state_33623__$1 = state_33623;
var statearr_33634_35282 = state_33623__$1;
(statearr_33634_35282[(2)] = inst_33618);

(statearr_33634_35282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (3))){
var inst_33620 = (state_33623[(2)]);
var inst_33621 = cljs.core.async.close_BANG_(out);
var state_33623__$1 = (function (){var statearr_33636 = state_33623;
(statearr_33636[(9)] = inst_33620);

return statearr_33636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33623__$1,inst_33621);
} else {
if((state_val_33624 === (2))){
var inst_33600 = (state_33623[(8)]);
var inst_33602 = (inst_33600 < n);
var state_33623__$1 = state_33623;
if(cljs.core.truth_(inst_33602)){
var statearr_33640_35290 = state_33623__$1;
(statearr_33640_35290[(1)] = (4));

} else {
var statearr_33641_35291 = state_33623__$1;
(statearr_33641_35291[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (11))){
var inst_33600 = (state_33623[(8)]);
var inst_33610 = (state_33623[(2)]);
var inst_33611 = (inst_33600 + (1));
var inst_33600__$1 = inst_33611;
var state_33623__$1 = (function (){var statearr_33642 = state_33623;
(statearr_33642[(10)] = inst_33610);

(statearr_33642[(8)] = inst_33600__$1);

return statearr_33642;
})();
var statearr_33643_35294 = state_33623__$1;
(statearr_33643_35294[(2)] = null);

(statearr_33643_35294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (9))){
var state_33623__$1 = state_33623;
var statearr_33644_35297 = state_33623__$1;
(statearr_33644_35297[(2)] = null);

(statearr_33644_35297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (5))){
var state_33623__$1 = state_33623;
var statearr_33645_35298 = state_33623__$1;
(statearr_33645_35298[(2)] = null);

(statearr_33645_35298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (10))){
var inst_33615 = (state_33623[(2)]);
var state_33623__$1 = state_33623;
var statearr_33646_35301 = state_33623__$1;
(statearr_33646_35301[(2)] = inst_33615);

(statearr_33646_35301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33624 === (8))){
var inst_33605 = (state_33623[(7)]);
var state_33623__$1 = state_33623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33623__$1,(11),out,inst_33605);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31629__auto__ = null;
var cljs$core$async$state_machine__31629__auto____0 = (function (){
var statearr_33647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33647[(0)] = cljs$core$async$state_machine__31629__auto__);

(statearr_33647[(1)] = (1));

return statearr_33647;
});
var cljs$core$async$state_machine__31629__auto____1 = (function (state_33623){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_33623);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e33648){var ex__31632__auto__ = e33648;
var statearr_33649_35307 = state_33623;
(statearr_33649_35307[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_33623[(4)]))){
var statearr_33650_35308 = state_33623;
(statearr_33650_35308[(1)] = cljs.core.first((state_33623[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35309 = state_33623;
state_33623 = G__35309;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$state_machine__31629__auto__ = function(state_33623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31629__auto____1.call(this,state_33623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31629__auto____0;
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31629__auto____1;
return cljs$core$async$state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_33651 = f__31801__auto__();
(statearr_33651[(6)] = c__31800__auto___35261);

return statearr_33651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33653 = (function (f,ch,meta33654){
this.f = f;
this.ch = ch;
this.meta33654 = meta33654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33655,meta33654__$1){
var self__ = this;
var _33655__$1 = this;
return (new cljs.core.async.t_cljs$core$async33653(self__.f,self__.ch,meta33654__$1));
}));

(cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33655){
var self__ = this;
var _33655__$1 = this;
return self__.meta33654;
}));

(cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33661 = (function (f,ch,meta33654,_,fn1,meta33662){
this.f = f;
this.ch = ch;
this.meta33654 = meta33654;
this._ = _;
this.fn1 = fn1;
this.meta33662 = meta33662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33663,meta33662__$1){
var self__ = this;
var _33663__$1 = this;
return (new cljs.core.async.t_cljs$core$async33661(self__.f,self__.ch,self__.meta33654,self__._,self__.fn1,meta33662__$1));
}));

(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33663){
var self__ = this;
var _33663__$1 = this;
return self__.meta33662;
}));

(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33652_SHARP_){
var G__33664 = (((p1__33652_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33652_SHARP_) : self__.f.call(null,p1__33652_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33664) : f1.call(null,G__33664));
});
}));

(cljs.core.async.t_cljs$core$async33661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33654","meta33654",749697966,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33653","cljs.core.async/t_cljs$core$async33653",2111133002,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33662","meta33662",1621438617,null)], null);
}));

(cljs.core.async.t_cljs$core$async33661.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33661");

(cljs.core.async.t_cljs$core$async33661.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async33661");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33661.
 */
cljs.core.async.__GT_t_cljs$core$async33661 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33661(f__$1,ch__$1,meta33654__$1,___$2,fn1__$1,meta33662){
return (new cljs.core.async.t_cljs$core$async33661(f__$1,ch__$1,meta33654__$1,___$2,fn1__$1,meta33662));
});

}

return (new cljs.core.async.t_cljs$core$async33661(self__.f,self__.ch,self__.meta33654,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33665 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33665) : self__.f.call(null,G__33665));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33654","meta33654",749697966,null)], null);
}));

(cljs.core.async.t_cljs$core$async33653.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33653");

(cljs.core.async.t_cljs$core$async33653.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async33653");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33653.
 */
cljs.core.async.__GT_t_cljs$core$async33653 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33653(f__$1,ch__$1,meta33654){
return (new cljs.core.async.t_cljs$core$async33653(f__$1,ch__$1,meta33654));
});

}

return (new cljs.core.async.t_cljs$core$async33653(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33666 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33666 = (function (f,ch,meta33667){
this.f = f;
this.ch = ch;
this.meta33667 = meta33667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33668,meta33667__$1){
var self__ = this;
var _33668__$1 = this;
return (new cljs.core.async.t_cljs$core$async33666(self__.f,self__.ch,meta33667__$1));
}));

(cljs.core.async.t_cljs$core$async33666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33668){
var self__ = this;
var _33668__$1 = this;
return self__.meta33667;
}));

(cljs.core.async.t_cljs$core$async33666.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33666.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33666.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33666.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33666.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33666.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33667","meta33667",1715059565,null)], null);
}));

(cljs.core.async.t_cljs$core$async33666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33666");

(cljs.core.async.t_cljs$core$async33666.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async33666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33666.
 */
cljs.core.async.__GT_t_cljs$core$async33666 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33666(f__$1,ch__$1,meta33667){
return (new cljs.core.async.t_cljs$core$async33666(f__$1,ch__$1,meta33667));
});

}

return (new cljs.core.async.t_cljs$core$async33666(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33669 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33669 = (function (p,ch,meta33670){
this.p = p;
this.ch = ch;
this.meta33670 = meta33670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33671,meta33670__$1){
var self__ = this;
var _33671__$1 = this;
return (new cljs.core.async.t_cljs$core$async33669(self__.p,self__.ch,meta33670__$1));
}));

(cljs.core.async.t_cljs$core$async33669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33671){
var self__ = this;
var _33671__$1 = this;
return self__.meta33670;
}));

(cljs.core.async.t_cljs$core$async33669.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33669.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33669.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33669.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33669.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33669.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33669.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33670","meta33670",-630694217,null)], null);
}));

(cljs.core.async.t_cljs$core$async33669.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33669");

(cljs.core.async.t_cljs$core$async33669.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async33669");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33669.
 */
cljs.core.async.__GT_t_cljs$core$async33669 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33669(p__$1,ch__$1,meta33670){
return (new cljs.core.async.t_cljs$core$async33669(p__$1,ch__$1,meta33670));
});

}

return (new cljs.core.async.t_cljs$core$async33669(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33677 = arguments.length;
switch (G__33677) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31800__auto___35342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_33702){
var state_val_33703 = (state_33702[(1)]);
if((state_val_33703 === (7))){
var inst_33698 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
var statearr_33704_35345 = state_33702__$1;
(statearr_33704_35345[(2)] = inst_33698);

(statearr_33704_35345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (1))){
var state_33702__$1 = state_33702;
var statearr_33705_35346 = state_33702__$1;
(statearr_33705_35346[(2)] = null);

(statearr_33705_35346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (4))){
var inst_33684 = (state_33702[(7)]);
var inst_33684__$1 = (state_33702[(2)]);
var inst_33685 = (inst_33684__$1 == null);
var state_33702__$1 = (function (){var statearr_33706 = state_33702;
(statearr_33706[(7)] = inst_33684__$1);

return statearr_33706;
})();
if(cljs.core.truth_(inst_33685)){
var statearr_33707_35351 = state_33702__$1;
(statearr_33707_35351[(1)] = (5));

} else {
var statearr_33708_35352 = state_33702__$1;
(statearr_33708_35352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (6))){
var inst_33684 = (state_33702[(7)]);
var inst_33689 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33684) : p.call(null,inst_33684));
var state_33702__$1 = state_33702;
if(cljs.core.truth_(inst_33689)){
var statearr_33709_35353 = state_33702__$1;
(statearr_33709_35353[(1)] = (8));

} else {
var statearr_33710_35354 = state_33702__$1;
(statearr_33710_35354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (3))){
var inst_33700 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33702__$1,inst_33700);
} else {
if((state_val_33703 === (2))){
var state_33702__$1 = state_33702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33702__$1,(4),ch);
} else {
if((state_val_33703 === (11))){
var inst_33692 = (state_33702[(2)]);
var state_33702__$1 = state_33702;
var statearr_33711_35357 = state_33702__$1;
(statearr_33711_35357[(2)] = inst_33692);

(statearr_33711_35357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (9))){
var state_33702__$1 = state_33702;
var statearr_33712_35361 = state_33702__$1;
(statearr_33712_35361[(2)] = null);

(statearr_33712_35361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (5))){
var inst_33687 = cljs.core.async.close_BANG_(out);
var state_33702__$1 = state_33702;
var statearr_33713_35362 = state_33702__$1;
(statearr_33713_35362[(2)] = inst_33687);

(statearr_33713_35362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (10))){
var inst_33695 = (state_33702[(2)]);
var state_33702__$1 = (function (){var statearr_33714 = state_33702;
(statearr_33714[(8)] = inst_33695);

return statearr_33714;
})();
var statearr_33715_35363 = state_33702__$1;
(statearr_33715_35363[(2)] = null);

(statearr_33715_35363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33703 === (8))){
var inst_33684 = (state_33702[(7)]);
var state_33702__$1 = state_33702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33702__$1,(11),out,inst_33684);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31629__auto__ = null;
var cljs$core$async$state_machine__31629__auto____0 = (function (){
var statearr_33730 = [null,null,null,null,null,null,null,null,null];
(statearr_33730[(0)] = cljs$core$async$state_machine__31629__auto__);

(statearr_33730[(1)] = (1));

return statearr_33730;
});
var cljs$core$async$state_machine__31629__auto____1 = (function (state_33702){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_33702);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e33731){var ex__31632__auto__ = e33731;
var statearr_33738_35366 = state_33702;
(statearr_33738_35366[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_33702[(4)]))){
var statearr_33739_35367 = state_33702;
(statearr_33739_35367[(1)] = cljs.core.first((state_33702[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35368 = state_33702;
state_33702 = G__35368;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$state_machine__31629__auto__ = function(state_33702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31629__auto____1.call(this,state_33702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31629__auto____0;
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31629__auto____1;
return cljs$core$async$state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_33740 = f__31801__auto__();
(statearr_33740[(6)] = c__31800__auto___35342);

return statearr_33740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33756 = arguments.length;
switch (G__33756) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31800__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_33827){
var state_val_33828 = (state_33827[(1)]);
if((state_val_33828 === (7))){
var inst_33823 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33829_35374 = state_33827__$1;
(statearr_33829_35374[(2)] = inst_33823);

(statearr_33829_35374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (20))){
var inst_33793 = (state_33827[(7)]);
var inst_33804 = (state_33827[(2)]);
var inst_33805 = cljs.core.next(inst_33793);
var inst_33778 = inst_33805;
var inst_33779 = null;
var inst_33780 = (0);
var inst_33781 = (0);
var state_33827__$1 = (function (){var statearr_33833 = state_33827;
(statearr_33833[(8)] = inst_33779);

(statearr_33833[(9)] = inst_33780);

(statearr_33833[(10)] = inst_33778);

(statearr_33833[(11)] = inst_33781);

(statearr_33833[(12)] = inst_33804);

return statearr_33833;
})();
var statearr_33834_35386 = state_33827__$1;
(statearr_33834_35386[(2)] = null);

(statearr_33834_35386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (1))){
var state_33827__$1 = state_33827;
var statearr_33835_35391 = state_33827__$1;
(statearr_33835_35391[(2)] = null);

(statearr_33835_35391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (4))){
var inst_33767 = (state_33827[(13)]);
var inst_33767__$1 = (state_33827[(2)]);
var inst_33768 = (inst_33767__$1 == null);
var state_33827__$1 = (function (){var statearr_33836 = state_33827;
(statearr_33836[(13)] = inst_33767__$1);

return statearr_33836;
})();
if(cljs.core.truth_(inst_33768)){
var statearr_33837_35393 = state_33827__$1;
(statearr_33837_35393[(1)] = (5));

} else {
var statearr_33838_35394 = state_33827__$1;
(statearr_33838_35394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (15))){
var state_33827__$1 = state_33827;
var statearr_33842_35395 = state_33827__$1;
(statearr_33842_35395[(2)] = null);

(statearr_33842_35395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (21))){
var state_33827__$1 = state_33827;
var statearr_33843_35396 = state_33827__$1;
(statearr_33843_35396[(2)] = null);

(statearr_33843_35396[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (13))){
var inst_33779 = (state_33827[(8)]);
var inst_33780 = (state_33827[(9)]);
var inst_33778 = (state_33827[(10)]);
var inst_33781 = (state_33827[(11)]);
var inst_33788 = (state_33827[(2)]);
var inst_33790 = (inst_33781 + (1));
var tmp33839 = inst_33779;
var tmp33840 = inst_33780;
var tmp33841 = inst_33778;
var inst_33778__$1 = tmp33841;
var inst_33779__$1 = tmp33839;
var inst_33780__$1 = tmp33840;
var inst_33781__$1 = inst_33790;
var state_33827__$1 = (function (){var statearr_33844 = state_33827;
(statearr_33844[(8)] = inst_33779__$1);

(statearr_33844[(9)] = inst_33780__$1);

(statearr_33844[(10)] = inst_33778__$1);

(statearr_33844[(11)] = inst_33781__$1);

(statearr_33844[(14)] = inst_33788);

return statearr_33844;
})();
var statearr_33845_35401 = state_33827__$1;
(statearr_33845_35401[(2)] = null);

(statearr_33845_35401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (22))){
var state_33827__$1 = state_33827;
var statearr_33846_35406 = state_33827__$1;
(statearr_33846_35406[(2)] = null);

(statearr_33846_35406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (6))){
var inst_33767 = (state_33827[(13)]);
var inst_33776 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33767) : f.call(null,inst_33767));
var inst_33777 = cljs.core.seq(inst_33776);
var inst_33778 = inst_33777;
var inst_33779 = null;
var inst_33780 = (0);
var inst_33781 = (0);
var state_33827__$1 = (function (){var statearr_33847 = state_33827;
(statearr_33847[(8)] = inst_33779);

(statearr_33847[(9)] = inst_33780);

(statearr_33847[(10)] = inst_33778);

(statearr_33847[(11)] = inst_33781);

return statearr_33847;
})();
var statearr_33848_35415 = state_33827__$1;
(statearr_33848_35415[(2)] = null);

(statearr_33848_35415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (17))){
var inst_33793 = (state_33827[(7)]);
var inst_33797 = cljs.core.chunk_first(inst_33793);
var inst_33798 = cljs.core.chunk_rest(inst_33793);
var inst_33799 = cljs.core.count(inst_33797);
var inst_33778 = inst_33798;
var inst_33779 = inst_33797;
var inst_33780 = inst_33799;
var inst_33781 = (0);
var state_33827__$1 = (function (){var statearr_33849 = state_33827;
(statearr_33849[(8)] = inst_33779);

(statearr_33849[(9)] = inst_33780);

(statearr_33849[(10)] = inst_33778);

(statearr_33849[(11)] = inst_33781);

return statearr_33849;
})();
var statearr_33850_35420 = state_33827__$1;
(statearr_33850_35420[(2)] = null);

(statearr_33850_35420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (3))){
var inst_33825 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33827__$1,inst_33825);
} else {
if((state_val_33828 === (12))){
var inst_33813 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33851_35428 = state_33827__$1;
(statearr_33851_35428[(2)] = inst_33813);

(statearr_33851_35428[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (2))){
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33827__$1,(4),in$);
} else {
if((state_val_33828 === (23))){
var inst_33821 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33852_35434 = state_33827__$1;
(statearr_33852_35434[(2)] = inst_33821);

(statearr_33852_35434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (19))){
var inst_33808 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33853_35437 = state_33827__$1;
(statearr_33853_35437[(2)] = inst_33808);

(statearr_33853_35437[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (11))){
var inst_33793 = (state_33827[(7)]);
var inst_33778 = (state_33827[(10)]);
var inst_33793__$1 = cljs.core.seq(inst_33778);
var state_33827__$1 = (function (){var statearr_33854 = state_33827;
(statearr_33854[(7)] = inst_33793__$1);

return statearr_33854;
})();
if(inst_33793__$1){
var statearr_33855_35439 = state_33827__$1;
(statearr_33855_35439[(1)] = (14));

} else {
var statearr_33856_35440 = state_33827__$1;
(statearr_33856_35440[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (9))){
var inst_33815 = (state_33827[(2)]);
var inst_33816 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33827__$1 = (function (){var statearr_33857 = state_33827;
(statearr_33857[(15)] = inst_33815);

return statearr_33857;
})();
if(cljs.core.truth_(inst_33816)){
var statearr_33858_35441 = state_33827__$1;
(statearr_33858_35441[(1)] = (21));

} else {
var statearr_33859_35442 = state_33827__$1;
(statearr_33859_35442[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (5))){
var inst_33770 = cljs.core.async.close_BANG_(out);
var state_33827__$1 = state_33827;
var statearr_33860_35443 = state_33827__$1;
(statearr_33860_35443[(2)] = inst_33770);

(statearr_33860_35443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (14))){
var inst_33793 = (state_33827[(7)]);
var inst_33795 = cljs.core.chunked_seq_QMARK_(inst_33793);
var state_33827__$1 = state_33827;
if(inst_33795){
var statearr_33861_35445 = state_33827__$1;
(statearr_33861_35445[(1)] = (17));

} else {
var statearr_33862_35446 = state_33827__$1;
(statearr_33862_35446[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (16))){
var inst_33811 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33863_35447 = state_33827__$1;
(statearr_33863_35447[(2)] = inst_33811);

(statearr_33863_35447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (10))){
var inst_33779 = (state_33827[(8)]);
var inst_33781 = (state_33827[(11)]);
var inst_33786 = cljs.core._nth(inst_33779,inst_33781);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33827__$1,(13),out,inst_33786);
} else {
if((state_val_33828 === (18))){
var inst_33793 = (state_33827[(7)]);
var inst_33802 = cljs.core.first(inst_33793);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33827__$1,(20),out,inst_33802);
} else {
if((state_val_33828 === (8))){
var inst_33780 = (state_33827[(9)]);
var inst_33781 = (state_33827[(11)]);
var inst_33783 = (inst_33781 < inst_33780);
var inst_33784 = inst_33783;
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33784)){
var statearr_33864_35454 = state_33827__$1;
(statearr_33864_35454[(1)] = (10));

} else {
var statearr_33865_35455 = state_33827__$1;
(statearr_33865_35455[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31629__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31629__auto____0 = (function (){
var statearr_33866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33866[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31629__auto__);

(statearr_33866[(1)] = (1));

return statearr_33866;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31629__auto____1 = (function (state_33827){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_33827);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e33867){var ex__31632__auto__ = e33867;
var statearr_33868_35463 = state_33827;
(statearr_33868_35463[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_33827[(4)]))){
var statearr_33869_35464 = state_33827;
(statearr_33869_35464[(1)] = cljs.core.first((state_33827[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35465 = state_33827;
state_33827 = G__35465;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31629__auto__ = function(state_33827){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31629__auto____1.call(this,state_33827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31629__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31629__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_33870 = f__31801__auto__();
(statearr_33870[(6)] = c__31800__auto__);

return statearr_33870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));

return c__31800__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33872 = arguments.length;
switch (G__33872) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33885 = arguments.length;
switch (G__33885) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33887 = arguments.length;
switch (G__33887) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31800__auto___35476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_33911){
var state_val_33912 = (state_33911[(1)]);
if((state_val_33912 === (7))){
var inst_33906 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33913_35482 = state_33911__$1;
(statearr_33913_35482[(2)] = inst_33906);

(statearr_33913_35482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (1))){
var inst_33888 = null;
var state_33911__$1 = (function (){var statearr_33914 = state_33911;
(statearr_33914[(7)] = inst_33888);

return statearr_33914;
})();
var statearr_33915_35486 = state_33911__$1;
(statearr_33915_35486[(2)] = null);

(statearr_33915_35486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (4))){
var inst_33891 = (state_33911[(8)]);
var inst_33891__$1 = (state_33911[(2)]);
var inst_33892 = (inst_33891__$1 == null);
var inst_33893 = cljs.core.not(inst_33892);
var state_33911__$1 = (function (){var statearr_33917 = state_33911;
(statearr_33917[(8)] = inst_33891__$1);

return statearr_33917;
})();
if(inst_33893){
var statearr_33918_35487 = state_33911__$1;
(statearr_33918_35487[(1)] = (5));

} else {
var statearr_33919_35489 = state_33911__$1;
(statearr_33919_35489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (6))){
var state_33911__$1 = state_33911;
var statearr_33921_35491 = state_33911__$1;
(statearr_33921_35491[(2)] = null);

(statearr_33921_35491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (3))){
var inst_33908 = (state_33911[(2)]);
var inst_33909 = cljs.core.async.close_BANG_(out);
var state_33911__$1 = (function (){var statearr_33922 = state_33911;
(statearr_33922[(9)] = inst_33908);

return statearr_33922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33911__$1,inst_33909);
} else {
if((state_val_33912 === (2))){
var state_33911__$1 = state_33911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33911__$1,(4),ch);
} else {
if((state_val_33912 === (11))){
var inst_33891 = (state_33911[(8)]);
var inst_33900 = (state_33911[(2)]);
var inst_33888 = inst_33891;
var state_33911__$1 = (function (){var statearr_33923 = state_33911;
(statearr_33923[(7)] = inst_33888);

(statearr_33923[(10)] = inst_33900);

return statearr_33923;
})();
var statearr_33926_35495 = state_33911__$1;
(statearr_33926_35495[(2)] = null);

(statearr_33926_35495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (9))){
var inst_33891 = (state_33911[(8)]);
var state_33911__$1 = state_33911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33911__$1,(11),out,inst_33891);
} else {
if((state_val_33912 === (5))){
var inst_33888 = (state_33911[(7)]);
var inst_33891 = (state_33911[(8)]);
var inst_33895 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33891,inst_33888);
var state_33911__$1 = state_33911;
if(inst_33895){
var statearr_33928_35497 = state_33911__$1;
(statearr_33928_35497[(1)] = (8));

} else {
var statearr_33929_35498 = state_33911__$1;
(statearr_33929_35498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (10))){
var inst_33903 = (state_33911[(2)]);
var state_33911__$1 = state_33911;
var statearr_33931_35499 = state_33911__$1;
(statearr_33931_35499[(2)] = inst_33903);

(statearr_33931_35499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33912 === (8))){
var inst_33888 = (state_33911[(7)]);
var tmp33927 = inst_33888;
var inst_33888__$1 = tmp33927;
var state_33911__$1 = (function (){var statearr_33933 = state_33911;
(statearr_33933[(7)] = inst_33888__$1);

return statearr_33933;
})();
var statearr_33934_35500 = state_33911__$1;
(statearr_33934_35500[(2)] = null);

(statearr_33934_35500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31629__auto__ = null;
var cljs$core$async$state_machine__31629__auto____0 = (function (){
var statearr_33935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33935[(0)] = cljs$core$async$state_machine__31629__auto__);

(statearr_33935[(1)] = (1));

return statearr_33935;
});
var cljs$core$async$state_machine__31629__auto____1 = (function (state_33911){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_33911);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e33936){var ex__31632__auto__ = e33936;
var statearr_33937_35504 = state_33911;
(statearr_33937_35504[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_33911[(4)]))){
var statearr_33940_35505 = state_33911;
(statearr_33940_35505[(1)] = cljs.core.first((state_33911[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35510 = state_33911;
state_33911 = G__35510;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$state_machine__31629__auto__ = function(state_33911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31629__auto____1.call(this,state_33911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31629__auto____0;
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31629__auto____1;
return cljs$core$async$state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_33941 = f__31801__auto__();
(statearr_33941[(6)] = c__31800__auto___35476);

return statearr_33941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33943 = arguments.length;
switch (G__33943) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31800__auto___35512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_33981){
var state_val_33982 = (state_33981[(1)]);
if((state_val_33982 === (7))){
var inst_33977 = (state_33981[(2)]);
var state_33981__$1 = state_33981;
var statearr_33983_35513 = state_33981__$1;
(statearr_33983_35513[(2)] = inst_33977);

(statearr_33983_35513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33982 === (1))){
var inst_33944 = (new Array(n));
var inst_33945 = inst_33944;
var inst_33946 = (0);
var state_33981__$1 = (function (){var statearr_33984 = state_33981;
(statearr_33984[(7)] = inst_33946);

(statearr_33984[(8)] = inst_33945);

return statearr_33984;
})();
var statearr_33985_35514 = state_33981__$1;
(statearr_33985_35514[(2)] = null);

(statearr_33985_35514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33982 === (4))){
var inst_33949 = (state_33981[(9)]);
var inst_33949__$1 = (state_33981[(2)]);
var inst_33950 = (inst_33949__$1 == null);
var inst_33951 = cljs.core.not(inst_33950);
var state_33981__$1 = (function (){var statearr_33986 = state_33981;
(statearr_33986[(9)] = inst_33949__$1);

return statearr_33986;
})();
if(inst_33951){
var statearr_33987_35519 = state_33981__$1;
(statearr_33987_35519[(1)] = (5));

} else {
var statearr_33988_35520 = state_33981__$1;
(statearr_33988_35520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33982 === (15))){
var inst_33971 = (state_33981[(2)]);
var state_33981__$1 = state_33981;
var statearr_33992_35521 = state_33981__$1;
(statearr_33992_35521[(2)] = inst_33971);

(statearr_33992_35521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33982 === (13))){
var state_33981__$1 = state_33981;
var statearr_33993_35522 = state_33981__$1;
(statearr_33993_35522[(2)] = null);

(statearr_33993_35522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33982 === (6))){
var inst_33946 = (state_33981[(7)]);
var inst_33967 = (inst_33946 > (0));
var state_33981__$1 = state_33981;
if(cljs.core.truth_(inst_33967)){
var statearr_33994_35523 = state_33981__$1;
(statearr_33994_35523[(1)] = (12));

} else {
var statearr_33995_35524 = state_33981__$1;
(statearr_33995_35524[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33982 === (3))){
var inst_33979 = (state_33981[(2)]);
var state_33981__$1 = state_33981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33981__$1,inst_33979);
} else {
if((state_val_33982 === (12))){
var inst_33945 = (state_33981[(8)]);
var inst_33969 = cljs.core.vec(inst_33945);
var state_33981__$1 = state_33981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33981__$1,(15),out,inst_33969);
} else {
if((state_val_33982 === (2))){
var state_33981__$1 = state_33981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33981__$1,(4),ch);
} else {
if((state_val_33982 === (11))){
var inst_33961 = (state_33981[(2)]);
var inst_33962 = (new Array(n));
var inst_33945 = inst_33962;
var inst_33946 = (0);
var state_33981__$1 = (function (){var statearr_33996 = state_33981;
(statearr_33996[(10)] = inst_33961);

(statearr_33996[(7)] = inst_33946);

(statearr_33996[(8)] = inst_33945);

return statearr_33996;
})();
var statearr_33997_35528 = state_33981__$1;
(statearr_33997_35528[(2)] = null);

(statearr_33997_35528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33982 === (9))){
var inst_33945 = (state_33981[(8)]);
var inst_33959 = cljs.core.vec(inst_33945);
var state_33981__$1 = state_33981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33981__$1,(11),out,inst_33959);
} else {
if((state_val_33982 === (5))){
var inst_33946 = (state_33981[(7)]);
var inst_33954 = (state_33981[(11)]);
var inst_33949 = (state_33981[(9)]);
var inst_33945 = (state_33981[(8)]);
var inst_33953 = (inst_33945[inst_33946] = inst_33949);
var inst_33954__$1 = (inst_33946 + (1));
var inst_33955 = (inst_33954__$1 < n);
var state_33981__$1 = (function (){var statearr_34005 = state_33981;
(statearr_34005[(11)] = inst_33954__$1);

(statearr_34005[(12)] = inst_33953);

return statearr_34005;
})();
if(cljs.core.truth_(inst_33955)){
var statearr_34009_35543 = state_33981__$1;
(statearr_34009_35543[(1)] = (8));

} else {
var statearr_34010_35544 = state_33981__$1;
(statearr_34010_35544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33982 === (14))){
var inst_33974 = (state_33981[(2)]);
var inst_33975 = cljs.core.async.close_BANG_(out);
var state_33981__$1 = (function (){var statearr_34015 = state_33981;
(statearr_34015[(13)] = inst_33974);

return statearr_34015;
})();
var statearr_34016_35547 = state_33981__$1;
(statearr_34016_35547[(2)] = inst_33975);

(statearr_34016_35547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33982 === (10))){
var inst_33965 = (state_33981[(2)]);
var state_33981__$1 = state_33981;
var statearr_34017_35548 = state_33981__$1;
(statearr_34017_35548[(2)] = inst_33965);

(statearr_34017_35548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33982 === (8))){
var inst_33954 = (state_33981[(11)]);
var inst_33945 = (state_33981[(8)]);
var tmp34011 = inst_33945;
var inst_33945__$1 = tmp34011;
var inst_33946 = inst_33954;
var state_33981__$1 = (function (){var statearr_34018 = state_33981;
(statearr_34018[(7)] = inst_33946);

(statearr_34018[(8)] = inst_33945__$1);

return statearr_34018;
})();
var statearr_34019_35557 = state_33981__$1;
(statearr_34019_35557[(2)] = null);

(statearr_34019_35557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31629__auto__ = null;
var cljs$core$async$state_machine__31629__auto____0 = (function (){
var statearr_34027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34027[(0)] = cljs$core$async$state_machine__31629__auto__);

(statearr_34027[(1)] = (1));

return statearr_34027;
});
var cljs$core$async$state_machine__31629__auto____1 = (function (state_33981){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_33981);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e34028){var ex__31632__auto__ = e34028;
var statearr_34032_35566 = state_33981;
(statearr_34032_35566[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_33981[(4)]))){
var statearr_34033_35571 = state_33981;
(statearr_34033_35571[(1)] = cljs.core.first((state_33981[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35572 = state_33981;
state_33981 = G__35572;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$state_machine__31629__auto__ = function(state_33981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31629__auto____1.call(this,state_33981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31629__auto____0;
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31629__auto____1;
return cljs$core$async$state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_34034 = f__31801__auto__();
(statearr_34034[(6)] = c__31800__auto___35512);

return statearr_34034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34049 = arguments.length;
switch (G__34049) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31800__auto___35582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31801__auto__ = (function (){var switch__31628__auto__ = (function (state_34097){
var state_val_34098 = (state_34097[(1)]);
if((state_val_34098 === (7))){
var inst_34093 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34099_35589 = state_34097__$1;
(statearr_34099_35589[(2)] = inst_34093);

(statearr_34099_35589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (1))){
var inst_34056 = [];
var inst_34057 = inst_34056;
var inst_34058 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34097__$1 = (function (){var statearr_34100 = state_34097;
(statearr_34100[(7)] = inst_34057);

(statearr_34100[(8)] = inst_34058);

return statearr_34100;
})();
var statearr_34101_35591 = state_34097__$1;
(statearr_34101_35591[(2)] = null);

(statearr_34101_35591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (4))){
var inst_34061 = (state_34097[(9)]);
var inst_34061__$1 = (state_34097[(2)]);
var inst_34062 = (inst_34061__$1 == null);
var inst_34063 = cljs.core.not(inst_34062);
var state_34097__$1 = (function (){var statearr_34102 = state_34097;
(statearr_34102[(9)] = inst_34061__$1);

return statearr_34102;
})();
if(inst_34063){
var statearr_34103_35603 = state_34097__$1;
(statearr_34103_35603[(1)] = (5));

} else {
var statearr_34104_35604 = state_34097__$1;
(statearr_34104_35604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (15))){
var inst_34087 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34105_35610 = state_34097__$1;
(statearr_34105_35610[(2)] = inst_34087);

(statearr_34105_35610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (13))){
var state_34097__$1 = state_34097;
var statearr_34106_35611 = state_34097__$1;
(statearr_34106_35611[(2)] = null);

(statearr_34106_35611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (6))){
var inst_34057 = (state_34097[(7)]);
var inst_34082 = inst_34057.length;
var inst_34083 = (inst_34082 > (0));
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34083)){
var statearr_34107_35616 = state_34097__$1;
(statearr_34107_35616[(1)] = (12));

} else {
var statearr_34108_35617 = state_34097__$1;
(statearr_34108_35617[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (3))){
var inst_34095 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34097__$1,inst_34095);
} else {
if((state_val_34098 === (12))){
var inst_34057 = (state_34097[(7)]);
var inst_34085 = cljs.core.vec(inst_34057);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34097__$1,(15),out,inst_34085);
} else {
if((state_val_34098 === (2))){
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34097__$1,(4),ch);
} else {
if((state_val_34098 === (11))){
var inst_34061 = (state_34097[(9)]);
var inst_34065 = (state_34097[(10)]);
var inst_34075 = (state_34097[(2)]);
var inst_34076 = [];
var inst_34077 = inst_34076.push(inst_34061);
var inst_34057 = inst_34076;
var inst_34058 = inst_34065;
var state_34097__$1 = (function (){var statearr_34109 = state_34097;
(statearr_34109[(11)] = inst_34077);

(statearr_34109[(12)] = inst_34075);

(statearr_34109[(7)] = inst_34057);

(statearr_34109[(8)] = inst_34058);

return statearr_34109;
})();
var statearr_34110_35636 = state_34097__$1;
(statearr_34110_35636[(2)] = null);

(statearr_34110_35636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (9))){
var inst_34057 = (state_34097[(7)]);
var inst_34073 = cljs.core.vec(inst_34057);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34097__$1,(11),out,inst_34073);
} else {
if((state_val_34098 === (5))){
var inst_34061 = (state_34097[(9)]);
var inst_34058 = (state_34097[(8)]);
var inst_34065 = (state_34097[(10)]);
var inst_34065__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34061) : f.call(null,inst_34061));
var inst_34066 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34065__$1,inst_34058);
var inst_34067 = cljs.core.keyword_identical_QMARK_(inst_34058,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34068 = ((inst_34066) || (inst_34067));
var state_34097__$1 = (function (){var statearr_34111 = state_34097;
(statearr_34111[(10)] = inst_34065__$1);

return statearr_34111;
})();
if(cljs.core.truth_(inst_34068)){
var statearr_34112_35645 = state_34097__$1;
(statearr_34112_35645[(1)] = (8));

} else {
var statearr_34113_35647 = state_34097__$1;
(statearr_34113_35647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (14))){
var inst_34090 = (state_34097[(2)]);
var inst_34091 = cljs.core.async.close_BANG_(out);
var state_34097__$1 = (function (){var statearr_34115 = state_34097;
(statearr_34115[(13)] = inst_34090);

return statearr_34115;
})();
var statearr_34116_35653 = state_34097__$1;
(statearr_34116_35653[(2)] = inst_34091);

(statearr_34116_35653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (10))){
var inst_34080 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34117_35655 = state_34097__$1;
(statearr_34117_35655[(2)] = inst_34080);

(statearr_34117_35655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (8))){
var inst_34061 = (state_34097[(9)]);
var inst_34057 = (state_34097[(7)]);
var inst_34065 = (state_34097[(10)]);
var inst_34070 = inst_34057.push(inst_34061);
var tmp34114 = inst_34057;
var inst_34057__$1 = tmp34114;
var inst_34058 = inst_34065;
var state_34097__$1 = (function (){var statearr_34118 = state_34097;
(statearr_34118[(7)] = inst_34057__$1);

(statearr_34118[(14)] = inst_34070);

(statearr_34118[(8)] = inst_34058);

return statearr_34118;
})();
var statearr_34119_35672 = state_34097__$1;
(statearr_34119_35672[(2)] = null);

(statearr_34119_35672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31629__auto__ = null;
var cljs$core$async$state_machine__31629__auto____0 = (function (){
var statearr_34122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34122[(0)] = cljs$core$async$state_machine__31629__auto__);

(statearr_34122[(1)] = (1));

return statearr_34122;
});
var cljs$core$async$state_machine__31629__auto____1 = (function (state_34097){
while(true){
var ret_value__31630__auto__ = (function (){try{while(true){
var result__31631__auto__ = switch__31628__auto__(state_34097);
if(cljs.core.keyword_identical_QMARK_(result__31631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31631__auto__;
}
break;
}
}catch (e34123){var ex__31632__auto__ = e34123;
var statearr_34124_35717 = state_34097;
(statearr_34124_35717[(2)] = ex__31632__auto__);


if(cljs.core.seq((state_34097[(4)]))){
var statearr_34125_35721 = state_34097;
(statearr_34125_35721[(1)] = cljs.core.first((state_34097[(4)])));

} else {
throw ex__31632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35722 = state_34097;
state_34097 = G__35722;
continue;
} else {
return ret_value__31630__auto__;
}
break;
}
});
cljs$core$async$state_machine__31629__auto__ = function(state_34097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31629__auto____1.call(this,state_34097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31629__auto____0;
cljs$core$async$state_machine__31629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31629__auto____1;
return cljs$core$async$state_machine__31629__auto__;
})()
})();
var state__31802__auto__ = (function (){var statearr_34126 = f__31801__auto__();
(statearr_34126[(6)] = c__31800__auto___35582);

return statearr_34126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31802__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
