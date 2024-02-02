function Links({ github, linkedin }){

    
    // console.log(github)

    return(
    <footer>
        <h3>Links</h3>
        <a href={ github }>{ github }</a>
        <a href={ linkedin }>{ linkedin }</a>
    </footer>    
    )
}

export default Links