import React from "react";
// import { Progress } from "./ui/progress"; // Ensure this path is correct

// Sample data for categories
const categories = [
  { name: "Payment", count: 4, color: "bg-green-500", max: 10 },
  { name: "Travel", count: 3, color: "bg-purple-500", max: 10 },
  { name: "Food and Drinks", count: 2, color: "bg-cyan-500", max: 10 },
  { name: "Clothes", count: 1, color: "bg-orange-500", max: 10 },
];

const Category = () => {
  return (
    <div className="p-4 space-y-6">
      {categories.map((category, index) => {
        const progressPercentage = (category.count / category.max) * 100;
        return (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">{category.name}</span>
              <span className="text-sm text-gray-600">{`${category.count} Transactions`}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-md h-3">
              <div
                className={`h-3 rounded-md ${category.color}`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
