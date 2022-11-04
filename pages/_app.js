import '../styles/globals.css'
import Navbar from './components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#16182b] h-[100vh] text-[#ddd]">
      <Navbar />
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp
