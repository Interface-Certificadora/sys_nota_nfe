import { redirect } from "next/navigation";




export default async function Home() {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  })
  redirect('https://redebrasilrp.com.br/')
  
  return (
   <>
   <p>Redirecionando...</p>
   </>
  );
};
