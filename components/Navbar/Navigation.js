import styled from "styled-components";
import Link from "next/link";
import {useState} from "react";

export default function Navigation() {
  const [pageState, setPageState] = useState("dashboard");
  return (
    <Navbar>
      <Navlist>
        <NavItem>
          <NavLink href="/">
            <NavIcon src="/Images/index_icon_navbar.svg" />
            <HomeContainer
              pageState={pageState}
              onClick={() => setPageState("index_icon_navbar.svg")}
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/flowdeck">
            <NavIcon src="/Images/flowdeck_icon_navbar.svg" />
            <homeNavbar
              pageState={pageState}
              onClick={() => setPageState("flow_icon_navbar.svg")}
            />
          </NavLink>
        </NavItem>
      </Navlist>
    </Navbar>
  );
}

const NavLink = styled(Link)`
  height: 100%;
`;
const Navbar = styled.nav`
  width: 80vw;
  height: 50px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  box-sizing: border-box;

  position: fixed;
  bottom: 30px;
  right: 10%;
  left: 10%;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const Navlist = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;
  padding: 2rem;
  margin: 0;
`;

const NavItem = styled.li`
  list-style-type: none;
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeContainer = styled.p`
  border-radius: 50px;
  padding: 22px;
  box-sizing: content-box;
  color: black;
  font-size: 1.2rem;
  ${props =>
    props.pageState === "index"
      ? "background-color: rgba(255,165,0, 0.9); color:white; border: 1px solid rgba(255,165,255, 1.0);"
      : " "};
`;
// const ClipBoard = styled(FaClipboardList)`
//   border-radius: 50px;
//   padding: 22px;
//   box-sizing: content-box;
//   color: black;
//   font-size: 1.2rem;

//   ${props =>
//     props.pageState === "projects"
//       ? "background-color: rgba(255,165,0, 0.9); color:white; border: 1px solid rgba(255,165,255, 1.0);"
//       : " "};
// `;
// const Profile = styled(FaUser)`
//   border-radius: 50px;
//   padding: 22px;
//   box-sizing: content-box;
//   color: black;
//   font-size: 1.2rem;
//   ${props =>
//     props.pageState === "profile"
//       ? "background-color: rgba(255,165,0, 0.9); color:white; border: 1px solid rgba(255,165,255, 1.0);"
//       : " "};
