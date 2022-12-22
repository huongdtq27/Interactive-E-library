import SearchIcon from "@mui/icons-material/Search";

const SearchBooks = ({ handleSearch, inputRef }) => {
  return (
    <div className="text-right mr-[50px]">
      <input
        type="text"
        className="border-solid border-[1px] mr-[10px] h-[40px] p-[5px] w-[300px] rounded-[5px]"
        ref={inputRef}
      />
      <span onClick={handleSearch} className="cursor-pointer">
        <SearchIcon /> Search
      </span>
    </div>
  );
};

export default SearchBooks;
