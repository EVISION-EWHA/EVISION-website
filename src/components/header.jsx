import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = ({ isLogin, setIsLogin }) => {
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
              <NavStyle to={m.link}>
                <Menu>{m.name}</Menu>
              </NavStyle>
            ))}
          </MenusBlock>
          <LoginButton>
            <NavStyle
              exact
              style={{
                position: "absolute",
                right: 0,
                marginRight: "30px",
              }}
              to="/login"
            >
              Login
            </NavStyle>
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
  { name: "Board", link: "/borad" },
  { name: "Admin", link: "/admin" },
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

const NavStyle = styled(NavLink)`
  color: gray;
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: white;
  }
  &.active {
    color: white;
    position: relative;
  }
`;

const Menu = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
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
