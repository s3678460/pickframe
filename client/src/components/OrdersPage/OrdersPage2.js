import React, { Component } from 'react';
import './OrdersPage.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addOrders} from "../../actions/orderActions";

class OrdersPage2 extends Component {

    constructor(){
        super();
        this.state={
            companyName: '',
            address: '',
            companyPhone: '',
            accountHolder:'',
            cardNumber:'',
            bankName:'',
            bankBranch:'',
            email: '',
            // productId: '',
            // total: '',
            // status: '',
            errors:{}

        };
    
    // this.onChange=this.onChange.bind(this);
    // this.onSubmit=this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) =>{
        e.preventDefault();
        // console.log('submit');

        const newOrder = {
            companyName: this.state.companyName,
            address: this.state.address,
            companyPhone: this.state.companyName,
            accountHolder: this.state.accountHolder,
            cardNumber: this.state.cardNumber,
            bankName: this.state.bankName,
            bankBranch: this.state.bankBranch,
            email: this.state.email
        }

        this.props.addOrders(newOrder);
        
    }


    render() {

        const {errors} = this.state;

        return (
            <div className="container-fluid-order" style={{ maxHeight: "100%" }}>
                <div className="row">

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="order-box1">
                            <h1>Checkout</h1>
                            <div className="checkout-box">
                                <form className="form-checkout" onSubmit = {this.onSubmit}>
                                    <h2>Billing Information</h2>
                                    <div className = "form-group"><input  type="text" className="form-control form-control-lg" placeholder="Organization or Company" name="companyName" value={this.state.companyName} onChange={this.onChange} error = {errors.companyName} /></div>
                                    <div className = "form-group"><input  type="text" className="form-control form-control-lg" placeholder="Address" name="address" value={this.state.address} onChange={this.onChange} error = {errors.address} /></div>
                                    <div className = "form-group"><input  type="text" className="form-control form-control-lg" placeholder="Company Phone" name="companyPhone" value={this.state.companyPhone} onChange={this.onChange} error = {errors.companyPhone} /></div>
                                    <div className = "form-group"><input  type="text" className="form-control form-control-lg" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange} error = {errors.email} /></div>
                                    
                                    <h2>Bank Information</h2> 
                                    <div className = "form-group"><input  type="text" className="form-control form-control-lg" placeholder="Account holder" name="accountHolder" value={this.state.accountHolder} onChange={this.onChange} error = {errors.accountHolder} /></div>
                                     <div className = "form-group"><input  type="text" className="form-control form-control-lg" placeholder="Card number" name="cardNumber" value={this.state.cardNumber} onChange={this.onChange} error = {errors.cardNumber} /></div>
                                     <div className = "form-group"><input  type="text" className="form-control form-control-lg" placeholder="Bank name" name="bankName" value={this.state.bankName} onChange={this.onChange} error = {errors.bankName} /></div>
                                     <div className = "form-group"><input  type="text" className="form-control form-control-lg" placeholder="Bank branch" name="bankBranch" value={this.state.bankBranch} onChange={this.onChange} error = {errors.bankBranch} /></div>
                                    
                                    <div className="total">
                                        <h2  >Total</h2>
                                        <b>$30.00 USD</b>
                                        <b style={{fontSize:"10pt"}}><p>I have read and accept our <Link to="#">Website Terms</Link>, <Link to="#">Privacy Policy</Link>, and <Link to="#">Licensing Terms.</Link> </p></b>
                                        <input type = "submit" className = "btn btn-info btn-block mt-4"/>
                                          
                                        
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                    
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="order-box1" style={{position:"absolute"}}>
                    <h1>Order Summary</h1>
                    <div className="checkout-box-2">
                    
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        
                    
                    
                    <div className="summary-image">
                    <img src="https://images3.alphacoders.com/823/82317.jpg" style={{height:"180%",width:"180%"}}></img>
                    </div>
                    <p style={{fontSize:"10pt"}}>1 PickFrame Credit</p>
                    
                    </div>
                    

                    
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <b>$30.00 USD</b>
                    </div>
                    

                    
                    
                    
                    
                    
                    </div>
                    <span style={{paddingRight:"50px",paddingLeft:"18px",fontSize:"20pt"}}>Total</span>
                    <span style={{textAlign:"right",fontWeight:"bold",fontSize:"20pt"}}>$30.00 USD</span>
                    
                    </div>

                        
                    </div>
                    

                </div>



            </div>
        );
    }
}

OrdersPage2.propTypes = {
    addOrders: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors,
})

export default connect(mapStateToProps, {addOrders})(OrdersPage2);