export const AMENITIES = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-sparkles w-5 h-5"
      >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        <path d="M20 3v4"></path>
        <path d="M22 5h-4"></path>
        <path d="M4 17v2"></path>
        <path d="M5 18H3"></path>
      </svg>
    ),
    title: "Spa",
    AccessTime: "10:00 - 22:00",
    message: "Spa is open from 10:00 to 22:00. Visit lobby level.",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12c0-4 3-7 10-7s10 3 10 7-3 5-10 5-10-1-10-5z"></path>
        <path d="M2 12v4c0 2 3 4 10 4s10-2 10-4v-4"></path>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    title: "Pool",
    AccessTime: "08:00 - 21:00",
    message: "Indoor pool is located on Level -1.",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.5 6.5a9 9 0 0 1 11 11"></path>
        <path d="M6 17V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"></path>
        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
      </svg>
    ),
    title: "Gym",
    AccessTime: "24/7 Access",
    message: "Fitness center is available 24/7. Use your room key.",
  },
  {
    id: 4,
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18"></path>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <path d="M10 11v6"></path>
        <path d="M14 11v6"></path>
      </svg>
    ),
    title: "Laundry",
    AccessTime: "Same-day service",
    message: "Request laundry service from the menu.",
    navigateTo: "/categories",
  },
];
