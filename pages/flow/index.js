// import AsanaCard from "../../components/AsanaCard";
import styled from "styled-components";
import asanas from "../db.json";
import AsanaCard from "../../components/AsanaCard";

export default function FavoriteAsanaCard({
  setAsanas,
  favorites,
  setFavorites,
}) {
  function deleteAsana(id) {
    setAsanas(asanas => {
      const newAsanaFlow = asanas.filter(asana => asana.id !== id);
      return newAsanaFlow;
    });
  }

  function toggleFavorite(id) {
    const NewAsanaArray = asanas.map(asana => {
      if (asanas.id === id) {
        return {
          ...asana,
          isFavorite: !asanas.isFavorite,
        };
      } else {
        return asana;
      }
    });
    setAsanas(NewAsanaArray);
  }
  console.log(favorites);
  return (
    <>
      <StyledFavoritesSection>
        <div>
          {setFavorites()}
          {asanas
            ?.filter(asana => favorites.indexOf(asana.id) !== -1)
            .map(asana => {
              return (
                <AsanaCard
                  asana={asana}
                  key={asanas.name}
                  deleteAsanas={deleteAsana}
                  toggleFavorite={toggleFavorite}
                />
              );
            })}
          {favorites.length === 0 && (
            <PlaceholderText>
              You have not yet selected any asanacards.
            </PlaceholderText>
          )}
        </div>
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
