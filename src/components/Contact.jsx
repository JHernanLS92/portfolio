import React from 'react';
import '../assets/css/contact.css'


const Contact = () => {

    return (
        <div className='Container'>
            <div className='Contact'>
                <form>
                    <fieldset className="form-group">
                    <h1>Contacto</h1>
                            <div className="form-floating mb-3">
                                <label htmlFor="floatingInput">Email: example@mail.com</label>
                                <br></br>
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            </div>
                            <div className="form-floating mt-4">
                                <label htmlFor="exampleTextarea" className="form-label mt-4">Message</label>
                                <br></br>
                                <textarea className="form-control" id="exampleTextarea" rows="10" ></textarea>
                            </div>
                        <button type="button" className="btn btn-secondary">Secondary</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Contact;