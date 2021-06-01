import AddQuoteForm from '../../components/Quotes/AddQuoteForm';
import MobileLayout from '../Layout/MobileLayout';
import { MobileContainer } from '../../components/Styles.styled';

const Dashboard = () => (
  <MobileLayout title="Dashboard" quotePage={false}>
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
