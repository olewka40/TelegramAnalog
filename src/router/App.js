import React from "react";
// import { Switch, Route } from "react-router-dom";
// import Header from "../components/Header";
import Dialog from "../components/Dialog";
import ListOfDialogs from "../components/ListOfDialogs";
import uuid from "uuid";
import "./index.css"

const usersData = [
    {
        userId: uuid(),
        userName: "Ivan",
        userLogin: "Ivan4ello",
        userPassword: "vanya2001",
        userAvatar: "",
        userDialogs: [
                {
                    companionId: uuid(),
                    messages:
                        [
                            {
                                id: "",
                                text: "privet"
                            },
                            {
                                id: "",
                                text: "Privet",

                            },
                        ]
                },
            ]
    }
];
console.log(usersData)

const App = () => (
    <div className="main" style={{backgroundColor:"#037260"}}>
        {/*<Header />*/}
        <ListOfDialogs />
        <Dialog />



        {/*<Switch>*/}
        {/*    <Route exact path="/" component={///} />*/}
        {/*    <Route path="/:id" component={ShoppingListWC} />*/}
        {/*</Switch>*/}
    </div>
);

export default App;

// TODO:
