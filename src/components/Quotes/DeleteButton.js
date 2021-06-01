import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { FaTimes } from 'react-icons/fa';

import { deleteQuote } from '../../apiCall/quoteSlice';

const DeleteButton = ({ id, userId }) => {

    const currentUser = useSelector(state => state.user.user);
    const deleteLoading = useSelector(state => state.quote.loaders.deleteQuote);
    const deleteError = useSelector(state => state.quote.errors.deleteQuote);


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
            {currentUser.id === userId ? (
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