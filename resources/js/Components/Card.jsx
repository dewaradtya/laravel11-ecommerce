import React from 'react';

const Card = ({ children }) => {
    return <div className="card shadow mb-4">{children}</div>;
};

const CardHeader = ({ className = '', titleText, children }) => {
    return (
        <div className={`card-header py-3 ${className}`}>
            <h6 className="m-0 font-weight-bold text-primary">{titleText}</h6>
            {children}
        </div>
    );
};

const CardBody = ({ children }) => {
    return <div className="card-body">{children}</div>;
};

Card.CardHeader = CardHeader;
Card.CardBody = CardBody;
export default Card;
