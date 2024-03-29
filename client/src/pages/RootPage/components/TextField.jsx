import { useRef } from 'react';
import { useTextField } from 'react-aria';

export default function TextField(props) {
  let { label } = props;
  let ref = useRef(null);
  let { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div className='text-field'>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />

      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: 'red' }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}
