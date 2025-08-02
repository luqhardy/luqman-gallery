# luqman-gallery

luqman-gallery is a modern web photo gallery built with Next.js and React. It allows you to showcase, organize, and view images in a beautiful, responsive interface.

## Features

- Responsive grid and masonry layouts for images
- Fullscreen lightbox view for each photo
- Mobile-friendly design
- Easy to add or update images (just place them in the `public/photos` folder)
- Fast performance with Next.js static optimization

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/luqhardy/luqman-gallery.git
   cd luqman-gallery
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Add your images:**
   - Place your images in the `public/photos` directory. Supported formats: `.jpg`, `.png`, `.webp`, etc.
   - Update the gallery image list in the code if needed.
4. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
5. **Open in your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
luqman-gallery/
  ├── src/
  │   ├── app/           # Next.js app directory
  │   ├── components/    # React components
  │   └── ...
  ├── public/
  │   └── photos/        # Your gallery images
  ├── package.json
  ├── next.config.js/ts
  └── ...
```

## Credits

- Built by Luqman Hardy
- Powered by [Next.js](https://nextjs.org/)

## License

MIT
