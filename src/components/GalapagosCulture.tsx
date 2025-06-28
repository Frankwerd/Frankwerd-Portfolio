'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const GalapagosCulture = () => {
  const galapagosPhotos: PhotoItem[] = [
    {
      src: '/Tortoise_enclosure.jpg', // Current name: image (1).jpg
      alt: 'Galapagos giant tortoise in a conservation enclosure',
      caption: 'Encountering the iconic Galápagos giant tortoise, a living symbol of the islands\' unique evolutionary history and ongoing conservation efforts. This scene often plays out at the Charles Darwin Research Station, a hub of scientific and cultural preservation.',
    },
    {
      src: '/Seal_on_bench.jpg', // Current name: image (2).jpg
      alt: 'Galapagos sea lion sleeping on a wooden bench',
      caption: 'A classic Galápagos moment: a sea lion casually claiming a public bench. This perfectly illustrates the incredible harmony and respectful coexistence between wildlife and the island communities, a unique aspect of their culture.',
    },
    {
      src: '/Iguanas_on_rocky_ground.jpg', // Current name: image (3).jpg
      alt: 'Marine iguanas basking on volcanic ground',
      caption: 'Marine iguanas basking on the volcanic rock. These unique reptiles embody the islands\' raw, adaptive spirit, thriving in a landscape shaped by powerful natural forces, which in turn shapes the resilient culture of the islanders.',
    },
    {
      src: '/Island_town_view.jpg', // Current name: image (4).jpg
      alt: 'View of a town on a Galapagos island',
      caption: 'A glimpse into one of the island towns, where daily life unfolds amidst tropical greenery and a strong sense of community. It\'s a constant reminder of the human element in this extraordinary natural preserve, and how islanders integrate with their environment.',
    },
    {
      src: '/Concha_de_Perla_sign.jpg', // Current name: image (5).jpg
      alt: 'Sign with information about Concha de Perla trail',
      caption: 'The \'Concha de Perla\' sign outlines critical guidelines for visitors. It\'s a constant reminder of the islanders\' profound commitment to sustainable tourism and preserving their pristine environment – a deeply ingrained cultural value.',
    },
    {
      src: '/Flamingo_in_water.jpg', // Current name: image (6).jpg
      alt: 'Pink flamingo wading in shallow water',
      caption: 'A vibrant flamingo foraging in a brackish lagoon. Beyond the striking wildlife, these moments highlight the serene natural beauty and diverse ecosystems the local community strives to protect through active stewardship.',
    },
    {
      src: '/Group_on_trail.jpg', // Current name: image (7).jpg
      alt: 'Group of people walking on a trail through trees',
      caption: 'Exploring one of Isabela\'s protected trails with a group. These trails are meticulously maintained, reflecting a collective effort to educate visitors and minimize human impact on fragile habitats, a core part of the islands\' conservation culture.',
    },
    {
      src: '/Galápagos.jpg', // Current name: image (8).jpg
      alt: 'Sign for Charles Darwin Research Station',
      caption: 'The iconic Charles Darwin Research Station sign on Santa Cruz Island. This hub of scientific discovery and conservation is central to understanding and protecting the Galápagos\' unique biodiversity, embodying a culture of continuous learning and stewardship.',
    }
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Beyond Biodiversity: My Immersion in Galápagos Culture & Community
        </h2>
        <p className="mt-4 text-muted-foreground">
          While my primary focus in the Galápagos Islands was scientific research on its unparalleled biodiversity, the experience also offered a profound immersion into the unique culture of its island communities. Living and working alongside locals, I gained a deeper appreciation for their sustainable practices and the intricate balance between human life and conservation in this extraordinary archipelago. This cultural understanding is just as vital as the scientific data in comprehending complex systems.
        </p>
      </div>
      <Photos photos={galapagosPhotos} />
    </div>
  );
};

export default GalapagosCulture;