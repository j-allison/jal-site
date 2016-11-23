import React from 'react';
import Cookies from 'cookies-js';
import cx from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';

const emojis = {
    fr: "🇫🇷",
    en: "🇺🇸"
}

class LangSelector extends React.Component {

  constructor(){
    super();
    this.state = {
        open: false,
        selectedLang: Cookies.get('lang') || 'fr' // GLOBALCONSTANT
    };
  }

  componentDidMount = () => {
  }

  handleChange = (lang, e) => {
    if("undefined" === typeof emojis[lang])
        return false;

    Cookies.set('lang', lang);
    this.setState({selectedLang: lang, open: false});
  }

  toggleDropdown = () => {
    this.setState({open: !this.state.open});
  }

  handleClickOutside = () => {
    this.setState({open: false});
  }

  render() {
    var self = this,
        langs = Object.keys(emojis).map(function(k, i){return <li onClick={self.handleChange.bind(this, k)} key={"flag" + i}>{emojis[k]}</li>;});

    return (
        <div className={cx('langSelector', {open: this.state.open})}>
            <button onClick={this.toggleDropdown}>
                <span>{emojis[this.state.selectedLang]}</span>
                <ul>{langs}</ul>
            </button>
        </div>
    );
  }
}

export default enhanceWithClickOutside(LangSelector);

