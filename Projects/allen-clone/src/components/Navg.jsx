import React, { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

//on the site

// Menu items data structure for mobile sidebar
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

// Desktop NavListMenu component
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setOpenNestedMenu] = React.useState(false);

  const nestedMenuItems = [
    { title: "Hero" },
    { title: "Features" },
    { title: "Testimonials" },
    { title: "Ecommerce" },
  ];

  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom" allowHover={true}>
      <MenuHandler>
        <Typography as="div" variant="small" className="font-medium">
          <ListItem className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900">
            Blocks
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
            />
          </ListItem>
        </Typography>
      </MenuHandler>
      <MenuList className="rounded-xl">
        <Menu placement="right-start" allowHover offset={15} open={openNestedMenu} handler={setOpenNestedMenu}>
          <MenuHandler className="flex items-center justify-between">
            <MenuItem>
              Figma
              <ChevronUpIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${openNestedMenu ? "rotate-90" : ""}`}
              />
            </MenuItem>
          </MenuHandler>
          <MenuList className="rounded-xl">{renderItems}</MenuList>
        </Menu>
        <MenuItem>React</MenuItem>
        <MenuItem>TailwindCSS</MenuItem>
      </MenuList>
    </Menu>
  );
}

// Desktop NavList component
function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Pages</ListItem>
      </Typography>
      <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Account</ListItem>
      </Typography>
      <NavListMenu />
      <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Docs</ListItem>
      </Typography>
    </List>
  );
}

// Mobile SidebarMenuItem component
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

// Main Navigation Component
export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setIsSidebarOpen(false));
  }, []);

  return (
    <>
      <Navbar className="mx-auto w-full px-4 py-4 shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" variant="h6" className="mr-4 cursor-pointer py-1.5 lg:ml-2">
            <img src="/allenlogo1.svg" alt="Logo" width={100}/>
          </Typography>
          
          <div className="hidden lg:block">
            <NavList />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex gap-2">
              <Button size="sm" className="text-white" style={{ backgroundColor: '#233A6C' }}>
                Talk to us
              </Button>
              <Button variant="outlined" size="sm">
                Login
              </Button>
            </div>
            <IconButton variant="text" className="lg:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            </IconButton>
          </div>
        </div>
      </Navbar>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Typography variant="h6" className="font-bold text-blue-900">
            ALLEN
          </Typography>
          <IconButton variant="text" onClick={() => setIsSidebarOpen(false)}>
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
  );
}