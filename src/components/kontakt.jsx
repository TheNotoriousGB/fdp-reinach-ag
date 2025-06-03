import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

const ContactItem = ({ icon: Icon, title, content }) => (
  <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-4 items-center text-center">
    <div className="flex gap-5 items-center mb-4 justify-center">
      {Icon && <Icon className="w-8 h-8 text-indigo-900" />}
      <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
    </div>
    <div className="text-base md:text-lg leading-relaxed">{content}</div>
  </div>
);

const ContactInfoOnly = () => {
  const contactData = [
    {
      icon: PhoneIcon,
      title: "Telefon",
      content: <>062 551 51 51</>,
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      content: <>thomas.huber@fdp-reinachag.ch</>,
    },
    {
      icon: MapPinIcon,
      title: "Adresse",
      content: (
        <>
          FDP Reinach AG <br />
          c/o HSR GmbH Mellastrasse 3 <br />
          5734 Reinach AG <br />
          Switzerland
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f4ff] via-white to-[#cce6ff] py-6 px-1">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-3 sm:p-8 mx-auto">
        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-8">
          {contactData.map(({ icon, title, content }, index) => (
            <ContactItem key={index} icon={icon} title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoOnly;
