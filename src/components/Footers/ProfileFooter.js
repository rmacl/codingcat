/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="http://blog.naver.com/catasy"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made by{" "}
              <img
                            alt="..."
                            className="img-tiny img-no-padding"
                            src={require("assets/img/by_seoyeong_small.png"
                          
                            )}
                          />
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
