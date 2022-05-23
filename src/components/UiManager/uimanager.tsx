import React from 'react';
import './styles.css';

export function UIManager(): React.ReactElement {
  return (
    <div id="uimanager">
      <div className="bottomBar">
        <button type="button" className="barButton" onClick={() => console.log('BUILD BASE')}>
          Base
        </button>
        <button type="button" className="barButton" onClick={() => console.log('BUILD BASE')}>
          Barracks
        </button>
      </div>
    </div>
  );
}
