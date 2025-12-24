import type { Speaker, ImportantDate, FAQ, FAQCategory, PublicationInfo, Committee, Track, RegistrationTier, NewsArticle, BlogArticle } from './types';

export const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    title: 'Chief Scientist, Environmental Genomics',
    affiliation: 'BioSynthetics Inc.',
    bio: 'Dr. Reed is a pioneer in synthetic biology and its applications in environmental remediation. Her work focuses on engineering microorganisms to break down pollutants.',
    imgSrc: 'https://picsum.photos/seed/speaker1/400/400',
    imgHint: 'female scientist portrait',
    researchInterests: ['Synthetic Biology', 'Bioremediation', 'Genomics'],
    talkTitle: 'Engineering Nature: Synthetic Biology for a Cleaner Planet',
    talkAbstract: 'This talk will explore the cutting-edge intersection of synthetic biology and environmental science. We will discuss the design and application of genetically engineered microorganisms capable of degrading persistent organic pollutants, sequestering heavy metals, and producing biofuels from waste. The session will cover recent breakthroughs, ethical considerations, and the future potential of this transformative technology to address some of the world\'s most pressing environmental challenges.',
    publications: [
        'Reed, E., et al. (2023). "A synthetic microbial consortium for the complete mineralization of plastics." Nature Biotechnology.',
        'Reed, E. (2021). "Genomic blueprints for environmental cleanup." Science.'
    ]
  },
  {
    id: '2',
    name: 'Prof. Marcus Thorne',
    title: 'Professor of Marine Ecology',
    affiliation: 'Oceanic Institute of Technology',
    bio: 'Prof. Thorne is a leading authority on coral reef ecosystems and the impacts of climate change. His research provides critical insights into marine conservation strategies.',
    imgSrc: 'https://picsum.photos/seed/speaker2/400/400',
    imgHint: 'male scientist portrait',
    researchInterests: ['Marine Biology', 'Climate Change', 'Coral Reef Ecology'],
    talkTitle: 'The Future of Coral Reefs in a Warming World',
    talkAbstract: 'Coral reefs are among the most biodiverse and threatened ecosystems on Earth. This presentation will provide a comprehensive overview of the current state of coral reefs, the multifaceted impacts of climate change—including ocean acidification and warming—and the latest scientific efforts to enhance their resilience. We will explore innovative strategies such as assisted evolution, coral cryopreservation, and large-scale restoration projects, offering a message of hope grounded in scientific action.',
    publications: [
        'Thorne, M. (2022). "Resilience in Reef Ecosystems." Annual Review of Marine Science.',
        'Thorne, M., & Chen, L. (2020). "Global patterns of coral bleaching." Nature Climate Change.'
    ]
  },
];

export const importantDates: ImportantDate[] = [
  { title: 'Abstract Submission Deadline', date: 'March 31, 2026', status: 'Open' },
  { title: 'Notification of Acceptance', date: 'May 15, 2026', status: 'Upcoming' },
  { title: 'Camera-Ready Paper Due', date: 'June 1, 2026', status: 'Upcoming' },
  { title: 'Conference Dates', date: 'June 25-26, 2026', status: 'Upcoming' },
];

export const conferenceTracks: Track[] = [
    { 
        title: "Animal Science & Veterinary Studies",
        description: "Exploring advancements in animal health, welfare, and production.",
        keywords: ["Animal Nutrition", "Veterinary Medicine", "Livestock Management", "Animal Genetics"]
    },
    { 
        title: "Aquatic Science & Fisheries",
        description: "Focusing on the study of aquatic ecosystems and sustainable fisheries.",
        keywords: ["Marine Biology", "Aquaculture", "Fisheries Management", "Oceanography"]
    },
    { 
        title: "Environmental & Natural Sciences",
        description: "Addressing critical environmental challenges and solutions for a sustainable planet.",
        keywords: ["Climate Change", "Conservation Biology", "Ecology", "Pollution Control"]
    },
    { 
        title: "Biochemical & Molecular Sciences",
        description: "Delving into the molecular mechanisms of life and biochemical processes.",
        keywords: ["Genomics", "Proteomics", "Biochemistry", "Molecular Biology"]
    },
    { 
        title: "Applied Science & Emerging Technologies",
        description: "Showcasing the application of scientific knowledge and new technologies in various fields.",
        keywords: ["Biotechnology", "Nanotechnology", "Renewable Energy", "Material Science"]
    },
];

