const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const url = "http://localhost:7000";
    const kendaraan = ref([]);
    const name = ref("");
    const nim = ref("");
    const email = ref("");

    const submitMahasiswa = async () => {
      const res = await axios.get(url);
      kendaraan.value = res.data;
    };

    return {
      name,
      nim,
      email,
    };
  },
});

app.mount("#app");
