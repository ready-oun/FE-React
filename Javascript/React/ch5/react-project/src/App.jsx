import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Body from "./components/Body";

/*function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}*/

/*
function App() {
  const buttonProps = { text: "etc.", color: "red", a: 1, b: 2, c: 3 };
  return (
    <>
      <Button text={"e-Mail"} color={"red"} />
      <Button text={"Cafe"} />
      <Button text={"Blog"} color={"blue"} />
      <Button text={"etc."} color={"green"} a={1} b={2} c={3} />
    </>
  );
}
*/

// p.208

function ChildComp() {
  return <div>child component</div>;
}

function App() {
  // const name = "이정환";
  // return (
  //   <div className="App">
  //     <Header />
  //     <Body name={name} location={"부천시"} />
  //     <Footer />
  //   </div>
  // );

  // const BodyProps = {
  //   name: "이정환",
  //   location: "부천시",
  // };

  // return (
  //   <div className="App">
  //     <Header />
  //     <Body {...BodyProps} />
  //     <Footer />
  //   </div>
  // );

  // const BodyProps = {
  //   name: "이정환",
  //   location: "부천시",
  //   favorList: ["파스타", "빵", "떡볶이"],
  // };

  // return (
  //   <div className="App">
  //     <Header />
  //     <Body {...BodyProps} />
  //     <Footer />
  //   </div>
  // );

  return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
