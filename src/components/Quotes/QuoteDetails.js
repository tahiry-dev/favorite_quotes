import PropTypes from 'prop-types';
import ShowQuote from './ShowQuote';
import MobileLayout from '../../containers/Layout/MobileLayout';

const QuoteDetails = ({ match }) => {
  const { id } = match.params;
  return (
    <MobileLayout quotePage title="Quote">
      <ShowQuote id={id} />
    </MobileLayout>
  );
};

QuoteDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default QuoteDetails;
