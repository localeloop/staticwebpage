import React from "react";
import { Roller, RollerContainer } from './style';

const Spinner: React.FC = () => {
    return (
        <RollerContainer>
            <Roller>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Roller>
        </RollerContainer>
    );
  };
  
  export default Spinner;