import Header from "./components/Header"
import SectionCards from "@/components/SectionCards"

import SectionButtons from "@/components/SectionButtons"
import ImputSection from "@/components/ImputSection"
// import { Fragment } from "react" анаог обгортки <></>




export default function App() {
  return(
    <> 
    {/* //  <Fragment> -  анаог обгортки <></>    */}
      <div className="container">
          <Header />
        <main>
          <SectionCards />
          <SectionButtons />
          <ImputSection />
        </main>
      </div>
    {/* </Fragment> */}
    </>
  )
}
