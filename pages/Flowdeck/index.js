import styled from "styled-components";
import AsanaCard from "../../components/AsanaCard";

export default function FavoriteAsanaCard({ asanas, setAsana }) {
    function deleteSpot(id) {
      setAsana((asanas) => {
        const newAsanaCardList = asanas.filter((asanas) => asanas.id !== id);
        return newAsanaCardList;
      });
    }

    function toggleFavorite(id) {
        const newAsanaCardArray = asanas.map((asana) => {
          if (asanas.id === id) {
            return {
              ...asanas,
              isFavorite: !asanas.isFavorite,
            };
          } else {
            return asanas
          }
        });
        setAsana(newAsanaCardArray);