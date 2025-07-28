import styled from "styled-components";
import { useRef, useEffect } from "react";

const MainDiv = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background-color: ${(props) => props.theme.background};
  @media (min-width: 320px) {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 20px;
  }
  @media (min-width: 960px) {
    align-items: center;
    flex-direction: row;
    margin-top: 30px;
  }
`;

const SearchInput = styled.input`
  margin-left: 48px;
  border: none;
  box-shadow: 0 0 5px 0 ${(props) => props.theme.shadow};
  padding: 12px 140px 12px 55px;
  color: ${(props) => props.theme.texts};
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  border-radius: 5px;
  background-color: ${(props) => props.theme.elements};
  :focus {
    outline: 0;
  }
  ::placeholder {
    color: ${(props) => props.theme.texts};
    font-family: "Nunito Sans", sans-serif;
  }
  @media (min-width: 320px) {
    margin: 0 20px;
    width: 90vw;
  }
  @media (min-width: 375px) {
    margin: 0 45px;
    width: 75vw;
  }
  @media (min-width: 425px) {
    margin: 0 70px;
    width: 67vw;
  }
  @media (min-width: 768px) {
    margin: 0 50px;
    width: 87vw;
  }
  @media (min-width: 960px) {
    width: 35vw;
    margin: 0 20px 0 95px;
    padding: 16px 140px 16px 55px;
  }
  @media (min-width: 1024px) {
    width: 35vw;
    margin: 0 20px;
  }
  @media (min-width: 1440px) {
    width: 35vw;
    margin: 0 30px;
  }
`;

const SearchIcon = styled.i`
  position: absolute;
  color: ${(props) => props.theme.texts};
  font-size: 15px;
  left: 70px;
  @media (min-width: 320px) {
    top: 112px;
    left: 40px;
  }
  @media (min-width: 375px) {
    left: 65px;
  }
  @media (min-width: 425px) {
    left: 90px;
  }
  @media (min-width: 768px) {
    left: 70px;
  }
  @media (min-width: 960px) {
    top: 150px;
    left: 115px;
  }
  @media (min-width: 1024px) {
    left: 35px;
  }
  @media (min-width: 1440px) {
    left: 50px;
  }
`;

function Navbar({ urlSearchCreator }) {
  const inputRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputRef.current?.value) {
        urlSearchCreator(inputRef.current.value);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    // Debounce inside onChange
    clearTimeout(inputRef.current?.timer);
    inputRef.current.timer = setTimeout(() => {
      urlSearchCreator(value);
    }, 800);
  };

  return (
    <MainDiv>
      <SearchInput
        type="text"
        ref={inputRef}
        onChange={handleChange}
        placeholder="Search for a movie..."
      />
      <SearchIcon className="fas fa-search" />
    </MainDiv>
  );
}

export default Navbar;
