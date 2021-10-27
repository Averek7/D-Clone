import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="" />
      </Logo>
      <Login>Sign-In</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 15px;
  padding: 0px 20px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: ;
  max-height: 60px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const Login = styled.a `
  background-color:rgba(0,0,0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 7px;
  transition: all 0.2s ease 0s;

  &:hover { 
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
export default Header;
