import react from "react";
import PropTypes from "prop-types";
import ShopItemModel from "../models/ShopItemModel";

class ShopItemFunc extends react.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const { item } = this.props;
        return (
        <div className="main-content">
            <h3>{item.brand}</h3>
            <h1 className="h1">{item.title}</h1>
            <h3>{item.description}</h3>
            <div className='description'>
                {item.descriptionFull}
            </div>
            <div className='highlight-window mobile'>
                <div className='highlight-overlay'></div>
            </div>
            <div className='divider'></div>
            <div className="purchase-info">
            <span className='price'>{item.currency}{item.price.toFixed(2)}</span>
            <span>
            <button className='button button:hover'>
                    Добавить в корзину
            </button>
            </span>
        </div>    
    </div>
        );
    }
}

ShopItemModel.propTypes = {
    item: PropTypes.instanceOf(ShopItemModel).isRequired
}

export default ShopItemFunc;