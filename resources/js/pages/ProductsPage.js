import React, { Component } from 'react'
import ProductList from '../components/ProductList'
import { getAllProductsRequestApi, deleteProductRequestApi } from '../actions/Action';
import {connect} from 'react-redux'
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom'

class ProductsPage extends Component {
    constructor(props){
        super(props);
        this.onDeleteProduct = this.onDeleteProduct.bind(this);
    }
    componentDidMount() {
        this.props.getAllProduct();
    }
    render() {
        var {products} = this.props;
        return (
            <>
                <div className="col-xs-1-12">
                    <Link to='/products/add' className='btn btn-info' >Them san pham</Link>
                    <ProductList>
                        {this.showProducts(products)}
                    </ProductList>
                </div>
            </>
        )
    }

    onDeleteProduct(id){
        this.props.onDeleteProduct(id);
    }
    showProducts(products){
        var result = null;
        if(products.length > 0){
            result = products.map((product,index) => {
                return <ProductItem
                    key = {index}
                    product = {product}
                    id = {index}
                    onDeleteProduct = {this.onDeleteProduct}
                    />
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllProduct: () => {
            dispatch(getAllProductsRequestApi());
        },
        onDeleteProduct : (id) => {
            dispatch(deleteProductRequestApi(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsPage);
