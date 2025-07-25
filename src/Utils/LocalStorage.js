const employees = [
  {
    id: 1,
    name: "Rushikesh Landge",
    email: "rushikesh@example.com",
    password: "emp123",
    role: "employee",
    tasks: [
      {
        taskName: "Update project documentation",
        status: "completed",
        dateAssigned: "2025-07-15",
        description: "Update README files and technical documentation for the Employee Management System.",
        priority: "Medium",
      },
      {
        taskName: "Fix login bug",
        status: "new",
        dateAssigned: "2025-07-20",
        description: "Resolve bug where login fails on invalid token refresh.",
        priority: "High",
      },
      {
        taskName: "Add password reset flow",
        status: "accepted",
        dateAssigned: "2025-07-18",
        description: "Implement the password reset feature using email OTP.",
        priority: "High",
      },
      {
        taskName: "Refactor Navbar component",
        status: "completed",
        dateAssigned: "2025-07-10",
        description: "Clean and modularize the navigation bar for both admin and employee dashboards.",
        priority: "Low",
      },
      {
        taskName: "Create reusable modal component",
        status: "new",
        dateAssigned: "2025-07-21",
        description: "Design a general-purpose modal component to be used across the app.",
        priority: "Medium",
      },
      {
        taskName: "Improve accessibility",
        status: "new",
        dateAssigned: "2025-07-19",
        description: "Add ARIA labels and improve keyboard navigation support.",
        priority: "Low",
      },
      {
        taskName: "Add form validation",
        status: "accepted",
        dateAssigned: "2025-07-17",
        description: "Add client-side validation to all input forms using regex and constraints.",
        priority: "High",
      },
    ],
  },

  {
    id: 2,
    name: "Sneha Patil",
    email: "sneha@example.com",
    password: "emp456",
    role: "employee",
    tasks: [
      {
        taskName: "Design dashboard UI",
        status: "accepted",
        dateAssigned: "2025-07-14",
        description: "Design an intuitive and responsive UI for the employee dashboard.",
        priority: "High",
      },
      {
        taskName: "Write test cases",
        status: "new",
        dateAssigned: "2025-07-19",
        description: "Write unit tests for critical login and logout components using Jest.",
        priority: "Medium",
      },
      {
        taskName: "Create component library",
        status: "new",
        dateAssigned: "2025-07-20",
        description: "Develop a small reusable component library using React and Tailwind.",
        priority: "Low",
      },
      {
        taskName: "Implement toast notifications",
        status: "new",
        dateAssigned: "2025-07-21",
        description: "Use `react-toastify` to notify users about success/failure of actions.",
        priority: "Medium",
      },
      {
        taskName: "Fix sidebar overflow issue",
        status: "completed",
        dateAssigned: "2025-07-17",
        description: "Resolve scrolling issue in the sidebar on small screens.",
        priority: "High",
      },
      {
        taskName: "Polish typography system",
        status: "accepted",
        dateAssigned: "2025-07-12",
        description: "Apply consistent font sizes and spacing across components.",
        priority: "Low",
      },
    ],
  },

  {
    id: 3,
    name: "Ravi Deshmukh",
    email: "ravi@example.com",
    password: "emp789",
    role: "employee",
    tasks: [
      {
        taskName: "Deploy to staging",
        status: "failed",
        dateAssigned: "2025-07-10",
        description: "Deploy the latest development build to staging and run smoke tests.",
        priority: "High",
      },
      {
        taskName: "Create GitHub Wiki",
        status: "completed",
        dateAssigned: "2025-07-13",
        description: "Document all key endpoints and setup instructions in GitHub Wiki.",
        priority: "Medium",
      },
      {
        taskName: "Set up CI pipeline",
        status: "new",
        dateAssigned: "2025-07-21",
        description: "Automate build and test using GitHub Actions and push results to Slack.",
        priority: "High",
      },
      {
        taskName: "Integrate ESLint",
        status: "new",
        dateAssigned: "2025-07-18",
        description: "Add ESLint and Prettier for consistent coding style enforcement.",
        priority: "Medium",
      },
      {
        taskName: "Enable service worker",
        status: "accepted",
        dateAssigned: "2025-07-15",
        description: "Enable PWA support for offline caching using service workers.",
        priority: "Low",
      },
      {
        taskName: "Generate build reports",
        status: "completed",
        dateAssigned: "2025-07-19",
        description: "Analyze build sizes using source-map-explorer.",
        priority: "Medium",
      },
    ],
  },

  {
    id: 4,
    name: "Pooja Sharma",
    email: "pooja@example.com",
    password: "emp321",
    role: "employee",
    tasks: [
      {
        taskName: "Optimize React app",
        status: "accepted",
        dateAssigned: "2025-07-16",
        description: "Use memoization and lazy loading to reduce render bottlenecks.",
        priority: "High",
      },
      {
        taskName: "Update dependencies",
        status: "completed",
        dateAssigned: "2025-07-11",
        description: "Upgrade project dependencies to latest stable versions.",
        priority: "Low",
      },
      {
        taskName: "Refactor sidebar",
        status: "new",
        dateAssigned: "2025-07-21",
        description: "Make sidebar collapsible and responsive.",
        priority: "Medium",
      },
      {
        taskName: "Add dark mode support",
        status: "accepted",
        dateAssigned: "2025-07-14",
        description: "Enable dark mode toggle using Tailwind CSS dark classes.",
        priority: "Medium",
      },
      {
        taskName: "Fix animation flickering",
        status: "failed",
        dateAssigned: "2025-07-17",
        description: "Resolve UI flicker issue during component mount transitions.",
        priority: "High",
      },
      {
        taskName: "Organize assets folder",
        status: "completed",
        dateAssigned: "2025-07-19",
        description: "Sort all static assets and remove unused images/icons.",
        priority: "Low",
      },
    ],
  },

  {
    id: 5,
    name: "Amit Verma",
    email: "amit@example.com",
    password: "emp654",
    role: "employee",
    tasks: [
      {
        taskName: "Fix dark mode issue",
        status: "new",
        dateAssigned: "2025-07-19",
        description: "Resolve visual issues with text and background colors in dark mode.",
        priority: "High",
      },
      {
        taskName: "Conduct code review",
        status: "failed",
        dateAssigned: "2025-07-15",
        description: "Review all frontend pull requests and comment on best practices.",
        priority: "Medium",
      },
      {
        taskName: "Write API integration docs",
        status: "accepted",
        dateAssigned: "2025-07-20",
        description: "Document REST API endpoints and how frontend components use them.",
        priority: "Medium",
      },
      {
        taskName: "Analyze performance bottlenecks",
        status: "new",
        dateAssigned: "2025-07-17",
        description: "Use Chrome DevTools to identify slow-rendering components.",
        priority: "High",
      },
      {
        taskName: "Add pagination to task list",
        status: "accepted",
        dateAssigned: "2025-07-16",
        description: "Paginate employee task view using `react-paginate` or custom logic.",
        priority: "Medium",
      },
      {
        taskName: "Update task card styling",
        status: "completed",
        dateAssigned: "2025-07-13",
        description: "Redesign task cards with status badges and responsive layout.",
        priority: "Low",
      },
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

