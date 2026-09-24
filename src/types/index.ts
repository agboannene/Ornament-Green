export type LeadType = 'estate' | 'recycler' | 'investor';

export interface EstateInquiry {
  estateName: string;
  district: string;
  householdCount: number | '';
  contactName: string;
  phone: string;
  email: string;
  currentHaulerStatus: string;
  message?: string;
  timestamp: string;
}

export interface RecyclerInquiry {
  orgName: string;
  partnerType: string;
  materialFocus: string[];
  contactName: string;
  phone: string;
  email: string;
  message?: string;
  timestamp: string;
}

export interface InvestorInquiry {
  fullName: string;
  organization: string;
  investorType: string;
  email: string;
  phone?: string;
  requestDeck: boolean;
  message?: string;
  timestamp: string;
}

export interface SubmissionRecord {
  id: string;
  type: LeadType;
  title: string;
  subtitle: string;
  date: string;
  data: EstateInquiry | RecyclerInquiry | InvestorInquiry;
}
