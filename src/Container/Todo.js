import React , {Component} from 'react'
import Button from '../Component/Button'

function Todo(props){

    return (
        <div>
            <span>
                {props.id}: {props.value}
            </span>
        </div>
    )
}
export default Todo