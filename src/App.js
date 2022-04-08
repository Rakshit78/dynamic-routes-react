import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./styles.css";
import { arr } from "./data";
import { useEffect, useState } from "react";
const Comp = ({ ...props }) => {
  const [art, setsrt] = useState([]);
  const name = useParams();
  function getdata() {
    const article = arr.filter((res) => {
      return res.name === name.name;
    });
    setsrt(article[0].article);
  }
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <h1>name:{name.name}</h1>
      <p>article:{art}</p>
      <button onClick={() => props.navigate(-1)}>back</button>
    </>
  );
};

const Comp1 = () => {
  return (
    <>
      {arr.map((res) => {
        return (
          <Link to={res.name} key={res.name}>
            <h1>{res.name}</h1>
          </Link>
        );
      })}
    </>
  );
};
export default function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Comp1 />} />
        <Route path="/:name" element={<Comp navigate={navigate} />} />
      </Routes>
    </div>
  );
}
