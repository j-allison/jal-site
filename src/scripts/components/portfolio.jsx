import React from 'react';

import Section from './section.jsx';

class Portfolio extends React.Component {

  constructor(){
    super();
    this.state = {
    };
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <Section name="portfolio">
          <p>
            {"« Hack and code, break and build. »"}<br />
            {"Après quelques années palpitantes à Lyon, Chennai & Paris comme Dévelopeur et Consultant Social Media, je suis aujourd'hui à votre disposition en Freelance. À la recherche de nouvelles aventures dans des environnements pleins de challenges !"}<br />
            {"Oh, and as a native English speaker, I used to translate CommitStrip on a daily basis when I worked at KRDS. Cool, huh?"}
          </p>
      </Section>
    );
  }
}

export default Portfolio;