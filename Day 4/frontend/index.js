const { createApp, ref, onMounted } = Vue;

const app = createApp({
  setup() {
    const url = "http://localhost:8000";
    const clearForm = () => {
      mahasiswa.name = "";
      mahasiswa.email = "";
      mahasiswa.nim = "";
    };
    const mahasiswa = ref({
      name: "",
      email: "",
      nim: "",
      errorMessage: [],
      isError: false,
    });

    const getMahasiswa = async () => {
      try {
        const resMahasiswa = await axios.get(url + "/mahasiswa");
        if (resMahasiswa.data.length === 0)
          throw new Error("Mahasiswa Tidak Ada");
        mahasiswa.value.list = resMahasiswa.data;
        return resMahasiswa.data;
      } catch (err) {
        mahasiswa.value.isError = true;
        mahasiswa.value.errorMessage = err.message;
      }
    };
    const submitMahasiswa = async () => {
      try {
        const post = await axios.post(url + "/mahasiswa/create", {
          name: mahasiswa.value.name,
          email: mahasiswa.value.email,
          nim: mahasiswa.value.nim,
        });

        mahasiswa.value.isError = false;
        if (!post) throw new Error("Gagal Menambahkan Data");
        clearForm();
        getMahasiswa();
      } catch (err) {
        mahasiswa.value.isError = true;
        mahasiswa.value.errorMessage = err.message;
      }
    };

    onMounted(async () => {
      await getMahasiswa();
    });
    return {
      clearForm,
      submitMahasiswa,
      getMahasiswa,
      mahasiswa,
    };
  },
});

app.mount("#app");
