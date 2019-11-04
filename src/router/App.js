import React from "react";
// import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Dialog from "../components/Dialog";
import ListOfDialogs from "../components/ListOfDialogs";
import uuid from "uuid";


// const userDialogs = [
//     {
//         companionId: uuid(),
//         messages:
//             [
//                 {
//                     id: userDialogs.companionId,
//                     text: "privet"
//                 },
//                 {
//                     text: "Privet",
//                     id: ""
//                 },
//             ]
//
//     },
// ];
// const renderDialogs = userDialogs.map(item => item);




const usersData = [
    {
        userId: uuid(),
        userName: "Ivan",
        userLogin: "Ivan4ello",
        userPassword: "vanya2001",
        // userDialogs: renderDialogs

    }
];
console.log(usersData)

const App = () => (
    <div className="main" style={{backgroundColor:"white"}}>
        <Header />
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
