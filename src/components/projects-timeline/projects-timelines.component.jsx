import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Toggltrack from "../../assets/img/projects/Toggltrack.png";
import JioMart from "../../assets/img/projects/JioMart.png";
import Pharmeasy from "../../assets/img/projects/Pharmeasy.png";
import Overstock from "../../assets/img/projects/Overstock.png";
import "./projects-timelines.style.css";

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: TogglTrack */}

          <ImageEvent
            date="October/2022"
            className="text-center"
            text="Toggl Track:cloned"
            src={Toggltrack}
            alt="toggltrack"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Toggl Track (formerly
                        Toggl) is a time tracking software operated by Toggl OÜ
                        that offers online time tracking and reporting services.
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            React | React-Redux | Chakraui | Nodejs | Express |
                            Mongodb{" "}
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://toggltrack521.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                {
                  <UrlButton
                    href="https://github.com/Rahul850kr/TogglTrack.git"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                }
              </div>
            </div>
          </ImageEvent>

          {/* Project: JioMart */}

          <ImageEvent
            date="August/2022"
            className="text-center"
            text="JioMart:cloned"
            src={JioMart}
            alt="jiomart"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> JioMart is a multicategory
                        online shopping platform, that currently offers a wide
                        range of Groceries and Daily wear Fashion, to start
                        with.
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            React | React-Redux | Chakraui | MaterialUi |
                            JSON-Server | Redux-thunk{" "}
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://jiomart-prototype.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                {
                  <UrlButton
                    href="https://github.com/Shivamyadav07/prickly-partner-2503"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                }
              </div>
            </div>
          </ImageEvent>

          {/* Project: Pharmeasy*/}
          <ImageEvent
            date="May/2022"
            className="text-center"
            text=" Pharmeasy : cloned"
            src={Pharmeasy}
            alt="pharma"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> PharmEasy is one of
                        India's most trusted online pharmacy & medical stores
                        offering pharmaceutical and healthcare products.
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>HTML|CSS|JAVASCRIPT|FONT AWESOME|BOOTSTRAP</li>
                          {/* <li>Login with OTP.</li> */}
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://soft-dusk-4d35d1.netlify.app"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/singhankita29/Pharmesay-clone.git"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Overstock */}

          <ImageEvent
            date="March/2022"
            className="text-center"
            text="Overstock:cloned"
            src={Overstock}
            alt="jiomart"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Overstock.com,is an
                        American internet retailer selling primarily furniture
                        company.
                        <hr />
                        <strong>Tecnology used:</strong>
                        <ul className="list-styles pt-1">
                          <li>HTML | CSS | Javascript </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://profound-praline-6eee04.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                {
                  <UrlButton
                    href="https://github.com/singhankita29/Over_Stock_project.git"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                }
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeline;
