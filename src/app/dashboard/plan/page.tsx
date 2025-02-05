"use client"
import Nav from "@/components/Nav";


import { useState } from "react";

export default function Dashboard() {
    const [selectedPlan, setSelectedPlan] = useState<string | null>('free');

    const handleSelectPlan = (plan: string) => {
        setSelectedPlan(plan);
    };
    

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <aside className="w-1/4 p-4 bg-gray-100">
          <Nav />
        </aside>
        
    <section className="w-3/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Choose Your Plan</h2>
        <div className="flex space-x-4">
            <div
            className={`w-1/2 p-4 rounded shadow cursor-pointer hover:shadow-lg transition-shadow ${selectedPlan === 'free' ? 'bg-blue-100' : 'bg-white'}`}
            onClick={() => handleSelectPlan('free')}
            >
            <h3 className="text-lg font-medium">Free Plan</h3>
            <p className="mb-2">Basic features for personal use</p>
            <ul className="list-disc list-inside mb-4">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Select</button>
            </div>
            <div
            className={`w-1/2 p-4 rounded shadow cursor-pointer hover:shadow-lg transition-shadow ${selectedPlan === 'paid' ? 'bg-blue-100' : 'bg-white'}`}
            onClick={() => handleSelectPlan('paid')}
            >
            <h3 className="text-lg font-medium">Paid Plan</h3>
            <p className="mb-2">Advanced features for professionals</p>
            <ul className="list-disc list-inside mb-4">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Select</button>
            </div>
        </div>
    </section>
      </div>
    </div>
  );
}
