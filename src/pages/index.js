import React from "react"
import Layout from "../components/Layout"
import Resume from "../assets/resume.jpg"
import Esports from "../assets/rhysmaddrenesports.jpg"
import Treehouse from "../assets/treehouse.jpg"

const Index = () => {
  return (
    <Layout>
      <section>
        <h1 id="about" className="subheading">
          About me
        </h1>
        <p>
          I'm an (in progress) frontend developer based in Hartlepool, UK. I
          studied biological sciences at Lancaster university, graduating with a
          2:1.
        </p>
        <p>
          Computers have always been a big part of my life. Building PCs, video
          editing, competitive esports and studying (of course). The next
          logical step was learning to code.
        </p>
        <a
          href="https://www.yorkpress.co.uk/news/15686616.first-of-its-kind-gaming-comp-held-at-york-uni/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Esports}
            alt="Rhys Maddren at esports event"
            className="linkimage esportimage"
          />
        </a>
      </section>

      <section>
        <h2 id="experience" className="subheading">
          My experience
        </h2>
        <p>
          I started learning HTML, CSS, and Javascript in June 2020 as a hobby.
          I'm now effectively learning full time, working on projects and
          preparing to apply for junior developer positions.
        </p>
        <p>
          Though I'd learnt some basic coding at college, I started again from
          scratch. Beginning with the frontend development course on Treehouse,
          reading, and completing practice exercises. I'm now working on
          personal projects and learning React. For a more detailed account, you
          can access my CV and Treehouse profile below.
        </p>
        <ul className="imgcontainer">
          <li className="aboutimg">
            <a
              href="https://teamtreehouse.com/rhysmaddren"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Treehouse} alt="Treehouse logo" class="linkimage" />
            </a>
          </li>
          <li className="aboutimg">
            <a href="#" target="_blank" rel="noreferrer">
              <img src={Resume} alt="Rhys Maddren's CV" className="linkimage" />
            </a>
          </li>
        </ul>
      </section>
      <div className="largecontainer">
        <section className="largeitem">
          <h3 id="projects" className="subheading">
            My projects
          </h3>
          <p class="info">Work in progress</p>
          <div className="imgcontainer">
            <a
              href="https://github.com/rhysmaddren?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-3x fa-wrench"></i>
            </a>
          </div>
          <p className="info">
            Click the wrench to see my projects: Including a conversion of this
            site to React and "The west coast road trip".
          </p>
        </section>

        <section className="largeitem">
          <h4 id="contact" class="subheading">
            Get in touch
          </h4>
          <h5 className="minisubheading">Telephone</h5>
          <p className="info"></p>
          <h6 className="minisubheading">Email</h6>
          <p className="info">rhysmaddren@hotmail.co.uk</p>
          <ul className="imgcontainer">
            <li>
              <a
                href="https://www.linkedin.com/in/rhys-maddren-133a7b151/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-3x fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="mailto:rhysmaddren@hotmail.co.uk">
                <i className="fas fa-3x fa-envelope-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rhysmaddren"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-3x fa-github-square"></i>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default Index
