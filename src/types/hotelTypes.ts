export interface Wifi {
  network: string;
  password: string;
}

export interface Option {
  id: number;
  label: string;
}

export interface Subcategory {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  options: Option[];
}

export interface Category {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  subcategories: Subcategory[];
}

export interface Amenity {
  id: number;
  icon: string;
  title: string;
  accessTime: string;
  description: string;
  navigateTo?: string;
}

export interface QuickAccess {
  id: number;
  icon: string;
  title: string;
  modalType: string;
}

export interface SpecialTime {
  id: number;
  time: string;
  timeLabel: string;
}

export interface ProgressStep {
  id: number;
  icon: string;
  title: string;
  active: boolean;
}

export interface HotelResponse {
  name: string;
  wifi: Wifi;
  amenities: Amenity[];
  categories: Category[];
  quickAccess: QuickAccess[];
  specialTimes: SpecialTime[];
  progressSteps: ProgressStep[];
}
