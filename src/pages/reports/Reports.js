import React from 'react';
import { icons } from '../../components';
import './reports.css';

const Reports = () => {
	return (
		<div className="reports container d-flex justify-content-center mt-5">
			<form className="container col-8 rounded form-inline shadow pt-4 pb-5">
                <div className="row form-group col-6 mx-auto">
                    <label className="px-0 list-attr" for="report">Report</label>
                    <select className="form-control" id="report">
                        <option selected disabled>Choose report</option>
                        <option>Customer - Order</option>
                        <option>Office - Order</option>
                        <option>Customer - Balance</option>
                        <option>Geographic Order Distribution</option>
                        <option>Total Product Orders</option>
                        <option>Warehouse - Stock</option>
                        <option>Uncompleted Orders</option>
                    </select>
                </div>
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="form-group col-5">
                        <label className="mx-2 list-attr" for="start">Start Date</label>
                        <input type="date" id="start" value="2022-01-23"></input>
                    </div>
                    <div className="form-group col-5">
                        <label className="mx-2 list-attr" for="end">End Date</label>
                        <input type="date" id="end" value="2022-03-23"></input>
                    </div>
                    <div className="form-group col-1">
                        <span>{ icons.biggerDownload }</span>
                    </div>
                </div>
            </form>		
		</div>
	)
}

export default Reports
