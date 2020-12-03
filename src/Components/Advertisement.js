import React from 'react';

function Advertisement(props) {
  return (
    <>
      {props.size === 970 ? (
        <div style={props.style}>
          <img
            src="/advertisement/ad-970x90.png"
            alt="ad"
            style={props.imgstyle}
          />
        </div>
      ) : props.size === 728 ? (
        <div style={props.style}>
          <img
            src="/advertisement/ad-728x90.png"
            alt="ad"
            style={props.imgstyle}
          />
        </div>
      ) : props.size === 32050 ? (
        <div style={props.style}>
          <img
            src="/advertisement/ad-320x50.png"
            alt="ad"
            style={props.imgstyle}
          />
        </div>
      ) : props.size === 320100 ? (
        <div style={props.style}>
          <img
            src="/advertisement/ad-320x100.png"
            alt="ad"
            style={props.imgstyle}
          />
        </div>
      ) : props.size === 46860 ? (
        <div style={props.style}>
          <img
            src="/advertisement/ad-468x60.png"
            alt="ad"
            style={props.imgstyle}
          />
        </div>
      ) : props.size === 72890 ? (
        <div style={props.style}>
          <img
            src="/advertisement/ad-728x90.png"
            alt="ad"
            style={props.imgstyle}
          />
        </div>
      ) : null}
    </>
  );
}

export default Advertisement;
