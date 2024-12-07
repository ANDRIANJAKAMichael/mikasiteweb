import React from "react";
import image2 from "../assets/img/pie-chart.png";
import image1 from "../assets/img/arranging-files.png";
import image3 from "../assets/img/sticky-note.png";

function Services() {
    const services = [
        {id: 1, title: "Membership Organisation", descroption: "Our membership management software provides full automation of membership renewals and payments", image: image1 },
        {id: 2, title: "National Associations", descroption: "Our membership management software provides full automation of membership renewals and payments", image: image2 },
        {id: 3, title: "Club and Group", descroption: "Our membership management software provides full automation of membership renewals and payments", image: image3 }
    ];

    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
            <div className="text-center my-8">
                <h2 className="text-4xl text-neutralDGrey font-semibold">Our Clients</h2>
                <p className="text-neutralDGrey">We have been working with some Fortune 500+ clients</p>

                <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                    <i className="mdi text-[#263238] mdi-air-conditioner mdi-48px"></i>
                    <i className="mdi text-[#263238] mdi-format-strikethrough-variant mdi-48px"></i>
                    <i className="mdi text-[#263238] mdi-xda mdi-48px"></i>
                    <i className="mdi text-[#263238] mdi-maxcdn mdi-48px"></i>
                    <i className="mdi text-[#263238] mdi-atom mdi-48px"></i>
                    <i className="mdi text-[#263238] mdi-apple mdi-48px"></i>
                    <i className="mdi text-[#263238] mdi-motorbike mdi-48px"></i>
                </div>
            </div>

            {/* service card */}
            <div className="mt-20 md:w-1/2 mx-auto text-center">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">Manage your entire community in a single system</h2>
                <p className="text-neutralDGrey">Who is Nextcent suitable for?</p>
            </div>

            {/* card */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {
                    services.map(service => (<div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-4 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
                            <div>
                                <div className="bg-[#E8F5E9] mb-4 h-24 mw-auto rounded-tl-3xl rounded-br-3xl text-center">
                                    <img className="w-32 h-auto" src={service.image} />
                                    <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">{service.title}</h4>
                                    <p className="text-sm text-neutralGrey">{service.descroption}</p>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
