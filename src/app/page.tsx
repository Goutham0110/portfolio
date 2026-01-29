import WhatIDid from "./sections/what-i-did";
import WhatIDo from "./sections/what-i-do";
import WhatILearned from "./sections/what-i-learned";
import Landing from "./sections/landing";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Landing />
      <WhatIDo />
      <WhatILearned />
      <WhatIDid />
    </div>
  );
}
