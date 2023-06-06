import '../styles/Notification.css';

function Notification ({ type, message }) {
    return(
        <div className={ type }>
            <p>{ message }</p>
        </div>
    );
};

export default Notification;