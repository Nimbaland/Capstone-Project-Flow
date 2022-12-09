export default function FavoriteAsanaCard({asanas, setAsana}) {
  function deleteSpot(id) {
    setAsana(asanas => {
      const newAsanaCardList = asanas.filter(asanas => asanas.id !== id);
      return newAsanaCardList;
    });
  }
  console.log(deleteSpot);
  function toggleFavorite(id) {
    const newAsanaCardArray = asanas.map(asanas => {
      if (asanas.id === id) {
        return {
          ...asanas,
          isFavorite: !asanas.isFavorite,
        };
      } else {
        return asanas;
      }
    });
    setAsana(newAsanaCardArray);
  }
  console.log(toggleFavorite(1));
}
