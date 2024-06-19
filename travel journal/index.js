import React from "react"
import ReactDOM from "react-dom"
//import App3 from "./App3"
import App3 from "./App3"

//import Header from "./Header"
//import Footer from "./Footer"
//import MainContent from "./MainContent"
//import App2 from "./App2"






//ReactDOM.render(
//<ul> 
/*<li> List 1 </li>
<li> List 2 </li>
<li> List 3 </li>
<li> List 4 </li>
</ul>
,
document.querySelector("#root")) */

/*const h1 = document.createElement("h1")
h1.textContent = "This is an impreative way to program"
h1.className = "header"
document.getElementById("root").append(h1)*/

/*const page = (
    <div>
       <h1 className="header"> This is JSX </h1>
        <p> This is paragraph </p>
</div>  
)

ReactDOM.render(
   page ,
document.getElementById("root")



)*/

/*const navbar = (
    <nav>
    <h1> Bob's Bestro </h1>
     <ul>
     <li> Menu </li>
     <li> About </li>
     <li> Contact </li>
     </ul>
     
    </nav>
 
)

ReactDOM.render(navbar,document.getElementById("root"))*/

/*const page = (
    <div>
    <h1> This is my awesome website in react ! </h1>
    <h3> Reasons i love react </h3>
    <ol>
    <li> Its composable </li>
    <li> Its declarative </li>
    <li> its a hireable Skill </li>
    <li> Its actively maintained by skilled people </li>
    </ol>
    </div>
   
)
 ReactDOM.render(page, document.getElementById("root"))
//document.getElementById("root").append(page) */

/*const page = (
  <div>
 <img src = "images/React.png" width="45px" class="img"  />
  <h1> Fun facts about react </h1>
  <ul> 
      <li> Was first released in 2013 </li>
      <li> was originally created by Jorden Walke </li>
      <li> Has well over 100k stars on git-hub </li>
      <li> Is maintained by facebook </li>
      <li> Powers thousands of enterprise apps, including mobile apps </li>
  </ul>
  
  
  </div>  
    
)

ReactDOM.render(page,document.getElementById("root")) */

/*function TemporaryName(){
            return (
      <div>
 <img src = "images/React.png" width="45px" class="img"  />
  <h1> Fun facts about react </h1>
  <ul> 
      <li> Was first released in 2013 </li>
      <li> was originally created by Jorden Walke </li>
      <li> Has well over 100k stars on git-hub </li>
      <li> Is maintained by facebook </li>
      <li> Powers thousands of enterprise apps, including mobile apps </li>
  </ul>
  
  
  </div>  
    
     )
}

ReactDOM.render(TemporaryName(),document.getElementById("root"))*/



/*function App() {
    return(
     <div>
         <Header />
         <MainContent />
          <Footer/>
     </div>
    )
} */


//ReactDOM.render(<App2 />,document.getElementById("root")) 

/*function App(){
    
        const Firstname = "joe"
        const Lastname = "schmoe"
        
        return(
        
        <h1> Hello {Firstname} {Lastname}!</h1>
        
        
    )  
} */

/*function App(){
   
   const date = new Date()
    return(
        <h1> It is Currently about {new Date().getHours() % 12} o'clock </h1>
    )  
}

ReactDOM.render(<App /> , document.getElementById("root")) */

//ReactDOM.render(<App3/>,document.getElementById("root"))



/*const num = [1,2,3,4,5,6]

const square = num.map(function(item) {
 return item 
     }                                                this function is use to return the index 
   )                                                   number in the react.
   
   console.log(square) */
   
   
   
   
   
/*const names = ["alice","bob","charlie","danielle"]

const uppercase = names.map((name) => {                                 
    return name[0].toUpperCase() + name.slice(1)      this function is used to return a string 
})

console.log(uppercase)      */  
 
   /* const pokemon = ["bulbasaur", "charmander","squirtle"]     used to display the text inside 
    
    const elements = pokemon.map( mon => `<p>${mon}</p>`)            the paragraph tag 
    
    console.log(elements) */
    
    
    ReactDOM.render (<App3 />, document.getElementById("root"))