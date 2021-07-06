<template>
    <div class="wrapper" style="display: inline;">
    <CButton color="secondary" @click="modal1Visible = true" class="mr-1" size="sm">
        Privacy Policy
    </CButton>

    <CModal
            title="Privacy policy"
            :show.sync="modal1Visible"
            size="lg"
    >
      <h1>Privacy policy</h1>
      This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
      We use Your personal data to provide the services, that are part of TLSInventory.
      <h1>Who runs TLSInventory?</h1>
      This service is run as a personal project of Ondřej Borýsek, and is developed also by other contributors under a project from the Faculty of Informatics at Masaryk University.

      <h1>How to contact us?</h1>
      If you have any questions about your personal information, inquiries, or requests, contact me over email at <b><a href="mailto:tlsinventory+privacy@borysek.net">tlsinventory+privacy@borysek.net</a></b>

      <h1>Personal information</h1>
      This website collects and processes the following personal information:
      <ul>
        <li>Email address, username, password (all provided by the user during registration for authentication and notifications; stored until you cancel your account and then for 3 further months; the password is stored hashed)</li>
        <li>IP address, Browser user-agent, Country-level geolocation (collected as part of server logging; stored for at most 3 months)</li>
      </ul>
      Optionally, you can also provide us with further information, to enable additional notification channels:
      <ul>
        <li>Additional email addresses (same storage policy as for primary email address)</li>
        <li>Slack connection information (including channel ID and name, team ID and name, and access token)</li>
      </ul>
      All this information is stored on a secure and regularly updated virtual server hosted within the EU. As of July 6, 2021, we’re using provider DigitalOcean.

      <h2>Right of access</h2>
      You have the right to request access to all personal information collected about you by this website. To exercise this right contact us at the above-mentioned email.

      <h2>Right of rectification</h2>
      You have the right to request the correction of personal information to a current and correct state. To exercise this right either edit them using the website, using the API or contact us at the above-mentioned email.

      <h2>Right to erasure</h2>
      You have the right to request the removal of Your personal information. To exercise this right either contact us at the above-mentioned email.

      <h1>Purpose of processing</h1>
      <p>Personal information is processed in the electronic form to provide the service. Personal information is not used for other purposes and is not shared with third parties.</p>
      <p>Note that information collected by scanning websites is not considered personal and may be used for research and academic purposes. If You would prefer to keep even this data private use a self-hosted instance instead – that gives you full control over your data. The project is open-source with source code on GitHub.</p>


      This privacy policy replaces the previous privacy policy of the same scope.

      <template #footer>
        <div><!-- This hides default buttons. The div is needed, empty template doesn't work. --></div>
      </template>
    </CModal>
    </div>

</template>

<script>
    export default {
        name: "PrivacyPolicy",
        components: {},
        data () {
            return {
                modal1Visible: false,
            }
        }

    }
</script>

<style scoped>

</style>