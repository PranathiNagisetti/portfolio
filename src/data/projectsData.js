import mediintel from "../assets/projects/mediintel.png"
import poultry from "../assets/projects/poultry.png"
import jobsprint from "../assets/projects/jobsprint.png"
import hostelease from "../assets/projects/hostelease.png"
import OPFD from "../assets/projects/OPFD.png"
import chatbot from "../assets/projects/chatbot.png"
import mockmate from "../assets/projects/mockmate.png"
import instainvites from "../assets/projects/instainvites.png"
const projects = [

    {
    id: "poultry-detect",

    title: "Poultry Detect",

    image: poultry,

    description:
      "AI-powered poultry disease detection system using deep learning and computer vision.",

    fullDescription:
      "Poultry Detect is an AI-powered web application that helps farmers identify poultry diseases at an early stage using image classification. The system uses transfer learning with ResNet50 to analyze uploaded chicken images and classify them into disease categories such as Coccidiosis, Newcastle Disease, Salmonella, or Healthy. Built with Flask and integrated with a responsive frontend, the platform enables quick disease screening, helping farmers reduce losses and take timely preventive action.",

    tech: [
      "Python",
      "Flask",
      "TensorFlow",
      "Keras",
      "ResNet50",
      "Transfer Learning",
      "OpenCV",
      "HTML",
      "CSS",
      "JavaScript"
    ],

    github: "https://github.com/PranathiNagisetti/Poultry-Detect",

    demo: "https://huggingface.co/spaces/Pranathi55/Poultry-Disease-Detection",

    features: [
      "AI-powered poultry disease classification",
      "Transfer learning using ResNet50",
      "Image upload and real-time prediction",
      "Disease confidence score prediction",
      "Responsive web interface",
      "Flask-based backend integration",
      "Image preprocessing and normalization",
      "Early disease detection support for farmers"
    ]
  },

  {
    id: "Online Payment Fraud Detection",

    title: "Online Payment Fraud Detection",

    image: OPFD,

    description:
      "AI-powered online payment fraud detection system.",

    fullDescription:
      "An AI-powered web application that detects fraudulent online transactions using Machine Learning models. The system analyzes transaction details and predicts whether a transaction is Fraudulent or Legitimate with a probability score.",

    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "Gradio / Flask", "Joblib", "JavaScript",  "HTML", "CSS"],
    github: "https://github.com/PranathiNagisetti/Online-Payment-Fraud-Detection",

    demo: "https://pranathi55-onlinepaymentfrauddetection.hf.space/",

    features: [
      "AI-powered fraud detection",
      "Transaction analysis",
      "Fraud probability score",
      "Supports multiple transaction types ",
      "Scaled and preprocessed input data ",
      "User-friendly interface",
      "Real-time prediction",
      "Secure data handling"
    ]
  },

  {
    id: "HostelEase",

    title: "HostelEase",

    image: hostelease,

    description:
      "AI-powered smart hostel management and student companion system.",

    fullDescription:
      "HostelEase is a smart hostel companion web application designed to simplify hostel management for students and wardens. The platform includes outing management with QR-based verification, complaint and feedback systems, notice board updates, AI-powered Gemini chatbot assistance, and hostel dashboard monitoring. Built using Firebase services and deployed as a real-time web application.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Gemini API"
    ],

    github: "https://github.com/PranathiNagisetti/HostelEase",

    demo: "https://hostelease-e81f4.web.app",

    features: [
      "QR-based outing verification",
      "Student outing requests",
      "Complaint management system",
      "Feedback and response system",
      "AI chatbot integration",
      "Real-time notice board",
      "Hostel dashboard analytics",
      "Firebase authentication"
    ]
  },
  {
    id: "JobSprint",

    title: "JobSprint",

    image: jobsprint,

    description:
      "Smart job aggregator and recommendation platform.",

    fullDescription:
      "JobSprint is a centralized job aggregator platform that fetches real-time job listings from multiple APIs to simplify the job search experience. The platform provides smart filtering, personalized job recommendations, and a responsive user interface for seamless browsing across devices. It integrates multiple job APIs to deliver updated opportunities efficiently for job seekers.",

    tech: [
      "ReactJS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL",
      "REST APIs"
    ],

    github: "https://github.com/PranathiNagisetti/JobSprint",

    demo: "https://jobsprint.infinityfreeapp.com/auth/login.html",

    features: [
      "Multi-API job integration",
      "Real-time job listings",
      "Smart search filters",
      "Personalized recommendations",
      "Responsive UI design",
      "Remote and salary-based filtering",
      "User authentication system",
      "Job search optimization"
    ]
  },
  {
    id: "ChatBot",

    title: "Gemini AI Chatbot",

    image: chatbot,

    description:
      "AI-powered conversational chatbot using Gemini API.",

    fullDescription:
      "An intelligent AI chatbot built using Streamlit and Google's Gemini API to provide real-time conversational assistance. The chatbot features dynamic response rendering, chat history management, downloadable conversations, and an interactive user interface. The application is securely deployed on Hugging Face Spaces with environment variable-based API key handling.",

    tech: [
      "Python",
      "Streamlit",
      "Gemini API",
      "Generative AI",
      "Google AI",
      "HTML",
      "CSS"
    ],

    github: "https://github.com/PranathiNagisetti/ChatBot",

    demo: "https://pranathi55-chatbot.hf.space/",

    features: [
      "Real-time AI conversations",
      "Gemini API integration",
      "Interactive chat interface",
      "Chat history management",
      "Download conversation feature",
      "Typing animation effects",
      "Responsive UI",
      "Secure API key handling"
    ]
  },

  {
  id: "MockMate",

  title: "MockMate.ai",

  image: mockmate,

  description:
    "AI-powered mock interview preparation platform.",

  fullDescription:
    "MockMate.ai is a full-stack AI-driven mock interview platform designed to simulate real-world technical interviews. The system generates dynamic role-based interview questions using the Gemini API and evaluates user responses through an NLP-based rubric scoring engine. It supports both text-based and voice-based interview modes, performance analytics, secure JWT authentication, and scalable MongoDB data storage for interview session tracking.",

  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Gemini API",
    "NLP",
    "Speech-to-Text"
  ],

  github: "https://github.com/PranathiNagisetti/MockMate-AI",

  demo: "https://your-demo-link.com",

  features: [
    "AI-generated interview questions",
    "Role-based interview simulation",
    "Voice-based interview mode",
    "Text-based interview mode",
    "NLP rubric scoring system",
    "Performance analytics dashboard",
    "JWT authentication",
    "Session tracking and history"
  ]
},

]

export default projects