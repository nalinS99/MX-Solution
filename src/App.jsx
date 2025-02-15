
import React ,{Suspense ,lazy} from "react";
const TopNavigation = lazy(() => import("./components/TopNavigation"));
const Hero = lazy(() => import("./components/Hero"));
const Services = lazy(() => import("./components/Services"));
const FAQs = lazy(() => import("./components/FAQs"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TopNavigation />
      <Hero />
      <Services />
      <FAQs />
      <Footer />
    </Suspense>
  );
}

export default App;
