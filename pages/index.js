import { useRef, useState } from "react";
import Books from "../components/Books";
import Layout from "../components/Layout";
import SearchBooks from "../components/SearchBooks";
import data from "../data/books.json";
const Home = () => {
  const [searchString, setSearchString] = useState("");
  const inputRef = useRef(null);
  const handleSearch = () => {
    if (inputRef.current) {
      setSearchString(inputRef.current.value.trim());
    }
  };
  return (
    <Layout>
      <SearchBooks inputRef={inputRef} handleSearch={handleSearch} />
      <Books data={data} searchString={searchString} />
    </Layout>
  );
};

export default Home;
