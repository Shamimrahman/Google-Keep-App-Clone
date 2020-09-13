import React from 'react'

function Footer() {

    let year=new Date().getFullYear()
    return (
        <>
        <footer className="container">

        <p>Copy Right by {year}</p>
        
        </footer>
            
        </>
    )
}

export default Footer
