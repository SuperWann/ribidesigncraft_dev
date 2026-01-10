import React from "react";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-gray-900 text-secondary py-10 px-5 md:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-8 md:flex-row md:justify-between">
                        <div className="md:w-2/5">
                            <h4 className="text-xl font-bold mb-5">
                                Ribi Design & Craft
                            </h4>
                            <p className="leading-relaxed text-justify">Mengubah Imajinasi Menjadi Karya Nyata.
Kami menghadirkan sentuhan personal lewat karya handmade yang unik dan bermakna. Dengan bahan premium dan dedikasi penuh, kami menciptakan produk eksklusif yang estetik karena bagi kami, kepuasan Anda adalah prestasi tertinggi kami.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-5">
                                Tautan Cepat
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/" className="hover:underline">
                                        Beranda
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/belanja"
                                        className="hover:underline"
                                    >
                                        Belanja
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/testimoni"
                                        className="hover:underline"
                                    >
                                        Testimoni
                                    </a>
                                </li>
                                {/* <li>
                                    <a
                                        href="/about-us"
                                        className="hover:underline"
                                    >
                                        {t("nav.about")}
                                    </a>
                                </li> */}
                                {/* <li>
                                    <a href="/news" className="hover:underline">
                                        {t("nav.news")}
                                    </a>
                                </li> */}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-5">
                                Kontak
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span>
                                        Jl. Raya Kalisetail, RT.04/RW.04,
                                        <br />
                                        Dusun Tegalyasan, Tegalarum, Kec. Sempu,
                                        <br />
                                        Kabupaten Banyuwangi, Jawa Timur 68468
                                    </span>
                                </li>
                                <ul>
                                    {" "}
                                    <li className="flex items-start">
                                        <span>0812-3154-4621</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span>dwirimayustitia@gmail.com</span>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 pt-5 text-left border-t border-secondary/10">
                        <p>2025 Ribi Design & Craft. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
