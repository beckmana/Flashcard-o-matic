import React from "react";

/*
 The Study screen has the following features:

    - The path to this screen should include the deckId (i.e., /decks/:deckId/study).

    - There is a breadcrumb navigation bar with links to home /, followed by the name of the deck being studied and finally the text Study (e.g., Home/Rendering In React/Study).

    - The deck title (i.e., "Study: Rendering in React" ) is shown on the screen.

    - Cards are shown one at a time, front-side first.

    - A button at the bottom of each card "flips" it to the other side.

    - After flipping the card, the screen shows a next button to continue to the next card.
        - The next button appears after the card is flipped.

    - After the final card in the deck has been shown, a message is shown offering the user the opportunity to restart the deck.
        -  If the user does not restart the deck, they return to the home screen.

    - If the user does not restart the deck, they should return to the home screen.

    - Studying a deck with two or fewer cards should display a "Not enough cards" message and a button to add cards to the deck.
        - Clicking the "Add Cards" button should take the user to the Add Card screen.
*/

function Study() {
    return (
        <h2>Study Screen</h2>
    )
}

export default Study;