import React from 'react';

import Section from './section.jsx';

class About extends React.Component {

  constructor(){
    super();
    this.state = {
    };
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <Section name="about">
        <p>{"« Hack and code, break and build. »"}</p>
        <p>{"Après quelques années palpitantes à Lyon, Chennai & Paris comme Dévelopeur et Consultant Social Media, je suis aujourd'hui à votre disposition en Freelance. À la recherche de nouvelles aventures dans des environnements pleins de challenges !"}</p>
        <p>{"Oh, and as a native English speaker, I used to translate CommitStrip on a daily basis when I worked at KRDS. Cool, huh?"}</p>
      </Section>
    );
  }
}

export default About;