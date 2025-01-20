import React from 'react'
import Card from './Card';

export default function Header() {
    const onChangeHandelar = (e) => {
        console.log(e.target.value);
    };

    const navigation = ["Home", "About", "Contact Us"]

    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">RK SHOP</a>
            </div>
            
            <div className="flex-none align-middle">

                <ul  className='flex '>
                    {
                        navigation.map((item) => <li><a className='p-5 btn btn-ghost' href="">{item}</a></li>)
                    }
                </ul>

                <div className='mr-5 ml-5 flex justify-center items-center'>
                    <input
                        onChange={(e) => onChangeHandelar(e)}
                        type="text" placeholder="Type here" className="input input-bordered input-secondary " />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 ml-2 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <Card></Card>


                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
