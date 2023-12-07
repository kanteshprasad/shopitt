import React from 'react'
import Svg1 from '../svgs/Svg1'
import Svg2 from '../svgs/Svg2'
import Svg3 from '../svgs/Svg3'
import Svg4 from '../svgs/Svg4'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default function Hero() {
  return (
    <div className='heroContainer'>
      <div className='svgContainer'>
        <Svg1 />

        <h2 data-aos='fade-up' data-aos-duration='400' className='fast'>
          Fast
        </h2>
        <div className='info1'>
          <p data-aos='slide-left' data-aos-duration='1000'>
            <span style={{ fontSize: "70px", fontFamily: "Agbalumo" }}>"</span>
            Experience lightning-fast delivery with Shopitt! Our website is committed to providing swift and efficient service, ensuring your orders reach your doorstep in record time. With a streamlined logistics network, we prioritize speed without compromising on the safety and quality of your products. Shopitt delivers your purchases promptly, making shopping a seamless and enjoyable experience."
          </p>
        </div>
        <div className='break one'></div>

        <Svg2 />

        <h2 data-aos='fade-up' data-aos-duration='400' className='reliable'>
          Reliable
        </h2>
        <div className='info2'>
          <p data-aos='slide-right' data-aos-duration='1000'>
            <span style={{ fontSize: "70px", fontFamily: "Agbalumo" }}>"</span>
            Count on Shopitt for dependable delivery services! Our website takes pride in its commitment to reliability, ensuring your orders are delivered with utmost care and precision. With a trustworthy logistics system, we guarantee a seamless and secure delivery process. Shop with confidence, knowing that Shopitt is dedicated to delivering on time, every time."
          </p>
        </div>
        <div className='break two'></div>

        <Svg3 />
        <h2 data-aos='fade-up' data-aos-duration='400' className='affordable'>
          Affordable
        </h2>
        <div className='info3'>
          <p data-aos='slide-left' data-aos-duration='1000'>
            <span style={{ fontSize: "70px", fontFamily: "Agbalumo" }}>"</span>
            Discover unbeatable affordability at Shopitt! Our website is dedicated to offering budget-friendly options without compromising on quality. With competitive prices and exclusive deals, Shopitt ensures that you get the most value for your money. Enjoy a cost-effective shopping experience with a wide range of products to choose from, all at wallet-friendly prices."
          </p>
        </div>
        <div className='break three'></div>




        <Svg4 />
        <h2 data-aos='fade-up' data-aos-duration='400' className='priority'>
          On priority
        </h2>
        <div className='info4'>
          <p data-aos='slide-right' data-aos-duration='1000'>
            <span style={{ fontSize: "70px", fontFamily: "Agbalumo" }}>"</span>
            Elevate your shopping experience with Shopitt's On-Priority Service! Our website is committed to prioritizing your needs, ensuring that your orders receive immediate attention. With expedited processing and swift dispatch, we prioritize your satisfaction. Shopitt's On-Priority Service guarantees that your purchases are handled with the urgency and care they deserve for a seamless shopping experience."
          </p>
        </div>
        <div className='break four'></div>
      </div>
      
    </div>
  );
}
