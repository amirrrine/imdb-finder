import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Items from "./items";
import Navbar from "./navbar";
import Footer from "./footer";
import Pagination from "./pagination";

const MainDiv = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${(props) => props.theme.background};
  overflow-x: hidden;
`;

function Main({ theme }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [query, setQuery] = useState(" "); // default search
  const [baseUrl, setBaseUrl] = useState(
    `https://api.imdbapi.dev/search/titles`
  );

  const urlSearchCreator = (searchTerm) => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      setQuery(trimmed);
      setBaseUrl(
        `https://api.imdbapi.dev/search/titles?query=${encodeURIComponent(
          trimmed
        )}`
      );
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await axios.get(baseUrl);
        setData(res.data.titles || []);
      } catch (err) {
        console.warn("Fetch error:", err);
        setData([]);
      }
      setLoading(false);
    };

    fetchMovies();
  }, [baseUrl]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(0, postsPerPage);

  const paginate = () => {
    setPostsPerPage((prev) => prev + 8);
  };

  return (
    <>
      {!loading && <Navbar urlSearchCreator={urlSearchCreator} theme={theme} />}
      <MainDiv>
        <Items theme={theme} data={currentPosts} loading={loading} />
      </MainDiv>
      {!loading &&
        currentPosts.length >= 8 &&
        currentPosts.length < data.length && (
          <Pagination
            theme={theme}
            paginate={paginate}
            totalPosts={data.length}
          />
        )}
      {!loading && <Footer />}
    </>
  );
}

export default Main;
