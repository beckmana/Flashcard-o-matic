import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home/Home";
import Study from "../Home/Study";
import EditDeck from "../Deck/EditDeck";
import DeckInfo from "../Deck/DeckInfo";
import EditCard from "../Cards/EditCard";
import AddCard from "../Cards/AddCard";
import CreateDeck from "../Deck/CreateDeck";

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
            <DeckInfo />
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
