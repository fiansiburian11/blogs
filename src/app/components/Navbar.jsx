import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between bg-blue-400 p-3">
        <h1 className="text-3xl text-white">Navbar</h1>
        <ul className="flex space-x-4">
          <Link href="/" className="text-white hover:underline">Home</Link>
          <Link href="/project" className="text-white hover:underline">Project</Link>
          <Link href="/about" className="text-white hover:underline">About</Link>
        </ul>
      </div>
    </div>
  );
}
