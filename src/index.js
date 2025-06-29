import { server } from '@wppconnect-team/wppconnect-server';

// opcional: configurar porta via env
const port = process.env.PORT || 21465;

server({
  port,
  webhook: process.env.WEBHOOK_URL // se quiser callbacks
}).then(() => {
  console.log(`WPPConnect-Server rodando na porta ${port}`);
});
