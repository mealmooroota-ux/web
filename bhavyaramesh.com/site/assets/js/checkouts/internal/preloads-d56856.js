
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.QSVzdYsv.js","/cdn/shopifycloud/checkout-web/assets/c1/app.9pOKhaB_.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.7EcvH7tF.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.nsMPExI6.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-previous.BNOUhCqt.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButton-helpers.0kfxXOqw.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.BHouiau8.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors.Dkvp0qf9.js","/cdn/shopifycloud/checkout-web/assets/c1/addresses-is-address-empty.ChTbY4tb.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-constants.B8quHqkP.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-promotions.BGj0zZCl.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-receipt-mapper-load-recovery.Bopl0Z3z.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-receipt-eager-mappers.-8pLsgp0.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-report-graphql-error.DOuLIoXS.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.UNB2OauO.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-derivations.BE31Cdos.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-credit-card-disabled.Cg-Vgf-8.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayNewSignupLoginExperiment.Cks6ggXa.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.CvWSYK3c.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-negotiation-input-redeemable.nWvx5Mgl.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-permissions.FyWsJaGm.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayExternalAppContext.DJNBHtP3.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.CZosULTV.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage.BZYE_-Ld.js","/cdn/shopifycloud/checkout-web/assets/c1/components-VatNumberValidationField.B3PhNjwY.js","/cdn/shopifycloud/checkout-web/assets/c1/localization-index.8vJFxOS9.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.D12YSXlR.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.COfgoH5j.js","/cdn/shopifycloud/checkout-web/assets/c1/AddressPresenter.mAxMJOkn.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShouldRevealCustomization.xDutk-8T.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.Bj-sC8MR.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.D2yMha9m.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.BLCoRu_E.js","/cdn/shopifycloud/checkout-web/assets/c1/components-RedirectionNotice.module.wDj6pdp6.js","/cdn/shopifycloud/checkout-web/assets/c1/amazon-pay-useAmazonPayPaymentLine.Dzl9q1le.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.z-nvF4Oi.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.C3rujIgw.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover.snh8_-Id.js","/cdn/shopifycloud/checkout-web/assets/c1/business-customer-constants.D2XM6iUD.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice.CmWf9O2o.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage.BFG4jKHA.js","/cdn/shopifycloud/checkout-web/assets/c1/Checkbox.BcOmMA-W.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.DHoHQcSz.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.Cv8_PxcC.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.CvRsT5TD.js","/cdn/shopifycloud/checkout-web/assets/c1/Page.iFMNx-gv.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsMonorailTrack.D-8b2KUL.js","/cdn/shopifycloud/checkout-web/assets/c1/crypto-constants.wrSwcTv4.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-installments-monorail.B28AmH4_.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePickupPoints.Dc_AUzii.js","/cdn/shopifycloud/checkout-web/assets/c1/TransitionHeight.BQH3tbCb.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.B3HDb4t8.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.7OdN0MKO.js","/cdn/shopifycloud/checkout-web/assets/c1/StickyPayButton-StickyPayButton.module.B93VtsR9.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.D-WpCwGP.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.B5qLPYk5.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressMutationsWithNegotiation.Y6hONWOn.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.BEzHtnxO.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.DHJD0fA7.js","/cdn/shopifycloud/checkout-web/assets/c1/Theme-ThemeOverride.aZ96ki1T.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.4MSJT9xw.js","/cdn/shopifycloud/checkout-web/assets/c1/payment-usePaymentExemptionReason.MJlv_Ay4.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts.Dx6SGyxo.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.DsxTs_3v.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.CWfF0M8f.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.4RHEltgi.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePreselectSpi.Cm2EMKw1.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-as-guest-amazon-pay.8gnTMI4a.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.DJAPsIjl.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.Dh3d0XR_.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.CL24HyOG.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.DDT-wwsl.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines.H3FgFIWg.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.D5mGyOOV.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.B9gHbOGQ.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.Nw6_VW9z.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.k18KcL9r.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.D0cJvdjn.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.BObOvIcg.js","/cdn/shopifycloud/checkout-web/assets/c1/page-BelowTheFoldContent.DxaDqNii.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha.uTxdGdBM.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayCaptcha.BRfpdziH.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeSection.Cc1eum9k.js","/cdn/shopifycloud/checkout-web/assets/c1/components-PaymentMethodProgressionHost.BLIoZXHg.js","/cdn/shopifycloud/checkout-web/assets/c1/component-MobileOrderSummary.BWejTkiU.js","/cdn/shopifycloud/checkout-web/assets/c1/styles-floating-layer.module.DAWBGW8s.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.B7nuOluw.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.Bku8TORf.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler.D3XJ_35V.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentOptionSelector.DcYpeqhI.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.C_ogBXhv.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.D9BLwpf-.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.BuSMBobh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/previous.DjvIwnbB.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/helpers.BXOQj2oa.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.DxMZvmU_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VatNumberValidationField.CyiectWG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.CPXhWoNv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useAddressMutationsWithNegotiation.BcTJoNaV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.D3bcP-mr.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.DV6JSDrR.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/constants.Dlnp55te.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CpHF4L7Q.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/index.CFj15lwv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RedirectionNotice.B8v_QGNW.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/TransitionHeight.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.CmuzzmSI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Captcha.CJQgLR0i.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.2B5x30PG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PayButtonSection.Bi0nhBOp.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethodProgressionHost.Cu93j1K1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentButtons.CKE1iCma.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Checkbox.SrYMuQu4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/floating-layer.DfWUBaTh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Page.BYM12A8B.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  