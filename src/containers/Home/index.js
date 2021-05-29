import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeroSection from './Hero';
import DashboardSection from './Dashboard';
import DesignerSection from './Design';
import TestimonialSection from './PeopleSection';
import FreeSection from './FreeSection';
import Layout from '../Layout';

import { getQuotes } from '../../apiCall/quoteSlice';

const Home = () => {
    const quotes = useSelector(state => state.quote.quotes);
    const dispatch = useDispatch();
    useEffect(() => {
        if (quotes.length === 0) dispatch(getQuotes());
    }, [dispatch, quotes]);

    return (
        <Layout homepage>
            <HeroSection />
            <DashboardSection />
            <DesignerSection />
            <TestimonialSection />
            <FreeSection />
        </Layout>
    );
};

export default Home;