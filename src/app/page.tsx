import WhatIDid from "./sections/what-i-did";
import WhatIDo from "./sections/what-i-do";
import WhatILearned from "./sections/what-i-learned";
import WhatIBuilt from "./sections/what-i-built";
import Landing from "./sections/landing";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <Landing />
      <WhatIDo />
      <WhatILearned />
      <WhatIDid />
      <WhatIBuilt />
      <Contact />
    </div>
  );
}
