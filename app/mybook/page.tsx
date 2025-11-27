import Image from "next/image";


export default function Page() {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse items-center">
        <Image src="/book.jpeg" alt="About Sophie" width={378} height={516} className="m-10 rounded-md" />
        <div className="m-10 text-justify text-lg font-[540]">
          <p>Crafting Authentic Paper Flowers

A Journey into Elegant Paper Flower Art.

Step into a world where delicate petals unfurl from paper and imagination, and time seems to slow with each thoughtful fold.

Rooted in an ancient tradition dating back to 100 BC, this beautiful guide to paper flower crafting invites you to rediscover the quiet magic of handmade beauty. With graceful step-by-step instructions and exquisite illustrations, every project becomes a meditative escape—perfect for unwinding, creating, and connecting with nature in the most enchanting way.

 <br/>✨ Designed for dreamers, makers, and lovers of detail
 <br/>✨ Refined projects with a touch of whimsy and wonder
 <br/>✨ Ideal for calm evenings, creative mornings, and heartfelt gifting
 <br/>✨ No experience needed—just your hands and a little imagination

<br/>Craft with intention.  Fall in love with the art of slow creation.</p>

<p className="mt-15">Available in all good bookstores and online.pap</p>
        </div>
        
      </div>
      <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full mx-10 mb-10">
        <a href="https://www.amazon.co.uk/Crafting-Authentic-Paper-Flowers-Crafts/dp/1526784661" >Buy on Amazon
  </a>
      </button>
      </>
    );
  }
  