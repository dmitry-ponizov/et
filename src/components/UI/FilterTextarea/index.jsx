import React, { useEffect, useRef } from 'react'
import { Label, FilterTextareaStyled } from './styled';
import {  Form } from 'semantic-ui-react'

const FilterTextarea = ({ title, placeholder, messageHandler, value, validateHandler, rtl}) => {
    const textareaRef = useRef()

    useEffect(() => {
       const timer = setTimeout(() => {
            if(value === textareaRef.current.value) {
                validateHandler()
            }
        }, 500)
        return () => {
            clearTimeout(timer)
        }
    }, [value, validateHandler, textareaRef])
    const textareaValue = (typeof value === 'boolean') ? '' : value
    return (
        <FilterTextareaStyled>
            <Label rtl={rtl}><div>{title}:</div></Label>
            <Form>
                <textarea ref={textareaRef} placeholder={placeholder} rows="6" value={textareaValue} onChange={messageHandler}/> 
            </Form>
        </FilterTextareaStyled>
    )
}
export default React.memo(FilterTextarea);