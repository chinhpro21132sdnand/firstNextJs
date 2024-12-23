"use client";
import React from "react";
import "@/assets/style/global.css";
interface MenuProps {
  isOpen: boolean;
}
const MenuData: React.FC<MenuProps> = ({ isOpen }) => {
  console.log(isOpen, "isOpen");
  if (!isOpen) {
    return null; // Return early if isOpen is false to avoid unnecessary render.  This can help improve performance.  In a real-world application, you might want to use a different approach to handle this.  For example, you could use a state management library like Redux or MobX to manage the isOpen state.  But for this simple example, it's fine to use conditional rendering.  Note: This example does not include any animations or transitions for the menu opening or closing.  For a more complex application, you might want to consider using CSS transitions or animations to make the menu more visually appealing.  For example, you could use CSS keyframes or a library like react-transition-group to handle the animation.  But for this simple example, it's fine to use a simple conditional rendering approach.  Note: This example does not include any handling for menu item hover or active states.  For a more complex application, you might want to consider using
  }
  return (
    <div className="menu w-[100%] h-[100vh] ">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
export default MenuData;
