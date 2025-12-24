export type Speaker = {
  id: string;
  name: string;
  title: string;
  affiliation: string;
  bio: string;
  imgSrc: string;
  imgHint: string;
  researchInterests?: string[];
  talkTitle?: string;
  talkAbstract?: string;
  publications?: string[];
};

export type ImportantDate = {
  title: string;
  date: string;
  status: 'Open' | 'Closed' | 'Upcoming';
};

export type FAQ = {
  question: string;
  answer: string;
};

export type FAQCategory = {
  category: string;
  faqs: FAQ[];
}

export type PublicationInfo = {
    title: string;
    content: string;
}

export type CommitteeMember = {
  name: string;
  title?: string;
  affiliation?: string;
  imgSrc?: string;
  imgHint?: string;
}

export type Committee = {
    title: string;
    members: CommitteeMember[];
}

export type Track = {
    title: string;
    description: string;
    keywords: string[];
}

export type RegistrationTier = {
    category: string;
    earlyBirdPrice: string;
    regularPrice: string;
}

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  imageSrc: string;
  imageHint: string;
  excerpt: string;
  content: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  imageSrc: string;
  imageHint: string;
  excerpt: string;
  content: string;
};
