import React from "react";

import { Button as ContaineButton } from './styled';

function Button({children , ...props}){

    return <ContaineButton {...props}>{children}</ContaineButton>
}

export default Button