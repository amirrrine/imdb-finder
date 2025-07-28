import styled from "styled-components";
import Loader from "./loader";
const MovieDiv = styled.div`
    box-shadow: 0 1px 5px 0 ${(props) => props.theme.shadow};
    background-color: ${(props) => props.theme.elements};
    color: ${(props) => props.theme.texts};
    cursor: pointer;
    @media (min-width: 320px) {
      width: 280px;
      margin-top: 30px;
    }
    @media (min-width: 960px) {
      width: 280px;
      margin-top: 30px;
    }
    @media (min-width: 1024px) {
      width: 210px;
    }
    @media (min-width: 1250px) {
      width: 250px;
    }
    @media (min-width: 1440px) {
      width: 300px;
      height: 330px;
    }
    @media (min-width: 1750px) {
      width: 200px;
      height: 290px;
    }
  `,
  Pics = styled.img`
    @media (min-width: 320px) {
      width: 280px;
    }
    @media (min-width: 1024px) {
      width: 210px;
    }
    @media (min-width: 1250px) {
      width: 250px;
    }
    @media (min-width: 1440px) {
      width: 300px;
      height: 150px;
    }
    @media (min-width: 1750px) {
      width: 200px;
      height: 120px;
    }
  `,
  MovieName = styled.h3`
    margin: 15px 0 10px 20px;
  `,
  StyledP = styled.p`
    margin: 0 0 5px 20px;
    font-weight: 600;
    font-size: 14px;
  `,
  StyledSpan = styled.span`
    margin: 0 0 5px 4px;
    font-weight: 400;
  `,
  Link = styled.a`
    width: 255px;
    height: 300px;
    margin: 0 48px 80px 48px;
    @media (min-width: 320px) {
      margin: 0 20px 30px 20px;
      width: 280px;
    }
    @media (min-width: 960px) {
      margin: 0 48px 30px 48px;
    }
    @media (min-width: 1024px) {
      margin: 0 20px 30px 20px;
      width: 210px;
    }
    @media (min-width: 1250px) {
      margin: 0 25px 30px 25px;
      width: 250px;
    }
    @media (min-width: 1440px) {
      margin: 0 25px 30px 25px;
      width: 300px;
      height: 330px;
    }
    @media (min-width: 1750px) {
      margin: 0 15px 30px 15px;
      width: 200px;
      height: 290px;
    }
  `;
function Items({ data, loading, theme }) {
  if (loading) {
    return <Loader theme={theme} />;
  }

  return (
    <>
      {data.map((item) => (
        <Link href={`https://www.imdb.com/title/${item.id}/`} key={item.id}>
          <MovieDiv
            className="    width: 355px;
    height: 400px;">
            <Pics
              alt="poster"
              src={item.primaryImage?.url || " "}
              width={item.primaryImage?.width}
              height={item.primaryImage?.height}
            />
            <MovieName>{item?.primaryTitle}</MovieName>
            <StyledP>
              Type:<StyledSpan>{item?.type}</StyledSpan>
            </StyledP>
            <StyledP>
              Year:<StyledSpan>{item?.startYear}</StyledSpan>
            </StyledP>
            <StyledP>
              Rating:
              <StyledSpan>{item.rating?.aggregateRating ?? "N/A"}</StyledSpan>
            </StyledP>
          </MovieDiv>
        </Link>
      ))}
    </>
  );
}

export default Items;
