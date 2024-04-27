import Navbar from "../components/Navbar";
import "../App.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen min-w-full">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;