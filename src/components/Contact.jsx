import React from 'react';


const Contact = () => {
    const linkedin = () => {
        // window.location.href = "https://www.linkedin.com/in/juanhernanlopezsuaste/";
        alert("Me diste click")
    }
    const github = () => {
        // window.location.href = "https://github.com/JHernanLS92";
        alert("Me diste click")
    }


    const submit = () => {
        alert("Me diste click")
    }
    return (
        <div className='Contact' id='contact'>

            <div className='container'>
                <h1>Contacto</h1>
                <form>
                    <fieldset>
                        <div className="form-group">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email: example@mail.com</label>
                            </div>
                            <div className="form-floating mt-4">
                                <textarea className="form-control" id="exampleTextarea" rows="4" ></textarea>
                                <label htmlFor="exampleTextarea" className="form-label mt-4">Example textarea</label>
                            </div>
                            
                        </div>
                        <button type="button" className="btn btn-secondary">Secondary</button>
                    </fieldset>
                </form>
                
            </div>


        </div>

    );
};

export default Contact;