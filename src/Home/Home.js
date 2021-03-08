import React from "react";
import { Link } from "react-router-dom";
import DeckList from "./DeckList"

/*
 The Home screen has the following features:

    x The path to this screen should be "/"".
    - A "Create Deck" button is shown and clicking it brings the user to the Create Deck screen.
    - Existing decks are each shown with the deck name, the number of cards, and a “Study,” “View,” and - “Delete” button.
    - Clicking the “Study” button brings the user to the Study screen.
    - Clicking the “Edit” button brings the user to the Edit Deck screen.
    - Clicking the “Delete” button shows a warning message before deleting the deck. 
*/

// Create a stateful deck
// handle on create deck click event to console log click.
// display stateful decks with action buttons that console log the click.

/*

After creating prototype html components that handle the clicks.

Take those components and convert them to React components that
the Home components manages.

*/

// TODO: Handle Delete prompt

function Home() {

    return (
        <>
            <Link to='/decks/new'>
                <button className='btn btn-primary btn-lg'> + Create Deck</button>
            </Link>
            <DeckList />
        </>
    )
}

export default Home;