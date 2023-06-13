import CustomCarousel from '@/components/org-carrosel'
import { ProductCard } from '@/components/product.component'
import { Separator } from '@/components/utils.component'

const data = [
  {
    id: '1',
    name: 'Azul',
    description:
      'Lançado em 2018, Azul se tornou um dos jogos mais populares do ano, vencendo inclusive o maior prêmio de jogo do ano do mundo, o prestigiado Spiel des Jahres.',
    priceInCash: '200,00',
    paymentInInstallments: '20,00',
    numberOfInstallments: '10',
    productUrl:
      'https://static3.tcdn.com.br/img/img_prod/460977/jogo_de_tabuleiro_azul_galapagos_jogos_cd_42886_1_20190416185748.jpg',
  },
  {
    id: '2',
    name: 'Stardew Valley',
    description:
      'Lançado em 2018, Azul se tornou um dos jogos mais populares do ano, vencendo inclusive o maior prêmio de jogo do ano do mundo, o prestigiado Spiel des Jahres.',
    priceInCash: '220,00',
    paymentInInstallments: '23,00',
    numberOfInstallments: '10',
    productUrl:
      'https://cdn.shopify.com/s/files/1/0489/4985/4364/products/boxshotsmaller_530x@2x.png?v=1601235750',
  },
  {
    id: '3',
    name: 'Azul',
    description:
      'Lançado em 2018, Azul se tornou um dos jogos mais populares do ano, vencendo inclusive o maior prêmio de jogo do ano do mundo, o prestigiado Spiel des Jahres.',
    priceInCash: '200,00',
    paymentInInstallments: '20,00',
    numberOfInstallments: '10',
    productUrl:
      'https://static3.tcdn.com.br/img/img_prod/460977/jogo_de_tabuleiro_azul_galapagos_jogos_cd_42886_1_20190416185748.jpg',
  },
  {
    id: '4',
    name: 'Dixt',
    description:
      'Lançado em 2018, Azul se tornou um dos jogos mais populares do ano, vencendo inclusive o maior prêmio de jogo do ano do mundo, o prestigiado Spiel des Jahres.',
    priceInCash: '220,00',
    paymentInInstallments: '23,00',
    numberOfInstallments: '10',
    productUrl:
      'https://cdn.shopify.com/s/files/1/0489/4985/4364/products/boxshotsmaller_530x@2x.png?v=1601235750',
  },
  {
    id: '5',
    name: 'Azul',
    description:
      'Lançado em 2018, Azul se tornou um dos jogos mais populares do ano, vencendo inclusive o maior prêmio de jogo do ano do mundo, o prestigiado Spiel des Jahres.',
    priceInCash: '200,00',
    paymentInInstallments: '20,00',
    numberOfInstallments: '10',
    productUrl:
      'https://static3.tcdn.com.br/img/img_prod/460977/jogo_de_tabuleiro_azul_galapagos_jogos_cd_42886_1_20190416185748.jpg',
  },
  {
    id: '6',
    name: 'Dixt',
    description:
      'Lançado em 2018, Azul se tornou um dos jogos mais populares do ano, vencendo inclusive o maior prêmio de jogo do ano do mundo, o prestigiado Spiel des Jahres.',
    priceInCash: '220,00',
    paymentInInstallments: '23,00',
    numberOfInstallments: '10',
    productUrl:
      'https://static3.tcdn.com.br/img/img_prod/460977/jogo_de_tabuleiro_azul_galapagos_jogos_cd_42886_1_20190416185748.jpg',
  },
]

export default function Home() {
  return (
    <>
      <CustomCarousel />
      <Separator />
      <div className="container mx-auto">
        <div className="max-w-8xl grid grid-cols-3">
          {data.map((d) => {
            return (
              <ProductCard
                key={d.id}
                name={d.name}
                description={d.description}
                priceInCash={d.priceInCash}
                paymentInInstallments={d.paymentInInstallments}
                numberOfInstallments={d.numberOfInstallments.length}
                productUrl={d.productUrl}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
