const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      counterImg: 0,
      invertOrder: false,
      images: [
        {
          image: 'img/01.webp',
          title: "Marvel's Spiderman Miles Morales",
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        },
        {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        },
        {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        },
        {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        },
      ],
    };
  },
  methods: {
    showNextImage() {
      this.counterImg = (this.counterImg + 1) % this.images.length;
    },
    showPreviousImage() {
      this.counterImg = (this.counterImg - 1 + this.images.length) % this.images.length;
    },
    toggleOrder() {
      this.invertOrder = !this.invertOrder;
      if (this.invertOrder) {
        // Reverse the direction for showing images
        this.showNextImage = this.showPreviousImage;
        this.showPreviousImage = () => {
          this.counterImg = (this.counterImg + 1) % this.images.length;
        };
      } else {
        // Restore the original direction for showing images
        this.showPreviousImage = () => {
          this.counterImg = (this.counterImg - 1 + this.images.length) % this.images.length;
        };
        this.showNextImage = () => {
          this.counterImg = (this.counterImg + 1) % this.images.length;
        };
      }
    },
    handleThumbnailClick(index) {
      this.counterImg = index;
    },
  },
  mounted() {
    // Automatically change the image every 3 seconds
    setInterval(() => {
      this.showNextImage();
    }, 3000);
  },
});

app.mount('#app');