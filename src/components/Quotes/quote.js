import React, { useEffect, useState } from 'react';

import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

import DeleteButton from './DeleteButton';
import FavoriteButton from './FavoriteButton';

import { QuoteContainer } from './QuoteStyles.styled';

const Quote = ({ quote }) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    /* eslint-disable no-empty */
    try {
      const userInfo = jwtDecode(localStorage.getItem('currentUser'));
      setUserInfo(userInfo);
    } catch (e) { }
  }, []);
  /* eslint-enable  no-empty */

  const currentUser = userInfo;
  const { favorited_by: favoritedBy } = quote;
  const {
    id,
    author,
    user_id: userId,
    image_url: imageUrl,
    ratings,
  } = quote;

  const rating = ratings || Math.floor(Math.random() * Math.floor(6));

  return (
    <QuoteContainer>
      <Link to={`/quotes/${id}`}>
        <div className="image">
          <img src={imageUrl} alt="Quote" />
          {currentUser.user_id ? (
            <>
              <DeleteButton userId={userId} id={+id} />
              <div className="likes">
                <p>
                  Likes &nbsp;
                  {favoritedBy.length}
                </p>
                <FavoriteButton className="favorite" id={id} favoritedBy={favoritedBy} />
              </div>
            </>
          ) : null}
        </div>
        <div className="flex">
          <div className="details">
            <h3>{`${author.slice(0, 25)}`}</h3>
            <ReactStars
              count={5}
              value={rating}
              isHalf
              edit={false}
              size={20}
              activeColor="#ffd700"
            />
          </div>
        </div>
      </Link>

    </QuoteContainer>
  );
};

Quote.propTypes = {
  quote: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Quote;
