<template>
  <div class="flower-area">
    <div class="petal"/>
    <div class="petal"/>
    <div class="petal"/>
    <div class="petal"/>
    <div class="petal"/>
    <div class="petal"/>
    <div class="petal"/>
    <div class="petal"/>
    <div class="petal"/>
    <div class="petal"/>
  </div>
</template>

<script>
export default {
  name: "FlowerFrame"
}
</script>

<style scoped>
.flower-area {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, #ff7cd3, #ff6498);
}

.petal {
  top: -10%;
  width: 7%;
  aspect-ratio: 1;
  border-radius: 100% 0 100% 0;
  position: relative;
  background-color: white;
}

.petal::after {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 100% 0 100% 0;
  transform: rotate(17deg);
  transform-origin: bottom left;
}


.petal:nth-child(2n)::after {
  transform-origin: top right;
  transform: rotate(20deg);
}


.flower-area .petal:nth-child(1) {
  transform: rotate(180deg);
  left: 5%;
  animation: 7s linear .5s infinite running gravity,
  2.9s ease-in-out infinite alternate swing;
  opacity: 60%;
}

.flower-area .petal:nth-child(2) {
  left: 16%;
  animation: 7s linear .5s infinite running gravity,
  3.1s ease-in-out infinite alternate swing1;
  opacity: 50%;
}

.flower-area .petal:nth-child(3) {
  left: 24%;
  animation: 6s linear .5s infinite running gravity,
  3.5s ease-in-out infinite alternate swing2;
  opacity: 60%;
}

.flower-area .petal:nth-child(4) {
  left: 38%;
  animation: 7s linear 4s infinite running gravity,
  3.2s ease-in-out infinite alternate swing;
  opacity: 60%;
}

.flower-area .petal:nth-child(5) {
  left: 45%;
  animation: 8s linear 1s infinite running gravity,
  2.5s ease-in-out infinite alternate swing1;
  opacity: 60%;
}

.flower-area .petal:nth-child(6) {
  left: 55%;
  animation: 5s linear 3s infinite running gravity,
  3s ease-in-out infinite alternate swing2;
  opacity: 60%;
}

.flower-area .petal:nth-child(7) {
  left: 67%;
  animation: 7.3s linear 5s infinite running gravity,
  3.5s ease-in-out infinite alternate swing;
  opacity: 45%;
}

.flower-area .petal:nth-child(8) {
  left: 80%;
  animation: 8.3s linear 1.5s infinite running gravity,
  5s ease-in-out infinite alternate swing1;
  opacity: 67%;
}

.flower-area .petal:nth-child(9) {
  left: 91%;
  animation: 6.8s linear .5s infinite running gravity,
  4.6s ease-in-out infinite alternate swing2;
  opacity: 70%;
}

.flower-area .petal:nth-child(10) {
  left: 97%;
  animation: 6.3s linear infinite running gravity,
  4.3s ease-in-out infinite alternate swing2;
  opacity: 40%;
}

.flower-area {
  position: relative;
}

.flower-area .petal {
  position: absolute;
}


@keyframes swing {
  from {
    transform-origin: 50% -300%;
    transform: rotate(-30deg);
  }
  to {
    transform-origin: 50% -400%;
    transform: rotate(45deg);
  }
}

@keyframes swing1 {
  from {
    transform-origin: 50% -600%;
    transform: rotate(-10deg);
  }
  to {
    transform-origin: 50% -800%;
    transform: rotate(55deg);
  }
}

@keyframes swing2 {
  from {
    transform-origin: 50% -1000%;
    transform: rotate(-30deg);
  }
  to {
    transform-origin: 50% -1200%;
    transform: rotate(30deg);
  }
}


@keyframes gravity {
  from {
    top: -10%;
  }
  to {
    top: 120%;
  }
}


</style>