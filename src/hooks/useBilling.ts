import { useState, useEffect } from 'react';
import { billingService } from '../services/billingService';
import { useAuth } from '../contexts/AuthContext';

export const useInvoices = () => {
  const { userProfile } = useAuth();
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInvoices = async () => {
    if (!userProfile?.id) return;

    try {
      setLoading(true);
      const data = await billingService.getInvoices(userProfile.id);
      setInvoices(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, [userProfile?.id]);

  return {
    invoices,
    loading,
    error,
    refetch: fetchInvoices
  };
};

export const useCurrentUsage = () => {
  const { userProfile } = useAuth();
  const [usage, setUsage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsage = async () => {
    if (!userProfile?.id) return;

    try {
      setLoading(true);
      const data = await billingService.getCurrentUsage(userProfile.id);
      setUsage(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsage();
  }, [userProfile?.id]);

  return {
    usage,
    loading,
    error,
    refetch: fetchUsage
  };
};

export const useUsageTrends = (days = 30) => {
  const { userProfile } = useAuth();
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTrends = async () => {
    if (!userProfile?.id) return;

    try {
      setLoading(true);
      const data = await billingService.getUsageTrends(userProfile.id, days);
      setTrends(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrends();
  }, [userProfile?.id, days]);

  return {
    trends,
    loading,
    error,
    refetch: fetchTrends
  };
};

export const useSubscriptionCosts = () => {
  const { userProfile } = useAuth();
  const [costs, setCosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCosts = async () => {
    if (!userProfile?.id) return;

    try {
      setLoading(true);
      const data = await billingService.getSubscriptionCosts(userProfile.id);
      setCosts(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCosts();
  }, [userProfile?.id]);

  return {
    costs,
    loading,
    error,
    refetch: fetchCosts
  };
};

export const useEstimatedBill = () => {
  const { userProfile } = useAuth();
  const [bill, setBill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBill = async () => {
    if (!userProfile?.id) return;

    try {
      setLoading(true);
      const data = await billingService.getEstimatedBill(userProfile.id);
      setBill(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBill();
  }, [userProfile?.id]);

  return {
    bill,
    loading,
    error,
    refetch: fetchBill
  };
};

export const usePaymentMethods = () => {
  const { userProfile } = useAuth();
  const [paymentMethods, setPaymentMethods] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPaymentMethods = async () => {
    if (!userProfile?.id) return;

    try {
      setLoading(true);
      const data = await billingService.getPaymentMethods(userProfile.id);
      setPaymentMethods(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentMethods();
  }, [userProfile?.id]);

  return {
    paymentMethods,
    loading,
    error,
    refetch: fetchPaymentMethods
  };
};