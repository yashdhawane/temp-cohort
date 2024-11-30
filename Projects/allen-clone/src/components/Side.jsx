import React, { useState } from 'react';
import { ChevronDownIcon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const NavigationMenu = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'courses', label: 'Courses' },
    { id: 'test-series', label: 'Test Series' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'results', label: 'Results' },
    { id: 'study-materials', label: 'Study Materials' },
    { id: 'about-us', label: 'About us' }
  ];

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <>

{/* <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      /> */}
    
      {/* <div
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      > */}
        
      
    <div className="w-96 bg-white min-h-screen flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="text-blue-900 font-bold text-2xl">ALLEN</div>
        <XMarkIcon className="w-6 h-6 cursor-pointer" />
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => (
          <div key={item.id} className="border-b">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-4 flex justify-between items-center text-gray-800 hover:bg-gray-50"
            >
              <span className="text-lg">{item.label}</span>
              <ChevronDownIcon
                className={`w-5 h-5 transform transition-transform ${
                  expandedItem === item.id ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        ))}
      </nav>

      <div className="mt-auto border-t">
        <div className="flex items-center justify-between p-4">
          <button className="text-blue-600 font-medium">Login</button>
          <div className="flex items-center text-blue-600">
            <PhoneIcon className="w-5 h-5 mr-2" />
            <span>Talk to us</span>
          </div>
        </div>
      </div>
    </div>
    
    
    </>
    
  );
};

export default NavigationMenu;