export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images?: string[];
  location: string;
  amenities?: string[];
  bedrooms?: number;
  bathrooms?: number;
  guests?: number;
  host?: {
    name: string;
    avatar?: string;
  };
  reviews?: number;
  createdAt?: string;
}

export interface BookingData {
  checkIn: Date;
  checkOut: Date;
  guests: number;
  guestName: string;
  totalNights: number;
  totalCost: number;
  propertyId: string;
}
