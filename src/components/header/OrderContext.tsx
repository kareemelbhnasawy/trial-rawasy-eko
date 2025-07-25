"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface OrderItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  billingInfo: {
    email: string;
    firstName: string;
    lastName: string;
    company: string;
    country: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    orderNotes: string;
  };
  paymentMethod: string;
  trackingNumber?: string;
}

interface OrderContextProps {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'orderNumber' | 'date'>) => void;
  getOrderById: (id: string) => Order | undefined;
  updateOrderStatus: (id: string, status: Order['status']) => void;
  isOrderLoaded: boolean;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrder must be used within an OrderProvider");
  return context;
};

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isOrderLoaded, setIsOrderLoaded] = useState(false);

  // Load from localStorage on first mount
  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      try {
        setOrders(JSON.parse(storedOrders));
      } catch (error) {
        console.error("Failed to parse orders from localStorage:", error);
        localStorage.removeItem("orders");
      }
    }
    setIsOrderLoaded(true);
  }, []);

  // Save to localStorage whenever orders change
  useEffect(() => {
    if (isOrderLoaded) {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [orders, isOrderLoaded]);

  // Generate unique order number
  const generateOrderNumber = () => {
    return `RWS${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 100)}`;
  };

  // Add new order
  const addOrder = (orderData: Omit<Order, 'id' | 'orderNumber' | 'date'>) => {
    const newOrder: Order = {
      ...orderData,
      id: Date.now().toString(),
      orderNumber: generateOrderNumber(),
      date: new Date().toISOString().split('T')[0],
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  // Get order by ID
  const getOrderById = (id: string): Order | undefined => {
    return orders.find(order => order.id === id);
  };

  // Update order status
  const updateOrderStatus = (id: string, status: Order['status']) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        getOrderById,
        updateOrderStatus,
        isOrderLoaded,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
