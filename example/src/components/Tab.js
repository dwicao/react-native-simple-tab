import React, { PureComponent, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CrossPlatformIcon from 'react-native-cross-platform-icons';

class Tab extends PureComponent {
    constructor() {
        super();

        this._handleTabPress = this._handleTabPress.bind(this);
    }

    _handleTabPress() {
        this.props.onTabPress(this.props.tabIndex);
    }

    _getColor() {
        if (this.props.selected === this.props.tabIndex) {
            return this.props.activeColor;
        }
        
        return this.props.unActiveColor;
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this._handleTabPress}
                activeOpacity={this.props.pressOpacity}
                style={styles.container}
            >
                    <CrossPlatformIcon
                        name={this.props.name}
                        size={this.props.iconSize}
                        color={this._getColor()}
                    />
                    {!this.props.onlyIcon &&
                        <Text style={{ color: this._getColor(), fontSize: this.props.fontSize }}>
                            {this.props.label}
                        </Text>
                    }
            </TouchableOpacity>
        );
    }
}

Tab.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Tab;