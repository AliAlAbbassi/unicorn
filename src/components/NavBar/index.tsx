import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  useMediaQuery
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Option, LastOption, Logo, MenuItemStyled, NavContainer, SecondContainer, ShadowBox, ShadowBoxII } from "./styled";

interface NavBarProps { }

const NavBar: React.FC<NavBarProps> = ({ }) => {
  const router = useRouter();
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  return (
    <NavContainer>
      <Logo onClick={() => router.push("/")}>Home</Logo>
      {isLargerThan1280 ? (
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
      ) : (
        <SecondContainer>
          <Menu>
            <MenuButton as={Option} onClick={() => router.push('/notifications')}>Notification</MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={LastOption} onClick={() => router.push('/user-profile')}>User</MenuButton>
          </Menu>
        </SecondContainer>
      )}
    </NavContainer >
  )
};


export default NavBar;
