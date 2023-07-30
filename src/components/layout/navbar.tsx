import React from "react";
import { Disclosure } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";

const navigation = [
    { name: 'Meal Planner', href: '/recipes', current: location.pathname === '/recipes' },
    { name: 'Groceries', href: '/groceries', current: location.pathname === '/groceries' },
  ]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800 flex flex-wrap w-full">
            {({ open }) => (
            <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <SparklesIcon className="h-8 w-8 text-neutral-200" aria-hidden="true" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                        >
                                        {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
            
                        <div className="-mr-2 flex md:hidden">        
                                {/* Mobile menu button */}
                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        {navigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Disclosure.Button>
                        ))}
                    </div>
                </Disclosure.Panel>
            </>
            )}
        </Disclosure>
    )
}

export default Navbar;