export const committees: Committee[] = [
    {
        title: "General Chairs / Organizing Committee",
        members: [
            { name: 'Dr. Aris Spanos', title: 'Chief Patron', affiliation: 'Virginia Tech' },
            { name: 'Dr. Maria Ivanova', title: 'Conference Chair', affiliation: 'Northeastern University' },
            { name: 'Dr. Kenji Tanaka', title: 'Co-Chair', affiliation: 'University of Tokyo' },
            { name: 'Dr. Fatima Al-Marzouqi', title: 'Co-Chair', affiliation: 'Khalifa University' },
            { name: 'Dr. David Kim', title: 'Program Chair', affiliation: 'KAIST' },
        ]
    },
    {
        title: "Track Chairs",
        members: [
            { name: 'Prof. Wei Zhang', title: 'Animal Science', affiliation: 'Tsinghua University' },
            { name: 'Dr. Sofia Rossi', title: 'Aquatic Science', affiliation: 'University of Bologna' },
            { name: 'Dr. Ben Carter', title: 'Environmental Science', affiliation: 'MIT' },
            { name: 'Dr. Chloe Dubois', title: 'Biochemical Science', affiliation: 'University of Paris' },
            { name: 'Mr. Alex Johnson', title: 'Applied Science', affiliation: 'ScientiaForum' },
        ]
    },
    {
        title: "Technical / Review Committee",
        members: [
            { name: 'Dr. Emily White', affiliation: 'Stanford University' },
            { name: 'Dr. Carlos Hernandez', affiliation: 'National University of Singapore' },
            { name: 'Dr. Priya Sharma', affiliation: 'Indian Institute of Science' },
            { name: 'Dr. Omar Al-Farsi', affiliation: 'King Abdullah University of Science and Technology' },
        ]
    },
];

export const registrationTiers: RegistrationTier[] = [
    { category: 'Student', earlyBirdPrice: '$150', regularPrice: '$200' },
    { category: 'Academic/Professional', earlyBirdPrice: '$250', regularPrice: '$300' },
    { category: 'Industry', earlyBirdPrice: '$400', regularPrice: '$450' },
    { category: 'Listener', earlyBirdPrice: '$100', regularPrice: '$120' },
];

export const publicationData: PublicationInfo[] = [
    { title: "Conference Proceedings", content: "All accepted and registered papers will be published in the conference proceedings with an ISBN. The proceedings will be submitted for indexing in major databases." },
    { title: "Journal Collaboration", content: "Selected high-quality papers will be invited for publication in special issues of our partner journals after a further peer-review process. More details will be announced soon." },
    { title: "DOI and Indexing", content: "Each paper will be assigned a Digital Object Identifier (DOI). We are working with Scopus, Google Scholar, and other indexing services." },
    { title: "Ethics &amp; Originality Policy", content: "All submissions must be original work and not under consideration for publication elsewhere. We enforce a strict policy against plagiarism. Authors must adhere to the highest standards of academic integrity." },
];

export const faqs: FAQ[] = [
    { question: 'What is the submission deadline?', answer: 'The deadline for abstract submissions is January 15, 2026, and for full papers is March 31, 2026.' },
    { question: 'How can I register?', answer: 'Registration can be completed online through our registration page. We offer different categories for students, academics, and industry professionals.' },
    { question: 'Will the conference be online or in-person?', answer: 'ICLEAS 2026 will be held as an online conference, hosted by ScientiaForum.' },
];

