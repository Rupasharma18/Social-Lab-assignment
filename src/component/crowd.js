import React from 'react';


function crowd() {
    return (
        <div>

            <h1 className="heading">Create Your crowd Fund</h1>
            <div className="card box_shw2 border-0 px-3 rounded-2 mb-3 w_500 py-4 mx-auto mt-2">

                <div className="card-body">
                    <form>
                        <div className="form-group row ">
                            <label for="name" className="col-sm-6 col-form-label ">Name of the fund</label>
                            <div class="col-sm-6">
                                <input type="text" className="form-control input-color" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="fund" className="col-sm-6 col-form-label">cause of the fund</label>
                            <div class="col-sm-6">
                                <input type="text" className="form-control input-color" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="amount" className="col-sm-6 col-form-label">Target Amount   <i class="fa fa-rupee" style={{ fontSize: "25px" }}></i></label>
                            <div class="col-sm-6">
                                <input type="text" className="form-control input-color" />
                            </div>
                        </div>

                        <button type="button" className="btn btn-secondary" color="grey" data-toggle="modal" data-target="#exampleModalLong">
                            <i class="fa fa-check" style={{ fontSize: "25px", float: "left", color: "greenyellow" }}></i>
                             Create</button>
                    </form>




                    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                               
                                <div class="modal-body">
                                    <h1 className="heading1">Successfully Submit</h1>
                                </div>

                            </div>
                        </div>
                    </div>













                </div>

            </div>
        </div>
    );
}

export default crowd;

