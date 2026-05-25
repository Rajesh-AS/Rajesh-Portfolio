export const LINKEDIN_URL =
  "https://www.linkedin.com/in/rajesh-as-8102a7369/" as const;

export const siteContent = {
  linkedin: LINKEDIN_URL,

  seo: {
    title: "Rajesh AS — Software Developer & AI/ML Engineer",
    description:
      "Portfolio of Rajesh AS — Software Developer specializing in Python, Java, DSA, and AI/ML. Building real-world ML projects, open to internships. Coimbatore, India.",
    keywords: [
      "Rajesh AS",
      "Software Developer",
      "AI/ML Engineer",
      "Python",
      "Machine Learning",
      "Streamlit",
      "Coimbatore",
      "Internships",
    ],
  },

  hero: {
    name: "Rajesh",
    nameAccent: "AS",
    headline:
      "Software Developer · Python · Java · DSA · AI/ML Engineer · Building Real-World Projects",
    location: "Coimbatore, Tamil Nadu, India",
    openTo: "Open to Internships",
    roles: [
      "AI/ML Engineer",
      "Python Developer",
      "Full-Stack Builder",
      "Student Developer",
    ],
    bio: [
      "I build end-to-end ML applications — from data preprocessing and model training to Streamlit deployments that real users can interact with.",
      "Learning in public on LinkedIn, turning coursework into production-minded projects across healthcare AI, finance, and applied data science.",
    ],
    ctaPrimary: "View Projects",
    ctaLinkedIn: "Connect on LinkedIn",
    ctaResume: "Download Resume",
    stats: [
      { label: "Projects Built", value: "8+" },
      { label: "Certifications", value: "7+" },
      { label: "Open To", value: "Internships" },
    ],
  },

  about: {
    label: "About",
    title: "Who I Am",
    subtitle: "A builder at the intersection of AI, software, and continuous learning",
    intro: [
      "I'm a B.Sc Computer Science (Artificial Intelligence) student at Rathinam College of Arts and Science, Coimbatore — passionate about turning theory into deployed systems.",
      "My work spans medical imaging, healthcare prediction, financial AI, and interactive ML apps. I share my journey openly and am actively seeking internship opportunities to grow with impactful teams.",
    ],
    educationLabel: "Education",
    languages: [
      { name: "Tamil", level: "Native" },
      { name: "English", level: "Professional working" },
    ],
    education: [
      {
        degree: "B.Sc Computer Science (Artificial Intelligence)",
        institution: "Rathinam College of Arts and Science, Coimbatore",
        period: "2024 – 2027",
        badge: "CGPA 7.56",
        active: true,
        highlights: [
          "Three consecutive years on the Honor's List",
          "Most Innovative — Annual Programming Exhibit",
          "Coursework: Machine Learning, Database Management, Web Development",
        ],
      },
      {
        degree: "Higher Secondary Education",
        institution: "T.M.H.N.U Matriculation HSS, Theni",
        period: "2023 – 2024",
        badge: "66%",
        active: false,
        highlights: [],
      },
    ],
    highlights: [
      {
        icon: "☁️",
        title: "AWS Academy — ML Foundations",
        description:
          "Completed 20-hour AWS Academy Graduate training covering ML algorithms, data preprocessing, and AWS ML tools.",
      },
      {
        icon: "🤖",
        title: "Generative AI for Beginners",
        description:
          "Simplilearn certification — learned how data curation and intentional design drive AI value beyond model size.",
      },
      {
        icon: "⚙️",
        title: "QNX & RTOS Workshops",
        description:
          "Hands-on exposure to real-time OS, microkernel architecture, and embedded systems at Rathinam Technical Campus.",
      },
    ],
  },

  skills: {
    label: "Skills",
    title: "Tech Stack",
    subtitle: "Tools and technologies I use to ship real-world projects",
    intro:
      "From Python ML pipelines to web front-ends and cloud foundations — always expanding through certifications and project work.",
    marquee: [
      "Python",
      "Java",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Streamlit",
      "Pandas",
      "OpenCV",
      "AWS",
      "SQL",
      "Git",
      "Next.js",
      "JavaScript",
      "HTML/CSS",
    ],
    rows: [
      { category: "Languages", skills: ["Python", "Java", "JavaScript"] },
      { category: "AI / ML", skills: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Deep Learning"] },
      { category: "Web", skills: ["HTML", "CSS", "JavaScript", "Next.js", "Streamlit"] },
      { category: "Data & Cloud", skills: ["Pandas", "NumPy", "SQL", "AWS ML", "Matplotlib"] },
      { category: "Tools", skills: ["Git", "GitHub", "VS Code", "Jupyter"] },
      { category: "Core", skills: ["DSA", "OOP", "Problem Solving", "Generative AI"] },
      { category: "Soft", skills: ["Teamwork", "Adaptability", "Learning in Public"] },
    ],
  },

  projects: {
    label: "Projects",
    title: "Things I've Built",
    subtitle: "End-to-end ML systems with interactive UIs — deployed and shared in public",
    items: [
      {
        num: "01",
        emoji: "🧠",
        title: "Medical Image Restoration using Deep Learning",
        description:
          "Deep learning pipeline for MRI/CT enhancement — noise reduction and sharper diagnostic detail. Evaluated with PSNR & SSIM metrics.",
        tags: ["Python", "TensorFlow/Keras", "OpenCV", "NumPy"],
        featured: true,
        liveUrl: null,
        githubUrl: null,
      },
      {
        num: "02",
        emoji: "🔬",
        title: "Cancer Risk Prediction System",
        description:
          "Random Forest classifier with probability-based outputs for clinical interpretability. Full Streamlit app with feature engineering and model persistence.",
        tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
        featured: false,
        liveUrl: "https://lnkd.in/gx7kty5v",
        githubUrl: "https://lnkd.in/gb4D2cNN",
      },
      {
        num: "03",
        emoji: "💰",
        title: "FinFreedom AI — Financial Freedom Predictor",
        description:
          "AI system projecting financial freedom timelines from income and savings patterns using regression models and Streamlit.",
        tags: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Matplotlib"],
        featured: false,
        liveUrl: null,
        githubUrl: null,
      },
      {
        num: "04",
        emoji: "🌤️",
        title: "Weather Prediction System",
        description:
          "Interactive ML app — users enter climate conditions and get instant temperature and weather insights. End-to-end preprocessing to deployment.",
        tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
        featured: false,
        liveUrl: null,
        githubUrl: null,
      },
      {
        num: "05",
        emoji: "🍷",
        title: "Wine Quality Prediction",
        description:
          "Predicts wine quality from chemical properties. Fixing feature scaling improved accuracy ~15% — a lesson in data engineering over algorithm choice.",
        tags: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
        featured: false,
        liveUrl: null,
        githubUrl: null,
      },
      {
        num: "06",
        emoji: "📊",
        title: "DBSCAN Wine Clustering & Anomaly Detection",
        description:
          "Density-based clustering exposing outlier wines. Built with StandardScaler, Streamlit UI, and Joblib pipeline persistence.",
        tags: ["Python", "Scikit-learn", "Streamlit", "DBSCAN"],
        featured: false,
        liveUrl: "https://lnkd.in/gEwqdR2e",
        githubUrl: "https://lnkd.in/guRWR2HU",
      },
    ],
  },

  certifications: {
    label: "Certifications",
    title: "Continuous Learning",
    subtitle: "Industry-aligned credentials from Meta, AWS, Simplilearn, and more",
    intro:
      "Actively upskilling across front-end, back-end, databases, generative AI, and cloud ML foundations.",
    items: [
      {
        issuer: "Meta",
        name: "Introduction to Databases for Back-End Development",
        date: "Feb 2026",
        category: "meta",
      },
      {
        issuer: "Meta",
        name: "Introduction to Front-End Development",
        date: "Feb 2026",
        category: "meta",
      },
      {
        issuer: "Meta",
        name: "Version Control",
        date: "Feb 2026",
        category: "meta",
      },
      {
        issuer: "Meta",
        name: "HTML and CSS in depth",
        date: "Apr 2025",
        category: "meta",
      },
      {
        issuer: "Simplilearn",
        name: "Generative AI for Beginners",
        date: "Jan 2026",
        category: "other",
      },
      {
        issuer: "Skillsoft",
        name: "Fundamentals of AI & ML: Introduction to Artificial Intelligence",
        date: "Jun 2025",
        category: "other",
      },
      {
        issuer: "AWS Academy",
        name: "Machine Learning Foundations",
        date: "2025",
        category: "aws",
      },
    ],
  },

  contact: {
    label: "Contact",
    title: "Let's Connect",
    subtitle: "Open to internships, collaborations, and conversations about AI & software",
    headline: "Let's build something meaningful together",
    subtext:
      "Whether you have a project idea, an internship opportunity, or want to follow my learning journey — I'd love to connect.",
    ctaLinkedIn: "Connect on LinkedIn",
    ctaEmail: "Send an Email",
    items: [
      {
        label: "LinkedIn",
        value: "linkedin.com/in/rajesh-as-8102a7369",
        href: LINKEDIN_URL,
      },
      {
        label: "Email",
        value: "rajeshsubramanian.as@gmail.com",
        href: "mailto:rajeshsubramanian.as@gmail.com",
      },
      {
        label: "GitHub",
        value: "github.com/Rajesh-AS",
        href: "https://github.com/Rajesh-AS",
      },
    ],
  },

  footer: {
    tagline: "Building in public — one project at a time.",
    copyright: "© 2026 Rajesh AS · Next.js · Vercel",
  },

  nav: {
    links: [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#contact", label: "Contact" },
    ],
  },
} as const;
