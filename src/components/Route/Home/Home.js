import { Div, H2, Img, P } from "./Home.styled";
import Phonebook from "../../imag/phonebook.jpg";

const Home = () => {
  return (
    <div>
      <Div>
        <H2>Welcome to Phonebook! 👋</H2>
        <Img src={Phonebook} alt="Phonebook" width="264" height="260" />
      </Div>
      <P>© 2023 Developed by Hrythyn Artur</P>
    </div>
  );
};

export default Home;
