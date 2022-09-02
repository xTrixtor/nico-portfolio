import MileStoneModel from "../../models/MileStoneModel";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import Counter from "../Count";

function MileStoneRow(mileStone: MileStoneModel) {
  const [onFocus, setOnFocus] = useState(false);
  const handleRowClick = () => {
    setOnFocus(!onFocus);
  };
  const handleOnLeaveMouseRow = () => {
    if (onFocus) setOnFocus(!onFocus);
  };
  return (
    <div
      onClick={handleRowClick}
      onMouseLeave={handleOnLeaveMouseRow}
      className={`cursor-pointer ${
        onFocus ? "onRowFocus duration-300 text-xl" : ""
      }`}
    >
      <Row
        className={`flex items-center text-slate-400 rounded-3xl mx-3 border-slate-600`}
        id="mileStone"
      >
        <Col
          className={`px-5 py-3 ml-3 my-3 text-slate-400 w-40 ${
            onFocus ? "onRowFocus duration-300 text-xl" : ""
          }`}
          id="experienceCircle"
        >
          <div className="font-bold flex justify-center items-center pb-1">
            <Counter endCount={mileStone.years} duration="3" />
          </div>
          <div className="flex justify-center items-center text-center font-medium">
            {mileStone.yearsDesc}
          </div>
        </Col>
        <Col className="mx-3 my-5">
          <div
            className="font-medium text-sm flex items-center justify-center"
            id="mileStoneDesc"
          >
            {mileStone.desc}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MileStoneRow;
