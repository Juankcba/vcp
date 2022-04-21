import React from "react";
import Head from "next/head";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <Head>
        <title>Muni carlos paz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="header container-fluid">
        <div className="header-nav">
          <img
            src="/assets/img/logo.png"
            alt="logo-muni"
            className="logo-muni"
          />

          <div className="navegacion">
            <nav>
              <Link href="/">
                <a>Inicio </a>
              </Link>
              <Link href="/institucional">
                <a>Institucional</a>
              </Link>
              <Link href="/actividades">
                <a>Actividades</a>
              </Link>
              <Link href="/noticias">
                <a>Noticias</a>
              </Link>
              <Link href="/galeria">
                <a>Galeria</a>
              </Link>
              <Link href="/contacto">
                <a>Contacto</a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
