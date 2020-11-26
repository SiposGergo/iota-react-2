import React from "react";
import Element from "./ElementClass"

const Shapes = (props) => (
    <Element text="Síkidomok" color="red">
        <Element text="Kör" color="blue"></Element>
        <Element text="Ellipszis" color="blue"></Element>
        <Element text="Háromszög" color="blue">
            <Element text="Derékszögű háromszög" color="green"></Element>
            <Element text="Egyenlő szárú háromszög" color="green"></Element>
        </Element>
        <Element text="Négyszög" color="blue">
            <Element text="Téglalap" color="green">
                <Element text="Négyzet" color="black"></Element>
            </Element>
            <Element text="Trapéz" color="green"></Element>
            <Element text="Paralelogramma" color="green"></Element>
        </Element>
        <Element text="Ötszög" color="blue"></Element>
        <Element text="Hatszög" color="blue"></Element>
        <Element text="Hétszög" color="blue"></Element>
        <Element text="Nyolcszög" color="blue"></Element>
    </Element>
)

export default Shapes;