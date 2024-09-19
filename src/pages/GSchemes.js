// import React from 'react';
// import '../css/GSchemes.css'

// const schemes = [
//     {
//         id: 1,
//         title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
//         description: "A crop insurance scheme launched by the Government of India to provide insurance cover to farmers against crop losses due to natural calamities, pests, and diseases.",
//         link: "https://pmfby.gov.in"
//     },
//     {
//         id: 2,
//         title: "National Agriculture Market (e-NAM)",
//         description: "A platform that connects existing APMC mandis and provides farmers with a unified national market to trade their produce, enhancing market reach and reducing middlemen.",
//         link: "https://enam.gov.in"
//     },
//     {
//         id: 3,
//         title: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
//         description: "A scheme aimed at enhancing irrigation coverage and ensuring access to water for crops through various methods, including micro-irrigation systems.",
//         link: "https://pmksy.gov.in"
//     },
//     {
//         id: 4,
//         title: "Soil Health Management (SHM)",
//         description: "A program focused on improving soil health and fertility through soil testing and providing subsidies for organic inputs and other soil management practices.",
//         link: "https://shm.gov.in"
//     }
// ];

// const GovernmentSchemes = () => {
//     return (
//         <div className="schemes-container">
//             <h1>Government Schemes for Farmers</h1>
//             {schemes.length > 0 ? (
//                 schemes.map((scheme) => (
//                     <div key={scheme.id} className="scheme-card">
//                         <h2>{scheme.title}</h2>
//                         <p>{scheme.description}</p>
//                         <a href={scheme.link} target="_blank" rel="noopener noreferrer">
//                             Learn More
//                         </a>
//                     </div>
//                 ))
//             ) : (
//                 <p>No schemes available at the moment.</p>
//             )}
//         </div>
//     );
// };

// export default GovernmentSchemes;

import React from 'react';
import '../css/GSchemes.css';

const schemes = [
  {
    id: 1,
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description: "A crop insurance scheme launched by the Government of India to provide insurance cover to farmers against crop losses due to natural calamities, pests, and diseases.",
    link: "https://pmfby.gov.in",
    image: "url-to-your-image-1.jpg", // Add URL to the image
  },
  {
    id: 2,
    title: "National Agriculture Market (e-NAM)",
    description: "A platform that connects existing APMC mandis and provides farmers with a unified national market to trade their produce, enhancing market reach and reducing middlemen.",
    link: "https://enam.gov.in",
    image: "url-to-your-image-2.jpg", // Add URL to the image
  },
  {
    id: 3,
    title: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
    description: "A scheme aimed at enhancing irrigation coverage and ensuring access to water for crops through various methods, including micro-irrigation systems.",
    link: "https://pmksy.gov.in",
    image: "url-to-your-image-3.jpg", // Add URL to the image
  },
  {
    id: 4,
    title: "Soil Health Management (SHM)",
    description: "A program focused on improving soil health and fertility through soil testing and providing subsidies for organic inputs and other soil management practices.",
    link: "https://shm.gov.in",
    image: "url-to-your-image-4.jpg", // Add URL to the image
  },
];

const GovernmentSchemes = () => {
  return (
    <section className='schemes-background'>
    <section className="schemes-container">
      <h1>Government Schemes for Farmers</h1>
      <p>Explore the various government schemes designed to support and improve the livelihood of farmers across India.</p>
      <div className="scheme-cards">
        {schemes.length > 0 ? (
          schemes.map((scheme) => (
            <div
              key={scheme.id}
              className="scheme-card"
              style={{ backgroundImage: `url(${scheme.image})` }}
            >
              <div className="card-overlay">
                <h2>{scheme.title}</h2>
                <p>{scheme.description}</p>
                <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No schemes available at the moment.</p>
        )}
      </div>
      <button className="learn-more-btn">
        Learn More Schemes
      </button>
    </section>
    </section>
  );
};

export default GovernmentSchemes;
