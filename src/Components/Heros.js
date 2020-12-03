import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Heros(props) {
  return (
    <>
      {props.format === 'default' ? (
        <Default {...props} />
      ) : (
        'Please Insert Card Format'
      )}
    </>
  );
}

function Default(props) {
  return (
    <>
      <SkeletonTheme
        color="rgba(255, 255, 255, .1)"
        highlightColor="rgba(255, 255, 255, .05)"
      >
        <div className="inner-page-hero-area  fx-padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="inner-page-hero-content"
                  style={{
                    backgroundImage: 'url("/assets/img/event-page.jpg")',
                  }}
                >
                  <div className="ev-iiner">
                    <img
                      src={props.logo ? props.logo : '/assets/img/ev-logo.svg'}
                      alt=""
                    />
                    <h2>
                      {props.title ? props.title : <Skeleton width={500} />}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
}

export default Heros;
