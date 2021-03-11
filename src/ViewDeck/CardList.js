import React from "react";
import { useHistory, Link } from "react-router-dom";
import { deleteCard } from "../utils/api/index";
import Card from "./Card";

/* 
 - Each card in the deck:
        xx is listed on the page under the "Cards" heading.
        - shows a question and the answer to the question.
        - has an “Edit” button that takes the user to the Edit - Card screen when clicked.
        - has a “Delete” button that allows that card to be deleted.
*/

function CardList({deck}) {
    const { cards = [] } = deck;
    const history = useHistory();

    const handleDelete = async (card) => {
            const confirmDelete = window.confirm("Delete this card?\nYou will not be able to recover it.");
            
            if (confirmDelete) {
                await deleteCard(card.id);
                history.go(0);
            }
    }
    
    const cardHtml = cards.map(card => {
        return (
            <div key={card.id}>
                <Card card={card} deck={deck} handleDelete={handleDelete} />
            </div>
        )
    });

    return (
        <div>
            <h3>Cards</h3>
            {cardHtml}
            <Link to={`/decks/${deck.id}/cards/new`}>
                    <button className="btn btn-success mt-2 mb-5">+ Add Card</button>
            </Link>
        </div>
    )
}

export default CardList;