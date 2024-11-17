const courses = [
  // Core Computer Science
  {
    name: "Introduction to Programming",
    course_id: "CS101",
    prerequisites: [],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Alice Smith", "Prof. John Doe"],
  },
  {
    name: "Data Structures and Algorithms",
    course_id: "CS201",
    prerequisites: ["CS101"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Emily Turner", "Dr. Marcus Chen"],
  },
  {
    name: "Computer Systems Principles",
    course_id: "CS230",
    prerequisites: ["CS101"],
    corequisites: [],
    credits: 4,
    professors: ["Prof. Michael Brown", "Dr. Sophia Green"],
  },
  {
    name: "Object-Oriented Programming",
    course_id: "CS211",
    prerequisites: ["CS101"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Rachel Wong", "Prof. Thomas Anderson"],
  },
  {
    name: "Programming Languages",
    course_id: "CS312",
    prerequisites: ["CS201"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Lisa Cooper", "Prof. David Chang"],
  },
  {
    name: "Software Engineering",
    course_id: "CS325",
    prerequisites: ["CS211"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Sarah Johnson", "Prof. Robert Martin"],
  },
  {
    name: "Web Programming",
    course_id: "CS326",
    prerequisites: ["CS201"],
    corequisites: [],
    credits: 3,
    professors: ["Dr. Jason Lee", "Prof. Maria Garcia"],
  },
  {
    name: "Mobile App Development",
    course_id: "CS327",
    prerequisites: ["CS211"],
    corequisites: [],
    credits: 3,
    professors: ["Dr. Kevin Murphy", "Prof. Anna Kim"],
  },
  {
    name: "Database Systems",
    course_id: "CS345",
    prerequisites: ["CS201"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. James Wilson", "Prof. Elena Rodriguez"],
  },
  {
    name: "Operating Systems",
    course_id: "CS320",
    prerequisites: ["CS201", "CS230"],
    corequisites: [],
    credits: 4,
    professors: ["Prof. Rachel Adams", "Dr. Brian King"],
  },

  // Mathematics and Theory
  {
    name: "Discrete Mathematics",
    course_id: "MATH210",
    prerequisites: [],
    corequisites: [],
    credits: 3,
    professors: ["Dr. Laura Wilson", "Prof. Peter Zhang"],
  },
  {
    name: "Linear Algebra",
    course_id: "MATH220",
    prerequisites: [],
    corequisites: [],
    credits: 3,
    professors: ["Dr. Michael Lee", "Prof. Sandra Miller"],
  },
  {
    name: "Probability and Statistics",
    course_id: "MATH310",
    prerequisites: ["MATH210"],
    corequisites: [],
    credits: 3,
    professors: ["Dr. Daniel Park", "Prof. Emma Thompson"],
  },
  {
    name: "Theory of Computation",
    course_id: "CS340",
    prerequisites: ["CS201", "MATH210"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Christopher Brown", "Prof. Julia Martinez"],
  },
  {
    name: "Algorithms Analysis",
    course_id: "CS341",
    prerequisites: ["CS201", "MATH210"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Richard Davis", "Prof. Michelle Wang"],
  },

  // AI and Machine Learning
  {
    name: "Artificial Intelligence",
    course_id: "CS410",
    prerequisites: ["CS201", "MATH210"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Andrew Clark", "Prof. Jennifer Lee"],
  },
  {
    name: "Machine Learning",
    course_id: "CS450",
    prerequisites: ["CS410", "MATH210"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. William White", "Prof. Karen Chen"],
  },
  {
    name: "Deep Learning",
    course_id: "CS451",
    prerequisites: ["CS450"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. George Wilson", "Prof. Linda Zhang"],
  },
  {
    name: "Computer Vision",
    course_id: "CS452",
    prerequisites: ["CS450"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Eric Johnson", "Prof. Nancy Liu"],
  },
  {
    name: "Natural Language Processing",
    course_id: "CS453",
    prerequisites: ["CS450"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Mark Thompson", "Prof. Susan Kim"],
  },

  // Systems and Networks
  {
    name: "Computer Networks",
    course_id: "CS370",
    prerequisites: ["CS230"],
    corequisites: [],
    credits: 3,
    professors: ["Prof. Jessica Martinez", "Dr. Robert Wilson"],
  },
  {
    name: "Network Security",
    course_id: "CS371",
    prerequisites: ["CS370"],
    corequisites: [],
    credits: 3,
    professors: ["Dr. Timothy Brown", "Prof. Laura Chen"],
  },
  {
    name: "Distributed Systems",
    course_id: "CS372",
    prerequisites: ["CS370"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Anthony Davis", "Prof. Helen Wang"],
  },
  {
    name: "Cloud Computing",
    course_id: "CS373",
    prerequisites: ["CS370"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Paul Roberts", "Prof. Diana Kim"],
  },

  // Security
  {
    name: "Information Security",
    course_id: "CS360",
    prerequisites: ["CS230"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Steven Johnson", "Prof. Mary Wilson"],
  },
  {
    name: "Cryptography",
    course_id: "CS361",
    prerequisites: ["CS360", "MATH210"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. David Lee", "Prof. Catherine Brown"],
  },
  {
    name: "Cybersecurity Analytics",
    course_id: "CS362",
    prerequisites: ["CS360"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Joseph Martin", "Prof. Elizabeth Chen"],
  },

  // Data Science
  {
    name: "Introduction to Data Science",
    course_id: "DS200",
    prerequisites: ["CS101", "MATH210"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Amanda Taylor", "Prof. Ryan Park"],
  },
  {
    name: "Big Data Analytics",
    course_id: "DS300",
    prerequisites: ["DS200"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Benjamin Lee", "Prof. Sophie Wilson"],
  },
  {
    name: "Data Visualization",
    course_id: "DS310",
    prerequisites: ["DS200"],
    corequisites: [],
    credits: 3,
    professors: ["Dr. Victoria Chang", "Prof. Matthew Brown"],
  },

  // Graphics and Gaming
  {
    name: "Computer Graphics",
    course_id: "CS380",
    prerequisites: ["CS201", "MATH220"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Nathan Wilson", "Prof. Rebecca Lee"],
  },
  {
    name: "Game Development",
    course_id: "CS381",
    prerequisites: ["CS380"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Justin Brown", "Prof. Olivia Chen"],
  },
  {
    name: "Virtual Reality",
    course_id: "CS382",
    prerequisites: ["CS380"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Alex Thompson", "Prof. Emma Davis"],
  },

  // Advanced Topics
  {
    name: "Quantum Computing",
    course_id: "CS490",
    prerequisites: ["CS340", "MATH220"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Philip Chen", "Prof. Margaret Wilson"],
  },
  {
    name: "Robotics",
    course_id: "CS491",
    prerequisites: ["CS410", "MATH220"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Charles Lee", "Prof. Patricia Brown"],
  },
  {
    name: "Bioinformatics",
    course_id: "CS492",
    prerequisites: ["CS201", "DS200"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Sharon Wilson", "Prof. Gregory Park"],
  },

  // Project Courses
  {
    name: "Senior Project I",
    course_id: "CS495",
    prerequisites: ["CS325"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Karen Davis", "Prof. Michael Chen"],
  },
  {
    name: "Senior Project II",
    course_id: "CS496",
    prerequisites: ["CS495"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Frank Wilson", "Prof. Jennifer Brown"],
  },

  // Additional Math Courses
  {
    name: "Calculus I",
    course_id: "MATH101",
    prerequisites: [],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Howard Lee", "Prof. Christine Taylor"],
  },
  {
    name: "Calculus II",
    course_id: "MATH102",
    prerequisites: ["MATH101"],
    corequisites: [],
    credits: 4,
    professors: ["Dr. Nina Wilson", "Prof. Samuel Park"],
  },
  {
    name: "Numerical Analysis",
    course_id: "MATH330",
    prerequisites: ["MATH220"],
    corequisites: [],
    credits: 3,
    professors: ["Dr. Oliver Brown", "Prof. Grace Chen"],
  },
];
