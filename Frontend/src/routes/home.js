import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const [auth, setAuth] = useState(false);
    const [name, setName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081')
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true);
                    setName(res.data.name);
                } else {
                    setAuth(false);
                }
            })
            .catch(err => console.log(err));
    }, []);

    let welcome;

    if (auth) {
        welcome = <h1>Welcome  {name}</h1>;
    } else {
        welcome = '';
    }


    return (
        <>

            <h1>This is Home</h1>
            {welcome}

            <div className="allcard">
                <img className="card" src="https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg" alt="A" ></img>
                <img className="card" src="https://cdn.pixabay.com/photo/2022/11/05/19/56/bachalpsee-7572681_1280.jpg" alt="A" ></img>
                <img className="card" src="https://cdn.pixabay.com/photo/2024/10/23/09/00/dorset-9141987_1280.jpg" alt="A" ></img>
                <img className="card" src="https://cdn.pixabay.com/photo/2021/08/01/17/31/path-6514885_1280.jpg" alt="A" ></img>

            </div>
        </>
    )
}

export default Home;