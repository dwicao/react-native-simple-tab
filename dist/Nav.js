import React, { PureComponent, PropTypes } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

class Nav extends PureComponent {
    constructor() {
        super();

        this._handleTabChange = this._handleTabChange.bind(this);
    }

    _handleTabChange(tabIndex) {
        this.props.onTabChange(tabIndex);
    }

    _containerStyle() {
        return {
            flexDirection: 'row',
            borderTopWidth: StyleSheet.hairlineWidth,
            backgroundColor: this.props.backgroundColor,
            borderTopColor: this.props.borderTopColor,
            height: this.props.height,
        }
    }
    
    render() {
        return (
            <View style={[this._containerStyle(), this.props.style]}>
                {React.Children.map(this.props.children, (child, tabIndex) => (
                    React.cloneElement(child, {
                        tabIndex,
                        selected: this.props.selected,
                        activeColor: this.props.activeColor,
                        unActiveColor: this.props.unActiveColor,
                        onTabPress: this._handleTabChange,
                        iconSize: this.props.iconSize,
                        onlyIcon: this.props.onlyIcon,
                        pressOpacity: this.props.pressOpacity,
                        fontSize: this.props.fontSize,
                    })
                ))}
            </View>
        );
    }
}

Nav.defaultProps = {
    onTabChange: () => {},
    activeColor: 'black',
    unActiveColor: 'gray',
    backgroundColor: 'white',
    borderTopColor: '#DDDDDD',
    height: 42,
    iconSize: 22,
    onlyIcon: false,
    pressOpacity: 0.7,
    fontSize: 11,
};

Nav.propTypes = {
    selected: PropTypes.number,
    onTabChange: PropTypes.func,
    backgroundColor: PropTypes.string,
    borderTopColor: PropTypes.string,
    height: PropTypes.number,
    iconSize: PropTypes.number,
    onlyIcon: PropTypes.bool,
    pressOpacity: PropTypes.number,
    fontStyle: PropTypes.object,
    style: PropTypes.object,
};

export default Nav;