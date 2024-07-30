import Image from "next/image";
import Link from 'next/link';
import Head from "next/head";
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

      <Head>
        <title>Next Generation AI Solutions for Your Business | Shodat AI</title>
        <meta name="title" content="Next Generation AI Solutions for Your Business | Shodat AI" />
        <meta name="description" content="Discover cutting-edge AI solutions to drive innovation and growth in your business with Shodat AI" />
        <meta name="keywords" content="AI solutionsData AnalyticsData-driven insightsBusiness transformation" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>

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