import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck, listDecks } from "../utils/api/index";

function DeckList() {
    const [decks, setDecks] = useState([])
    const history = useHistory();

    useEffect(() => {
        const abortController = new AbortController();
        listDecks(abortController.signal).then(setDecks);

        return () => abortController.abort();
    }, [decks]);

    const deckCard = decks.map(deck => {
        
        const handleDelete = async () => {
            const confirmDelete = window.confirm("Delete this deck?\nYou will not be able to recover it.");
            console.log("Deleting Deck", deck.id)
            if (confirmDelete) {
                await deleteDeck(deck.id);
                history.go(0);
            }
        }

        return (
            <div className="card border-dark w-75" style={{ margin: "10px" }}>
                <div className="card-body">
                    <h3 className="card-title">
                        {deck.name}
                        <button className="btn btn-danger float-right" onClick={handleDelete}>Delete</button>
                    </h3>
                    <p className="card-text">
                        <i>--- Contains {deck.cards.length} cards --- </i><br />
                        {deck.description}
                    </p>
                    <Link to={`/decks/${deck.id}/study`}><button className="btn btn-secondary mr-2">Study</button></Link>
                    <Link to={`/decks/${deck.id}`}><button className="btn btn-info">View</button></Link>
                </div>
            </div>
        )
    });

    return (
        <div>
            {deckCard}
        </div>
    )

}

export default DeckList;