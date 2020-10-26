import React from "react";
import { PropTypes } from "prop-types";
import { View, Text } from "react-native";
import BoxStyles from "../CustomProperties/BoxStyles";

export default function Box({ children,boxColor,styleObj }) {
    return (
        <View style={[styleObj? styleObj: BoxStyles.box ,{backgroundColor: boxColor?boxColor:BoxStyles.box.backgroundColor}]}>
            <Text style={BoxStyles.boxText}>{children}</Text>
        </View>
    );
}
Box.propTypes = {
    children: PropTypes.node.isRequired,
    boxColor: PropTypes.string,
    styleObj:    PropTypes.object,
};
