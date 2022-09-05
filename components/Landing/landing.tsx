import { Col, Row } from "react-bootstrap";
import LandingText from "./LandingText";
import LandingPicture from "./LandingPicture";
import { useInView } from "react-intersection-observer";

function Landing() {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <div
      className="h-[100vh] flex justify-center items-center"
      ref={myRef}
      id={"landing"}
    >
      <div className="">
        <Row className="tablet:flex items-center flex-row-reverse justify-evenly">
          <Col>
            <LandingPicture />
          </Col>
          <Col>
            <LandingText />
          </Col>
        </Row>

      </div>
    </div>
  );
}

export default Landing;
