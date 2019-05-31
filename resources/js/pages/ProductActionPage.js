import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProductRequestApi, editProductRequestApi, getProductByIDRequestApi } from '../actions/Action';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id: "",
            name:"",
            price: "",
            condition: ""
        }
    }

    componentDidMount() {
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            this.props.getProductByID(id);
        }
    }

    componentWillReceiveProps(nextProps){
      if(nextProps && nextProps.product){
        var {product} = nextProps;
        this.setState({
            id: product.id,
            name:product.name,
            price: product.price,
            condition: product.condition
        })
      }
    };
    
    render() {
        var {id,name,price,condition} = this.state;
        return (
            <div className='col-xl-6'>
                <form action="" method="POST" onSubmit={(event)=>this.onSubmit(event)}>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" name='name' onChange={(event)=>this.onchange(event)} defaultValue={name} className="form-control" />
                    </div>                    <div className="form-group">
                        <label >Price</label>
                        <input type="number" name='price' onChange={(event)=>this.onchange(event)} defaultValue={price} className="form-control" />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name='condition' onChange={(event)=>this.onchange(event)} checked = {condition}/>
                            Con hang
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

    onSubmit(e){
        e.preventDefault();
        var {id,name, price, condition} = this.state;
        var {history} = this.props;
        var product = {
            id : id,
            name: name,
            price: price,
            condition: condition
        }
        if(id){
            this.props.onEditProduct(product);
        }
        else{
            this.props.onAddProduct(this.state);
        }
        history.goBack();
    }

    onchange(e){
        var name= e.target.name;
        var value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            [name] : value
        })
    }
}


const mapStateToProps = state => {
    return {
        product : state.editProduct
    }
}

const mapDispatchToProps = (dispatch,props)=> {
    return {
        onAddProduct : (product) => {
            dispatch(addProductRequestApi(product))
        },
        getProductByID : (id) => {
            dispatch(getProductByIDRequestApi(id));
        },
        onEditProduct : (product) => {
            dispatch(editProductRequestApi(product));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);