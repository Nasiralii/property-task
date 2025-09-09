import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useProperties } from '@/hooks/useProperties';
import {
  ArrowLeft,
  Bath,
  Bed,
  CalendarIcon,
  Camera,
  Car,
  Coffee,
  Heart,
  MapPin,
  Share,
  Shield,
  Star,
  Users,
  Wifi,
  Wind
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPropertyById, loading } = useProperties();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const property = id ? getPropertyById(id) : null;

  // Mock additional images for gallery
  const additionalImages = property ? [
    property.image,
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ] : [];

  const amenityIcons: Record<string, any> = {
    'WiFi': Wifi,
    'Ocean View': Wind,
    'City View': Wind,
    'Mountain View': Wind,
    'Vineyard View': Wind,
    'Overwater': Wind,
    'Historic Character': Shield,
    'Private Beach': Wind,
    'Pool': Wind,
    'Kitchen': Coffee,
    'Gym Access': Shield,
    'Parking': Car,
    'Hot Tub': Wind,
    'Fireplace': Shield,
    'Garden': Wind,
    'Lagoon Access': Wind,
    'Snorkeling': Wind,
    'Room Service': Shield,
    'Wine Tasting': Coffee,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-5 h-5 fill-yellow-400/50 text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }

    return stars;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-1/4"></div>
            <div className="h-96 bg-muted rounded-xl"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                </div>
              </div>
              <div className="h-96 bg-muted rounded-xl"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The property you're looking for doesn't exist or has been removed.
            </p>
            <button className='flex flex-row' onClick={() => navigate('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />

            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center bg-gray-200 p-2 rounded-md hover:bg-primary/10 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <div className="mb-8 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(property.rating)}
                    <span className="ml-2">({property.reviews || 0} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button className='bg-gray-200 items-center flex p-3 rounded-md'>
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </button>
                <button className='bg-gray-200 items-center flex p-3 rounded-md'>
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8 animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 rounded-2xl overflow-hidden">
              <div className="md:col-span-2 md:row-span-2">
                <img
                  src={additionalImages[selectedImageIndex] || property.image}
                  alt={property.title}
                  className="w-full h-64 md:h-96 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedImageIndex(0)}
                />
              </div>
              {additionalImages.slice(1, 5).map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image}
                    alt={`${property.title} ${index + 2}`}
                    className="w-full h-32 md:h-44 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImageIndex(index + 1)}
                  />
                  {index === 3 && additionalImages.length > 5 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold hover:bg-black/50 transition-colors duration-200">
                      <Camera className="w-6 h-6 mr-2" />
                      +{additionalImages.length - 4} photos
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-fade-in border-0 shadow-card">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Property Details</h2>
                    <div className="text-2xl font-bold text-primary">
                      ${property.price}
                      <span className="text-sm font-normal text-muted-foreground">/night</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {property.guests && (
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Users className="w-5 h-5" />
                        <span>{property.guests} guests</span>
                      </div>
                    )}
                    {property.bedrooms && (
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Bed className="w-5 h-5" />
                        <span>{property.bedrooms} bedrooms</span>
                      </div>
                    )}
                    {property.bathrooms && (
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Bath className="w-5 h-5" />
                        <span>{property.bathrooms} bathrooms</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="font-semibold mb-4">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {property.description}
                    </p>
                  </div>
                </div>
              </div>
              {property.amenities && (
                <div className="animate-fade-in border-0 shadow-card" style={{ animationDelay: '0.1s' }}>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.amenities.map((amenity, index) => {
                        const IconComponent = amenityIcons[amenity] || Shield;
                        return (
                          <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <span className="font-medium">{amenity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              {property.host && (
                <div className="animate-fade-in border-0 shadow-card" style={{ animationDelay: '0.2s' }}>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Meet Your Host</h3>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full w-16 h-16">
                        <img className='rounded-full h-full w-full' src={property.host.avatar} alt={property.host.name} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{property.host.name}</h4>
                        <p className="text-muted-foreground">Superhost since 2020</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">4.9 · 127 reviews</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        I love hosting guests and sharing the beauty of this amazing location.
                        I'm always available to help make your stay memorable and comfortable.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="animate-fade-in border-0 shadow-card" style={{ animationDelay: '0.3s' }}>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-primary mb-2">
                        ${property.price}
                        <span className="text-lg font-normal text-muted-foreground">/night</span>
                      </div>
                      <div className="flex items-center justify-center space-x-1">
                        {renderStars(property.rating)}
                        <span className="text-sm text-muted-foreground ml-2">
                          ({property.reviews || 0} reviews)
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsBookingModalOpen(true)}

                      className="w-full p-3 rounded-md items-center justify-center flex mb-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <CalendarIcon className="w-5 h-5 mr-2" />
                      Book Now
                    </button>

                    <div className="text-center text-sm text-muted-foreground mb-4">
                      You won't be charged yet
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Base price</span>
                        <span>${property.price} x 1 night</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service fee</span>
                        <span>$25</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxes</span>
                        <span>$18</span>
                      </div>
                      <hr className="my-3" />
                      <div className="flex justify-between font-semibold text-base">
                        <span>Total (1 night)</span>
                        <span>${property.price + 25 + 18}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4" />
                        <span>Your booking is protected by RentSpace</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 animate-fade-in border-0 shadow-card" style={{ animationDelay: '0.4s' }}>
                  <div className="p-6 text-center">
                    <h4 className="font-semibold mb-2">Questions about this property?</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Get instant answers from the host or our support team
                    </p>
                    <button className="w-full">
                      Contact Host
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        property={property}
      />
    </div>
  );
};

export default PropertyDetail;