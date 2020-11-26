import React from "react";

export default class Element extends React.Component {

    // Kérdés: Milyen sorrendben íródnak ki az alakzatok?
    componentDidMount() {
        console.log(this.props.text);
    }

    render() {
        return (
            <div className={`element ${this.props.color}`}>
                <div className="element">
                    {this.props.text}
                </div>
                <div className='ml-30'>{this.props.children}</div>
            </div>
        )
    }
}
