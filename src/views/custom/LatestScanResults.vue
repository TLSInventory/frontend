<template>
    <div>
        <h1>{{ msg }}</h1>

        <CCard bodyWrapper v-if="simplified_result && simplified_result.grade_reasons">
          <h3>Grade caps applied</h3>
          <CAlert color="primary" v-for="item in simplified_result.grade_reasons.split(', ')" :key="item.message">
            {{ item }}
          </CAlert>
        </CCard>

        <CCard v-if="last_scan_json.result">
            <h3>Information about certificates</h3>
            <div v-for="x in last_scan_json.result.certificate_information.received_certificate_chain_list.certificate_chain">
                <CertificateViewComponent
                    :certificate="x"
                ></CertificateViewComponent>
                <br>
                <hr>
            </div>
            <hr>

            <h3>Basic information about SSL/TLS support</h3>
            <SSLTLS
                :result="last_scan_json.result"
            ></SSLTLS>
            <hr>

            <CCard>
                <CCardHeader>
                    <CIcon :content="freeSetVar.cilCode"/> Technical information (even the information not yet shown above)
                    <div class="card-header-actions">
                        <CLink
                                class="card-header-action btn-minimize"
                                @click="show_technical_info_card=!show_technical_info_card"
                        >
                            <CIcon :name="`cil-chevron-${show_technical_info_card ? 'bottom' : 'top'}`"/>
                        </CLink>
                    </div>
                </CCardHeader>
                <CCollapse :show="show_technical_info_card">
                    <CCard v-if="show_technical_info_card" style="max-width: 90%; margin: auto;">
                        <pre class="m-0" style="text-align: left;">{{ last_scan_json }}</pre>
                    </CCard>
                </CCollapse>
            </CCard>
        </CCard>
    </div>
</template>
received_certificate_chain_list
<script>
    import {callGetResultForTarget} from "../../api";
    import CertificateViewComponent from "./CertificateViewComponent";
    import SSLTLS from "./SSLTLS";
    import {freeSet} from "@coreui/icons";

    export default {
        name: "latestScanResults",
        components: {SSLTLS, CertificateViewComponent},
        freeSet,
        props: {
            msg: String,
            target_id: {
                type: Number,
                default: -1
            },
        },
        data() {
            return {
                last_scan_json: "Not (yet?) received answer through main path of execution. Still very much WIP.",
                show_technical_info_card: false,
            }
        },
        mounted(){
            this.prefillFormToDefaultOrPassedValues()
        },
        watch: {
            // eslint-disable-next-line no-unused-vars
            target_id: function(newVal, oldVal) {
                this.prefillFormToDefaultOrPassedValues()
            }
        },
        methods: {
            prefillFormToDefaultOrPassedValues() {
                if (this.target_id < 0){
                    return;
                }
                let self = this
                callGetResultForTarget(this.target_id)
                    .then(function (response) {
                        self.last_scan_json = response.data
                    })
            },
        },
        computed: {
            simplified_result () {
              if (this.target_id === null || this.target_id < 0){
                return null;
              }
              let self = this
              let res = this.$store.getters.getUserTargets.filter(function(x) {
                return self.target_id === x.id;
              });
              if (res.empty) {
                console.warn("No simplified result for target?")
                return null;
              }
              return res[0]
            },
            freeSetVar(){
                return freeSet
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
        text-align: center;
        padding-bottom: 30px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
