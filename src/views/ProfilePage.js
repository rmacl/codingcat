import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ProfileNavbar from "components/Navbars/ProfileNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import ProfileFooter from "components/Footers/ProfileFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ProfileNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/coding_cat.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Seoyeong Yun <br />
              </h4>
              <h6 className="description">Software Engineer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <p>Hello! I'm Seoyeong, enthusiastic Front-end Engineer cares about 
                 <span className="highlight-description"> scalability, performance and clean code!!   </span>
              I'm based in Seattle area. Please feel free to contact me if you are interested in my work <a
                  href="catasy@gmail.com"
                  target="_blank"
                >
                  catasy@gmail.com
                </a></p>
              <br />
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Skills
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Tutorials
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Libraries
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            
            <TabPane className="text-center" tabId="1" id="profile">
              <h3 className="text-muted"></h3>

                <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="1" md="4" xs="4">
                          
                        </Col>
                        <Col className="ml-auto mr-auto" lg="10" md="4" xs="4">
                          <h6>
                          Programming Language <br />
                          </h6>
                          <label class="label label-primary mr-2">JavaScript</label>
                          <label class="label label-primary mr-2">Java</label>
                          <label class="label label-primary mr-2">PHP</label>
                         
                        </Col>
                        <Col className="ml-auto mr-auto" lg="1" md="4" xs="4">
                        
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="1" md="4" xs="4">
                          
                        </Col>
                        <Col className="ml-auto mr-auto" lg="10" md="4" xs="4">
                          <h6>
                          Tools & Technologies <br />
                          </h6>
                          <label class="label label-info mr-1">React</label>
                          <label class="label label-info mr-1">React Native</label>
                          <label class="label label-info mr-1">Express</label>
                          <label class="label label-info mr-1">Spring</label>
                          <label class="label label-info mr-1">Laravel</label>
                          <label class="label label-success mr-1">Redis</label>
                          <label class="label label-success mr-1">MongoDB</label>
                          <label class="label label-success mr-1">MySQL</label>
                          <label class="label label-success mr-1">PostgreSQL</label>
                          <label class="label label-warning mr-1">aws</label>
                          <label class="label label-warning mr-1">Apollo</label>
                          <label class="label label-warning mr-1">NodeJS</label>
                          <label class="label label-warning mr-1">TypeScript</label>
                         
                        </Col>
                        <Col className="ml-auto mr-auto" lg="1" md="4" xs="4">
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="1" md="4" xs="4">
                          
                        </Col>
                        <Col className="ml-auto mr-auto" lg="10" md="4" xs="4">
                          <h6>
                          Language <br />
                          </h6>
                          <label class="label label-default mr-2">Korean</label>
                          <label class="label label-default mr-2">Japanese</label>
                          <label class="label label-default mr-2">Chinese</label>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="1" md="4" xs="4">
                        
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
                </Row>
            </TabPane>

            <TabPane tabId="2" id="tutorial">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                    
                          <img
                            alt="..."
                            className="img-thumbnail img-no-padding img-responsive"
                            src={require("assets/img/aws_sociallogin_tutorial.png")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="8" md="4" xs="4">
                          <a
                           href="https://github.com/rmacl/amplify-sociallogin-tutorial"
                           target="_blank" >
                          <h6>
                            Implement Social Login in react native app <br />
                            <small>Let's learn how to implement third-party authentication with Cognito Federated Identities </small>
                          </h6>
                          </a>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-thumbnail img-no-padding img-responsive"
                            src={require("assets/img/apollo_graphql.png")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <a
                           href="https://github.com/rmacl/graphql-apollo-tutorial"
                           target="_blank" >
                          <h6>
                          Build GraphQL API with Apollo, Express, MongoDb <br />
                            <small>Let's explore Apollo server and GraphQL query!!</small>
                          </h6>
                          </a>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                        </Col>
                      </Row>
                    </li>
                    <hr />
                  </ul>
                </Col>

                <Col>
                <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-thumbnail img-no-padding img-responsive"
                            src={require("assets/img/s3_tutorial.png")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                        <a
                           href="https://github.com/rmacl/aws-s3-react-native-tutorial"
                           target="_blank" >
                          <h6>
                            Photo Upload to S3 Bucket <br />
                            <small>Let's load&upload photo and explore basic usage of TypeScript from this tutorial! </small>
                          </h6>
                          </a>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                        
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li></li>
                  </ul>
                </Col>
                
              </Row>
            </TabPane>

            <TabPane  tabId="3" id="library">
                <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-thumbnail img-no-padding img-responsive"
                            src={require("assets/img/js_select_box.png")}
                          />
                        </Col>
                        <Col className="mx-auto" lg="7" md="4" xs="4">
                          <a
                           href="https://github.com/rmacl/js_library"
                           target="_blank" >
                          <h6>
                          JavaScript selex box library <br />
                            <small>Modulized simple selex box library</small>
                          </h6>
                          </a>
                        </Col>
                        <Col className="ml-auto mr-auto"  lg="3" md="4" xs="4">
                        </Col>
                      </Row>
                    </li>
                    <hr/>
                    <li></li>
                  </ul>
                </Col>

                <Col>
                <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-thumbnail img-no-padding img-responsive"
                            src={require("assets/img/move_scale.png")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                          <a
                           href="https://github.com/rmacl/move-and-scale-photo"
                           target="_blank" >
                          <h6>
                            Move and Scale photo <br />
                            <small>Adjust image by moving frame and scaling photo</small>
                          </h6>
                          </a>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                        
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <ProfileFooter/>
    </>
  );
}

export default ProfilePage;
