import AllQuotes from './AllQuotes';
import MobileLayout from '../../containers/Layout/MobileLayout';
import { MobileContainer } from '../Styles.styled';

const Quotes = () => (
  <MobileLayout title="Quote" QuotePage={false}>
    <MobileContainer>
      <AllQuotes />
    </MobileContainer>
  </MobileLayout>
);

export default Quotes;
