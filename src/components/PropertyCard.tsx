import { Property } from '@/types/property';
import { Bath, Bed, MapPin, Star, Users } from 'lucide-react';
import React from 'react';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (id: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="group cursor-pointer bg-card hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-fade-in overflow-hidden border-0 shadow-card">
      <div className="relative overflow-hidden">
        <img
          src={property.image || '/placeholder.svg'}
          alt={property.title}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-primary">${property.price}</span>
          <span className="text-xs text-muted-foreground">/night</span>
        </div>
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{property.rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{property.location}</span>
          </div>
          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {property.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
            {property.description}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              {property.guests && (
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{property.guests} guests</span>
                </div>
              )}
              {property.bedrooms && (
                <div className="flex items-center space-x-1">
                  <Bed className="w-4 h-4" />
                  <span>{property.bedrooms} bed</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center space-x-1">
                  <Bath className="w-4 h-4" />
                  <span>{property.bathrooms} bath</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {renderStars(property.rating)}
              <span className="text-sm text-muted-foreground ml-2">
                ({property.reviews || 0} reviews)
              </span>
            </div>
          </div>

          <button
            onClick={() => onViewDetails(property.id)}
            className="w-full mt-4 p-3 rounded-md bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;