const app = Vue.createApp({
  //data. functions, component template
  //template: "<h2> I am the template </h2>",
  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBook: true,
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          age: 45,
          img: "https://images.booksense.com/images/194/143/9788413143194.jpg",
          isFave: true,
        },
        {
          title: "Game of Thrones",
          author: "Sanderson Brandon",
          age: 45,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcv5YfEKeDkTlnENJQdiDM_7rlChZEru1MNQ&usqp=CAU",
          isFave: false,
        },
        {
          title: "Rich dad poor dad",
          author: "Robert Kyosaki",
          age: 45,
          img: "https://mrtns.eu/tovar/_l/1059/l1059003.jpg?v=16279039281",
          isFave: true,
        },
      ],
    };
  },
  methods: {
    handleShowBook() {
      this.showBook = !this.showBook;
    },
    handleBookClick(book) {
      book.isFave = !book.isFave;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFave);
    },
  },
});

app.mount("#app");
