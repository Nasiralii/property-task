import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Property {
  id: string;
  title: string;
  price: number;
  guests?: number;
}

interface BookingData {
  checkIn: Date;
  checkOut: Date;
  guests: number;
  guestName: string;
  totalNights: number;
  totalCost: number;
  propertyId: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: Property | null;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, property }) => {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [guests, setGuests] = useState<number>(1);
  const [guestName, setGuestName] = useState<string>("");
  const [totalNights, setTotalNights] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (checkInDate && checkOutDate && property) {
      const nights = Math.ceil(
        (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (nights > 0) {
        setTotalNights(nights);
        setTotalCost(nights * property.price);
      } else {
        setTotalNights(0);
        setTotalCost(0);
      }
    }
  }, [checkInDate, checkOutDate, property]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!checkInDate) newErrors.checkIn = "Check-in date is required";
    if (!checkOutDate) newErrors.checkOut = "Check-out date is required";
    if (checkInDate && checkOutDate && checkInDate >= checkOutDate)
      newErrors.checkOut = "Check-out must be after check-in";
    if (guests < 1) newErrors.guests = "At least 1 guest is required";
    if (property?.guests && guests > property.guests)
      newErrors.guests = `Maximum ${property.guests} guests allowed`;
    if (!guestName.trim()) newErrors.guestName = "Guest name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !property || !checkInDate || !checkOutDate) return;

    const bookingData: BookingData = {
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests,
      guestName: guestName.trim(),
      totalNights,
      totalCost,
      propertyId: property.id,
    };

    console.log("Booking submitted:", bookingData);

    // ✅ Show react-hot-toast instead of custom div
    toast.success(`Booking for ${property.title} submitted successfully! 🎉`);

    resetForm();
    onClose();
  };

  const resetForm = () => {
    setCheckInDate(undefined);
    setCheckOutDate(undefined);
    setGuests(1);
    setGuestName("");
    setTotalNights(0);
    setTotalCost(0);
    setErrors({});
  };

  if (!isOpen || !property) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">
          Book {property.title}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Guest Name */}
          <div>
            <label className="block text-sm font-medium">Guest Name</label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1"
            />
            {errors.guestName && (
              <p className="text-red-500 text-sm">{errors.guestName}</p>
            )}
          </div>

          {/* Check-in Date */}
          <div>
            <label className="block text-sm font-medium">Check-in</label>
            <input
              type="date"
              value={checkInDate ? checkInDate.toISOString().split("T")[0] : ""}
              onChange={(e) => setCheckInDate(new Date(e.target.value))}
              className="w-full border rounded-lg p-2 mt-1"
            />
            {errors.checkIn && (
              <p className="text-red-500 text-sm">{errors.checkIn}</p>
            )}
          </div>

          {/* Check-out Date */}
          <div>
            <label className="block text-sm font-medium">Check-out</label>
            <input
              type="date"
              value={checkOutDate ? checkOutDate.toISOString().split("T")[0] : ""}
              onChange={(e) => setCheckOutDate(new Date(e.target.value))}
              className="w-full border rounded-lg p-2 mt-1"
            />
            {errors.checkOut && (
              <p className="text-red-500 text-sm">{errors.checkOut}</p>
            )}
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium">Guests</label>
            <input
              type="number"
              value={guests}
              min={1}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full border rounded-lg p-2 mt-1"
            />
            {errors.guests && (
              <p className="text-red-500 text-sm">{errors.guests}</p>
            )}
          </div>

          {/* Total */}
          <div className="mt-4 text-sm text-gray-700">
            <p>Total Nights: {totalNights}</p>
            <p>Total Cost: ${totalCost}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
