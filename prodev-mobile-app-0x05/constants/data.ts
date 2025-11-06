// constants/data.ts
import { Property, User, Message } from "../interfaces";

export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@email.com",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@email.com",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
];

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment in City Center",
    image: "https://picsum.photos/400/300?random=1",
    price: 1250,
    location: "Accra, Ghana",
    description: "Spacious apartment near business district.",
    isSaved: true,
  },
  {
    id: "2",
    title: "Cozy Studio near University",
    image: "https://picsum.photos/400/300?random=2",
    price: 850,
    location: "Kumasi, Ghana",
    description: "Ideal for students, fully furnished.",
    isSaved: false,
  },
  {
    id: "3",
    title: "3-Bedroom Family House",
    image: "https://picsum.photos/400/300?random=3",
    price: 2200,
    location: "Tema, Ghana",
    description: "Large family home with a garden and garage.",
    isSaved: false,
  },
];

export const messages: Message[] = [
  {
    id: "1",
    sender: users[1],
    content: "Hi John! Is the apartment still available?",
    timestamp: "2025-11-05T10:15:00Z",
    isRead: false,
  },
  {
    id: "2",
    sender: users[0],
    content: "Yes, it’s still available! Would you like to schedule a visit?",
    timestamp: "2025-11-05T10:20:00Z",
    isRead: true,
  },
];
