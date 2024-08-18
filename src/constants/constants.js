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

export { logoWhite, logoBlue }
