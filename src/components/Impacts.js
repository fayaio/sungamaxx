import React from 'react';

const Details = ({
  darkimpact,
  coloredimpact,
  company,

  work,
}) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl flex text-darkGrey">
          {darkimpact}&nbsp;{' '}
          <p className="!text-lightPurple">{coloredimpact}</p>
        </h3>
        <span className="capitalize font-medium text-lightPurple/75">
          {company}
        </span>
        <p className="font-medium text-pcolor w-full">{work}</p>
      </div>
    </li>
  );
};

const Impacts = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center "> Impacts</h2>

      <div className="w-[75%] mx-auto relative">
        <div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />

        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            darkimpact="Environmental"
            coloredimpact="Impact"
            company="Sungamax Nigeria Ltd."
            work="Protecting the environment for future generations is our responsibility. We want to protect the environment to ensure economic and social stability within our communities for generations to come."
          />
          <Details
            darkimpact="Socioeconomic"
            coloredimpact="Impact"
            company="Sungamax Nigeria Ltd."
            work="SUNGAMAX has to adopt practical solutions that are tailored to the needs and barriers existing in the region. Providing financial and community support for our partners and communities.
"
          />
          <Details
            darkimpact="People"
            coloredimpact="and Culture"
            company="Sungamax Nigeria Ltd."
            work="At SUNGAMAX, we recognise that people are at the core of our ability to achieve our mission."
          />
          <Details
            darkimpact="Human"
            coloredimpact="Capital Development"
            company="Sungamax Nigeria Ltd."
            work="We value all our employees and are invested in helping them to grow, improve and develop. We recognise that this is vital to the growth and productivity of SUNGAMAX."
          />

          <Details
            darkimpact="Diversity"
            coloredimpact="and Inclusion"
            company="Sungamax Nigeria Ltd."
            work="SUNGAMAX BUSINESSES are committed to empowering diverse voices in our organisation and ensuring that our employees feel safe, respected and included.
"
          />

          <Details
            darkimpact="Economic"
            coloredimpact="Empowerment"
            company="Sungamax Nigeria Ltd."
            work="From bringing traditional offline businesses online to providing our partners with more income opportunities, SUNGAMAX is constantly seeking ways to make a positive impact on our communities.
"
          />
        </ul>
      </div>
    </div>
  );
};

export default Impacts;
