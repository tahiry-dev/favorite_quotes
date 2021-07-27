import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { favorite } from '../../apiCall/quoteSlice';
import { FavoriteIcon, UnfavoriteIcon } from './QuoteStyles.styled';

const FavoriteButton = ({ id, favoritedBy }) => {
  const currentUser = {
    id: 1,
    email: 'tahiry@example2.com',
    provider: 'email',
    name: 'Tahiry',
    nickname: 'testTahiry',
    uid: 'tahiry@example2.com',
    allow_password_change: false,
  };

  const favoriteLoading = useSelector(state => state.quote.thisLoaders.favorite);
  const favoriteError = useSelector(state => state.quote.thisErrors.favorite);
  const isFavorited = favoritedBy.some(user => user.user_id === currentUser.user_id);
  const type = isFavorited ? 'unfavorite' : 'favorite';

  const dispatch = useDispatch();
  const handleFavorite = e => {
    e.preventDefault();
    dispatch(favorite({ id, type, currentUser }));
  };

  return (
    <>
      <button
        type="button"
        onClick={handleFavorite}
        data-item-id={id}
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
