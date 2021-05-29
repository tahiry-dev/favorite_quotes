import { FaChevronDown } from 'react-icons/fa';

// Styles
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    Button,
    DownArrow,
} from './HeroSection.Styled';

const HeroSection = () => (
    <HeroContainer>
        <HeroBg />
        <HeroContent>
            <div className="hero-header">
                <figure>
                    <blockquote>
                        Your time is limited, so don't waste it living someone else's life.
                        Don't be trapped by dogma
                        – which is living with the results of other people's thinking.
                        <figcaption>
                            &mdash; Steve Jobs,
                         </figcaption>
                    </blockquote>
                </figure>
            </div>
            <div className="actions">
                <Button to="/sign_up">Share Your Quote</Button>
            </div>
        </HeroContent>
        <DownArrow to="dashboard">
            <FaChevronDown />
        </DownArrow>
    </HeroContainer>
);

export default HeroSection;