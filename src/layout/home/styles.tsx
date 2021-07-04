import styled from "styled-components";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { GrAppleAppStore } from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
export const Layout = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #321a1a;
  padding: 15px;
  font-family: "Quicksand", sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Logo = styled.div`
  margin: 25px 0px;
  width: fit-content;
  align-self: center;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const MenuTitle = styled.div`
  font-size: 1.7rem;
  align-self: center;
  color: #ecbea5;
  font-weight: 600;
`;

export const MenuGrid = styled.div`
  align-self: center;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 15px;
  row-gap: 15px;
  margin: 15px 0px;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const MenuItemWrap = styled.div`
  font-size: 1rem;
  background-color: #ecbea5;
  display: flex;
  color: #321a1a;
  font-weight: 600;
  border-radius: 5px;
  padding: 6px;
  cursor: pointer;
`;

export const MenuItemLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 25px;
`;

export const MenuItemText = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const OpenDescLogo = styled(BsChevronRight)`
  font-size: 1rem;
  color: #321a1a;
`;

export const CloseDescLogo = styled(BsChevronDown)`
  font-size: 1rem;
  color: #321a1a;
`;

export const MenuDescriptionWrap = styled.div`
  background-color: #ebb69a;
  display: flex;
  flex-direction: column;
  color: #321a1a;
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
`;

export const ItemDescription = styled.div`
  font-size: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  font-weight: 400;
  margin-bottom: 3px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Detail = styled.div`
  display: flex;
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 5px;
`;

export const MoneyWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactWrap = styled.div`
  width: 90%;
  align-self: center;
  margin-bottom: 18px;
  box-sizing: border-box;
`;

export const ContactTile = styled.div`
  font-size: 2rem;
  color: #ecbea5;
`;

export const ContactDescription = styled.div`
  font-size: 1rem;
  color: #ecbea5;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const AppLinks = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const AppStoreLogo = styled(GrAppleAppStore)`
  font-size: 2.5rem;
  color: #ecbea5;
  box-sizing: border-box;
`;

export const GooglePlayLogo = styled(FaGooglePlay)`
  font-size: 2rem;
  color: #ecbea5;
  box-sizing: border-box;
`;

export const MapLogo = styled(BiMap)`
  font-size: 2.5rem;
  color: #ecbea5;
  box-sizing: border-box;
`;

export const AppLink = styled.a.attrs((props) => ({
  target: "_blank",
}))`
  outline: none;
  text-decoration: none;
  border: none;
  display: flex;
  align-items: center;
  margin-right: 15px;
  margin-top: 5px;
  cursor: pointer;
  box-sizing: border-box;
  width: fit-content;
`;
