import React, { useState } from 'react';

export default function useInput(initValue) {
    const [ value, setValue ] = useState(initValue);

    const onValueChange = e => setValue(e.target.value)

    return {
        value,
        setValue,
        onValueChange
    };
}