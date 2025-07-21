const employees = [
  {
    id: 1,
    name: "Rushikesh Landge",
    email: "rushikesh@example.com",
    password: "emp123",
    role: "employee",
    tasks: [
      { taskName: "Update project documentation", status: "completed" },
      { taskName: "Fix login bug", status: "new" },
    ],
  },
  {
    id: 2,
    name: "Sneha Patil",
    email: "sneha@example.com",
    password: "emp456",
    role: "employee",
    tasks: [
      { taskName: "Design dashboard UI", status: "accepted" },
      { taskName: "Write test cases", status: "new" },
    ],
  },
  {
    id: 3,
    name: "Ravi Deshmukh",
    email: "ravi@example.com",
    password: "emp789",
    role: "employee",
    tasks: [
      { taskName: "Deploy to staging", status: "failed" },
      { taskName: "Create GitHub Wiki", status: "completed" },
    ],
  },
  {
    id: 4,
    name: "Pooja Sharma",
    email: "pooja@example.com",
    password: "emp321",
    role: "employee",
    tasks: [
      { taskName: "Optimize React app", status: "accepted" },
      { taskName: "Update dependencies", status: "completed" },
    ],
  },
  {
    id: 5,
    name: "Amit Verma",
    email: "amit@example.com",
    password: "emp654",
    role: "employee",
    tasks: [
      { taskName: "Fix dark mode issue", status: "new" },
      { taskName: "Conduct code review", status: "failed" },
    ],
  },
];

const admins = [
  {
    id: 101,
    name: "Neha Joshi",
    email: "neha.admin@example.com",
    password: "admin123",
    role: "admin",
    tasks: [
      {
        taskName: "Update project documentation",
        assignedTo: "Rushikesh Landge",
        status: "completed",
      },
      {
        taskName: "Fix login bug",
        assignedTo: "Rushikesh Landge",
        status: "new",
      },
    ],
  },
  {
    id: 102,
    name: "Ajay Mehta",
    email: "ajay.admin@example.com",
    password: "admin456",
    role: "admin",
    tasks: [
      {
        taskName: "Design dashboard UI",
        assignedTo: "Sneha Patil",
        status: "accepted",
      },
      {
        taskName: "Write test cases",
        assignedTo: "Sneha Patil",
        status: "new",
      },
    ],
  },
];

export const setEmployeeDetails = () => {
  localStorage.setItem("Employees", JSON.stringify(employees));
};
export const setAdminDetails = () => {
  localStorage.setItem("Admins", JSON.stringify(admins));
};

