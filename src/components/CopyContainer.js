import React from 'react';
import copy from '../constants/copy';

const CopyContainer = (props) => (
  <div className="copy" id="foo" onScroll={props.handleCopyScroll}>
    <h1 className={`copy-text${!props.selectedCopy ? '-show' : '-hide'}`}>
      {copy.one}
    </h1>
    <h1 className={`copy-text${!props.selectedCopy ? '-hide' : '-show'}`} >
      {copy.two}
    </h1>
    <div className="copy-buttons">
      <button className="button" onClick={props.handleCopyOne} disabled={!props.selectedCopy}></button>
      <button className="button" onClick={props.handleCopyTwo} disabled={props.selectedCopy}></button>
    </div>
  </div>
);

export default CopyContainer;

/* <h1 className={`copy-text${props.show}`}>
      {props.selectedCopy === 'one' ? copy.one : copy.two}
    </h1> */