import React from "react";
import { Col } from "reactstrap";

const HeadItem = ({ id, label }) => {
  return (
    <Col
      key={id}
    >
      <p
        className={`text-uppercase text-small table__head-text`}
      >
        <span>
          {label}
        </span>
      </p>
    </Col>
  );
};

export default HeadItem;
