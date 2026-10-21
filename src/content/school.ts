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
  Bus,
  Calculator,
  Certificate,
  ChalkboardTeacher,
  ChatsCircle,
  ClipboardText,
  Code,
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
  Medal,
  Microphone,
  Mosque,
  Palette,
  PencilRuler,
  PersonSimpleRun,
  PuzzlePiece,
  Scales,
  Stairs,
  SealCheck,
  ShieldCheck,
  SoccerBall,
  Star,
  Student,
  Translate,
  UserFocus,
  Users,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";

export type Photo = { src: string; alt: string };
export type IconItem = { icon: Icon; title: string; body: string };

// ---- Home ----------------------------------------------------------------

/**
 * Headline figures (years, students, teachers, results). Add ONLY numbers the school
 * has verified; the numbers band on the home page appears automatically once this
 * list is non-empty. e.g. { value: "500+", label: "Students", icon: Student }
 */
export const stats: { value: string; label: string; icon: Icon }[] = [];

/** Non-numeric trust indicators shown under the home hero. */
export const trustIndicators: IconItem[] = [
  { icon: Stairs, title: "Montessori to Intermediate", body: "One school for every stage of your child's education." },
  { icon: ChalkboardTeacher, title: "Experienced Faculty", body: "Dedicated teachers who know every student by name." },
  { icon: Exam, title: "Board Exam Preparation", body: "Structured preparation for Matric and Intermediate." },
  { icon: ShieldCheck, title: "Safe Learning Environment", body: "A secure, supervised and caring campus." },
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
  `Falah Academy was founded on a simple conviction: every child deserves an education that develops both the mind and the character. What began as a community of committed teachers and families is today a school serving students from Montessori through Intermediate.`,
  `As the school has grown, it has held on to the values it started with: personal attention, high expectations and a warm, disciplined learning environment. Students can complete their entire school education with us, from their first day in Montessori to their Intermediate board examinations.`,
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
  name: "[Principal's Name]", // TODO
  title: "Principal, Falah Academy",
  message: [
    "Welcome to Falah Academy. Choosing a school is one of the most important decisions a family makes, and we are honoured that you are considering us as partners in your child's education, from the early years of Montessori to the final year of Intermediate.",
    "Our aim is to help every student discover their potential: to think clearly, speak confidently, act with integrity and care for others. We combine a strong academic programme with a nurturing environment where children feel safe, valued and inspired to do their best.",
    "I invite you to visit our campus, meet our teachers and see our students at work. I am confident you will find a school community that is committed to your child's success, today and in the years ahead.",
  ],
};

// ---- Faculty ---------------------------------------------------------------

export const facultyPoints: IconItem[] = [
  { icon: ChalkboardTeacher, title: "Experienced teachers", body: "Qualified educators who plan every lesson around how their students learn." },
  { icon: BookOpenText, title: "Subject expertise", body: "Specialist teachers for senior classes, especially in Matric and Intermediate." },
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
};

