import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSidebarList = props => {
    const PortfolioList = props.data.map(portfolioItem => {
        return (
            <div key={portfolioItem.id} className="portfolio-item-thumb">
                <div className="portfolio-thumb-img">
                    <img src={portfolioItem.thumb_image_url} />
                </div>

                <div className="text-content">
                  <h1 className="title">{portfolioItem.name}</h1>
                  <a className="delete-icon" onClick={() => props.handleDeleteClick(portfolioItem)}>
                    <FontAwesomeIcon icon="trash" />
                  </a>
                </div>
            </div>
        );
    });

  return (
    <div className="portfolio-sidebar-list-wrapper">
      {PortfolioList}
    </div>
  );
}

export default PortfolioSidebarList;