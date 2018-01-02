import React from 'react';
import PropTypes from 'prop-types';
import { findItem } from './utils';

class Roller extends React.Component {
    static propTypes = {

    };

    constructor(props) {
        super(props);
        const { items = [], selectedItem } = this.props;
    }

    // componentDidMount() {
    //     this._items = this.props.children.map( x => x.props.value);
    // }

    select = item => {
        console.log(item, typeof (item));
        this.props.onChange(item, this.props.selectedItem);
    }

    dummy = (key) => (<li key={key} className="RollerItem">&nbsp;</li>);

    render() {
        const { items = [], selectedItem } = this.props;
        const selectedIndex = findItem(items, selectedItem);
        console.log(selectedIndex);
        const nodes = items.map((item, i) => {
            if((i > selectedIndex + 3) || (i < selectedIndex - 3)) {
                return null;
            }
            let className = 'RollerItem highlight-'+(selectedIndex - i);
            if (i === selectedIndex) {
                className += ' selected';
            }
            if (typeof item === 'object') {
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
        });

        if(selectedIndex < 3) {
            for(let i = selectedIndex - 3; i < 0; i++) {
                nodes.unshift(this.dummy('head'+i));
            }
        }
        if(items.length - selectedIndex <= 3) {
            for(let i = items.length; i <= selectedIndex + 3; i++) {
                nodes.push(this.dummy('tail'+i));
            }
        }
        return (
            <ul className="Roller">
                {nodes}
            </ul>
        );
    }
}

export default Roller;