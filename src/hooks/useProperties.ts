import data from "@/data/data";
import { Property } from "@/types/property";
import { useEffect, useState } from "react";

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProperties(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const getPropertyById = (id: string): Property | null =>
    properties.find((p) => p.id === id) || null;

  return { properties, loading, error: null, getPropertyById };
};
