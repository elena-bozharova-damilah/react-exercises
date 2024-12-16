import React from 'react';
import { getImageUrl } from '../../../utils/image-utils.js';
import Panel from './Panel.tsx';
import "./styles.css";

let currentPerson;

function Profile({ person }) {
  currentPerson = person;
  return (
    <Panel>
      <Header />
      <Avatar />
    </Panel>
  )
}

function Header() {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}

export default function Exercise1() {
    return (
      <>
      <h1> Try clicking collapse on one of the authors. Notice now the two authors have the same name</h1>
      <h2> Try to find a soluton</h2>
      <h3>Tip: We need to use the useState hook and make the component pure</h3>
        <Profile person={{
          imageId: 'lrWQx8l',
          name: 'Subrahmanyan Chandrasekhar',
        }} />
        <Profile person={{
          imageId: 'MK3eW3A',
          name: 'Creola Katherine Johnson',
        }} />
      </>
    )
  }
  