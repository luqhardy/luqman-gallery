"use client";
import Image from "next/image";
import galleryImages from "./galleryImages.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-6 sm:p-12">
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Gallery
        </h2>
        <div className="columns-2 xs:columns-3 sm:columns-4 md:columns-5 gap-2 space-y-2">
          {galleryImages.length === 0 ? (
            <div className="text-center text-gray-400 col-span-full">
              No images yet. Add images to{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded">
                /public/assets
              </code>
              .
            </div>
          ) : (
            galleryImages.map((src, idx) => (
              <div
                key={src + idx}
                className="mb-2 break-inside-avoid rounded shadow bg-white dark:bg-gray-900 overflow-hidden"
              >
                <Image
                  src={`/${src}`}
                  alt={`Gallery image ${idx + 1}`}
                  width={220}
                  height={160}
                  className="object-cover w-full h-auto hover:scale-105 transition-transform duration-200"
                  sizes="(max-width: 640px) 100vw, 220px"
                />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
