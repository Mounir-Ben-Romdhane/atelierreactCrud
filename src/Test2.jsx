import React, { useEffect, useState } from 'react'
// or less ideally
import { Button } from 'react-bootstrap';

function Test2(props) {

  const [name, setName] = useState("");
  console.log("initial name",name);
  useEffect(() => {
  setName("Derouiche");
    return () => {
      console.log("aeofaoe^pgjaopge");
    }
  }, [name]); // this empty dependency array means to  run only once (componentDidMount in classes)
  console.log("after setting state in render: ", name);
  const click = () => {
    setName("Aymen")
  }
  return (
    <>
    <div>{props.name} is a test function !</div>
    <Button onClick={() => click()}>Click me! </Button>
    </>
  )
}

export default Test2