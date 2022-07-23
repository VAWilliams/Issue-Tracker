import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Home.css";

export const Home = () => {
  const heading = <>Ready to accelerate your team?</>;
  const text = (
    <>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
      laudantium voluptatibus minima repellat, officia ad suscipit doloremque
      libero quia error iure molestiae commodi dicta vitae nesciunt, amet
      temporibus, eligendi quidem?
    </>
  );
  const link = (
    <Link className="App-link" to="/about">
      About
    </Link>
  );

  return <Layout heading={heading} text={text} link={link} />;
};

export default Home;
