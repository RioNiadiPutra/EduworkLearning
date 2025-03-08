const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
 // Agar tidak menampilkan folder testing 1 dan 2
  excludeSpecPattern: ["**/cypress/e2e/1-getting-started", "**/cypress/e2e/2-advanced-examples"],
 // setiap halaman testing yang digunakan menggunakan saucedemo.com 
  baseUrl: "http://www.saucedemo.com",
  // Koneksi berapa lama akan loadingnya
  defaultCommandTimeout: 2000,
  },
});
