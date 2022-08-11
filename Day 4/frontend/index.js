const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const urlMakanan = "http://localhost:7000/makanan";
    const urlMinuman = "http://localhost:7000/minuman";
    const makanan = ref([]);
    const minuman = ref([]);
    const div = document.getElementById("data");

    const getMakanan = async () => {
      const res = await axios.get(urlMakanan);
      makanan.value = res.data;
      minuman.value = [];
      console.log(makanan);
    };
    const getMinuman = async () => {
      const res = await axios.get(urlMinuman);
      minuman.value = res.data;
      makanan.value = [];
      console.log(makanan);
    };
    return {
      getMakanan,
      getMinuman,
      makanan,
      minuman,
      div,
    };
  },
});

app.mount("#app");
