import styled from "styled-components";
import flowLogo from "/public/Images/0_YogaFlow_Logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <HeaderContainer>
      <YogaFlowLogo
        src={flowLogo}
        width="120"
        height="120"
        alt={"0_YogaFlowLogo"}
      />
    </HeaderContainer>
  );
}
const YogaFlowLogo = styled(Image)`
  display: grid;
  padding: 1rem;
  width: 100%;
  place-content: center;
`;

const HeaderContainer = styled.header`
  display: grid;
  place-content: center;
`;
