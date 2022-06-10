import { useState, useEffect } from "react";
import { StyledFavouriteBtn } from "./FavouriteBtn.Styled";

export const FavouriteBtn = ({ id, title, agents, downloads, languages, resources }) => {
  const [newFavourite, setNewFavourite] = useState(true);
  let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

  const handleFavourite = () => {
    setNewFavourite(!newFavourite);
    updateFavourites();
  };
  const updateFavourites = () => {
    favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    if (newFavourite == true) {
      favourites.push({id, title, agents, downloads, languages, resources});
    } else {
      favourites.splice(favourites.indexOf(favourites.find(el => el.id === id ? el : console.log('nieto')), 1));
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  useEffect(() => {
    favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    favourites?.forEach((favourite) =>
      favourite.id == id && newFavourite
        ? setNewFavourite(!newFavourite)
        : newFavourite
    );
  }),
    [];
  return (
    <StyledFavouriteBtn onClick={handleFavourite}>
      {newFavourite ? "♡" : "❤"}
    </StyledFavouriteBtn>
  );
};
