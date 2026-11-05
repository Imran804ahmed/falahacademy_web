/**
 * Falah Academy content. Every repeated block on the site (stats, programmes,
 * facilities, news, FAQs, gallery…) is rendered from the arrays below, so most
 * updates are a matter of editing text here rather than touching markup.
 *
 * Photos live under public/images; responsive WebP/AVIF variants are generated
 * automatically by `npm run images` (also run before every build).
 */
import type { Icon } from "@phosphor-icons/react";
import {
  Atom,
  Baby,
  BookOpenText,
  Brain,
  Bridge,
  Bus,
  Calculator,
  Certificate,
  ChalkboardTeacher,
  ChatsCircle,
  ClipboardText,
  Code,
  Compass,
  Confetti,
  Crown,
  Desktop,
  Exam,
  FileText,
  Flag,
  Flask,
  GlobeHemisphereEast,
  GraduationCap,
  HandHeart,
  Handshake,
  Heart,
  IdentificationCard,
  Lightbulb,
  Lightning,
  Medal,
  Microphone,
  Mosque,
  Palette,
  PencilRuler,
  PencilSimpleLine,
  PersonSimpleRun,
  PuzzlePiece,
  Scales,
  Stairs,
  SealCheck,
  ShieldCheck,
  SoccerBall,
  Shapes,
  Star,
  Student,
  Target,
  Translate,
  TrendUp,
  UserFocus,
  Users,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

/** `position` is an optional CSS object-position (focal point) for cropped layouts, e.g. "50% 20%". */
export type Photo = { src: string; alt: string; position?: string };
export type IconItem = { icon: Icon; title: string; body: string };

// ---- Home ----------------------------------------------------------------

/**
 * Headline figures (years, students, teachers, results). Add ONLY numbers the school
 * has verified; the numbers band on the home page appears automatically once this
 * list is non-empty. e.g. { value: "500+", label: "Students", icon: Student }
 */
export const stats: { value: string; label: string; icon: Icon }[] = [];

/** The four strengths shown in "Why Choose Falah Academy?" on the home page (the About page shows all of `whyChooseUs`). */
export const trustIndicators: IconItem[] = [
  { icon: Stairs, title: "Playgroup, Nursery & KG", body: "A caring early-years start, with higher classes planned so your child can keep growing with us." },
  { icon: ChalkboardTeacher, title: "Dedicated Teachers", body: "Teachers who follow each student's progress and keep parents informed." },
  { icon: BookOpenText, title: "Huffaz Education System", body: "A focused academic pathway that helps Huffaz continue their studies towards Matriculation." },
  { icon: ShieldCheck, title: "Safe, Values-Based Campus", body: "A supervised, caring school where discipline, good manners and Islamic values are part of daily life." },
];

/** "Why Choose Falah Academy?" on the home page. */
export const homeReasons: IconItem[] = [
  { icon: Medal, title: "Quality Education", body: "Developing strong academic foundations through structured, age-appropriate learning." },
  { icon: Mosque, title: "Islamic Values", body: "Encouraging good manners, discipline, respect and character development." },
  { icon: HandHeart, title: "Caring Environment", body: "Providing a welcoming and supportive educational atmosphere." },
  { icon: BookOpenText, title: "Dedicated Huffaz Pathway", body: "Helping students who have completed Hifz-ul-Quran continue their academic journey towards Matriculation." },
  { icon: TrendUp, title: "Future-Focused Learning", body: "Preparing students for further education, personal growth and future opportunities." },
];

export const whyChooseUs: IconItem[] = [
  {
    icon: Medal,
    title: "Academic Excellence",
    body: "A structured curriculum, regular assessment and clear goals for every class.",
  },
  {
    icon: ChalkboardTeacher,
    title: "Qualified Teachers",
    body: "Dedicated educators who teach with care and follow each student's progress closely.",
  },
  {
    icon: UserFocus,
    title: "Student-Centred Learning",
    body: "Individual attention and active participation, so no child is left behind.",
  },
  {
    icon: Lightbulb,
    title: "Modern Learning Environment",
    body: "Interactive lessons supported by computer and science labs.",
  },
  {
    icon: Crown,
    title: "Character Development",
    body: "Discipline, good manners, confidence and Islamic values in everyday school life.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Supportive Campus",
    body: "A secure, supervised environment where children feel comfortable to learn.",
  },
];

/**
 * Parent, student and alumni testimonials. Add only real, consented quotes; the
 * testimonials section stays hidden while this list is empty.
 * e.g. { quote: "…", author: "Mrs. Ayesha K.", role: "Parent, Class 4" }
 */
export const testimonials: { quote: string; author: string; role: string }[] = [];

// ---- About ---------------------------------------------------------------

export const vision =
  "To be a leading centre of learning where every student grows into a knowledgeable, confident and compassionate individual, ready to contribute positively to society and the world.";

export const mission =
  "To provide high-quality, values-based education in a safe and inspiring environment, nurturing each child's intellect, character and talents through dedicated teaching, modern methods and strong partnerships with families.";

export const coreValues: IconItem[] = [
  { icon: Star, title: "Excellence", body: "Striving for the highest standards in learning and conduct." },
  { icon: SealCheck, title: "Integrity", body: "Being honest, fair and trustworthy in every situation." },
  { icon: Handshake, title: "Respect", body: "Valuing every person, opinion and background." },
  { icon: Scales, title: "Discipline", body: "Building focus, good habits and self-control." },
  { icon: ClipboardText, title: "Responsibility", body: "Owning our actions, our learning and our community." },
  { icon: Palette, title: "Creativity", body: "Encouraging curiosity, imagination and new ideas." },
  { icon: Flag, title: "Leadership", body: "Empowering students to lead with confidence and care." },
  { icon: Heart, title: "Compassion", body: "Showing kindness, empathy and service to others." },
];

// TODO: add the founding year and milestones once confirmed
export const history = [
  `Falah Academy was founded on a simple conviction: every child deserves an education that develops both the mind and the character. What began as a community of committed teachers and families is today a school offering Playgroup, Nursery and Kindergarten, along with a dedicated Huffaz Education System.`,
  `As the school has grown, it has held on to the values it started with: personal attention, high expectations and a warm, disciplined learning environment. We are growing step by step, with Primary, Middle, Matric and Intermediate classes planned for the years ahead.`,
];

export const philosophy: IconItem[] = [
  {
    icon: Brain,
    title: "Understanding over memorisation",
    body: "Students learn to ask why, connect ideas and apply knowledge to real situations.",
  },
  {
    icon: Heart,
    title: "Values at the centre",
    body: "Academic progress goes hand in hand with good manners, faith and moral character.",
  },
  {
    icon: UsersThree,
    title: "School and home as partners",
    body: "Children thrive when parents and teachers work together with shared goals.",
  },
];

export const principal = {
  name: "Abdullah Shakeel",
  title: "Principal, Falah Academy",
  photo: { src: "/images/faculty/principal.jpg", alt: "Abdullah Shakeel, Principal of Falah Academy" },
  message: [
    "Welcome to Falah Academy. Choosing a school is one of the most important decisions a family makes, and we are honoured that you are considering us as partners in your child's education, from the early years of Playgroup, Nursery and Kindergarten to our Huffaz Education System.",
    "Our aim is to help every student discover their potential: to think clearly, speak confidently, act with integrity and care for others. We combine a strong academic programme with a nurturing environment where children feel safe, valued and inspired to do their best.",
    "I invite you to visit our campus, meet our teachers and see our students at work. I am confident you will find a school community that is committed to your child's success, today and in the years ahead.",
  ],
};

// ---- Faculty ---------------------------------------------------------------

export const facultyPoints: IconItem[] = [
  { icon: ChalkboardTeacher, title: "Experienced teachers", body: "Qualified educators who plan every lesson around how their students learn." },
  { icon: BookOpenText, title: "Subject expertise", body: "Early-years teachers for our youngest learners and subject teachers for the Huffaz Education System." },
  { icon: HandHeart, title: "Mentorship", body: "Class teachers who guide, encourage and follow each student's progress." },
  { icon: Users, title: "Partnership with parents", body: "Regular parent-teacher meetings and an open door for every concern." },
];

// ---- Academics -------------------------------------------------------------

export type Program = {
  slug: string;
  title: string;
  /** short name for timelines and menus */
  short: string;
  ages: string;
  /** one-line summary for the journey timeline */
  tagline: string;
  body: string;
  highlights: string[];
  image: Photo;
  icon: Icon;
  /** "current" classes are open for admission now; "upcoming" stages are planned and shown as Coming Soon */
  status: "current" | "upcoming";
};

export const programs: Program[] = [
  {
    slug: "montessori",
    title: "Montessori: Playgroup, Nursery & KG",
    short: "Montessori",
    ages: "Playgroup · Nursery · KG",
    tagline: "Early childhood development and foundational learning.",
    body: "A warm, child-friendly start across three classes, Playgroup, Nursery and Kindergarten, where young learners build curiosity, communication and confidence through guided play and hands-on activities.",
    highlights: ["Phonics & early literacy", "Number sense through play", "Motor & social development", "Islamic manners & values"],
    image: { src: "/images/programs/early-years-girl-white-hijab.jpg", alt: "Smiling young girl in a white school hijab", position: "50% 25%" },
    icon: Baby,
    status: "current",
  },
  {
    slug: "primary",
    title: "Primary School",
    short: "Primary",
    ages: "Grades 1 – 5",
    tagline: "Building literacy, numeracy, confidence and curiosity.",
    body: "Planned for the years ahead: strong foundations in English, Urdu, mathematics, science and computing, with close attention to reading, writing and good study habits.",
    highlights: ["Reading & writing fluency", "Core maths & science", "Computer basics"],
    image: { src: "/images/programs/primary-girls-cream-hijab.jpg", alt: "Three smiling primary-age girls in cream hijabs and school lanyards", position: "40% 40%" },
    icon: PencilRuler,
    status: "upcoming",
  },
  {
    slug: "middle",
    title: "Middle School",
    short: "Middle",
    ages: "Grades 6 – 8",
    tagline: "Developing stronger academic and analytical skills.",
    body: "Planned for the years ahead: students will deepen their subject knowledge and learn to think independently, solve problems and present their ideas with confidence.",
    highlights: ["Analytical thinking", "Project-based learning", "Study & research skills"],
    image: { src: "/images/programs/middle-student-writing-exam.jpg", alt: "Student in a prayer cap writing carefully at his classroom desk" },
    icon: PuzzlePiece,
    status: "upcoming",
  },
  {
    slug: "secondary",
    title: "Secondary School (Matric)",
    short: "Secondary",
    ages: "Grades 9 – 10",
    tagline: "Focused preparation for board-level academic success.",
    body: "Planned for the years ahead: a focused two years of Matric study, with regular tests, revision and guidance to prepare students for their board examinations.",
    highlights: ["Board exam preparation", "Science & computer streams", "Career guidance"],
    image: { src: "/images/programs/secondary-student-white-hijab-writing.jpg", alt: "Secondary student in a white hijab writing at her desk in a bright classroom" },
    icon: Exam,
    status: "upcoming",
  },
  {
    slug: "intermediate",
    title: "Intermediate (College)",
    short: "Intermediate",
    ages: "Grades 11 – 12",
    tagline: "Preparing students for higher education and future careers.",
    body: "Planned for the years ahead: a mature, focused learning environment with subject-specialist teaching that prepares students for Intermediate board examinations, university admission and the careers ahead.",
    highlights: ["Intermediate board exam readiness", "Subject-specialist teaching", "University & career guidance"],
    image: { src: "/images/programs/intermediate.jpg", alt: "College student holding her books on campus" },
    icon: GraduationCap,
    status: "upcoming",
  },
];

/** Home-page spotlights: the three distinct experiences within the journey. */
export const stageSpotlights: {
  key: "montessori" | "school" | "intermediate";
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  image: Photo;
  inset?: Photo;
  href: string;
}[] = [
  {
    key: "montessori",
    eyebrow: "Montessori · Playgroup – KG",
    title: "A joyful, caring start",
    body: "In our Montessori classes, children learn through guided play, stories, songs and hands-on materials, building the habits and confidence they need for school.",
    points: ["Early literacy & numeracy", "Creativity", "Communication", "Motor development", "Social skills", "Interactive learning"],
    image: { src: "/images/programs/early-years-girl-white-hijab.jpg", alt: "Smiling young girl in a white school hijab", position: "50% 25%" },
    inset: { src: "/images/classrooms/montessori-materials.jpg", alt: "Wooden letter blocks and play dough on a learning table" },
    href: "/academics#montessori",
  },
  {
    key: "school",
    eyebrow: "Primary to Secondary · Grades 1 – 10",
    title: "Strong foundations, real understanding",
    body: "From Grade 1 to Matric, students build solid knowledge in every core subject. We focus on understanding concepts rather than memorising them, and prepare students steadily for their board examinations.",
    points: ["Mathematics", "Science", "English & Urdu", "Computer education", "Conceptual understanding", "Exam preparation", "Discipline", "Critical thinking"],
    image: { src: "/images/programs/primary-girls-cream-hijab.jpg", alt: "Three smiling primary-age girls in cream hijabs", position: "40% 40%" },
    inset: { src: "/images/programs/secondary-student-white-hijab-writing.jpg", alt: "Secondary student in a white hijab writing at her desk" },
    href: "/academics#primary",
  },
  {
    key: "intermediate",
    eyebrow: "Intermediate · Grades 11 – 12",
    title: "Ready for university and beyond",
    body: "Intermediate students study in a focused, mature environment with subject-specialist teachers, regular testing and guidance on the university and career choices ahead.",
    points: ["Board exam readiness", "Subject expertise", "University preparation", "Career awareness", "Future opportunities"],
    image: { src: "/images/programs/college-student.jpg", alt: "College student holding her books outside a campus building" },
    href: "/academics#intermediate",
  },
];

/**
 * "Our Educational Programs": the three early-years classes and the Huffaz Education
 * System, shown as cards on the home page and the Academics page.
 *
 * `image` is optional: while it is omitted the card shows a branded panel instead of a
 * photo. `photoBrief` describes the photograph to take or source for each card
 * (shown on the panel in development only). Add the photo under public/images and
 * set `image` to replace the panel.
 */
export type FeaturedProgram = {
  slug: "playgroup" | "nursery" | "kindergarten" | "huffaz";
  title: string;
  headline: string;
  body: string;
  highlights: string[];
  icon: Icon;
  /** card accent: soft early-years colours, navy for the Huffaz programme */
  tone: "sun" | "rose" | "sky" | "navy";
  image?: Photo;
  photoBrief: string;
  href: string;
  cta: string;
};

export const featuredPrograms: FeaturedProgram[] = [
  {
    slug: "playgroup",
    title: "Playgroup",
    headline: "Little Steps, Big Discoveries",
    body: "The first stage of your child's learning journey. Through activity-based learning, creative play and a caring Islamic environment, young learners build basic confidence, social skills and an early understanding of the world around them.",
    highlights: ["Play-Based Learning", "Early Social Development", "Creative Activities", "Confidence & Communication"],
    icon: Shapes,
    tone: "sun",
    image: { src: "/images/programs/playgroup-islamic-classroom.jpg", alt: "Young children in hijab, kurtas and prayer caps playing with building blocks, a picture book and a magnifying glass with their teacher in a bright classroom", position: "52% 55%" },
    photoBrief: "Muslim toddlers in modest Islamic uniforms happily learning with colourful educational blocks and toys in a bright classroom.",
    href: "/academics#playgroup",
    cta: "Learn More",
  },
  {
    slug: "nursery",
    title: "Nursery",
    headline: "Growing Minds, Strong Foundations",
    body: "In Nursery, children develop early academic and personal skills: writing, letter and number recognition, communication and confidence, while learning good manners and positive Islamic values.",
    highlights: ["Early Reading & Writing", "Numbers & Recognition", "Creativity & Communication", "Islamic Manners & Values"],
    icon: PencilSimpleLine,
    tone: "rose",
    image: { src: "/images/programs/nursery-islamic-classroom.jpg", alt: "Young children in hijab, kurtas and prayer caps tracing letters in a sand tray, doing shape puzzles and exploring a map with their teacher", position: "45% 55%" },
    photoBrief: "A young Muslim girl in a neat light-grey or white hijab practising writing or drawing in a bright, organised classroom.",
    href: "/academics#nursery",
    cta: "Learn More",
  },
  {
    slug: "kindergarten",
    title: "Kindergarten",
    headline: "Preparing for a Brighter Tomorrow",
    body: "Kindergarten builds curiosity, confidence and strong foundations in reading, writing and mathematics, so children are ready for the next step in their education.",
    highlights: ["Reading & Writing Skills", "Mathematics Fundamentals", "Interactive Classroom Learning", "Confidence & Character Building"],
    icon: BookOpenText,
    tone: "sky",
    image: { src: "/images/programs/kindergarten-islamic-classroom.jpg", alt: "Smiling boy in a prayer cap and girl in a lilac hijab working with a fractions puzzle and alphabet letters beside their teacher", position: "62% 45%" },
    photoBrief: "Young Muslim boys and girls in modest Islamic uniforms taking part in a structured classroom activity with books, pencils and learning materials.",
    href: "/academics#kindergarten",
    cta: "Learn More",
  },
  {
    slug: "huffaz",
    title: "Huffaz Education System",
    headline: "From Hifz to Matric: A Faster Path to Academic Success",
    body: "For students who are already Hafiz-e-Quran. Huffaz are given admission to Falah Academy and supported through an accelerated, structured academic pathway, so they can continue their formal education and complete Matric in a shorter time.",
    highlights: [
      "Specially Designed for Hafiz-e-Quran Students",
      "Accelerated Academic Education",
      "Matriculation Preparation",
      "Focused Learning & Academic Support",
      "Bridging Quranic Achievement with Modern Education",
    ],
    icon: GraduationCap,
    tone: "navy",
    image: { src: "/images/programs/huffaz-islamic-classroom.jpg", alt: "Huffaz students, boys in white kurtas and prayer caps and girls in hijab, studying at their desks with notebooks and textbooks", position: "50% 100%" },
    photoBrief: "Hafiz students in neat white Islamic uniforms and prayer caps studying Mathematics, English or Science in a professional classroom (academic study, not Quran memorisation).",
    href: "/huffaz-education",
    cta: "Explore Huffaz Education System",
  },
];

// ---- Huffaz Education System (/huffaz-education) -----------------------------

/*
 * Keep this wording factual: no fixed completion period, guaranteed grades or board
 * outcomes until the academy confirms them.
 */
export const huffazEducation = {
  intro: [
    "Completing Hifz-ul-Quran is a remarkable achievement. Falah Academy's Huffaz Education System is a specialised academic programme for students who have already become Huffaz, helping them continue their education towards Matriculation.",
    "Through a structured, focused learning approach, students cover the academic knowledge they need in a shorter timeframe, while building the confidence and study skills to succeed in further education.",
  ],
  // home-page spotlight and the overview section of /huffaz-education
  spotlightImage: { src: "/images/huffaz/huffaz-class-with-teacher.jpg", alt: "Smiling boys in grey uniforms and prayer caps at their desks with their teacher in a bright Falah Academy classroom", position: "55% 50%" } as Photo,
  overviewImage: { src: "/images/huffaz/student-writing-exam.jpg", alt: "Student in a prayer cap concentrating as he writes at his desk in a classroom", position: "55% 40%" } as Photo,
  clarification:
    "This programme does not teach Quran memorisation. It is designed for students who have already completed Hifz-ul-Quran and now want to continue their academic education.",
  highlights: [
    { icon: Bridge, title: "Academic Transition for Huffaz", body: "A supported return to academic study, planned around where each Hafiz is starting from." },
    { icon: Lightning, title: "Accelerated Learning Structure", body: "A focused programme that helps students progress towards Matriculation in a shorter timeframe." },
    { icon: Target, title: "Matriculation-Focused Education", body: "Teaching centred on the subjects and skills students need for their Matric studies." },
    { icon: TrendUp, title: "Academic Confidence & Skill Development", body: "Study habits, reading, writing and problem solving that carry into further education." },
  ] as IconItem[],
  audience: [
    "Boys and girls who have completed Hifz-ul-Quran",
    "Huffaz who paused regular schooling during their Hifz",
    "Families looking for a structured route towards Matriculation",
  ],
  // how a family gets started; placement and pace are agreed individually
  steps: [
    { title: "Enquire", body: "Contact the admissions office by phone, WhatsApp or the enquiry form below." },
    { title: "Meet & Assess", body: "Visit the academy so we can understand your child's current academic level." },
    { title: "Personal Plan", body: "We recommend a placement and study plan suited to your child's starting point." },
    { title: "Begin Learning", body: "Your child starts focused classes with regular feedback on their progress." },
  ],
  faqs: [
    {
      q: "Is this a Hifz (Quran memorisation) programme?",
      a: "No. The Huffaz Education System is for students who have already completed Hifz-ul-Quran. It focuses on academic subjects to help them continue towards Matriculation.",
    },
    {
      q: "How long does it take to reach Matric?",
      a: "It depends on each student's starting level and progress. After an initial assessment, the admissions office will discuss a suitable placement and study plan with you.",
    },
    {
      q: "Is the programme open to both boys and girls?",
      a: "Please contact the admissions office to confirm current classes and timings for boys and girls.",
    },
    {
      q: "My child is still memorising the Quran. Can you help?",
      a: "Yes. Our Huffaz Tuition Centre offers school tuition planned around Hifz, so students can keep up with their studies while they memorise. Once Hifz is complete, they can move to the Huffaz Education System.",
    },
  ],
};

export const subjects: { title: string; icon: Icon }[] = [
  { title: "English", icon: BookOpenText },
  { title: "Mathematics", icon: Calculator },
  { title: "Science", icon: Atom },
  { title: "Computer Science", icon: Code },
  { title: "Social Studies", icon: GlobeHemisphereEast },
  { title: "Urdu", icon: Translate },
  { title: "Islamic Studies", icon: Mosque },
  { title: "General Knowledge", icon: Lightbulb },
  { title: "Arts", icon: Palette },
  { title: "Physical Education", icon: PersonSimpleRun },
];

export const teachingApproach: IconItem[] = [
  { icon: Student, title: "Student-centred learning", body: "Lessons are planned around how each child learns best." },
  { icon: ChatsCircle, title: "Interactive classrooms", body: "Discussion, questioning and hands-on activities in every lesson." },
  { icon: PuzzlePiece, title: "Project-based learning", body: "Real-world projects that build teamwork and practical skills." },
  { icon: Desktop, title: "Technology integration", body: "Digital tools and multimedia that bring concepts to life." },
  { icon: Exam, title: "Regular assessments", body: "Monthly tests and term exams so progress is tracked and gaps are closed early." },
  { icon: Users, title: "Parent-teacher communication", body: "Regular updates, meetings and an open-door policy." },
  { icon: HandHeart, title: "Individual student support", body: "Extra guidance for those who need it, stretch for those ready for more." },
  { icon: Brain, title: "Critical thinking", body: "Problem solving, reasoning and creativity across every subject." },
];

// ---- Tuition & coaching services --------------------------------------------

/** Services alongside the school programmes, taken from the academy's banners (Academics page, #services). */
export const services: (IconItem & { points: string[] })[] = [
  {
    icon: ChalkboardTeacher,
    title: "Tuition Center",
    body: "Quality tuition for school students in every subject.",
    points: ["Classes 1 – 8: all subjects", "Classes 9 – 12: group-wise tuition"],
  },
  {
    icon: Mosque,
    title: "Huffaz Tuition Centre",
    body: "School tuition planned around Hifz, for girls and boys.",
    points: ["Homework support and discipline", "Islamic Tarbiyyah and Quran recitation", "Personal development"],
  },
  {
    icon: GraduationCap,
    title: "O Level, A Level & IGCSE",
    body: "Expert coaching for Cambridge students.",
    points: ["All sciences", "Mathematics", "Commerce"],
  },
  {
    icon: Exam,
    title: "Entry Test Preparation",
    body: "Coaching for university entry tests.",
    points: ["Medical, Engineering, BBA / MBA", "Maths, Physics, Chemistry, Biology, English"],
  },
  {
    icon: Compass,
    title: "Career Counseling",
    body: "Personality and skills assessment to help students choose their path.",
    points: ["Path Finder (Classes 8 – 12)", "University selection (Class 12+)", "Interview preparation"],
  },
  {
    icon: Microphone,
    title: "English & Public Speaking",
    body: "Confident communication for school, university and work.",
    points: ["Spoken English and communication skills", "Public speaking and debate", "Presentation skills"],
  },
];

export const servicePhotos: Photo[] = [
  { src: "/images/services/tuition-huffaz-banners.jpg", alt: "Falah Academy banners for the Huffaz Tuition Centre, Tuition Center and Academic Tuition" },
  { src: "/images/services/test-prep-counseling-banners.jpg", alt: "Falah Academy banners for Test Prep Services, Career Counseling and Academic Tuition" },
  { src: "/images/services/wall-banners.jpg", alt: "Falah Academy wall banners for science and maths, Huffaz tuition, tuition classes and public speaking" },
];

// ---- Admissions ------------------------------------------------------------

export const admissionSteps: { title: string; body: string }[] = [
  { title: "Inquiry", body: "Contact the admissions office by phone, WhatsApp or the inquiry form, or visit the school office." },
  { title: "Visit & Assessment", body: "Visit the campus, collect the admission form and complete an age-appropriate assessment or interview." },
  { title: "Documentation", body: "Submit the completed form with the required documents and previous academic records for verification." },
  { title: "Admission Confirmation", body: "Receive confirmation, complete the fee formalities and begin your child's journey at Falah Academy." },
];

export const admissionRequirements: { title: string; icon: Icon }[] = [
  { title: "Completed admission form", icon: FileText },
  { title: "Student birth certificate / B-Form", icon: Certificate },
  { title: "Parent/Guardian CNIC", icon: IdentificationCard },
  { title: "Previous school report/card", icon: ClipboardText },
  { title: "Passport-size photographs", icon: UserFocus },
  { title: "School leaving certificate (where applicable)", icon: SealCheck },
  { title: "Assessment/interview (where required)", icon: Exam },
];

// ---- Facilities ------------------------------------------------------------

// TODO: confirm every facility listed here exists on campus before launch
export type Facility = { title: string; body: string; icon: Icon; image?: Photo };

export const facilities: Facility[] = [
  {
    title: "Classrooms",
    body: "Bright, well-ventilated classrooms arranged for focus, discussion and comfortable learning.",
    icon: ChalkboardTeacher,
    image: { src: "/images/classrooms/modern-classroom.jpg", alt: "Tidy classroom with rows of desks and a chalkboard" },
  },
  {
    title: "Computer Lab",
    body: "Students build digital literacy, typing, coding and research skills on lab computers.",
    icon: Desktop,
    image: { src: "/images/facilities/computer-lab.jpg", alt: "Students in uniform working at computers in the computer lab" },
  },
  {
    title: "Science Lab",
    body: "Hands-on science practicals that bring lessons to life and support students working towards Matric.",
    icon: Flask,
    image: { src: "/images/facilities/science-lab.jpg", alt: "Close-up of a microscope in the science laboratory" },
  },
  {
    title: "Library",
    body: "A quiet reading space with textbooks, reference books and reading for every age.",
    icon: BookOpenText,
    image: { src: "/images/facilities/library-stacks.jpg", alt: "Rows of bookshelves in the school library" },
  },
  {
    title: "Sports & Play Areas",
    body: "Space for cricket, football, athletics and outdoor play that builds fitness and teamwork.",
    icon: SoccerBall,
    image: { src: "/images/student-life/cricket.jpg", alt: "Students playing a cricket match on the school ground" },
  },
  {
    title: "Montessori Learning Area",
    body: "A colourful, child-safe space with learning materials designed for playful, hands-on early learning.",
    icon: Baby,
    image: { src: "/images/classrooms/montessori-materials.jpg", alt: "Wooden letter blocks and play dough on a Montessori learning table" },
  },
  {
    title: "Secure Campus",
    body: "Controlled entry, trained staff and supervision throughout the school day.",
    icon: ShieldCheck,
  },
  {
    title: "School Transport",
    body: "Pick-up and drop-off on selected routes, with attentive staff on board.",
    icon: Bus,
  },
  {
    title: "Multipurpose Hall",
    body: "Used for assemblies, prize distributions, exhibitions and student performances.",
    icon: UsersThree,
  },
];

// ---- Student life ----------------------------------------------------------

export const studentLife: { title: string; body: string; image: Photo }[] = [
  {
    title: "Sports",
    body: "Cricket, football, athletics and Sports Day, building fitness, teamwork and sportsmanship.",
    image: { src: "/images/student-life/cricket.jpg", alt: "Students playing cricket on the school ground" },
  },
  {
    title: "Debates & Speeches",
    body: "English and Urdu debates, declamations and speeches that build confident speakers.",
    image: { src: "/images/events/debate.jpg", alt: "Microphone on stage ready for a debate competition" },
  },
  {
    title: "Celebrations",
    body: "Independence Day, Eid and annual functions that build pride and belonging.",
    image: { src: "/images/student-life/independence-day.jpg", alt: "Student in uniform at his desk beside a Pakistan flag" },
  },
  {
    title: "Science Projects",
    body: "Science exhibitions and practical projects where students design, build and investigate.",
    image: { src: "/images/events/science-exhibition.jpg", alt: "Science experiment with test tubes and a pipette" },
  },
  {
    title: "Art & Creativity",
    body: "Drawing, painting and craft activities that let every child express their ideas.",
    image: { src: "/images/student-life/painting.jpg", alt: "Child painting colourful artwork" },
  },
  {
    title: "Leadership",
    body: "Prefects, class monitors and house captains who learn to lead by example.",
    image: { src: "/images/student-life/schoolgirls-white-hijab-walking.jpg", alt: "Two schoolgirls in white hijabs walking confidently together", position: "50% 30%" },
  },
  {
    title: "Quran & Islamic Activities",
    body: "Quran recitation, Naat and Islamic studies activities that nurture faith and good character.",
    image: { src: "/images/student-life/student-white-kurta-topi-book.jpg", alt: "Smiling boy in a white kurta and prayer cap holding the Holy Quran", position: "50% 25%" },
  },
  {
    title: "Friendship & Group Learning",
    body: "Group work, clubs and class activities where friendships and teamwork grow.",
    image: { src: "/images/student-life/friends-white-hijab.jpg", alt: "Two smiling girls in white hijabs sitting together", position: "50% 30%" },
  },
];

export const activities: { title: string; icon: Icon }[] = [
  { title: "Sports Day", icon: SoccerBall },
  { title: "Science Exhibition", icon: Flask },
  { title: "Debate Competition", icon: Microphone },
  { title: "Art Competition", icon: Palette },
  { title: "Quiz Competition", icon: Brain },
  { title: "Annual Function", icon: Confetti },
  { title: "Independence Day", icon: Flag },
  { title: "Eid Celebrations", icon: Star },
  { title: "Educational Trips", icon: Bus },
  { title: "Cricket Matches", icon: PersonSimpleRun },
  { title: "Quran / Islamic Activities", icon: Mosque },
  { title: "Community Service", icon: HandHeart },
  { title: "Prize Distribution", icon: Medal },
];

// ---- Gallery ---------------------------------------------------------------

export type PhotoCategory = { key: string; label: string };
export type GalleryPhoto = Photo & { category: string; caption: string; blurDataURL?: string };

export const galleryCategories: PhotoCategory[] = [
  { key: "classrooms", label: "Classrooms" },
  { key: "students", label: "Students" },
  { key: "campus", label: "Campus" },
  { key: "activities", label: "Activities" },
  { key: "sports", label: "Sports" },
  { key: "events", label: "Events" },
];

// TODO: replace with real photographs of Falah Academy as they become available
export const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/classrooms/early-learning.jpg", alt: "Student in a red headscarf during a classroom activity", category: "classrooms", caption: "Activity-based learning" },
  { src: "/images/programs/intermediate.jpg", alt: "College student holding her books", category: "students", caption: "Eager to learn" },
  { src: "/images/student-life/friends-white-hijab.jpg", alt: "Two smiling girls in white hijabs", category: "students", caption: "Friendships that last" },
  { src: "/images/student-life/independence-day.jpg", alt: "Student at his desk beside a Pakistan flag", category: "events", caption: "Independence Day" },
  { src: "/images/facilities/computer-lab.jpg", alt: "Students working at computers in the lab", category: "classrooms", caption: "Computer lab" },
  { src: "/images/hero/islamic-school-girls-reading.jpg", alt: "Girls in hijabs reading together at a classroom desk", category: "classrooms", caption: "Reading together" },
  { src: "/images/programs/middle-student-writing-exam.jpg", alt: "Student in a prayer cap writing at his desk", category: "classrooms", caption: "Focused work" },
  { src: "/images/classrooms/classroom-students-hijab.jpg", alt: "Classroom of students in hijabs during a lesson", category: "classrooms", caption: "A full classroom" },
  { src: "/images/student-life/cricket.jpg", alt: "Students playing a cricket match", category: "sports", caption: "Cricket on the ground" },
  { src: "/images/classrooms/hands-on-learning.jpg", alt: "Student holding a learning ring during a class activity", category: "activities", caption: "Learning by doing" },
  { src: "/images/programs/early-years-girl-white-hijab.jpg", alt: "Smiling young girl in a white school hijab", category: "students", caption: "Our youngest learners" },
  { src: "/images/events/graduation.jpg", alt: "Graduates in gowns holding their caps", category: "events", caption: "Celebrating our graduates" },
  { src: "/images/facilities/library-stacks.jpg", alt: "Rows of bookshelves in the library", category: "campus", caption: "The library" },
  { src: "/images/programs/secondary-student-white-hijab-writing.jpg", alt: "Student in a white hijab writing at her desk", category: "classrooms", caption: "Focused study" },
  { src: "/images/programs/intermediate-students-classroom.jpg", alt: "Senior students in hijabs studying at their desks", category: "classrooms", caption: "Learning together" },
  { src: "/images/student-life/children-topi-celebration.jpg", alt: "Smiling children in prayer caps holding gifts at a celebration", category: "events", caption: "Celebrations together" },
  { src: "/images/admissions/new-student-white-topi.jpg", alt: "Smiling young boy in a white kurta and prayer cap", category: "students", caption: "A bright start" },
  { src: "/images/classrooms/montessori-materials.jpg", alt: "Wooden letter blocks and play dough", category: "activities", caption: "Montessori materials" },
  { src: "/images/facilities/science-lab.jpg", alt: "Microscope in the science lab", category: "campus", caption: "Science lab" },
  { src: "/images/student-life/football-match.jpg", alt: "Football being kicked on a green pitch", category: "sports", caption: "Football" },
  { src: "/images/classrooms/modern-classroom.jpg", alt: "Classroom with desks and a chalkboard", category: "campus", caption: "Our classrooms" },
  { src: "/images/student-life/painting.jpg", alt: "Child painting colourful artwork", category: "activities", caption: "Art class" },
  { src: "/images/events/debate.jpg", alt: "Microphone on stage at a debate", category: "events", caption: "Debate competition" },
  { src: "/images/campus/play-area.jpg", alt: "Outdoor play area with slides", category: "campus", caption: "Play area" },
  { src: "/images/services/tuition-huffaz-banners.jpg", alt: "Banners for the Huffaz Tuition Centre, Tuition Center and Academic Tuition", category: "campus", caption: "Tuition & Huffaz classes" },
  { src: "/images/services/test-prep-counseling-banners.jpg", alt: "Banners for Test Prep Services, Career Counseling and Academic Tuition", category: "campus", caption: "Test prep & career counseling" },
  { src: "/images/services/wall-banners.jpg", alt: "Wall banners for science and maths, Huffaz tuition, tuition classes and public speaking", category: "campus", caption: "Our programmes" },
  { src: "/images/about/students-with-textbooks.jpg", alt: "Group of girls in light-blue hijabs holding their school textbooks", category: "students", caption: "Proud of their books" },
  { src: "/images/huffaz/students-writing-classroom.jpg", alt: "Boys in white uniforms writing in their notebooks during a lesson", category: "classrooms", caption: "Focused learning" },
  { src: "/images/student-life/boys-topi-school-window.jpg", alt: "Smiling boys in white prayer caps looking out of a classroom window", category: "students", caption: "Friends at school" },
];

