import { Container, Button } from './DesignSection.styled';
import quote1 from '../HomePageAssets/quote1.jpg';
import quote2 from '../HomePageAssets/quote2.jpg';
import quote3 from '../HomePageAssets/quote3.jpg';
import quote4 from '../HomePageAssets/quote4.jpg';

const DesignerSection = () => (
  <Container>
    <div className="wrapper">
      <div className="images">
        <img src={quote2} alt="quote 2" width="200" height="280" />
        <img src={quote3} alt="quote 3" width="200" height="280" />
        <img src={quote4} alt="quote 4" width="200" height="280" />
        <img src={quote1} alt="quote 1" width="200" height="280" />
      </div>

      <div className="details">
        <h2>Browse inspiring quotes?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Button to="/quotes">Browse quotes</Button>
      </div>
    </div>
  </Container>
);

export default DesignerSection;
