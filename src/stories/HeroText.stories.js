import React from "react"
import HeroText from "../components/HeroText"
import "../style_sheets/HeroText.css"

export default{
   component: HeroText,
   title: "HeroText",
   excludeStories: /.*Data/
};

export const Default = () => <HeroText />;
