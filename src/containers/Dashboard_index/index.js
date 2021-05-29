import AddQuoteForm from '../../components/Quotes/AddQuoteForm';
import MobileLayout from '../Layout/MobileLayout';
import { MobileContainer } from '../Styles.styled';

const Dashboard = () => (
    <MobileLayout title="Dashboard" productPage={false}>
        <MobileContainer>
            <div className="wrapper">
                <header>
                    <h1>Add Quote</h1>
                    <p>Ready to share your favorite quote with the world?</p>
                </header>
                <AddQuoteForm />
            </div>
        </MobileContainer>
    </MobileLayout>
);

export default Dashboard;