import Camp from "./components/Camp";
import Features from "./components/Features";
import GetApp from "./components/GetApp";
import Guide from "./components/Guide";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero/>
      <Camp/>
      <Guide/>
      <Features/>
      <GetApp/>
    </>
  )
}
//we have to start with a navigation bar and then move to the 
//hero section 