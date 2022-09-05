import { Col, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

function LandingPicture(): JSX.Element {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <div ref={myRef}>
      <Col sm={12} lg={4} className="relative mt-5 tablet:mt-0">
        <div className="flex tablet:justify-space tablet:justify-end justify-center items-center w-full">
          <div
            className={
              myElementIsVisible
                ? "bg-brand rounded-full tablet:h-[400px] tablet:w-[400px] w-[250px] h-[250px] shadow-2xl absolute top-0 blur-sm blueBallAnimation"
                : ""
            }
          />
          {myElementIsVisible ? (
            <img
              src="images/Me.jpg"
              className={
                myElementIsVisible
                  ? "rounded-full tablet:w-[500px] tablet:h-[500px] w-[300px] h-[300px] tablet:right-0 z-10 tablet:mr-10 mt-5 fadeInAnimation"
                  : ""
              }
            />
          ) : (
            <div
              className={
                "rounded-full tablet:w-[500px] tablet:h-[500px] w-[300px] h-[300px] tablet:right-0 z-10 tablet:mr-10 mt-5 bg-brand"
              }
            ></div>
          )}
        </div>
      </Col>
    </div>
  );
}

export default LandingPicture;
