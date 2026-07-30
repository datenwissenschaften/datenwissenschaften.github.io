<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
</script>

<template>
  <div>
    <PageIntro
      title="Imprint &"
      accent="privacy."
      copy="Company information, intellectual property terms and data protection details for Dr. Franke Datenwissenschaften OÜ."
    >
      <template #eyebrow>Legal</template>
    </PageIntro>
    <section class="wrap legal-grid">
      <aside aria-label="Legal page navigation">
        <a href="#company">Company details</a>
        <a href="#intellectual-property">Intellectual property</a>
        <a href="#privacy">GDPR compliance</a>
        <a href="#rights">Your rights</a>
        <a href="#cookies">Cookies & third parties</a>
      </aside>
      <div class="legal-copy">
        <section id="company">
          <p class="eyebrow">Imprint</p>
          <h2>Company details</h2>
          <address>
            <strong>Dr. Franke Datenwissenschaften OÜ</strong><br />
            Sepapaja tn 6<br />
            15551 Tallinn<br />
            Estonia
          </address>
          <dl class="legal-facts">
            <div>
              <dt>Commercial Register Number</dt>
              <dd>16803592</dd>
            </div>
            <div>
              <dt>VAT Identification Number</dt>
              <dd>EE102649275</dd>
            </div>
            <div>
              <dt>Managing Director</dt>
              <dd>Dr. Martin Franke</dd>
            </div>
            <div>
              <dt>Responsible for Content</dt>
              <dd>Dr. Franke Datenwissenschaften OÜ</dd>
            </div>
          </dl>
          <h3>Contact</h3>
          <p>
            Email:
            <a href="mailto:martin.franke@datenwissenschaften.com">martin.franke@datenwissenschaften.com</a><br />
            Phone: <a href="tel:+35724030320">+357 24 030320</a>
          </p>
          <p>
            Dr. Franke Datenwissenschaften OÜ is a company registered in Estonia. This imprint provides
            the legally required company information in accordance with applicable European regulations.
            Please use the contact details above for any enquiries or concerns.
          </p>
        </section>

        <section id="intellectual-property">
          <p class="eyebrow">Legal notice</p>
          <h2>Intellectual property</h2>
          <h3>Copyright</h3>
          <p>
            The content, design and images on this website are the intellectual property of Dr. Franke
            Datenwissenschaften OÜ and are protected by applicable copyright laws. Any unauthorised use,
            reproduction or distribution of material from this website is prohibited.
          </p>
          <h3>Trademarks</h3>
          <p>
            Unless otherwise stated, all trademarks, service marks and trade names used on this website
            are the property of Dr. Franke Datenwissenschaften OÜ. Use of these marks without prior written
            permission may infringe applicable intellectual property laws.
          </p>
          <h3>Permitted use</h3>
          <p>
            Permission is granted to make electronic copies and print individual pages from this website
            solely for personal, non-commercial purposes. Any other use requires the prior written
            permission of Dr. Franke Datenwissenschaften OÜ.
          </p>
          <p>
            Questions about the use of website content may be directed to
            <a href="mailto:martin.franke@datenwissenschaften.com">martin.franke@datenwissenschaften.com</a>.
            Thank you for respecting our intellectual property rights.
          </p>
        </section>

        <section id="privacy">
          <p class="eyebrow">Data protection</p>
          <h2>GDPR compliance statement</h2>
          <p>
            Dr. Franke Datenwissenschaften OÜ is committed to protecting the privacy and security of
            personal data in accordance with the General Data Protection Regulation (GDPR) and other
            applicable data protection laws. The following principles guide how we collect, use and
            protect personal data.
          </p>
          <ol class="legal-principles">
            <li>
              <h3>Data collection and processing</h3>
              <p>
                We collect and process personal data only for specified, explicit and lawful purposes.
                Collection is limited to the information necessary for the intended purpose, and
                individuals are informed about how their data is processed.
              </p>
            </li>
            <li>
              <h3>Lawful basis for processing</h3>
              <p>
                Personal data is processed only where a lawful basis applies. Depending on the
                circumstances, this may include consent, performance of a contract, compliance with a
                legal obligation, protection of vital interests, performance of a task in the public
                interest or exercise of official authority, or legitimate interests pursued by the
                controller or a third party.
              </p>
            </li>
            <li>
              <h3>Data minimisation and retention</h3>
              <p>
                We limit the collection of personal data to what is adequate, relevant and necessary for
                the intended purpose. Personal data is retained only for as long as necessary to fulfil
                that purpose or meet applicable legal requirements.
              </p>
            </li>
            <li>
              <h3>Data accuracy</h3>
              <p>
                We take reasonable steps to keep personal data accurate and up to date. Individuals may
                request the correction of inaccurate or incomplete personal data concerning them.
              </p>
            </li>
            <li>
              <h3>Data security</h3>
              <p>
                We apply appropriate technical and organisational measures to protect personal data
                against unauthorised or unlawful processing and against accidental loss, destruction or
                damage.
              </p>
            </li>
          </ol>
        </section>

        <section id="rights">
          <p class="eyebrow">Data subjects</p>
          <h2>Your rights</h2>
          <ol class="legal-principles" start="6">
            <li>
              <h3>Individual rights</h3>
              <p>
                Subject to the conditions established by applicable law, individuals may have the right
                to access, rectify or erase their personal data; restrict or object to processing; and
                receive their data in a portable format. Where processing relies on consent, consent may
                be withdrawn at any time without affecting the lawfulness of processing carried out
                before withdrawal.
              </p>
            </li>
            <li>
              <h3>International data transfers</h3>
              <p>
                Where personal data is transferred to a third country or international organisation, we
                ensure that an appropriate transfer mechanism and adequate safeguards are in place as
                required by the GDPR.
              </p>
            </li>
            <li>
              <h3>Data Protection Officer</h3>
              <p>
                To ask a data protection question or exercise your rights, contact our Data Protection
                Officer, Dr. Martin Franke, at
                <a href="mailto:martin.franke@datenwissenschaften.com">martin.franke@datenwissenschaften.com</a>.
              </p>
            </li>
          </ol>
        </section>

        <section id="cookies">
          <p class="eyebrow">Website technology</p>
          <h2>Cookies & third-party services</h2>
          <ol class="legal-principles" start="9">
            <li>
              <h3>Cookies and local storage</h3>
              <p>
                This website does not currently use analytics or advertising cookies. It uses local
                browser storage to remember the visitor’s light or dark theme preference. This preference
                remains on the visitor’s device and can be removed through the browser settings.
              </p>
              <p>
                The website retrieves fonts from Google Fonts. When those resources are loaded, technical
                information such as the visitor’s IP address may be transmitted to Google. The external
                scheduling link opens Calendly in a separate website; Calendly’s own privacy and cookie
                terms apply once that service is opened.
              </p>
            </li>
            <li>
              <h3>Updates to this statement</h3>
              <p>
                This GDPR compliance statement may be updated periodically to reflect changes in our
                privacy practices, website functionality or applicable law. The current version will be
                published on this page.
              </p>
            </li>
          </ol>
          <p>
            Thank you for entrusting Dr. Franke Datenwissenschaften OÜ with your data. We are committed
            to maintaining high standards of data protection and privacy.
          </p>
          <p class="legal-date">
            Effective date: 11 December 2023<br />
            Last reviewed: 30 July 2026<br />
            © 2024–{{ new Date().getFullYear() }} Dr. Franke Datenwissenschaften OÜ. All rights reserved.
          </p>
        </section>
      </div>
    </section>
  </div>
</template>
