import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div  >
          <Navbar />
          <Hero />
        </div>
        {/* <StarsCanvas /> */}
        <About />
        {/* <Experience /> */}
        <br />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          
        </div>
        <div className='bg-primary text-white py-6 mt-10'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
