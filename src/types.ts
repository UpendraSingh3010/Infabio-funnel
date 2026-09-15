export interface AuditFormData {
  fullName: string;
  email: string;
  linkedinUrl: string;
  companyName: string;
  websiteUrl: string;
  category: string;
  currentCadence: string;
  biggestObstacle: string;
  primaryGoal: string;
  preferredDate?: string;
  preferredTime?: string;
  additionalNotes?: string;
}

export interface SystemStep {
  number: string;
  title: string;
  description: string;
  badge?: string;
  deliverables: string[];
}

export interface WhatWeHandleModule {
  id: string;
  title: string;
  tagline: string;
  points: string[];
  icon: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  quote?: string;
}

export interface PersonaTarget {
  role: string;
  category: string;
  description: string;
}
