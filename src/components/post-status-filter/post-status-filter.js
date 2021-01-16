import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './post-status-filter.css';

export default class PostStatusFiltr extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: 'all', label: 'Все' },
      { name: 'like', label: 'Понравилась' },
    ];
    this.state = {
      text: '',
    };
  }
  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterSelect } = this.props;
      const active = filter === name;
      const clazz = active ? 'btn-info' : 'btn-outline';
      return (
        <Button
          key={name}
          className={clazz}
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </Button>
      );
    });
    return (
      <ButtonGroup>
        {buttons}

        {/* <Button color="info">Все</Button> */}
        {/* <Button outline color="secondary"> Понравилось </Button> */}
      </ButtonGroup>
    );
  }
}
