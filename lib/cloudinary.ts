// Cloudinary configuration
// When ready to connect to Cloudinary, set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local

export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "demo",
};

// Placeholder images using unsplash for development
export const placeholderImages = {
  lake: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop",
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  coffee: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
  bread: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
  film: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
  travel: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop",
  food: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
  landscape: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
  volcano: "https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?w=800&h=600&fit=crop",
  market: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
  village: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&h=600&fit=crop",
  writing: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
};
