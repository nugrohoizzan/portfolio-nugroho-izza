const projectData = {
  yolov8: {
    title: "YOLOv8n Badminton In/Out Detection",
    image: "assets/projects/8.webp",
    date: "October 2025",
    categories: ["Machine Learning", "Computer Vision", "YOLOv8n"],
    description: `
This project is a computer vision–based system designed to automatically determine whether a badminton shuttlecock lands IN or OUT of the court in real time.

The core of the system utilizes YOLOv8n, a lightweight yet powerful object detection model, to detect the shuttlecock during high-speed rallies. Due to the fast movement of the shuttlecock, special attention was given to detection accuracy and inference speed to ensure reliable real-time performance.

In addition to shuttlecock detection, the system incorporates badminton court line reference logic to evaluate the shuttlecock’s final landing position. By analyzing the spatial relationship between the detected shuttlecock and court boundaries, the system is able to make precise IN/OUT decisions similar to professional line-judge systems.

This project demonstrates the practical application of deep learning and computer vision techniques in sports technology. It highlights skills in model selection, real-time detection, spatial analysis, and system integration, making it suitable for intelligent sports analytics and automated decision-support systems.
    `,
    github: "https://github.com/nugrohoizzan/Badminton_InOut_Detector"
  },
  abidin: {
  title: "Abidin's Portfolio Website",
  image: "assets/projects/7.webp",
  date: "September 2025",
  categories: [
    "Website Development",
    "Personal Branding",
    "Frontend Development",
    "React.js"
  ],
  description: `
Abidin's Portfolio Website is a modern personal portfolio designed to present professional identity, skills, and projects in a clean and well-structured digital format.

The website focuses on minimalist design principles and clear visual hierarchy to ensure content is easy to navigate and visually appealing across different devices. Particular attention was given to layout consistency, typography, and spacing to create a professional and polished user experience.

This project implements responsive design techniques to ensure optimal appearance on desktop, tablet, and mobile devices. Interactive sections such as project showcases and profile highlights are structured to effectively communicate personal branding without overwhelming the viewer.

Through this project, I strengthened my frontend development skills, especially in building modern layouts, implementing responsive behavior, and translating branding concepts into functional web interfaces suitable for professional portfolios.
  `,
  github: "https://github.com/nugrohoizzan/portofolio-abidin"
},

  chord: {
  title: "Real-Time Chord Classifier using MFCC & XGBoost",
  image: "assets/projects/5.webp",
  date: "June 2025",
  categories: ["Machine Learning", "Audio Processing", "MFCC", "XGBoost"],
  description: `
This project is a real-time guitar chord classification system designed to recognize guitar chords from audio input using machine learning and digital signal processing techniques.

The system works by capturing live or recorded guitar audio and extracting meaningful features using Mel-Frequency Cepstral Coefficients (MFCC), which are widely used to represent the spectral characteristics of sound in audio analysis tasks.

After feature extraction, the MFCC data is processed and classified using the XGBoost algorithm, a powerful gradient boosting model known for its performance and efficiency in classification problems. The model was trained on labeled guitar chord datasets to accurately distinguish between different chord types.

This project emphasizes the integration of audio signal processing with machine learning pipelines, including data preprocessing, feature extraction, model training, and real-time prediction. The classifier is capable of delivering fast and reliable chord recognition, making it suitable for real-time music analysis applications.

Overall, this project demonstrates practical implementation of machine learning in audio-based recognition systems and showcases how theoretical signal processing concepts can be applied to solve real-world problems in music technology.
  `,
  github: "https://github.com/nugrohoizzan/Guitar-Chords-Classifier"
},

kaiMapping: {
  title: "KAI Mapping Assets",
  image: "assets/projects/2.webp",
  date: "July 2024",
  categories: [
    "Website Development",
    "Asset Mapping",
    "Laravel",
    "PHP",
    "Geospatial Data"
  ],
  description: `
KAI Mapping Assets is a web-based asset mapping system developed to manage and visualize PT Kereta Api Indonesia’s (PT KAI) asset locations in a structured and interactive way.

This project was built during an internship program at PT KAI DAOP 6 Yogyakarta and focuses on digitalizing asset data to improve accessibility, monitoring, and internal reporting processes. The system allows users to store, update, and visualize asset information directly on an interactive map.

The application was developed using the Laravel framework with PHP as the backend technology, implementing a structured MVC architecture for maintainability and scalability. Asset data is managed through a database-driven system and displayed using interactive mapping features to show precise geographical locations.

Key features of this project include asset data management (CRUD), location-based visualization, responsive user interface, and role-based access for internal usage. The system helps replace manual asset tracking with a centralized digital solution.

Overall, this project demonstrates practical experience in full-stack web development, geospatial data handling, and enterprise-level system development using Laravel.
  `,
  github: "https://github.com/nugrohoizzan/intern-kai"
},

animek: {
  title: "Animek — Anime Explorer App",
  image: "assets/projects/1.webp",
  date: "May 2024",
  categories: [
    "App Development",
    "Flutter",
    "Dart",
    "REST API"
  ],
  description: `
Animek is a mobile application designed to provide a simple and intuitive way to explore anime content and access essential information in one place.

The app was developed using Flutter with Dart as the main programming language, allowing cross-platform compatibility and a consistent user experience across mobile devices. Anime data is retrieved from the MyAnimeList API, ensuring up-to-date and reliable information for users.

Animek allows users to browse anime lists, view detailed information such as synopsis, genres, ratings, and release status, and search for specific titles easily. The interface focuses on clean navigation, responsiveness, and user-friendly design to enhance the overall browsing experience.

This project demonstrates the integration of third-party REST APIs, asynchronous data handling, and state management in Flutter. It also highlights practical experience in building mobile applications that consume external services and present dynamic content effectively.
  `,
  github: "https://github.com/nugrohoizzan/Anime-App"
},

tukusepatu: {
  title: "TukuSepatu — E-Commerce Shoe App",
  image: "assets/projects/6.webp",
  date: "April 2024",
  categories: [
    "App Development",
    "Android Development",
    "Kotlin",
    "Firebase",
    "SQLite"
  ],
  description: `
TukuSepatu is a simple e-commerce mobile application designed to provide a smooth and intuitive shoe shopping experience on Android devices.

The application was developed using Kotlin as the main programming language, following native Android development best practices. Firebase was used for backend services such as user authentication and product data management, while SQLite was implemented for local data storage to support offline access and improve app performance.

TukuSepatu allows users to browse shoe catalogs, view product details, manage shopping carts, and simulate checkout flows within a clean and user-friendly interface. The combination of cloud-based data using Firebase and local persistence using SQLite ensures efficient data handling and a responsive user experience.

This project demonstrates practical experience in Android app development, backend integration with Firebase, local database management using SQLite, and building scalable application logic for e-commerce use cases.
  `,
  github: "https://github.com/nugrohoizzan/TukuSepatu-App"
},

okjek: {
  title: "OK-JEK — Online Motorcycle Taxi Prototype",
  image: "assets/projects/3.webp",
  date: "May 2023",
  categories: [
    "Website Development",
    "Node.js",
    "Cryptography",
    "AES Encryption",
    "Backend System"
  ],
  description: `
OK-JEK is a dummy web-based application prototype inspired by modern online motorcycle taxi services. The project focuses on backend logic and data security rather than full commercial deployment.

The system was developed using Node.js to handle server-side operations, user requests, and application logic. One of the main focuses of this project was implementing data security using AES (Advanced Encryption Standard) to protect sensitive information such as user credentials and transaction-related data.

AES encryption was applied during data storage and data transmission processes to ensure confidentiality and prevent unauthorized access. Through this implementation, the project demonstrates how cryptographic principles can be integrated into real-world web applications to enhance security.

This project strengthened my understanding of backend development with Node.js, secure data handling, cryptography fundamentals, and the importance of security in modern web-based service platforms.
  `,
  github: "https://github.com/nugrohoizzan/project-kriptografi"
},

gatotkaca: {
  title: "Gatotkaca — E-Learning Web Platform",
  image: "assets/projects/4.webp",
  date: "June 2022",
  categories: [
    "Website Development",
    "Laravel",
    "PHP",
    "MySQL",
    "E-Learning Platform"
  ],
  description: `
Gatotkaca is a simple web-based e-learning platform developed as my very first web development project. This project marked my initial journey into building full-stack web applications and understanding how modern web systems work from end to end.

The platform was built using Laravel as the backend framework, PHP as the server-side language, and MySQL as the database management system. Gatotkaca provides core e-learning functionalities such as user authentication, course management, and content delivery in a structured and organized manner.

Through this project, I learned fundamental concepts of web development including MVC architecture, database relationships, CRUD operations, authentication systems, and basic UI structuring. Although simple, this project laid a strong foundation for my future experience in web and application development.

Gatotkaca represents an important milestone in my learning journey, transitioning from basic programming concepts to building functional, database-driven web applications.
  `,
  github: "https://github.com/nugrohoizzan/project-elearning"
}
};

/* =======================
   READ QUERY PARAM
======================= */
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const data = projectData[id];

if (!data) {
  document.body.innerHTML = "<h2 style='text-align:center;color:white'>Project not found</h2>";
}

/* =======================
   BIND DATA
======================= */
document.getElementById("projectTitle").textContent = data.title;
document.getElementById("projectImage").src = data.image;
document.getElementById("projectDate").textContent = data.date;
document.getElementById("projectDescription").textContent = data.description;
document.getElementById("projectLink").href = data.github;

/* =======================
   CATEGORY RENDER
======================= */
const categoryWrap = document.getElementById("projectCategories");
data.categories.forEach(cat => {
  const span = document.createElement("span");
  span.className = "category-chip";
  span.textContent = cat;
  categoryWrap.appendChild(span);
});
