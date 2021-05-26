(ns todo.events
  (:require
    [re-frame.core :as re-frame]
    [todo.db :as db]
    [todo.events :as events]
    [cljs.reader]
    ))

;; interceptors

(def ls-key "todo-users")

(re-frame/reg-cofx
  :local-store
  (fn [cofx ls-key]
      (assoc cofx
             :local-store
             (cljs.reader/read-string (.getItem js/localStorage ls-key)))))

(re-frame/reg-event-fx
  ::initialize-db
  [(inject-cofx :local-store ls-key)]
  (fn [{:keys [db local-store]} _]
      {:db (assoc default-db :users local-store)}))

(re-frame/reg-event-fx
  ::navigate
  (fn [_ [_ handler]]
      {:navigate handler}))

(re-frame/reg-event-fx
  ::set-active-panel
  (fn [{:keys [db]} [_ active-panel]]
      {:db (assoc db :active-panel active-panel)}))

; login

(re-frame/reg-event-db
  :submit-login
  (fn [db [_ username password]]
      (let [user (get (:users db) (keyword username))]
           (if user
             (js/alert (str "user found: " (:password user)))
             (js/alert "user not found")))))

;; creating a new account
(defn new-account [username password]
      {:username username :password password :todo-list {}})

(re-frame/reg-event-fx
  :create-account
  [(re-frame/inject-cofx :local-store ls-key)]
  (fn [cofx [_ username password pass-confirm]]
      (let [users (:local-store cofx)]
           (if (= password pass-confirm)
             (if (get (:local-store cofx) (keyword username))
               (js/alert "username already exists!")
               (do (.setItem js/localStorage ls-key
                         (str (assoc users
                                     (keyword username)
                                     (new-account username password))))
                   (dispatch [::events/navigate :home])))
             (js/alert "passwords much match!")))))
