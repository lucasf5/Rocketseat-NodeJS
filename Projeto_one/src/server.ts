import app from "./app";

const PORT = process.env.PORT || 3333;

app.listen(3333, () => {
  console.log(`Escutando na porta ${PORT}`);
});
