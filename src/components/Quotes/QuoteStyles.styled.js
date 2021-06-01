import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const QuotesContainer = styled.section`
  margin-left: 90px;
  height: 80vh;
  max-height: 480px;
  .slider {
    gap: 15px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .no-quotes {
      text-align: center;
      width: 100%;
    }
  }
`;

export const QuoteContainer = styled.article`
  width: 33.33%;
  height: 100%;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  border: 1px solid rgba(0, 0, 0, 0.15);
  .image {
    height: 180px;
    position: relative;
    img {
      height: 100%;
      width: 100%;
    }
    .delete-button {
      position: absolute;
      left: 10px;
      top: 10px;
      button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        & > :first-child {
          font-size: 1.5rem;
          color: red;
        }
      }
    }
  }
  .likes {
    position: absolute;
    right: 5px;
    top: 8px;
    display: flex;
    align-items: center;
    background-color: rgb(256, 256, 256);
    border-radius: 3px;
    padding: 3px 5px;
    p {
      margin-right: 10px;
      font-size: 0.75rem;
    }
    button {
      background-color: transparent;
      outline: none;
      border: none;
      box-shadow: none;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: rgb(233, 84, 6);
      &:focus,
      &:active {
        outline: none;
        border: none;
      }
    }
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    h3 {
      margin-bottom: -5px;
      font-size: 0.875rem;
    }
    p {
      font-size: 0.75rem;
      &:first-child {
        font-size: 0.875rem;
        font-weight: bold;
      }
    }
    & > :last-child {
      text-align: right;
    }
  }
`;

export const SliderPaginationContainer = styled.div`
  font-weight: bold;
  word-spacing: 1px;
  text-align: center;
`;

export const ShowQuoteContainer = styled.section`
  padding: 45px 0 90px;
  overflow-y: scroll;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  .image {
    position: relative;
    height: 55vh;
    max-height: 480px;
    img {
      width: 100%;
      height: 100%;
    }
    .delete-button {
      position: absolute;
      left: 10px;
      top: 10px;
      button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
        & > :first-child {
          font-size: 1.2rem;
          color: red;
          text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
        }
      }
    }
    .likes {
      position: absolute;
      right: 5px;
      top: 8px;
      display: flex;
      align-items: center;
      background-color: rgb(256, 256, 256);
      border-radius: 3px;
      padding: 3px 5px;
      p {
        margin-right: 10px;
        font-size: 0.75rem;
      }
      button {
        background-color: transparent;
        outline: none;
        border: none;
        box-shadow: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        color: rgb(233, 84, 6);
        &:focus,
        &:active {
          outline: none;
          border: none;
        }
      }
    }
    .flex {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      color: #fff;
      line-height: 0.9;
      text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
      .details {
        display: flex;
        align-items: center;
        img {
          border-radius: 50px;
          width: 50px;
          height: 50px;
          margin-right: 8px;
        }
        h3 {
          margin-bottom: -10px;
          font-size: 0.875rem;
          font-weight: bold;
        }
      }
    }
  }
  .description {
    padding: 15px 30px;
    p {
      font-size: 0.875rem;
    }
    .date {
      margin-top: 15px;
      text-align: right;
      font-style: italic;
    }
  }
  a {
    text-align: center;
    display: block;
    color: #fff;
    background-color: rgb(233, 84, 6);
    height: 60px;
    line-height: 60px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    text-transform: uppercase;
  }
`;

export const FavoriteIcon = styled(FaRegHeart)`
  font-size: 1.4rem;
`;

export const UnfavoriteIcon = styled(FaHeart)`
  font-size: 1.4rem;
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