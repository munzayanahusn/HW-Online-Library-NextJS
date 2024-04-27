import React from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import BookDetails from "./BooksDetail";
import EditBookPage from "./EditBook";
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
      {router.pathname === "/" && <Homepage />}
      {router.pathname === "/register" && <Register />}
      {router.pathname === "/newbooks" && <NewBookPage />}
      {router.pathname.startsWith("/books/") && <BookDetails />}
      {router.pathname.startsWith("/editbooks/") && <EditBookPage />}
    </div>
  );
}
