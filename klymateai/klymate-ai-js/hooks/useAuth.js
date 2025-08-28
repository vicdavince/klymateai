import { useState, useEffect } from 'react';
import { onAuthStateChange } from '../firebase';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Uncomment when Firebase auth is configured
    /*
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
    */

    // Temporary mock user for development - remove when Firebase is ready
    setUser(null);
    setLoading(false);
  }, []);

  return { user, loading };
};