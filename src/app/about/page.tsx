import History from "./components/history";

import Culture from "./components/culture";
import Teamabout from "../teams/components/teamabout";

export default async function About() {
  return (
    <>
      <div className="mt-40 mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <History />
      </div>
      <div className="mt-20 mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <Teamabout />
      </div>
      <div className="mt-20 mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <Culture />
      </div>
    </>
  );
}
