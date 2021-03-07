import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import { MainContect } from "../context/MainContext";
import MainForm from "./MainForm";
function Home() {
  const { setClicked } = useContext(MainContect);
  const handleClick = (e) => {
    setClicked(e.target.value);
  };
  return (
    // <ButtonGroup onClick={handleClick}>
    //   <Button variant="primary" value="Button 1">
    //     Button 1
    //   </Button>
    //   <Button variant="primary" value="Button 2">
    //     Button 2
    //   </Button>
    //   <Button variant="primary" value="Button 3">
    //     Button 3
    //   </Button>
    // </ButtonGroup>
    <MainForm />
  );
}

export default Home;
