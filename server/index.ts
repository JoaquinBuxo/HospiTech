const PORT = 4000;

import app from "./app.js";

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
