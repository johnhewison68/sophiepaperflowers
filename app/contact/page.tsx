import Image from "next/image";


export default function Page() {
  return (

    <div className="flex flex-col md:flex-row items-center w-full">
      <h1>Contact</h1>


      <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div>
          <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
          <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="" />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
          <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
          <textarea
            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="mt-8">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
