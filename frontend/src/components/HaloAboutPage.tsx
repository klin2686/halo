import About from "./About";
import AboutGrid from "./AboutGrid";
import backgroundImage from "../assets/background.jpg";

interface HaloAboutPageProps {
  onSignIn: () => void;
}

const HaloAboutPage = ({ onSignIn }: HaloAboutPageProps) => {
  return (
    <div
      className="w-full overflow-x-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <About onSignIn={onSignIn} />
      <AboutGrid onSignIn={onSignIn}/>
    </div>
  );
};

export default HaloAboutPage;
