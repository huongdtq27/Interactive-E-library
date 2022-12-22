const Book = ({ bookDetail, extraButton }) => {
  return (
    <div className="flex mt-[20px] max-w-[500px] p-[10px] border-solid border-[1px] text-justify m-[auto] dark:bg-teal-900">
      <div>
        <img src={bookDetail.img} className="max-w-[100px]" />
      </div>
      <div className="ml-4">
        <div className="font-bold dark:text-blue-200">{bookDetail.title}</div>
        <div className="italic dark:text-blue-200">{bookDetail.author}</div>
        <div className="dark:text-blue-200">{bookDetail.overview}</div>

        {extraButton}
      </div>
    </div>
  );
};

export default Book;
