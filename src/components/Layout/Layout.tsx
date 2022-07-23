import logo from "../../logo.svg";
import "./Layout.css";

interface LayoutProps {
  heading: JSX.Element;
  text: JSX.Element;
  link: JSX.Element;
}

export const Layout = ({ heading, text, link }: LayoutProps) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="header-title">
          {heading}
        </h3>
        <p className="header-text">
          {text}
        </p>
        <>
          {link}
        </>
      </header>
    </div>
  );
};

export default Layout;
