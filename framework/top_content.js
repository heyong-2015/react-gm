import React from 'react';
import PropTypes from 'prop-types';
import {Flex, Trigger} from '../src/index';
import _ from 'lodash';
import classNames from 'classnames';

class TopContent extends React.Component {
    render() {

        const {logo, navList, navSelected, jump, jumpLink, jumpList} = this.props;

        return (
            <Flex column className="gm-framework-top-content-default gm-box-shadow-bottom">
                <Flex flex alignStretch className="gm-framework-container">
                    <Flex alignCenter>
                        {logo}
                    </Flex>
                    <Flex flex/>
                    {navList && (
                        <Flex alignEnd className="gm-framework-top-content-default-nav">
                            {_.map(navList, v => (
                                <a
                                    key={v.link}
                                    href={v.link}
                                    className={classNames({
                                        'active': v === navSelected
                                    })}
                                >{v.text}</a>
                            ))}
                        </Flex>
                    )}
                    {jump && (
                        <Flex alignEnd className="gm-framework-top-content-default-jump">
                            <Trigger type="hover" right component={<div/>} popup={(
                                <div className="list-group">
                                    {_.map(jumpList, v => (
                                        <a
                                            target="_blank"
                                            key={v.link}
                                            className="list-group-item"
                                            href={v.link}
                                        >{v.text}</a>
                                    ))}
                                </div>
                            )}>
                                <a href={jumpLink} target='_blank'>{jump}</a>
                            </Trigger>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        );
    }
}

TopContent.propTypes = {
    logo: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    navList: PropTypes.array, // [{text, link}]
    navSelected: PropTypes.any,
    jump: PropTypes.string,
    jumpLink: PropTypes.string,
    jumpList: PropTypes.array // [{text, link}]
};

export default TopContent;