import react from "react";
import './form.css';

function handler(e){
    e.preventDefault();
    console.log("Form submitted");
}

function Form(){
    return (
        <div className="form-container">
        <form onSubmit = {(e) => handler(e)}>
            <h1>Contact Us</h1>
            <input type="text" placeholder="Enter your name" required />
            {/* <input type="email" placeholder="Enter your email" required /> */}
            <button type="submit">Submit</button>
        </form>
    </div>
    )

}

export default Form;