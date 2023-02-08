import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Logo>
            <NavLink
              style={{ color: "white", textDecoration: "none" }}
              to="/main"
            >
              EVI$ION
            </NavLink>
          </Logo>
          <MenusBlock>
            {menus.map((m, index) => (
              <NavLink
                style={{ color: "gray", textDecoration: "none" }}
                to={m.link}
                key={index}
                // activeStyle={{ color: "green" }}
              >
                <Menu>{m.name}</Menu>
              </NavLink>
            ))}
          </MenusBlock>
          <LoginButton>
            <NavLink
              exact
              style={{
                color: "gray",
                textDecoration: "none",
                position: "absolute",
                right: 0,
                marginRight: "30px",
              }}
              // className={({ isActive }) => {
              //   return isActive ? "green" : "";
              // }}
              to="/login"
            >
              Login
            </NavLink>
          </LoginButton>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;

const menus = [
  { name: "Curriculum", link: "/curriculum" },
  { name: "Recruit", link: "/recruit" },
  { name: "Notice", link: "/notice" },
];

const Logo = styled.div`
  font-size: 40px;
  color: white;
`;

const HeaderBlock = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  background: black;
  z-index: 10;
  padding-left: 3rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

const Wrapper = styled.div`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenusBlock = styled.div`
  padding-left: 4rem;
  display: flex;
`;

const Menu = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  padding-left: 3rem;
`;

const LoginButton = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
`;

const Spacer = styled.div`
  height: 11.5rem;
`;
