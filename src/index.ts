import "./config/dotenv";
import { server, port, origin } from "./shared/infra/server";

import connection from "./shared/infra/database/index";

server.listen(port, () => {
  console.log(`Server listening on port ${port} and origin ${origin.origin}}`);
  connection();
});
