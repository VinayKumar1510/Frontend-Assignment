export interface Contact {
  address: string;
  number: string;
  email: string;
}

export interface DataItem {
  patient_id: number;
  patient_name: string;
  age: number;
  photo_url: string;
  contact: Contact[];
  medical_issue: string;
}
