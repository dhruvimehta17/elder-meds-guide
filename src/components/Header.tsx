import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Heart, Phone, Search } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/medicines", label: "Medicine Guide" },
    { to: "/side-effects", label: "Side Effects" },
    { to: "/interactions", label: "Drug Interactions" },
    { to: "/resources", label: "Resources" },
    { to: "/emergency", label: "Emergency" },
  ];

  const NavItems = ({ mobile = false }) => (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `nav-link ${isActive ? "nav-link-active" : ""} ${
              mobile ? "block py-3 text-lg" : ""
            }`
          }
          onClick={() => mobile && setIsOpen(false)}
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">MedGuide</h1>
              <p className="text-xs text-muted-foreground">For Seniors</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavItems />
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-4 w-4" />
            </Button>
            
            <Button variant="outline" className="hidden sm:flex">
              <Phone className="mr-2 h-4 w-4" />
              Emergency
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavItems mobile />
                  <div className="pt-4 border-t">
                    <Button className="w-full btn-primary">
                      <Phone className="mr-2 h-4 w-4" />
                      Emergency Contact
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;