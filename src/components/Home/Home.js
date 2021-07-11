
import React from 'react'
import Youtube from '../Youtube/Youtube'


export default function Home() {
    return (
        <div>
         <Youtube 
         image='https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' 
         title='Ferari'
         desc='Mobil Ferari dengan kualitas yang sangat bagus'
         />
         <Youtube 
         image='https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFtYm9yZ2hpbml8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
         title='lamborgini'
         desc='lamborgini mobil sport dengan kualitas yang sangat bagus'
         
         />
         <Youtube
         image='https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVyY2VkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
         title='mercedes'
         desc='mercedes mobil dengan kualitas high dengan support penuh dari persepakbola indonesia'
         />
        
        </div>
    )
}
