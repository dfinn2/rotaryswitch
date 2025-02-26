export interface Product {
  id: string;
  name: string;
  price: number; // Price in cents
  description: string;
  category: 'template' | 'service' | 'consultation';
  features: string[];
  popular: boolean;
  slug: string;
}

export const products: Product[] = [
  {
    id: "001",
    name: "NNN Agreement",
    price: 14900,
    description: "Non-disclosure, Non-compete, and Non-solicitation agreement template customized for your business",
    category: "template",
    features: [
      "Comprehensive protection for your business ideas",
      "Customizable confidentiality terms",
      "Prevention of competitive activities",
      "Protection against employee poaching",
      "China-specific legal provisions"
    ],
    popular: true,
    slug: "nnn"
  },
  {
    id: "002",
    name: "Employment Contract",
    price: 3500,
    description: "Standard employment agreement template compliant with Chinese labor laws",
    category: "template",
    features: [
      "Compliant with latest Chinese labor regulations",
      "Bilingual Chinese-English format",
      "Coverage of probation periods and termination",
      "Intellectual property protections",
      "Customizable compensation terms"
    ],
    popular: true,
    slug: "employment-contract"
  },
  {
    id: "003",
    name: "China Trademark Registration",
    price: 120000,
    description: "Full-service trademark registration in China, including application filing and follow-up",
    category: "service",
    features: [
      "Comprehensive trademark search",
      "Application preparation and filing",
      "Responses to office actions",
      "Registration certificate delivery",
      "12-month processing time"
    ],
    popular: true,
    slug: "trademark-registration"
  },
  {
    id: "004",
    name: "Distribution Agreement",
    price: 4900,
    description: "Template for product distribution agreements in the Chinese market",
    category: "template",
    features: [
      "Territory definition clauses",
      "Exclusivity options",
      "Performance requirements",
      "Termination conditions",
      "Inventory and logistics terms"
    ],
    popular: false,
    slug: "distribution-agreement"
  },
  {
    id: "005",
    name: "WFOE Formation Documents",
    price: 5900,
    description: "Complete document package for Wholly Foreign-Owned Enterprise setup",
    category: "template",
    features: [
      "Articles of Association",
      "Feasibility study template",
      "Capital requirement documentation",
      "Office lease agreement template",
      "Director appointment letters"
    ],
    popular: false,
    slug: "wfoe-formation"
  },
  {
    id: "006",
    name: "Legal Consultation (1 hour)",
    price: 15000,
    description: "One hour consultation with a legal expert specializing in Chinese business law",
    category: "consultation",
    features: [
      "Video conference with English-speaking attorney",
      "Review of specific legal questions",
      "Strategic legal advice",
      "Following email summary",
      "Available follow-up options"
    ],
    popular: false,
    slug: "legal-consultation"
  },
  {
    id: "007",
    name: "OEM Manufacturing Agreement",
    price: 4900,
    description: "Template for original equipment manufacturing agreements with Chinese factories",
    category: "template",
    features: [
      "Quality control provisions",
      "Intellectual property protections",
      "Payment and delivery terms",
      "Warranty and liability clauses",
      "Dispute resolution mechanisms"
    ],
    popular: false,
    slug: "oem-agreement"
  },
  {
    id: "008",
    name: "China Import License Guide",
    price: 1900,
    description: "Comprehensive guide to obtaining import licenses for various product categories",
    category: "template",
    features: [
      "Category-specific requirements",
      "Step-by-step application process",
      "Document templates and samples",
      "Common pitfalls and avoidance tactics",
      "Timeline expectations"
    ],
    popular: false,
    slug: "import-license-guide"
  },
  {
    id: "009",
    name: "Technology Transfer Agreement",
    price: 5900,
    description: "Template for technology licensing and transfer agreements compliant with Chinese regulations",
    category: "template",
    features: [
      "Technology definition provisions",
      "Licensing scope and limitations",
      "Compensation structures",
      "Regulatory compliance clauses",
      "Term and termination conditions"
    ],
    popular: true,
    slug: "technology-transfer"
  },
  {
    id: "010",
    name: "Privacy Policy Generator",
    price: 1900,
    description: "Customizable privacy policy template compliant with China's Personal Information Protection Law",
    category: "template",
    features: [
      "PIPL compliance measures",
      "Data collection descriptions",
      "User rights documentation",
      "Cross-border data transfer provisions",
      "Cookie and tracking disclosures"
    ],
    popular: false,
    slug: "privacy-policy"
  }
];