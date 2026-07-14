import WhatIDid from "./sections/what-i-did";
import WhatIDo from "./sections/what-i-do";
import WhatILearned from "./sections/what-i-learned";
import WhatIBuilt from "./sections/what-i-built";
import WhatElse from "./sections/what-else";
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
      <WhatElse />
      <Contact />
    </div>
  );
}
