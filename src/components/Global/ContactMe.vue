<script setup>
</script>

<template>
  <a class="contact-btn activate" href="mailto:kevin95cassar@gmail.com">
    <span>
      <img src="../../assets/img/mail.svg">
    </span>
    <img class="contact-text" src="../../assets/img/contact.svg">
  </a>
</template>

<style lang="scss">
.contact-btn {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -100px auto 40px;
  position: relative;
  cursor: pointer;
  z-index: 5;

  &:hover {
    span {
      animation: pulse 2s infinite;
    }
  }

  .contact-text {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 100%;
    animation: spin 10s linear infinite;
  }

  span {
    width: 85px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(var(--v-yellow));
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -khtml-border-radius: 50%;
    transition: all .3s ease;
  }
}

@media screen and (min-width: 768px) {
  .contact-btn {
    width: 160px;
    height: 160px;
    margin: -280px auto 40px;

    span {
      width: 115px;
      height: 115px;

      img {
        width: 57px;
        height: 57px;
      }
    }

    .contact-text {
      width: 160px;
      height: 160px;
    }
  }
}

@media screen and (min-width: 992px) {
  .contact-btn {
    width: 160px;
    height: 160px;
    transform: scale(1.6);
  }
}

@media screen and (min-width: 1400px) {
  .contact-btn {
    transform: scale(1.8);
  }
}

@media screen and (min-width: 1600px) {
  .contact-btn {
    transform: scale(2);
  }
}
</style>