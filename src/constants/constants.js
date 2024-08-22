import { logoWhite, logoBlue } from '../assets'
import { IoHomeOutline } from 'react-icons/io5'
import { PiStudent, PiUser } from 'react-icons/pi'
import { RiFilePaper2Line } from 'react-icons/ri'
import { TbReportAnalytics } from 'react-icons/tb'

export const links = [
  {
    label: 'login',
    url: '/teacher-dashboard',
  },
  {
    label: 'signup',
    url: 'link goes here',
  },
]

export const testTypes = [
  { id: 1, name: 'MDCAT (Medical & Dental College Admission Test)' },
  { id: 2, name: 'ECAT (Engineering College Admission Test)' },
  { id: 3, name: 'NAT (National Aptitude Test)' },
  { id: 4, name: 'GAT (Graduate Assessment Test)' },
  { id: 5, name: 'HAT (Higher Education Aptitude Test)' },
  { id: 6, name: 'SSC (Secondary School Certificate)' },
  { id: 7, name: 'HSSC (Higher Secondary School Certificate)' },
  { id: 9, name: 'O-Level and A-Level Exams (CIE)' },
  { id: 10, name: 'CSS (Central Superior Services) Exam' },
  { id: 11, name: 'PPSC (Punjab Public Service Commission)' },
  { id: 12, name: 'FPSC (Federal Public Service Commission)' },
  { id: 13, name: 'NTS (National Testing Service)' },
  { id: 14, name: 'OTS (Open Testing Service)' },
  { id: 15, name: "State Bank of Pakistan's YPIP" },
  { id: 16, name: 'Various Bank Recruitment Tests' },
  { id: 17, name: 'ISSB (Inter-Services Selection Board)' },
  { id: 18, name: 'Army Recruitment Tests' },
]
export const subjects = [
  {
    id: 1,
    name: 'Mathematics',
    topics: ['Algebra', 'Calculus', 'Geometry', 'Trigonometry', 'Statistics'],
  },
  {
    id: 2,
    name: 'Physics',
    topics: [
      'Mechanics',
      'Thermodynamics',
      'Electromagnetism',
      'Optics',
      'Quantum Mechanics',
    ],
  },
  {
    id: 3,
    name: 'Chemistry',
    topics: [
      'Organic Chemistry',
      'Inorganic Chemistry',
      'Physical Chemistry',
      'Analytical Chemistry',
      'Biochemistry',
    ],
  },
  {
    id: 4,
    name: 'Biology',
    topics: ['Genetics', 'Ecology', 'Cell Biology', 'Anatomy', 'Physiology'],
  },
  {
    id: 5,
    name: 'Computer Science',
    topics: [
      'Data Structures',
      'Algorithms',
      'Database Management',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    id: 6,
    name: 'English',
    topics: [
      'Grammar',
      'Literature',
      'Writing Skills',
      'Comprehension',
      'Vocabulary',
    ],
  },
  {
    id: 7,
    name: 'History',
    topics: [
      'Ancient Civilizations',
      'Medieval History',
      'Modern History',
      'World Wars',
      'Revolutions',
    ],
  },
  {
    id: 8,
    name: 'Geography',
    topics: [
      'Physical Geography',
      'Human Geography',
      'Climatology',
      'Cartography',
      'Environmental Geography',
    ],
  },
  {
    id: 9,
    name: 'Economics',
    topics: [
      'Microeconomics',
      'Macroeconomics',
      'International Economics',
      'Public Finance',
      'Development Economics',
    ],
  },
  {
    id: 10,
    name: 'Political Science',
    topics: [
      'Political Theory',
      'Comparative Politics',
      'International Relations',
      'Public Administration',
      'Political Ideologies',
    ],
  },
]
export const teacherSidebarLink = [
  {
    label: 'overview',
    link: '/teacher-dashboard/',
    icon: IoHomeOutline,
  },
  {
    label: 'results',
    link: '/teacher-dashboard/results',
    icon: TbReportAnalytics,
  },
  {
    label: 'students',
    link: '/teacher-dashboard/students',
    icon: PiStudent,
  },
  {
    label: 'papers',
    link: '/teacher-dashboard/papers',
    icon: RiFilePaper2Line,
  },
  {
    label: 'profile',
    link: '/teacher-dashboard/profile',
    icon: PiUser,
  },
]
export const papers = [
  { id: 1, title: 'Mathematics ' },
  { id: 2, title: 'Science' },
  { id: 3, title: 'History' },
  { id: 4, title: 'English ' },
  { id: 5, title: 'CS' },
]

export const students = [
  {
    name: 'Student 1',
    scores: { paper1: 5, paper2: 90, paper3: 78, paper4: 88, paper5: 2 },
  },
  {
    name: 'Student 2',
    scores: { paper1: 78, paper2: 83, paper3: 80, paper4: 5, paper5: 87 },
  },
  {
    name: 'Student 3',
    scores: { paper1: 92, paper2: 88, paper3: 84, paper4: 0, paper5: 9 },
  },
  {
    name: 'Student 4',
    scores: { paper1: 44, paper2: 82, paper3: 77, paper4: 59, paper5: 81 },
  },
  {
    name: 'Student 5',
    scores: { paper1: 49, paper2: 41, paper3: 25, paper4: 86, paper5: 93 },
  },
  {
    name: 'Student 6',
    scores: { paper1: 76, paper2: 79, paper3: 74, paper4: 82, paper5: 78 },
  },
  {
    name: 'Student 7',
    scores: { paper1: 90, paper2: 87, paper3: 82, paper4: 91, paper5: 88 },
  },
  {
    name: 'Student 8',
    scores: { paper1: 85, paper2: 84, paper3: 81, paper4: 87, paper5: 86 },
  },
  {
    name: 'Student 9',
    scores: { paper1: 80, paper2: 83, paper3: 76, paper4: 79, paper5: 77 },
  },
  {
    name: 'Student 10',
    scores: { paper1: 77, paper2: 75, paper3: 70, paper4: 78, paper5: 74 },
  },
  {
    name: 'Student 11',
    scores: { paper1: 8, paper2: 85, paper3: 80, paper4: 0, paper5: 89 },
  },
  {
    name: 'Student 12',
    scores: { paper1: 2, paper2: 18, paper3: 75, paper4: 24, paper5: 83 },
  },
  {
    name: 'Student 13',
    scores: { paper1: 61, paper2: 92, paper3: 88, paper4: 93, paper5: 25 },
  },
  {
    name: 'Student 14',
    scores: { paper1: 84, paper2: 82, paper3: 79, paper4: 85, paper5: 86 },
  },
  {
    name: 'Student 15',
    scores: { paper1: 9, paper2: 60, paper3: 77, paper4: 81, paper5: 80 },
  },
  {
    name: 'Student 16',
    scores: { paper1: 27, paper2: 89, paper3: 83, paper4: 88, paper5: 40 },
  },
  {
    name: 'Student 17',
    scores: { paper1: 53, paper2: 45, paper3: 72, paper4: 76, paper5: 74 },
  },
  {
    name: 'Student 18',
    scores: { paper1: 93, paper2: 91, paper3: 89, paper4: 94, paper5: 92 },
  },
  {
    name: 'Student 19',
    scores: { paper1: 86, paper2: 84, paper3: 82, paper4: 87, paper5: 85 },
  },
  {
    name: 'Student 20',
    scores: { paper1: 75, paper2: 77, paper3: 73, paper4: 78, paper5: 76 },
  },
  {
    name: 'Student 21',
    scores: { paper1: 89, paper2: 66, paper3: 83, paper4: 48, paper5: 87 },
  },
  {
    name: 'Student 22',
    scores: { paper1: 80, paper2: 81, paper3: 69, paper4: 24, paper5: 83 },
  },
  {
    name: 'Student 23',
    scores: { paper1: 25, paper2: 88, paper3: 82, paper4: 89, paper5: 10 },
  },
  {
    name: 'Student 24',
    scores: { paper1: 22, paper2: 44, paper3: 70, paper4: 75, paper5: 71 },
  },
  {
    name: 'Student 25',
    scores: { paper1: 44, paper2: 92, paper3: 90, paper4: 95, paper5: 44 },
  },
  {
    name: 'Student 26',
    scores: { paper1: 83, paper2: 81, paper3: 78, paper4: 84, paper5: 82 },
  },
  {
    name: 'Student 27',
    scores: { paper1: 77, paper2: 80, paper3: 74, paper4: 79, paper5: 76 },
  },
  {
    name: 'Student 28',
    scores: { paper1: 41, paper2: 93, paper3: 87, paper4: 94, paper5: 52 },
  },
  {
    name: 'Student 29',
    scores: { paper1: 48, paper2: 85, paper3: 82, paper4: 89, paper5: 67 },
  },
  {
    name: 'Student 30',
    scores: { paper1: 49, paper2: 47, paper3: 75, paper4: 80, paper5: 78 },
  },
]

// Example data for 3 sessions
export const sessions = [
  {
    id: 'session1',
    name: 'Session 1',
    students: [
      {
        name: 'Student 1',
        scores: { paper1: 25, paper2: 10, paper3: 78, paper4: 88, paper5: 22 },
      },
      {
        name: 'Student 2',
        scores: { paper1: 7, paper2: 33, paper3: 80, paper4: 85, paper5: 8 },
      },
      {
        name: 'Student 3',
        scores: { paper1: 2, paper2: 88, paper3: 84, paper4: 90, paper5: 89 },
      },
    ],
  },
  {
    id: 'session2',
    name: 'Session 2',
    students: [
      {
        name: 'Student 4',
        scores: { paper1: 7, paper2: 82, paper3: 77, paper4: 9, paper5: 81 },
      },
      {
        name: 'Student 5',
        scores: { paper1: 89, paper2: 91, paper3: 85, paper4: 86, paper5: 93 },
      },
      {
        name: 'Student 6',
        scores: { paper1: 7, paper2: 9, paper3: 74, paper4: 2, paper5: 78 },
      },
    ],
  },
  {
    id: 'session3',
    name: 'Session 3',
    students: [
      {
        name: 'Student 7',
        scores: { paper1: 90, paper2: 87, paper3: 82, paper4: 9, paper5: 88 },
      },
      {
        name: 'Student 8',
        scores: { paper1: 85, paper2: 84, paper3: 81, paper4: 87, paper5: 8 },
      },
      {
        name: 'Student 9',
        scores: { paper1: 0, paper2: 83, paper3: 76, paper4: 79, paper5: 7 },
      },
    ],
  },
]

export { logoWhite, logoBlue }
