import React from 'react';
import PropTypes from 'prop-types';
import {Flex, Trigger} from '../src/index';
import _ from 'lodash';

class TopHeader extends React.Component {
    render() {

        const {text, settings} = this.props;

        return (
            <Flex className="gm-framework-top-header-default">
                <Flex alignCenter className="gm-framework-top-header-default-mobile-nav">
                    <i
                        className="glyphicon glyphicon-menu-hamburger"
                        onClick={this.handleToggleMobileNav}
                    />
                </Flex>
                <Flex flex/>
                <Flex>{text}</Flex>
                <div className="gm-gap-10"/>
                {settings && (
                    <div className="gm-framework-top-header-default-settings">
                        <Trigger showArrow type="hover" right component={<div/>} popup={(
                            <div className="list-group"
                                 style={{minWidth: '100px', color: 'in'}}>
                                {_.map(settings, (v, i) => (
                                    <a key={i + '_' + v.text} href="javascript:;"
                                       className="list-group-item text-center" onClick={v.onClick}>{v.text}</a>
                                ))}
                            </div>
                        )}>
                            <i className="glyphicon glyphicon-cog"/>
                        </Trigger>
                    </div>
                )}
                {settings && <div className="gm-gap-10"/>}
            </Flex>
        );
    }
}

TopHeader.propTypes = {
    text: PropTypes.string,
    settings: PropTypes.array // [{text, onClick}]
};

export default TopHeader;