import { createContext } from "react";

const PageContext = createContext<[Pages, (newPage: Pages) => void]>([
  "home",
  (newPage: Pages) => {},
]);

export default PageContext;
