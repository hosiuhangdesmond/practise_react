import './HelloForm.css'; 

const HelloForm = ({name, onNameChange, onSubmit}) => {
    const handleSubmit = (e) => {
        e.preventDefault();  // prevent default form submission
        onSubmit();          // call the function passed by the parent
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Enter name</label>
                <input type="text" id="name" name="name" 
                    value={name}
                    onChange={onNameChange}
                    autoFocus
                />
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default HelloForm;