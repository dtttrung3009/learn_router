import React, {Component} from 'react';

class Product extends Component {
    render() {
        var {match}=this.props;
        var name=match.params.name;
        console.log(name);
        return (
            <div>
                Day la chi tiet san pham: {name}
            </div>
        );
    }
}

export default Product;
