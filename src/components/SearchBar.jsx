import React from "react";

const SearchBar = ({ mobile = false }) => (
  <div className="relative w-full md:w-auto">
    <input
      type="text"
      placeholder="Search notes..."
      className={`pl-8 pr-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm ${mobile ? "w-full" : ""}`}
    />
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-2.5 top-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
);

export default SearchBar;
// This component renders a search bar with an icon inside it. The `mobile` prop determines if the search bar should be full-width or not.
// The search bar has a placeholder text "Search notes..." and an icon inside it. The styles are applied using Tailwind CSS classes.