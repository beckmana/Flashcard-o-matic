import React from "react";

/*
 The Deck screen has the following features:

    - The path to this screen should include the deckId (i.e., /decks/:deckId).

    - There is a breadcrumb navigation bar with a link to home / followed by the name of the deck (e.g., Home/React Router).

    - The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application").

    - The screen includes "Edit", "Study", "Add Cards", and "Delete" buttons. Each button takes the user to a different destination, as follows:
        | "Edit" | Edit Deck Screen |
        | "Study" | Study screen |
        | "Add Cards" | Add Card screen |
        | "Delete" | Shows a warning message before deleting the deck]( See the "Delete Card Prompt" section below) |
            When the user clicks the "Delete" button associated with a card, a warning message is shown and the user can click "OK" or "Cancel". If the user clicks "OK", the card is deleted.

    - Each card in the deck:
        - is listed on the page under the "Cards" heading.
        - shows a question and the answer to the question.
        - has an “Edit” button that takes the user to the Edit - Card screen when clicked.
        - has a “Delete” button that allows that card to be deleted.
*/

function DeckInfo() {
    return (
        <h2>Deck Information Screen</h2>
    )
}

export default DeckInfo