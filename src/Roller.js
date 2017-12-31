import React from 'react';
import PropTypes from 'prop-types';

class Roller extends React.Component {
    static propTypes = {

    };

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this._items = this.props.children.map( x => x.props.value);
    // }

    select = item => {
        console.log(item,typeof(item));
        this.props.onChange(item, this.props.selectedItem);
    }

    render() {
        const { items = [], selectedItem } = this.props;
        const selectedIndex = items.indexOf(this.props.selectedItem);
        return (
            <ul className="Roller">
                {items.map((item, i) => {
                    let className = 'RollerItem';
                    if (i == selectedIndex) {
                        className += ' selected';
                    }
                    if(typeof item === 'object') {
                        if (item.id === selectedItem) {
                            className += ' selected';
                        }
                        if (item.disabled) {
                            className += ' disabled'
                        }
                        return (
                            <li onClick={() => this.select(item.id)} key={item.id} className={className}>{item.name}</li>
                        )
                    }
                    return (
                        <li onClick={() => this.select(item)} key={i} className={className}>{item}</li>
                    )
                })}
            </ul>
        );
    }
}

export default Roller;