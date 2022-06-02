import styled from 'styled-components';
import { ChangeEvent } from 'react';
import useToggle from '../hooks/useToggle';

type propsType = {
  on: boolean,
  onChange: (e:ChangeEvent<HTMLInputElement>)=> void,
}

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div`
  width: 64px;
  height: 30px;
  padding: 2px;
  border-radius: 15px;
  background-color: #ccc;
  box-sizing: border-box;
  transition: background-color 0.2s ease-out;


  &:after{
    content: '';
    position: relative;
    left: 0;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.2s ease-out;
  }
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + div{
    background-color: lightgreen;
  }

  &:checked + div:after{
    left: calc(100% - 26px)
  }
`;

const Toggle = ({
  on = false, onChange, ...props
}:propsType) => {
  const [checked, toggle] = useToggle(on) as [boolean, ()=>void];

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    toggle();
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(e);
  };

  return (
    <ToggleContainer {...props}>
      <ToggleInput checked={checked} onChange={handleChange} type="checkbox" />
      <ToggleSwitch />
    </ToggleContainer>
  );
};

export default Toggle;
