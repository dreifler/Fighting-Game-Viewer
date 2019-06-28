import React from 'react';
import './FighterCards.css';

const FighterCards = ({name1, name2, str1, spd1, agl1, str2, spd2, agl2}) => {
    return (
        <div className="container">
            <div className="card float-left">
                <div className="card-body">
                    <div className="progress">
                        <div id="progress1" className="progress-bar bg-danger" role="progressbar"></div>
                    </div>
                    <h1 className="card-title">{name1}</h1>
                    <h5>Str: {str1}</h5>
                    <h5>Spd: {spd1}</h5>
                    <h5>Agl: {agl1}</h5>
                </div>
            </div>
            <div className="card float-right">
                <div className="card-body">
                    <div className="progress">
                        <div id="progress2" className="progress-bar bg-danger" role="progressbar"></div>
                    </div>
                    <h1 className="card-title">{name2}</h1>
                    <h5>Str: {str2}</h5>
                    <h5>Spd: {spd2}</h5>
                    <h5>Agl: {agl2}</h5>
                </div>
            </div>
        </div>
    )
}

export default FighterCards;