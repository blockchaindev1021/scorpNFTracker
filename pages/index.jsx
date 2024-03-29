import NavBar from '@/components/NavBar';
import Particle from '@/components/Particles';
import Why from '@/components/Home/Why';
import Products from '@/components/Home/products';
import Head from 'next/head'
import Timeline from '@/components/Home/Timeline'
import Tokenomics from '@/components/Home/Tokenomics'
import Footer from '@/components/Footer'
import Social from '@/components/Social';
import MainFeatures from '@/components/Home/MainFeatures'
import LogoSlides from '@/components/Home/LogoSlides'
import Contact from '@/components/Home/Contact'
import BuyNow from '@/components/Home/Buy'
import FeaturesSlide from '@/components/Home/SlideFeatures'
import Certificates from '@/components/Home/Certificates'
import TokenFeatures from '@/components/Home/TokenFeatures'
import HowToBuy from '@/components/Home/HowToBuy'


export default function Index() {
  return (
    <>
      <Head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      <title>Scorpion Finance</title>
      </Head>
     <Particle/>
      <NavBar/>      
      <header>
<div
className="top-0 w-full h-full"
style={{
  height:"100vh",
  width:"100%",
  backgroundImage:"url('/img/bg.png')",
  backgroundSize:"cover",
  backgroundPosition:"center"
}}
>
{/* text-3xl font-bold lg:text-5xl text-yellow-500 */}
<section className="absolute z-20 px-10 xl:px-48 lg:px-32 top-52 lg:top-60 lg:flex"
style={{pointerEvents:"none"}}
>
  <div>
  <h2  className="font-extralight" data-aos="fade-right" data-aos-delay="200">WELCOME TO</h2>
  <h1 className="text-2xl font-extrabold gr-text atmos" data-aos="fade-right" data-aos-delay="300">SCORPION FINANCE</h1>
  <p className="lg:w-11/12 text-gray-400" data-aos="fade-right" data-aos-delay="500">
  Scorpion Finance a one stop solution for Portfolio Tracker, NFT Asset Tracker, 
  Swapping, Payment solution and Gaming Platform.
  </p>
  <br />
  <div className="flex flex-wrap-reverse" data-aos="fade-right" data-aos-delay="700">
  <a className=" gr-bg  px-4 py-2 mb-4 rounded mr-2 cursor-pointer"
  href="#buy"
  style={{pointerEvents:"auto"}}
  >BUY</a>
  <a className=" bg-white text-yellow-700 px-4 py-2 mb-4 rounded mr-2  cursor-pointer"
  href="#audit"
  style={{pointerEvents:"auto"}}
  >AUDIT</a>
  
  <a className="bg-transparent px-4 py-2 mb-4 rounded mr-2 text-white border-2 border-white  cursor-pointer"
  href=""
  style={{pointerEvents:"auto"}}
  >LIVE CHARTS</a>
  </div>
  <div className="xl:hidden"  style={{pointerEvents:"auto"}}>
  {/* <Social/> */}
  </div>
 
  


  </div>
 
  <div className="anim-item flex justify-center" >
 
    <img src="/img/scorpfin.png" className="w-8/12 mt-20 lg:mt-0 xl:w-10/12" data-aos="fade-left"  data-aos-delay="500" alt="" />
   
  </div>
 

</section>
</div>
</header>


<MainFeatures/>
<div id="why"></div>
{/* <img src="/img/banner.png" style={{width: "100%",}} alt="" id="why" /> */}
<Why/>
<div id="buy"></div>

<Certificates/>
<BuyNow/>
<FeaturesSlide/>
<div id="products"></div>
<Products/>

<Tokenomics/>
<TokenFeatures/>
<Timeline/>
<HowToBuy/>
<LogoSlides/>
<Contact/>
<Footer/>
    </>
  )
}
