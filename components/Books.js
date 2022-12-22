import { useRouter } from "next/router";
import { memo } from "react";
import Book from "../components/Book";

const Books = ({ data, searchString }) => {
  const router = useRouter();

  const lowerCaseSearchString = searchString && searchString.toLowerCase();
  const searchedData = searchString
    ? data.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerCaseSearchString) ||
          item.author.toLowerCase().includes(lowerCaseSearchString)
      )
    : data;

  const renderDetailButton = (bookItem) => (
    <button
      className="bg-[cornflowerblue] mt-[5px] capitalize text-white dark:text-black rounded-[3px] p-[6px]"
      onClick={() => {
        router.push(`book/${bookItem.title}`);
      }}
    >
      Visit website
    </button>
  );

  return (
    <div>
      {searchedData.map((bookItem, index) => (
        <Book
          key={`book-${index}`}
          bookDetail={bookItem}
          extraButton={renderDetailButton(bookItem)}
        />
      ))}
    </div>
  );
};

export default memo(Books);
