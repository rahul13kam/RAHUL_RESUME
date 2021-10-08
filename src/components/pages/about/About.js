import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
          Aspiring to work in a good company in a good job profile where I can learn and have a good career progression
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> GONDIA
              </p>
              <p>
                <strong>Email:</strong> Rahulwardha07@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 8830575838
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - English
              </p>
              <p>
                <strong>Second Language</strong> - Hindi
              </p>
              <p>
                <strong>Third Language</strong> - Marathi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
