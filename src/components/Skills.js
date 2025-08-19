import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Showcasing my technical proficiencies including programming languages, web and mobile development frameworks, AI/ML technologies like LLMs, NLP, and RAG, databases, and tools.</p>
              <style>{`
                .skill-slider .item img {
                  width: 100px;
                  height: 100px;
                  object-fit: contain;
                  margin: 0 auto;
                  display: block;
                }
                .skill-slider .item {
                  text-align: center;
                  padding: 10px;
                }
                .skill-slider .item h5 {
                  margin-top: 10px;
                }
              `}</style>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="React.js" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="Angular" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="Node.js" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/php/php-icon.svg" alt="PHP" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/android/android-icon.svg" alt="Android" />
                  <h5>Android</h5>
                </div>
                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="Flutter" />
                  <h5>Flutter</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" alt="Pandas" />
                  <h5>Pandas</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" alt="NumPy" />
                  <h5>NumPy</h5>
                </div>
                <div className="item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-learn" />
                  <h5>Scikit-learn</h5>
                </div>
                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="TensorFlow" />
                  <h5>TensorFlow</h5>
                </div>
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/512/16027/16027312.png" alt="LLMs" />
                  <h5>LLMs</h5>
                </div>
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/512/6062/6062325.png" alt="NLP" />
                  <h5>NLP</h5>
                </div>
                <div className="item">
                  <img src="https://cdn-icons-png.flaticon.com/512/12965/12965148.png" alt="RAG" />
                  <h5>RAG</h5>
                </div>
                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="PostgreSQL" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="Docker" />
                  <h5>Docker</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}