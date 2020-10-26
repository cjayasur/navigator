import React from "react";
import PropTypes from "prop-types";
import {View} from "react-native";
import BoxStyles from "../CustomProperties/BoxStyles";

const Column = ({children}) => {
    return(
        <View style={BoxStyles.column}>{children}</View>
    )
}
export default Column

Column.propTypes = {
    children: PropTypes.node.isRequired,
}
