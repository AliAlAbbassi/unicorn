import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();

  return (
    <NavContainer>
      <Logo onClick={() => router.push("/")}>Home</Logo>
      <SecondContainer>
        <Menu>
          <MenuButton as={Option}>Notification</MenuButton>
          <MenuList>
            <ShadowBoxII>
              <MenuItemStyled>Empty</MenuItemStyled>
            </ShadowBoxII>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={LastOption}>User</MenuButton>
          <MenuList>
            <ShadowBox>
              <MenuGroup title="Profile">
                <MenuItemStyled>My Account</MenuItemStyled>
              </MenuGroup>
            </ShadowBox>
          </MenuList>
        </Menu>
      </SecondContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div({
  display: "flex",
  fontFamily: "Segoe UI",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0px 25px",
  height: "60px",
});

const Logo = styled.p({
  fontSize: "45px",
  color: "black",
  fontWeight: "bold",
  textShadow: "0px 2px 2px white",
  textDecoration: "none",
  cursor: "pointer",
});

const SecondContainer = styled.div({
  display: "flex",
});

const Option = styled.p`
  margin-right: 20px;
  font-size: 20px;
  color: #242424;
  text-decoration: none;
  cursor: pointer;
`;

const ShadowBox = styled.div({
  boxShadow: "0 0px 5px rgb(0 0 0 / 0.2)",
  padding: "0.1px 13px 13px 13px",
  borderRadius: "5px",
});

const ShadowBoxII = styled.div({
  boxShadow: "0 0px 5px rgb(0 0 0 / 0.2)",
  padding: "10px",
  borderRadius: "5px",
});

const LastOption = styled.p({
  fontSize: "20px",
  color: "#242424",
  cursor: "pointer",
  textDecoration: "none",
});

const MenuItemStyled = styled(MenuItem)`
  background-color: white;
  border: none;
`;

export default NavBar;
