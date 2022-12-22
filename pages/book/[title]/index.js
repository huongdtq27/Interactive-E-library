import { useRouter } from "next/router";
import Book from "../../../components/Book";
import bookData from "../../../data/books.json";

const BookDetail = () => {
  const router = useRouter();
  const { title } = router.query;
  const bookDetail = bookData.find((item) => item.title === title);

  const renderGoBackButton = () => (
    <button
      className="bg-[cornflowerblue] mt-[5px] capitalize text-white dark:text-black rounded-[3px] p-[6px]"
      onClick={() => {
        router.back();
      }}
    >
      Go Back
    </button>
  );

  return (
    <>
      {bookDetail ? (
        <Book bookDetail={bookDetail} extraButton={renderGoBackButton()} />
      ) : null}
    </>
  );
};

export default BookDetail;
