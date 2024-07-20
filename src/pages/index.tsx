import Image from "next/image";
import Link from 'next/link';
import Header from "./header";
import Banner from "./home/banner";
import Features from "./home/features";
import TransformingOperations from "./home/transformingOperations";
import Industries from "./home/industries";
import PrefferedPartner from "./home/prefferedPartner";
import Scheduling from "./home/scheduling";
import FooterVersionSecond from "./footerv2";


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
      <Industries />

      {/* preffered Partner */}
      <PrefferedPartner />

      {/* Scheduling a meeting */}
      <Scheduling />

      {/* Footer */}
      <FooterVersionSecond />

    </div>
  );
}