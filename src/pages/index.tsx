import Image from "next/image";
import Link from 'next/link';
import Header from "./header";
import Banner from "./banner";


export default function Home() {
  return (
    <div className="main">

      {/* -- Header -- */}
      <Header />

      {/* -- Banner -- */}
      <Banner />

    </div>
  );
}