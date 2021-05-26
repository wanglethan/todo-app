(ns todo.subs
  (:require
   [re-frame.core :as re-frame]))

(defn ->keyword [str]
      (keyword (clojure.string/replace str #" " "-")))

(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

(re-frame/reg-sub
  :username
  (fn [db _]
      (:active-user db)))

(re-frame/reg-sub
  :get-todos
  (fn [db _]
      (vals (:todo-list ((->keyword (:active-user db)) (:users db))))))