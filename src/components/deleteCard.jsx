import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cardsService from "../components/services/cardService";
import { toast } from "react-toastify"; 


const DeleteCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteCard = async () => {
      await cardsService.deleteCard(id);
      toast('🦄 whyy', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      navigate("/my-cards");
    };

    deleteCard();
  }, []);

  return null;
};

export default DeleteCard;