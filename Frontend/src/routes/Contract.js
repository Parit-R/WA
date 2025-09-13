import { Link } from "react-router-dom";
import "./Contract.css";
function Contract() {
    return (
        <>
            <h2>Contact Form</h2><br></br>

            <h3>Send me your questions, comments, or suggestions!</h3><br></br>

            <h4>If you have a question or comment, you can contact me using the form below. 
            <Link to="/About">You can also find more info about me here.</Link></h4>

            
            <div className="container" id="signup">

                <h1 className="form-title">Contract Us</h1>
                <form method="post" >
                    <div className="input-group">
                        <input type="text" id="name" name="name" placeholder="Name" required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="email" id="email" name="email" placeholder="Email" required

                        />
                    </div>

                    <div >
                        <textarea rows="4" cols="60" id="description" placeholder="Description">
                        </textarea>
                    </div>

                    <button type='submit'>submit</button>
                </form>


            </div>
        </>
    )
}

export default Contract;