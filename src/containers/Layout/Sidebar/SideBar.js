import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  padding: 30px 0;
  z-index: 999;
  width: 250px;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.1s ease-in;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  background: #fafafa;
`;

export const SidebarLogo = styled(Link)`
  display: flex;
  margin: 15px 10px 0;
  max-width: 100px;
  color: #565656;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const SidebarProfile = styled.div`
  padding: 5px 25px;
  margin-bottom: 15px;
  img {
    border-radius: 50%;
    margin-bottom: 5px;
  }
  h3 {
    font-size: 0.875rem;
  }
  p {
    font-size: 0.75rem;
    color: gray;
  }
`;

export const SidebarMenu = styled.div``;

export const SidebarItem = styled.div``;

export const Divider = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 5px 25px;
`;

export const SidebarLink = styled(Link)`
  font-size: 0.825rem;
  cursor: pointer;
  padding: 5px 25px;
  display: block;
  &.active,
  &:hover {
    border-left: 3px solid rgb(233, 84, 6);
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    background-color: rgb(233, 84, 6);
    color: #fff;
    font-size: 0.625rem;
    padding: 0 12px;
    border-radius: 50px;
  }
`;

export const SpecialLink = styled(SidebarLink)`
  color: rgb(233, 84, 6);
`;

export const AnchorLink = styled.a`
  padding: 5px 25px;
  font-size: 0.825rem;
  color: red;
  cursor: pointer;
`;

export const PlusIcon = styled(FaPlus)`
  margin-left: auto;
  margin-right: 6px;
  color: rgb(233, 84, 6);
`;
