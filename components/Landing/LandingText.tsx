import {Col, Row} from "react-bootstrap";
import {useInView} from "react-intersection-observer";

function LandingText() {
    const {ref: myRef, inView: myElementIsVisible} = useInView();
    return (
        <div ref={myRef}>
            <Col
                className={
                    myElementIsVisible
                        ? "tablet:fadeInAnimation fadeAnimation tablet:flex tablet:w-[75vh] text-3xl tablet:relative"
                        : "tablet:w-[75vh] text-3xl"
                }
            >
                <div className={"container py-5 z-20 text-center tablet:text-start text-center"}>
                    <Row
                        className="flex tablet:justify-start justify-center tablet:text-7xl text-2xl text-slate-200 font-semibold">
                        Hi! I am Nico.
                    </Row>
                    <Row className="flex tablet:justify-start justify-center tablet:text-7xl text-2xl">
                        <div>
                            <p className="text-brand font-black">A software</p>
                            <p className={"w-full text-start font-semibold"} id={"typeText"}>developer</p>
                            <p className={"text-slate-200 font-semibold"}>from Germany.</p>
                        </div>
                    </Row>
                </div>
            </Col>
        </div>
    );
}

export default LandingText;
