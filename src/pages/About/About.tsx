import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./About.css";

const About = () => {
  const heading = <>Learn more about us!</>;
  const text = (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum
      porro excepturi amet accusantium. Sapiente repellendus, id fuga delectus
      obcaecati aut ipsum quia aliquam nisi, vel et eligendi harum quo!
    </>
  );
  const link = (
    <Link className="App-link" to="/">
      Home
    </Link>
  );

  return <Layout heading={heading} text={text} link={link} />;
};

export default About;
