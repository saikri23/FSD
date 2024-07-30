import { LangConst } from "../utils/LangConst";

const About = ({ lang }) => {
  const data = LangConst[lang];
  return (
    <div>
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default About;
