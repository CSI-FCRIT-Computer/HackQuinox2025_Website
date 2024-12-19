import React from 'react';
import Image from 'next/image';

export default function Sponsors() {
  const sponsorLogos = [
    { name: 'Sponsor 1', logo: '/sponsor1-logo.png', tier: 'Platinum' },
    { name: 'Sponsor 2', logo: '/sponsor2-logo.png', tier: 'Gold' },
    { name: 'Sponsor 3', logo: '/sponsor3-logo.png', tier: 'Silver' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Sponsors</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {sponsorLogos.map((sponsor) => (
          <div 
            key={sponsor.name} 
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105"
          >
            <Image 
              src={sponsor.logo} 
              alt={`${sponsor.name} logo`} 
              width={200} 
              height={100} 
              className="mb-4"
            />
            <h2 className="text-xl font-semibold">{sponsor.name}</h2>
            <p className="text-gray-600">{sponsor.tier} Sponsor</p>
          </div>
        ))}
      </div>
    </div>
  );
}
