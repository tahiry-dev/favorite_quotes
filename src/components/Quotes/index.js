import AllQuotes from './AllQuotes';
import MobileLayout from '../../containers/Layout/MobileLayout';
import { MobileContainer } from '../Styles.styled';

const Quotes = () => (
    <MobileLayout title="Crafts" productPage={false}>
        <MobileContainer>
            <AllQuotes />
        </MobileContainer>
    </MobileLayout>
);

export default Quotes;