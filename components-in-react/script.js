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
function Footer(){
    return (
        <footer>
            <h3>Developed by mughaltechlab with ♥</h3>
        </footer>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div>
    <Navbar />
    <MainContent />
    <Footer />
   </div>
//    ,
//    document.getElementById('root')
)