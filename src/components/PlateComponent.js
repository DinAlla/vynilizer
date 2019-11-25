import React from "react";
import {connect} from 'react-redux';

import plate from '../accets/img/plate.png';

const PlateComponent = () => {
    return (
        <div>
            <img alt="plate"
                 src={plate}
            />
        </div>
    );
};

export default connect()(PlateComponent);