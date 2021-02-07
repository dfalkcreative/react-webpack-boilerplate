/**
 * This basic card object represents an example of a functional component.
 */
import React from "react";

const Card = ({ header, body }) => (
    <div className="card">
        <div className="card__header">
            { header }
        </div>
        <div className="card__body">
            { body }
        </div>
    </div>
);

export default Card;