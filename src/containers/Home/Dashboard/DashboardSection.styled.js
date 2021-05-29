import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DashboardContainer = styled.section`
  padding: 60px 5px;
  text-align: center;
  background-color: #f8f8f8;
  header {
    margin-bottom: 30px;
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.625rem;
      font-weight: bold;
      color: #919191;
      text-transform: uppercase;
    }
  }
  .image {
    max-width: 400px;
    margin: 0 auto;
  }
  .image,
  .details {
    padding: 0 30px;
  }
  .details {
    margin-top: 30px;
    h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
    }
    p {
      font-size: 0.725rem;
      line-height: 1.3;
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 768px) {
    .main {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 992px;
      margin: 0 auto;
    }
    .details {
      margin-top: 0;
    }
  }
`;

export const Button = styled(Link)`
  border-radius: 50px;
  padding: 5px 20px;
  background: rgb(233, 84, 6);
  margin-right: 10px;
  font-size: 0.75rem;
  color: #fff;
  text-transform: uppercase;
`;