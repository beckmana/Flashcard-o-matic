import React, { useEffect, useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../utils/api/index";
import CardForm from "./CardForm";

/*
The Edit Card screen has the following features:

    - The path to this screen should include the deckId and the cardId (i.e., /decks/:deckId/cards/:cardId/edit).

    - There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck of which the edited card is a member, and finally the text Edit Card :cardId (e.g., Home/Deck React Router/Edit Card 4).

    * It displays the same form as the Add Card screen, except it is pre-filled with information for the existing card. It can be edited and updated.

    - If the user clicks on either "Save" or "Cancel", the user is taken to the Deck screen.
*/

function EditCard() {
    const { deckId, cardId } = useParams();
    const history = useHistory();

    const [formData, setFormData] = useState({});
    const [deck, setDeck] = useState({});

    useEffect( () => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck);
        readCard(cardId, abortController.signal).then(setFormData);

        return () => abortController.abort();
    }, [deckId, cardId]);

    // const handleChange = ({ target }) => {
    //     setFormData({ ...formData, [target.name]: target.value });
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateCard(formData);
        history.push(`/decks/${deckId}`);
    }

    const cancel =
        (
            <Link to={`/decks/${deckId}`}>
                 <button className="btn btn-secondary mr-2">
                     Cancel
                 </button>
            </Link>
        )
    

    
    
    return (
        <>
             <nav aria-label='breadcrumb'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-primary">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="breadcrumb-item text-primary">
                            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current='page'>
                            Edit Card {cardId}
                        </li>
                    </ol>
                </nav>
            <h2>Edit Card</h2>
            <br />
            <CardForm setFormData={setFormData} formData={formData} handleSubmit={handleSubmit} back={cancel} />
        </>
    )
}

export default EditCard;