// ---- News & events -----------------------------------------------------------

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // ISO date
  category: "Event" | "News" | "Notice";
  excerpt: string;
  body: string[];
  image: Photo;
};

// TODO: dates and details are samples; update for the current school year
export const news: NewsItem[] = [
  {
    slug: "annual-sports-day",
    title: "Annual Sports Day",
    date: "2026-11-21",
    category: "Event",
    excerpt: "A celebration of teamwork, fitness, and sportsmanship.",
    body: [
      "Our Annual Sports Day brings the whole school together for a morning of races, relays, cricket, tug of war and team games. Students compete for their houses while learning the value of fair play, effort and encouragement.",
      "Parents are warmly invited to attend and cheer on the participants. The day concludes with a prize distribution for individual and house winners.",
    ],
    image: { src: "/images/student-life/cricket.jpg", alt: "Students playing cricket on the school ground" },
  },
  {
    slug: "science-innovation-exhibition",
    title: "Science & Innovation Exhibition",
    date: "2026-12-10",
    category: "Event",
    excerpt: "Students present creative science and technology projects.",
    body: [
      "From working models to coding projects, students from every grade showcase what they have designed, built and investigated over the term.",
      "Visitors can talk to the young scientists about their ideas, and a panel of judges will recognise the most creative and well-researched projects.",
    ],
    image: { src: "/images/events/science-exhibition.jpg", alt: "Student science experiment with test tubes and a pipette" },
  },
  {
    slug: "parent-teacher-meeting",
    title: "Parent-Teacher Meeting",
    date: "2026-10-31",
    category: "Notice",
    excerpt: "Strengthening communication between parents and educators.",
    body: [
      "Parents are invited to meet class and subject teachers to discuss their child's progress, results from the first term and goals for the months ahead.",
      "Please bring your child's diary and report card. Meeting slots will be shared through the class teacher.",
    ],
    image: { src: "/images/faculty/teacher-guidance.jpg", alt: "Teacher guiding a student during a lesson" },
  },
  {
    slug: "annual-awards-ceremony",
    title: "Annual Awards Ceremony",
    date: "2027-01-23",
    category: "Event",
    excerpt: "Celebrating outstanding academic and extracurricular achievements.",
    body: [
      "Each year we honour students who have excelled in academics, character, sports, arts and service to the community, from our youngest learners in Playgroup to our Huffaz students.",
      "The ceremony is held in the multipurpose hall and includes performances by students, followed by the presentation of certificates, medals and trophies.",
    ],
    image: { src: "/images/events/graduation.jpg", alt: "Graduates in gowns holding their caps" },
  },
];

