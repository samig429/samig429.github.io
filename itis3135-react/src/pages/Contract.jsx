import { useEffect } from "react";


function Contract(){

    useEffect(() => {

        document.title =
        "Sami Ghimire's Shy Guinea Pig | ITIS3135 | Course Contract";

    }, []);


    return (

        <main>

            <h2>Course Contract</h2>

            <img
                src="/images/contract.jpg"
                alt="Contract image"
            />


            <p>
                I, <strong>Samikshya "Sami" Ghimire</strong>, agree to abide 
                by the terms of the course contract in my 
                <strong> Fall 2026, ITIS 3135, Front-End Web Application 
                Development</strong> with my instructor, 
                <strong> Professor D.I. von Briesen</strong>.
            </p>


            <p>
                I understand that all work that I do on publicly available 
                online tools will be available to the world and will not put 
                information there that is inappropriate for schoolwork or that 
                I wish to keep private.
            </p>


            <p>
                As such, failure to turn in assignments may show as absences. 
                I also understand that I will only use online resources to learn 
                and will not copy and paste code except where I have properly 
                given credit.
            </p>


            <p>
                <strong>Signed:</strong>
                <br />
                Samikshya Ghimire
                <br />
                July 23, 2026
            </p>

        </main>


    );

}


export default Contract;