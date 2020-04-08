<template>
  <div id="wrap">
    <!--[if lt IE 9]>
      <p class="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please
        <a href="http://browsehappy.com/">upgrade your browser</a> to improve
        your experience.
      </p>
    <![endif]-->
    <!-- Start - Seiten Header -->
    <nav class="header navbar navbar-fixed-top" role="navigation">
      <div class="container spy-navbar">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#main-top-nav"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span> <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand text-hide" href="#top" title="zum Seitenanfang"
            >DYNAJET</a
          >
        </div>
        <ul
          class="nav navbar-nav navbar-right collapse navbar-collapse"
          id="main-top-nav"
        >
          <li class="link-internal">
            <a href="#anwendung">{{ $t('internalLinks.anwendung') }}</a>
          </li>
          <li class="link-internal">
            <a href="#produkte">{{ $t('internalLinks.produkte') }}</a>
          </li>
          <li class="link-internal">
            <a href="#zubehoer">{{ $t('internalLinks.zubehoer') }}</a>
          </li>
          <li class="link-internal">
            <a href="#vorteile">{{ $t('internalLinks.vorteile') }}</a>
          </li>
          <li class="link-internal">
            <a href="#kontakt">{{ $t('internalLinks.kontakt') }}</a>
          </li>
          <li class="link-external">
            <a
              target="_blank"
              href="https://www.dyna-jet.com/welcome?set_language=en"
              >{{ $t('externalLinks.dynajetSite') }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- Ende - Seiten Header -->
    <!-- Start - Seiten Punkt Navi + Sprung Anchor kontakt - hoch - runter -->
    <div id="side-nav" class="spy-navbar affix" data-spy="affix">
      <ul class="nav dot-nav">
        <li>
          <a
            title="zur Anwendung"
            class="link-dot text-hide"
            href="#anwendung"
            >{{ $t('internalLinks.anwendung') }}</a
          >
        </li>
        <li>
          <a
            title="zu den Produkten"
            class="link-dot text-hide"
            href="#produkte"
            >{{ $t('internalLinks.produkte') }}</a
          >
        </li>
        <li>
          <a title="zum Zubehör" class="link-dot text-hide" href="#zubehoer">{{
            $t('internalLinks.zubehoer')
          }}</a>
        </li>
        <li>
          <a
            title="zu den Vorteilen"
            class="link-dot text-hide"
            href="#vorteile"
            >{{ $t('internalLinks.vorteile') }}</a
          >
        </li>
      </ul>
      <ul id="icon-nav" class="nav ico-nav">
        <li>
          <a
            title="Kontakt aufnehmen"
            class="link-mail text-hide icon-mail"
            href="#kontakt"
            >{{ $t('internalLinks.kontakt') }}</a
          >
        </li>
        <li class="active">
          <a
            title="raufskrollen"
            class="link-top text-hide icon-top"
            href="#top"
            >nach Oben</a
          >
        </li>
        <li>
          <a
            title="runterskrollen"
            class="link-next text-hide icon-bottom"
            href="javascript:click()"
            >nach Unten</a
          >
        </li>
      </ul>
    </div>
    <!-- Ende - Seiten Punkt Navi + Sprung Anchor kontakt - hoch - runter -->

    <!-- Start - Section Anwendung -->
    <section id="start" class="container-fluid">
      <div class="section-intro container">
        <div class="col-xs-12 col-sm-8 col-md-6">
          <h1
            class="page-title editContent"
            style="color: rgb(255, 255, 255); margin-bottom: -200px; margin-top: 0px; font-size: 40px; background-color: rgb(0, 136, 189);"
            src="content/images/2_1_stage_Anwendungen_DSC_7910_3.jpg"
          >
            {{ $t('Anwendung.pageTitle1') }}<br />{{
              $t('Anwendung.pageTitle2')
            }}
          </h1>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-6">
          <a
            id="brand-logo"
            class="brand"
            target="_blank"
            href="https://www.dyna-jet.com/welcome?set_language=en"
            ><img
              class="img-responsive"
              src="~assets/images/dynajet.svg"
              alt="Logo: Dynajet"
          /></a>
        </div>
      </div>
      <div
        class="section-header parallax"
        style="background-image: url('content/images/2_1_stage_Anwendungen_DSC_7910_4.jpg')"
      ></div>
    </section>

    <section id="anwendung" class="container-fluid">
      <!-- start - Section Anwendung -->
      <div class="bg-custom container-fluid">
        <div class="container">
          <p class="kicker h1 editContent">
            {{ $t('Anwendung.pageTitle3') }}
          </p>
          <h2 class="nobg-icon-stop-uhr editContent">
            <br />
            {{ $t('Anwendung.pageTitle4') }}
          </h2>
        </div>
      </div>
      <div class="container">
        <h2 class="editContent">{{ $t('Anwendung.pageTitle5') }}</h2>
        <p class="editContent">
          {{ $t('Anwendung.content1') }}
        </p>
        <p>
          {{ $t('Anwendung.branches') }}
        </p>

        <p>
          <a
            target="_blank"
            href="https://www.dyna-jet.com/sector-specific-solutions/construction"
            >{{ $t('externalLinks.construction') }} ></a
          >
        </p>

        <p>
          <a
            target="_blank"
            href="https://www.dyna-jet.com/sector-specific-solutions/renovation"
            >{{ $t('externalLinks.renovation') }} ></a
          >
        </p>

        <p>
          <a
            target="_blank"
            href="https://www.dyna-jet.com/sector-specific-solutions/service-providers"
            >{{ $t('externalLinks.serviceProviders') }} ></a
          >
        </p>

        <p>
          <a
            target="_blank"
            href="https://www.dyna-jet.com/sector-specific-solutions/local-authorities"
            >{{ $t('externalLinks.localAuthorities') }} ></a
          >
        </p>

        <p>
          <a
            target="_blank"
            href="https://www.dyna-jet.com/sector-specific-solutions/industry"
            >{{ $t('externalLinks.industry') }} ></a
          >
        </p>

        <p>
          <a
            target="_blank"
            href="https://www.dyna-jet.com/sector-specific-solutions/shipyards-and-offshore"
            >{{ $t('externalLinks.shipyards') }} ></a
          >
        </p>

        <p>
          <a
            target="_blank"
            href="https://www.dyna-jet.com/sector-specific-solutions/agriculture-and-forestry"
            >{{ $t('externalLinks.agriculture') }} ></a
          >
        </p>
      </div>
    </section>
    <!-- Ende - Section Anwendung -->

    <!-- Test carousel -->

    <div class="bg-custom-dark container-fluid">
      <div id="produkt-carousel" class="carousel slide">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li
            data-target="#produkt-carousel"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#produkt-carousel" data-slide-to="1" class=""></li>
          <li data-target="#produkt-carousel" data-slide-to="2" class=""></li>
          <li data-target="#produkt-carousel" data-slide-to="3" class=""></li>
          <li data-target="#produkt-carousel" data-slide-to="4" class=""></li>
          <li data-target="#produkt-carousel" data-slide-to="5" class=""></li>
          <li data-target="#produkt-carousel" data-slide-to="6" class=""></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img
              src="~assets/images/uploads/01_1_DYNAJET_Anwendungen_Bau_Sanierung_Reinigung-von-Land-und-Baumaschinen.jpg"
              alt="Schalungsreinigung Bild 2"
            />
            <div class="carousel-caption">
              {{ $t('carousel.1') }}
            </div>
          </div>

          <div class="item">
            <img
              src="~assets/images/uploads/01_2_DYNAJET_Anwendungen_Bau_Sanierung_Reinigung-von-Schalungen.jpg"
              alt="Schalungsreinigung Bild 2"
            />
            <div class="carousel-caption">{{ $t('carousel.2') }}</div>
          </div>

          <div class="item">
            <img
              src="~assets/images/uploads/01_3_DYNAJET_Anwendungen_Kommunen_Entfernung-von-Graffitis.jpg"
              alt="Schalungsreinigung Bild 2"
            />
            <div class="carousel-caption">{{ $t('carousel.3') }}</div>
          </div>

          <div class="item">
            <img
              src="~assets/images/uploads/01_4_DYNAJET_Anwendungen_Industrie_Reinigung-von-Waermetauschern.jpg"
              alt="Schalungsreinigung Bild 2"
            />
            <div class="carousel-caption">
              {{ $t('carousel.4') }}
            </div>
          </div>

          <div class="item">
            <img
              src="~assets/images/uploads/01_5_DYNAJET_Anwendungen_Land_und_Forstwirtschaft_Reinigung-von-Land--und-Baumaschinen.jpg"
              alt="Schalungsreinigung Bild 2"
            />
            <div class="carousel-caption">
              {{ $t('carousel.5') }}
            </div>
          </div>

          <div class="item">
            <img
              src="~assets/images/uploads/01_6_DYNAJET_Anwendungen_Werften_und_Offshore_Schiffsreinigung.jpg"
              alt="Schalungsreinigung Bild 2"
            />
            <div class="carousel-caption">{{ $t('carousel.6') }}</div>
          </div>

          <div class="item">
            <img
              src="~assets/images/uploads/001_DYNAJET_Header_800th_Betonsanierung.jpg"
              alt="Betonsanierung"
            />
            <div class="carousel-caption">{{ $t('carousel.7') }}</div>
          </div>
        </div>
        <!-- Controls --><a
          class="left carousel-control"
          href="#produkt-carousel"
          role="button"
          data-slide="prev"
          ><span
            class="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span class="sr-only">{{ $t('carousel.left') }}</span></a
        >
        <a
          class="right carousel-control"
          href="#produkt-carousel"
          role="button"
          data-slide="next"
          ><span
            class="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span class="sr-only">{{ $t('carousel.right') }}</span></a
        >
      </div>
    </div>

    <!-- End test carousel -->

    <!-- Start - Section Produkte -->
    <section id="produkte" class="container-fluid">
      <div class="bg-custom-lighter container-fluid">
        <div class="icon-maschine-gross container">
          <h2 class="editContent">
            {{ $t('produkte.title1') }}<br />
            {{ $t('produkte.title1_2') }}
          </h2>
          <p class="editContent">
            {{ $t('produkte.content1') }}
          </p>
          <p>
            {{ $t('produkte.content2_1') }}
            <a
              href="https://www.dyna-jet.com/hochdruckreiniger#b_start=0"
              target="_blank"
              ><strong>p{{ $t('produkte.content2_2') }} </strong> </a
            >{{ $t('produkte.content2_3') }}<br />
          </p>
          <ul>
            <li>{{ $t('produkte.land') }}</li>
            <li>{{ $t('produkte.wall') }}</li>
            <li>{{ $t('produkte.heat') }}</li>
            <li>{{ $t('produkte.more') }}</li>
          </ul>
        </div>
      </div>
      <div
        class="section-header parallax"
        style="background-image: url('content/images/02_1_DYNAJET_Produkte_Uebersicht.jpg')"
      ></div>
    </section>
    <!-- Ende - Section Produkte-->

    <!-- Start - Section Zubehör -->
    <section id="zubehoer" class="container-fluid">
      <div class="container">
        <h2 class="editContent">{{ $t('zubehoer.title1') }}</h2>
        <p class="editContent">
          {{ $t('zubehoer.title2') }}
        </p>
        <p>
          {{ $t('zubehoer.title3') }}
        </p>

        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3">
            <img
              class="img-responsive"
              src="content/images/03_2_DYNJAET_Zubehoer_Rotierende_Duese_500bar.jpg"
              alt="Rotierende Düse 500bar"
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <img
              class="img-responsive"
              src="content/images/Flechenreiniger_500bar.jpg"
              alt="Flechenreiniger 500bar"
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <img
              class="img-responsive"
              src="content/images/03_4_DYNJAET_Zubehoer_Weed-Killer_Unkrautvernichtung.jpg"
              alt="Unkrautvernichtung"
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <img
              class="img-responsive"
              src="content/images/03_8_DYNJAET_Zubehoer_Schutzhelm.jpg"
              alt="Schutzhelm"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3">
            <img
              class="img-responsive"
              src="content/images/Hochdruckpistole_500bar_Web_1.jpg"
              alt="Hochdruckpistole 500bar"
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <img
              class="img-responsive"
              src="content/images/03_1_DYNJAET_Zubehoer_Spritzlanze_SL3000.jpg"
              alt="Spritzlanze SL3000"
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <img
              class="img-responsive"
              src="content/images/03_4_DYNJAET_Zubehoer_Schlauch_1_000bar.jpg"
              alt="Schlauch 1.000bar"
            />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <img
              class="img-responsive"
              src="content/images/03_6_DYNJAET_Zubehoer_Filterstation.jpg"
              alt="Filterstation"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Ende - Section Zubehör -->
    <!-- Start - Section Vorteile -->
    <section id="vorteile" class="">
      <div
        class="section-header parallax"
        style="background-image: url('content/images/04_DYNAJET_Qualitaetssicherung.jpg')"
      ></div>
      <!--div class="embed-responsive embed-responsive-16by9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5eKuMnpv-aQ" frameborder="0" allowfullscreen></iframe>
      </div-->

      <div class="bg-custom container-fluid">
        <div class="icon-plus container">
          <h2 class="editContent">{{ $t('Vorteile.title1') }}</h2>
          <ul class="fs-large editContent">
            <li>{{ $t('Vorteile.ventaja1') }}</li>
            <li>{{ $t('Vorteile.ventaja2') }}</li>
            <li>{{ $t('Vorteile.ventaja3') }}</li>
            <li>{{ $t('Vorteile.ventaja4') }}</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Ende - Section Vorteile  -->

    <section id="gesamtkatalog" class="bg-custom-default container-fluid">
      <div class="container">
        <p class="editContent"></p>
        <h2>{{ $t('gesamtkatalog.title') }}</h2>
        <p>
          <a
            href="https://www.dynajet.de/info-center/datenblaetter-kataloge"
            target="_blank"
            ><img
              class="img-responsive"
              style="float:left;
margin-top: 0px; margin-bottom:0px; margin-left: 0px; margin-right: 20px"
              src="content/images/05_DYNAJET_Gesamtkatalog_Nummer_6.jpg"
              alt="Gesamtkatalog Nummer 6"
          /></a>
        </p>
        <p>
          {{ $t('gesamtkatalog.content') }}
        </p>

        <p>{{ $t('gesamtkatalog.content2') }}</p>
        <p>
          <a
            href="https://www.dyna-jet.com/info-center/datasheets-catalogues"
            target="_blank"
            >{{ $t('gesamtkatalog.linkCatalog') }}</a
          >
        </p>

        <p>
          <a href="#kontakt">{{ $t('gesamtkatalog.linkContact') }}</a>
        </p>
        <!--mark>Damit sparen Sie von Anfang an Zeit und Geld, da nur einwandfrei gereinigte Verschalungen gute und wirtschaftliche Ergebnisse sichern.</mark-->
      </div>
    </section>
    <!-- Start - Section Service & Kontakt -->
    <section id="kontakt" class="bg-custom container-fluid">
      <div class="container">
        <h2>{{ $t('kontakt.title1') }}</h2>
        <h4>{{ $t('kontakt.title2') }}</h4>

        <p>
          {{ $t('kontakt.content') }}
        </p>
        <Form/>
      </div>
     
    </section>
    <!-- Ende - Section Kontakt -->
  </div>
</template>

<script>
import Form from '~/components/Form.vue'

export default {
  components: {
    Form
  }
}
</script>

<style></style>
