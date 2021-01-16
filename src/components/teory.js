import React, { Component } from 'react';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26,
      nationality: 'uk',
    };

    //! Способ 1 start
    this.nextYear = () => {
      this.setState((state) => ({ years: ++state.years }));
    };
    //! Способ 1 END

    //! Способ 2 start
    // this.nextYear = this.nextYear.bind(this);
    //! Способ 2 END
  }

  //!ES9 синтаксис эксперементальный (можно constructor вообще не объявлять) START
  // state = {
  //   years: 26,
  //   nationality: 'uk',
  // };

  // nextYear = () => {
  //   this.setState((state) => ({ years: ++state.years }));
  // };
  //!ES9 синтаксис эксперементальный END

  //! Способ 2 start
  // nextYear() {
  //   console.log(1);
  //   this.setState((state) => ({ years: ++state.years }));
  // }
  //! Способ 2 END
  render() {
    const { name, surname, link } = this.props;
    const { years } = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h3>
          My name is {name}, surname - {surname}, years: {years}
        </h3>
        <a href={link}>My profile</a>
      </>
    );
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="google.com" />
      <WhoAmI name="Andrey" surname="Smith" link="google.com" />
      <WhoAmI name="Ivan" surname="Smith" link="google.com" />
    </>
  );
};

export { WhoAmI, All };
