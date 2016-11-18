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
        <p>{t('about.1')}</p>
        <p>{t('about.2')}</p>
        <p>{t('about.3')}</p>
      </Section>
    );
  }
}

export default About;