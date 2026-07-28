import { Link } from "react-router-dom";


function Header() {

    return (

        <header>

            <h1>
                Sami Ghimire's Shy Guinea Pig | ITIS3135
            </h1>

            <p>
                Computer Science Student at UNC Charlotte
            </p>


            <nav>

                <Link to="/">
                    Home
                </Link>
                {" | "}

                <Link to="/introduction">
                    Introduction
                </Link>
                {" | "}

                <Link to="/contract">
                    Contract
                </Link>
                {" | "}

                <Link to="/about">
                    About
                </Link>

            </nav>


            <p>
                <em>
                    "Whatever you are, be a good one."
                </em>
                {" — Abraham Lincoln"}
            </p>


        </header>

    );

}


export default Header;