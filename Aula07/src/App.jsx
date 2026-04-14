import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  const navigationLinks = [
    { label: 'Dicas', href: '#' },
    { label: 'Visitas', href: '#' },
    { label: 'Sobre', href: '#' },
  ]

  const post = {
    titulo: 'Minhas Dicas de Viagem',
    autor: 'Equipe Blog de Viagens',
    data: '2026-03-03',
    dataFormatada: '3 de marco de 2026',
    conteudo: [
      'Quando se trata de viajar economicamente, existem varias estrategias eficazes. Para passagens aereas baratas, compare precos em diferentes plataformas como Skyscanner e Google Flights e considere viajar em datas fora dos picos de turismo.',
      'Para hospedagem, plataformas como Airbnb e Booking oferecem opcoes economicas, especialmente se voce optar por compartilhar espacos. Outras dicas incluem usar transporte publico, comer em restaurantes locais, visitar atracoes gratuitas e viajar durante a baixa estacao.',
      'Planeje com antecedencia, mantenha flexibilidade nas datas e considere destinos menos turisticos para economizar ainda mais sem abrir mao de uma otima experiencia.',
    ],
    imagem: '/dicas-viagem.png',
    imagemAlt: 'Ilustracao com itens de viagem',
    legenda: 'Dicas praticas para viagens economicas',
  }

  const relatedPosts = [
    '10 Destinos Imperdiveis para 2026',
    'Como Economizar em Viagens Internacionais',
    'Melhores Aplicativos para Planejar Sua Viagem',
  ]

  return (
    <div className="app-shell">
      <Header title="Blog de Viagens" />
      <Navigation links={navigationLinks} />

      <main className="layout">
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          dataFormatada={post.dataFormatada}
          conteudo={post.conteudo}
          imagem={post.imagem}
          imagemAlt={post.imagemAlt}
          legenda={post.legenda}
        />
        <Sidebar posts={relatedPosts} />
      </main>

      <Footer text="Copyright 2026 Blog de Viagens. Todos os direitos reservados." />
    </div>
  )
}

export default App
