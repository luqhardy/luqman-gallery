"use client";
import React, { useState } from "react";
import Image from "next/image";
import galleryImages from "./galleryImages.json";

function ImageModal({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  if (!src) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none"
          onClick={onClose}
          aria-label="Close preview"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Image
          src={`/${src}`}
          alt={alt}
          width={900}
          height={700}
          className="w-full h-auto rounded shadow-lg content-center"
          style={{ maxHeight: "80vh", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [modalImg, setModalImg] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-6 sm:p-12">
      <section className="max-w-5xl mx-auto">
        <div className="text-center mb-2">
          <a
            href="https://luqmanhadi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <div className="text-xl font-bold text-gray-900 dark:text-white font-noto-sans-jp group-hover:underline">
              Luqman Hadi
            </div>
            <div className="text-lg text-gray-700 dark:text-gray-300 font-noto-sans-jp group-hover:underline">
              ルクマン　ハディ
            </div>
          </a>
        </div>
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-white font-noto-sans-jp">
          Portfolio
        </h2>
        <div className="text-center mb-8">
          <span className="text-xs text-gray-400 font-noto-sans-jp">
            Adobe Certified Professional ・ アドビ認定プロフェッショナル
          </span>
        </div>
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
                className="mb-2 break-inside-avoid rounded shadow bg-white dark:bg-gray-900 overflow-hidden cursor-pointer"
                onClick={() => setModalImg(src)}
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
        {modalImg && (
          <ImageModal
            src={modalImg}
            alt="Preview"
            onClose={() => setModalImg(null)}
          />
        )}
      </section>
    </div>
  );
}
