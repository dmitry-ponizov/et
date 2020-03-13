import React, { useRef, useEffect, useState } from 'react'
import { InputDelayStyled, Error } from './styled';

const InputDelay = ({value, onChangeHandler, validateHandler, placeholder, type, error}) => {
    const [loaded, setLoading] = useState(false);
    const inputRef = useRef()
    useEffect(() => {
        const timer = setTimeout(() => {
             if(value === inputRef.current.value && loaded) {
                validateHandler() 
             }
         }, 1000)
         
         setLoading(true)
         return () => {
             clearTimeout(timer)
         }
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [value])

    return(
        <InputDelayStyled>
            <input  value={value} ref={inputRef} onChange={onChangeHandler} placeholder={placeholder} type={type}/>
            {error && <Error>{error}</Error>}
        </InputDelayStyled>
    )
}

export default InputDelay;