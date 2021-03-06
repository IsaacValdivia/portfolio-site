import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import OwnCarousel from "../OwnCarousel";

import "./Node.css";

const Node = (props) => {

  let buttonStyle = "btn-ripple rounded-circle";
  let size;
  if (props.disabled) {
    buttonStyle += " disabledButton";
    size = "sm";
  } else {
    buttonStyle += " roundButton";
    size = "md";
  }

  if (props.special) {
    buttonStyle += " specialButton"
  } else {
    buttonStyle += " normalButton"
  }

  const [modal, setModal] = useState(false);

  const toggle = () => props.disabled ? undefined : setModal(!modal)

  const closeBtn = (
    <button className="close text-white" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <div>
      <Button className={buttonStyle} size={size} onClick={toggle}>
        <div className="d-flex flex-column justify-content-center align-items-center responsiveContent">
          {props.disabled ? "" : props.title}
          <span className="responsiveIcon">{props.disabled ? "" : props.icon}</span>
        </div>
      </Button>
      <Modal centered isOpen={modal} toggle={toggle} className="modalContainer unfoldIn">
        <ModalHeader
          className="modalHeader d-flex flex-row justify-content-end align-items-center"
          toggle={toggle}
          close={closeBtn}
        >
          <span className="headerText">{props.title}</span>
        </ModalHeader>
        <ModalBody className="modalBody">
          <div className="embed-responsive">
            {props.nodeContent}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Node;