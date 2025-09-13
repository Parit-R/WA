import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
function Home() {
        const [auth, setAuth] = useState(false);

    return (
        <>
            <h1>This is Home</h1>

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