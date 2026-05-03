import BannerPage from "@/components/homepage/Banner";
import FAQSection from "@/components/homepage/Faq";
import QurbaniTips from "@/components/homepage/QurbaniTips";
import TopAnimals from "@/components/homepage/TopAnimals";

export default function Home() {
  return (
    <>
    <BannerPage/>
    <TopAnimals/>
    <QurbaniTips/>
    <FAQSection/>
    </>
  );
}
