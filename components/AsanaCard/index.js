import styled from "styled-components";
import Image from "next/image";

export default function AsanaCard({asana, favorites, setFavorites, reloader}) {
  return (
    <Article>
      <TextContainer>
        <StyledImage
          src={asana.image}
          alt={`yoga pose: ${asana.sanskrit}`}
          width="150"
          height="250"
        />
        <StyledName>{asana.name}</StyledName>
        <StyledSanskrit>{asana.sanskrit}</StyledSanskrit>
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
        <Button
          onClick={() => {
            setFavorites([...favorites, asana.id]);
            reloader();
          }}
        >
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

const Article = styled.section`
  border-radius: 75px;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.49);
  margin: 1rem auto 0 auto;
  width: 75%;
  height: 100%;
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  color: lightblue;
`;

const StyledName = styled.p`
  font-family: FarmWaveFree-Regular;
  font-size: 2rem;
  color: #fff;
`;

const StyledImage = styled(Image)`
  width: 100%;
  min-height: 20vh;
  max-height: 100%;
  ${props => `background-image:url(${props.a});`}
  background-position:center;
  background-repeat: no-repeat;
`;
