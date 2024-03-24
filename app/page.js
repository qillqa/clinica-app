import Image from "next/image";

import HeaderLanding from "@/components/HeaderLanding";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <HeaderLanding />
      <main>
        <Hero />
      </main>
    </>
  );
}