export const newsArticles: NewsArticle[] = [
  {
    slug: 'conference-announcement',
    title: 'ICLEAS 2026 Officially Announced: A New Era of Interdisciplinary Science',
    date: '2025-10-01',
    author: 'ICLEAS Organizing Committee',
    category: 'Announcements',
    imageSrc: 'https://picsum.photos/seed/news-announce/1200/800',
    imageHint: 'conference stage',
    excerpt: 'ScientiaForum is proud to announce the inaugural International Conference on Life, Environmental, and Applied Sciences (ICLEAS) 2026, set to take place online on June 25-26, 2026. This premier event will bring together global experts to foster collaboration and innovation.',
    content: '<p>ScientiaForum is proud to announce the inaugural International Conference on Life, Environmental, and Applied Sciences (ICLEAS) 2026, set to take place online on June 25-26, 2026. This premier event will bring together global experts to foster collaboration and innovation.</p><p>The conference aims to break down silos between disciplines, creating a unique platform where breakthroughs in one field can inspire advancements in others. We invite researchers, academics, industry leaders, and policymakers to join us for two days of insightful keynotes, in-depth technical sessions, and vibrant networking opportunities.</p>'
  },
  {
    slug: 'call-for-papers-open',
    title: 'Call for Papers Now Open for ICLEAS 2026',
    date: '2025-11-15',
    author: 'Dr. David Kim, Program Chair',
    category: 'Submissions',
    imageSrc: 'https://picsum.photos/seed/news-cfp/1200/800',
    imageHint: 'researcher writing',
    excerpt: 'We are now accepting submissions for ICLEAS 2026. We invite original research papers across our five main tracks, including life sciences, environmental studies, and applied technologies. The deadline for abstract submission is March 31, 2026.',
    content: '<p>We are now accepting submissions for ICLEAS 2026. We invite original research papers across our five main tracks: Animal Science, Aquatic Science, Environmental Science, Biochemical &amp; Molecular Sciences, and Applied Technologies.</p><p>This is a unique opportunity to share your work with a global audience of your peers and contribute to a growing body of interdisciplinary knowledge. All accepted papers will be published in our indexed proceedings. Visit the Call for Papers page for detailed guidelines and templates. The deadline for abstract submission is March 31, 2026.</p>'
  },
  {
    slug: 'keynote-speaker-announcement',
    title: 'Dr. Evelyn Reed Confirmed as Keynote Speaker',
    date: '2025-12-05',
    author: 'ICLEAS Organizing Committee',
    category: 'Speakers',
    imageSrc: 'https://picsum.photos/seed/news-speaker/1200/800',
    imageHint: 'scientist speaking',
    excerpt: 'We are thrilled to announce that Dr. Evelyn Reed, a pioneer in synthetic biology from BioSynthetics Inc., will be a keynote speaker at ICLEAS 2026. Dr. Reed will share her groundbreaking research on environmental remediation.',
    content: '<p>We are thrilled to announce that Dr. Evelyn Reed, a pioneer in synthetic biology from BioSynthetics Inc., will be a keynote speaker at ICLEAS 2026. Dr. Reed will share her groundbreaking research on environmental remediation.</p><p>Her talk, titled "Engineering Nature: Synthetic Biology for a Cleaner Planet," will delve into how genetically engineered microorganisms can offer solutions to some of the world’s most pressing pollution challenges. Dont miss this opportunity to hear from a true leader in the field.</p>'
  }
];

