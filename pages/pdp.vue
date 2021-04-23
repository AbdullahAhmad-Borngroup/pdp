<template>
  <div class="offer-wrapper">
    <link
      v-if="brandCssLink"
      rel="stylesheet"
      :href="brandCssLink"
      type="text/css"
    />
    <div class="offer">
      <div class="offer-header-container">
        <div class="offer-name">
          <span> {{ offer.Name }}</span>
        </div>
        <div class="offer-title">
          <span>{{ offer.Name }}</span>
          <!-- <span class="special"> mit</span>
          <span> 7 GB LTE</span> -->
        </div>
        <div class="offer-header-details">
          <div class="offer-header-detail">
            <span class="check-icon"
              ><tef-icon cloak icon="check" size="l"></tef-icon>
            </span>
            <span class="offer-header-detail-text">{{
              offer.Product_name_suffix
            }}</span>
            <span class="offer-header-detail-more-info"></span>
          </div>
          <div class="offer-header-detail">
            <span class="check-icon"
              ><tef-icon cloak icon="check" size="l"></tef-icon>
            </span>
            <span class="offer-header-detail-text">{{
              offer.Product_name_prefix
            }}</span>
            <span class="offer-header-detail-more-info">
              <tef-icon cloak icon="info" size="m"></tef-icon>
            </span>
          </div>
          <div class="offer-header-detail">
            <span class="check-icon"
              ><tef-icon cloak icon="check" size="l"></tef-icon>
            </span>
            <span class="offer-header-detail-text">{{
              offer.Allowance_Duration
            }}</span>
            <span class="offer-header-detail-more-info">
              <tef-icon cloak icon="info" size="m"></tef-icon>
            </span>
          </div>
          <div class="offer-header-detail">
            <span class="check-icon"
              ><tef-icon cloak icon="check" size="l"></tef-icon>
            </span>
            <span class="offer-header-detail-text">{{
              offer.Data_Allowance
            }}</span>
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
          <div class="offer-data-size btn active">
            {{ offer.Data_Allowance }}
          </div>
          <div class="offer-config-desc">
            <span>Laufzeit</span
            ><span class="special">2 € monatlich sparen</span>
          </div>
          <div class="offer-config-term-wrapper">
            <div class="offer-config-term-option btn active special">
              {{ offer.Allowance_Duration }}
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
              <div class="offer-price-option-title">
                Mtl. / {{ offer.Allowance_Duration }}
              </div>
              <div class="offer-price-option-value">
                {{ offer.Marketing_Price }}
              </div>
            </div>
            <div class="offer-price-option">
              <div class="offer-price-option-title">Einmalig</div>
              <div class="offer-price-option-value">0 €</div>
              <div class="offer-price-option-footer">+ 0 € Anschlusspreis</div>
            </div>
          </div>
          <div class="add-to-cart-wrapper">
            <button class="btn active" @click="publishMessage">
              Add to basket ({{ counter }})
            </button>
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
          <button class="btn active">Back up more GB</button>
        </div>
      </div>
    </div>
    <script :src="iconComponentLink"></script>
    <script :src="occlLink"></script>
  </div>
</template>

<script>
import { ADD_TO_BASKET } from '@/constants/'
let PubSub
const DEFAULT_BRAND = '2'

