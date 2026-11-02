import './HelloDisplay.css'; 

const HelloDisplay = ({msg, errorMsg}) => (
    <div className="hello-display">
        <p className={errorMsg ? 'error' : ''}>
            {errorMsg ? errorMsg : msg}
        </p>
    </div>
);

export default HelloDisplay;