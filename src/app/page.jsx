import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-8">
      <h1 className="text-3xl text-white font-bold ml-16 ">Blogs</h1>
      <main className=" justify-items-center">
        <div className="grid grid-cols-3 mt-4 gap-20">
          <div className="hover:rounded-2xl hover:border-2 p-2">
            <Image src="/images/AIR+MAX+90 (1).png" alt="" width={350} height={350} className="w-full hover:rounded-lg"></Image>
            <p className="text-xs text-gray-500 mt-1">| 2 januari 2025</p>
            <h1 className="text-sm font-bold mt-1 text-white">Postingan Ke-4</h1>
            <p className="text-xs text-gray-500 mt-1">ini adalah postingan coding dengar benar</p>
            <p className="text-xs mt-1 text-blue-500">Baca Selengkapnya</p>
          </div>
          <div className="hover:rounded-2xl hover:border-2 p-2">
            <Image src="/images/AIR+MAX+90 (2).png" alt="" width={350} height={350} className="w-full hover:rounded-lg"></Image>
            <p className="text-xs text-gray-500 mt-1">| 2 januari 2025</p>
            <h1 className="text-sm font-bold mt-1 text-white">Postingan Ke-4</h1>
            <p className="text-xs text-gray-500 mt-1">ini adalah postingan coding dengar benar</p>
            <p className="text-xs mt-1 text-blue-500">Baca Selengkapnya</p>
          </div>
          <div className="hover:rounded-2xl hover:border-2 p-2">
            <Image src="/images/AIR+MAX+90.png" alt="" width={350} height={350} className="w-full hover:rounded-lg"></Image>
            <p className="text-xs text-gray-500 mt-1">| 2 januari 2025</p>
            <h1 className="text-sm font-bold mt-1 text-white">Postingan Ke-4</h1>
            <p className="text-xs text-gray-500 mt-1">ini adalah postingan coding dengar benar</p>
            <p className="text-xs mt-1 text-blue-500">Baca Selengkapnya</p>
          </div>
        </div>
      </main>
    </div>
  );
}