export default {
  asyncData({ $axios, route }) {
    // console.log(app.params)
    // const API_PATH = `https://hansen-dev-catalogservices.low.tefde-aws-raitt01-test.aws.de.pri.o2.com/cs3/api/entities(${route.query.productuuid})?id=GUID&XsltCode=TEF_OFFER_MARKETING`
    const DUMMY_RESULT = [
      {
        Name: 'O2 my prepaid L',
        ID: '221f727e-91a7-47ae-b5cf-7c0191fbd1e4',
        Business_ID: '000024',
        Marketing_Price: '19.99',
        Marketing_Recurring_Price: '19.99',
        Marketing_Description:
          'Mobile life is fun with the O2 my Prepaid L Tariff. Thanks to Allnet Flat, you can make calls to all German networks as much as you want. And use the mobile internet with 12 GB and LTE Max. Without a contract term.',
        Marketing_short_description:
          '12GB LTE Max data | Allnet-Flat on all German networks | EU Roaming included | 25 € cash-back if you take your number with you',
        Contract: 'false',
        Product_name_suffix: 'L',
        Product_name_prefix: 'O2 My Prepaid',
        Allowance_Duration: '4 weeks',
        Data_Allowance: '12GB',
      },
      {
        Name: 'Blau Spike Test Offer',
        ID: '2a7fae80-f9e0-4b26-baed-faf6d9f575cc',
        Business_ID: '000039',
        Marketing_Price: '19.99',
        Marketing_Recurring_Price: '19.99',
        Marketing_Description:
          'Mobile life is fun with the O2 my Prepaid L Tariff. Thanks to Allnet Flat, you can make calls to all German networks as much as you want. And use the mobile internet with 12 GB and LTE Max. Without a contract term.',
        Marketing_short_description: 'SPIKE Offer to test',
        Contract: 'false',
        Product_name_suffix: 'Spike',
        Product_name_prefix: 'Blau',
        Allowance_Duration: '4 weeks',
        Data_Allowance: '12GB',
      },
      {
        Name: 'O2 my prepaid M',
        ID: '403df60f-c776-4e5f-b6ea-6333217cd2e4',
        Business_ID: '000025',
        Marketing_Price: '14.99',
        Marketing_Recurring_Price: '14.99',
        Marketing_Description:
          'Mobile life is fun with the O2 my Prepaid M Tariff. Thanks to Allnet Flat, you can make calls to all German networks as much as you want. And use the mobile internet with 6.5 GB and LTE Max. Without a contract term.',
        Marketing_short_description:
          '6.5GB LTE Max data | Allnet-Flat on all German networks | EU Roaming included | 25 € cash-back if you take your number with you',
        Contract: 'false',
        Product_name_suffix: 'M',
        Product_name_prefix: 'O2 My Prepaid',
        Allowance_Duration: '4 weeks',
        Data_Allowance: '6.5GB',
      },
      {
        Name: 'O2 my prepaid S',
        ID: 'eb15bb49-378c-4e6a-8b95-2f706c16e74d',
        Business_ID: '000020',
        Marketing_Price: '9.99',
        Marketing_Recurring_Price: '9.99',
        Marketing_Description:
          'Mobile life is fun with the O2 my Prepaid S Tariff. Thanks to Allnet Flat, you can make calls to all German networks as much as you want. And use the mobile internet with 3.5 GB and LTE Max. Without a contract term.',
        Marketing_short_description:
          '3.5GB LTE Max data | Allnet-Flat on all German networks | EU Roaming included | 25 € cash-back if you take your number with you',
        Contract: 'false',
        Product_name_suffix: 'S',
        Product_name_prefix: 'O2 My Prepaid',
        Allowance_Duration: '4 weeks',
        Data_Allowance: '3.5GB',
      },
    ]
    // const result = await $axios.get(`${API_PATH}`)
    const offer =
      DUMMY_RESULT.find((el) => el.ID === route.query.productuuid) ||
      DUMMY_RESULT[0]

    return {
      offer,
    }
  },
  data() {
    return {
      counter: 0,
    }
  },
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
    productId() {
      return this.$route.query.productuuid
    },
  },
  mounted() {
    PubSub = window.PubSub || require('pubsub-js')
  },
  methods: {
    publishMessage() {
      this.counter++
      console.log('Message sent from PDP: ' + this.counter)
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
        .add-to-cart-wrapper {
          button {
            cursor: pointer;
          }
        }
      }
    }
    .offer-footer-container {
      .offer-footer-action {
        button {
          cursor: pointer;
        }
      }
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
