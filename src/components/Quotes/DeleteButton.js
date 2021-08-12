import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import jwtDecode from 'jwt-decode';
import { FaTimes } from 'react-icons/fa';
import { deleteQuote } from '../../apiCall/quoteSlice';

/* eslint-disable no-alert */

const DeleteButton = ({ id, userId }) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    /* eslint-disable no-empty */
    try {
      const userInfo = jwtDecode(localStorage.getItem('currentUser'));
      setUserInfo(userInfo);
    } catch (e) { }
  }, []);
  /* eslint-enable no-empty */
  const currentUser = userInfo;
  const deleteLoading = useSelector(state => state.loader);
  const deleteError = useSelector(state => state.quote.thisErrors.deleteQuote);

  const history = useHistory();
  const dispatch = useDispatch();
  const handleDelete = e => {
    e.preventDefault();
    const response = window.confirm('Are you sure you want to delete the quote?');
    if (response) dispatch(deleteQuote(id));
    history.push('/creations');
  };

  return (
    <>
      {deleteError ? <p>{deleteError}</p> : null}
      {currentUser.user_id === userId ? (
        <div className="delete-button">
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleteLoading && deleteLoading === id}
          >
            <FaTimes />
          </button>
        </div>
      ) : null}
    </>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
};

export default DeleteButton;

/* eslint-enable no-alert */
