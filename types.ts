export enum UserRole {
  PATIENT = 'PATIENT',
  DOCTOR = 'DOCTOR',
  STUDENT = 'STUDENT',
  INSTITUTION = 'INSTITUTION',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isVerified: boolean;
  avatarUrl?: string;
}

export interface DoctorProfile {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  experienceYears: number;
  location: string;
  clinicName: string;
  isVerified: boolean;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  about: string;
  consultationFee: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
  inStock: boolean;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  authorName: string;
  authorRole: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum AppointmentStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  patientName: string;
  date: string;
  time: string;
  status: AppointmentStatus;
}
