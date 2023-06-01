const tags = {
  react: {
    name: 'react',
    className: 'bg-gradient-to-r from-blue-500 to-blue-700',
  },
  tailwind: {
    name: 'tailwind',
    className: 'bg-gradient-to-r from-pink-500 to-pink-700',
  },

  mongodb: {
    name: 'mongodb',
    className: 'bg-gradient-to-r from-green-500 to-green-700',
  },
  nextjs: {
    name: 'nextjs',
    className: 'bg-gradient-to-r from-yellow-500 to-yellow-700',
  },
};

export const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [tags.react, tags.mongodb, tags.tailwind],
    // image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [tags.react, tags.mongodb, tags.tailwind],
    // image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [tags.react, tags.mongodb, tags.tailwind],
    // image: tripguide,
    source_code_link: 'https://github.com/',
  },
];
