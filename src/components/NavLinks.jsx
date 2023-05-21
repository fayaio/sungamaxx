/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import Link from 'next/link';
import { links } from './MyLinks';

const NavLinks = ({ onSubMenuClick }) => {
  const [heading, setHeading] = useState('');
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left cursor-pointer group">
            <h1
              className="py-7 flex justify-between uppercase items-center md:pr-0 pr-5 group
              sm:text-base  hover:text-lightPurple
              "
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading('')
              }
            >
              <Link
                className="!font-semibold  hover:text-lightPurple"
                href={link.link}
              >
                {link.name}
              </Link>
              <span className="text-xl msd:hidden inline  hover:text-lightPurple">
                <ion-icon
                  name={`${
                    heading === link.name ? 'chevron-up' : 'chevron-down'
                  }`}
                ></ion-icon>
              </span>

              <span
                className="text-xl msd:mt-1 msd:ml-2  msd:block hidden group-hover:rotate-180
              group-hover:-mt-2
              "
              >
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>

            {link.submenu && (
              <div>
                <div className=" absolute top-14  hidden group-hover:msd:block hover:msd:block ">
                  <div className="py-1">
                    <div className="w-4 h-4 left-3 absolute bg-lightPurple rotate-45  "></div>
                  </div>
                  <div className="bg-lightPurple py-2 rounded-lg ">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        {mysublinks.sublink.map((slink) => (
                          <div className="hover:bg-logo py-[1px]">
                            <li className="text-base text-left px-8 text-white my-4 ">
                              <Link
                                href={slink.link}
                                className=" hover:text-footerbg font-light"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* MOBLIE NAV */}
          <div
            className={`
          ${heading == link.name ? 'msd:hidden' : 'hidden'}
          `}
          >
            {link.sublinks.map((slinks) => (
              <div className="">
                <div className="">
                  {slinks.sublink.map((slink) => (
                    <li className="py-3 pl-7 hover:bg-logo hover:text-white">
                      <Link
                        href={slink.link}
                        className="text-base  hover:text-white "
                        onClick={onSubMenuClick}
                      >
                        {slink.name}
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
