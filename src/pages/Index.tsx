import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PropertyCard from '@/components/PropertyCard';
import { useProperties } from '@/hooks/useProperties';
import { Property } from '@/types/property';
import { FilterIcon, SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const { properties, loading, error } = useProperties();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewDetails = (id: string) => {
    navigate(`/property/${id}`);
  };

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                Find Your Perfect Stay
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Discover amazing properties, unique experiences, and unforgettable memories around the world with RentSpace.
              </p>

              <div className="max-w-4xl mx-auto my-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-background/80 backdrop-blur-2xl rounded-2xl p-6 border border-border/20">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1 border">
                      <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        placeholder="Where do you want to stay?"
                        className="pl-12 h-12 w-full bg-background border-border/50 focus:border-primary"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <button
                      className="h-12 px-8 rounded-md bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Search Properties
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Amazing Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Global Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-muted-foreground">Happy Guests</div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className=" bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  All <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Properties</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Browse our complete collection of {properties.length} amazing stays
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2">
                  <FilterIcon className="w-4 h-4" />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-muted rounded-xl h-64 mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                      <div className="h-4 bg-muted rounded w-1/2"></div>
                      <div className="h-4 bg-muted rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProperties.map((property, index) => (
                  <div key={property.id} style={{ animationDelay: `${index * 0.05}s` }}>
                    <PropertyCard
                      property={property}
                      onViewDetails={handleViewDetails}
                    />
                  </div>
                ))}
              </div>
            )}

            {filteredProperties.length === 0 && !loading && (
              <div className="text-center py-12">
                <SearchIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or browse all properties
                </p>
                <button onClick={() => setSearchTerm('')}>Clear Search</button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        property={selectedProperty}
      />
    </div>
  );
};

export default Index;
