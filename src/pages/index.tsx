import Image from "next/image";
import Link from 'next/link';
import Header from "./header";
import Banner from "./banner";
import Features from "./features";
import TransformingOperations from "./transformingOperations";
import Industries from "./industries";
import PrefferedPartner from "./prefferedPartner";
import Scheduling from "./scheduling";
import Footer from "./footer";
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