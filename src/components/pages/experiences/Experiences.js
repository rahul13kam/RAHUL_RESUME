import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROJECT</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                {/* Jan
                <strong>2016</strong> - Mar
                <strong>2017</strong> */}
                <strong>PG-Diploma (CDAC)</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>E-Pariksha</strong>
                </h6>
                <p>
                Online Exam Portal project has been made very interactive keeping in mind its reusability and user friendliness
                The project will be developed using <strong>ReactJs</strong> and <strong>SpringBoot</strong> as a front end and <strong>MYSQL SERVER</strong> as back end
                An online examination system based on Web was designed, which adopted B/S mode, used the IDEA as the coding tool,
                combined with the MySQL database and related technology.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                {/* Jan
                <strong>2016</strong> - Mar
                <strong>2017</strong> */}
                <strong>Bachelor of Engineering</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Printing Proof Smart Voting Machine</strong>
                </h6>
                <p>
                The purpose of the project is to provide a secured and reliable environment to the customers is to electing the candidates.
                By using the RF identification technology ,Microcontroller and EPROM (24c64) as a database.
                RFID card to the scanner scanner is interfaced to the micro controller with the serial interfacing and microconttroller reads the data from the scanner.

                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
