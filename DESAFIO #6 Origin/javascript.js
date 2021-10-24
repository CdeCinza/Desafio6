 const linksSocialMedia = {
    github: "CdeCinza",
    youtube: "Games EduUu",
    facebook: "Matheus Marques",
    instagram: "Matheus.Grongos",
    twitter: "Matheusjks2",
}
function changeSocialMedialLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/$
        {LinksSocialMedia.[social]}`
        
        alert(li.children[0].href)
    }

}
    /*changeSocialMedialLinks()*/

    function getGitHubProfileInfos(){
        const url= `https://api.github.com/users/${linksSocialMedia.github}`
    
        fetch(url)
        .then(response =>  response.json())
        .then(data => {
            userName.textContent = data.name
            UserBio.textContent = data.bio
            /*UserLink.href = data.html_url*/
        })
    }
    
    getGitHubProfileInfos()
