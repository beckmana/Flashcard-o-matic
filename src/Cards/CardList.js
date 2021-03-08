import React from "react";
import { useHistory, Link } from "react-router-dom";
import { deleteCard } from "../utils/api/index";

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

    const cardInfo = cards.map(card => {
        
        const handleDelete = async () => {
            const confirmDelete = window.confirm("Delete this card?\nYou will not be able to recover it.");
            
            if (confirmDelete) {
                await deleteCard(card.id);
                history.go(0);
            }
        }

        return (
            <div className="card border-dark mt-3 w-75">
                <div className="card-body">
                    <div className="row">
                        <p className="col">{card.front}</p>
                        <p className="col">{card.back}</p>
                    </div>
                    <div className="float-right">
                        <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}><button className="btn btn-secondary mr-2">Edit</button></Link>
                        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            <h3>Cards</h3>
            {cardInfo}
            <Link to={`/decks/${deck.id}/cards/new`}>
                    <button className="btn btn-success mt-2 mb-5">+ Add Cards</button>
            </Link>
        </div>
    )
}

export default CardList;