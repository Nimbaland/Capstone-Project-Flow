//import Image from "next/image";
import styled from "styled-components";

export default function AsanaCard({asana}) {
  console.log(asana.image);
  return (
    <article>
      <TheImage
        width={2000}
        height={5000}
        src={asana.image}
        alt={`yoga pose: ${asana.name}`}
        priority
      />
      <StyledAsanaCard>{AsanaCard}</StyledAsanaCard>
      <h2>{asana.name}</h2>
    </article>
  );
}

const StyledAsanaCard = styled.article`
  margin: 0;
  padding: 3rem 3rem 3rem 3rem;
  min-height: calc(100vh - 8rem);
  margin-top: 0;
  //background-color: lightcyan;
`;

const TheImage = styled.img`
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 120px;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.45);
  width: 600px;
  height: 1000px;
  margin: 45%;
`;
