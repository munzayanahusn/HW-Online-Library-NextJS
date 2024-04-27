import BookForm from "../components/BookForm";
import Navbar from "../components/Navbar"; 
import styles from "./styles/App.css"; 

export default function NewBookPage() {
  return (
    <div className={styles.container}>
    <Navbar />
    <div>
      <BookForm />
    </div>
    </div>
  );
}