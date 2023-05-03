import React, {useRef} from "react";
import { useTextField } from "react-aria";

export default function TextField(props) {
    let { label } = props;
    let ref = React.useRef(null);
    let { labelProps, inputProps, descriptionProps, errorMessageProps } = 
        useTextField(props, ref);

    return (
        <div>
            <label {...labelProps}>{label}</label>
            <input {...inputProps} ref={ref} />
            
            {props.errorMessage && (
                <div {...errorMessageProps} style={{ color: 'red' }}>
                    {props.errorMessage}
                </div>
            )}
        </div>
    )
}