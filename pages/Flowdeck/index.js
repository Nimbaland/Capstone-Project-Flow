// import AsanaCard from "../../components/AsanaCard";
import styled from "styled-components";
import {useState} from "react";
import asanas from "../db.json";

export default function FavoriteAsanaCard({setAsanas}) {
  const [favorites] = useState([2, 3, 6, 7, 15, 19]);

  console.log(favorites, setAsanas);

  //global State:  [favorites, setFavorites] === []--> Array mit favorites-id

  // favoriteButton:  setFavorites([...favorites, neueId])

  //filter: asanas.filter(card=>favorites.indexOf(card.id)!== -1)

  //mapping: filteredAsanas.map(card=>JSX-CODE)

  // function deleteAsana(id) {
  //   setAsanas(asanas => {
  //     const newAsanaFlow = asanas.filter(asana => asana.id !== id);
  //     return newAsanaFlow;
  //   });
  // }

  // function toggleFavorite(id) {
  //   const NewAsanaArray = asanas.map(asana => {
  //     if (asanas.id === id) {
  //       return {
  //         ...asana,
  //         isFavorite: !asanas.isFavorite,
  //       };
  //     } else {
  //       return asana;
  //     }
  //   });
  //   setAsanas(NewAsanaArray);
  // }
  console.log(asanas);
  return (
    <>
      <StyledFavoritesSection>
        <newAsanaFlow>
          {/* {asanas
            ?.filter(asana => favorites.indexOf(Number(asana.id)) !== -1)
            .map(asana => {
              // if (asanas.isFavorite === true) {
              return (
                <AsanaCard
                  asana={asana}
                  key={asanas.name}
                  deleteAsanas={deleteAsana}
                  toggleFavorite={toggleFavorite}
                />
              );
              // } else {
              //   return null;
              // }
            })} */}
          <PlaceholderText>
            You have not yet selected any asanacards.
          </PlaceholderText>
        </newAsanaFlow>
      </StyledFavoritesSection>
    </>
  );
}

const StyledFavoritesSection = styled.section`
  margin: 60px 0 30px 0;
`;

const PlaceholderText = styled.p`
  padding: 50px;
  text-align: center;
  color: var(--primary-color);
`;
