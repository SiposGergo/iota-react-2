import React from "react";

const Element = ({ color, children, text }) => (
    <div className={`element ${this.props.color}`}>
        <div className="element">
            {text}
        </div>
        <div className='ml-30'>{children}</div>
    </div>
)

export default Element;