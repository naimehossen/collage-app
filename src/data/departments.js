import { 
  FaLaptopCode, FaBolt, FaHardHat, FaCogs, FaFlask, FaTshirt 
} from 'react-icons/fa';

export const departments = [
  {
    id: 1,
    name: "কম্পিউটার সায়েন্স",
    english: "Computer Science & Tech.",
    icon: FaLaptopCode,
    color: "blue",
    description: "সফটওয়্যার ডেভেলপমেন্ট, ওয়েব টেকনোলজি, নেটওয়ার্কিং ও হার্ডওয়্যার ট্রাবলশুটিং সহ হাই-এন্ড কম্পিউটিং ল্যাব",
    lab: "সফটওয়্যার & এআই ল্যাব",
    years: "৪ বছর মেয়াদী ডিপ্লোমা",
  },
  {
    id: 2,
    name: "ইলেকট্রিক্যাল",
    english: "Electrical Technology",
    icon: FaBolt,
    color: "yellow",
    description: "পাওয়ার জেনারেশন, ট্রান্সমিশন, ইন্ডাস্ট্রিয়াল ওয়্যারিং ও ইলেকট্রিক্যাল মেশিন বিষয়ে উন্নত প্রশিক্ষণ",
    lab: "পাওয়ার মেশিন ল্যাব",
    years: "৪ বছর মেয়াদী ডিপ্লোমা",
  },
  {
    id: 3,
    name: "সিভিল",
    english: "Civil Technology",
    icon: FaHardHat,
    color: "green",
    description: "স্ট্রাকচারাল ডিজাইন, সার্ভেয়িং, কনস্ট্রাকশন ম্যানেজমেন্ট ও আরবান ইনফ্রাস্ট্রাকচার ডেভেলপমেন্ট",
    lab: "সার্ভেয়িং ল্যাব",
    years: "৪ বছর মেয়াদী ডিপ্লোমা",
  },
  {
    id: 4,
    name: "মেকানিক্যাল",
    english: "Mechanical Technology",
    icon: FaCogs,
    color: "red",
    description: "ডিজাইন, ম্যানুফ্যাকচারিং, থার্মোডাইনামিক্স ও অটোমোবাইল ইঞ্জিনিয়ারিংয়ে দক্ষতা অর্জন",
    lab: "মেশিন শপ ল্যাব",
    years: "৪ বছর মেয়াদী ডিপ্লোমা",
  },
  {
    id: 5,
    name: "ফুড টেকনোলজি",
    english: "Food Technology",
    icon: FaFlask,
    color: "purple",
    description: "ফুড প্রসেসিং, কোয়ালিটি কন্ট্রোল, প্রিজারভেশন টেকনিক ও সেফটি স্ট্যান্ডার্ড শেখা",
    lab: "কেমিস্ট্রি & বায়ো ল্যাব",
    years: "৪ বছর মেয়াদী ডিপ্লোমা",
  },
  {
    id: 6,
    name: "টেক্সটাইল",
    english: "Textile Technology",
    icon: FaTshirt,
    color: "indigo",
    description: "ইয়ার্ন ম্যানুফ্যাকচারিং, ফেব্রিক প্রোডাকশন, ডাইং ও গার্মেন্টস কোয়ালিটি ম্যানেজমেন্ট",
    lab: "স্পিনিং & উইভিং ল্যাব",
    years: "৪ বছর মেয়াদী ডিপ্লোমা",
  }
];

export const stats = [
  { label: 'মোট ছাত্রছাত্রী', value: '৫০০০+', icon: 'fas fa-users' },
  { label: 'দক্ষ শিক্ষক', value: '১৫০+', icon: 'fas fa-chalkboard-teacher' },
  { label: 'সফল গ্র্যাজুয়েট', value: '১০০%', icon: 'fas fa-user-graduate' },
  { label: 'ল্যাব ও ওয়ার্কশপ', value: '৪০+', icon: 'fas fa-microscope' },
];