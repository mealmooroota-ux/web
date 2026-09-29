(function () {
    const config = {"enabled":true,"general":{"phoneNumber":"919986971611","prefilledMessage":{"enabled":false,"text":"Hey there, I have a question!","variables":true}},"appearance":{"type":"logoCircleButton","agentImage":null,"buttonText":null,"size":"medium","placement":{"position":"bottomRight","spacing":{"left":16,"right":16,"bottom":16}},"visibility":{"showOnMobile":true,"showOnDesktop":true},"colors":{"icon":"#ffffff","text":"#ffffff","background":"#59ce72"},"zindex":9999},"enhancements":{"notificationBadge":{"enabled":false,"count":1},"greetingMessage":{"enabled":false,"text":"Hi, how can I help you?"},"businessHours":{"enabled":false,"startTime":"09:00","endTime":"17:00","days":["Monday","Tuesday","Wednesday","Thursday","Friday"],"timezone":"UTC","offlineMessage":"We're currently offline. Please contact us during business hours or leave a message!","offlineBehavior":"show"},"multiLanguage":{"enabled":false,"detectionMethod":"browser","defaultLanguage":"en","translations":[]},"popup":{"enabled":false,"message":"Wait! Don't leave without getting your questions answered. Chat with us now!","delay":30,"showOnce":true,"triggerType":"mouseleave","buttonText":"Get Help Now","closeText":"Close","styling":{"backgroundColor":"#ffffff","textColor":"#333333","primaryButtonColor":"#25D366","primaryButtonTextColor":"#ffffff","secondaryButtonColor":"#cccccc","secondaryButtonTextColor":"#333333","overlayColor":"rgba(0,0,0,0.5)","borderRadius":"10","shadowColor":"rgba(0,0,0,0.3)"}},"pageExclusion":{"enabled":false,"excludeHomepage":false,"excludeProducts":false,"excludeCollections":false,"excludePages":false,"excludeCart":false,"excludeCheckout":false,"customUrls":[]}},"developers":{"customCSS":false},"tracking":{"googleAnalytics":{"enabled":false},"metaPixel":{"enabled":false}}};


    if (config === 'replace_me') {
        return;
    }

    if (window.eazeappsWhatsAppChatButtonLoaded) {
        return;
    }

    window.eazeappsWhatsAppChatButtonLoaded = true;

    class GTYWhatsAppChatButton extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' });

            this.config = config;

            if (this.config.enabled == false) {
                return;
            }

            // Check page exclusion
            if (this.config.enhancements && this.config.enhancements.pageExclusion && this.config.enhancements.pageExclusion.enabled) {
                if (this.shouldExcludeCurrentPage()) {
                    return;
                }
            }

            // Check business hours - only hide if explicitly set to hide
            if (this.config.enhancements && this.config.enhancements.businessHours && this.config.enhancements.businessHours.enabled) {
                const withinHours = this.isWithinBusinessHours();

                if (!withinHours && this.config.enhancements.businessHours.offlineBehavior === 'hide') {
                    return;
                } else if (!withinHours) {
                }
            } else {
            }

            // Initialize popup
            if (this.config.enhancements && this.config.enhancements.popup && this.config.enhancements.popup.enabled) {
                this.initializePopup();
            }

            this.style.display = 'block';

            let wrapper = this.getWrapper(this.config.appearance.zindex ? this.config.appearance.zindex : 9999);
            let wrapperEl = wrapper.content.querySelector('.gty-wacb-wrapper');

            // Get localized texts based on browser language
            const localizedTexts = this.getLocalizedTexts();

            // Check if we're outside business hours
            const isOutsideBusinessHours = this.config.enhancements && this.config.enhancements.businessHours &&
                this.config.enhancements.businessHours.enabled && !this.isWithinBusinessHours();

            // Use localized prefilled message if available
            const prefilledMessage = this.config.general.prefilledMessage.enabled ?
                (localizedTexts.prefilledMessage || this.config.general.prefilledMessage.text) : false;

            let whatsAppLink = this.getWhatsAppLink(this.config.general.phoneNumber, prefilledMessage, this.config.general.prefilledMessage.variables);
            let button = this.getButton(this.config.appearance.type, whatsAppLink, this.config.appearance.colors, this.config.appearance.agentImage, localizedTexts.buttonText || this.config.appearance.buttonText);

            // Show appropriate greeting message based on business hours
            let greetingMessage;
            if (isOutsideBusinessHours) {
                // Show business hours offline message
                greetingMessage = this.getGreetingMessage(
                    true,
                    localizedTexts.offlineMessage || (this.config.enhancements && this.config.enhancements.businessHours && this.config.enhancements.businessHours.offlineMessage),
                    whatsAppLink
                );
            } else {
                // Show normal greeting message
                greetingMessage = this.getGreetingMessage(
                    this.config.enhancements && this.config.enhancements.greetingMessage && this.config.enhancements.greetingMessage.enabled,
                    localizedTexts.greetingMessage || (this.config.enhancements && this.config.enhancements.greetingMessage && this.config.enhancements.greetingMessage.text),
                    whatsAppLink
                );
            }

            let notificationBadge = this.getNotificationBadge(
                this.config.enhancements && this.config.enhancements.notificationBadge && this.config.enhancements.notificationBadge.enabled,
                this.config.enhancements && this.config.enhancements.notificationBadge && this.config.enhancements.notificationBadge.count,
                whatsAppLink
            );

            // Store offline message for business hours
            this.offlineMessage = localizedTexts.offlineMessage || (this.config.enhancements && this.config.enhancements.businessHours && this.config.enhancements.businessHours.offlineMessage);

            // Store localized popup texts
            this.popupTexts = {
                title: localizedTexts.popupTitle || (this.config.enhancements && this.config.enhancements.popup && this.config.enhancements.popup.message),
                message: localizedTexts.popupMessage || (this.config.enhancements && this.config.enhancements.popup && this.config.enhancements.popup.message),
                buttonText: localizedTexts.popupButtonText || (this.config.enhancements && this.config.enhancements.popup && this.config.enhancements.popup.buttonText),
                closeText: localizedTexts.popupCloseText || (this.config.enhancements && this.config.enhancements.popup && this.config.enhancements.popup.closeText) || 'Close'
            };

            // Create a container so the notification badge positions relative to the button
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'gty-wacb-button-container';
            buttonContainer.style.position = 'relative';
            buttonContainer.style.display = 'inline-block';

            // Append button first, then badge into the same container
            buttonContainer.appendChild(button.content.cloneNode(true));
            buttonContainer.appendChild(notificationBadge.content.cloneNode(true));

            // Append greeting and container to wrapper
            wrapperEl.appendChild(greetingMessage.content.cloneNode(true));
            wrapperEl.appendChild(buttonContainer);

            // Before attaching to shadow DOM, adjust dynamic alignment for badge and overlay
            try {
                const isRightAligned = this.config.appearance.placement.position === 'bottomRight';

                // Align notification badge to top corner nearest page edge
                const badgeEl = wrapper.content.querySelector('.gty-wacb-notification-badge');
                if (badgeEl) {
                    // Always anchor to top-right of the button
                    badgeEl.style.top = '-2px';
                    badgeEl.style.right = '-4px';
                    badgeEl.style.left = 'auto';
                }

                // For agent circle button overlay (small WhatsApp bubble), always anchor to bottom-right of button
                const agentOverlay = wrapper.content.querySelector('[data-agent-button="true"] .gty-wacb-button-logo');
                if (agentOverlay) {
                    agentOverlay.style.bottom = '0';
                    agentOverlay.style.right = '0';
                    agentOverlay.style.left = 'auto';
                }
            } catch (e) {
                // No-op if elements not present
            }

            this.shadowRoot.appendChild(wrapper.content.cloneNode(true));
            this.shadowRoot.appendChild(this.getPlacementStyle(this.config.appearance.placement.position, this.config.appearance.placement.spacing));
            this.shadowRoot.appendChild(this.getSizeStyle(this.config.appearance.size, this.config.appearance.placement.position));
            this.shadowRoot.appendChild(this.getVisibilityStyle(this.config.appearance.visibility.showOnMobile, this.config.appearance.visibility.showOnDesktop));
            this.shadowRoot.appendChild(this.getCustomCSSStyle(this.config.developers.customCSS));

            let trackableLinks = this.shadowRoot.querySelectorAll('a');
            for (let i = 0; i < trackableLinks.length; i++) {
                this.applyLinkTracking(this.config.tracking, trackableLinks[i]);
            }
        }

        applyLinkTracking(tracking, link) {
            if (tracking.googleAnalytics.enabled) {
                link.addEventListener('click', function () {
                    if (typeof gtag === 'function') {
                        gtag('event', 'gty_whatsapp_button_click');
                    } else {
                        console.error('GTY WACB: Google Analytics Tracking unavailable, Google Analytics tag (gtag) not found.');
                    }
                });
            }

            if (tracking.metaPixel.enabled) {
                link.addEventListener('click', function () {
                    if (typeof fbq === 'function') {
                        fbq('trackCustom', 'gty_whatsapp_button_click');
                    } else {
                        console.error('GTY WACB: Meta Pixel Tracking unavailable, Meta Pixel tag (fbq) not found.');
                    }
                });
            }
        }

        applyVariables(message) {
            const replacements = {
                "current_url": function () {
                    return window.location.href;
                }
            }

            for (let [placeholder, replacement] of Object.entries(replacements)) {
                message = message.replace(new RegExp(`\\{\\{\\s*${placeholder.replace(/\s+/g, '\\s*')}\\s*\\}\\}`, 'g'), replacement);
            }

            return message
        }

        getWrapper(zIndex) {
            const wrapper = document.createElement('template');

            // Check button placement to set flex direction
            const isRightAligned = this.config.appearance.placement.position === 'bottomRight';
            const flexDirection = isRightAligned ? 'row' : 'row-reverse';

            wrapper.innerHTML = `
        <style>
          .gty-wacb-wrapper {
            display: inline-flex;
            align-items: flex-start;
            flex-direction: ${flexDirection};
            z-index: ${zIndex};
            position: fixed;
          }
        </style>

        <div class="gty-wacb-wrapper"></div>`;

            return wrapper;
        }

        getNotificationBadge(enabled, count, link) {
            const notificationBadge = document.createElement('template');

            if (!enabled || count <= 0) {
                return notificationBadge;
            }

            notificationBadge.innerHTML = `
        <style>
          .gty-wacb-notification-badge {
            height: 20px;
            min-width: 8px;
            background-color: #FF0303;
            font-size: 12px;
            color: #fff;
            text-decoration: none;
            border-radius: 10px;
            position: absolute;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 6px;
            padding-right: 6px;
          }
        </style>

        <a href="${link}" class="gty-wacb-notification-badge" aria-label="Contact us on WhatsApp" target="_blank">${count}</a>`;

            return notificationBadge;
        }

        getGreetingMessage(enabled, text, link) {
            const greetingMessage = document.createElement('template');

            if (!enabled || !text) {
                return greetingMessage;
            }

            // Check button placement to position message correctly
            const isRightAligned = this.config.appearance.placement.position === 'bottomRight';

            if (isRightAligned) {
                // Button is on the right - message should be on the left side with arrow pointing right
                greetingMessage.innerHTML = `
            <style>
              .gty-wacb-greeting-message {
                position: relative;
                background-color: #E0F6CA;
                color: #000;
                border-radius: 6px 0 6px 6px;
                font-size: 12px;
                text-decoration: none;
                margin-right: 12px;
                line-height: 32px;
                padding: 0 8px;
              }

              .gty-wacb-greeting-message::after {
                content: "";
                position: absolute;
                top: 0;
                left: 100%;
                width: 0;
                border-top: 12px solid #E0F6CA;
                border-left: 0px solid transparent;
                border-right: 7px solid transparent;
              }
            </style>

            <a href="${link}" class="gty-wacb-greeting-message" target="_blank">
              ${text}
            </a>`;
            } else {
                // Button is on the left - message should be on the right side with arrow pointing left
                greetingMessage.innerHTML = `
            <style>
              .gty-wacb-greeting-message {
                position: relative;
                background-color: #E0F6CA;
                color: #000;
                border-radius: 0 6px 6px 6px;
                font-size: 12px;
                text-decoration: none;
                margin-left: 12px;
                line-height: 32px;
                padding: 0 8px;
              }

              .gty-wacb-greeting-message::after {
                content: "";
                position: absolute;
                top: 0;
                right: 100%;
                width: 0;
                border-top: 12px solid #E0F6CA;
                border-right: 0px solid transparent;
                border-left: 7px solid transparent;
              }
            </style>

            <a href="${link}" class="gty-wacb-greeting-message" target="_blank">
              ${text}
            </a>`;
            }

            return greetingMessage;
        }

        getButton(type, link, colors, agentImage = false, buttonText = false) {
            let button = document.createElement('template');

            if (type == "logoTextButton" && !buttonText) {
                return button;
            }

            switch (type) {
                case "logoTextButton":
                    button.innerHTML = `
              <style>
                .gty-wacb-button {
                  background-color: ${colors.background};
                  text-decoration: none;
                  border-radius: 23px;
                  height: 46px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-shrink: 0;
                  padding-left: 16px;
                  padding-right: 16px;
                }

                .gty-wacb-button-logo {
                  margin-right: 8px;
                  width: 30px;
                  height: 30px;
                }

                .gty-wacb-button-text {
                  font-size: 16px;
                  color: ${colors.text};
                }

                .gty-wacb-notification-badge {
                  margin-top: -4px;
                  margin-right: -4px;
                }
              </style>

              <a href="${link}" class="gty-wacb-button" target="_blank">
                <svg class="gty-wacb-button-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.2071 4.65C24.2143 1.65 20.2286 0 15.9929 0C7.25 0 0.135714 7.11429 0.135714 15.8571C0.135714 18.65 0.864286 21.3786 2.25 23.7857L0 32L8.40714 29.7929C10.7214 31.0571 13.3286 31.7214 15.9857 31.7214H15.9929C24.7286 31.7214 32 24.6071 32 15.8643C32 11.6286 30.2 7.65 27.2071 4.65ZM15.9929 29.05C13.6214 29.05 11.3 28.4143 9.27857 27.2143L8.8 26.9286L3.81429 28.2357L5.14286 23.3714L4.82857 22.8714C3.50714 20.7714 2.81429 18.35 2.81429 15.8571C2.81429 8.59286 8.72857 2.67857 16 2.67857C19.5214 2.67857 22.8286 4.05 25.3143 6.54286C27.8 9.03572 29.3286 12.3429 29.3214 15.8643C29.3214 23.1357 23.2571 29.05 15.9929 29.05ZM23.2214 19.1786C22.8286 18.9786 20.8786 18.0214 20.5143 17.8929C20.15 17.7571 19.8857 17.6929 19.6214 18.0929C19.3571 18.4929 18.6 19.3786 18.3643 19.65C18.1357 19.9143 17.9 19.95 17.5071 19.75C15.1786 18.5857 13.65 17.6714 12.1143 15.0357C11.7071 14.3357 12.5214 14.3857 13.2786 12.8714C13.4071 12.6071 13.3429 12.3786 13.2429 12.1786C13.1429 11.9786 12.35 10.0286 12.0214 9.23571C11.7 8.46429 11.3714 8.57143 11.1286 8.55714C10.9 8.54286 10.6357 8.54286 10.3714 8.54286C10.1071 8.54286 9.67857 8.64286 9.31429 9.03572C8.95 9.43571 7.92857 10.3929 7.92857 12.3429C7.92857 14.2929 9.35 16.1786 9.54286 16.4429C9.74286 16.7071 12.3357 20.7071 16.3143 22.4286C18.8286 23.5143 19.8143 23.6071 21.0714 23.4214C21.8357 23.3071 23.4143 22.4643 23.7429 21.5357C24.0714 20.6071 24.0714 19.8143 23.9714 19.65C23.8786 19.4714 23.6143 19.3714 23.2214 19.1786Z" fill="${colors.icon}"/>
                </svg>
                <div class="gty-wacb-button-text">${buttonText}</div>
              </a>`;
                    break;
                case "logoCircleButton":
                    button.innerHTML = `
              <style>
                .gty-wacb-button {
                  background-color: ${colors.background};
                  text-decoration: none;
                  border-radius: 100%;
                  width: 64px;
                  height: 64px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-shrink: 0;
                }
              </style>

              <a href="${link}" class="gty-wacb-button" target="_blank" aria-label="Contact us on WhatsApp">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.2071 4.65C24.2143 1.65 20.2286 0 15.9929 0C7.25 0 0.135714 7.11429 0.135714 15.8571C0.135714 18.65 0.864286 21.3786 2.25 23.7857L0 32L8.40714 29.7929C10.7214 31.0571 13.3286 31.7214 15.9857 31.7214H15.9929C24.7286 31.7214 32 24.6071 32 15.8643C32 11.6286 30.2 7.65 27.2071 4.65ZM15.9929 29.05C13.6214 29.05 11.3 28.4143 9.27857 27.2143L8.8 26.9286L3.81429 28.2357L5.14286 23.3714L4.82857 22.8714C3.50714 20.7714 2.81429 18.35 2.81429 15.8571C2.81429 8.59286 8.72857 2.67857 16 2.67857C19.5214 2.67857 22.8286 4.05 25.3143 6.54286C27.8 9.03572 29.3286 12.3429 29.3214 15.8643C29.3214 23.1357 23.2571 29.05 15.9929 29.05ZM23.2214 19.1786C22.8286 18.9786 20.8786 18.0214 20.5143 17.8929C20.15 17.7571 19.8857 17.6929 19.6214 18.0929C19.3571 18.4929 18.6 19.3786 18.3643 19.65C18.1357 19.9143 17.9 19.95 17.5071 19.75C15.1786 18.5857 13.65 17.6714 12.1143 15.0357C11.7071 14.3357 12.5214 14.3857 13.2786 12.8714C13.4071 12.6071 13.3429 12.3786 13.2429 12.1786C13.1429 11.9786 12.35 10.0286 12.0214 9.23571C11.7 8.46429 11.3714 8.57143 11.1286 8.55714C10.9 8.54286 10.6357 8.54286 10.3714 8.54286C10.1071 8.54286 9.67857 8.64286 9.31429 9.03572C8.95 9.43571 7.92857 10.3929 7.92857 12.3429C7.92857 14.2929 9.35 16.1786 9.54286 16.4429C9.74286 16.7071 12.3357 20.7071 16.3143 22.4286C18.8286 23.5143 19.8143 23.6071 21.0714 23.4214C21.8357 23.3071 23.4143 22.4643 23.7429 21.5357C24.0714 20.6071 24.0714 19.8143 23.9714 19.65C23.8786 19.4714 23.6143 19.3714 23.2214 19.1786Z" fill="${colors.icon}"/>
                </svg>
              </a>`;
                    break;
                case "agentCircleButton":
                    button.innerHTML = `
              <style>
                .gty-wacb-button {
                  border-radius: 100%;
                  text-decoration: none;
                  width: 64px;
                  height: 64px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-shrink: 0;
                }

                .gty-wacb-button-agent-image {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 50%;
                }

                .gty-wacb-button-logo {
                  width: 10px;
                  height: 10px;
                  padding: 5px;
                  position: absolute;
                  bottom: 0;
                  right: 0;
                  background-color: ${colors.background};
                  border-radius: 100%;
                }
              </style>

              <a href="${link}" class="gty-wacb-button" target="_blank" aria-label="Contact us on WhatsApp" data-agent-button="true">
                <img class="gty-wacb-button-agent-image" src="${agentImage}"/>
                <svg class="gty-wacb-button-logo" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.2071 4.65C24.2143 1.65 20.2286 0 15.9929 0C7.25 0 0.135714 7.11429 0.135714 15.8571C0.135714 18.65 0.864286 21.3786 2.25 23.7857L0 32L8.40714 29.7929C10.7214 31.0571 13.3286 31.7214 15.9857 31.7214H15.9929C24.7286 31.7214 32 24.6071 32 15.8643C32 11.6286 30.2 7.65 27.2071 4.65ZM15.9929 29.05C13.6214 29.05 11.3 28.4143 9.27857 27.2143L8.8 26.9286L3.81429 28.2357L5.14286 23.3714L4.82857 22.8714C3.50714 20.7714 2.81429 18.35 2.81429 15.8571C2.81429 8.59286 8.72857 2.67857 16 2.67857C19.5214 2.67857 22.8286 4.05 25.3143 6.54286C27.8 9.03572 29.3286 12.3429 29.3214 15.8643C29.3214 23.1357 23.2571 29.05 15.9929 29.05ZM23.2214 19.1786C22.8286 18.9786 20.8786 18.0214 20.5143 17.8929C20.15 17.7571 19.8857 17.6929 19.6214 18.0929C19.3571 18.4929 18.6 19.3786 18.3643 19.65C18.1357 19.9143 17.9 19.95 17.5071 19.75C15.1786 18.5857 13.65 17.6714 12.1143 15.0357C11.7071 14.3357 12.5214 14.3857 13.2786 12.8714C13.4071 12.6071 13.3429 12.3786 13.2429 12.1786C13.1429 11.9786 12.35 10.0286 12.0214 9.23571C11.7 8.46429 11.3714 8.57143 11.1286 8.55714C10.9 8.54286 10.6357 8.54286 10.3714 8.54286C10.1071 8.54286 9.67857 8.64286 9.31429 9.03572C8.95 9.43571 7.92857 10.3929 7.92857 12.3429C7.92857 14.2929 9.35 16.1786 9.54286 16.4429C9.74286 16.7071 12.3357 20.7071 16.3143 22.4286C18.8286 23.5143 19.8143 23.6071 21.0714 23.4214C21.8357 23.3071 23.4143 22.4643 23.7429 21.5357C24.0714 20.6071 24.0714 19.8143 23.9714 19.65C23.8786 19.4714 23.6143 19.3714 23.2214 19.1786Z" fill="${colors.icon}"/>
                </svg>
              </a>`;

                    break;
            }

            return button;
        }

        getVisibilityStyle(showOnMobile, showOnDesktop) {
            const style = document.createElement("style");
            let styleContent = "";

            if (showOnMobile == false) {
                styleContent += `
        @media (max-width: 767px) {
          .gty-wacb-wrapper {
            display: none;
          }
        }`
            }

            if (showOnDesktop == false) {
                styleContent += `
        @media (min-width: 768px) {
          .gty-wacb-wrapper {
            display: none;
          }
        }`
            }

            style.textContent = styleContent;

            return style;
        }

        getPlacementStyle(position, spacing) {
            const style = document.createElement("style");

            let styleContent = `
            .gty-wacb-wrapper {
        bottom: ${spacing.bottom}px;`

            switch (position) {
                case "bottomLeft":
                    styleContent += `left: ${spacing.left}px;`
                    break;
                case "bottomRight":
                    styleContent += `right: ${spacing.right}px;`
                    break;
            }

            styleContent += `}`

            style.textContent = styleContent;

            return style;
        }

        getSizeStyle(size, position) {
            const style = document.createElement("style");

            const sizes = {
                "small": 0.75,
                "medium": 1,
                "large": 1.25
            };

            let styleContent = `
          .gty-wacb-wrapper {
            transform: scale(${sizes[size]});`;

            switch (position) {
                case "bottomLeft":
                    styleContent += `transform-origin: left bottom;`;
                    break;
                case "bottomRight":
                    styleContent += `transform-origin: right bottom;`;
                    break;
            }

            styleContent += `}`;

            style.textContent = styleContent;

            return style;
        }

        getCustomCSSStyle(customCSS) {
            const style = document.createElement("style");

            if (!customCSS) {
                return style;
            }

            style.textContent = customCSS;

            return style;
        }

        getWhatsAppLink(phoneNumber, message, variables) {
            if (!phoneNumber) {
                throw ('phoneNumber missing')
            }

            let link = new URL("https://wa.me/");

            link.pathname = phoneNumber;

            if (message) {
                if (variables) {
                    message = this.applyVariables(message);
                }

                link.searchParams.append("text", message);
            }

            return link;
        }

        // Business Hours functionality
        isWithinBusinessHours() {

            if (!this.config.enhancements || !this.config.enhancements.businessHours) {
                return true;
            }

            const config = this.config.enhancements.businessHours;

            if (!config.enabled) {
                return true;
            }

            const now = new Date();
            const timezone = config.timezone || 'UTC';

            // Get current time in specified timezone
            const options = { timeZone: timezone, hour12: false };
            const timeStr = now.toLocaleTimeString('en-US', options);
            const [hours, minutes] = timeStr.split(':').map(Number);
            const currentMinutes = hours * 60 + minutes;

            // Parse start and end times
            const [startHour, startMin] = config.startTime.split(':').map(Number);
            const [endHour, endMin] = config.endTime.split(':').map(Number);
            const startMinutes = startHour * 60 + startMin;
            const endMinutes = endHour * 60 + endMin;

            // Check day of week
            const dayName = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: timezone });

            if (!config.days.includes(dayName)) {
                return false;
            }

            // Check time
            let withinHours;
            if (endMinutes >= startMinutes) {
                // Normal case: business hours don't cross midnight
                withinHours = currentMinutes >= startMinutes && currentMinutes < endMinutes;
            } else {
                // Business hours cross midnight
                withinHours = currentMinutes >= startMinutes || currentMinutes < endMinutes;
            }

            return withinHours;
        }

        // Page Exclusion functionality
        shouldExcludeCurrentPage() {
            if (!this.config.enhancements || !this.config.enhancements.pageExclusion) {
                return false;
            }

            const config = this.config.enhancements.pageExclusion;

            if (!config.enabled) {
                return false;
            }

            const currentPath = window.location.pathname.toLowerCase();
            const currentUrl = window.location.href.toLowerCase();

            // Check predefined page types
            if (config.excludeHomepage && (currentPath === '/' || currentPath === '')) {
                return true;
            }

            if (config.excludeProducts && (currentPath.startsWith('/products/') || currentPath.includes('/products/'))) {
                return true;
            }

            if (config.excludeCollections && (currentPath.startsWith('/collections/') || currentPath.includes('/collections/'))) {
                return true;
            }

            if (config.excludePages && (currentPath.startsWith('/pages/') || currentPath.includes('/pages/'))) {
                return true;
            }

            if (config.excludeCart && (currentPath === '/cart' || currentPath.startsWith('/cart/') || currentPath.includes('/cart'))) {
                return true;
            }

            if (config.excludeCheckout && (
                currentPath.includes('/checkout') ||
                currentPath.includes('/thank_you') ||
                currentPath.includes('/orders/') ||
                currentUrl.includes('checkout') ||
                currentUrl.includes('thank_you')
            )) {
                return true;
            }

            // Check custom URL patterns
            if (config.customUrls && Array.isArray(config.customUrls)) {
                for (const urlPattern of config.customUrls) {
                    if (urlPattern && urlPattern.trim()) {
                        const pattern = urlPattern.trim().toLowerCase();
                        // Check if current path or URL contains the pattern
                        if (currentPath.includes(pattern) || currentUrl.includes(pattern)) {
                            return true;
                        }
                    }
                }
            }

            return false;
        }

        // Multi-language support
        getLocalizedTexts() {
            if (!this.config.enhancements || !this.config.enhancements.multiLanguage || !this.config.enhancements.multiLanguage.enabled) {
                return {};
            }

            const detectionMethod = this.config.enhancements.multiLanguage.detectionMethod || 'browser';
            let detectedLang = '';

            if (detectionMethod === 'shopify') {
                // Try to get Shopify's selected language from various sources
                detectedLang = this.getShopifyLanguage();
            }

            // Fallback to browser language if Shopify language not available
            if (!detectedLang) {
                detectedLang = navigator.language || navigator.userLanguage;
            }

            const langCode = detectedLang.split('-')[0]; // Get primary language code
            const translations = this.config.enhancements.multiLanguage.translations;

            // Check for exact match first, then language family
            let translation = translations[detectedLang] || translations[langCode];

            // If no translation found, check for language family matches
            if (!translation) {
                for (const [key, value] of Object.entries(translations)) {
                    if (key.startsWith(langCode + '-') || key.split('-')[0] === langCode) {
                        translation = value;
                        break;
                    }
                }
            }

            return translation || {};
        }

        getShopifyLanguage() {
            // Method 1: Check if Shopify.locale is available (newer themes)
            if (typeof Shopify !== 'undefined' && Shopify.locale) {
                return Shopify.locale;
            }

            // Method 2: Check for localization object in the page
            if (typeof window.localization !== 'undefined' && window.localization.language) {
                return window.localization.language;
            }

            // Method 3: Check HTML lang attribute set by Shopify
            const htmlLang = document.documentElement.getAttribute('lang');
            if (htmlLang) {
                return htmlLang;
            }

            // Method 4: Parse from URL (for market-specific URLs)
            const pathSegments = window.location.pathname.split('/');
            const possibleLangCode = pathSegments[1];
            if (possibleLangCode && possibleLangCode.length === 2) {
                return possibleLangCode;
            }

            return '';
        }

        // Popup functionality
        initializePopup() {
            if (!this.config.enhancements || !this.config.enhancements.popup) return;
            const config = this.config.enhancements.popup;
            const self = this;
            let hasShown = false;
            let exitIntentTimer = null;

            // Check if should only show once
            if (config.showOnce && sessionStorage.getItem('gty-popup-shown')) {
                return;
            }

            const showPopup = () => {
                if (hasShown) return;
                hasShown = true;

                if (config.showOnce) {
                    sessionStorage.setItem('gty-popup-shown', 'true');
                }

                // Create popup with custom styling
                const styling = (this.config.enhancements && this.config.enhancements.popup && this.config.enhancements.popup.styling) || {
                    backgroundColor: '#ffffff',
                    textColor: '#333333',
                    primaryButtonColor: '#25D366',
                    primaryButtonTextColor: '#ffffff',
                    secondaryButtonColor: '#cccccc',
                    secondaryButtonTextColor: '#333333',
                    overlayColor: 'rgba(0,0,0,0.5)',
                    borderRadius: '10',
                    shadowColor: 'rgba(0,0,0,0.3)',
                };


                // Create overlay
                const overlay = document.createElement('div');
                overlay.style.cssText = `
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100% !important;
                    height: 100% !important;
                    background: ${styling.overlayColor} !important;
                    z-index: 999998 !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    border: none !important;
                    display: block !important;
                `;

                const popup = document.createElement('div');
                popup.style.cssText = `
                    position: fixed !important;
                    top: 50% !important;
                    left: 50% !important;
                    transform: translate(-50%, -50%) !important;
                    background: ${styling.backgroundColor} !important;
                    padding: 30px !important;
                    border-radius: ${styling.borderRadius}px !important;
                    box-shadow: 0 10px 40px ${styling.shadowColor} !important;
                    z-index: 999999 !important;
                    max-width: 400px !important;
                    text-align: center !important;
                    display: block !important;
                    margin: 0 !important;
                    border: 1px solid #ddd !important;
                `;

                popup.innerHTML = `
                    <p style="margin: 0 0 20px 0; font-size: 18px; color: ${styling.textColor};">${self.popupTexts.message}</p>
                    <button style="
                        background: ${styling.primaryButtonColor};
                        color: ${styling.primaryButtonTextColor};
                        border: none;
                        padding: 12px 24px;
                        border-radius: 5px;
                        font-size: 16px;
                        cursor: pointer;
                        margin-right: 10px;
                        transition: opacity 0.2s;
                    " onclick="window.open('${self.getWhatsAppLink(self.config.general.phoneNumber, self.config.general.prefilledMessage.enabled ? self.config.general.prefilledMessage.text : false, self.config.general.prefilledMessage.variables)}', '_blank'); document.body.removeChild(document.querySelector('[data-popup-overlay]')); this.parentElement.remove();" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                        ${self.popupTexts.buttonText}
                    </button>
                    <button style="
                        background: ${styling.secondaryButtonColor};
                        color: ${styling.secondaryButtonTextColor};
                        border: none;
                        padding: 12px 24px;
                        border-radius: 5px;
                        font-size: 16px;
                        cursor: pointer;
                        transition: opacity 0.2s;
                    " onclick="document.body.removeChild(document.querySelector('[data-popup-overlay]')); this.parentElement.remove();" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
                        ${self.popupTexts.closeText}
                    </button>
                `;

                // Add data attribute for easy removal
                overlay.setAttribute('data-popup-overlay', 'true');

                document.body.appendChild(overlay);
                document.body.appendChild(popup);

            };

            // Different trigger types
            if (config.triggerType === 'mouseleave') {
                document.addEventListener('mouseout', (e) => {
                    if (e.clientY <= 0 && !hasShown) {
                        showPopup();
                    }
                });
            } else if (config.triggerType === 'timer') {
                exitIntentTimer = setTimeout(() => {
                    showPopup();
                }, config.delay * 1000);
            } else if (config.triggerType === 'scroll') {
                let scrollTimer;
                window.addEventListener('scroll', () => {
                    clearTimeout(scrollTimer);
                    scrollTimer = setTimeout(() => {
                        const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
                        if (scrollPercent > 0.5 && !hasShown) {
                            showPopup();
                        }
                    }, 150);
                });
            }
        }
    }

    window.customElements.define('gty-whatsapp-chat-button', GTYWhatsAppChatButton);

    document.body.appendChild(new GTYWhatsAppChatButton);
}());
