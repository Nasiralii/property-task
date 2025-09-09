import { Property } from "@/types/property";

const data: Property[] = [
  {
    id: "1",
    title: "Luxury Beachfront Villa with Ocean Views",
    description:
      "Experience the ultimate beachfront getaway in this stunning villa featuring panoramic ocean views, private beach access, and world-class amenities.",
    price: 299,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Malibu, California",
    amenities: ["Ocean View", "Private Beach", "Pool", "WiFi", "Kitchen"],
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    reviews: 127,
    host: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  },
  {
    id: "2",
    title: "Modern Downtown Loft with City Skyline",
    description:
      "Sophisticated urban retreat in the heart of downtown. Floor-to-ceiling windows showcase breathtaking city views in this designer loft.",
    price: 189,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "New York City, NY",
    amenities: ["City View", "WiFi", "Kitchen", "Gym Access", "Parking"],
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    reviews: 89,
    host: {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  },
  {
    id: "3",
    title: "Cozy Mountain Cabin with Hot Tub",
    description:
      "Escape to nature in this charming log cabin nestled among towering pines. Perfect for romantic getaways or family adventures.",
    price: 129,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Aspen, Colorado",
    amenities: ["Mountain View", "Hot Tub", "Fireplace", "WiFi", "Kitchen"],
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    reviews: 156,
    host: {
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  },
  {
    id: "4",
    title: "Historic Townhouse in European Quarter",
    description:
      "Step into history with this beautifully restored 18th-century townhouse. Authentic charm meets modern comfort in every detail.",
    price: 159,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Charleston, South Carolina",
    amenities: ["Historic Character", "Garden", "WiFi", "Kitchen", "Parking"],
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    reviews: 94,
    host: {
      name: "David Thompson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  },
  {
    id: "5",
    title: "Tropical Paradise Overwater Bungalow",
    description:
      "Experience ultimate luxury in this overwater bungalow with direct lagoon access. Wake up to crystal-clear waters and coral reefs.",
    price: 450,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Bora Bora, French Polynesia",
    amenities: [
      "Overwater",
      "Lagoon Access",
      "Snorkeling",
      "WiFi",
      "Room Service",
    ],
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    reviews: 67,
    host: {
      name: "Marie Dubois",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  },
  {
    id: "6",
    title: "Rustic Farmhouse with Vineyard Views",
    description:
      "Unwind in wine country at this authentic farmhouse surrounded by rolling vineyards. Perfect for wine enthusiasts and nature lovers.",
    price: 219,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Napa Valley, California",
    amenities: ["Vineyard View", "Wine Tasting", "Garden", "WiFi", "Kitchen"],
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    reviews: 112,
    host: {
      name: "Robert Martinez",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  },
];
export default data;