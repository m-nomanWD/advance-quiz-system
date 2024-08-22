import { sessions } from '../constants/constants'

export const getFormatedResultData = (papers, students) => {
  const labels = papers.map((paper) => paper.title)
  const datasets = students.map((student) => ({
    label: student.name, // Student's name
    data: [
      student.scores.paper1,
      student.scores.paper2,
      student.scores.paper3,
      student.scores.paper4,
      student.scores.paper5,
    ],
    fill: false,
    borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`, // Random color for each student
    tension: 0.5, // Curve the lines slightly
  }))
  return { labels: labels, datasets: datasets }
}

// Function to calculate averages
export const calculateAverages = (session) => {
  const totalScores = { paper1: 0, paper2: 0, paper3: 0, paper4: 0, paper5: 0 }
  const studentCount = session.students.length

  session.students.forEach((student) => {
    Object.keys(student.scores).forEach((paper) => {
      totalScores[paper] += student.scores[paper]
    })
  })

  const averages = Object.keys(totalScores).reduce((acc, paper) => {
    acc[paper] = totalScores[paper] / studentCount
    return acc
  }, {})

  return averages
}
