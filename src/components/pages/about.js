import React from 'react';
import profilePicture from '../../../static/assets/images/bio/profilepic.jpg';

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: 'url(' + profilePicture + ') no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="right-column">
        {/* TODO */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        magnam praesentium distinctio facere necessitatibus iusto quam sit totam
        odio at! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Aliquid, rem numquam ipsa explicabo id libero quasi quis? Alias
        explicabo eius nisi mollitia maxime beatae expedita! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quam vitae natus quibusdam
        consectetur, reprehenderit ad?
      </div>
    </div>
  );
}
