import {useState} from "react";
const AddContact = (props) => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        if(email==="" || name===""){
            return alert("All the fields are mandatory!");
        }
        props.addContactHandler({name: name, email: email});
        setEmail("");
        setName("");
    }
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={handleFormSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button className="ui button blue">Add Contact</button>
            </form>
        </div>
    );
}
export default AddContact;
