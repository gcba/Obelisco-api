import Image from '@models/image';

export const getHeaderComplete = async () => {
  try {
    const images = await Image.findAll();
    return {
      images,
    };
  } catch (error) {
    throw new Error('Error al obtener datos del header.');
  }
};

export const getHTML = () => {
  const HTML = `<div class="header-banner">
    <img
    class="header-banner-img"
    src='https://gcba.github.io/Obelisco-V2/images/header/logo_BA_banner.svg'

    alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
    />
    <p class="text-sm">Gobierno de la Ciudad de Buenos Aires</p>
</div>
<header class="o-header o-header_banner navbar" role="banner">
    <a href="#main" class="skip-to-main-content-link">
    Saltar al contenido principal
    </a>
    <div class="container header-container">
    <a href="https://www.estadisticaciudad.gob.ar/eyc/" class="navbar-brand">
        <img
        class="d-none d-xl-block"
        src='https://gcba.github.io/Obelisco-V2/images/logo_ba.svg'
        alt="LOGO BA"
        />
        <img
        class="d-xl-none"
        src='https://gcba.github.io/Obelisco-V2/images/logo_ba_mobile.svg'
        alt="LOGO BA"
        />
    </a>
    <div class="navbar-login-mobile">
        <a class="btn btn-lg btn-icon btn-outline-tertiary">
        <span class="material-symbols-rounded" aria-hidden="true">
            person
        </span>
        <span class="btn-text">Ingresar</span>
        </a>
    </div>
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent1"
        aria-controls="navbarContent1"
        aria-expanded="false"
        aria-label="Menú"
    ></button>
    <div class="collapse navbar-collapse" id="navbarContent1">
        <div class="navbar-content">
        <div class="navbar-sections">
            <nav>
                <p class="navbar-sections-title">Secciones</p>
                <ul class="nav nav-pills nav-sections">
                    <li class="nav-item">
                        <a class="nav-link nav-link-lg"
                        href="https://buenosaires.gob.ar/areasdegobierno"
                        >
                            <span>Áreas de gobierno</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-link-lg"
                        href="https://buenosaires.gob.ar/vicejefatura/ba-discapacidad"
                        >
                            <span>BA Discapacidad</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-link-lg" href="#">
                        <span>Trámites y servicios</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="navbar-search">
            <form class="form-search">
            <label for="header-search" class="form-label sr-only">
                Buscador
            </label>
            <div class="search-container">
                <input
                type="search"
                class="form-control input-search input-search-with-button"
                id="header-search"
                placeholder="Buscador"
                />
                <button class="reset" type="reset" aria-label="Borrar"></button>
                <button class="button-search" type="submit" aria-label="Buscar"></button>
            </div>
            </form>
        </div>
        <div class="navbar-login">
            <a class="btn btn-lg btn-outline-tertiary">
            <span class="material-symbols-rounded" aria-hidden="true">
                person
            </span>
            <span class="btn-text">Ingresar</span>
            </a>
        </div>
        </div>
    </div>
    </div>
    <div class="header-backdrop"></div>
  </header>`;

  const HTMLBase64 = Buffer.from(HTML, 'utf-8').toString('base64');

  // console.log('[HTMLBase64] ', HTMLBase64);

  return HTMLBase64;
};
