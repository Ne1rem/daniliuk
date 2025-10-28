declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.jsx" {
  import React from "react";
  const component: React.FC<any>;
  export default component;
}

declare module "*.js";
