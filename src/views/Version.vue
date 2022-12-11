<template>
    <div class="ml-2" :style="{ color : 'black' }"> Version {{versionString}}</div>
</template>

<script>
import versionFile from '../../version.txt';
export default {
  name: 'Version',
  computed: {
    versionString() {
      return versionFile.toString();
    },
    versionIntsArr() {
      let versionArrayOfInts = this.versionString.split(".").map(Number);
      return versionArrayOfInts;
    },
    versionColor() {
      return this.versionIntsArr[0] == 0 ? 'darkorange' : 'black';
    },
    versionText() {
      if (this.versionIntsArr[0] == 0){
        return `${this.versionString} - Warning: Project still in Beta`;
      }
      return this.versionString;
    },
  }
}
</script>
