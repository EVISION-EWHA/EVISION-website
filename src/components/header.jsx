import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = ({ isLogin, setIsLogin }) => {
  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  if (localStorage.getItem("grade") === "5") {
    //로그인 & admin
    return (
      <>
        <HeaderBlock>
          <Wrapper>
            <Logo>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                to="/"
              >
                EVI$ION
              </NavLink>
            </Logo>
            <MenusBlock>
              {menus.map((m) => (
                <NavStyle key={m.link} to={m.link}>
                  <Menu key={m.link}>{m.name}</Menu>
                </NavStyle>
              ))}
              <NavStyle to="/admin">
                <Menu>Admin</Menu>
              </NavStyle>
            </MenusBlock>
            <LoginBlock>
              <NavStyle to={"/mypage"}>
                <Menu>MyPage</Menu>
              </NavStyle>
              <LoginButton onClick={logout}>
                <StLogout to={"/"}>
                  <Menu>Logout</Menu>
                </StLogout>
              </LoginButton>
            </LoginBlock>
          </Wrapper>
        </HeaderBlock>
        <Spacer />
      </>
    );
  } else if (localStorage.getItem("grade") === "1") {
    //로그인 & adminX
    return (
      <>
        <HeaderBlock>
          <Wrapper>
            <Logo>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                to="/"
              >
                EVI$ION
              </NavLink>
            </Logo>
            <MenusBlock>
              {menus.map((m) => (
                <NavStyle key={m.link} to={m.link}>
                  <Menu key={m.link}>{m.name}</Menu>
                </NavStyle>
              ))}
            </MenusBlock>
            <LoginBlock>
              <NavStyle to={"/mypage"}>
                <Menu>MyPage</Menu>
              </NavStyle>
              <LoginButton onClick={logout}>
                <StLogout to={"/"}>
                  <Menu>Logout</Menu>
                </StLogout>
              </LoginButton>
            </LoginBlock>
          </Wrapper>
        </HeaderBlock>
        <Spacer />
      </>
    );
  } else {
    return (
      <>
        <HeaderBlock>
          <Wrapper>
            <Logo>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                to="/"
              >
                EVI$ION
              </NavLink>
            </Logo>
            <MenusBlock>
              {menus.map((m) => (
                <NavStyle key={m.link} to={m.link}>
                  <Menu key={m.link}>{m.name}</Menu>
                </NavStyle>
              ))}
            </MenusBlock>
            <LoginBlock>
              <NavStyle to={"/signup"}>
                <Menu>Signup</Menu>
              </NavStyle>
              <NavStyle to={"/login"}>
                <Menu>Login</Menu>
              </NavStyle>
            </LoginBlock>
          </Wrapper>
        </HeaderBlock>
        <Spacer />
      </>
    );
  }
};

export default Header;

const menus = [
  { name: "Curriculum", link: "/curriculum" },
  { name: "Recruit", link: "/recruit" },
  { name: "Board", link: "/board" },
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
const LoginBlock = styled.div`
  position: absolute;
  right: 0;
  padding-right: 3rem;
  display: flex;
  align-items: center;
`;
const LoginButton = styled.button`
  font-size: 30px;
  display: flex;
`;

const StLogout = styled(NavLink)`
  color: gray;
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: white;
  }
`;

const Spacer = styled.div`
  height: 11.5rem;
`;
