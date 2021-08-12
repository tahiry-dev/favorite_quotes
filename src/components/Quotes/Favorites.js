import React from 'react';
import UserFavorites from './UserFavorites';
import MobileLayout from '../../containers/Layout/MobileLayout';

import { MobileContainer } from '../Styles.styled';

const Favorites = () => (
  <MobileLayout title="My favorites" quotePage={false}>
    <MobileContainer>
      <UserFavorites />
    </MobileContainer>
  </MobileLayout>
);

export default Favorites;
