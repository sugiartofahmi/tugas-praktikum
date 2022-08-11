import express from "express";
import { PrismaClient } from "@prisma/client";
const database = new PrismaClient();
const app = express();
app.use(express.json());
const port = 8000;

//get Mahasiswa
app.get("/mahasiswa", async (req, res) => {
  try {
    const mahasiswa = await database.mahasiswa.findMany();
    if (!mahasiswa) throw new Error("Mahasiswa Tidak Ditemukan");
    res.send(mahasiswa);
  } catch (err) {
    res.send({ status: 404, message: err.message });
  }
});
//get Mahasiswa By Id
app.get("/mahasiswa/:id", async (req, res) => {
  try {
    const mahasiswa = await database.mahasiswa.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    if (!mahasiswa) throw new Error("Mahasiswa Tidak Ditemukan");
    res.send(mahasiswa);
  } catch (err) {
    res.send({ status: 404, err: err.message });
  }
});

//create data bahasiswa
app.post("/mahasiswa/create", async (req, res) => {
  try {
    const mahasiswa = await database.mahasiswa.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        nim: req.body.nim,
      },
    });
    if (!mahasiswa) throw new Error("Gagal Menambahakan Data");
    res.send({ message: "Data berhasil ditambahkan", data: mahasiswa });
  } catch (err) {
    res.send({ status: 404, err: err.message });
  }
});

app.listen(port, () => {
  console.log(`Aplikasi Berjalan di port ${port}`);
});
