import React, { useState } from 'react';
import LeftPanel from './LeftPanel';
import Canvas from './Canvas';
import RightPanel from './RightPanel';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Chair', x: 50, y: 50 },
    { id: 2, name: 'Table', x: 150, y: 150 }
  ]);

  // Counter for generating unique IDs
  const [idCounter, setIdCounter] = useState(3); // Start from 3 if you already have items with IDs 1 and 2

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text', item.name);
  };

  const handleDrop = (newItem) => {
    // Assign a unique ID to the dropped item
    newItem.id = idCounter;
    setIdCounter(idCounter + 1); // Increment the counter for the next item

    setItems([...items, newItem]);
  };

  const handleRemoveItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  // Function to update items
  const updateItems = (updatedItems) => {
    setItems(updatedItems);
  };

  // Function to handle exporting JSON template
  const handleExport = () => {
    const json = JSON.stringify(items, null, 2);
    downloadJson(json, 'template.json');
  };

  // Function to handle importing JSON template
  const handleImport = (content,event) => {

    if (content) {
      try {
        const importedItems = JSON.parse(content);
        setItems(importedItems);
      } catch (error) {
        console.error("Error parsing imported JSON:", error);
      }
    } else {
      console.error("No content provided for import.");
    }
    
  };
  

  // Function to download JSON file
  const downloadJson = (content, fileName) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };


  // Function to save canvas as PNG
  const handleSaveAsPNG = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800; // Adjust canvas width as needed
    canvas.height = 600; // Adjust canvas height as needed
    const context = canvas.getContext('2d');

    // Draw each item onto the canvas
    items.forEach((item) => {
      context.fillStyle = item.color || '#000000';
      context.fillRect(item.x, item.y, 50, 50); // Example size, adjust as needed
    });

    // Convert canvas to PNG data URL
    const dataURL = canvas.toDataURL('image/png');

    // Create a download link for the PNG image
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas_preview.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftPanel onDragStart={handleDragStart} />
      {/* Pass updateItems function to Canvas */}
      <Canvas items={items} onDrop={handleDrop} onRemoveItem={handleRemoveItem} onUpdateItems={updateItems} />
      {/* <RightPanel items={items} onExport={handleExport} onImport={handleImport} /> */}
      <RightPanel items={items} onExport={handleExport} onImport={handleImport} onSaveAsPNG={handleSaveAsPNG} />

    </div>
  );
};

export default App;
