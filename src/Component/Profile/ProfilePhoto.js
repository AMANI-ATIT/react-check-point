import React from "react";
import { Image } from "react-bootstrap";

function ProfilePhoto() {
  return (
    <div className="">
      <Image
        style={{ width: 150, height: 150 }}
        src="me2.jpg"
        alt=""
        roundedCircle
      />
    </div>
  );
}

export default ProfilePhoto;
