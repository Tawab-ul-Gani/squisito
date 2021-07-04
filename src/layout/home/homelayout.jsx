import React, { useState } from "react";
import Image from "next/image";
import {
  Layout,
  Logo,
  Menu,
  MenuTitle,
  MenuGrid,
  MenuItemWrap,
  MenuItemLogo,
  MenuItemText,
  OpenDescLogo,
  CloseDescLogo,
  MenuDescriptionWrap,
  ItemDescription,
  DetailWrapper,
  Detail,
  MoneyWrap,
  ContactWrap,
  ContactTile,
  ContactDescription,
  AppLinks,
  AppLink,
  AppStoreLogo,
  GooglePlayLogo,
  MapLogo,
} from "./styles";
import logo from "../../../public/squisito-logo.svg";
import moneylogo from "../../../public/money.svg";
import { menu } from "../../contants/menu";

const HomeLayout = () => {
  return (
    <Layout>
      <Logo>
        <Image src={logo} width={500} height={100} alt="logo" />
      </Logo>
      <Menu>
        <MenuTitle>Our Menu</MenuTitle>
        <MenuGrid>
          {menu.map((item, index) => (
            <MenuItem menuitem={item} key={index} />
          ))}
        </MenuGrid>
      </Menu>
      <ContactWrap>
        <ContactTile>Takeaway</ContactTile>
        <ContactDescription>Contact: +919796944243</ContactDescription>
        <ContactDescription>
          Address: Industrial estate, Baghi Ali Mardan Khan, near DIC Office,
          Srinagar, J&K (190011).
        </ContactDescription>
        <AppLink href="https://maps.app.goo.gl/FwAsTu76aAmDsKpT6">
          <MapLogo />
        </AppLink>
      </ContactWrap>
      <ContactWrap>
        <ContactTile>Delivery</ContactTile>
        <ContactDescription>
          For delivery find us on the Gatoes App.
        </ContactDescription>
        <AppLinks>
          <AppLink href="https://apps.apple.com/in/app/gatoes-food-grocery-delivery/id1519726781">
            <AppStoreLogo />
          </AppLink>
          <AppLink href="https://play.google.com/store/apps/details?id=com.gatoes">
            <GooglePlayLogo />
          </AppLink>
        </AppLinks>
      </ContactWrap>
    </Layout>
  );
};

export default HomeLayout;

const MenuItem = ({ menuitem }) => {
  const [toggle, setToggle] = useState(false);
  function onClick(event) {
    setToggle(!toggle);
  }
  return (
    <>
      <div>
        <MenuItemWrap onClick={onClick}>
          <MenuItemLogo>
            {toggle ? <CloseDescLogo /> : <OpenDescLogo />}
          </MenuItemLogo>
          <MenuItemText>{menuitem.dishname}</MenuItemText>
        </MenuItemWrap>
        {toggle && (
          <MenuDescriptionWrap>
            <ItemDescription>{menuitem.description}</ItemDescription>
            {menuitem.details.map((x, i) => (
              <DetailWrapper key={i}>
                <Detail>{x.size} -</Detail>
                <MoneyWrap>
                  <Image
                    src={moneylogo}
                    width={10}
                    height={10}
                    alt="money-logo"
                  />
                </MoneyWrap>
                <Detail>{x.price}</Detail>
              </DetailWrapper>
            ))}
          </MenuDescriptionWrap>
        )}
      </div>
    </>
  );
};
