import styled from "styled-components";
import Image from "next/image";
import Check from "../../public/Images/noun-check-mark-1550146.svg";
import Close from "../../public/Images/noun-close-1386186.svg";

export default function AsanaCard({asana}) {
  return (
    <Article>
      <StyledImage
        width="200"
        height="600"
        src={asana.image}
        alt={`yoga pose: ${asana.sanskrit}`}
        priority
      />
      <StyledAsanaCard>{AsanaCard}</StyledAsanaCard>
      <StyledSanskrit>{asana.sanskrit}</StyledSanskrit>
      <StyledSanskrit>{asana.sanskrit2}</StyledSanskrit>
      <ButtonContainer>
        <Button>
          <Image
            style={{position: "relative", top: "8px"}}
            src={Close}
            width="40"
            height="40"
            alt={"close"}
          />
        </Button>
        <ButtonContent></ButtonContent>
        <Button>
          <Image
            style={{position: "relative", top: "8px"}}
            src={Check}
            width="40"
            height="40"
            alt={"checkmark"}
          />
        </Button>
      </ButtonContainer>
    </Article>
  );
}

const StyledAsanaCard = styled.article`
  margin: 0;
  margin-top: 10px;
`;

const StyledImage = styled(Image)`
  padding: 18rem 1rem 0 1rem;
  width: 300px;
`;
const Article = styled.article`
  border-radius: 75px;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.49);
  text-align: center;
  margin: 1rem auto 0 auto;
  width: 75%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;

const Button = styled.div`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin: 0px 35px;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border: 1px solid rgba(255, 255, 255, 0.49);
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 15px;
  margin-bottom: 50px;
`;

const ButtonContent = styled.div``;

const StyledSanskrit = styled.span`
  font-size: 12px;
  color: lightblue;
  padding-bottom: 20px;
`;
