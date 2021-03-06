import React, { useEffect, useState } from 'react';

import jwtDecode from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import ReactStars from 'react-rating-stars-component';

import FavoriteButton from './FavoriteButton';
import DeleteButton from './DeleteButton';
import Loading from '../Loading';
import Error from '../Error';

import formatDate from './date';

import { getQuote } from '../../apiCall/quoteSlice';

import { ShowQuoteContainer } from './QuoteStyles.styled';

const ShowQuote = ({ id }) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    /* eslint-disable no-empty */
    try {
      const userInfo = jwtDecode(localStorage.getItem('currentUser'));
      setUserInfo(userInfo);
    } catch (e) { }
  }, []);
  /* eslint-enable no-empty */

  // State
  const currentUser = userInfo;
  const quote = useSelector(state => state.quote.quote);
  const loading = useSelector(state => state.loader.quoteLoaders.loadingQuote);
  const error = useSelector(state => state.error.errors.loadingQuotes);
  const favoritedBy = useSelector(state => state.quote.quote.favorited_by);

  // Props
  const {
    description,
    ratings,
    user_id: userId,
    image_url: imageUrl,
    user_name: userName,
    created_at: createdAt,
    updated_at: updatedAt,
  } = quote;

  const rating = ratings || Math.floor(Math.random() * Math.floor(6));

  // Effects
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuote(id));
  }, [dispatch, id]);

  // Utils
  const createdDate = formatDate(createdAt);
  const updatedDate = formatDate(updatedAt);

  return (
    <ShowQuoteContainer>
      {loading ? <Loading /> : null}
      {error ? <Error errors={error} /> : null}
      <>
        <div className="image">
          {currentUser.user_id ? (
            <>
              {loading || error ? null : <DeleteButton userId={userId} id={+id} />}
              <div className="likes">
                <p>
                  Likes &nbsp;
                  {favoritedBy.length}
                </p>
                <FavoriteButton className="favorite" id={+id} favoritedBy={favoritedBy} />
              </div>
            </>
          ) : null}
          <img src={imageUrl} alt="Quote" />

          <div className="flex">
            <div className="details">
              <img
                src="http://unsplash.it/100/100?gravity=center"
                alt="Random unsplash img"
                width="50"
                height="50"
              />
              <div className="profile">
                <h3>{userName}</h3>
                <ReactStars
                  count={5}
                  value={rating}
                  isHalf
                  edit={false}
                  size={20}
                  activeColor="#ffd700"
                  color="#fff"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <p>{description}</p>

          <p className="date">
            {updatedDate !== createdDate ? `Updated ${updatedDate}` : `Added ${createdDate}`}
          </p>
        </div>
      </>
    </ShowQuoteContainer>
  );
};

ShowQuote.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ShowQuote;
