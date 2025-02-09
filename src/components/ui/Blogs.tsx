"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/Dialog";
import AOS from "aos";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Postingan Ke-1",
      date: "2 Januari 2025",
      image: "/images/gambar1.png",
      description: "Ini adalah deskripsi postingan ke-1.",
    },
    {
      id: 2,
      title: "Postingan Ke-2",
      date: "13 Februari 2025",
      image: "/images/gambar2.png",
      description: "Ini adalah deskripsi postingan ke-2.",
    },
    {
      id: 3,
      title: "Postingan Ke-3",
      date: "12 Desember 2024",
      image: "/images/gambar3.png",
      description: "Ini adalah deskripsi postingan ke-3.",
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [open, setOpen] = useState(false);

  //inisialisasi aos untuk animasi
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="mt-20">
      <h1 data-aos="fade-right" className="text-lg sm:text-xs md:text-2xl lg:text-4xl text-white font-bold">
        Blogs
      </h1>

      <section data-aos="flip-up" className="grid md:grid-cols-3 grid-cols-2 mt-4 md:gap-20 gap-5">
        {blogs.map((blog) => (
          <div key={blog.id} className="hover:rounded-2xl hover:border-2 p-2">
            <Image src={blog.image} alt="" width={350} height={350} className="w-full hover:rounded-lg" />
            <p className="text-xs text-gray-500 mt-1">| {blog.date}</p>
            <h1 className="text-sm font-bold mt-1 text-white">{blog.title}</h1>
            <p className="text-xs text-gray-500 mt-1">{blog.description}</p>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <p
                  className="text-xs mt-1 text-blue-500 cursor-pointer hover:underline"
                  onClick={() => {
                    setSelectedBlog(blog);
                    setOpen(true);
                  }}
                >
                  Baca Selengkapnya
                </p>
              </DialogTrigger>

              <DialogContent className="max-w-xs md:max-w-sm bg-white ">
                <DialogHeader>
                  <DialogTitle>{selectedBlog?.title}</DialogTitle>
                  <DialogDescription>{selectedBlog?.date}</DialogDescription>
                </DialogHeader>
                <Image src={selectedBlog?.image || ""} alt={selectedBlog?.title || ""} width={400} height={400} className="w-full rounded-lg" />
                <p className="text-gray-700 mt-2">{selectedBlog?.description}</p>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </section>
    </div>
  );
}
