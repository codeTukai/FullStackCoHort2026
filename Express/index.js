import express from "express";

const app = express();

function sum(n) {
  let ans = 0;

  for (let i = 0; i <= n; i++) {
    ans += i;
  }

  return ans;
}

app.get("/", (req, res) => {
  const n = parseInt(req.query.n);

  const ans = sum(n);

  res.send(`Hii there, your answer is ${ans}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});