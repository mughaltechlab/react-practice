import React from "react";

function Nav(){
    return (
        <nav className="flex justify-between items-center px-5  shadow h-16 bg-white">
            <a href="" className="brand text-slate-700 font-bold">MughalTechLab</a>
            <ul className="flex gap-2">
                <li className=""><a className="" href="">HOME</a></li>
                <li className=""><a className="" href="">PROJECTS</a></li>
                <li className=""><a className="" href="">GITHUB</a></li>
                <li className=""><a className="" href="">CONTACT</a></li>
            </ul>
        </nav>
    )
}

export default Nav