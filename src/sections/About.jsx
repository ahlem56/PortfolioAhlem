import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('bouchahouaahlem@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/ahlem (1).png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Ahlem Bouchahoua</p>
              <p className="grid-subtext">
              Computer Engineering student specializing in Software Development and Artificial Intelligence. Experienced in full-stack web development, machine learning, and NLP, with a strong passion for building intelligent systems and innovative solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/frameworks.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                <strong>Languages:</strong> Python, Java, C, PHP, JavaScript, Pascal, C#<br />
                <strong>Frameworks:</strong> Angular, React, Laravel, Symfony, Spring Boot, .Net<br />
                <strong>Databases:</strong> Oracle, SQL/PLSQL, MySQL, PostgreSQL<br />
                <strong>Artificial Intelligence and Machine Learning:</strong> NLP, Scikit-learn, TensorFlow, PyTorch<br />
                <strong>Certifications: </strong> CCNA 1, Fundamentals of Deep Learning (NVIDIA), Scrum Fundamentals<br />

              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 36.8, lng: 10.1, text: 'Ariana, Tunisia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I'm very flexible with time zone communications</p>
              <p className="grid-subtext">I'm based in Ariana, Tunisia and open to remote work opportunities.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
  <div className="grid-container">
    <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

    <div>
      <p className="grid-headtext">My Internship Experience</p>
      <p className="grid-subtext">
                <strong>Summer 2025:</strong> Secured an engineering internship at MEDIANET to develop an intelligent PDF CV analysis tool using Spring Boot and Angular. The project involves automated key information extraction (skills, experience, education) and implementing semantic similarity matching with machine learning for job application ranking.
        <br/><br/>
                <strong>Summer 2024:</strong> Completed a 6-week internship at MEDIANET, developing a Q&A platform inspired by Stack Overflow. Built the frontend with React and backend with Laravel, enhancing my full-stack development skills in a professional team environment.
      </p>
    </div>
  </div>
</div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">bouchahouaahlem@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;