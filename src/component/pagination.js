import React from 'react';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.onPage = ::this.onPage;
    }

    render() {
        let data = Object.assign({}, this.props.data);

        data.index = data.offset / data.limit + 1;

        let offset = 2,
            pages = [],
            all = Math.ceil(data.count / data.limit),
            begin = Math.max(data.index - offset, 1),
            end = Math.min(data.index + offset, all);

        if (all > (offset * 2 + 1)) {
            if (begin === 1) {
                end += offset;
            } else if (end === all) {
                begin = Math.max(begin - offset, 1);
            }
        }

        for (let i = begin; i <= end; i++) {
            pages.push(i);
        }

        return (
            <div className="gm-pagination">
                <ul className="pagination pagination-sm" onClick={this.onPage}>
                    <li className={data.index === 1 ? 'disabled' : ''}>
                        <a href="javascript:;" data-page={data.index - 1}>&laquo;</a>
                    </li>

                    { begin >= 2 ? (<li><a href="javascript:;" data-page="1">1</a></li>) : undefined}
                    { begin >= 3 ? (<li className="disabled"><a href="javascript:;">...</a></li>) : undefined}

                    {pages.map((page, i) => <li key={i} className={data.index === page ? 'active' : ''}><a
                        href="javascript:;" data-page={page}>{page}</a></li>)}

                    { end <= all - 2 ? (<li className="disabled"><a href="javascript:;">...</a></li>) : undefined}
                    { end <= all - 1 ? (<li><a href="javascript:;" data-page={all}>{all}</a></li>) : undefined}

                    <li className={data.index === all ? 'disabled' : ''}>
                        <a href="javascript:;" data-page={data.index + 1}>&raquo;</a>
                    </li>
                </ul>
            </div>
        );
    }

    onPage(event) {
        var page = ~~event.target.getAttribute('data-page'),
            data = this.props.data,
            count = Math.ceil(data.count / data.limit),
            toPage = this.props.toPage;
        if (!page || page === data.index || page < 1 || page > count) {
            return;
        }

        toPage({
            offset: (page - 1) * data.limit,
            limit: data.limit
        }, page);
    }
}
Pagination.displayName = 'Pagination';
Pagination.propTypes = {
    data: React.PropTypes.shape({
        count: React.PropTypes.number.isRequired,
        offset: React.PropTypes.number.isRequired,
        limit: React.PropTypes.number.isRequired
    }),
    toPage: React.PropTypes.func.isRequired
};

export default Pagination;