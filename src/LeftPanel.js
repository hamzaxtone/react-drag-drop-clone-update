import React from 'react';
import DraggableItem from './DraggableItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faTable } from '@fortawesome/free-solid-svg-icons';

const ChairSVG = () => (
    <svg width="200" height="150" viewBox="0 0 200 150">
    <path d="M20 120 L20 20 L50 20 L50 120 Z" fill="#d28b53" />
    <path d="M150 120 L150 20 L180 20 L180 120 Z" fill="#d28b53" />
  
    <rect x="50" y="60" width="100" height="60" fill="#c0946e" />
  
    <path d="M50 60 L80 20 L130 60 Z" fill="#c0946e" />
  </svg>
  

  
);

const TableSVG = () => (
  <svg width="50" height="50" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 3H5a1 1 0 0 0-1 1v16h2V4h14V3zm-1 16H6V5h12v14z" />
  </svg>
);

const LeftPanel = ({ onDragStart }) => {
  return (
    <div style={{ flex: 1, borderRight: '1px solid black', padding: '20px' }}>
      <h2>Left Panel</h2>
      <DraggableItem itemName="Chair" onDragStart={onDragStart}>
        <FontAwesomeIcon color='black' size='3x' icon={faChair} />
      </DraggableItem>
      <DraggableItem itemName="Table" onDragStart={onDragStart}>
        <FontAwesomeIcon color='black' size='3x' icon={faTable} />
      </DraggableItem>
    </div>
  );
};

export default LeftPanel;