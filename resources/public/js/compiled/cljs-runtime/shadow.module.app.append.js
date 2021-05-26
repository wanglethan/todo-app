
shadow.cljs.devtools.client.env.module_loaded('app');

try { todo.core.init(); } catch (e) { console.error("An error occurred when calling (todo.core/init)"); throw(e); }