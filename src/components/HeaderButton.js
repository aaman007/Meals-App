import React from 'react';
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from '@expo/vector-icons';

import colors from "../constants/colors";

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            color={colors.defaultColor}
            IconComponent={Ionicons}
            iconSize={23}
            {...props}
        />
    )
};

export default CustomHeaderButton;