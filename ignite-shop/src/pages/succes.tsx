import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccesProps {
  product: {
    name: string;
    imageUrl: string;
  };
  consumer: string;
}

export default function Success({ consumer, product }: SuccesProps) {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer>
        <Image src={product.imageUrl} width={130} height={145} alt="" />
      </ImageContainer>

      <p>
        Uhuul <strong>{consumer}</strong>, sua <strong>{product.name}</strong>{" "}
        já está a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const response = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  console.log(response);
  const consumer = response.customer_details?.name;
  const product = response.line_items?.data[0].price?.product as Stripe.Product;
  return {
    props: {
      consumer,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
