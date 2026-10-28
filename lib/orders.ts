export type OrderItem = { slug: string; name: string; price: number; qty: number };
export type Order = {
  id: string;
  email: string;
  date: string;
  items: OrderItem[];
  total: number;
  descriptor: string;
  name: string;
};

const ORDERS_KEY = 'huddleon_orders';
const LAST_KEY = 'huddleon_last_order';

function read(): Order[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]') as Order[];
  } catch {
    return [];
  }
}

export function saveOrder(order: Order) {
  const all = read();
  all.unshift(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(all));
  localStorage.setItem(LAST_KEY, order.id);
}

export function getOrdersFor(email: string): Order[] {
  return read().filter((o) => o.email.toLowerCase() === email.toLowerCase());
}

export function getOrder(id: string): Order | undefined {
  return read().find((o) => o.id === id);
}

export function getLastOrder(): Order | undefined {
  if (typeof window === 'undefined') return undefined;
  const id = localStorage.getItem(LAST_KEY);
  return id ? getOrder(id) : undefined;
}

export function newOrderId() {
  const n = Math.floor(100000 + Math.random() * 900000);
  return 'HCA-' + n;
}
