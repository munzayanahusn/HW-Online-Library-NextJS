import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import BookDetails from "./BooksDetail";
import EditBookPage from "./Editbook";
import Homepage from "./Homepage";
import NewBookPage from "./NewBooks";
import Register from "./Register";
import styles from "./styles/App.css"; 

export default function App() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      {router.pathname === "/homepage" && <Homepage />}
      {router.pathname === "/register" && <Register />}
      {router.pathname === "/newbook" && <NewBookPage />}
      {router.pathname.startsWith("/books/") && <BookDetails />}
      {router.pathname.startsWith("/editbook/") && <EditBookPage />}
    </div>
  );
}
