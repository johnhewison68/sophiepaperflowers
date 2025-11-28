'use client'

import Image from "next/image";


export default function Page() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <Image src="/about.jpg" alt="About Sophie" width={278} height={416} className="m-10 rounded-md" />
      <div className="m-10 text-justify text-lg font-[540]">
        <p>Sophie was born and raised by the sea in Runswick Bay, close to Whitby on the North Yorkshire coast.
          <br />Born into a successful entrepreneurial family, it wasn't long before she was to follow her own callings and establish a floristry business, 'Ginger & Flynn', whose name was inspired after one of her sons and her ginger hair! Sophie lives with her four boys, Hughie, Flynn, Samson and Kit. <br />They have four dogs, chickens, a cat and a horse, 'Lady' - and their lifestyle is just the right balance of mayhem and love. Sophie's home is her workplace, and being tucked away in the North York Moors surrounded by nature deeply inspires her work and everyday creativity.
        </p>
      </div>
    </div>
  );
}
