import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home/Home";
import Study from "../Study/Study";
import EditDeck from "../DeckForms/EditDeck";
import ViewDeck from "../ViewDeck/ViewDeck";
import EditCard from "../CardForms/EditCard";
import AddCard from "../CardForms/AddCard";
import CreateDeck from "../DeckForms/CreateDeck";

function Layout() {

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
            <Route path="/decks/new">
              <CreateDeck />
            </Route>
            <Route path="/decks/:deckId/study">
              <Study />
            </Route>
            <Route path="/decks/:deckId/edit">
              <EditDeck />
            </Route>
            <Route path="/decks/:deckId/cards/new">
              <AddCard />
            </Route>
            <Route path="/decks/:deckId/cards/:cardId/edit">
              <EditCard />
            </Route>
            <Route path="/decks/:deckId">
              <ViewDeck />
            </Route>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
