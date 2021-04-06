import '@material/button/dist/mdc.button.css';

export const createButton = ({
  type = 'outlined',
  ripple,
  label,
  onClick,
}) => {
  const buttonElement = document.createElement('button');
  buttonElement.addEventListener('click', onClick);

  buttonElement.classList.add('mdc-button');
  switch (type) {
    case 'outlined':
      buttonElement.classList.add('mdc-button--outlined');
    case 'raised':
      buttonElement.classList.add('mdc-button--raised');
  }

  if (ripple) {
    const rippleElement = document.createElement('span');
    rippleElement.classList.add('mdc-button__ripple');
    buttonElement.append(rippleElement);
  }

  const labelElement = document.createElement('span');
  labelElement.innerText = label;
  labelElement.classList.add('mdc-button__label');
  buttonElement.append(labelElement);

  return buttonElement;
};
