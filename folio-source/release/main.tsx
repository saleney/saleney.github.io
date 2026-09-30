import React from "react";
import { createRoot } from "react-dom/client";
import { Playground } from "../src/components/playground";
import "../src/styles.css";
createRoot(document.getElementById("root")!).render(<Playground />);
