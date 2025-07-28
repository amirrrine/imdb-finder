import styled from "styled-components";

const HeaderDiv = styled.footer`
    width: 100%;
    height: 5em;
    transition: background-color 0.15s ease-in-out;
    background-color: ${(props) => props.theme.elements};
    box-shadow: 0 1px 5px 0 ${(props) => props.theme.shadow};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -120px;
    color: ${(props) => props.theme.texts};
    @media (min-height: 1067px) and (min-width: 1024px) {
      position: fixed;
      bottom: 0;
    }
    @media (min-height: 1006px) and (min-width: 1840px) {
      position: fixed;
      bottom: 0;
    }
    @media (min-height: 700px) and (min-width: 1920px) {
      position: fixed;
      bottom: 0;
    }
  `,
  Title = styled.div`
    font-weight: 800;
    font-size: 1.1em;
    transition: color 0.15s ease-in-out;
    text-transform: uppercase;
    cursor: pointer;
    margin-bottom: 5px;
  `,
  Line = styled.span`
    margin: 0 10px;
    cursor: pointer;
  `,
  StyledSpan = styled.div`
    text-transform: uppercase;
    pointer-events: none;
  `;

function Header() {
  return (
    <>
      <HeaderDiv>
        <Title>
          Amirr Ghasemi
          <Line></Line>
        </Title>
        <StyledSpan>pop that s*</StyledSpan>
      </HeaderDiv>
    </>
  );
}

export default Header;