export const programs: Program[] = [
  {
    slug: "montessori",
    title: "Montessori",
    short: "Montessori",
    ages: "Playgroup – KG",
    tagline: "Early childhood development and foundational learning.",
    body: "A warm, child-friendly start where young learners build curiosity, communication and confidence through guided play and hands-on activities.",
    highlights: ["Phonics & early literacy", "Number sense through play", "Motor & social development"],
    image: { src: "/images/programs/montessori.jpg", alt: "Young girl in school uniform smiling in her classroom" },
    icon: Baby,
  },
  {
    slug: "primary",
    title: "Primary School",
    short: "Primary",
    ages: "Grades 1 – 5",
    tagline: "Building literacy, numeracy, confidence and curiosity.",
    body: "Strong foundations in English, Urdu, mathematics, science and computing, with close attention to reading, writing and good study habits.",
    highlights: ["Reading & writing fluency", "Core maths & science", "Computer basics"],
    image: { src: "/images/programs/primary.jpg", alt: "Two primary students in uniform reading their textbooks at a desk" },
    icon: PencilRuler,
  },
  {
    slug: "middle",
    title: "Middle School",
    short: "Middle",
    ages: "Grades 6 – 8",
    tagline: "Developing stronger academic and analytical skills.",
    body: "Students deepen their subject knowledge and learn to think independently, solve problems and present their ideas with confidence.",
    highlights: ["Analytical thinking", "Project-based learning", "Study & research skills"],
    image: { src: "/images/programs/middle.jpg", alt: "Student in school uniform writing in his notebook at his desk" },
    icon: PuzzlePiece,
  },
  {
    slug: "secondary",
    title: "Secondary School (Matric)",
    short: "Secondary",
    ages: "Grades 9 – 10",
    tagline: "Focused preparation for board-level academic success.",
    body: "A focused two years of Matric study, with regular tests, revision and guidance to prepare students for their board examinations.",
    highlights: ["Board exam preparation", "Science & computer streams", "Career guidance"],
    image: { src: "/images/programs/secondary.jpg", alt: "Smiling secondary student holding a textbook in class" },
    icon: Exam,
  },
  {
    slug: "intermediate",
    title: "Intermediate (College)",
    short: "Intermediate",
    ages: "Grades 11 – 12",
    tagline: "Preparing students for higher education and future careers.",
    body: "A mature, focused learning environment with subject-specialist teaching that prepares students for Intermediate board examinations, university admission and the careers ahead.",
    highlights: ["Intermediate board exam readiness", "Subject-specialist teaching", "University & career guidance"],
    image: { src: "/images/programs/intermediate.jpg", alt: "College student holding her books on campus" },
    icon: GraduationCap,
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
    image: { src: "/images/programs/montessori.jpg", alt: "Young girl in school uniform smiling in class" },
    inset: { src: "/images/classrooms/montessori-materials.jpg", alt: "Wooden letter blocks and play dough on a learning table" },
    href: "/academics#montessori",
  },
  {
    key: "school",
    eyebrow: "Primary to Secondary · Grades 1 – 10",
    title: "Strong foundations, real understanding",
    body: "From Grade 1 to Matric, students build solid knowledge in every core subject. We focus on understanding concepts rather than memorising them, and prepare students steadily for their board examinations.",
    points: ["Mathematics", "Science", "English & Urdu", "Computer education", "Conceptual understanding", "Exam preparation", "Discipline", "Critical thinking"],
    image: { src: "/images/programs/primary.jpg", alt: "Two primary students reading their textbooks at a desk" },
    inset: { src: "/images/programs/secondary.jpg", alt: "Smiling secondary student holding a textbook" },
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
    body: "Hands-on practicals in physics, chemistry and biology, essential for Matric and Intermediate science.",
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
    image: { src: "/images/classrooms/chalkboard-maths.jpg", alt: "Student confidently writing on the chalkboard" },
  },
  {
    title: "Quran & Islamic Activities",
    body: "Quran recitation, Naat and Islamic studies activities that nurture faith and good character.",
    image: { src: "/images/student-life/quran.jpg", alt: "The Holy Quran resting on a table" },
  },
  {
    title: "Friendship & Group Learning",
    body: "Group work, clubs and class activities where friendships and teamwork grow.",
    image: { src: "/images/student-life/friends.jpg", alt: "Smiling group of children standing together" },
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
  { src: "/images/programs/intermediate.jpg", alt: "College student holding her books", category: "students", caption: "Intermediate students" },
  { src: "/images/student-life/friends.jpg", alt: "Smiling group of children", category: "students", caption: "Friendships that last" },
  { src: "/images/student-life/independence-day.jpg", alt: "Student at his desk beside a Pakistan flag", category: "events", caption: "Independence Day" },
  { src: "/images/facilities/computer-lab.jpg", alt: "Students working at computers in the lab", category: "classrooms", caption: "Computer lab" },
  { src: "/images/programs/primary.jpg", alt: "Two primary students reading their textbooks", category: "classrooms", caption: "Reading together" },
  { src: "/images/programs/middle.jpg", alt: "Student in uniform writing in his notebook", category: "classrooms", caption: "Focused work" },
  { src: "/images/hero/students-classroom.jpg", alt: "Smiling students in uniform at their desks", category: "classrooms", caption: "A happy classroom" },
  { src: "/images/student-life/cricket.jpg", alt: "Students playing a cricket match", category: "sports", caption: "Cricket on the ground" },
  { src: "/images/classrooms/hands-on-learning.jpg", alt: "Student holding a learning ring during a class activity", category: "activities", caption: "Learning by doing" },
  { src: "/images/programs/montessori.jpg", alt: "Young student smiling in her classroom", category: "students", caption: "Our youngest learners" },
  { src: "/images/events/graduation.jpg", alt: "Graduates in gowns holding their caps", category: "events", caption: "Celebrating our graduates" },
  { src: "/images/facilities/library-stacks.jpg", alt: "Rows of bookshelves in the library", category: "campus", caption: "The library" },
  { src: "/images/programs/secondary.jpg", alt: "Smiling student holding a textbook", category: "classrooms", caption: "Matric classroom" },
  { src: "/images/classrooms/chalkboard-maths.jpg", alt: "Student writing on the chalkboard", category: "students", caption: "Confidence at the board" },
  { src: "/images/classrooms/montessori-materials.jpg", alt: "Wooden letter blocks and play dough", category: "activities", caption: "Montessori materials" },
  { src: "/images/facilities/science-lab.jpg", alt: "Microscope in the science lab", category: "campus", caption: "Science lab" },
  { src: "/images/student-life/football-match.jpg", alt: "Football being kicked on a green pitch", category: "sports", caption: "Football" },
  { src: "/images/classrooms/modern-classroom.jpg", alt: "Classroom with desks and a chalkboard", category: "campus", caption: "Our classrooms" },
  { src: "/images/student-life/painting.jpg", alt: "Child painting colourful artwork", category: "activities", caption: "Art class" },
  { src: "/images/events/debate.jpg", alt: "Microphone on stage at a debate", category: "events", caption: "Debate competition" },
  { src: "/images/campus/play-area.jpg", alt: "Outdoor play area with slides", category: "campus", caption: "Play area" },
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
      "Each year we honour students who have excelled in academics, character, sports, arts and service to the community, from Montessori to Intermediate.",
      "The ceremony is held in the multipurpose hall and includes performances by students, followed by the presentation of certificates, medals and trophies.",
    ],
    image: { src: "/images/events/graduation.jpg", alt: "Graduates in gowns holding their caps" },
  },
];

// ---- FAQs ------------------------------------------------------------------

export const faqs: { q: string; a: string }[] = [
  {
    q: "What age groups does Falah Academy accept?",
    a: "We welcome students from Montessori (Playgroup, around age 3) through Intermediate (Grades 11 and 12). Age requirements for each class are shared by the admissions office.",
  },
  {
    q: "How can I apply for admission?",
    a: "Start by submitting an inquiry through our contact form, by phone or by visiting the campus. Our admissions team will guide you through the application, assessment and document verification steps.",
  },
  {
    q: "Is an admission test required?",
    a: "For most classes, students take a short age-appropriate assessment and attend a friendly interview. Montessori admissions usually involve an informal interaction rather than a written test.",
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

