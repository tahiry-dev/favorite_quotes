import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { favorite } from '../../apiCall/quoteSlice';

import { FavoriteIcon, UnfavoriteIcon } from './QuoteStyles.styled';

const FavoriteButton = ({ id, favoritedBy }) => {
  const currentUser = useSelector((state) => state.user.user);
  const favoriteLoading = useSelector((state) => state.quote.loaders.favorite);
  const favoriteError = useSelector((state) => state.quote.errors.favorite);

  const isFavorited = favoritedBy.some((user) => user.id === currentUser.id);
  const type = isFavorited ? 'unfavorite' : 'favorite';

  const dispatch = useDispatch();
  const handleFavorite = (e) => {
    e.preventDefault();
    dispatch(favorite({ id, type, currentUser }));
  };

  return (
    <>
      <button
        type="button"
        onClick={handleFavorite}
        disabled={favoriteLoading && favoriteLoading === id}
      >
        {isFavorited ? <UnfavoriteIcon /> : <FavoriteIcon />}
      </button>

      {favoriteError ? <p>{favoriteError}</p> : null}
    </>
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  favoritedBy: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavoriteButton;
