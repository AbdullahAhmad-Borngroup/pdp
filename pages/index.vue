<template>
  <div id="appPdpNuxtJs" class="offer-wrapper">
    <link
      v-if="brandCssLink"
      rel="stylesheet"
      :href="brandCssLink"
      type="text/css"
    />
    <div class="offer">
      <div class="offer-header-container">
        <div class="offer-name"><span> Frühlings-Highlight</span></div>
        <div class="offer-title">
          <span>Blau Allnet L Flex</span>
          <span class="special"> mit</span>
          <span> 7 GB LTE</span>
        </div>
        <div class="offer-header-details">
          <div class="offer-header-detail">
            <span class="check-icon"
              ><tef-icon cloak icon="check" size="l"></tef-icon>
            </span>
            <span class="offer-header-detail-text">7 GB LTE</span>
            <span class="offer-header-detail-more-info"></span>
          </div>
          <div class="offer-header-detail">
            <span class="check-icon"
              ><tef-icon cloak icon="check" size="l"></tef-icon>
            </span>
            <span class="offer-header-detail-text"
              >Allnet Flat in alle dt. Netze</span
            >
            <span class="offer-header-detail-more-info">
              <tef-icon cloak icon="info" size="m"></tef-icon>
            </span>
          </div>
          <div class="offer-header-detail">
            <span class="check-icon"
              ><tef-icon cloak icon="check" size="l"></tef-icon>
            </span>
            <span class="offer-header-detail-text">Monatlich kündbar</span>
            <span class="offer-header-detail-more-info">
              <tef-icon cloak icon="info" size="m"></tef-icon>
            </span>
          </div>
          <div class="offer-header-detail">
            <span class="check-icon"
              ><tef-icon cloak icon="check" size="l"></tef-icon>
            </span>
            <span class="offer-header-detail-text">EU-Roaming inklusive</span>
            <span class="offer-header-detail-more-info">
              <tef-icon cloak icon="info" size="m"></tef-icon>
            </span>
          </div>
        </div>
      </div>
      <div class="offer-details-container">
        <div class="offer-image-wrapper">
          <img
            src="https://static2-blau.o9.de/resource/blob/717748/9805887c385dca0d3e41d64dd8fc0bce/tariff-70008100-privatkunden-1209flexon-bild-data.png"
            alt="Blau Allnet L Flex"
            title="Blau Allnet L Flex"
          />
        </div>
        <div class="offer-config-wrapper">
          <div class="offer-data-size-title">LTE data volume</div>
          <div class="offer-data-size btn active">7 GB</div>
          <div class="offer-config-desc">
            <span>Laufzeit</span
            ><span class="special">2 € monatlich sparen</span>
          </div>
          <div class="offer-config-term-wrapper">
            <div class="offer-config-term-option btn active special">
              24 Monate Laufzeit
            </div>
            <div class="offer-config-term-option btn">Jederzeit kündbar</div>
          </div>
          <div class="offer-details-file">
            <span><tef-icon cloak icon="pdf" size="m"></tef-icon></span>
            <span>Produktinformationsblatt</span>
          </div>
        </div>
        <div class="offer-price-wrapper">
          <div class="offer-price-options">
            <div class="offer-price-option">
              <div class="offer-price-option-title">Mtl. / 24 Monate i</div>
              <div class="offer-price-option-value">9,99 €</div>
            </div>
            <div class="offer-price-option">
              <div class="offer-price-option-title">Einmalig</div>
              <div class="offer-price-option-value">0 €</div>
              <div class="offer-price-option-footer">+ 0 € Anschlusspreis</div>
            </div>
          </div>
          <div class="add-to-cart-wrapper">
            <button>To the basket of gooods</button>
          </div>
        </div>
      </div>
      <div class="offer-footer-container">
        <div class="offer-footer-data-size"></div>
        <div class="offer-footer-details">
          <div>12 GB Allnet Flat</div>
          <div>For just € 4 more, save a full 12 GB now.</div>
        </div>
        <div class="offer-footer-action">
          <button @click="publishMessage">Back up more GB</button>
        </div>
      </div>
    </div>
    <script :src="iconComponentLink"></script>
    <script :src="occlLink"></script>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import { ADD_TO_BASKET } from '@/constants/'

const DEFAULT_BRAND = '2'

export default {
  data() {
    return {
      model: {},
      counter: 0,
    }
  },
  /* async fetch() {
    this.mountains = await fetch(
      'https://hansen-dev-catalogservices.low.tefde-aws-raitt01-test.aws.de.pri.o2.com/cs3/api/entities(221f727e-91a7-47ae-b5cf-7c0191fbd1e4)?id=GUID&XsltCode=TEF_OFFER_MARKETING'
    ).then((res) => (this.sss = res.text()))
  }, */
  computed: {
    // eslint-disable-next-line object-shorthand
    brandCssLink() {
      return `https://library.telefonica.de/${this.brandId}/v1.5.0/components/theme/bundle.css`
    },
    iconComponentLink() {
      return `https://library.telefonica.de/${this.brandId}/v1.5.0/components/icon/bundle.js`
    },
    occlLink() {
      return `https://library.telefonica.de/${this.brandId}/v1.5.0/library/vendors.js`
    },
    brandId() {
      return this.$route.query.brandId || DEFAULT_BRAND
    },
  },
  methods: {
    publishMessage() {
      console.log('Message sent from PDP')
      this.counter++
      PubSub.publish(ADD_TO_BASKET, this.counter)
    },
  },
}
</script>

<style lang="scss" scoped>
.offer-wrapper {
  background-color: var(--color-brand--brand-1);
  .offer {
    margin-right: auto;
    margin-left: auto;
    padding: 75px 15px 15px 15px;
    max-width: 1160px;
    .offer-header-container {
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding-bottom: 15px;
      .offer-name {
        span {
          background-color: var(--color-brand--brand-3);
          color: var(--color-darkmode--text);
          padding: 4px 5px;
          border-radius: 3px;
        }
      }
      .offer-title {
        font-size: 35px;
        color: var(--color-darkmode--text);
        .special {
          color: var(--color-brand--brand-2);
        }
      }
      .offer-header-details {
        font-size: 16px;
        color: var(--color-darkmode--text);
        display: flex;
        .offer-header-detail {
          margin-right: 20px;
        }
      }
    }
    .offer-details-container {
      display: flex;
      padding: 30px 0px;
      .offer-image-wrapper {
        flex: 0;
        img {
          max-width: 320px;
          max-height: 320px;
        }
      }
      .offer-config-wrapper {
        flex: 1;
        margin-left: 20px;

        .offer-data-size {
          min-width: 112px;
          width: 112px;
          margin: 10px 0px 20px;
        }
        .offer-config-desc {
          margin-top: 15px;
          .special {
            background-color: var(--color-brand--brand-3);
            color: var(--color-darkmode--text);
            padding: 3px 20px;
            border-radius: 3px;
            font-size: 12px;
          }
        }
        .offer-config-term-wrapper {
          display: flex;
          margin-top: 7px;
          .offer-config-term-option {
            &.special {
              border: 3px solid var(--color-brand--brand-3);
            }
          }
        }
        .offer-details-file {
          margin-top: 25px;
        }
      }
      .offer-price-wrapper {
        flex: 1;
        margin-left: 20px;
      }
    }
    .offer-footer-container {
    }
  }
  .btn {
    color: var(--color-darkmode--text);
    text-align: center;
    padding: 5px 20px;
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    &.active {
      background-color: var(--color-brand--brand-2);
    }
  }
}
</style>
