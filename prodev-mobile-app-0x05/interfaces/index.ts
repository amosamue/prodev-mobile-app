// interfaces/index.ts

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Property {
  id: string;
  title: string;
  image: string;
  price: number;
  location: string;
  description?: string;
  isSaved?: boolean;
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  timestamp: string;
  isRead?: boolean;
}

export interface TabRoute {
  name: string;
  icon: string;
  label: string;
}
