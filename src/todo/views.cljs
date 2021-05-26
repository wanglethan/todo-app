(ns todo.views
  (:require
    [reagent.core :as r]
    [re-frame.core :refer [subscribe dispatch]]
    [todo.events :as events]
    [todo.routes :as routes]
    [todo.subs :as subs]
    ))

(defn todo-prompt [user]
      (let [new-todo (r/atom "")
            save #(when (not= @new-todo "")
                        (dispatch [:add-todo user @new-todo]))]
           [:div
            [:input {:type        "text"
                     ;; :value       @new-todo
                     :placeholder "What needs to be done?"
                     :on-change   #(reset! new-todo (-> % .-target .-value))
                     :on-key-down #(case (.-which %)
                                         13 (save)
                                         nil)}]
            ]))

(defn todo-item [user task]
      (let [color (if (:completed task)
                    "#d6d5d2"
                    "black")]
           [:li {:style {:color color}}
            [:input {:type     "button"
                     :value    "Remove"
                     :on-click #(dispatch [:remove-todo user (:title task)])}]
            [:input {:type     "button"
                     :value    "Toggle"
                     :on-click #(dispatch [:toggle-complete user (:title task)])}]
            "  "
            (:title task)]))

(defn footer-buttons [user]
      [:div
       [:input {:type     "button"
                :value    "Remove All"
                :on-click #(dispatch [:remove-all user])}]
       [:input {:type     "button"
                :value    "Mark all as Complete"
                :on-click #(dispatch [:toggle-all user true])}]
       [:input {:type     "button"
                :value    "Mark all as Incomplete"
                :on-click #(dispatch [:toggle-all user false])}]])

(defn actual-list [user]
      (let [todos @(subscribe [:get-todos])]
           [:div
            [:ul
             (for [task todos]
                  ^{:key (:title task)} [todo-item user task])]
            (when (not-empty todos)
                  [footer-buttons user])]))

(defn home-panel []
      (let [user @(subscribe [:username])]
           [:div
            [:h1
             (str "Hello " user ". This is your todo list")]
            [todo-prompt user]
            [actual-list user]
            [:br]
            [:div
             [:input {:type     "button"
                      :value    "Sign out"
                      :on-click #(dispatch [::events/navigate :login])}]]
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
