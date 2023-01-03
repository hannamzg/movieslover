import { useMyCards } from "./hooks/useMyCards";
import PageHeader from "./common/pageHeader";
import { Link } from "react-router-dom";
import Card from "./card";

const MyCards = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader
        title="My Cards"
        description="your cards are in the list below"
      />
      <div className="row" >
        <Link to="/create-card" className="createNewCard"><h2>Create a New Card</h2></Link>
      </div>

      <div >
        {!cards.length ? (
            <div className="custom-loader"></div>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
};

export default MyCards;