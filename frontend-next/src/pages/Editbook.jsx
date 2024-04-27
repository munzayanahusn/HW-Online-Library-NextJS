import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BookForm from "../components/BookForm";
import { getBookDetailById } from "../modules/fetch";

export default function EditBookPage() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response);
      } catch (e) {
        console.log(e);
      }
    };
    if (id) {
      fetchBook();
    }
  }, [id]);

  return (
    <div>
      {book && <BookForm bookData={book} />}
    </div>
  );
}