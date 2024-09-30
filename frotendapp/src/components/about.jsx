import col from '../assets/pic1.JPG'
import '../assets/about.css';

const About = () => {
    return (
        <> 
            <div className="about-container">
                <div className="about-text">
                    <p>
                        Hello! My name is Alex Sibomana, and I am a backend developer with extensive experience in various technologies and frameworks.<br></br> <br></br>  Over the years, I have honed my skills in developing robust, scalable, and efficient backend systems.<br></br> <br></br>  I have a deep understanding of databases, server-side languages, and APIs.<br></br> <br></br> My passion for backend development stems from my desire to solve complex problems and build systems that can handle large volumes of data and traffic efficiently.<br></br> <br></br> 
                    </p>
                    <p>
                        Throughout my career, I have worked on numerous projects that have challenged me to push the boundaries of what is possible.<br></br> <br></br>  I have a keen eye for detail and am always looking for ways to optimize and improve the performance of the applications I work on.<br></br> <br></br>  My experience spans across various industries, and I have had the opportunity to collaborate with talented teams to deliver high-quality software solutions.
                    </p>
                    <p>
                        In addition to my technical skills, I am also a strong communicator and enjoy sharing my knowledge with others. I believe in the importance of continuous learning and staying up-to-date with the latest trends and advancements in technology. I am always eager to take on new challenges and am excited about the future of backend development.
                    </p>
                    <p>
                        Thank you for taking the time to learn more about me. I look forward to connecting with you and exploring potential opportunities to work together.
                    </p>
                </div>
                <div className="about-photo">
                    <img src={col} alt="My photo" />
                </div>
            </div>
        </>
    );
}

export default About;
