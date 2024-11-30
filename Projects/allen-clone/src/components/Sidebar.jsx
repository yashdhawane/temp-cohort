
import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

const nestedMenuItems = [
    { title: "Hero" },
    { title: "Features" },
    { title: "Testimonials" },
    { title: "Ecommerce" },
  ];
  
  const menuItems = [
    {
      title: "Courses",
      submenu: [
        {
          title: "JEE Programs",
          items: ["JEE Main", "JEE Advanced", "Foundation", "KVPY"],
        },
        {
          title: "Medical Programs",
          items: ["NEET-UG", "Pre-Medical", "AIIMS", "Foundation"],
        },
        {
          title: "Other Courses",
          items: ["Pre-Foundation", "Distance Learning", "Crash Courses"],
        },
      ],
    },
    {
      title: "Test Series",
      submenu: [
        {
          title: "Online Tests",
          items: ["Mock Tests", "Previous Year Papers", "Chapter Tests"],
        },
        {
          title: "Offline Tests",
          items: ["Center Tests", "Major Tests", "Minor Tests"],
        },
      ],
    },
    {
      title: "Study Materials",
      submenu: [
        {
          title: "Downloads",
          items: ["Notes", "Sample Papers", "E-Books", "Solutions"],
        },
        {
          title: "Resources",
          items: ["Video Lectures", "Study Guides", "FAQs", "References"],
        },
      ],
    },
    {
      title: "Results",
      submenu: [
        {
          title: "Examinations",
          items: ["JEE Results", "NEET Results", "KVPY Results"],
        },
        {
          title: "Success Stories",
          items: ["Toppers", "Testimonials", "Alumni"],
        },
      ],
    },
    {
      title: "About Us",
      submenu: [
        {
          title: "Our Story",
          items: ["History", "Mission", "Vision", "Values"],
        },
        {
          title: "Connect",
          items: ["Contact Us", "Locations", "Careers", "Press"],
        },
      ],
    },
  ];

  const SidebarMenuItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
  
    return (
      <div className="border-b border-blue-gray-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-3 text-gray-800 hover:bg-blue-gray-50/40 transition-colors"
        >
          <span className="font-medium">{item.title}</span>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
  
        <Collapse open={isOpen}>
          <div className="bg-blue-gray-50/20">
            {item.submenu.map((submenu, index) => (
              <div key={index} className="border-t border-blue-gray-50">
                <button
                  onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                  className="flex items-center justify-between w-full px-6 py-2 text-gray-700 hover:bg-blue-gray-50/40 transition-colors"
                >
                  <span className="font-medium text-sm">{submenu.title}</span>
                  {activeSubmenu === index ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </button>
  
                <Collapse open={activeSubmenu === index}>
                  <div className="bg-blue-gray-50/30">
                    {submenu.items.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-8 py-2 text-sm text-gray-600 hover:bg-blue-gray-50/40 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </Collapse>
              </div>
            ))}
          </div>
        </Collapse>
      </div>
    );
  };
  
export default function Sidebar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Typography variant="h6" className="font-bold text-blue-900">
            ALLEN
          </Typography>
          <IconButton variant="text" onClick={() => setIsOpen(false)}>
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          </IconButton>
        </div>

        <div className="py-2">
          {menuItems.map((item, index) => (
            <SidebarMenuItem key={index} item={item} />
          ))}
        </div>

        <div className="absolute bottom-0 w-full p-4 border-t bg-white">
          <Button
            variant="outlined"
            size="sm"
            fullWidth
            className="mb-2"
          >
            Login
          </Button>
        </div>
        </div>
        </>
    )
}
