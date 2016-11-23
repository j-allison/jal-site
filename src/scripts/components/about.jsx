import React from 'react';

import UnfoldingPhoto from './unfolding-photo.jsx';
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
      <Section name="about" className="aboutSection">
        <UnfoldingPhoto />
        <div className="aboutDescription">
          <p>{t('about.1')}</p>
          <p>{t('about.2')}</p>
          <p>{t('about.3')}</p>
        </div>
      </Section>
    );
  }
}

export default About;