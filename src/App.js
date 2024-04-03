import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import HeroSection from "./pages/HeroSection";
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function App() {
  return (
    <>
      <div>
        <HeroSection />
      </div>
    </>
  );
}
