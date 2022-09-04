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
        <Row>
          <div className="tablet:w-1/2 w-full flex justify-center z-20 py-5 ">
            <a
              href={"#aboutMe"}
              className={`btn bg-[#4DBEE7] mx-5 text-white hover:-translate-y-2 duration-500 hover:bg-brand border-0 ${
                myElementIsVisible ? " fadeAnimation" : ""
              }`}
            >
              Learn more
            </a>
            <a
              href={"#contact"}
              className={`btn bg-[#4DBEE7] mx-5 text-white hover:-translate-y-2 duration-500 hover:bg-brand font-bold border-0 ${
                myElementIsVisible ? " fadeAnimation" : ""
              }`}
            >
              Contact me
            </a>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Landing;
