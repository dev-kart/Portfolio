import type { Metadata } from "next";
import Header from "./../components/Header";
import Hero from "./../components/Hero";

export const metadata: Metadata = {
  title: "Template",
  description:
    "..."
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
