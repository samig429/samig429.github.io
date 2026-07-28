import { useEffect } from "react";


function About(){

    useEffect(() => {
        document.title =
        "Sami Ghimire's Shy Guinea Pig | ITIS3135 | About";
    }, []);
    
    return (

        <main>

            <h2>About</h2>


            <img
                src="/images/Sami_Studying.jpg"
                alt="Sami studying at Atkins Library"
                width="300"
            />


            <p>
                This page is built in part to demonstrate work for the 
                Charlotte class ITIS3135 - Front-End Web Application 
                Development for those sections run by Mr. von Briesen.
            </p>


            <p>
                This course seeks to provide students relevant experience 
                in front-end web application development by building multiple 
                websites using a variety of tools and techniques.
            </p>


            <h3>Tools Used in This Course</h3>

            <ul>
                <li>VS Code</li>
                <li>Emmet within VS Code</li>
                <li>SFTP via Filezilla</li>
                <li>Git via GitHub Desktop and GitHub.com</li>
                <li>Various Browser tools</li>
                <li>The Accumulus Validator</li>
            </ul>


            <h3>Websites Created in This Course</h3>

            <ul>
                <li>A personal home portfolio</li>
                <li>This course site</li>
                <li>A design firm site</li>
                <li>A Crappy page</li>
                <li>A whimsical product company</li>
                <li>A client project website</li>
            </ul>


        </main>

    );

}


export default About;