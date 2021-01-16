import React from 'react';
import styled from 'styled-components';
// import './app-header.css';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    :hover {
      color: ${(props) => (props.colored ? 'green' : 'red')};
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
    :hover {
      color: gold;
    }
  }
`;

//* Меняем div на a конструкцией as="a" */
const AppHeader = ({ liked, allPosts }) => {
  return (
    //* <Header as="a" colored> */
    <Header colored>
      <h1>Andrey Istomin</h1>
      <h2>
        <strong>{allPosts}</strong> записей, из них понравилось
        <strong> {liked}</strong>
      </h2>
    </Header>
  );
};

export default AppHeader;
