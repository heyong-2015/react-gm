import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

class CheckboxGroup extends React.Component {
    handleChange(v) {
        const {onChange, value} = this.props;
        if (value.indexOf(v) > -1) {
            onChange(_.without(value, v));
        } else {
            onChange([...value, v]);
        }
    }

    render() {
        const {
            onChange, // eslint-disable-line
            value,
            inline,
            className,
            children,
            name,
            ...rest
        } = this.props;

        const childList = _.isArray(children) ? children : [children];

        return (
            <div {...rest} className={classNames('gm-checkbox-group checkbox', className)}>
                {_.map(childList, (child, i) => {
                    return React.cloneElement(child, {
                        index: i,
                        key: i,
                        checked: value.indexOf(child.props.value) > -1,
                        inline,
                        onChange: this.handleChange.bind(this, child.props.value),
                        name
                    });
                })}
            </div>
        );
    }
}

CheckboxGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    inline: PropTypes.bool
};

CheckboxGroup.defaultProps = {
    inline: false,
    value: [],
    onChange: _.noop
};

export default CheckboxGroup;