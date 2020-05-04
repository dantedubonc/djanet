<template>
  <div id="wrap">
    <!--[if lt IE 9]>
      <p class="browserupgrade">
        Sie verwenden einen <strong>stark veralteten</strong> Browser. Bitte
        <a href="http://browsehappy.com/">aktualisieren Sie Ihren Browser</a>
        für ein besseres Surferlebnis. <br /><br />
        You are using an <strong>outdated</strong> browser. Please
        <a href="http://browsehappy.com/">upgrade your browser</a> to improve
        your experience.
      </p>
    <![endif]-->

    <!-- NAV BAR BLOCK -->

    <nav
      class="navbar navbar-expand-lg navbar-ligth custom-toggler navbar-fixed-top navbar-collapse justify-content-right"
    >
      <div class="container spy-navbar">
        <!-- Brand -->

        <a class="navbar-brand" href="#"></a>
        <!-- Toggler/collapsibe Button -->
        <button
          class="navbar-toggler"
          style="color:#0088bd"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#unkrautvernichtung"
                >{{ $t('internalLinks.unkrautvernichtung') }}<br />
                <br
              /></a>
            </li>

            <li class="nav-item ">
              <a class="nav-link pipe " href="#angebot"
                >{{ $t('internalLinks.angebot') }}<br
              /></a>
            </li>
            <li class="nav-item ">
              <a class="nav-link pipe" href="#vorteile">{{
                $t('internalLinks.vorteile')
              }}</a>
            </li>
            <li class="nav-item  ">
              <a class="nav-link pipe" href="#anwendungen">{{
                $t('internalLinks.anwendungen')
              }}</a>
            </li>
            <li class="nav-item  ">
              <a class="nav-link pipe" href="#kontakt">{{
                $t('internalLinks.kontakt')
              }}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link dynajet-site-link"
                href="https://www.dynajet-france.fr/"
                target="_blank"
                >{{ $t('externalLinks.dynajetSite') }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="container-fluid" id="start">
      <div class="section-intro container">
        <div class="col-xs-12 col-sm-8 col-md-6">
          <h1 class="page-title editContent" data-selector="h1" style="">
            {{ $t('pageTitle.title') }}<br />
          </h1>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-6">
          <a title="zum Seitenanfang" class="brand" id="brand-logo" href="#top"
            ><img
              class="img-responsive"
              alt="Logo: Dynajet"
              src="~assets/images/dynajet.svg"
              data-selector="img"
              style="width: 297px; height: 60px; border-radius: 0px; border-color: rgb(0, 81, 113); border-style: none; border-width: 1px;"
          /></a>
        </div>
      </div>
      <div class="para"></div>
      <!-- <div class="section-header parallax-cust" data-parallax="scroll">
        <img style="width:100%" src="~assets/images/DYNAJET-Unkrautvernichtung-01-web_test.jpg" />
      </div> -->
    </section>

    <section class="container-fluid" id="unkrautvernichtung">
      <!-- start - Section Anwendung -->
      <div class="bg-custom container-fluid">
        <div class="container">
          <p class="kicker h1 editContent">
            {{ $t('Anwendung.pageTitle1') }}
          </p>
          <h2 class="nobg-icon-stop-uhr editContent">
            {{ $t('Anwendung.pageTitle2') }}<br />
          </h2>
        </div>
      </div>
      <div class="container">
        <p class="lead editContent">{{ $t('Anwendung.pageTitle3') }}<br /></p>
        <p class="editContent">
          {{ $t('Anwendung.pageTitle4') }}<br />
          <br />
          {{ $t('Anwendung.content1') }}
          <a
            href="https://www.dynajet-france.fr/hochdruckreiniger/1480010w?set_language=fr"
            target="_blank"
          >
            {{ $t('Anwendung.link') }}</a
          >
          {{ $t('Anwendung.content2') }}
          <a
            href="https://www.dynajet-france.fr/zubehoershop/547855w?set_language=fr"
            target="_blank"
          >
            {{ $t('Anwendung.link2') }}</a
          >
          {{ $t('Anwendung.content3') }}<br />
          <br />
        </p>
      </div>
    </section>
    <!-- VIDEO BLOCK -->
    <section class="bg-custom container-fluid" id="vorteile-video">
      <div class="container">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2qKtHkYGYBQ"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
    <!-- PRODUKTE BLOCK -->
    <section
      class="container-fluid"
      id="angebot"
      style="background-image: none; padding-top: 0px; padding-bottom: 0px; background-repeat: repeat; background-attachment: scroll; border-bottom-color: rgb(51, 51, 51); border-bottom-width: 0px; background-size: auto; background-color: rgb(255, 255, 255);"
    >
      <div class="bg-custom-lighter container-fluid">
        <div class="icon-maschine-gross container">
          <h2 class="editContent">
            <strong
              ><br />{{ $t('produkte.title1') }}<br />
              {{ $t('produkte.title1_2') }}
            </strong>
          </h2>
        </div>
      </div>
    </section>
    <section class="bg-custom container-fluid">
      <div class="bg-custom container-fluid">
        <div class="icon-plus container">
          <h2 class="editContent">
            <strong> {{ $t('produkte.content1') }}</strong
            ><br />
          </h2>
          <ul class="fs-large editContent">
            <li>
              {{ $t('produkte.content2_1') }}
            </li>
            <li>
              {{ $t('produkte.content2_2') }}
            </li>
          </ul>
          <h4>
            <br />
            <a href="#kontakt" data-selector="nav a">{{
              $t('produkte.content2_3')
            }}</a>
            &gt;<br />
            <a
              href="https://www.dynajet-france.fr/hochdruckreiniger/1480010w?set_language=fr"
              target="_blank"
            >
              {{ $t('produkte.content2_4') }}</a
            >
            &gt;
          </h4>
        </div>
      </div>
    </section>

    <!-- PRODUKTE BILDER	-->
    <div class="icon-maschine-klein container">
      <h2 class="editContent"></h2>
      <p class="editContent"></p>
      <div class="row">
        <div>
          <a
            target="_blank"
            href="https://www.dynajet-france.fr/hochdruckreiniger/1480010w?set_language=fr"
            ><img
              class="img-responsive"
              style="width: 325px; height: 289px; border-radius: 0px; border-color: rgb(51, 51, 51); border-style: none; border-width: 1px;"
              alt="DYNAJET Kompressor 350me liegend"
              src="~assets/images/uploads/350th_04_Web_325.jpg"
          /></a>
        </div>

        <div>
          <a
            target="_blank"
            href="https://www.dynajet-france.fr/zubehoershop/547855w?set_language=fr"
            ><img
              class="img-responsive"
              style="width: 325px; height: 289px; border-radius: 0px; border-color: rgb(51, 51, 51); border-style: none; border-width: 1px;"
              alt="DYNAJET Kompressor 350me stehend"
              src="~assets/images/uploads/DYNAJET-Weed-Killer-01_web_duv500.jpg"
          /></a>
        </div>
      </div>
    </div>

    <section
      class="bg-custom container-fluid"
      style="background-image: none; background-color: rgb(255, 255, 255); padding-top: 5px; padding-bottom: 0px; border-bottom-width: 0px; border-bottom-color: rgb(255, 255, 255); background-repeat: repeat; background-size: auto; background-attachment: scroll;"
    >
      <div class="bg-custom container-fluid">
        <div class="icon-plus container">
          <h2 class="editContent">
            <strong>{{ $t('produkte_bilder.title1') }}<br /> </strong>
          </h2>
          <h4>
            {{ $t('produkte_bilder.title2') }}
          </h4>
          <br />
          <ul class="fs-large editContent">
            <li>
              {{ $t('produkte_bilder.option1') }}
            </li>
            <li>
              {{ $t('produkte_bilder.option2') }}
            </li>
            <li>
              {{ $t('produkte_bilder.option3') }}
            </li>
            <li>
              {{ $t('produkte_bilder.option4') }}
            </li>
            <li>
              {{ $t('produkte_bilder.option5') }}
            </li>
          </ul>
          <h4>
            <br />
            <a href="#kontakt" data-selector="nav a">{{
              $t('produkte_bilder.content1')
            }}</a>
            &gt;<br />
            <a
              target="_blank"
              href="https://www.dynajet-france.fr/hochdruckreiniger/1480010w?set_language=fr"
              >{{ $t('produkte_bilder.content2') }}</a
            >
            &gt;
          </h4>
        </div>
      </div>
    </section>

    <!-- PRODUKTE BILDER	-->
    <div class="icon-maschine-klein container">
      <h2 class="editContent"></h2>
      <p class="editContent"></p>
      <div class="row">
        <div>
          <a
            target="_blank"
            href="https://www.dynajet-france.fr/zubehoershop/547855w?set_language=fr"
            ><img
              class="img-responsive"
              alt="DYNAJET Weed Killer"
              src="~assets/images/uploads/DYNAJET-Weed-Killer-01_web_duv500.jpg"
          /></a>
        </div>

        <div>
          <a
            target="_blank"
            href="https://www.dynajet-france.fr/hochdruckreiniger/1480010w?set_language=fr"
            ><img
              class="img-responsive"
              alt="DYNAJET Kompressor 350me liegend"
              src="~assets/images/uploads/350th_04_Web_325.jpg"
          /></a>
        </div>

        <div>
          <a
            target="_blank"
            href="https://www.dynajet-france.fr/zubehoershop/494302w?set_language=fr"
            ><img
              class="img-responsive"
              alt="Flächenreiniger 350bar"
              src="~assets/images/uploads/Flechenreiniger_350bar_325.jpg"
          /></a>
        </div>

        <div>
          <a
            target="_blank"
            href="https://www.dynajet-france.fr/zubehoershop/461181w?set_language=fr"
            ><img
              class="img-responsive"
              alt="Kaugummie Duese"
              src="~assets/images/uploads/Kaugummie_Duese_325x289_1.jpg"
          /></a>
        </div>

        <div>
          <a
            target="_blank"
            href="https://www.dynajet-france.fr/zubehoershop/427460w?set_language=fr"
            ><img
              class="img-responsive"
              alt="Doppelstrahlrohr 500bar"
              src="~assets/images/uploads/Doppelstrahlrohr_500bar_325x289.jpg"
          /></a>
        </div>
      </div>
    </div>

    <!-- VORTEILE BLOCK -->
    <section class="bg-custom container-fluid" id="vorteile">
      <div class="bg-custom container-fluid">
        <div class="icon-plus container">
          <h2 class="editContent">{{ $t('Vorteile.title1') }}</h2>
          <ul class="fs-large editContent">
            <li>
              {{ $t('Vorteile.ventaja1') }}
            </li>
            <li>{{ $t('Vorteile.ventaja2') }}</li>
            <li>
              {{ $t('Vorteile.ventaja3') }}
            </li>
            <li>
              {{ $t('Vorteile.ventaja4') }}
            </li>
            <li>
              {{ $t('Vorteile.ventaja5') }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Start New Carousel -->

    <b-carousel
      id="carousel-fade"
      style="text-shadow: 1px 1px 2px #333;"
      fade
      background="#ababab"
      indicators
      controls
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        :caption="$t('carousel.option1')"
        img-src="~assets/images/uploads/DYNAJET-Unkrautvernichtung-01-web_1500x760_friedhof.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        :caption="$t('carousel.option2')"
        img-src="~assets/images/uploads/DYNAJET-Unkrautvernichtung-02-web_1500x760.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        :caption="$t('carousel.option3')"
        img-src="~assets/images/uploads/DYNAJET-Unkrautvernichtung-04-web_1500x760.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        :caption="$t('carousel.option4')"
        img-src="~assets/images/uploads/DYNAJET-Kaugummientfernung-01-web_1500x760.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        :caption="$t('carousel.option5')"
        img-src="~assets/images/uploads/DYNAJET-Kaugummientfernung-05-web_1500x760.jpg"
      ></b-carousel-slide>
    </b-carousel>

    <!-- End New Carousel -->


    <!-- ANWENDUNGEN BLOCK -->
    <section class="container-fluid" id="anwendungen">
      <div class="container">
        <p class="lead editContent">{{ $t('anwendungen.title') }}<br /></p>
        <p class="editContent">
          {{ $t('anwendungen.content') }}
        </p>
        <ul>
          <li>{{ $t('anwendungen.option1') }}</li>
          <li>{{ $t('anwendungen.option2') }}</li>
          <li>{{ $t('anwendungen.option3') }}</li>
          <li>
            {{ $t('anwendungen.option4') }}
          </li>
          <li>
            {{ $t('anwendungen.option5') }}
          </li>
          <li>
            {{ $t('anwendungen.option6') }}
          </li>
        </ul>
        <p></p>
      </div>
    </section>
    <!-- KONTAKT BLOCK -->
    <!-- Start - Section Service & Kontakt -->
    <section id="kontakt" class="bg-custom container-fluid">
      <div class="container">
        <h2>{{ $t('kontakt.title1') }}</h2>
        <h4>{{ $t('kontakt.title2') }}</h4>

        <p>
          {{ $t('kontakt.content') }}
        </p>
        <Form />
      </div>
    </section>
    <!-- Ende - Section Kontakt -->
  </div>
</template>

<script>
import Form from '~/components/Form.vue'
import {BCarousel,  BCarouselSlide}  from 'bootstrap-vue'


export default {
  components: {
    Form,
    BCarousel,
    BCarouselSlide
  }
}
</script>
<style scoped>



@media (min-width: 992px) {
  .pipe:before {
    content: '|';
    position: inherit;
    top: 16px;
    margin-left: -16px;
    margin-right: 13px;
    color: #0088bd;
  }
}

.custom-toggler.navbar-toggler {
  border-color: transparent;
}
.nav-link {
  color: #777;
}
.nav-item {
  padding: 10px 15px;
}

nav {
  background-color: white;
}
.dynajet-site-link {
  color: #0088bd;
}

/* .navbar-nav {
padding-top: 25px;
  padding-left: 52px;
} */

.nav-brand {
  margin-right: 60px;
  visibility: hidden;
}
.scrolled-true .navbar-brand {
  visibility: visible;
}

@media (min-width: 992px) {
  .navbar-brand {
    margin-left: -15px;
  }
}

.para {
  /* The image used */
  background-image: url('~assets/images/DYNAJET-Unkrautvernichtung-01-web_test.jpg');

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.col-xs-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

#confirmModal {
  opacity: 1;
}

#confirmModal .modal-content {
  margin-top: 150px;
}

#confirmModal .modal-header {
  padding: 10px;
}

#confirmModal .modal-header .close {
  margin-top: -10px;
}

/* .container.spy-navbar {
    display: block;
} */
/* @media(min-width:992px){
    .container.spy-navbar{
        max-width: fit-content
    }
} */

/* @media screen and (min-width: 992px){
  .navbar-header{
    display: none;
  } */

@media (max-width: 768px) {
  body,
  html {
    max-width: 100%;
    min-width: 100%;
  }
}
</style>
