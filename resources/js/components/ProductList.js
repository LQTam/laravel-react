import React, { Component } from 'react'

export default class ProductList extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title text-center">Danh sach san pham</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Condition</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