// ---- FAQs ------------------------------------------------------------------

export const faqs: { q: string; a: string }[] = [
  {
    q: "What age groups does Falah Academy accept?",
    a: "We currently offer Playgroup (from around age 3), Nursery and Kindergarten, as well as the Huffaz Education System for students who have completed Hifz-ul-Quran. Primary, Middle, Matric and Intermediate classes are planned for the future. Age requirements for each class are shared by the admissions office.",
  },
  {
    q: "How can I apply for admission?",
    a: "Start by submitting an inquiry through our contact form, by phone or by visiting the campus. Our admissions team will guide you through the application, assessment and document verification steps.",
  },
  {
    q: "Do you offer a programme for students who have completed Hifz?",
    a: "Yes. Our Huffaz Education System is a specialised, accelerated academic programme that helps students who have already completed Hifz-ul-Quran continue towards Matriculation. It does not teach Quran memorisation.",
  },
  {
    q: "Is an admission test required?",
    a: "Playgroup, Nursery and Kindergarten admissions usually involve an informal interaction rather than a written test. Huffaz joining the Huffaz Education System take a short assessment so we can understand their current academic level.",
  },
  {
    q: "What documents are required?",
    a: "A completed admission form, the student's birth certificate or B-Form, parent/guardian CNIC, the previous school report card, passport-size photographs and, where applicable, a school leaving certificate.",
  },
  {
    q: "Does the school provide transport?",
    a: "Yes. School transport is available on selected routes. Please contact the office for current routes, timings and charges.",
  },
  {
    q: "What are the school timings?",
    a: "School runs Monday to Friday, 8:00 AM to 3:00 PM. Early years timings may differ slightly; the office will confirm the schedule for your child's class.",
  },
  {
    q: "Are extracurricular activities available?",
    a: "Yes. Students take part in sports, art, debates, quizzes, science exhibitions, educational trips, Islamic activities and community service throughout the year.",
  },
  {
    q: "How can parents communicate with teachers?",
    a: "Through the student diary, scheduled parent-teacher meetings and by appointment with the class teacher. The school office is also happy to pass on messages at any time.",
  },
];

