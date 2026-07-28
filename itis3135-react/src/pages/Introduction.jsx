import { useEffect } from "react";


function Introduction(){

    useEffect(() => {

        document.title =
        "Sami Ghimire's Shy Guinea Pig | ITIS3135 | Introduction";

    }, []);


    return (

        <main>

            <h2>Introduction</h2>


            <h6 className="display-name">
                Samikshya "Sami" Ghimire | Shy Guinea Pig
            </h6>


            <figure>

                <img
                    src="/images/Sami_Studying.jpg"
                    alt="Sami studying at Atkins Library"
                    width="300"
                />

                <figcaption>
                    <em>Studying at Atkins Library</em>
                </figcaption>

            </figure>


            <ul>

                <li>
                    <strong>Name:</strong> 
                    Samikshya "Sami" Ghimire
                </li>


                <li>
                    <strong>Personal Background:</strong>
                    I'm 22 years old and of Nepali descent, but I was 
                    born in Georgia and moved to North Carolina when I 
                    was about nine years old. I enjoy gaming, traveling, 
                    and learning about new technologies.
                </li>


                <li>
                    <strong>Professional Background:</strong>
                    I've worked as a coding teacher for several schools 
                    and currently work as a substitute teacher at a 
                    charter school.
                </li>


                <li>
                    <strong>Academic Background:</strong>
                    I'm a senior Computer Science major at UNC Charlotte 
                    with a concentration in Artificial Intelligence, 
                    Gaming, and Robotics.
                </li>


                <li>
                    <strong>Background in this Subject:</strong>
                    I have limited experience with front-end web 
                    development, so I'm excited to build a stronger 
                    foundation in HTML, CSS, and JavaScript through this course.
                </li>


                <li>
                    <strong>Primary Work Computer:</strong>
                    2020 13-inch MacBook Air
                </li>


                <li>
                    <strong>Primary Work Location:</strong>
                    Childhood Home
                </li>


                <li>
                    <strong>Alternate Computer:</strong>
                    2016 Dell XPS 13
                </li>


                <li>
                    <strong>Funny/Interesting Item:</strong>
                    I once won a geography bee completely by accident.
                </li>


                <li>
                    <strong>I'd Also Like to Share:</strong>
                    I recently traveled to Iceland, and I hope to continue 
                    exploring new places around the world.
                </li>


                <li>

                    <strong>Favorite Quote:</strong>

                    <blockquote>
                        "It always seems impossible until it's done."
                        <br/>
                        <cite>~ Nelson Mandela</cite>
                    </blockquote>

                </li>


            </ul>


        </main>

    );

}


export default Introduction;