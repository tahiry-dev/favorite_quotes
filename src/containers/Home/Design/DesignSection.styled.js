import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  padding: 60px 5px;
  background: #e7f0ff;
  text-align: center;
  .wrapper {
    max-width: 992px;
    margin: 0 auto;
  }
  .images {
    position: relative;
    width: 150%;
    min-height: 300px;
    display: block;
    img {
      position: absolute;
      height: 260px;
      width: 200px;
    }
    img:nth-child(1) {
      top: 30px;
      left: calc(50% - 100px);
      z-index: 5;
    }
    img:nth-child(2) {
      top: 15px;
      left: calc(50% - 60px);
      z-index: 4;
    }
    img:nth-child(3) {
      top: 23px;
      left: calc(50% - 140px);
      z-index: 3;
    }
    img:nth-child(4) {
      top: 5px;
      left: calc(50% - 110px);
      z-index: 2;
    }
  }
  .details {
    margin-top: 30px;
    padding: 0 30px;
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
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row-reverse;
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