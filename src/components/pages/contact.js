import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
    <div className="contact-info-wrapper">
      <div className="name">
        James Hostetter
      </div>

      <div className="email-address">
        <FontAwesomeIcon icon="envelope-open-text" />
        james.hostetter64@gmail.com
      </div>
    </div>
  );
}