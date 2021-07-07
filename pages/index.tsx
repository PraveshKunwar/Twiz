import { NextPage } from "next";
import Header from "../components/Landing/Header";

const Index: NextPage = (): JSX.Element => {
  return (
    <div className="twiz">
      <Header>Hello World!</Header>
    </div>
  );
};

export default Index;
