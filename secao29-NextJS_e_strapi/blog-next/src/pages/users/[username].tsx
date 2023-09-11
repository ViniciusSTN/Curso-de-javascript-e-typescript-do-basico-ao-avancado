// users/qualquer-coisa
// é possível recuperar o parâmetro enviado na rota

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Dinamic() {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <h1>Parâmetro: {router.query.username}</h1>
      <Link href="/">Voltar</Link>
    </>
  );
}
