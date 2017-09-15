import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Checkbox extends React.Component {
    render() {
        const {
            value,
            checked,
            onChange,
            children,
            name,
            inline
        } = this.props;
        if (!inline) {
            return (
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name={name}
                            value={value}
                            checked={checked}
                            onChange={onChange}
                            className="gm-checkbox"
                        />
                        <span/>
                        {children}
                    </label>
                </div>
            );
        } else {
            return (
                <label className="checkbox-inline">
                    <input
                        type="checkbox"
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        className="gm-checkbox"
                    />
                    <span/>
                    {children}
                </label>
            );
        }
    }
}

Checkbox.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,

    // 由CheckboxGroup 传下来
    name: PropTypes.string,
    checked: PropTypes.bool,
    inline: PropTypes.bool
};

Checkbox.defaultProps = {
    checked: false,
    onChange: _.noop
};

export default Checkbox;