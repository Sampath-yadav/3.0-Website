"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Linkedin, Github, Twitter } from "lucide-react";

const teamMembers = [
  { name: "Dinesh", role: "APM", image: "/team/Dinesh.jpeg" },
  { name: "Zuber", role: "Full Stack Developer", image: "/team/zuber.png" },
  { name: "Ashvith Adepu", role: "Full Stack Developer", image: "/team/dominic.png" },
  { name: "Griffin", role: "Talent Acquisition", image: "/team/mehtaab .jpeg" },
  { name: "Sumanth G", role: "Full Stack Developer", image: "/team/sumanthgandesiri.jpeg" },
  { name: "Mohammed Aqib Uddin", role: "Full Stack Developer", image: "/team/james.png" },
  { name: "Gratian", role: "UI/UX Designer", image: "/team/Gratian.jpeg" },
  { name: "Srikar", role: "Product Analyst", image: "/team/srikar.png" },
  { name: "Shiva", role: "Full Stack Developer", image: "/team/shiva.png" },
  { name: "Suraj", role: "Full Stack Developer", image: "/team/suraj.jpeg" },
  { name: "Sumanth N", role: "Full Stack Developer", image: "/team/sumanthn.jpeg" },
  { name: "Sampath", role: "Full Stack Developer", image: "/team/Sampath.jpeg" },
];

export default function TeamsPage() {
  return (
    <>
      <Header />

      <main className="pt-32">

        {/* DIRECTORS SECTION */}
        <section className="relative py-28 overflow-hidden">

          {/* star decoration */}
          <img
            src="/decor/star.png"
            alt="star"
            className="absolute right-[18%] top-32 w-8"
          />

          

          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-24 items-start">

            {/* LEFT DIRECTORS */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 items-center">

              {/* Director 1 */}
              <div className="text-center">
                <Image
                  src="/directors/nithin.png"
                  alt="Nithin Varma"
                  width={240}
                  height={260}
                  className="rounded-[40px] object-cover"
                />

                <p className="mt-4 font-medium text-gray-900">
                  Nithin Varma M
                </p>

                <p className="text-sm text-gray-500">
                  Co-Founder
                </p>

                <div className="flex justify-center gap-3 mt-2 text-gray-500">
                  <Twitter size={16} />
                  <Linkedin size={16} />
                </div>
              </div>

              {/* Director 2 */}
              <div className="text-center">
                <Image
                  src="/directors/sai.png"
                  alt="Sai Kiran"
                  width={240}
                  height={260}
                  className="rounded-[40px] object-cover"
                />

                <p className="mt-4 font-medium text-gray-900">
                  Sai kiran G L
                </p>

                <p className="text-sm text-gray-500">
                  Co-Founder
                </p>

                <div className="flex justify-center gap-3 mt-2 text-gray-500">
                  <Twitter size={16} />
                  <Linkedin size={16} />
                </div>
              </div>

            </div>

            {/* RIGHT TEXT */}
            <div className="text-center md:text-left mt-16">

              <h1 className="text-[32px] sm:text-[45px] font-medium leading-[1.1] tracking-tight text-[#1a1a1a]">
                Meet the creative minds
              </h1>

              <h2 className="text-[32px] sm:text-[45px] mt-4 font-medium text-[#1a1a1a]">
                Our Directors
              </h2>

            </div>

          </div>
        </section>


        {/* TEAM SECTION */}
        <section className="max-w-[1200px] mx-auto px-6 mt-28">

          <div className="grid md:grid-cols-12 gap-20">

            {/* LEFT TEXT */}
            <div className="md:col-span-4">

              <p className="text-purple-600 text-sm font-medium">
                Our team
              </p>

              <h2 className="text-3xl font-semibold mt-3">
                Meet our team members
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Complete the form below to send us a message.
                Our support team will promptly respond to your request.
              </p>

            </div>


            {/* RIGHT TEAM GRID */}
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">

              {teamMembers.map((member, i) => (
                <div key={i} className="flex flex-col items-center group">

                  <div className="relative w-28 h-28 mb-5">
                    <div className="absolute inset-0 rounded-full border-2 border-purple-100 group-hover:border-purple-300 transition-colors" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover p-1"
                    />
                  </div>

                  <div className="text-center w-full">
                    <h4 className="font-semibold text-gray-900 text-lg leading-tight">
                      {member.name}
                    </h4>

                    <p className="text-sm text-purple-600 font-medium mt-1">
                      {member.role}
                    </p>

                    <div className="flex justify-center gap-4 mt-3 text-gray-400 group-hover:text-gray-600 transition-colors">
                      <Github size={18} className="cursor-pointer hover:text-black transition-colors" />
                      <Twitter size={18} className="cursor-pointer hover:text-[#1DA1F2] transition-colors" />
                      <Linkedin size={18} className="cursor-pointer hover:text-[#0077B5] transition-colors" />
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>


        {/* CTA SECTION */}
        <section className="relative py-36 text-center px-6 mt-32 overflow-hidden">

        

          <div className="max-w-3xl mx-auto">

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              Engineering intelligent systems for
              <br />
              ambitious brands
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Ready to move beyond ordinary software? We design scalable
              products, AI-driven workflows, and autonomous agents that
              engage users and streamline operations.
            </p>

            <Link href="/contact-us">
              <button className="mt-8 bg-black text-white px-7 py-3 rounded-full hover:opacity-90 transition">
                Let&apos;s Collaborate ↗
              </button>
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
