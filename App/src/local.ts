import { AddressInfo } from "net";
import app from './index'

if(process.env.NODE_ENV !== "serverless"){
  const server = app.listen(3001, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });
}
