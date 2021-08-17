import React from 'react';

const Google = ({children, ...otherProps}) => {
    return (
        <button className="btn btn-social btn-google" { ...otherProps}> { children }</button>
    )
}

export default Google;
