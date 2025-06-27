import React from "react";

export default function FilterTabs({
  option = [],
  activeTab,
  change = () => {},
}) {
  // const [activeTab, setActiveTab] = useSactiveTabtate("All");

  return (
    <div className="filter-tabs">
      {option.map((tab) => (
        <div
          key={tab}
          className={`tab-item ${activeTab === tab ? "active" : ""}`}
          onClick={() => {
            // setActiveTab(tab);
            change(tab);
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
