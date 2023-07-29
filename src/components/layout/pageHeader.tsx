import React from 'react';

const Header = ({pageTitle}) => {
    return (
        <main>
            <div className='bg-gray-100 py-8'>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{pageTitle}</h1>
                        </div>
                    </header>
                </div>
            </div>
        </main>
    )
}

export default Header;
