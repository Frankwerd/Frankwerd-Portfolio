'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Crazy = () => {
  const GalápagosPhotos: PhotoItem[] = [
    {
      src: '/Tortoise_enclosure.jpg',
      alt: 'Galápagos Islands',
      caption: 'This image is from the distinctive, Lonely George museum, Galápagos – a truly remarkable setting for my fieldwork.',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Galápagos Islands
        </h2>
      </div>
      <Photos photos={GalápagosPhotos} />
    </div>
  );
};

export default Crazy;