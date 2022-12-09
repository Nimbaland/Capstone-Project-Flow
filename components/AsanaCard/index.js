import styled from "styled-components";

export default function AsanaCard({asana}) {
  return (
    <Article>
      <TextContainer>
        <StyledImage src={asana.image} alt={`yoga pose: ${asana.sanskrit}`} />
        <StyledSanskrit>{asana.sanskrit}</StyledSanskrit>
        <StyledSanskrit>{asana.sanskrit2}</StyledSanskrit>
      </TextContainer>
      <ButtonContainer>
        <Button>
          <StyledImage
            src="/Images/noun-close-1386186.svg"
            width="40"
            height="40"
            alt="close"
          />
        </Button>
        <Button>
          <StyledImage
            src="/Images/noun-check-mark-1550146.svg"
            width="40"
            height="40"
            alt="checkmark"
          />
        </Button>
      </ButtonContainer>
    </Article>
  );
}

const Article = styled.article`
  border-radius: 75px;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.49);
  margin: 1rem auto 0 auto;
  width: 75%;
  height: 75vh;
  display: flex;
  text-align: center;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border: 1px solid rgba(255, 255, 255, 0.49);
  margin: 20% auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
`;

const StyledSanskrit = styled.p`
  font-size: 0.75rem;
  color: lightblue;
`;

const StyledImage = styled.img`
  height: 70vh;
`;
