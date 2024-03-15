import React from 'react';

const Layers = ({ items }) => {
  return (
    <>
    <div id="settings" className="css-1up8n9n ">
  
    <div className="layers-container">
    <div className="css-1sr1lb8">
        <p className="css-14q1onm">Layers</p>
        <div className="css-hsza6h">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em">
            <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"></path>
          </svg>
        </div>
      </div>
      <ul className="layers-list p-0">
        {items.map((item) => (
        //   <li key={item.id}>{item.name}</li>
        <div role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-3" className="css-y42dwd">
            <div className="css-70qvj9">
              <div className="css-jt95m4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em">
                  <path d="M108 60a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm56 16a16 16 0 1 0-16-16 16 16 0 0 0 16 16Zm-72 36a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm72 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm-72 68a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm72 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16Z"></path>
                </svg>
              </div>
              <div className="css-a5urb8">
                <span>{item.name}</span>
              </div>
            </div>
            <div className="css-hcvu4z">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em">
                <path d="M144 128a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-84-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm136 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16Z"></path>
              </svg>
            </div>
          </div>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
};

export default Layers;