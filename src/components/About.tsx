import { YOE } from "../utils/DateTimeUtils";
import { ProjectCount } from "../utils/ProcessJson";
import { headingCss } from "../utils/tailwindVars";

const About: React.FC = () => {
  return (
    <div>
      <h2 className={`${headingCss}`}>About</h2>
      <div className="flex flex-row gap-5 mt-5">
        <div className="basis-2/3">
          <p>
          I'm a passionate weeb on a relentless quest (<a href="https://www.imdb.com/title/tt21209876/" className="text-sky-600">Solo Leveling</a> Vibes) to level up each day, constantly battling my lazy tendencies. I have an insatiable drive to write code that's both elegant and minimalistic. Exploring new programming languages and concepts and getting stressed while trying them is my all time job.
          </p>
        </div>
        <div className="box-border border-2 p-5 border-neutral-200 rounded-lg shadow-lg basis-1/3">
          <p>Primary Base : Trichy, TN, India</p>
          <p>Years of Experience : {YOE()}</p>
          <p>No of projects Completed : {ProjectCount()}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
