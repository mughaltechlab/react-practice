const title = <h1>Hello Lonewolf</h1>;
// const MyList = ()=>(
//         <ul>
//             <li>one</li>
//             <li>two</li>
//         </ul>
//     )

// const navBar = (
//     <nav className = 'nav'>
//         <h1 className='brand-title'>Lonewolf</h1>
//         <ul className='menu'>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// const page = (
//     <div>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I Love React</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's hireable a skill</li>
//             <li>It's actively maintained by skill people</li>
//         </ol>
//     </div>
// )


// todo: BUILD REACT INFO WEBSITE

const ReactLogo = ()=>(<img src='./logo.png' width='40px' />);

const MyTitle = ()=>(<h1 className='heading'>Fun facts about React</h1>);
const MyUl = ()=>(
    <ul className = 'info'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
);

const Menu = ()=>(
    <ul className='menu'>
        <li className='menu-links'>Pricing</li>
        <li className='menu-links'>About</li>
        <li className='menu-links'>Contact</li>
    </ul>
);

const Header = ()=>(
    <header>
        <nav>
            <ReactLogo />
            <Menu />
        </nav>
    </header>
)
const MainContent = ()=>(
    <main>
        <MyTitle />
        <MyUl />
    </main>
)

const date = new Date();

const Footer = ()=>(
    <footer>
        <small>&copy;{date.getFullYear()} mughaltechlab development</small>
    </footer>
)
function MyPage(){
    return (
        <div className='container'>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.render(<MyPage />, root);