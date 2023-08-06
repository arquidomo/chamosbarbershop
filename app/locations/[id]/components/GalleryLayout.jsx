"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const GalleryLayout = ({ images }) => {
  return (
    <>
      <ImageGallery autoPlay={true} showFullscreenButton={false} items={images} />
    </>
  );
};
