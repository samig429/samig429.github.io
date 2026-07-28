import { useEffect } from "react";


function Home() {

    useEffect(() => {
        document.title =
            "Sami Ghimire's Shy Guinea Pig | ITIS3135 | Home";
    }, []);


    return (
        <main>

            <section>

                <h2>Home</h2>

                <p>
                    Welcome to my ITIS3135 course website! Here you will 
                    find links to all my assignments for the course!
                </p>

                <img
                    src="/images/Sami_Studying.jpg"
                    alt="Picture of me"
                />

            </section>

        </main>
    );
}


export default Home;