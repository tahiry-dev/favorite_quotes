import UserQuotes from './UserQuotes';
import MobileLayout from '../../containers/Layout/MobileLayout';
import { MobileContainer } from '../Styles.styled';

const Quotes = () => (
    <MobileLayout title="My creations" quotePage={false}>
        <MobileContainer>
            <UserQuotes />
        </MobileContainer>
    </MobileLayout>
);

export default Quotes;