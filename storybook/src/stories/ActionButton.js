import PropTypes from 'prop-types';
import { UserCircle } from "@phosphor-icons/react";

const ActionButton = ({ children, onClick, type, displayType, size, Reverse }) => {
  const buttonStyles = {
    backgroundColor: displayType === 'green' ? 'green' : 'transparent',
    color: displayType === 'Text only' || displayType === 'Icon with text' || type === 'Default' ? 'green' : 'black',
    display: displayType === 'Icon only' ? 'flex' : 'inline-flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    fontSize: size === 'Small' ? '24px' : size === 'X-Small' ? '22px' : '28px'
  };

  let iconColor = 'green';

  if (type === 'Neutral') {
    buttonStyles.backgroundColor = 'grey';
    buttonStyles.color = 'black';
    iconColor = 'black';
  } else if (type === 'Reverse') {
    buttonStyles.backgroundColor = 'black';
    buttonStyles.color = 'white';
    iconColor = 'white';
  }

let iconSize = 28;
if (size==='Small'){
  iconSize = 24
}else if (size==='X-Small'){
  iconSize = 22
}

if(Reverse==='Default' || Reverse==='Hover'){
  buttonStyles.backgroundColor = 'black';
  buttonStyles.color='white'
}else if(Reverse==='Disabled'){
  buttonStyles.backgroundColor='black';
  buttonStyles.color='grey'
}

  const iconComponent = (displayType === 'Icon with text' || displayType === 'Icon only') ? <UserCircle size={iconSize} color={iconColor} /> : null;

  const buttonText = (displayType !== 'Icon only' && (type === 'Default' || type === 'Neutral' || type === 'Reverse')) ? 'Action' : null;

  return (
    <button style={buttonStyles} onClick={onClick}>
      {iconComponent}
      {buttonText && <span style={{ color: buttonStyles.color }}>{buttonText}</span>}
      {children}
    </button>
  );
};

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['Default', 'Neutral', 'Reverse', 'hover', 'default small status', 'size icon only', 'icon']),
  displayType: PropTypes.oneOf(['default', 'green', 'Text only', 'Icon with text', 'Icon only']),
  size: PropTypes.oneOf(['Default', 'Small', 'X-Small']),
  Reverse: PropTypes.oneOf(['Default', 'Hover', 'Disabled']),
};

ActionButton.defaultProps = {
  type: 'Default',
  displayType: 'default',
  size: 'Default',
  Reverse: 'Default'
};

export default ActionButton;
