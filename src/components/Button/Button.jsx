import PropTypes from 'prop-types';
import "./index.css"
const  Button = ({title, clasName}) => {
    
    return(
        <button className={clasName}><span>{title}</span></button>
    )
}

Button.propTypes = {
    title : PropTypes.string,
    clasName: PropTypes.string
};

export {Button}