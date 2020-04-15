import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
    // Data that we'll need:
    // - background image: thumb_image_url
    // - logo
    // - description: description
    // - id: id
    // "position", "thumb_image_url", "banner_image_url", "logo_url", "column_names_merged_with_images"

    const { id, description, thumb_image_url, logo } = props.item;

    return (
        <div>
            <img src={thumb_image_url} />
            <img src={logo} />
            <div>{description}</div>
            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    )
}