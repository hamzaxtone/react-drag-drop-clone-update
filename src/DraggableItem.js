import React from 'react';

const DraggableItem = ({ itemName, onDragStart, children }) => {
  const handleDragStart = (e) => {
    console.log(itemName);
    e.dataTransfer.setData('text', itemName);
    onDragStart(e, { name: itemName });
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{ marginBottom: '10px', cursor: 'move' }} // Add cursor: 'move' for better UX
    >
      {children}
    </div>
  );
};

export default DraggableItem;