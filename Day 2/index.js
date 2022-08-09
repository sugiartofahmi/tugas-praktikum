const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const url = "https://randomuser.me/api/";
    const profileUser = ref("");
    const firstName = ref("");
    const lastName = ref("");
    const getUser = async () => {
      const resUser = await axios.get(url);
      console.log(resUser);
      firstName.value = resUser.data.results[0].name.first;
      lastName.value = resUser.data.results[0].name.last;
      profileUser.value = resUser.data.results[0].picture.large;
    };
    return {
      getUser,
      profileUser,
      firstName,
      lastName,
    };
  },
});

app.mount("#app");
