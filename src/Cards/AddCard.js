import React from "react";

/*
 The Add Card screen has the following features:

    - The path to this screen should include the deckId (i.e., /decks/:deckId/cards/new).

    - There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck to which the cards are being added, and finally the text Add Card (e.g., Home/React Router/Add Card).

    - The screen displays the "React Router: Add Card" deck title.

    - A form is shown with the "front" and "back" fields for a new card. Both fields use a <textarea> tag that can accommodate multiple lines of text.

    - If the user clicks "Save", a new card is created and associated with the relevant deck. Then the form is cleared and the process for adding a card is restarted.

    - If the user clicks "Done", the user is taken to the Deck screen.
*/

function AddCard() {
    return (
        <h2>Add CardScreen</h2>
    )
}

export default AddCard;