import Features from "./component/Features"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Picwithdis from "./component/Picwithdis"
import Professors from "./component/Professors"
import Landingpage from "./component/landingpage"

function App() {


  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <Picwithdis/>
      <Professors/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default App
