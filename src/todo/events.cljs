(ns todo.events
  (:require
    [re-frame.core :as re-frame]
    [todo.db :as db]
    [cljs.reader]
    ))

;; interceptors
(def ls-key "todo-app")
(def write-to-ls
  (re-frame/after (fn [db] (.setItem js/localStorage ls-key (str db)))))
(def interceptors [write-to-ls])

(re-frame/reg-cofx
  :local-store
  (fn [cofx _]
      (assoc cofx
             :local-store
             (cljs.reader/read-string (.getItem js/localStorage ls-key)))))

;; db initializer
(re-frame/reg-event-fx
  ::initialize-db
  [(re-frame/inject-cofx :local-store)]
  (fn [{:keys [db local-store]} _]
      {:db local-store}))

(re-frame/reg-event-fx
  ::navigate
  (fn [_ [_ handler]]
      {:navigate handler}))

(re-frame/reg-event-fx
  ::set-active-panel
  [write-to-ls]
  (fn [{:keys [db]} [_ active-panel]]
      {:db (assoc db :active-panel active-panel)}))

;; keyword solution that handles spaces
(defn ->keyword [str]
      (keyword (clojure.string/replace str #" " "-")))

; login

(re-frame/reg-event-db
  :set-active-user
  [write-to-ls]
  (fn [db [_ username]]
      (assoc db :active-user username)))

(re-frame/reg-event-db
  :submit-login
  [write-to-ls]
  (fn [db [_ username password]]
      (let [user (get (:users db) (->keyword username))]
           (if user
             (if (= password (:password user))
               (do (re-frame/dispatch [:set-active-user username])
                   (re-frame/dispatch [::navigate :home])
                   db)
               (do (js/alert "Password is incorrect") db))
             (do (js/alert "User does not exist.") db)))
      ))

;; creating a new account
(defn new-account [username password]
      {:username username :password password :todo-list {}})

(re-frame/reg-event-db
  :create-account
  [write-to-ls]
  (fn [db [_ username password pass-confirm]]
      (if (= password pass-confirm)
        (if (get (:users db) (->keyword username))
          (do (js/alert "Username already exists.") db)
          (do (js/alert "Account sucessfully created!")
              (re-frame/dispatch [:set-active-user username])
              (re-frame/dispatch [::navigate :home])
              (assoc-in db [:users (->keyword username)] (new-account username password))))
        (do (js/alert "Passwords much match.") db))))

(re-frame/reg-event-db
  :status
  (fn [db _]
      (js/alert (str "this is the current db: " db))
      db))

;; TODO functions

(re-frame/reg-event-db
  :add-todo
  [write-to-ls]
  (fn [db [_ user task]]
      (assoc-in db [:users (->keyword user) :todo-list (->keyword task)] {:title task :completed false})))

(re-frame/reg-event-db
  :remove-todo
  [write-to-ls]
  (fn [db [_ user task]]
      (update-in db [:users (->keyword user) :todo-list] dissoc (->keyword task))))

(re-frame/reg-event-db
  :toggle-complete
  [write-to-ls]
  (fn [db [_ user task]]
      (update-in db [:users (->keyword user) :todo-list (->keyword task) :completed] not)))

(re-frame/reg-event-db
  :remove-all
  [write-to-ls]
  (fn [db [_ user]]
      (assoc-in db [:users (->keyword user) :todo-list] {})))

(re-frame/reg-event-db
  :toggle-all
  [write-to-ls]
  (fn [db [_ user status]]
      (update-in db [:users (->keyword user) :todo-list]
                 #(reduce-kv (fn [m k v]
                                 (assoc m k (assoc v :completed status)))
                             {}
                             %))))