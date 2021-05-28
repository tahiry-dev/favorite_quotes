import PropTypes from 'prop-types';

const Error = ({ errors }) => (
    <div>
        {typeof errors === 'string' ? <p>{errors}</p> : errors.map(error => <p key={error}>{error}</p>)}
    </div>
);

Error.propTypes = {
    errors: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
};

export default Error;