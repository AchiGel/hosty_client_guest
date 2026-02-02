import { Link } from "react-router-dom";

const SuccessRequest = () => {
  const PROGRESS = [
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-clock w-5 h-5"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Received",
      active: true,
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-user-check w-5 h-5"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <polyline points="16 11 18 13 22 9"></polyline>
        </svg>
      ),
      title: "Assigned",
      active: false,
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-play w-5 h-5"
        >
          <polygon points="6 3 20 12 6 21 6 3"></polygon>
        </svg>
      ),
      title: "In Progress",
      active: false,
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-circle-check-big w-5 h-5"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
      ),
      title: "Done",
      active: false,
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6 animate-in fade-in zoom-in duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-check w-10 h-10 text-green-500"
        >
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      </div>
      <h2 className="font-playfair text-2xl font-semibold text-[#111111] mb-2">
        Request Received
      </h2>
      <p className="text-neutral-500 mb-6">
        Our team has been notified and will assist you shortly.
      </p>
      <div className="w-full max-w-sm p-4 rounded-2xl bg-white border border-neutral-100 mb-6 shadow-sm">
        <p className="font-semibold text-[#111111] mb-2">Your request batch</p>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600 truncate pr-2">Bath Towel</span>
            <span className="font-semibold text-[#111111]">×2</span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm">
        <p className="text-xs text-neutral-400 mb-4 uppercase tracking-widest font-medium">
          Track Progress
        </p>
        <div className="flex items-center justify-between">
          {PROGRESS.map((pr) => (
            <div
              key={pr.id}
              className="flex items-center flex-1 last:flex-none"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
    ${
      pr.active
        ? "bg-[#c9a65e] border-[#c9a65e] text-[#10192d] animate-pulse-gentle"
        : "bg-[#e8eaee] border-[#dcdfe5] text-[#676f7e]"
    }
  `}
                >
                  {pr.icon}
                </div>
                <span
                  className={`text-xs mt-2 font-medium ${
                    pr.active ? "text-[#c9a65e]" : "text-[#676f7e]"
                  }`}
                >
                  {pr.title}
                </span>
              </div>
              <div className="flex-1 h-0.5 mx-2 transition-colors duration-300 bg-[#dcdfe5]" />
            </div>
          ))}
        </div>
      </div>
      <Link to={"/"}>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-[#f6f7f9] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-[#dcdfe5] bg-[#f6f7f9] hover:bg-[#c9a65e] hover:text-[#0f1729] h-10 px-4 py-2 mt-8 rounded-xl">
          Return to Home
        </button>
      </Link>
    </div>
  );
};

export default SuccessRequest;
