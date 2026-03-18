"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Linkedin } from "lucide-react";

const teamSections = [
  {
    title: "Management",
    members: [
      { name: "Srikar", role: "Product Analyst", image: "/team/srikar.png", linkedin: "https://www.linkedin.com/in/srikar-raj-46184b301/" },
      { name: "Griffin", role: "Talent Acquisition", image: "/team/mehtaab .jpeg", linkedin: "https://www.linkedin.com/in/mahetaab-griffin-40a748227/" },
      { name: "Aditya", role: "Management", image: "/team/aditya.png", linkedin: "#" },
      { name: "Anjana", role: "Management", image: "/images/team/Anjana.png", linkedin: "#" },
    ],
  },
  {
    title: "Developers",
    members: [
      { name: "Zuber", role: "AI & Automation Engineer", image: "/team/zuber.png", linkedin: "https://www.linkedin.com/in/muhammad-zuber-syed-0ba19426b/" },
      { name: "Ashvith Adepu", role: "AI & Automation Engineer", image: "/team/dominic.png", linkedin: "https://www.linkedin.com/in/adepuashvith/" },
      { name: "Sumanth G", role: "AI & Automation Engineer", image: "/team/sumanthgandesiri.jpeg", linkedin: "www.linkedin.com/in/sumanth-gandesiri" },
      { name: "Mohammed Aqib", role: "Devops Engineer", image: "/team/james.png", linkedin: "https://www.linkedin.com/in/mohammed-aqib-uddin-5495591b8/" },
      { name: "Shiva", role: "AI Engineer", image: "/team/shiva.png", linkedin: "linkedin.com/in/sivakumar-l-363907278/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      { name: "Suraj", role: "Backend Developer", image: "/team/suraj.jpeg", linkedin: "https://www.linkedin.com/in/sai-suraj-gummadi/" },
      { name: "Sumanth N", role: "Full Stack Developer", image: "/team/sumanthn.jpeg", linkedin: "https://www.linkedin.com/in/sumanth-nagapuri-324b65269/" },
      { name: "Sampath", role: "Frontend Developer", image: "/team/Sampath.jpeg", linkedin: "#" },
      { name: "ManojKumar", role: "Frontend Developer", image: "/team/manoj.png", linkedin: "https://www.linkedin.com/in/manojkumar-gopagani-1a7075373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Srinivas K", role: "Frontend Developer", image: "/team/srinivas .jpeg", linkedin: "https://www.linkedin.com/in/srinivas-kaviti-90960a376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { name: "Prem Kumar", role: "Full Stack Developer", image: "/team/Prem.jpeg", linkedin: "https://www.linkedin.com/in/prem-kumar-277966356" },
      { name: "Arun Sai", role: "Full Stack Developer", image: "/team/arun.jpeg", linkedin: "https://www.linkedin.com/in/arunsai-burra-69827b236" },
    ],
  },
  {
    title: "Design",
    members: [
      { name: "Dinesh", role: "UI/UX Designer", image: "/team/Dinesh.jpeg", linkedin: "https://www.linkedin.com/in/digital-dinesh-kumar/" },
      { name: "Gratian", role: "UI/UX Designer", image: "/team/Gratian.jpeg", linkedin: "https://www.linkedin.com/in/john-gratian-5577451a7/" },
    ],
  },
];

export default function TeamsPage() {

  return (
    <>
      <Header />

      <main className="pt-32">

        {/* DIRECTORS SECTION */}
        <section className="relative py-28 overflow-hidden">

          <img
            src="/decor/star.png"
            alt="star"
            className="absolute right-[18%] top-32 w-8"
          />

          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-24 items-start">

            {/* LEFT DIRECTORS */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 items-center">

              <div className="text-center">
                <Image
                  src="/directors/nithin.png"
                  alt="Nithin Varma"
                  width={240}
                  height={260}
                  className="rounded-[40px] object-cover"
                />
                <p className="mt-4 font-medium text-gray-900">Nithin Varma M</p>
                <p className="text-sm text-gray-500">Co-Founder</p>
                <div className="flex justify-center gap-3 mt-2 text-gray-500">
                  <Link href="https://www.linkedin.com/in/nithin-varma-mekala-a5a471188/" className="hover:text-[#0077B5] transition-colors">
                    <Linkedin size={16} />
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <Image
                  src="/directors/sai.png"
                  alt="Sai Kiran"
                  width={240}
                  height={260}
                  className="rounded-[40px] object-cover"
                />
                <p className="mt-4 font-medium text-gray-900">Sai kiran G L</p>
                <p className="text-sm text-gray-500">Co-Founder</p>
                <div className="flex justify-center gap-3 mt-2 text-gray-500">
                  <Link href="https://www.linkedin.com/in/saikiran193/" className="hover:text-[#0077B5] transition-colors">
                    <Linkedin size={16} />
                  </Link>
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


        {/* TEAM SECTIONS */}
        <section className="max-w-[1200px] mx-auto px-6 mt-28">
          <div>
            <p className="text-purple-600 text-sm font-medium">Our team</p>
            <h2 className="text-3xl font-semibold mt-3">Meet our team members</h2>
          </div>

          {teamSections.map((section) => (
            <div key={section.title} className="mt-16">
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{section.title}</h3>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-[#ff8c6b] to-transparent rounded-full" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-12 gap-y-16">
                {section.members.map((member) => (
                  <div
                    key={member.name}
                    className="flex flex-col items-center group"
                  >
                    <div className="relative w-36 h-36 mb-5">
                      <div className="absolute inset-0 rounded-full border-2 border-purple-100 group-hover:border-purple-300 transition-colors" />
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover p-1"
                      />
                    </div>

                    <div className="text-center w-full">
                      <h4 className="font-semibold text-gray-900 text-xl leading-tight">
                        {member.name}
                      </h4>
                      <p className="text-sm text-purple-600 font-medium mt-1">
                        {member.role}
                      </p>
                      <div className="flex justify-center gap-4 mt-3 text-gray-400 group-hover:text-gray-600 transition-colors">
                        <Link href={member.linkedin} target="_blank" className="hover:text-[#0077B5] transition-colors">
                          <Linkedin size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
