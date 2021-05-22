import React from 'react'

const Contact = () => {
    return (
        <>
        <div id="header" className = "my-5 align-items-center">
            <h1 className = "text-center"> Contact Us </h1>
        </div>
        <div className = "container contact_div">
            <div className = "row">
                <div className = "col-md-6 col-10 mx-auto">
                    <form>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1">Full Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1">Phone</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;