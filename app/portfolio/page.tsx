'use client'

import styles from './portfolio.module.css'

import Image from "next/image";


export default function Page() {
  return (
    <>
      <div className="m-20 animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-16">


        <PortfolioImage imagesrc='1new.jpg' descr='Ashley Wild Bridal x Zach & Grace Studio' />
        <PortfolioImage imagesrc='2.jpg' descr='Ashley Wild Bridal x Zach & Grace Studio' />
        <PortfolioImage imagesrc='3.jpg' descr='Ashley Wild Bridal x Zach & Grace Studio' />
        <PortfolioImage imagesrc='4.jpg' descr='Ashley Wild Bridal x Zach & Grace Studio' />
        <PortfolioImage imagesrc='5.jpg' descr='Ashley Wild Bridal x Zach & Grace Studio' />
        <PortfolioImage imagesrc='6.jpg' descr='Ashley Wild Bridal x Zach & Grace Studio' />


      </div>



    </>
  );
}


export function PortfolioImage({ imagesrc, descr }: { imagesrc: string, descr: string }) {

  function showPopup() {
    alert('Click to view a larger image or to download this image, right click and select "Open image in new tab".');
  };

  return <div className="relative animate-fade-in">
    <div className='aspect-square absolute top-0 left-0 w-full opacity-0 bg-white hover:opacity-45'>
      <p className='text-center text-4xl inline-block align-middle'><br />{descr}</p></div>
    <Image src={imagesrc ? `/portfolio/${imagesrc}` : '/portfolio/1new.jpg'}
      alt="About Sophie"
      width={2000} height={1600}
      onClick={showPopup}
      className={`${styles.image} cursor-pointer hover:border-4 hover:border-amber-500  `}
    />

  </div>
}
