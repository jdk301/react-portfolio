import React from "react";

const GalleryPage = () => (
  <section className="gallery" id="galleryPage">
    <h1 className="section-header">Gallery</h1>
    <div className="gallery-container">
      <figure className="gallery__item gallery__item--1">
        <img
          src="/images/hairsalon-site.png"
          className="gallery__img"
          alt="Image 1"
        />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img
          src="/images/pineapple2.jpg"
          className="gallery__img"
          alt="Image 2"
        />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img
          src="/images/coffeebgwhite.jpg"
          className="gallery__img"
          alt="Image 3"
        />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img
          src="/images/coffeebgorange.jpg"
          className="gallery__img"
          alt="Image 4"
        />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img
          src="/images/coffeebeans.jpg"
          className="gallery__img"
          alt="Image 5"
        />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img
          src="/images/mountains.jpg"
          className="gallery__img"
          alt="Image 6"
        />
      </figure>
    </div>
  </section>
);

export default GalleryPage;
