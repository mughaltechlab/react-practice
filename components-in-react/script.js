function Navbar(){
    return (
        <h1>Header</h1>
    )
}

function MainContent(){
    return (
        <main>
            <h3>Main Content</h3>
        <p>
            I am LoneWolf who is learning react now in 2024
        </p>
        </main>
    )
}
ReactDOM.render(
   <div>
     <Navbar />
    <MainContent />
   </div>
   ,
   document.getElementById('root')
)