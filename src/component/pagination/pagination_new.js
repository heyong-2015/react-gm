import React from 'react';
import PropTypes from 'prop-types';

class WithCount extends React.Component {
    constructor(props) {
        super(props);

        this.handlePage = ::this.handlePage;
    }

    render() {
        const {current} = this.props.data;

        const pages = [],
            pageOffset = 2,
            all = this.getPageCount();
        let begin = Math.max(current - pageOffset, 1),
            end = Math.min(current + pageOffset, all);

        if (all > (pageOffset * 2 + 1)) {
            if (begin === 1) {
                end += pageOffset;
            } else if (end === all) {
                begin = Math.max(begin - pageOffset, 1);
            }
        }

        for (let i = begin; i <= end; i++) {
            pages.push(i);
        }

        return (
            <div className="gm-pagination">
                <ul className="pagination pagination-sm" onClick={this.handlePage}>
                    <li className={current === 1 ? 'disabled' : ''}>
                        <a href="javascript:;" data-page={current - 1}>&laquo;</a>
                    </li>

                    {begin >= 2 ? (<li><a href="javascript:;" data-page="1">1</a></li>) : undefined}
                    {begin >= 3 ? (<li className="disabled"><a href="javascript:;">...</a></li>) : undefined}

                    {pages.map((page, i) => <li key={i} className={current === page ? 'active' : ''}><a
                        href="javascript:;" data-page={page}>{page}</a></li>)}

                    {end <= all - 2 ? (<li className="disabled"><a href="javascript:;">...</a></li>) : undefined}
                    {end <= all - 1 ? (<li><a href="javascript:;" data-page={all}>{all}</a></li>) : undefined}

                    <li className={current === all ? 'disabled' : ''}>
                        <a href="javascript:;" data-page={current + 1}>&raquo;</a>
                    </li>
                </ul>
            </div>
        );
    }

    getPageCount() {
        const {current, limit, peek} = this.props.data;

        return Math.ceil((current * limit + peek) / limit);
    }

    handlePage(event) {
        const {current, limit, list} = this.props.data;
        const page = ~~event.target.getAttribute('data-page'),
            count = this.getPageCount(),
            toPage = this.props.toPage;
        if (!page || page === current || page < 1 || page > count) {
            return;
        }

        this.setState({current: page});

        const absPageChange = (Math.abs(page - current) - 1),
            reverse = page < current;

        toPage({
            limit: limit,
            offset: absPageChange * limit,
            from: reverse ? list[0].__cursor : list[limit - 1].__cursor,
            reverse: +reverse,
            peek: 0
        }, page);
    }
}

WithCount.defaultProps = {
    current: 1
};

WithCount.propTypes = {
    data: PropTypes.shape({
        current: PropTypes.number.isRequired,
        list: PropTypes.array,
        peek: PropTypes.number,
        // is_first: PropTypes.bool,
        // is_last: PropTypes.bool,
        // no_more: PropTypes.bool,
        limit: PropTypes.number.isRequired
    }),
    toPage: PropTypes.func.isRequired,
    nextDisabled: PropTypes.bool
};

class WithoutCount extends React.Component {
    constructor(props) {
        super(props);
        this.handlePage = ::this.handlePage;
    }

    handlePage(action) {
        const {data, toPage} = this.props,
            {is_first, is_last, limit, list} = data;

        if (action === -1) {
            if (is_first) {
                return;
            }
            toPage({
                limit: limit,
                offset: 0,
                from: list[0].__cursor,
                reverse: 1
            });
        } else {
            if (is_last) {
                return;
            }
            toPage({
                limit: limit,
                offset: 0,
                from: list[limit - 1].__cursor,
                reverse: 0
            });
        }
    }

    render() {
        const {data} = this.props,
            {is_first, is_last} = data;

        return (
            <div className="gm-pagination">
                <ul className="pagination pagination-sm">
                    <li className={is_first ? 'disabled' : ''}>
                        <a
                            href="javascript:;"
                            onClick={this.handlePage.bind(this, -1)}
                        >上一页</a>
                    </li>
                    <li className={is_last ? 'disabled' : ''}>
                        <a
                            href="javascript:;"
                            onClick={this.handlePage.bind(this, 1)}
                        >下一页</a>
                    </li>
                </ul>
            </div>
        );
    }
}

WithoutCount.propTypes = {
    data: PropTypes.shape({
        // current: PropTypes.number.isRequired,
        list: PropTypes.array,
        // peek: PropTypes.number,
        is_first: PropTypes.bool,
        is_last: PropTypes.bool,
        // no_more: PropTypes.bool,
        limit: PropTypes.number.isRequired
    }),
    toPage: PropTypes.func.isRequired
};

class Pagination extends React.Component {
    render() {
        if (this.props.data.peek) {
            return <WithCount {...this.props}/>;
        } else {
            return <WithoutCount {...this.props}/>;
        }
    }
}

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
    nextVersion: PropTypes.bool, // 新规范
    data: PropTypes.object.isRequired,
    toPage: PropTypes.func.isRequired,
    nextDisabled: PropTypes.bool
};

export default Pagination;