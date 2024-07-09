import Image from "next/image";
import Link from 'next/link';
import Header from "./header";
import Banner from "./banner";
import Features from "./features";
import TransformingOperations from "./transformingOperations";
import Slider from "./sliders";
import PrefferedPartner from "./prefferedPartner";
import Scheduling from "./scheduling";
import Footer from "./footer";


export default function Home() {
  return (
    <div className="main">

      {/* -- Header -- */}
      <Header />

      {/* -- Banner -- */}
      <Banner />

      {/* -- Features -- */}
      <Features />

      {/* -- Transforming Operations -- */}
      <TransformingOperations />

      {/* Shodat X */}
      <Slider />

      {/* preffered Partner */}
      <PrefferedPartner />

      {/* Scheduling a meeting */}
      <Scheduling />

      {/* Footer */}
      <Footer />

    </div>
  );
}