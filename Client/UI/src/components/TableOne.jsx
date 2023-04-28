import React from 'react'
import { Table, Button } from '@mantine/core';

const TableOne = () => {

  const elements = [
    { position: 6, mass: 230000, symbol: 'Temeke', name: 'Marvelous Medicines' },
    { position: 7, mass: 120000, symbol: 'Natron', name: 'Panacea Prescriptions' },
    { position: 39, mass: 6070000, symbol: 'Yombo dovya', name: 'Hale & Health Pharmacy' },
    { position: 56, mass: 5870000, symbol: 'Tabata', name: 'Ailments & Antidotes' },
    { position: 58, mass: 3270000, symbol: 'Central', name: 'QuickUp Prescriptions' },
    { position: 6, mass: 230000, symbol: 'Temeke', name: 'Marvelous Medicines' },
    { position: 7, mass: 120000, symbol: 'Natron', name: 'Panacea Prescriptions' },
    { position: 39, mass: 6070000, symbol: 'Yombo dovya', name: 'Hale & Health Pharmacy' },
    { position: 56, mass: 5870000, symbol: 'Tabata', name: 'Ailments & Antidotes' },
    { position: 58, mass: 3270000, symbol: 'Central', name: 'QuickUp Prescriptions' },
    { position: 6, mass: 230000, symbol: 'Temeke', name: 'Marvelous Medicines' },
    { position: 7, mass: 120000, symbol: 'Natron', name: 'Panacea Prescriptions' },
    { position: 39, mass: 6070000, symbol: 'Yombo dovya', name: 'Hale & Health Pharmacy' },
    { position: 56, mass: 5870000, symbol: 'Tabata', name: 'Ailments & Antidotes' },
    { position: 58, mass: 3270000, symbol: 'Central', name: 'QuickUp Prescriptions' },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.position}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
      <td><Button variant="outline" color="green">Accept</Button></td>
      <td><Button variant="outline" color="red">Decline</Button></td>
    </tr>
  ));

  return (
    <Table horizontalSpacing="md" verticalSpacing="xs" fontSize="md">
      <thead>
        <tr>
          <th>Center name</th>
          <th>Quantity</th>
          <th>Location</th>
          <th>Price</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}

export default TableOne