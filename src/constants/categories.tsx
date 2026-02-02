export const CATEGORIES = [
  {
    id: 1,
    title: "Room Service",
    subtitle: "Essentials and Linens",
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
      >
        <path d="M2 4v16"></path>
        <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
        <path d="M2 17h20"></path>
        <path d="M6 8v9"></path>
      </svg>
    ),
    subcategories: [
      {
        id: 1,
        title: "Towels",
        subtitle: "Bath & hand towels",
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
          >
            <path d="M2 4v16"></path>
            <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
            <path d="M2 17h20"></path>
            <path d="M6 8v9"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Bath towel" },
          { id: 2, label: "Hand towel" },
          { id: 3, label: "Extra towels" },
        ],
      },
      {
        id: 2,
        title: "Pillows",
        subtitle: "Comfort options",
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
          >
            <path d="M2 4v16"></path>
            <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
            <path d="M2 17h20"></path>
            <path d="M6 8v9"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Soft pillow" },
          { id: 2, label: "Firm pillow" },
          { id: 3, label: "Extra pillow" },
        ],
      },
      {
        id: 3,
        title: "Blankets",
        subtitle: "Warm & light",
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
          >
            <path d="M2 4v16"></path>
            <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
            <path d="M2 17h20"></path>
            <path d="M6 8v9"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Light blanket" },
          { id: 2, label: "Warm blanket" },
        ],
      },
      {
        id: 4,
        title: "Shower & Hygiene",
        subtitle: "Bathroom essentials",
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
          >
            <path d="M2 4v16"></path>
            <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
            <path d="M2 17h20"></path>
            <path d="M6 8v9"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Shampoo" },
          { id: 2, label: "Shower gel" },
          { id: 3, label: "Toothbrush & toothpaste" },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Cleaning",
    subtitle: "Housekeeping",
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
      >
        <path d="M3 3h.01"></path>
        <path d="M7 5h.01"></path>
        <path d="M11 7h.01"></path>
        <path d="M3 7h.01"></path>
        <path d="M7 9h.01"></path>
        <path d="M3 11h.01"></path>
        <rect width="4" height="4" x="15" y="5"></rect>
        <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"></path>
        <path d="m13 14 8-2"></path>
        <path d="m13 19 8-2"></path>
      </svg>
    ),
    subcategories: [
      {
        id: 1,
        title: "Room Cleaning",
        subtitle: "General cleaning",
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
          >
            <path d="M3 3h.01"></path>
            <path d="M7 5h.01"></path>
            <path d="M11 7h.01"></path>
            <path d="M3 7h.01"></path>
            <path d="M7 9h.01"></path>
            <path d="M3 11h.01"></path>
            <rect width="4" height="4" x="15" y="5"></rect>
            <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"></path>
            <path d="m13 14 8-2"></path>
            <path d="m13 19 8-2"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Clean now" },
          { id: 2, label: "Clean later" },
        ],
      },
      {
        id: 2,
        title: "Linen Change",
        subtitle: "Fresh bedding",
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
          >
            <path d="M3 3h.01"></path>
            <path d="M7 5h.01"></path>
            <path d="M11 7h.01"></path>
            <path d="M3 7h.01"></path>
            <path d="M7 9h.01"></path>
            <path d="M3 11h.01"></path>
            <rect width="4" height="4" x="15" y="5"></rect>
            <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"></path>
            <path d="m13 14 8-2"></path>
            <path d="m13 19 8-2"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Change bed sheets" },
          { id: 2, label: "Change pillow covers" },
        ],
      },
      {
        id: 3,
        title: "Trash Removal",
        subtitle: "Waste service",
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
          >
            <path d="M3 3h.01"></path>
            <path d="M7 5h.01"></path>
            <path d="M11 7h.01"></path>
            <path d="M3 7h.01"></path>
            <path d="M7 9h.01"></path>
            <path d="M3 11h.01"></path>
            <rect width="4" height="4" x="15" y="5"></rect>
            <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"></path>
            <path d="m13 14 8-2"></path>
            <path d="m13 19 8-2"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Remove trash" },
          { id: 2, label: "Extra trash bags" },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Technical",
    subtitle: "Repairs and maintenance",
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
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    subcategories: [
      {
        id: 1,
        title: "Air Conditioning",
        subtitle: "Heating & cooling",
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
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Not cooling" },
          { id: 2, label: "Too noisy" },
        ],
      },
      {
        id: 2,
        title: "Lighting",
        subtitle: "Lights & bulbs",
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
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Light not working" },
          { id: 2, label: "Replace bulb" },
        ],
      },
      {
        id: 3,
        title: "Plumbing",
        subtitle: "Water issues",
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
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Leaking" },
          { id: 2, label: "No hot water" },
        ],
      },
      {
        id: 4,
        title: "TV / Internet",
        subtitle: "Entertainment",
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
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "TV not working" },
          { id: 2, label: "Wi-Fi issues" },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Minibar",
    subtitle: "Refills and beverages",
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
      >
        <path d="M8 22h8"></path>
        <path d="M7 10h10"></path>
        <path d="M12 15v7"></path>
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path>
      </svg>
    ),
    subcategories: [
      {
        id: 1,
        title: "Drinks",
        subtitle: "Cold beverages",
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
          >
            <path d="M8 22h8"></path>
            <path d="M7 10h10"></path>
            <path d="M12 15v7"></path>
            <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Water" },
          { id: 2, label: "Soft drinks" },
        ],
      },
      {
        id: 2,
        title: "Snacks",
        subtitle: "Quick bites",
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
          >
            <path d="M8 22h8"></path>
            <path d="M7 10h10"></path>
            <path d="M12 15v7"></path>
            <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Chips" },
          { id: 2, label: "Chocolate" },
        ],
      },
    ],
  },

  {
    id: 5,
    title: "Other Request",
    subtitle: "Special needs",
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
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
      </svg>
    ),
    subcategories: [
      {
        id: 1,
        title: "Special Assistance",
        subtitle: "Personal needs",
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
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
          </svg>
        ),
        options: [
          { id: 1, label: "Late checkout" },
          { id: 2, label: "Extra bed" },
        ],
      },
      {
        id: 2,
        title: "Custom Request",
        subtitle: "Anything else",
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
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
          </svg>
        ),
        options: [{ id: 1, label: "Write a note" }],
      },
    ],
  },
];
