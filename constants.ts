import { DoctorProfile, Product, Article, User, UserRole } from './types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Dr. Rajesh Kumar',
  email: 'rajesh@mediconnect.in',
  role: UserRole.DOCTOR,
  isVerified: true,
  avatarUrl: 'https://picsum.photos/100/100',
};

export const DOCTORS: DoctorProfile[] = [
  {
    id: 'd1',
    name: 'Dr. Anjali Desai',
    specialty: 'Cardiologist',
    qualification: 'MBBS, MD (Cardiology)',
    experienceYears: 12,
    location: 'Mumbai, MH',
    clinicName: 'Heart Care Center',
    isVerified: true,
    rating: 4.9,
    reviewCount: 124,
    imageUrl: 'https://picsum.photos/400/400?random=1',
    about: 'Senior Cardiologist with over a decade of experience in interventional cardiology.',
    consultationFee: 1500,
  },
  {
    id: 'd2',
    name: 'Dr. Vikram Singh',
    specialty: 'Dermatologist',
    qualification: 'MBBS, DVD',
    experienceYears: 8,
    location: 'Delhi, NCR',
    clinicName: 'Skin & Glow Clinic',
    isVerified: true,
    rating: 4.7,
    reviewCount: 89,
    imageUrl: 'https://picsum.photos/400/400?random=2',
    about: 'Expert in clinical and cosmetic dermatology.',
    consultationFee: 1000,
  },
  {
    id: 'd3',
    name: 'Dr. Meera Patel',
    specialty: 'Pediatrician',
    qualification: 'MBBS, MD (Pediatrics)',
    experienceYears: 15,
    location: 'Ahmedabad, GJ',
    clinicName: 'Little Smiles Hospital',
    isVerified: true,
    rating: 4.9,
    reviewCount: 210,
    imageUrl: 'https://picsum.photos/400/400?random=3',
    about: 'Dedicated to child healthcare and vaccination programs.',
    consultationFee: 800,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Digital Blood Pressure Monitor',
    category: 'Devices',
    price: 2499,
    rating: 4.5,
    imageUrl: 'https://picsum.photos/300/300?random=10',
    inStock: true,
  },
  {
    id: 'p2',
    name: 'N95 Medical Masks (Pack of 10)',
    category: 'Supplies',
    price: 499,
    rating: 4.8,
    imageUrl: 'https://picsum.photos/300/300?random=11',
    inStock: true,
  },
  {
    id: 'p3',
    name: 'Vitamin C Supplements',
    category: 'Wellness',
    price: 650,
    rating: 4.3,
    imageUrl: 'https://picsum.photos/300/300?random=12',
    inStock: true,
  },
  {
    id: 'p4',
    name: 'Infrared Thermometer',
    category: 'Devices',
    price: 1800,
    rating: 4.6,
    imageUrl: 'https://picsum.photos/300/300?random=13',
    inStock: true,
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Managing Hypertension in Urban India',
    summary: 'Lifestyle changes and dietary habits to control high blood pressure effectively.',
    authorName: 'Dr. Anjali Desai',
    authorRole: 'Cardiologist',
    date: 'Oct 12, 2023',
    imageUrl: 'https://picsum.photos/800/400?random=20',
    category: 'Cardiology',
  },
  {
    id: 'a2',
    title: 'The Importance of Early Vaccination',
    summary: 'A guide for new parents on the immunization schedule recommended by IAP.',
    authorName: 'Dr. Meera Patel',
    authorRole: 'Pediatrician',
    date: 'Sep 28, 2023',
    imageUrl: 'https://picsum.photos/800/400?random=21',
    category: 'Pediatrics',
  },
];

export const SPECIALTIES = [
  'Cardiologist', 'Dermatologist', 'General Physician', 'Pediatrician', 'Orthopedic', 'Neurologist', 'Dentist'
];
