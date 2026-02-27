// Cloudinary configuration
// When ready to connect to Cloudinary, set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local

export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "demo",
};

// Real images and illustrations — no stock photos
export const siteImages = {
  heroMain: "/images/david-principal-hero.jpeg",
  kitchen: "/images/david-rafa-cocinando.jpeg",
  aboutBW: "/images/david-principal-black-and-white.jpeg",
  aboutSecondary: "/images/david-secundraria.jpeg",
  davidVertical: "/images/david-solo-vertical.jpeg",
  davidRafa: "/images/david-y-rafa.jpeg",
  davidMedium: "/images/david_de_tamaño_mediano.jpeg",
  lifestyle: "/images/cosas-de-david.jpeg",
};

export const siteIllustrations = {
  cook: "/illustrations/cook.svg",
  coffee: "/illustrations/coffee.svg",
  espresso: "/illustrations/espresso.svg",
  filmDirector: "/illustrations/film-director.svg",
  island: "/illustrations/island.svg",
  storefront: "/illustrations/storefront.svg",
  doodle: "/illustrations/doodle.svg",
};
