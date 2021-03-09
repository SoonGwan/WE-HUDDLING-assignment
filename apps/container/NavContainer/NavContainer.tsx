import React, { useState } from 'react';
import Nav from '../../components/Nav';

const NavContainer = () => {
  const [selectedItem, setSelectedItem] = useState('popular');

  const selectItem = (itemName: string) => {
    setSelectedItem(itemName);
  };
  return <Nav selectItem={selectItem} selectedItem={selectedItem} />;
};

export default NavContainer;
