<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://github.com/TLSInventory" target="_blank">TLS Inventory</a>
    </div>
    <div class="ml-2">{{versionTxt}}</div>
    <div class="ml-auto">
      <span class="mr-1"></span>
      Template <a href="https://coreui.io/vue" target="_blank">CoreUI for Vue</a>,
      Icon <a href="https://thenounproject.com/icon/2631109/" target="_blank">Security by Adrien Coquet from the Noun Project</a>

    </div>
  </CFooter>
</template>

<script>
import versionFile from '../../version.txt';
export default {
  name: 'TheFooter',
  computed: {
    versionTxt() {
      let versionString = versionFile
      let versionArrayOfInts = versionString.toString().split(".").map(Number)
      if (versionArrayOfInts[0] == 0){
        return `${versionString} - Warning: Project still in Beta`;
      }
      return versionString;
    },
  }
}
</script>