export const blogArticles: BlogArticle[] = [
  {
    slug: 'the-future-of-sustainable-agriculture',
    title: 'The Future of Sustainable Agriculture: 5 Innovations to Watch',
    date: '2026-03-10',
    author: 'Jane Doe, Agri-Tech Analyst',
    category: 'Technology',
    imageSrc: 'https://picsum.photos/seed/blog-agri/1200/800',
    imageHint: 'modern agriculture',
    excerpt: 'From precision farming to AI-driven crop management, technology is reshaping how we grow food. Discover five key innovations that are paving the way for a more sustainable and efficient agricultural future.',
    content: '<h2>1. Precision Farming</h2><p>Precision farming uses data-driven technologies to optimize crop yields and reduce waste. GPS, sensors, and drones allow farmers to monitor crop health, soil conditions, and weather patterns with unprecedented accuracy.</p><h2>2. Vertical Farming</h2><p>As urban populations grow, vertical farming offers a solution to produce fresh food locally. These indoor farms use controlled environments to grow crops year-round, using less water and land than traditional methods.</p><h2>3. Gene Editing with CRISPR</h2><p>CRISPR technology allows for precise modifications to plant genomes, making crops more resilient to pests, diseases, and climate change. This can lead to higher yields and reduced reliance on chemical pesticides.</p><h2>4. AI and Machine Learning</h2><p>AI algorithms can analyze vast amounts of data to provide farmers with actionable insights. From predicting disease outbreaks to optimizing irrigation schedules, AI is a powerful tool for modern agriculture.</p><h2>5. Blockchain for Supply Chain Transparency</h2><p>Blockchain technology can create a transparent and traceable food supply chain. This helps to ensure food safety, reduce fraud, and provide consumers with more information about the origin of their food.</p>'
  },
  {
    slug: 'navigating-the-world-of-scientific-publishing',
    title: 'Navigating the World of Scientific Publishing: A Guide for Early-Career Researchers',
    date: '2026-02-25',
    author: 'Dr. John Smith, Academic Editor',
    category: 'Academia',
    imageSrc: 'https://picsum.photos/seed/blog-publish/1200/800',
    imageHint: 'books library',
    excerpt: 'Getting your research published is a crucial step in an academic career. This guide provides practical tips for navigating the submission, peer review, and publication process.',
    content: '<h3>Choosing the Right Journal</h3><p>Selecting the appropriate journal is the first and most critical step. Consider the scope of the journal, its impact factor, and its target audience. Make sure your research aligns with the journal\'s focus.</p><h3>Writing a Compelling Manuscript</h3><p>Your manuscript should be well-structured, clearly written, and logically argued. A strong introduction, a robust methodology section, and a clear discussion of your findings are essential. Pay close attention to the journal\'s formatting guidelines.</p><h3>The Peer Review Process</h3><p>Peer review is a cornerstone of academic publishing. Be prepared to receive constructive criticism and revise your manuscript accordingly. Responding to reviewers\' comments thoughtfully and thoroughly is key to getting your paper accepted.</p><h3>Dealing with Rejection</h3><p>Rejection is a normal part of the publication process. Don\'t be discouraged. Use the feedback to improve your paper and submit it to another journal. Persistence is key.</p>'
  },
    {
    slug: 'the-importance-of-interdisciplinary-research',
    title: 'Breaking Down Silos: The Importance of Interdisciplinary Research',
    date: '2026-01-15',
    author: 'The ScientiaForum Team',
    category: 'Collaboration',
    imageSrc: 'https://picsum.photos/seed/blog-inter/1200/800',
    imageHint: 'team working',
    excerpt: 'The world\'s most complex problems rarely fit into neat academic boxes. This post explores why interdisciplinary collaboration is essential for driving meaningful innovation and solving global challenges.',
    content: '<p>In an increasingly interconnected world, the most significant breakthroughs often occur at the intersection of different fields. Interdisciplinary research brings together diverse perspectives, methodologies, and knowledge bases to tackle problems that a single discipline cannot solve alone.</p><p>By fostering collaboration between scientists, engineers, social scientists, and humanities scholars, we can create more holistic and effective solutions. Conferences like ICLEAS 2026 are designed to facilitate these crucial conversations and spark new collaborations that will shape our future.</p>'
  }
];
