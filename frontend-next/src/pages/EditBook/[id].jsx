import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BookForm from "../../components/BookForm";
import { getBookDetailById } from "../../modules/fetch";
import Navbar from "../../components/Navbar"; 
import styles from "../styles/App.css"; 

export default function EditBook() {
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
    <div className={styles.container}>
    <Navbar />
    <div>
      {book && <BookForm bookData={book} />}
    </div>    
    </div>
  );
}