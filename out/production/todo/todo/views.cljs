(ns todo.views
  (:require
    [reagent.core :as r]
    [re-frame.core :refer [subscribe dispatch]]
    [todo.events :as events]
    [todo.routes :as routes]
    [todo.subs :as subs]
    ))


;; home

(defn home-panel []
      (let [name (subscribe [::subs/name])]
           [:div
            [:h1
             (str "Hello from " @name ". This is home.")]

            [:div
             [:a {:on-click #(dispatch [::events/navigate :login])}
              "go to Login Page"]]
            ]))

(defmethod routes/panels :home-panel [] [home-panel])

;; login

(defn login-panel []
      (let [username (r/atom "")
            password (r/atom "")]
           [:div
            [:h1 "Login"]
            [:input {:type        "text"
                     :placeholder "Username"
                     :on-change   #(reset! username (-> % .-target .-value))}]
            [:br]
            [:input {:type        "password"
                     :placeholder "Password"
                     :on-change   #(reset! password (-> % .-target .-value))}]
            [:br]
            [:input {:type     "button"
                     :value    "Login"
                     :on-click #(dispatch [:submit-login @username @password])
                     }]
            [:div
             "Don't have an account? "
             [:input {:type     "button"
                      :value    "Sign up here"
                      :on-click #(dispatch [::events/navigate :signup])}]]]))

(defmethod routes/panels :login-panel [] [login-panel])

;; signup

(defn signup-panel []
      (let [username (r/atom "")
            password (r/atom "")
            pass-confirm (r/atom "")]
           [:div
            [:h1 "Make an account"]
            [:input {:type        "text"
                     :placeholder "Username"
                     :on-change   #(reset! username (-> % .-target .-value))}]
            [:br]
            [:input {:type        "password"
                     :placeholder "Password"
                     :on-change   #(reset! password (-> % .-target .-value))}]
            [:br]
            [:input {:type        "password"
                     :placeholder "Confirm Password"
                     :on-change   #(reset! pass-confirm (-> % .-target .-value))}]
            [:br]
            [:input {:type     "button"
                     :value    "Create account"
                     :on-click #(dispatch [:create-account @username @password @pass-confirm])
                     }]
            [:div
             "Already have an account? "
             [:input {:type     "button"
                      :value    "Login here"
                      :on-click #(dispatch [::events/navigate :login])}]]]))

(defmethod routes/panels :signup-panel [] [signup-panel])

;; main

(defn main-panel []
      (let [active-panel (subscribe [::subs/active-panel])]
           (routes/panels @active-panel)))
