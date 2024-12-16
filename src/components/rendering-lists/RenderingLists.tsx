import React from "react";

export type ItemProps = {
  name: string;
  isPacked: boolean;
}

const items: ItemProps[] = [{name: 'Item 1', isPacked: true}, {name: 'Item 2', isPacked: false}, {name: 'Item 3', isPacked: true}]

function Item({ name, isPacked }) {
  const notPacked = '❌'
  const packedSymbol = '✅';

    return (
      <li className="item">
        {name} {isPacked ? packedSymbol: notPacked}
      </li>
    );
  }
  
  export function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }

  export function PackingListDynamic() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          {items.map((item, index) => (<Item key={index} isPacked={item.isPacked} name={item.name} />))}
        </ul>
      </section>
    );
  }

  export function RenderingLists() {
    return (
      <>
      <h1>Hadcoded list</h1>
        <PackingList />
      <h1>Dynamic list</h1>
      <PackingListDynamic />
      </>
    )
  }
  