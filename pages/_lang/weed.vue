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

    <nav class="header navbar navbar-fixed-top" role="navigation">
      <div class="container spy-navbar">
        <div class="navbar-header">
          <button
            class="navbar-toggle collapsed"
            aria-expanded="false"
            type="button"
            data-toggle="collapse"
            data-target="#main-top-nav"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span> <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a title="zum Seitenanfang" class="navbar-brand text-hide" href="#top"
            >DYNAJET</a
          >
        </div>
        <ul
          class="nav navbar-nav navbar-right collapse navbar-collapse"
          id="main-top-nav"
        >
          <li class="link-internal">
            <a href="#unkrautvernichtung"
              >{{$t('internalLinks.unkrautvernichtung')}}<br />
              <br
            /></a>
          </li>
          <li class="link-internal">
            <a href="#angebot">{{$t('internalLinks.angebot')}}<br /></a>
          </li>
          <li class="link-internal"><a href="#vorteile">{{$t('internalLinks.vorteile')}}</a></li>
          <li class="link-internal">
            <a href="#anwendungen">{{$t('internalLinks.anwendungen')}}</a>
          </li>
          <li class="link-internal">
            <a href="#kontakt">{{$t('internalLinks.kontakt')}}</a>
          </li>
          <li class="link-external">
            <a href="https://www.dynajet-france.fr/" target="_blank"
              >Site DYNAJET</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <section class="container-fluid" id="start">
      <div class="section-intro container">
        <div class="col-xs-12 col-sm-8 col-md-6">
          <h1 class="page-title editContent" data-selector="h1" style="">
            Désherber avec DYNAJET<br />
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
      <div class="section-header parallax-cust" data-parallax="scroll">
        <img src="~assets/images/DYNAJET-Unkrautvernichtung-01-web_test.jpg" />
      </div>
    </section>

    <section class="container-fluid" id="unkrautvernichtung">
      <!-- start - Section Anwendung -->
      <div class="bg-custom container-fluid">
        <div class="container">
          <p class="kicker h1 editContent">
            Respectueux de l’environnement et hautement efficace –
          </p>
          <h2 class="nobg-icon-stop-uhr editContent">
            Le désherbeur DYNAJET DUV 500 élimine les mauvaises herbes de
            manière rapide et durable sans utiliser de produits chimiques.<br />
          </h2>
        </div>
      </div>
      <div class="container">
        <p class="lead editContent">
          Dans l’Union Européenne, le recours aux herbicides et pesticides pour
          lutter contre les mauvaises herbes est proscrit dans les lieux
          publics.<br />
        </p>
        <p class="editContent">
          Cet outil DYNAJET superpuissant est l’alternative parfaite pour venir
          à bout du problème : le simple usage de l’eau et de la chaleur permet
          de préserver l’environnement tout en éliminant les mauvaises herbes de
          manière particulièrement rapide et durable. Le désherbeur DYNAJET
          lutte contre la pousse d’herbes indésirables sur la chaussée, les
          parkings, les trottoirs ou les surfaces pavées, grâce à un mélange
          optimal d’eau et de chaleur. L’eau chauffée à une température comprise
          entre 90 °C et 100 °C pénètre en profondeur dans les racines des
          mauvaises herbes, qui meurent puis s’assèchent en peu de temps.<br />
          <br />
          Visionnez notre film, vous verrez avec quelle facilité la remorque
          d’eau chaude
          <a
            href="https://www.dynajet-france.fr/hochdruckreiniger/1480010w?set_language=fr"
            target="_blank"
            >DYNAJET 350th</a
          >
          et le
          <a
            href="https://www.dynajet-france.fr/zubehoershop/547855w?set_language=fr"
            target="_blank"
            >désherbeur DUV 500</a
          >
          permettent de lutter contre les mauvaises herbes :<br />
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
              ><br />Notre offre :<br />
              Les kits complets DYNAJET, tout de suite prêts à l’emploi
              !</strong
            >
          </h2>
        </div>
      </div>
    </section>
    <section class="bg-custom container-fluid">
      <div class="bg-custom container-fluid">
        <div class="icon-plus container">
          <h2 class="editContent">
            <strong>Kit de base désherbeur DYNAJET</strong><br />
          </h2>
          <ul class="fs-large editContent">
            <li>
              DYNAJET 350th : nettoyeur universel et mobile haute pression à eau
              froide et chaude jusqu’à 350 bar, comprend un tuyau à haute
              pression de 50 m garantissant un grand périmètre d’action
            </li>
            <li>
              DYNAJET DUV 500: désherbeur à deux roues pour faciliter le travail
              et limiter les efforts
            </li>
          </ul>
          <h4>
            <br />
            <a href="#kontakt" data-selector="nav a"
              >Demandez maintenant votre offre sans engagement !</a
            >
            &gt;<br />
            <a
              href="https://www.dynajet-france.fr/hochdruckreiniger/1480010w?set_language=fr"
              target="_blank"
              >Plus d’informations sur la remorque d’eau chaude DYNAJET 350th</a
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
        <div class="col-xs-12 col-md-4">
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

        <div class="col-xs-12 col-md-4">
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
            <strong>Kit premium DYNAJET pour les communes<br /> </strong>
          </h2>
          <h4>
            DYNAJET 350th et le désherbeur DYNAJET superpuissant – l’équipement
            de choc pour tous les travaux de nettoyage dans les communes.
          </h4>
          <br />
          <ul class="fs-large editContent">
            <li>
              DYNAJET 350th : nettoyeur universel et mobile haute pression à eau
              froide et chaude jusqu’à 350 bar, comprend un tuyau à haute
              pression de 50 m garantissant un grand périmètre d’action
            </li>
            <li>
              DYNAJET DUV 500 : désherbeur à deux roues pour faciliter le
              travail et limiter les efforts
            </li>
            <li>
              DFS 350 : nettoyage rapide et efficace de surfaces importantes
            </li>
            <li>
              Buse spéciale chewing-gums : élimination rapide des chewing-gums
            </li>
            <li>
              Lance de projection double : nettoyage et rinçage des surfaces en
              un seul passage
            </li>
          </ul>
          <h4>
            <br />
            <a href="#kontakt" data-selector="nav a"
              >Demandez maintenant votre offre sans engagement !</a
            >
            &gt;<br />
            <a
              target="_blank"
              href="https://www.dynajet-france.fr/hochdruckreiniger/1480010w?set_language=fr"
              >Plus d’informations sur la remorque d’eau chaude DYNAJET 350th</a
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
        <div class="col-xs-12 col-md-4">
          <a
            target="_blank"
            href="https://www.dynajet-france.fr/zubehoershop/547855w?set_language=fr"
            ><img
              class="img-responsive"
              alt="DYNAJET Weed Killer"
              src="~assets/images/uploads/DYNAJET-Weed-Killer-01_web_duv500.jpg"
          /></a>
        </div>

        <div class="col-xs-12 col-md-4">
          <a
            target="_blank"
            href="https://www.dynajet-france.fr/hochdruckreiniger/1480010w?set_language=fr"
            ><img
              class="img-responsive"
              alt="DYNAJET Kompressor 350me liegend"
              src="~assets/images/uploads/350th_04_Web_325.jpg"
          /></a>
        </div>

        <div class="col-xs-12 col-md-4">
          <a
            target="_blank"
            href="https://www.dynajet-france.fr/zubehoershop/494302w?set_language=fr"
            ><img
              class="img-responsive"
              alt="Flächenreiniger 350bar"
              src="~assets/images/uploads/Flechenreiniger_350bar_325.jpg"
          /></a>
        </div>

        <div class="col-xs-12 col-md-4 col-md-offset-2">
          <a
            target="_blank"
            href="https://www.dynajet-france.fr/zubehoershop/461181w?set_language=fr"
            ><img
              class="img-responsive"
              alt="Kaugummie Duese"
              src="~assets/images/uploads/Kaugummie_Duese_325x289_1.jpg"
          /></a>
        </div>

        <div class="col-xs-12 col-md-4">
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
          <h2 class="editContent">Avantages</h2>
          <ul class="fs-large editContent">
            <li>
              Gain de temps grâce aux dévidoirs de flexibles intégrés permettant
              un montage extrêmement rapide en seulement 60 secondes
            </li>
            <li>Nettoyage hautement efficace à l’eau chaude</li>
            <li>
              Préservation de l’environnement grâce à l’absence de tout additif
              chimique
            </li>
            <li>
              Nettoyage autonome sans arrivée d’eau grâce à un grand réservoir
              d’eau intégré
            </li>
            <li>
              Champs d’application variés avec un seul nettoyeur haute pression
              DYNAJET
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- SLIDESHOW -->
    <div class="bg-custom container-fluid">
      <div class="carousel slide" id="produkt-carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li
            class="active"
            data-target="#produkt-carousel"
            data-slide-to="0"
          ></li>
          <li data-target="#produkt-carousel" data-slide-to="1"></li>
          <li data-target="#produkt-carousel" data-slide-to="2"></li>
          <li data-target="#produkt-carousel" data-slide-to="3"></li>
          <li data-target="#produkt-carousel" data-slide-to="4"></li>
        </ol>
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img
              alt="Schalungsreinigung Bild 1"
              src="~assets/images/uploads/DYNAJET-Unkrautvernichtung-01-web_1500x760_friedhof.jpg"
            />
            <div class="carousel-caption">
              Éliminer les mauvaises herbes avec DYNAJET 350th et DYNAJET DUV
              500
            </div>
          </div>
          <div class="item">
            <img
              alt="Schalungsreinigung Bild 2"
              src="~assets/images/uploads/DYNAJET-Unkrautvernichtung-02-web_1500x760.jpg"
            />
            <div class="carousel-caption">
              DYNAJET l’équipement de choc pour tous les travaux de nettoyage
              des communes
            </div>
          </div>
          <div class="item">
            <img
              alt="Schalungsreinigung Bild 2"
              src="~assets/images/uploads/DYNAJET-Unkrautvernichtung-04-web_1500x760.jpg"
            />
            <div class="carousel-caption">
              DYNAJET DUV 500 désherbeur superpuissant
            </div>
          </div>
          <div class="item">
            <img
              alt="Schalungsreinigung Bild 2"
              src="~assets/images/uploads/DYNAJET-Kaugummientfernung-01-web_1500x760.jpg"
            />
            <div class="carousel-caption">
              Élimination des chewing-gums avec la buse spéciale DYNAJET
            </div>
          </div>
          <div class="item">
            <img
              alt="Schalungsreinigung Bild 2"
              src="~assets/images/uploads/DYNAJET-Kaugummientfernung-05-web_1500x760.jpg"
            />
            <div class="carousel-caption">
              DYNAJET pour les communes : éliminer rapidement les chewing-gums
            </div>
          </div>
        </div>
        <!-- Controls --><a
          class="left carousel-control"
          role="button"
          href="#produkt-carousel"
          data-slide="prev"
          ><span
            class="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Zurückblättern</span></a
        >
        <a
          class="right carousel-control"
          role="button"
          href="#produkt-carousel"
          data-slide="next"
          ><span
            class="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Vorblättern</span></a
        >
      </div>
    </div>
    <!-- ANWENDUNGEN BLOCK -->
    <section class="container-fluid" id="anwendungen">
      <div class="container">
        <p class="lead editContent">Autres applications<br /></p>
        <p class="editContent">
          Mobiles, prêts à l’emploi et extrêmement fiables – les nettoyeurs
          haute pression et accessoires DYNAJET vous offre une solution
          parfaitement adaptée à des usages divers :
        </p>
        <ul>
          <li>Élimination de chewing-gums</li>
          <li>Élimination de graffitis</li>
          <li>Nettoyage de monuments, fontaines et cimetières</li>
          <li>
            Nettoyage de stations d’épuration, canalisations et machines
            communales
          </li>
          <li>
            Nettoyage de zones piétonnières, centres commerciaux, restaurants
            fast-food et piscines municipales
          </li>
          <li>
            Nettoyage de gares, arrêts de bus, parkings à étages et façades
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

export default {
  components: {
    Form
  }
}
</script>
