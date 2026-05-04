import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outfit } from "next/font/google";

  const outfit = Outfit({
    subsets: ["latin"]
  })



const AuthLayout = ({ children }) => {

  return (
    <div className={`${outfit.className}`}>
      <Navbar/>

      <main>
        {children}
      </main>

      <Footer/>

    </div>
  );
};

export default AuthLayout;