import BookForm from "../components/BookForm";
import Navbar from "../components/Navbar"; 

export default function NewBookPage() {
  return (
    <>
    <Navbar />
    <div>
      <BookForm />
    </div>
    </>
  );
}